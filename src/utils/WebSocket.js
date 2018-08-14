import EventEmitter from 'events'

const WEBSOCKET_PORT = 8001
export const WEBSOCKET_CONNECTED_EVENT = () => { return 'websocket-connected' }
export const WEBSOCKET_MESSAGED_EVENT = () => { return 'websocket-messaged' }

// Hold the ws centralized, because I don't want to get it where it needs to be initialized (Desktop.vue)

class WebSocketHandler extends EventEmitter {
  init (servername) {
    let websocketHost = servername.split(':')[1]
    websocketHost = 'ws:' + websocketHost
    websocketHost += `:${WEBSOCKET_PORT}`
    this.ws = new WebSocket(websocketHost)
    this.ws.onopen = () => {
      this.emit(WEBSOCKET_CONNECTED_EVENT, this.ws)
    }
    this.ws.onmessage = (e) => {
      this.emit(WEBSOCKET_MESSAGED_EVENT, e)
    }
  }
  connected () { return this.ws !== undefined }
}

export default new WebSocketHandler()
