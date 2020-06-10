import api from '../../api/imgur'
import { router } from '../../main'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const actions = {
  // NOTE: The first argument passed to actions is an object
  // with a bunch of helpers, such as "rootState"

  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.data)
  },

  async uploadImages( { rootState }, images) {
    // Get access token
    const { token } = rootState.auth

    // call api module to handle upload
    await api.uploadImages(images, token)

    // redirect to imageList component
    router.push('/')
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}