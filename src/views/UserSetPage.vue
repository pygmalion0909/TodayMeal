<template>
	<div>
		<div>
			<p>Insert Categroy please</p>
			<div>
				<ul>
					<li v-for="(item, index) in this.$store.state.userSetMeal" :key="index">{{ index + 1 }}. {{ item }}</li>
				</ul>
			</div>
			<div v-show="hiddenCategoryInput">
				<form @submit.prevent="insertMealList">
					<input type="text" v-model="categoryValue" />
					<button type="submit">추가</button>
				</form>
				<button type="button" @click="completeMealList">완료</button>
			</div>
			<div v-show="showTodayMealBox">
				<button @click="selectTodayMeal">Today Meal</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categoryValue: '',
			showMealInput: false,
			hiddenCategoryInput: true,
			showTodayMealBox: false,
			count: 0,
		};
	},
	created() {
		//url접근시 버튼 비활성화
		this.$store.state.btnDisplay = true;
	},
	methods: {
		rendomNum(target) {
			return parseInt(Math.random() * target.length);
		},
		insertMealList() {
			//state에 카테고리 저장
			if (this.categoryValue == '' || this.categoryValue.trim() == '') {
				alert('카테고리를 입력하세요!');
				//카테고리 값 초기화
				this.categoryValue = '';
			} else {
				//값 저장
				this.$store.state.userSetMeal.push(this.categoryValue);
				//카테고리 값 초기화
				this.categoryValue = '';
			}
		},
		completeMealList() {
			this.hiddenCategoryInput = false;
			this.showTodayMealBox = true;
		},
		selectTodayMeal() {
			this.count++;
			if (this.count >= 3) {
				alert('답은정해져있다!!!!!! 니가 먹고 싶은거 먹어라!!!!!');
			} else {
				const numbering = this.rendomNum(this.$store.state.userSetMeal);
				const todayMeal = this.$store.state.userSetMeal[numbering];
				alert(todayMeal);
				this.init();
			}
			// console.log(this.$store.state.userSetMeal[numbering]);
		},
		init() {
			this.$store.state.userSetMeal = [];
			this.showTodayMealBox = false;
			this.hiddenCategoryInput = true;
			console.log(this.$store.state.userSetMeal);
		},
	},
};
</script>

<style></style>
