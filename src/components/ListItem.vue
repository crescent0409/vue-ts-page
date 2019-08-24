<template>
  <div class="list-item">
    <p>{{ content }}
    </p>
    <!-- <b-button variant="danger">Button</b-button> -->
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop} from "vue-property-decorator";

  @Component({})
  export default class ListItem extends Vue {
    @Prop({ default: "" }) content: string;
  }
</script>

<style>
  .list-item {
    height: 3.4em;
    line-height: 1.5em;
    padding: .2em .5em;
    margin-bottom: .5em;
    border-radius: .2em;
    overflow: hidden;
  }

  .list-item:nth-child(5n) {
    background-color: lightblue;
  }

  .list-item:nth-child(5n+1) {
    background-color: #dff0d8;
  }

  .list-item:nth-child(5n+2) {
    background-color: #fcf8e3;
  }

  .list-item:nth-child(5n+3) {
    background-color: lightskyblue;
  }

  .list-item:nth-child(5n+4) {
    background-color: antiquewhite;
  }
</style>