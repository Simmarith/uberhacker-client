<template>
   <Window
    header="LOGIN"
    width="200px"
    height="200px"
    top="calc(50vh - 100px)"
    left="calc(50vw - 100px)"
  >
    <div class="login">
      <span class="servername-label">Server:</span>
      <br />
      <input v-model="servername" />
      <br />
      <span class="username-label">Username:</span>
      <input v-model="username" />
      <br />
      <button class="login-submit" v-on:click="login">Login</button>
    </div>
  </Window>
</template>

<script>
import Window from '@/components/Window.vue'

export default {
  name: 'login',
  components: { Window },
  data: function () { return { username: '' } },
  methods: {
    login: function () {
      this.$router.push({ name: 'desktop', params: { username: this.username, servername: this.servername } })
    }
  }
}
</script>

<style scoped lang="less">
  .login {
    * {
      margin: 5px;
    }

    .username-label {
      display: block;
    }

    .login-submit {
      position: absolute;
      bottom: 0px;
      right: 0px;
    }
  }
</style>
