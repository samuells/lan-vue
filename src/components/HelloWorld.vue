<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<BaseButton>Test</BaseButton>
		<p>
			For a guide and recipes on how to configure / customize this project,<br />
			check out the
			<a href="https://cli.vuejs.org" target="_blank" rel="noopener"
				>vue-cli documentation</a
			>.
		</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
	name: "HelloWorld",
	components: {
		BaseButton,
	},
	props: {
		msg: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.hello {
	display: block;
}
</style>
