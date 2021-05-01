<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <img class="img" src="../assets/house.jpg" alt="item.name">
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="opt in listCharacters" :value="opt" :key="opt">
        <div class="card cursor-harryPotter" @click="getMembersByHouse(opt)">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{opt != '' ? opt : 'No registered home'}}</p>
                <a class="subtitle is-6">View Members</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import ApiService from '../service/ApiService';
export default {
  name: 'ListMembers',
  data () {
    return {
      listCharacters: [],
      dataHouse: [],
    }
  },
  mounted() {
    this.getCharacters()
  },
  methods: {
    getCharacters () {
      ApiService.apiCharacters().then((res) => {
        const { data } = res
        this.getHouse(data);
      }).catch(error => {
        console.error(error)
      })
    },
    getHouse(data) {
      for(const item in data) {
        this.dataHouse.push(data[item].house);
      }
      this.listCharacters = new Set([...this.dataHouse])
    },
    getMembersByHouse(item) {
      ApiService.apiHouse(item).then((res) => {
        this.$store.commit('setListMembers', res.data)
        this.$router.push('/members')
      }).catch( error => {
        console.error(error)
      })
    }
  }
}

</script>
<style scoped lang="scss">
.cursor-harryPotter {
  * {cursor: url(https://cur.cursors-4u.net/user/use-1/use160.cur), auto !important;}
}
.img {
  width: 50%;
  height: 80%;
}
</style>
