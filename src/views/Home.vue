<script>
import ListCharacters from '@/components/custom/ListCharacters.vue'
import NavigateButton from '@/components/custom/NavigateButton.vue'

export default {
  name: 'home',
  components: {
    ListCharacters,
    NavigateButton
  },
  computed: {
    characters () {
      return this.$store.getters.getCharacters
    },
    pageNumber () {
      return this.$store.getters.getPageNumber
    }
  }
}
</script>
<template>
<div class="home_content">
  <ListCharacters :list="characters"/>
  <div class="home_content_buttons">
    <NavigateButton btn-name="Anterior" :page-num="pageNumber - 1"/>
    <NavigateButton btn-name="Próxima" :page-num="pageNumber + 1"/>
  </div>
</div>
</template>s
<style lang="scss">
  @import '../assets/css/_utilities/_functions';
  .home_content {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100vw;
    padding: pxToRem(20);

    &_buttons {
      min-width: pxToRem(380);
      padding: pxToRem(16);
      display: flex;
      justify-content: space-between;
      margin-top: pxToRem(20)
    }
  }
</style>
