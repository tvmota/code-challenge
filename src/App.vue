<script type="text/javascript">
import { clearStorage } from './persistense/LocalPersistence'

import Header from '@/components/common/Header.vue'
import Loading from '@/components/common/Loading.vue'

export default {
  name: 'App-home',
  components: {
    Header,
    Loading
  },
  created () {
    clearStorage().then(() => {
      this.$store.dispatch('updatePage', 1)
    })
  }
}
</script>
<template>
  <div id="app">
    <Header />
    <div class="content">
      <div class="content_view">
        <router-view/>
      </div>
    </div>
    <Loading />
  </div>
</template>
<style lang="scss">
  @import './assets/css/_utilities/_imports';
  @import './assets/css/_base/_normalize';
  @import './assets/css/_base/_base';

  .content {
    @include calc(height, '100vh - #{pxToRem(60)}', null);

    &_view {
      @include flexContainer(flex, null, null, center, center, center);
      @include calc(min-height, '100vh - #{pxToRem(120)}', null);
      margin: pxToRem(40) auto 0;
      max-width: pxToRem(768);
      padding: 0 pxToRem(12);
      text-align: center;
    }
  }
</style>
