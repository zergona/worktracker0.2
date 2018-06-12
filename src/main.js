// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'



Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyAl-815sUp6sKW8pCzYtW6o4u5_wN2kW10',
  authDomain: 'timetracker2-d9d0d.firebaseapp.com',
  databaseURL: 'https://timetracker2-d9d0d.firebaseio.com',
  projectId: 'timetracker2-d9d0d',
  storageBucket: 'timetracker2-d9d0d.appspot.com',
  messagingSenderId: '947103918546'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
