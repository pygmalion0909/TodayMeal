<template>
	<div>
		<div>
			<p>Insert Categroy please</p>
			<div>
				<ul>
					<li v-for="(item, index) in this.$store.state.userSetCategory" :key="index">{{ index + 1 }}. {{ item }}</li>
				</ul>
			</div>
			<div v-show="hiddenCategoryInput">
				<form @submit.prevent="insertCategory">
					<input type="text" v-model="categoryValue" />
					<button type="submit">추가</button>
				</form>
				<button type="button" @click="completeCategory">완료</button>
			</div>
			<div v-show="showMealInput">
				<UserSetMealPage></UserSetMealPage>
			</div>
		</div>
	</div>
</template>

<script>
import UserSetMealPage from '@/views/UserSetMealPage';
export default {
	components: {
		UserSetMealPage,
	},
	data() {
		return {
			categoryValue: '',
			showMealInput: false,
			hiddenCategoryInput: true,
		};
	},
	created() {
		//url접근시 버튼 비활성화
		this.$store.state.btnDisplay = true;
	},
	methods: {
		insertCategory() {
			//state에 카테고리 저장
			if (this.categoryValue == '' || this.categoryValue.trim() == '') {
				alert('카테고리를 입력하세요!');
				//카테고리 값 초기화
				this.categoryValue = '';
			} else {
				//값 저장
				this.$store.state.userSetCategory.push(this.categoryValue);
				//카테고리 값 초기화
				this.categoryValue = '';
			}
		},
		completeCategory() {
			if (this.$store.state.userSetCategory.length !== 0) {
				this.showMealInput = true;
				this.hiddenCategoryInput = false;
				//사용자가 입력한 카테고리 리스트 객체 만들기
				this.$store.state.userSetCategory.forEach(value => {
					let categoryObj = {};
					categoryObj[value] = [];
					this.$store.state.userSetMeal.push(categoryObj);
				});
			} else {
				alert('등록한 카테고리가 없습니다.');
			}
		},
	},
};
</script>

<style></style>
