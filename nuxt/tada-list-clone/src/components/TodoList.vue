<template>
  <div>
    <ul class="ToDoList">
      <transition-group>
        <TodoItem v-for="todo in undoneTodos" :key="todo.createdAt"
          :todo="todo" @done="todo.isDone = true">
        </TodoItem>
      </transition-group>
    </ul>

    <p v-if="!isOpenedForm">
      <a href="javascript: void(0);" @click="toggleForm">Add another item</a>
    </p>

    <form @submit.prevent v-else>
      <input type="text" v-model="newContent" ref="contentInput" />
      <p>
        <button @click="addTodo" >Add this item</button>
        <a href="javascript: void(0);" @click="toggleForm">Close</a>
      </p>
    </form>

    <ul class="ToDoList">
      <transition-group>
        <TodoItem v-for="todo in doneTodos" :key="todo.createdAt"
          :todo="todo" @undone="todo.isDone = false">
        </TodoItem>
      </transition-group>
    </ul>

  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'ToDoList',
  data() {
    return {
      isOpenedForm: false,
      newContent: '',
      todos: [],
    }
  },
  components: {
    TodoItem
  },
  computed: {
    undoneTodos() {
      return this.todos.filter(todo => {
        return !todo.isDone
      })
    },
    doneTodos() {
      return this.todos.filter(todo => {
        return todo.isDone
      })
    }
  },
  methods: {
    toggleForm() {
      this.isOpenedForm = !this.isOpenedForm
    },
    addTodo() {
      if (this.newContent === '') {
        this.$refs.contentInput.focus()
      } else {
        this.todos.push({
          content: this.newContent,
          createdAt: Date.now(),
          isDone: false
        })
        this.newContent = ''
      }
    }
  }
}
</script>

<style>
  .ToDoList {
    list-style: none;
    padding: 0;
  }
  .v-enter {
    background-color: rgba(255, 255, 153, 1);
  }
  .v-enter-to {
    background-color: rgba(255, 255, 153, 0);
  }
  .v-enter-active {
    transition: all 1.5s ease;
  }
</style>
