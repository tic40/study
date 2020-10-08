<template>
  <div
    v-swiper:mySwiper="swiperOption"
    class="swiper-container"
    :auto-height="true"
  >
  <div
    class="swiper-wrapper"
  >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'swiper/swiper-bundle.css'

export default Vue.extend({
  computed: {
    swiperOption() {
      return {
        slidesPerView: 5,
        slidesPerColumn: 4,
        // slidesOffsetAfter: this.offsetAfter,
        slidesPerColumnFill: 'row',
        // slidesPerColumnFill: 'column',
        spaceBetween: 24,
        freeMode: true,
        /*
        navigation: {
          nextEl: `.${this.nextElClass}`,
          prevEl: `.${this.prevElClass}`,
          disabledClass: 'swiper-button-disabled'
        },
        */
        breakpoints: {
          1600: {
            // slidesPerColumn: 5,
            slidesPerView: 7
          },
          1400: {
            // slidesPerColumn: 5,
            slidesPerView: 6
          },
          1100: {
            // slidesPerColumn: 5,
            slidesPerView: 5
          }
        }
      }
    }
  },
  methods: {
    ready() {
      // console.log('logo ready!', this.mySwiper.height)
      // this.mySwiper.update(true);
      // this.mySwiper.updateAutoHeight(500);
    }
  },
  async mounted() {
    // await this.nextTick();
    /*
    await this.$nextTick();
    console.log(this.$slots.default[0])
    this.height = this.$slots["default"][0].elm.offsetHeight
    console.log(this.height)  // => 100 100 (or more)
    this.height = this.height * 2 + 24
    console.log(this.height)
    */
  }
})
</script>

<style>
.swiper-container {
}
.swiper-wrapper {
}
</style>

