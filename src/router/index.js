import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/services",
    name: "Services",

    component: () =>
      import(/* webpackChunkName: "services" */ "../views/Services.vue"),
  },
  {
    path: "/companydetail/:id",
    name: "company-detail",
    component: () =>
      import(
        /* webpackChunkName: "companydetail" */ "../views/CompanyDetail.vue"
      ),
    params: true,
  },
  {
    path: "/writereview/:id",
    name: "write-review",
    component: () =>
      import(/* webpackChunkName: "review" */ "../views/WriteReview.vue"),
  },
  {
    path: "/createcompany",
    name: "create-company",
    component: () =>
      import(
        /* webpackChunkName: "createcompany" */ "../views/CreateCompany.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
