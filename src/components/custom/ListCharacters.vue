<script type="text/javascript">
export default {
  name: 'List-Component',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  filters: {
    formatIdx (idx) {
      return idx < 10 ? `0${idx}` : idx
    }
  }
}
</script>
<template>
  <ol class="list">
    <li class="list_item" v-for="character in list" :key="character.seq">
      {{character.seq | formatIdx}}&nbsp;{{ character.name }}
    </li>
  </ol>
</template>
<style lang="scss">
  @import '../../assets/css/_utilities/_functions';
  @import '../../assets/css/_utilities/_variables';
  .list {
    min-width: pxToRem(380);
    list-style: none;
    padding: 0;

    &_item{
      border-bottom: pxToRem(1) solid $color-gray;
      line-height: pxToRem(46);
      text-align: start;
      letter-spacing: pxToRem(4);
    }
  }
</style>
