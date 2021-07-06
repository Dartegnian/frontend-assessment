import { Router, createRouter, createWebHashHistory } from "vue-router";
import { Component } from "vue";

import LandingPage from "@/pages/LandingPage.vue";
import ExerciseOne from "@/pages/ExerciseOne.vue";

const routes: Array<{ path: string, component: Component }> = [
	{ path: "/", component: LandingPage },
	{ path: "/exercise-one", component: ExerciseOne },
];

const router: Router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
