import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { CarouselSwiperComponent } from './components/carousel-swiper/carousel-swiper.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    CarouselSwiperComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgxPaginationModule,
  ],
  exports: [
    CarouselSwiperComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
