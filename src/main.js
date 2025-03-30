import "./assets/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { register } from "swiper/element/bundle";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// Importar FontAwesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
register();
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon); // Registrar el componente globalmente
app.mount("#app");
