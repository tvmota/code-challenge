<script type="text/javascript">

export default {
  name: 'loader-app',
  computed: {
    showLoader () {
      return this.$store.getters.getShowLoader
    }
  }
}
</script>
<template>
<div class="loader" v-show="showLoader">
  <div class="donut"></div>
</div>
</template>
<style lang="scss">
  @import '../../assets/css/_utilities/_imports.scss';

  .loader{
    position: fixed;
    z-index: 999;
    height: pxToRem(2);
    width: pxToRem(2);
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));
      background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
    }

    .donut {
      display: inline-block;
      border: pxToRem(12) solid rgba(0, 0, 0, 0.1);
      border-left-color: $color-blue;
      border-radius: 50%;
      width: pxToRem(90);
      height: pxToRem(90);
      animation: donut-spin 1.2s linear infinite;
    }
  }
</style>
