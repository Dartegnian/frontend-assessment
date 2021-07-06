import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/utils/routes";
import "bootstrap";

const assessment = createApp(App);

assessment.use(router);
assessment.mount("#app");
