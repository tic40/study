import Vue from 'vue'
import { Swiper as SwiperClass, Navigation, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

