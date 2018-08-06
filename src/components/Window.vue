<template>
  <div class="window">
    <div class="header">
      {{ header }}
    </div>
      <slot />
  </div>
</template>

<script>
export default {
  name: 'Window',
  props: ['header']
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
