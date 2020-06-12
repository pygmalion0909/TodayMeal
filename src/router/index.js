import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		// {
		// 	path: '/',
		// 	redirect: '/',
		// },
		{
			path: '/manual',
			component: () => import('@/views/ManualPage.vue'),
		},
		{
			path: '/start',
			component: () => import('@/views/StartPage.vue'),
		},
		{
			path: '/userset',
			component: () => import('@/views/UserSetPage.vue'),
		},
		// {
		// 	path: '/*',
		// 	component: () => import('@/views/NotFound.vue'),
		// },
	],
});
