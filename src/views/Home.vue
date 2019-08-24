<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home,
  },
})
export default class Home extends Vue {}
</script>
<style>
  .container{
    margin: 1em auto;
  }
</style>
