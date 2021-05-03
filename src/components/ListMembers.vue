<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <img class="img" src="../assets/house.jpg" alt="item.name">
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <p class="title is-4"> The Houses</p>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column is-6" v-for="opt in listCharacters" :value="opt" :key="opt">
        <div class="card cursor-harryPotter">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{opt}}</p>
                <a @click="getMembersByHouse(opt)" class=" is-6">View Members : {{ repeat[opt] }} </a>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
             <span> <a @click="getStudent(opt)"> Students</a></span>   <span>|</span>
              <span><a @click="getProfessors(opt)"> Professors</a></span>
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
      repeat: {},
      student: [],
      listHouse: [],
      responseStudent: [],
      studentText: null,
      professorText: null,
      responseStaff: [],
      professor: [],
    }
  },
  mounted() {
    this.getCharacters();
  },
  methods: {
    getCharacters () {
      ApiService.apiCharacters().then((res) => {
        const { data } = res;
        this.getIsEmpty(data);
      }).catch(error => {
        console.error(error)
      })
    },
    getIsEmpty (data) {
      this.dataHouse = data.filter(element => element.house);
      this.getHouse(this.dataHouse);
    },
    getHouse(data) {
      for(const item in data) {
        this.listHouse.push(data[item].house);
      }
      this.getCount();
      this.listCharacters = new Set([...this.listHouse]);
    },
    getCount () {
      this.listHouse.forEach(element => this.repeat[element] = (this.repeat[element] || 0) + 1);
    },
    getMembersByHouse(item) {
      this.$store.commit('setMembersText', item);
      ApiService.apiHouse(item).then((res) => {
        const { data } = res;
        this.$store.commit('setListMembers', data);
        this.$router.push('/members');
      }).catch( error => {
        console.error(error)
      })
    },
    getStudent(item) {
      this.studenText = item;
      this.$store.commit('setMembersText', item);
      ApiService.apiStudent().then((res) => {
        const { data } = res;
        this.responseStudent = data;
        this.filterStudent();
      }).catch( error => {
        console.error(error)
      })
    },
    filterStudent() {
      this.student = this.responseStudent.filter(element => element.house === this.studenText);
      this.$store.commit('setListMembers', this.student);
      this.$router.push('/members');
    },
    getProfessors(item) {
      this.professorText = item;
      this.$store.commit('setMembersText', item);
      ApiService.apiStaff().then((res) => {
        const { data } = res;
       this.responseStaff = data;
        this.filterProfessors();
      }).catch( error => {
        console.error(error)
      })
    },
    filterProfessors() {
      this.professor = this.responseStaff.filter(element => element.house === this.professorText);
      this.$store.commit('setListMembers',this.professor);
      this.$router.push('/members');
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
  border-radius: 20px;
}
</style>
