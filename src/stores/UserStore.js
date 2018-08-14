import EventEmitter from 'events'
import request from 'superagent'
import WebSocketHandler, { WEBSOCKET_MESSAGED_EVENT } from '@/utils/WebSocket'

export const USERS_LIST_CHANGED = () => { return 'users-list-changed' }

class UserStore extends EventEmitter {
  constructor () {
    super()
    this.users = []
  }

  init = (baseURL, ownUserId) => {
    this.baseURL = baseURL
    // WebSocket
    WebSocketHandler.addListener(WEBSOCKET_MESSAGED_EVENT, (e) => {
      const payload = JSON.parse(e.data)
      if (payload.type === 'usersListUpdate') {
        this.users = payload.users
        this.emit(USERS_LIST_CHANGED, this.users)
      }
    })

    window.setTimeout(() => {
      this.addUser(ownUserId)
    }, 1000)
  }

  addUser (id) {
    request
      .post(`${this.baseURL}/user/add`)
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({ id }))
      .end()
  }

  getUserById (id) {
    return this.users.find((user) => {
      return user.id === id
    })
  }

  fetchUsers () {
    request
      .get(`${this.baseURL}/users`)
      .send()
      .then((res) => {
        this.users = res.body.users
        this.emit(USERS_LIST_CHANGED, this.users)
      })
  }
}

export default new UserStore()
