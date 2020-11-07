<template>
	<label class="block">
		<slot></slot>
		<div class="relative block" :class="{ focus: focus }">
			<input
				class="relative block appearance-none w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				:placeholder="placeholder"
				:type="type"
				@focus="toggleFocus"
				@blur="toggleFocus"
			/>
		</div>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'BaseInput',
	props: {
		placeholder: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
	},
	data() {
		return {
			focus: false,
		};
	},
	methods: {
		toggleFocus() {
			this.focus = !this.focus;
		},
	},
});
</script>

<style scoped lang="scss">
@use '../assets/variables' as *;

input {
	text-align: inherit;
	background: none;
	z-index: 1;

	&:focus {
		transform: skew(-7deg);
	}
}

div {
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(255, 255, 255, 0.1);
		transform: skew(-7deg);
		transition: 0.3s background-color ease;
		z-index: 0;
	}

	&.focus::after {
		color: #080325;
		background-color: #ffffff;
	}
}
</style>
