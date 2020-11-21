<template>
	<div class="flex items-center justify-center">
		<CountdownClock :date="date" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountdownClock from '@/components/CountdownClock.vue';

export default defineComponent({
	name: 'Countdown',
	components: {
		CountdownClock,
	},
	data() {
		return {
			date: null as null | Date,
		};
	},
	created() {
		this.date = new Date(Date.now());
		this.date.setFullYear(this.date.getFullYear() + 1);
	},
});
</script>
