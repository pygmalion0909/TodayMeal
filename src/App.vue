<template>
	<div id="app">
		<div>
			<b-card no-body style="max-width: 20rem;" img-src="https://placekitten.com/380/200" img-alt="Image" img-top id="test_layout">
				<template v-slot:header>
					<h4 class="mb-0">Today Meal</h4>
				</template>
				<AppNav></AppNav>
				<b-card-body>
					<!-- <router-view></router-view> -->
					<!-- <b-card-title>Card Title</b-card-title>
					<b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
					<b-card-text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</b-card-text> -->
				</b-card-body>

				<b-list-group flush>
					<router-view></router-view>
					<!-- <b-list-group-item>Cras justo odio</b-list-group-item>
					<b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
					<b-list-group-item>Vestibulum at eros</b-list-group-item> -->
				</b-list-group>
				<b-card-footer>
					<ul>
						<li>@capyright superpil</li>
						<li>@capyright superpil sfsdafasdfsdafasfasfeefw</li>
						<li>@capyright superpil</li>
						<li>@capyright superpil</li>
					</ul>
				</b-card-footer>

				<!-- <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img> -->
			</b-card>
		</div>
		<!-- 실질 -->
		<!-- <b-container class="bv-example-row">
			<div>
				<AppNav></AppNav>
				<router-view></router-view>
			</div>
		</b-container> -->
	</div>
</template>

<script>
import AppNav from '@/components/AppNav';
export default {
	components: {
		AppNav,
	},
};
</script>

<style>
#test_layout {
	margin: 0 auto;
}
</style>
