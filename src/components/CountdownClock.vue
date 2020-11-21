<template>
	<div class="flex">
		<CountdownItem class="ml-5" :number="daysLeft"> Days </CountdownItem>
		<CountdownItem class="ml-5" :number="hoursLeft"> Hours </CountdownItem>
		<CountdownItem class="ml-5" :number="minutesLeft"> Minutes </CountdownItem>
		<CountdownItem class="ml-5" :number="secondsLeft"> Seconds </CountdownItem>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CountdownItem from '@/components/CountdownItem.vue';

export default defineComponent({
	name: 'CountdownClock',
	components: {
		CountdownItem,
	},
	props: {
		date: {
			type: Date,
			default: () => new Date(),
		},
	},
	setup(props) {
		let dateInSeconds = ref(Math.floor(new Date(props.date).getTime() / 1000));
		let dateDifferenceSeconds = ref(0);

		function countdownTimer(): void {
			const currentDate = new Date(Date.now());
			const currentDateSeconds = Math.floor(currentDate.getTime() / 1000);

			dateDifferenceSeconds.value = dateInSeconds.value - currentDateSeconds;

			if (dateDifferenceSeconds.value > 0) {
				setTimeout(() => {
					countdownTimer();
				}, 1000);
			}
		}
		return {
			dateDifferenceSeconds,
			countdownTimer,
		};
	},
	computed: {
		differenceDate(): Date {
			return new Date(this.dateDifferenceSeconds * 1000);
		},
		daysLeft(): number {
			return Math.floor(this.dateDifferenceSeconds / 60 / 60 / 24);
		},
		hoursLeft(): number {
			const remainingTime =
				this.dateDifferenceSeconds - this.daysLeft * 60 * 60 * 24;

			return Math.floor(remainingTime / 60 / 60);
		},
		minutesLeft(): number {
			const remainingTime =
				this.dateDifferenceSeconds -
				this.daysLeft * 60 * 60 * 24 -
				this.hoursLeft * 60 * 60;

			return Math.floor(remainingTime / 60);
		},
		secondsLeft(): number {
			const remainingTime =
				this.dateDifferenceSeconds -
				this.daysLeft * 60 * 60 * 24 -
				this.hoursLeft * 60 * 60 -
				this.minutesLeft * 60;

			return Math.floor(remainingTime);
		},
	},
	created() {
		this.countdownTimer();
	},
});
</script>
