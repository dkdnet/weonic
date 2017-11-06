<template>
  <div class="page has-navbar" v-nav="{ title: 'Home' }">
    <div class="page-content text-center">
      <h2 class="padding border-1px" v-text="msg"></h2>

      <router-link class="button button-assertive" to="/about">
        <i class="ion-information-circled"></i> About
      </router-link>

      <router-link class="button button-assertive" to="/dialog">
        <i class="ion-information-circled"></i> 对话框
      </router-link>

      <router-link class="button button-assertive" to="/pagecellsphoto">
        <i class="ion-information-circled"></i> Cells
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello! Vonic.'
      }
    }
  }
</script>
<style lang="scss" scoped>
  /*@import './sass/common/index';*/
  @import '../../vendor/vonic/src/scss/common/index';

  h2 {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    color: $assertive;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    @include border-1px(rgba(7, 17, 27, 0.1));
  }

  .page.has-navbar .page-content {
    padding-top: 100px;
  }
</style>
