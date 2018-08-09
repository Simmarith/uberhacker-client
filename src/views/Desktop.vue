<template>
  <div class="desktop">
   <Memes />
    <Memes />
    <Window
      header="GREETING"
      width="200px"
      height="200px"
      top="calc(50vh - 100px)"
      left="calc(50vw - 100px)"
    >
      <span class="greeting">Welcome, {{ $route.params.username }}!</span>
    </Window>
    <Window
      header="SECOND WINDOW"
      height="150px"
      width="300px"
      top="50px"
      left="50px"
    >
    Hello!
    </Window>
  </div>
</template>

<script>
import Window from '@/components/Window.vue'
import Memes from '@/components/Memes.vue'

export default {
  name: 'desktop',
  components: {
    Window,
    Memes
  }
}
</script>
