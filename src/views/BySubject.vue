<template>
  <div class="by-subject">
    <SubjectList />
  </div>
</template>

<script>
import SubjectList from '@/components/SubjectList.vue'


export default {
  name: 'BySubject',
  components: {
    SubjectList
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
