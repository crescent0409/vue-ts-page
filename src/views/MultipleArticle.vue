<template>
  <div class="row">
    <Loading v-if="loading"></Loading>
    <b-modal v-model="modalShow">
      <p>{{errorMsg}}</p>
    </b-modal>
    <div class="col-md-6">
      <div class="form-group">
        <b-form-textarea
          class="multi-article"
          placeholder="please input your article"
          no-resize
          v-model="article"
        ></b-form-textarea>
      </div>
      <button type="button" class="center-block btn-block btn btn-primary btn-lg" @click="add">add</button>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <b-card header="article list" header-tag="header" class="multi-article-list">
          <ListItem v-for="(article, index) in articles" :key="index" :content="article"></ListItem>
        </b-card>
      </div>
      <button
        type="button"
        class="center-block btn-block btn btn-primary btn-lg"
        @click="submit"
      >start analyze</button>
    </div>
  </div>
</template>

<script lang="ts">
import ListItem from "../components/ListItem.vue";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Loading from "@/components/Loading.vue";

@Component({
  components: {
    ListItem,
    Loading
  }
})
export default class Multiple extends Vue {
  public articles: Array<string> = [];
  public article = "";
  public errorMsg = "";
  public modalShow = false;
  public loading = false;
  @Emit("add")
  public add() {
    if (!this.article) {
      this.errorMsg = "the content cannot be empty";
      this.modalShow = true;
      return;
    }
    this.articles.push(this.article);
    this.article = "";

  }
  @Emit("submit")
  public async submit() {
    if (!this.articles.length) {
      this.errorMsg = "please input at least one article";
      this.modalShow = true;
      return;
    }
    this.loading = true;

    const res = await this.$https.post("/get", {
      articleList: this.articles
    });
    console.log(res.data);
    this.loading = false;
  }
}
</script>

<style>
.multi-article,
.multi-article-list {
  height: 78vh !important;
}
.card-body {
  overflow-y: scroll;
}
</style>
