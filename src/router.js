import Vue from "vue";
import Router from "vue-router";
import Skills from "./components/Skills.vue";
import About from "./components/About.vue";
import Test from './components/Test.vue';
import Calculator from './components/Calculator.vue';
import markdown from '@/directives/markdown';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "skills",
      component: Skills
    },
    {
      path: "/about/:name",
      name: "about",
      component: About
    },
    {
      path: "/test",
      name: "test",
      component: Test
    },
    {
      path: "/calculator",
      name: "calc",
      component: Calculator
    }
  ]
});
