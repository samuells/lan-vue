<template>
	<h1 v-if="content">{{ content?.title }}</h1>
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
import api from '@/utils/api';
import { HomeContent } from '@/interface/content/home';

export default defineComponent({
	name: 'Home',
	components: {
		ArticlePreview,
	},
	data() {
		return {
			articles: 5,
			content: null as null | HomeContent,
		};
	},
	computed: {
		logo(): string {
			return require('@/assets/logo.png');
		},
	},
	created() {
		this.fetchData();

		// if (this.$storyblok) {
		// 	this.$storyblok.init();

		// 	// Reload the browser if the content
		// 	// is saved or published in the editor.
		// 	this.$storyblok.on(['change', 'published'], () =>
		// 		window.location.reload()
		// 	);

		// 	// Live update the content
		// 	// in the Visual Editor.
		// 	this.$storyblok.on('input', ({ story }) => {
		// 		this.content = story.content;
		// 	});
		// }
	},
	methods: {
		async fetchData() {
			const { data } = await api.get('cdn/stories/home');
			this.content = data.story.content;
			console.log(this.content);
		},
	},
});
</script>
