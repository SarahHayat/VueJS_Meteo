import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import VuePresenter from '../views/VuePresenter.vue'
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router( {
    routes: [
        { path: '/',              name: 'Home',         component: Home },
        { path: '/vue-presenter', name: 'VuePresenter', component: VuePresenter },
        { path: '*',              name: 'NotFound',     component: NotFound }
    ]
});