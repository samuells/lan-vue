<template>
	<div class="text-center">
		<span class="block font-bold"><slot /></span>
		<span class="inline-block relative px-10 py-5 mt-2 w-48 text-6xl">
			{{ formattedNumber }}
		</span>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CountdownItem',
	props: {
		number: {
			type: Number,
			required: true,
		},
	},
	computed: {
		formattedNumber(): string {
			return this.number > 9
				? this.number.toString()
				: '0' + this.number.toString();
		},
	},
});
</script>

<style lang="scss" scoped>
span + span {
	&:after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(8, 3, 37, 0.4);
		transform: skew(-7deg);
		transform-origin: 50% 50%;
	}
}
</style>
