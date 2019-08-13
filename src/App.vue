<template>
  <div>
    <div class="loading" v-if="false">
      <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
    <!--<div class="text-center header">-->
      <!--<h2 class="">Article analyze</h2>-->
    <!--</div>-->
      <b-navbar type="dark" variant="dark">
          <b-navbar-brand href="/">Article analyze</b-navbar-brand>
          <b-navbar-nav>
              <b-nav-item href="/single">Single</b-nav-item>
              <b-nav-item href="/multiple">Multiple</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    <router-view></router-view>

  </div>
</template>

<script>
    import Single from './views/SingleAtricle'
    import Multiple from './views/MultipleArticle'

    export default {
        name: 'Nav',
        components: {
            'v-single': Single,
            'v-multi': Multiple
        }
    }
</script>

<style>
html, body, .container{
  height: 100%;
}
body{
  background-color: #f8f9fa;
}
.container{
  height: 100%;
}
.lds-spinner {
  color: #ffffff;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-spinner div {
  transform-origin: 32px 32px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 29px;
  width: 5px;
  height: 14px;
  border-radius: 20%;
  background: #fff;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.loading{
  background-color: lightgray;
  opacity: .3;
  position: fixed;
  z-index: 1031;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 100%;
}
</style>
