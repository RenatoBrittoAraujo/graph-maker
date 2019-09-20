<template>
	<div class="inputbox">
		<div class="p-3">
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
	props: ['current'],
	methods: {
		setWeight() {
			return 'batata'
		}
	},
	created() {
		this.weight = this.current
	}
}
</script>

<style scoped>

</style>