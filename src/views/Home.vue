<template>
  <div class="container is-fluid body-principal">
      <div class="columns">
        <div class="column">
          <list-members></list-members>
        </div>
      </div>
    <div class="columns">
      <div class="column">
        <p class="title is-4">Staff The Magician School Education</p>
      </div>
    </div>
    <div class="columns">
      <div class="column">
       <staff></staff>
      </div>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex';
import ListMembers from '../components/ListMembers';
import Staff from "../components/Staff";
export default {
  name: 'Home',
  components: {
    Staff,
    ListMembers
  },
  computed: {
    ...mapState(['listMembersHouse'])
  }

}
</script>
<style scoped lang="scss">
.body-principal {
  background-color: aliceblue;
}
</style>
