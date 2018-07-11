export const state = () => ({
  currentKeyword: null,
  keywords: []
})

export const mutations = {
  setCurrentKeyword(state, doc) {
    state.currentKeyword = doc
  }
}

export const getters = {
  isNewCurrentKeyword (state) {
    return !state.currentKeyword
  }
}

export const actions = {
  async fetchCurrentKeyword({ commit }, keyword) {
    const doc = await this.$db.get(`keyword_${keyword}`).catch(() => null)
    commit('setCurrentKeyword', doc)
  },

  async putCurrentKeyword({ dispatch }, params) {
    try {
      await this.$db.put(params)
      await dispatch('fetchCurrentKeyword', params.keyword)
    } catch (error) {
      console.error(error)
    }
  }
}
