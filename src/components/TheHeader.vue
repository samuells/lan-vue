<template>
	<header>
		<TheNavigation />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default defineComponent({
	name: "TheHeader",
	components: {
		TheNavigation,
	},
});
</script>

<style scoped lang="scss">
@use '../assets/variables' as *;
</style>
