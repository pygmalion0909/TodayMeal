<template>
	<div>
		<div id="content">
			<!-- 카테고리 -->
			<div id="category_content">
				<p>Today Meal category List</p>
				<div id="category_list" v-for="(index, item) in this.$store.state.categoryData" :key="item">
					<ul>
						<li>
							<span>{{ item }} . </span>
							<span>{{ index }}</span>
						</li>
					</ul>
				</div>
				<div id="category_btn_box">
					<button id="category_btn" @click="selectCategory" :disabled="todayCategoryBtn">선택</button>
				</div>
			</div>
			<!-- 오늘메뉴 -->
			<div id="menu_content" v-if="todayMealContent">
				<div id="todayManu_content">
					<p>Today Meal List</p>
					<div id="todayManu_list" v-for="(index, item) in todayMealList" :key="item">
						<ul>
							<li>
								<span>{{ item }} . </span>
								<span>{{ index }}</span>
							</li>
						</ul>
					</div>
					<div id="manu_btn_box">
						<button id="manu_btn" @click="selectTodayMeal" :disabled="todayMealBtn">선택</button>
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
			count: 0,
			todayMealContent: false,
			todayMealBtn: false,
			todayCategoryBtn: false,
			todayCategory: '',
			todayMealList: '',
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
		selectCategory() {
			//2번까지 play 가능
			this.count++;
			console.log(this.count);
			if (this.count >= 3) {
				console.log('초과!');
				//조커사진 나오는 url로 이동 <새로고침하게 만들기>
			} else {
				this.todayMealContent = true;
				const numbering = this.rendomNum(this.$store.state.categoryData);
				const category = this.$store.state.categoryData[numbering];
				this.todayCategory = category;
				//팝업창으로 바꾸기
				alert(`today category is ${this.todayCategory} !!!`);
				//카테고리에 맞는 메뉴 리스트
				this.todayMealList = this.$store.state.todayMealData[this.todayCategory];
				// console.log('카테고리에 맞는 메뉴 리스트 ', this.todayMealList);

				//category버튼 비활성화
				this.todayMealBtn = false;
				//todayMeal버튼 활성화
				this.todayCategoryBtn = true;
			}
		},
		selectTodayMeal() {
			const todayMealNum = this.rendomNum(this.todayMealList);
			// console.log('todayMealNum>>', todayMealNum);
			const todayMeal = this.todayMealList[todayMealNum];
			// console.log('todayMeal>>', todayMeal);
			alert(`today meal is ${todayMeal} !!!`);
			this.todayMealBtnStatus = '다시하기';
			this.init();
		},
		init() {
			this.todayCategoryBtn = false;
			this.todayMealContent = false;
			this.todayMealBtn = false;
		},
	},
};
</script>

<style></style>
