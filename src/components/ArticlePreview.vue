<template>
	<article>
		<img :src="src" />
		<h2>
			<a href="#">
				<slot name="headline" />
			</a>
		</h2>
		<p><slot /></p>
		<BaseButton>Read More</BaseButton>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
	name: "ArticlePreview",
	components: {
		BaseButton,
	},
	props: {
		src: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
article {
	color: #ffffff;
}
</style>
