import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/core/services/site/contact/contact.service';
import { NotifyService } from '../../notify/notify.services';


@Component({
  selector: 'app-contact-shared',
  templateUrl: './contact-shared.component.html',
  styleUrls: ['./contact-shared.component.scss']
})
export class ContactSharedComponent implements OnInit {

  contactForm !: FormGroup;

  //notify message
  dataNotify !: string;

  

  //verified if submitted form
  submitted = false;

  constructor(
    private formBuilder : FormBuilder,
    private sweteAlert  : NotifyService,
    private apiService  : ContactService,

  ) { 
    
  }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
        sujet: ['',Validators.required, Validators.min(3), Validators.maxLength(10)],
        email: ['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        message: this.formBuilder.control(null,[Validators.required,Validators.min(2)]),
    });

  
  }

  // controls the champ
  // Getter method to access formcontrols
  get myFormControls(){
    return this.contactForm.controls;
  }


  //submited
  handleOnSubmit(): void {
    this.submitted = true;
    console.log(JSON.stringify(this.contactForm.value, null, 2));
    if (this.contactForm.invalid) {
      this.dataNotify = "Oups ! erreur de champ"
      this.sweteAlert.sweetAlertError(this.dataNotify);
      return;
    }



    this.apiService.sendContact(this.contactForm.value).subscribe({
      next : (data) => {
        this.dataNotify = "Message a été envoyé avec succès";
        this.handleOnReset();
        this.sweteAlert.sweetAlertSuccess(this.dataNotify);
      },
      error : (err) => {
        this.dataNotify = "Oups ! échec d'envoie de message";
        this.sweteAlert.sweetAlertError(this.dataNotify);
      }

    })

    console.log(JSON.stringify(this.contactForm.value, null, 2));
  }

  // vide submitted
  handleOnReset(): void {
    this.submitted = false;
    this.contactForm.reset();
  }

}
