import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

//Khi khai báo import component ở đây thì các class import vào trong main.js này đều có thể sử dụng được
Vue.component('app-server', Home);

new Vue({
    el: '#app',
    render: h => h(App)
})
