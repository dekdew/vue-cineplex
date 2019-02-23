<template>
<div class="container">
  <b-field class="box">
    <b-input placeholder="Search..." type="search" icon="search" :value="value" @input="updateValue($event)"/>
  </b-field>
	</div>

</template>

<script>
export default {
	name: 'Search',
	props: ['value'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.box {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	margin-top: -2.5em;
	box-shadow: 0 0 20px #0003;
	min-width: 40vw;
}
</style>
