<template>
	<div>
		<div v-for="item in this.$store.state.userSetMeal" :key="item.keys">
			<label>{{ Object.keys(item)[0] }}</label>
			<input type="text" name="" id="" />
			<button @click="test">추가</button>
		</div>
		<button>완료</button>
	</div>
</template>

<script>
export default {
	created() {
		console.log('created>>', this.$store.state.userSetMeal);
	},
	methods: {
		test() {
			console.log('1111');
			console.log(value);
		},
	},
};
</script>

<style></style>
