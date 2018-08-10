<template>
  <Window
    v-bind:header="memeTitle"
    randomPos={true}
  >
    <img
      v-bind:src="memeURL"
      alt="MEMES HERE"
      class="memes"
    />
  </Window>
</template>

<script>
import Window from '@/components/Window.vue'
const xhttp = new XMLHttpRequest()

let redditData = ''
let memeIndex = 0

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    redditData = JSON.parse(this.responseText)
    console.log(redditData)
  }
}
xhttp.open('GET', 'https://www.reddit.com/r/dankmemes/rising.json', false)
xhttp.send()

const getMeme = () => {
  const memeData = {}
  if (!redditData.data.children[memeIndex].data.preview) {
    memeIndex++
    return getMeme()
  }

  memeData.title = redditData.data.children[memeIndex].data.title
  memeData.URL = redditData.data.children[memeIndex].data.preview.images[0].source.url
  memeIndex++
  return memeData
}

export default {
  components: {
    Window
  },
  data: function () {
    const memeData = getMeme()
    return { memeTitle: memeData.title, memeURL: memeData.URL }
  }
}
</script>

<style scoped lang="less">
  .memes {
    max-width: 30vw;
  }
</style>
