<template>
  <Window
    header="MEME"
  >
    <img v-bind:src="memeURL" alt="MEMES HERE" />
  </Window>
</template>

<script>
import Window from '@/components/Window.vue'
const xhttp = new XMLHttpRequest()
let testReturn = ''
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    testReturn = JSON.parse(this.responseText)
    console.log(testReturn)
  }
}
xhttp.open('GET', 'https://www.reddit.com/r/dankmemes/rising.json', false)
xhttp.send()
export default {
  components: {
    Window
  },
  computed: {
    memeURL () {
      if (testReturn.data) {
        return testReturn.data.children[0].data.preview.images[0].source.url
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped lang="less">

</style>
