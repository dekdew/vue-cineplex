<template>
  <b-tabs class="pt1 is-hidden-mobile" expanded>
    <b-tab-item v-for="day in week" :key="day.getDate()" :label="day.toDateString()">
      <b-collapse v-for="region in cinemas" :key="region.id" class="card my2">
            <div slot="trigger" slot-scope="props" class="card-header has-background-info">
                <p class="card-header-title has-text-white">
                    {{ region.name }}
                </p>
                <a class="card-header-icon has-text-white">
                    <b-icon
                        :icon="props.open ? 'angle-down' : 'angle-up'">
                    </b-icon>
                </a>
            </div>
            <div class="card-content">
                a
            </div>
        </b-collapse>
    </b-tab-item>
  </b-tabs>
</template>

<script>
export default {
  name: 'Step1',
  props: ['cinemas'],
  data() {
    return {
      week: [],
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
  }
}
</script>

