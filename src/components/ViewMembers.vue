<template>
  <div>

    <div class="columns">
      <div class="column is-12">
        <router-link to="/" class="button botton-home">
          <font-awesome-icon icon="house-user"></font-awesome-icon>
        </router-link>
      </div>
    </div>

      <div class="columns">
        <div class="column is-3 ">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Search:</label>
            </div>
            <div class="field-body">
              <div class="field">
                <input class="input" type="text" v-model="search" placeholder="Search Name">
              </div>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <div class="field-label is-normal">
            <button class="button is-black" @click="orderName">Order Name</button>
          </div>
        </div>
        <div class="column is-1">
          <div class="field-label is-normal">
            <button class="button is-black" @click="reverseName">Order LastName</button>
          </div>
        </div>
      </div>
    <div class="columns">

    </div>
    <br>
    <div class="columns">
      <div class="column is-7 has-text-right">
        <span class="title is-6">Members {{membersText}}</span>
      </div>
      <div class="column is-5">
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

import SortDifferent from './SortDifferent';
import {mapState} from "vuex";


export default {
  name:'viewMembers',
  props: ['dataMembersHouse'],
  components: { SortDifferent},
  data () {
    return {
      search: '',
      student: null,
      Professors: null
    }
  },
  computed: {
    ...mapState(['membersText']),
    filterName() {
      return  this.dataMembersHouse && this.dataMembersHouse.filter(item =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
   beforeMount() {
    if (this.dataMembersHouse === null) {
      this.$router.push('/');
    }
  },
  methods: {
    orderName() {
      this.dataMembersHouse && this.dataMembersHouse.sort((a, b) => a.name.localeCompare(b.name));
    },
    reverseName() {
      this.dataMembersHouse && this.dataMembersHouse.forEach( element => element.reverseName = element.name.split(' ').reverse().join(' '));
      this.orderLastName();
    },
    orderLastName() {
      this.dataMembersHouse && this.dataMembersHouse.sort((a, b) => a.reverseName.localeCompare(b.reverseName));
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
.botton-home {
  padding: 10px!important;
}
</style>
