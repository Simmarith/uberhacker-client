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
import UserStore, { USERS_LIST_CHANGED } from '@/stores/UserStore'

export default {
  name: 'Users',
  components: { Window },
  data: function () {
    return { users: UserStore.users }
  },
  created: function () {
    UserStore.addListener(USERS_LIST_CHANGED, (users) => {
      this.users = users
    })
  }
}
</script>
