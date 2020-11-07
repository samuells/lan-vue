<template>
	<TheHeader />
	<router-view />
	<component :is="story.content.component" :blok="story.content"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import StoryblokClient from 'storyblok-js-client';

const token = 'Kn712WLwyvnBISetVn8aoQtt';
let storyapi = new StoryblokClient({
	accessToken: token,
});

export default defineComponent({
	name: 'App',
	components: {
		TheHeader,
	},
	data() {
		return {
			story: {
				content: {
					body: [],
				},
			},
		};
	},
	created() {
		window.storyblok.init({
			accessToken: token,
		});
		window.storyblok.on('change', () => {
			this.getStory('home', 'draft');
		});
		window.storyblok.pingEditor(() => {
			if (window.storyblok.isInEditor()) {
				this.getStory('home', 'draft');
			} else {
				this.getStory('home', 'published');
			}
		});
	},
	methods: {
		getStory(slug: string, version: string) {
			storyapi
				.get('cdn/stories/' + slug, {
					version: version,
				})
				.then((response) => {
					this.story = response.data.story;
					console.log(this.story);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
});
</script>
