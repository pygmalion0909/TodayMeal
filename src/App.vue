<template>
	<div id="app">
		<div>
			<b-card id="test_layout" no-body style="max-width: 30rem;" img-src="https://placekitten.com/380/200" img-alt="Image" img-top>
				<template v-slot:header>
					<h4 class="mb-0">
						<a href="/">Today Meal</a>
					</h4>
				</template>
				<b-list-group flush>
					<b-list-group-item>
						<AppNav></AppNav>
					</b-list-group-item>
				</b-list-group>
				<b-list-group flush>
					<b-list-group-item>
						<router-view></router-view>
					</b-list-group-item>
				</b-list-group>
				<b-card-footer>
					<FooterPage></FooterPage>
				</b-card-footer>
			</b-card>
		</div>
	</div>
</template>

<script>
import AppNav from '@/components/AppNav';
import FooterPage from '@/views/FooterPage';

export default {
	components: {
		AppNav,
		FooterPage,
	},
};
</script>

<style>
#test {
	color: red;
}
#test_layout {
	margin: 10px auto;
}
ul {
	list-style: none;
}
</style>
