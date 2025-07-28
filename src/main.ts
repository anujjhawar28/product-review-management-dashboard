import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import routes from "./routes/index";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";
import { definePreset } from "@primeuix/themes";
import ToastService from "primevue/toastservice";
import registerComponents from "../registerComponents";

const CustomPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{blue.50}",
      100: "{blue.100}",
      200: "{blue.200}",
      300: "{blue.300}",
      400: "{blue.400}",
      500: "{blue.500}",
      600: "{blue.600}",
      700: "{blue.700}",
      800: "{blue.800}",
      900: "{blue.900}",
      950: "{blue.950}",
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{gray.50}",
          100: "{gray.100}",
          200: "{gray.200}",
          300: "{gray.300}",
          400: "{gray.400}",
          500: "{gray.500}",
          600: "{gray.600}",
          700: "{gray.700}",
          800: "{gray.800}",
          900: "{gray.900}",
          950: "{gray.950}",
        },
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}",
        },
      },
    },
  },
});
const app = createApp(App);
app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: CustomPreset,
    options: {
      darkModeSelector: ".app-dark",
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});
registerComponents(app);
app.use(ToastService);
app.use(routes);
app.use(createPinia());
app.mount("#app");
