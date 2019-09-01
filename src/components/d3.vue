<template>
  <d3-network :net-nodes="nodes" :net-links="links" :options="options"></d3-network>
</template>
<script>
import D3Network from "vue-d3-network";

export default {
  name: "D3Component",
  components: {
    D3Network
  },
  props: [ "nodes", "links" ],
  data() {
    return {
      options: {
        nodeSize: 10,
        linkLabels: true,
        nodeLabels: true,
        size: {}
      }
    };
  },
  mounted() {
    this.options.size.w = this.$el.parentNode.clientWidth;
    this.options.size.h = this.$el.parentNode.clientHeight;
  }
};
</script>
<style src="vue-d3-network/dist/vue-d3-network.css"></style>