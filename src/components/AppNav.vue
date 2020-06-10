<template>
	<div>
		<router-link to="/">
			<b-button type="button" id="todayMeal_btn" :disabled="$store.state.btnDisplay">Today Meal</b-button>
		</router-link>
		<router-link to="/manual">
			<b-button type="button" id="detail_btn" :disabled="$store.state.btnDisplay">Manual</b-button>
		</router-link>
		<router-link to="/start">
			<b-button variant="danger" type="button" id="start_btn" @click="showBtn" :disabled="$store.state.btnDisplay">Start</b-button>
		</router-link>
		<router-link to="/userset">
			<b-button variant="success" type="button" id="userSet_btn" @click="showBtn" :disabled="$store.state.btnDisplay">UserSet</b-button>
		</router-link>
	</div>
</template>

<script>
export default {
	methods: {
		showBtn() {
			this.$store.state.btnDisplay = true;
		},
	},
};
</script>

<style></style>
