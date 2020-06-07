// This file is for network request things so they don't get
// duplicated in the Vuex modules
import qs from 'qs';

const CLIENT_ID = 'fd0395dfbb4309f';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    window.location = `${ROOT_URL}/oath2/authorize/?${qs.stringify(querystring)}`;
  }
}