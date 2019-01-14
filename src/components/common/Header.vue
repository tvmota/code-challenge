<script type="text/javascript">
export default {
  name: 'App-Header'
}
</script>
<template>
  <header class="header">
    <h2>Star Wars</h2>
  </header>
</template>
<style lang="scss">
  @import '../../assets/css/_utilities/_imports.scss';

  .header {
    background-color: $color-blue;
    color: $color-white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: pxToRem(60);
    left: 0;
    max-width: 100vw;
    padding: 0 pxToRem(12);
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
  }
</style>
