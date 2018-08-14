<template>
  <Window
  header="USERS"
  top="0"
  left="0"
  width="15vw"
  height="10vh"
  >
  <div :key="user.id" v-for="user in users">
    {{user.id}}: {{user.points}}pts
  </div>
  </Window>
</template>

<script>
import Window from '@/components/Window'
import UserStore from '@/stores/UserStore'

export default {
  name: 'Users',
  components: { Window },
  computed: {
    users () {
      return UserStore.users
    }
  }
}
</script>
