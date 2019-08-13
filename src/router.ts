import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Single from "./views/SingleAtricle.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "/", redirect: {name: "single"},
                },
                {
                    path: "/single",
                    name: "single",
                    component: Single,
                },
                {
                    path: "/multiple",
                    name: "multiple",
                    component: () => import(/* webpackChunkName: "about" */ "./views/MultipleArticle.vue"),
                }
            ]
        }
    ],
});
