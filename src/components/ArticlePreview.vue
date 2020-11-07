<template>
	<article class="md:max-w-4xl md:mx-auto">
		<img class="mx-auto" :src="src" />
		<h2 class="text-3xl">
			<a href="#">
				<slot name="headline" />
			</a>
		</h2>
		<p class="mt-3"><slot /></p>
		<BaseButton class="mt-5">Read More</BaseButton>
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton.vue';

export default defineComponent({
	name: 'ArticlePreview',
	components: {
		BaseButton,
	},
	props: {
		src: {
			type: String,
			required: true,
		},
	},
	methods: {
		onClickMethod() {
			console.log('clicked');
		},
	},
});
</script>

<style scoped lang="scss">
article {
	color: #ffffff;
}

p {
	text-align: left;
}
</style>
