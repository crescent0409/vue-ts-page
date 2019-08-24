<template>
  <div>
    <!--<div class="text-center header">-->
    <!--<h2 class="">Article analyze</h2>-->
    <!--</div>-->
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="/">Article analyze</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/single">Single</b-nav-item>
        <b-nav-item to="/multiple">Multiple</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component({
})
export default class App extends Vue {

}
</script>

<style>
html,
body,
.container {
  height: 100%;
}
body {
  background-color: #f8f9fa;
}
.container {
  height: 100%;
}
</style>
