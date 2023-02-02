import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/reset.css";
import "./assets/main.css";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as labComponents from "vuetify/labs/VDataTable";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components: {
    ...components,
    ...labComponents,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App).use(createPinia()).use(vuetify).mount("#app");
