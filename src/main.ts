import '@/assets/styles.scss';

import App from './App.vue';
import ArticlePreview from '@/components/ArticlePreview.vue';
import StoryblokVue from 'storyblok-vue';
import { createApp } from 'vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(StoryblokVue);

// components
app.component('ArticlePreview', ArticlePreview);

app.mount('#app');
