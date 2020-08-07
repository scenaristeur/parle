<template>
  <div class="display-button">
    <b-button :pressed.sync="display" :to="route" variant="primary">{{ mode }}</b-button>
  </div>
</template>

<script>
export default {
  name: 'DisplayButton',
  data() {
    return {
      display: false,
    }
  },
  computed: {
    mode(){
      return this.display ? "By date" : "By subject"
    },
    route(){
      return this.display ? "/" : "bysubject"
    }
  }
}
</script>
