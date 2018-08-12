<template>
  <div v-bind:ref="id" v-bind:id="id" class="window" :style="style">
    <div class="header" @mousedown="drag">
      {{ header }}
    </div>
      <slot />
  </div>
</template>

<script>
let windowCounter = 0
let highestWindow = 1

const getWindowId = () => {
  windowCounter++
  return `window-${windowCounter - 1}`
}

const getZIndex = () => {
  highestWindow++
  return highestWindow
}

export default {
  name: 'Window',
  props: [
    'header',
    'height',
    'width',
    'top',
    'left',
    'randomPos'
  ],
  data: function () {
    let randomPos = this.positionRandomly()
    console.log(randomPos)
    return {
      zIndex: 0,
      draggedY: randomPos[0],
      draggedX: randomPos[1],
      offsetY: null,
      offsetX: null,
      id: getWindowId()
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
      if (this.top || this.draggedY) {
        style += `top:${this.currentTop};`
      }
      if (this.left || this.draggedX) {
        style += `left:${this.currentLeft};`
      }
      if (this.zIndex) {
        style += `z-index:${this.zIndex};`
      }
      return style
    }
  },
  methods: {
    drag () {
      window.addEventListener('mousemove', this.move)
      this.zIndex = getZIndex()
      this.$refs[this.id].addEventListener('mouseup', this.stopMove)
    },
    move (e) {
      if (!this.offsetY) {
        this.offsetY = e.clientY - this.$refs[this.id].offsetTop
      }
      if (!this.offsetX) {
        this.offsetX = e.clientX - this.$refs[this.id].offsetLeft
      }
      this.draggedY = e.clientY - this.offsetY
      this.draggedX = e.clientX - this.offsetX
    },
    stopMove () {
      window.removeEventListener('mousemove', this.move)
      this.offsetY = null
      this.offsetX = null
    },
    positionRandomly () {
      console.log(this.randomPos)
      let randomTop = null
      let randomLeft = null
      if (this.randomPos && !this.top && !this.left) {
        randomTop = Math.floor((Math.random() * (document.getElementsByTagName('html')[0].clientHeight * 0.8)))
        randomLeft = Math.floor((Math.random() * (document.getElementsByTagName('html')[0].clientWidth * 0.8)))
      }
      return [randomTop, randomLeft]
    }
  }
}
</script>

<style scoped lang="less">
  .window {
    background-color: rgba(0,0,0,.7);
    filter: drop-shadow(0 0 4px rgba(255,255,255,.2));
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
