<template>
  <div class="desktop">
    <Memes />
    <Memes />
    <Users />
    <Window
       header="GREETING"
       width="200px"
       height="200px"
       top="calc(50vh - 100px)"
       left="calc(50vw - 100px)"
       >
       <span class="greeting">Welcome, {{ $route.params.username }}!</span>
    </Window>
  </div>
</template>

<script>
import Window from '@/components/Window'
import Memes from '@/components/Memes'
import UserStore from '@/stores/UserStore'
import Users from '@/components/Users'
import WebSocketHandler from '@/utils/WebSocket'

export default {
  name: 'desktop',
  created: function () {
    UserStore.init(this.servername, this.$route.params.username)
    WebSocketHandler.init(this.servername)
  },
  components: {
    Window,
    Memes,
    Users
  },
  computed: {
    servername () {
      return localStorage.getItem('server')
    }
  }
}
</script>
