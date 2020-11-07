<template>
	<div v-editable="blok">
		<template v-for="item in blok.body" :key="item._uid">
			<component :is="item.component" :blok="item"></component>
		</template>
	</div>
</template>

<script>
export default {
	name: 'Page',
	props: ['blok'],
};
</script>
