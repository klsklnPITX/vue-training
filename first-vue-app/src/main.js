//Package import
import { createApp } from 'vue';
// Import from custom file - specify path to file
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue"

const app = createApp(App)

app.component("friend-contact", FriendContact)

app.mount('#app')
