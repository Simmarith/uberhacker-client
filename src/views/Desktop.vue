<template>
  <div class="desktop">
    <Window header="GREETING">
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
