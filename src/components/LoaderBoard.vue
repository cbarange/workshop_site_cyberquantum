<template>
  <v-container>

    <v-card>
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

  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'LoaderBoard',

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
      axios.get('https://workshop-cyberquantum-api.herokuapp.com/leaderboard').then( response => this.scores=response.data)
    }
  }
</script>
