<template>
  <div class="row p-5">
    <b-nav vertical class="col-md-2 result-nav">
      <b-nav-item to="/single">>返回</b-nav-item>
      <b-nav-item active href="#result1">结果1</b-nav-item>
      <b-nav-item disabled>结果二</b-nav-item>
      <b-nav-item disabled>结果三</b-nav-item>
    </b-nav>
    <div class="table-responsive-sm col-md-10">
      <table class="b-table table table-bordered table-striped bv-docs-table" id="result1">
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
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class Result extends Vue {
  public list = [];
  mounted() {
    this.list = this.$route.params.result as any;
    console.log(this.list);
  }
}
</script>
<style scoped>
.result-nav {
  border-right: 1px solid rgba(0, 0, 0, 0.05);
}
th{
    min-width: 80px;
}
</style>