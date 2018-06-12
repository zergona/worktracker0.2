<template>
  <div id="app">
    <div>
<!--    <article v-for="(time, idx) in times" :key="idx">
      <h1>{{ time.name }}</h1>
      <date>{{ time.exctime }}</date>
      </article>
-->    
</div>
    <form v-on:submit.prevent="addTime(name)">
      <input v-model="name" placeholder="Your Name">
      
      <input type="submit" class="btn btn-primary" value="Add Time">
      </input>    
    </form>
      <div class="panel-body">
      <table class="table table-striped">
        <thead>
            <tr>
                <th>
                  Time
                </th>
                <th>
                  Name
                </th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="(vrijeme, idx) in times" :key="idx">
            <td>
              {{vrijeme.exctime}}
            </td>
            <td>
              {{vrijeme.name}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</div>

</template>

<script>
  import { db } from 'C:/Users/WiMAX/tt2.0/src/main'
  export default {
    name: 'App',
    data () {
      return {
        times: [],
        name: '',
    }
  },
    firestore () {
      return {
        times: db.collection('times').orderBy('exctime')
    }
  },
    methods: {
      addTime (name) {
        const exctime = new Date()
        db.collection('times').add({ name, exctime })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
