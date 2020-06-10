<template>
	<div id="app">
		<div>
			<AppNav></AppNav>
			<router-view></router-view>
		</div>
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

<style></style>
