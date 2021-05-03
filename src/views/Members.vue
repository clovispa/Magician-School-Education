<template>
  <div>
    <div class="container is-fluid body-principal ">
      <div class="columns ">
        <div class="column">
          <view-members :dataMembersHouse="listMembersHouse"></view-members>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import ViewMembers from "../components/ViewMembers";
import {mapState} from 'vuex';
export default {
  name: 'Student',
  components: {
    ViewMembers
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['listMembersHouse'])
  }
}
</script>
<style scoped lang="scss">
.body-principal {
  background-color: aliceblue !important;
}
</style>
