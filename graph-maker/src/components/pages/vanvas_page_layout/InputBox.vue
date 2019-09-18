<template>
	<div class="inputbox">
		<div class="bg-dark text-light p-3">
			<h5>Input weight of selected edge:</h5>
			<input type="integer" class="m-3" placeholder="Weight"><br>
			<button class="btn btn-success" v=on:click="$emit('edge-weight', )">Set weight</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputBox',
	methods: {
		setWeight() {
			return 'batata'
		}
	}
}
</script>

<style scoped>

</style>