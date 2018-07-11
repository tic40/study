<template>
  <section>
    <h2>{{ keyword }}</h2>

    <div v-if="!isEditing">
      <!-- <keyword-content :content="content"/> -->
      <p>{{ content }}</p>

      <p>
        <button @click="edit">編集</button>
      </p>
    </div>
    <div v-else>
      <input v-model="editingContent" type="text" size="100" />
      <p>
        <button @click="save">保存</button>
        <button @click="cancel">キャンセル</button>
      </p>
    </div>
  </section>
</template>

<script>
// import PouchDB from 'pouchdb'
// import KeywordContent from ''
import { mapState, mapGetters,mapActions, mapMutations } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      keyword: '',
      // content: '',
      isEditing: false,
      editingContent: ''
    }
  },
  async asyncData({ app, params }) {
    return {
      keyword: params.keyword
    }
  },

  async fetch({ store, params }) {
    return store.dispatch('fetchCurrentKeyword', params.keyword)
  },

  methods: {
    edit() {
      this.isEditing = true
      this.editingContent = this.content
    },
    async save() {
      console.log('save')
      const params = {
        _id: `keyword_${this.keyword}`,
        keyword: this.keyword,
        content: this.editingContent
      }
      if (!this.isNew) { params._rev = this.currentRev }
      await this.$store.dispatch('putCurrentKeyword', params)
      this.isEditing = false
    },
    cancel() {
      this.isEditing = false
    }
  },
  computed: {
    content() {
      const doc = this.$store.state.currentKeyword
      return doc ? doc.content : ''
    },
    currentRev() {
      const doc = this.$store.state.currentKeyword
      return doc ? doc._rev : ''
    },
    ...mapGetters({
      isNew: 'isNewCurrentKeyword'
    })
  }
}
</script>

<style scoped>

</style>
