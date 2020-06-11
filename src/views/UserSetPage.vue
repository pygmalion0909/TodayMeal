<template>
	<div>
		<div>
			<p>Insert Categroy please</p>
			<div>
				<ul>
					<li v-for="(item, index) in this.$store.state.userSetCategory" :key="index">{{ index + 1 }}. {{ item }}</li>
				</ul>
			</div>
			<div>
				<form @submit.prevent="insertCategory">
					<input type="text" v-model="categoryValue" />
					<button type="submit">추가</button>
				</form>
			</div>
			<div>
				<button type="button" @click="completeCategory">완료</button>
			</div>
		</div>
		<b-list-group v-if="showMeal">
			<UserSetMealPage></UserSetMealPage>
		</b-list-group>
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
			showMeal: false,
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
				this.showMeal = true;
			} else {
				alert('등록한 카테고리가 없습니다.');
			}
		},
	},
};
</script>

<style></style>
