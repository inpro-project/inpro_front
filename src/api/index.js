import axios from 'axios'
import VueCookies from 'vue-cookies'

function getperson () {
  console.log(VueCookies.get('Authorization'))
  return axios.get(process.env.VUE_APP_API_BASE_URL + '/app/user-matches', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
}

function getteam () {
  console.log(VueCookies.get('Authorization'))
  return axios.get(process.env.VUE_APP_API_BASE_URL + '/app/team-matches', { headers: { 'Content-Type': 'application/json', Authorization: VueCookies.get('Authorization') } })
}

export {
  getperson,
  getteam
}
