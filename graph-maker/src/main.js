import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

import About from './components/pages/AboutPage'
import Home from './components/pages/CanvasPage'
import Instructions from './components/pages/InstructionsPage'

Vue.config.productionTip = false

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/instructions', component: Instructions }
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})