import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/newFriend.vue';

const app =createApp(App);

app.component('friend-contacts', FriendContact);
app.component('new-friend',NewFriend)
app.mount('#app')
