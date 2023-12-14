import { createApp } from 'vue';
import App from './App.vue';

import activeUser from './components/activeUser';
import userData from './components/userData.vue'

// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);

app.component('active-user',activeUser);
app.component('user-data', userData);

app.mount('#app');

