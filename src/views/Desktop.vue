<template>
  <div class="desktop">
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
import Window from '@/components/Window.vue'

export default {
  name: 'desktop',
  components: {
    Window
  }
}
</script>
