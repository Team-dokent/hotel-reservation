import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Autoplay,EffectCube, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay,EffectCube,Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation : ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
 


  constructor() { }

  ngOnInit(): void {
  }

}
