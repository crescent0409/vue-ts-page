<template>
  <div>
    <Loading v-if="loading"></Loading>
    <b-modal v-model="modalShow">
      <p>{{errorMsg}}</p>
    </b-modal>
    <div class="form-group">
      <textarea class="form-control article" placeholder="please input your article" v-model="text"></textarea>
    </div>
    <button
      type="button"
      class="center-block btn-block btn btn-primary btn-lg"
      @click="submit"
    >start analyze</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loading from '@/components/Loading.vue';

@Component({
    components: {
    Loading
  }
})
export default class Single extends Vue {
  public text: string = "";
  public errorMsg = "";
  public modalShow = false;
  public loading = false;

  public async submit() {
    if (!this.text) {
      this.errorMsg = "the content cannot be empty";
      this.modalShow = true;
      return;
    }
    this.loading = true;
    const res = await this.$https.post("/get", {
      article: this.text
    });
    console.log(res);
    this.text = "";
    this.loading = false;
    this.$router.push({ name: "result", params: res.data});
  }
}
</script>

<style>
textarea.form-control.article {
  height: 50vh;
}
</style>
