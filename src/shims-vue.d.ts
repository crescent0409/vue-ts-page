import Vue from "vue";
import {Route} from "vue-router";
import {VueRouter} from "vue-router/types/router";

declare module "*.vue" {
  export default Vue;
}
declare module "vue/types/vue" {
    interface Vue {
        $router: VueRouter; // 这表示this下有这个东西
        $route: Route;
        $https: any;
    }
}
