<template>
    <v-card max-width="750px" class="mx-auto">
      <v-card-title>
        Classement
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Rechercher un nom"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="scores" :search="search" >
      </v-data-table>
    </v-card>
</template>

<script>
  
  import axios from 'axios'
  export default {
    name: 'LeaderBoard',

    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Pseudo',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Score', value: 'score' }
        ],
        scores: [ ],
      }
    },
    mounted:function() {
      axios.get('http://localhost:5225/leaderboard').then( response => this.scores=response.data)
    }
  }
</script>
