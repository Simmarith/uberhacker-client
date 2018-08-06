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
      draggedX: null,
      offsetY: null,
      offsetX: null
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
        this.offsetY = null
        this.offsetX = null
      })
    },
    move (e) {
      if (!this.offsetY) {
        this.offsetY = e.clientY - this.$refs.window.offsetTop
      }
      if (!this.offsetX) {
        this.offsetX = e.clientX - this.$refs.window.offsetLeft
      }
      console.log(e)
      this.draggedY = e.clientY - this.offsetY
      this.draggedX = e.clientX - this.offsetX
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
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }
  }
</style>
