import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

function add(num1: number, num2: number) {
     return num1 + num2;
    }
    
    console.log(add(1, 2));
    