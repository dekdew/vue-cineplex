<template>
  <nav class="level pt1 is-mobile">
    <div v-for="day in week" :key="day.getDate()" class="level-item has-text-centered">
      <div>
        <a>
          <p class="h3">{{ day.toDateString().slice(0, 3) }}</p>
          <p>{{ day.toDateString().slice(4) }}</p>
        </a>
      </div>
    </div>
  </nav>
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

