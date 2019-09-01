<template>
  <div class="row p-5">
    <b-nav vertical class="col-md-2 result-nav">
      <b-nav-item to="/single">>返回</b-nav-item>
      <b-nav-item active href="#result1">结果1</b-nav-item>
      <b-nav-item href="#result2">结果二</b-nav-item>
      <b-nav-item href="#result3">结果三</b-nav-item>
    </b-nav>
    <div class="table-responsive-sm col-md-10">
      <div id="result1">
        <pre v-html="article"></pre>
      </div>
      <table class="b-table table table-bordered table-striped bv-docs-table" id="result2">
        <thead class="thead-default">
          <tr>
            <th>主语</th>
            <th>谓语</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td>
              <code>{{item.subject}}</code>
            </td>
            <td>{{item.predicate}}</td>
            <td>{{item.object}}</td>
          </tr>
        </tbody>
      </table>
      <div id="result3">
        <D3Component :nodes="nodes" :links="links"></D3Component>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import D3Component from "../components/d3.vue";

@Component({
  components: {
    D3Component
  }})
export default class Result extends Vue {
  public article = "<span class='sub'>中国电信</span> <span class='pred'>表示</span><span class='obj'>将始终坚持以客户为中心，统筹推进4G和5G协同发展，不断提升整体网络服务水平与用户使用感知。</span>";
  public list = [];
  public nodes = [
    // { id: 1, name: "my node 1" },
    // { id: 2, name: "my node 2" },
    // { id: 3, _color: "orange" },
    // { id: 4 },
    // { id: 5 },
    // { id: 6 },
    // { id: 7 },
    // { id: 8 },
    // { id: 9 },
    // { id: "node1", name: "node1" },
    // { id: "node2", name: "node2" },
  ];
  public links = [
    // { sid: 1, tid: 2, name: "link1" },
    // { sid: "node1", tid: "node2", name: "link2" },
    // { sid: "node1", tid: "node2", name: "link3" },
    // { sid: 1, tid: 2 },
    // { sid: 2, tid: 8 },
    // { sid: 3, tid: 4 },
    // { sid: 4, tid: 5 },
    // { sid: 5, tid: 6 },
    // { sid: 7, tid: 8 },
    // { sid: 5, tid: 8 },
    // { sid: 3, tid: 8 },
    // { sid: 7, tid: 9 }
  ];
  mounted() {
    this.list = this.$route.params.result as any;
    if (this.$route.params.article) {
      this.article = this.$route.params.article as any;
    };
    if (this.$route.params.nodes && this.$route.params.nodes.length) {
      this.nodes = this.$route.params.nodes as any;
      this.links = this.$route.params.links as any;
    }


  }
}
</script>
<style>
.result-nav {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}
#result1 pre{
    word-break: break-all;
    white-space: normal;
}
#result3 {
  overflow: scroll;
  width: 100%;
  height: 60vh;
}
th {
  min-width: 80px;
}

span.sub {
  color: #0c5460;
  background-color: #d1ecf1;
}
span.pred {
  color: #155724;
  background-color: #d4edda;
}
span.obj {
  color: #856404;
  background-color: #fff3cd;
}
</style>