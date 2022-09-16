import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiCarouselComponent } from './pi-carousel.component';
import {SwiperModule} from "swiper/angular";



@NgModule({
  declarations: [
    PiCarouselComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class PiCarouselModule { }
