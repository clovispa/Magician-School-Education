<template>
  <div class="container is-fluid body-principal">
      <div class="columns">
        <div class="column">
          <list-members></list-members>
        </div>
      </div>
  </div>

</template>

<script>
import {mapState} from 'vuex';
import ListMembers from '../components/ListMembers';
export default {
  name: 'Home',
  components: {
    ListMembers
  },
  computed: {
    ...mapState(['listMembersHouse']),
  }

}
</script>
<style scoped lang="scss">
.body-principal {
  background-color: aliceblue;
}
</style>
