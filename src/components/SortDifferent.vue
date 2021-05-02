<template>
<div>
  <div class="columns">
    <div v-if="viewSelect" class="column">
      <div class="select">
        <select v-model="option">
          <option  v-for="option in data" :key="option" :value="option">{{option}}</option>
        </select>
      </div>
      <button class="button  is-black" @click="filteredItems(option)">Sort</button>
    </div>
    <div class="column">
     <span class="icon-text cursor-sort" @click="viewOptions">
       <span>Add new sort filter</span>
        <span class="icon">
          <font-awesome-icon icon="cogs"></font-awesome-icon>
        </span>
      </span>
    </div>
  </div>

</div>
</template>
<script>

import {mapState} from 'vuex';
import _ from "lodash";
export default {
  name: 'SortDifferent',
  data () {
    return {
      data: [],
      option: '',
      viewSelect: false
    }
  },
  computed: {
    ...mapState(['listMembersHouse'])
  },
  methods: {
    viewOptions() {
      this.getItems();
    this.viewSelect = !this.viewSelect;
    },
    getItems() {
      this.listMembersHouse.forEach( item => this.data =  Object.keys(item));
    },
    filteredItems (item) {
      let items = _.sortBy(this.listMembersHouse, [item], ['asc']);
      this.$store.commit('setListMembers', items);
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor-sort{
  cursor:pointer; cursor: hand;
}
</style>
