<template>
  <div ref="window" class="window" :style="style">
    <div class="header" @mousedown="drag">
      {{ header }}
    </div>
      <slot />
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: [
    'header',
    'height',
    'width',
    'top',
    'left'
  ],
  data: function () {
    return {
      draggedY: null,
      draggedX: null
    }
  },
  computed: {
    currentTop () { return this.draggedY ? this.draggedY + 'px' : this.top },
    currentLeft () { return this.draggedX ? this.draggedX + 'px' : this.left },
    style () {
      let style = ''
      if (this.height) {
        style += `height:${this.height};`
      }
      if (this.width) {
        style += `width:${this.width};`
      }
      if (this.top) {
        style += `top:${this.currentTop};`
      }
      if (this.left) {
        style += `left:${this.currentLeft};`
      }
      return style
    }
  },
  methods: {
    drag () {
      window.addEventListener('mousemove', this.move)
      this.$refs.window.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', this.move)
      })
    },
    move (e) {
      this.draggedY = e.clientY
      this.draggedX = e.clientX
    }
  }
}
</script>

<style scoped lang="less">
  .window {
    background-color: rgba(0,0,0,.2);
    color: #fff;
    display: block;
    position: absolute;
    top: 0;
    left: 0;

    .header {
      display: block;
      background-color: #0d0;
    }
  }
</style>
