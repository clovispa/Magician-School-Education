<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-6">
        <div class="card cursor-harryPotter" @click="getStaff">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">Staff</p>
                <a class="subtitle is-6"> Members : {{countStaff}} </a>
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
  name: 'Staff',
  data () {
    return {
      staff: null,
      countStaff: null
    }
  },
  mounted() {
    this.getStaffApi()
  },
  methods: {
    getStaffApi () {
      ApiService.apiStaff().then((res) => {
        const { data } = res
        this.countStaff = data.length
        this.staff = data
      }).catch(error => {
        console.error(error)
      })
    },
    getStaff () {
      this.$store.commit('setListMembers', this.staff);
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
