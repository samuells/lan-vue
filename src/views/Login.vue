<template>
	<form id="login" class="p-8 text-center sm:max-w-md mx-auto mt-10">
		<h1 class="text-white text-4xl uppercase">Login</h1>
		<BaseInput type="email" placeholder="E-Mail-Adresse" class="my-8">
			E-Mail-Adresse
		</BaseInput>

		<BaseInput type="password" placeholder="Passwort" class="my-8">
			Passwort
		</BaseInput>

		<BaseButton class="w-full">Login</BaseButton>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
	name: "Login",
	components: {
		BaseInput,
		BaseButton,
	},
});
</script>

<style lang="scss" scoped>
form {
	background-color: rgba(8, 3, 37, 0.8);
}
</style>
