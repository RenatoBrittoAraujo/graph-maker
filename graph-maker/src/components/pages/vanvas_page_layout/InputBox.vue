<template>
	<div class="inputbox">
		<div class="bg-dark text-light p-3">
			<h5>Input weight of selected edge:</h5>
			<input type="integer" class="m-3" placeholder="Weight" v-model="weight"><br>
			<button class="btn btn-success" @click="$emit('edge-weight', weight)">Set weight</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InputBox',
	data () {
		return {
			weight: null
		}
	},
	methods: {
		setWeight() {
			return 'batata'
		}
	}
}
</script>

<style scoped>

</style>