<script type="text/javascript">
export default {
  name: 'Navigate-button',
  props: {
    pageNum: {
      type: Number,
      required: true
    },
    btnName: {
      type: String,
      required: true
    }
  },
  computed: {
    btnStats () {
      let status = false

      if (!this.pageNum) {
        status = true
      }

      if (!navigator.onLine && this.pageNum > this.$store.getters.getTotalPage) {
        status = true
      }

      return status
    }
  },
  methods: {
    pageNavigate () {
      if (this.pageNum > 0) {
        this.$store.dispatch('updatePage', this.pageNum)
      }
    }
  }
}
</script>
<template>
  <button class="navBtn" @click="pageNavigate" :disabled="btnStats">
    {{btnName}}
  </button>
</template>
<style lang="scss">
  @import '../../assets/css/_utilities/_functions';
  @import '../../assets/css/_utilities/_variables';

  .navBtn {
    padding: pxToRem(10);
    color: $color-white;
    border-radius: pxToRem(4);
    box-shadow: none;
    cursor: pointer;
    background-color: $button-active;
    border-color: $button-active;

    &:hover {
      opacity: 0.7
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      background-color: $button-inative;
      border-color: $button-inative;
      cursor: not-allowed;
    }
  }
</style>
