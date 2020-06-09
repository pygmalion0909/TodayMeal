<template>
	<div>
		<router-link to="/">
			<input type="button" value="Today Meal" id="todayMeal_btn" :disabled="btnDisplay" />
		</router-link>
		<router-link to="/detail">
			<input type="button" value="Detail" id="detail_btn" :disabled="btnDisplay" />
		</router-link>
		<router-link to="/start">
			<input type="button" value="Start" id="start_btn" @click="showBtn" :disabled="btnDisplay" />
		</router-link>
		<router-link to="/userset">
			<input type="button" value="UserSet" id="userSet_btn" @click="showBtn" :disabled="btnDisplay" />
		</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			btnDisplay: false,
		};
	},
	methods: {
		showBtn() {
			this.btnDisplay = true;
		},
	},
};
</script>

<style></style>
