<template>
	<div>
		<div id="content">
			<!-- 카테고리 -->
			<div id="category_content">
				<span id="category_list" v-for="item in categoryData" :key="item">
					<span>{{ item }}</span>
				</span>
				<div id="category_btn_box">
					<button id="category_btn" @click="selectCategory">선택</button>
				</div>
			</div>
			<!-- 오늘메뉴 -->
			<div id="menu_content" v-if="display">
				<div id="todayManu_content">
					<span id="todayManu_list" v-for="item in todayMealList" :key="item">
						<span>{{ item }}</span>
					</span>
					<div id="manu_btn_box">
						<button id="manu_btn" @click="selectTodayMeal">선택</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			display: false,
			todayCategory: '',
			todayMealList: '',
			categoryData: ['한', '서'],
			todayMealData: {
				한: ['1', '2', '3'],
				서: ['일', '이', '삼'],
			},
		};
	},
	methods: {
		rendomNum(target) {
			return parseInt(Math.random() * target.length);
		},
		selectCategory() {
			const numbering = this.rendomNum(this.categoryData);
			const category = this.categoryData[numbering];
			this.todayCategory = category;
			//팝업창으로 바꾸기
			// alert(`today category is ${this.todayCategory} !!!`);
			//카테고리에 맞는 메뉴 리스트
			this.todayMealList = this.todayMealData[this.todayCategory];
			// console.log('카테고리에 맞는 메뉴 리스트 ', this.todayMealList);
			//todayMeal 선택 영역 활성화
			this.display = true;
		},
		selectTodayMeal() {
			const todayMealNum = this.rendomNum(this.todayMealList);
			// console.log('todayMealNum>>', todayMealNum);
			const todayMeal = this.todayMealList[todayMealNum];
			console.log('todayMeal>>', todayMeal);
			// alert(`today meal is ${todayMeal} !!!`);
			// this.init();
		},
		init() {
			this.display = false;
		},
	},
};
</script>

<style scoped>
#test2 {
	transition: 1s;
}
</style>
