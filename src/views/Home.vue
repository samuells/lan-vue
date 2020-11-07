<template>
	<ArticlePreview
		v-for="index in articles"
		:key="index"
		:src="logo"
		class="p-8"
	>
		<template #headline>Headline</template>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quidem minus
		accusantium mollitia quos iusto quo? Distinctio vel officiis ab accusamus in
		nemo ut voluptatibus nihil laborum. Placeat, nesciunt doloribus.
	</ArticlePreview>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticlePreview from '@/components/ArticlePreview.vue';

export default defineComponent({
	name: 'Home',
	components: {
		ArticlePreview,
	},
	data() {
		return {
			articles: 5,
		};
	},
	computed: {
		logo(): string {
			return require('@/assets/logo.png');
		},
	},
});
</script>
