<template>
  <header>
    <ul>
      <li><nuxt-link to="/">Root</nuxt-link></li>
      <li><nuxt-link to="/about">/about</nuxt-link></li>
      <li v-for="id in randIds" :key="id">
        <nuxt-link :to="`/posts/${id}`">/posts/{{id}}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>

export default {
  computed: {
    randIds() {
      let ary = []
      for (let i = 0; i < 5; i++) {
        ary.push(Math.floor((Math.random() * 100) + 1))
      }
      return ary
    }
  }
}
</script>
