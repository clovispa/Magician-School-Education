<template>
  <div>
    <div class="field is-horizontal is-4">
      <div class="field-label is-normal">
        <label class="label">Search by name</label>
      </div>
      <div class="field-body">
        <div class="field">
            <input class="input" type="text" v-model="search" placeholder="Search Name">
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <div class="field-label is-normal">
          <button class="button is-black" @click="orderName">Order by Name</button>
        </div>
      </div>
      <div class="column is-2">
        <div class="field-label is-normal">
          <button class="button is-black" @click="reverseName">Order by Last Name</button>
        </div>
      </div>
      <div class="column">
        <sort-different></sort-different>
      </div>
    </div>
      <div class="columns   is-multiline">
        <div class="column is-4 " v-for="item in filterName " :key="item.id">
          <br>
         <div class="card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image figure-harryPotter">
                    <img class="img" :src="item.image" alt="item.name">
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4">{{ item.name}}</p>
                  <p class="subtitle is-6"><strong>blood status :</strong> {{ item.ancestry }}</p>
                </div>
              </div>
              <div class="columns">
                <div class="column size-text"><strong class="text-strong">Gender:</strong> {{ item.gender }}</div>
                <div class="column size-text"><strong class="text-strong">Year Birth:</strong> {{ item.yearOfBirth }}</div>
                <div class="column size-text"><strong class="text-strong">Eyes:</strong> {{ item.eyeColour }}</div>
                <div class="column size-text"><strong class="text-strong">Hair:</strong> {{ item.hairColour }}</div>
              </div>
              <div class="columns">
                <div class="column size-text"><strong class="text-strong">Patronus:</strong> {{ item.patronus }}</div>
                <div class="column size-text"><strong class="text-strong">Species:</strong> {{ item.species }}</div>
                <div class="column size-text"><strong class="text-strong">Birth:</strong> {{ item.dateOfBirth }}</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    <br>
  </div>
</template>
<script>
import {mapState} from 'vuex';
import SortDifferent from './SortDifferent';

export default {
  name:'viewMembers',
  components: {SortDifferent},
  data () {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState(['listMembersHouse']),
    filterName() {
      return  this.listMembersHouse.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
   beforeMount() {
    if (this.listMembersHouse === null) {
      this.$router.push('/');
    }
  },
  methods: {
    orderName() {
      this.listMembersHouse.sort((a, b) => a.name.localeCompare(b.name));
    },
    reverseName() {
      this.listMembersHouse.forEach( element => element.reverseName = element.name.split(' ').reverse().join(' '));
      this.orderLastName();
    },
    orderLastName() {
      this.listMembersHouse.sort((a, b) => a.reverseName.localeCompare(b.reverseName));
    }
  }
}
</script>
<style scoped lang="scss">

.body-HarryPotter {
  background-color: #b0adad !important;
  padding: 20px;
  border-radius: 20px;
}
.figure-harryPotter {
  height: 80px;
  width: 80px;
}
.img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.size-text {
  font-size: 12px;
}
.text-strong {
  color: #706e6e;
}
</style>
