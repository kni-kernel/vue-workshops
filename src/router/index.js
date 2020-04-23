import Vue from "vue";
import VueRouter from "vue-router";
import ToDoListPage from "../views/ToDoListPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ToDoList",
    component: ToDoListPage
  },
  {
    path: "/add-item",
    name: "Add To Do",
    component: () => import("../views/AddToDoPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
