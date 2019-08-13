<template>
  <div>
    <div class="form-group">
      <textarea class="form-control article" id="exampleInputPassword1" placeholder="please input your article"></textarea>
    </div>
    <button type="button" class="center-block btn-block btn btn-primary btn-lg">start analyze</button>
  </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator';

    @Component({
    })
    export default class Single extends Vue {}
</script>

<style>
  textarea.form-control.article{
    height: 50vh
  }
</style>
