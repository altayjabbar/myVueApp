import { createApp } from 'vue'
import App from './App.vue'
import FirendContact from './components/FirendContact.vue';
const app =createApp(App);

app.component('firend-contact', FirendContact);
app.mount('#app')
