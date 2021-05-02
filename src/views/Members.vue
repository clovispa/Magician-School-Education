<template>
  <div class="container">
   <view-members :dataFull="listMembersHouse"></view-members>
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
