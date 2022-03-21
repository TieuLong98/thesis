import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Navigation, Scrollbar } from 'swiper'; 

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar]);

@Component({
  selector: 'app-carousel-swiper',
  templateUrl: './carousel-swiper.component.html',
  // template: `<swiper [navigation]="true" class="mySwiper">
  //   <ng-template swiperSlide>Slide 1</ng-template
  //   ><ng-template swiperSlide>Slide 2</ng-template
  //   ><ng-template swiperSlide>Slide 3</ng-template
  //   ><ng-template swiperSlide>Slide 4</ng-template
  //   ><ng-template swiperSlide>Slide 5</ng-template
  //   ><ng-template swiperSlide>Slide 6</ng-template
  //   ><ng-template swiperSlide>Slide 7</ng-template
  //   ><ng-template swiperSlide>Slide 8</ng-template
  //   ><ng-template swiperSlide>Slide 9</ng-template>
  // </swiper>`,
  styleUrls: ['./carousel-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselSwiperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    // slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
