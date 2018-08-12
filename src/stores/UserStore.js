import EventEmitter from 'events'
import request from 'superagent'

class UserStore extends EventEmitter {
  constructor () {
    super()
    this.users = []
  }

  init (baseURL, ownUserId) {
    this.baseURL = baseURL
    console.log(ownUserId)
    request
      .post(`${this.baseURL}/user/add`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({ id: ownUserId }))
      .then(() => {
        request
          .get(`${this.baseURL}/users`)
          .then((res) => {
            this.users = res.body.users
            console.log('USERS:', this.users)
          })
      })
  }

  getUserById (id) {
    return this.users.find((user) => {
      return user.id === id
    })
  }
}

export default new UserStore()
