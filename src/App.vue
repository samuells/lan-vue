<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	<ArticlePreview
		v-for="index in articles"
		:key="index"
		:src="require('@/assets/logo.png')"
	>
		<template #headline>
			Headline
		</template>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum quidem minus
		accusantium mollitia quos iusto quo? Distinctio vel officiis ab accusamus in
		nemo ut voluptatibus nihil laborum. Placeat, nesciunt doloribus.
	</ArticlePreview>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import ArticlePreview from "@/components/ArticlePreview.vue";

export default defineComponent({
	name: "App",
	components: {
		HelloWorld,
		ArticlePreview,
	},
	data() {
		return {
			articles: 5,
		};
	},
});
</script>

<style lang="scss">
body {
	background-color: rgba(8, 3, 37, 0.9);
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
