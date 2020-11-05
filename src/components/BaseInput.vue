<template>
	<label>
		<slot></slot>
		<input
			class="appearance-none w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			:placeholder="placeholder"
			:type="type"
		/>
	</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BaseInput",
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: "text",
		},
	},
});
</script>

<style scoped lang="scss">
@use '../assets/variables' as *;

input,
label {
	display: block;
}

input {
	text-align: inherit;
}
</style>
