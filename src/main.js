import './assets/main.css'
import 'vuetify/styles'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as directives from 'vuetify/directives'


const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
