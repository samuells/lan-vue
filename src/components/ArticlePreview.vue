<template>
	<article class="md:max-w-4xl md:mx-auto">
		<img class="mx-auto max-w-lg h-40" :src="blok.src.filename" />
		<h2 class="text-3xl">
			<a href="#">
				{{ blok.headline }}
			</a>
		</h2>
		<p class="mt-3">
			{{ blok.content }}
		</p>
		<BaseButton class="mt-5">Read More</BaseButton>
	</article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import { StoryBlokImage } from '@/interface/StoryBlokImage';

interface ArticlePreviewBlok {
	src: StoryBlokImage;
	headline: string;
	content: string;
}

export default defineComponent({
	name: 'ArticlePreview',
	components: {
		BaseButton,
	},
	props: {
		blok: {
			type: Object as () => ArticlePreviewBlok,
			required: true,
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
