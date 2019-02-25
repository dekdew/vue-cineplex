<template>
  <b-tabs class="pt1 is-hidden-mobile" expanded>
    <b-tab-item v-for="day in week" :key="day.getDate()" :label="day.toDateString()"></b-tab-item>
  </b-tabs>
</template>

<script>
export default {
  name: 'Step1',
  data() {
    return {
			week: []
    }
  },
  mounted() {
		let day = new Date()
		let nextDay

		for (let i=0; i<5; i++) {
			this.week.push(day)
			nextDay = new Date(day)
			nextDay.setDate(day.getDate() + 1)
			day = new Date(nextDay)
		}

		console.log(this.week)
  }
}
</script>

