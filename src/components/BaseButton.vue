<template>
	<button>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BaseButton",
});
</script>

<style scoped lang="scss">
@use '../assets/variables' as *;

button {
	position: relative;
	padding: 10px 30px;
	margin-right: 10px;
	margin-left: 10px;
	z-index: 1;
	color: #fff;
	text-decoration: none;
	background: 0 0;
	border: none;
	outline: 0;
	box-shadow: none;
	display: inline-block;
	margin-bottom: 0;
	font-weight: 400;
	text-align: center;
	white-space: nowrap;
	vertical-align: middle;
	cursor: pointer;
	font-size: 14px;
	line-height: 1.5;
	border-radius: 4px;
	user-select: none;
	transition: 0.3s color ease;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border: 2px solid #fff;
		transition: 0.3s background-color ease, 0.3s border ease;
		transform: skew(-7deg);
		z-index: -1;
	}

	&:hover {
		color: #fff;
		text-decoration: none;
		border: none;
		outline: 0;
		box-shadow: none;

		&::before {
			background-color: $primary-pink;
			border: 2px solid $primary-pink;
		}
	}
}
</style>
