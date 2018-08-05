<template>
  <div class="login">
    Username:
    <input v-model="username" />
    <br />
    <button v-on:click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    login: function () {
      this.$router.push({ name: 'desktop', params: { username: this.username } })
    }
  }
}
</script>
