<template>
  <div class="columns   is-multiline">
    <div class="column is-4 " v-for="item in filterStudent " :key="item.id">
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
            <div class="column size-text"><strong class="text-strong">hogwartsStudent:</strong> {{ item.hogwartsStudent }}</div>
            <div class="column size-text"><strong class="text-strong">hogwartsStaff:</strong> {{ item.hogwartsStaff }}</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cardMembers',
  props: ['filterStudentt'],
  components: {
  },
  data () {
    return {
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
