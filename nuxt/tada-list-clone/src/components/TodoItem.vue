<template>
  <li :class="{'TodoItem--Done': todo.isDone}">
    <input type="checkbox" @change="onChange" :checked="todo.isDone">
    {{todo.content}}
  </li>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    onChange() {
      const isDone = !this.todo.isDone
      isDone ?
        this.$emit('done')
        : this.$emit('undone')
    }
  }
}
</script>

<style>
  .TodoItem--Done {
    font-size: 10px;
    color: #999;
  }
</style>
