<template>
  <div class="container">
    <logo>
      <div
        v-for="(v,i) in [...new Array(30)]"
        style="
          border: 1px solid red;
          width: 100%;
          min-width: 100px;
          height: 100%;
        "
        class="swiper-slide"
      >
        hoge {{i}}
        <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" height="100" />
      </div>
    </logo>
    hogehoge
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import 'swiper/swiper-bundle.css'

export default Vue.extend({
  components: {
    Logo
  }
})
</script>

<style>
.container {
}
</style>
