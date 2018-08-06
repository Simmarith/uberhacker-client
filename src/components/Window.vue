<template>
  <div class="window" :style="style">
    <div class="header">
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
  computed: {
    style () {
      let style = ''
      if (this.height) {
        style += `height:${this.height};`
      }
      if (this.width) {
        style += `width:${this.width};`
      }
      if (this.top) {
        style += `top:${this.top};`
      }
      if (this.left) {
        style += `left:${this.left};`
      }
      return style
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
