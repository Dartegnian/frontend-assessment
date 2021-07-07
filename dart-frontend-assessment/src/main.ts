import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/utils/routes";
import { store } from "@/store/exercise-two-store";
import "bootstrap";

const assessment = createApp(App);

assessment.use(store);
assessment.use(router);
assessment.mount("#app");
