import { computed, onMounted, onUnmounted, ref } from "vue";

/**
 * Watches for changes in window width using event listeners
 * and returns screen information and active Bootstrap
 * breakpoint.
 * StackOverflow reference:
 * questions/47219272/how-can-i-use-window-size-in-vue-how-do-i-detect-the-soft-keyboard
 *
 * @typedef { Object } ScreenWidthData
 * @property { string } width - screen width
 * @return { ScreenWidthData } ScreenWidthData - screen width and active breakpoint
 */
export default function() {
	const windowWidth = ref(window.innerWidth);
	const onWidthChange = () => windowWidth.value = window.innerWidth;
	const { sm, md, lg } = { sm: 576, md: 768, lg: 992 };
	const activeBreakpoint = ref("invalid");

	onMounted(() => window.addEventListener("resize", onWidthChange));
	onUnmounted(() => window.removeEventListener("resize", onWidthChange));

	const width = computed(() => windowWidth.value);

	const breakpoint = computed(() => {
		if (windowWidth.value < sm) {
			activeBreakpoint.value = "xs";
		} else if (windowWidth.value >= sm && windowWidth.value < md) {
			activeBreakpoint.value = "sm";
		} else if (windowWidth.value >= md && windowWidth.value < lg) {
			activeBreakpoint.value = "md";
		} else if (windowWidth.value >= lg) {
			activeBreakpoint.value = "lg";
		} else {
			activeBreakpoint.value = "invalid";
		}

		return activeBreakpoint.value;
	});

	return { width, breakpoint };
}
