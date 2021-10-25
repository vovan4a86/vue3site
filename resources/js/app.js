/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from "vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('main-component', require('./components/MainComponent.vue').default);
Vue.component('features-component', require('./components/FeaturesComponent.vue').default);
Vue.component('pricing-component', require('./components/PricingComponent.vue').default);
Vue.component('album-component', require('./components/AlbumComponent.vue').default);
Vue.component('about-component', require('./components/AboutComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

const links = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav.nav-pills');

nav.addEventListener('click', e => {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active')
    }
})

links.forEach(link => ()=> {
    link.addEventListener('click', e => {
    })
})
