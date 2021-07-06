import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/utils/routes";

const assessment = createApp(App);

assessment.use(router);
assessment.mount('#app');
