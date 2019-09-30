import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Produto from '@/components/Produto'
import ProdutoForm from '@/components/ProdutoForm'
import Cliente from '@/components/Cliente'
import Estoque from '@/components/Estoque'
import NotaFiscal from '@/components/NotaFiscal'


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/produto', component: Produto },
  { path: '/produto/form/:id?', component: ProdutoForm },
  { path: '/cliente', component: Cliente },
  { path: '/estoque', component: Estoque },
  { path: '/notaFiscal', component: NotaFiscal }
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
