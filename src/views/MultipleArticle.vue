<template>
  <div class="row">
    <div class="col-md-6">
      <div class="form-group">
        <b-form-textarea class="multi-article" placeholder="please input your article" no-resize></b-form-textarea>
      </div>
      <button type="button" class="center-block btn-block btn btn-primary btn-lg">add</button>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <b-card header="article list" header-tag="header" class="multi-article-list">
          <v-item v-for="article in articles"></v-item>
        </b-card>
      </div>
      <button type="button" class="center-block btn-block btn btn-primary btn-lg">
        start analyze
      </button>
    </div>
  </div>
</template>

<script>
  import ListItem from "../components/ListItem.vue"

  export default {
    name: 'Multiple',
    data(){
      return{
        articles: [1, 2, 3, 4, 5, 6]
      }
    },
    components: {
      'v-item': ListItem
    }
  }
</script>

<style>
  .multi-article, .multi-article-list {
    height: 78vh !important;
  }
  .card-body{
    overflow-y: scroll;
  }
</style>
