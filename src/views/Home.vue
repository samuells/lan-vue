<template>
	<h1
		v-if="content"
		class="text-4xl text-center my-5 border-gray-700 border-solid border-b-2"
	>
		{{ content?.title }}
	</h1>
	<main v-if="content">
		<div v-editable="content">
			<template v-for="item in content.body" :key="item._uid">
				<component :is="item.component" :blok="item"></component>
			</template>
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import api from '@/utils/api';
import { HomeContent } from '@/interface/content/Home';

export default defineComponent({
	name: 'Home',
	data() {
		return {
			content: null as null | HomeContent,
		};
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
		},
	},
});
</script>
