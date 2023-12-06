import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as Potree from "potree-and-type"

window.Potree = Potree;

createApp(App).mount('#app')
