import axios from 'axios'
import { API_URL } from '../.env'
import Auth from '../helper/auth'
class AxiosService {
  constructor () {
    axios.defaults.headers.common.Accept = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    const isLogined = Auth.isLogined()
    if (isLogined) {
      const userData = Auth.getUser()
      if (userData.access_token) {
        axios.defaults.headers.common.Authorization = `${userData.type} ${userData.access_token}`
      }
    }

    const instance = axios.create({
      baseURL: API_URL
    })
    instance.interceptors.response.use(this.handleSuccess, this.handleError)
    this.instance = instance
  }

  handleSuccess (response) {
    return response
  }

  handleError (error) {
    if (error.response.status === 500) {
      alert(
        'Something went wrong !!!\nServer error with status code: ' +
                error.response.status
      )
    }
    return Promise.reject(error)
  }

  get (url) {
    return this.checkValidToken(this.instance.get(url))
  }

  post (url, body) {
    return this.checkValidToken(this.instance.post(url, body))
  }

  put (url, body) {
    return this.checkValidToken(this.instance.put(url, body))
  }

  delete (url) {
    return this.checkValidToken(this.instance.delete(url))
  }

  checkValidToken = data => {
    const promise = new Promise(resolve => {
      resolve(data)
    })
    promise.then(value => {
      if (value.data.code === 500) {
        alert('Something went wrong')
      } else if (value.data.code === 403) {
        alert('Unauthorized. Please try login again.')
        Auth.removeUser()
        window.location.href = '/login'
      }
    })
    return data
  }
}
export default new AxiosService()
