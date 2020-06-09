// This file is for network request things so they don't get
// duplicated in the Vuex modules
import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = 'fd0395dfbb4309f'
const ROOT_URL = 'https://api.imgur.com'

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    }

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
  },

  fetchImages(token) {
    // Axios Notes:
    // 2nd param is an object that can have a collection of options to customize reqs
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

  }
}