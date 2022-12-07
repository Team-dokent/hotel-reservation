import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsModal } from 'src/app/core/models/site/rooms/rooms';
import { RoomsService } from 'src/app/core/services/site/rooms/rooms.service';
import { NotifyService } from '../../../notify/notify.services';


import SwiperCore, {Autoplay,EffectCube, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay,EffectCube,Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-detail-roms',
  templateUrl: './detail-roms.component.html',
  styleUrls: ['./detail-roms.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class DetailRomsComponent implements OnInit {

  room! : RoomsModal;

  constructor(
    private route: ActivatedRoute,
    private apiService: RoomsService,
    private sweetAlert : NotifyService
  ) { }

  ngOnInit(): void {

    const roomId = +this.route.snapshot.params['id'];

    this.handlerGetRoom(roomId);

  }


  handlerGetRoom(roomId:number){
    this.apiService.getRoomById(roomId).subscribe({

      next: (data) => {
       
        this.room = data

        console.log(this.room);
        
      },
      error: (err) => {
        console.log('Err: ', +err);
        let messageError = "Oups ! cette chambre n'existe pas !"
        this.sweetAlert.sweetAlertError(messageError);
        return;

      }

    });

  }

}
