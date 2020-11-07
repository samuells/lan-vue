import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';

// route level code-splitting
// this generates a separate chunk (login.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Login = () => import('@/views/Login.vue');

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
