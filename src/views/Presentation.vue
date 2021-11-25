<template>
  <div  class="timeline">
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="purple lighten-2"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="purple lighten-2">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
            mdi-magnify
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">
            2012
          </h2>
        </v-card-title>
        <v-container>
           <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
           
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
          
              Factorisation du nombre 143
              
            </v-col>
            
          </v-row>

          
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="amber lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="amber lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">
            2014
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-home-outline
          </v-icon>
        </v-card-title>
        <v-container>
           <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
           
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Factorisation du nombre 56 153
              
              
            </v-col>
            
          </v-row>

        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="cyan lighten-1"
      fill-dot
      right
    >
      <v-card>
        <v-card-title class="cyan lighten-1">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
            mdi-email-outline
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">
            2018
          </h2>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
           
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Factorisation du nombre 4 088 459
              
            </v-col>
            
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="red lighten-1"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="red lighten-1 justify-end">
          <h2 class="text-h4 mr-4 white--text font-weight-light">
            2020
          </h2>
          <v-icon
            dark
            size="42"
          >
            mdi-account-multiple-outline
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
           
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Factorisation du nombre de 178bit
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    
  </v-timeline>
  <br/>
  <br/>
  <br/>
  <p>Un calculateur quantique (quantum computer en anglais, parfois traduit par ordinateur quantiquea ou système informatique quantique2) utilise les propriétés quantiques de la matière, telles que la superposition et l'intrication afin d'effectuer des opérations sur des données. À la différence d'un ordinateur classique basé sur des transistors travaillant sur des données binaires (codées sur des bits, valant 0 ou 1), le calculateur quantique travaille sur des qubits dont l'état quantique peut posséder une infinité de valeurs.
    <br/>
    <br/>
De petits calculateurs quantiques ont été construits à partir des années 1990. Jusqu'en 2008, la difficulté majeure concerne la réalisation physique de l'élément de base : le qubit. Le phénomène de décohérence (perte des effets quantiques en passant à l'échelle macroscopique) freine le développement des calculateurs quantiques. Le premier processeur quantique est créé en 2009 à l'université Yale : il comporte deux qubits composés chacun d'un milliard d'atomes d'aluminium posés sur un support supraconducteur.
  <br/>
  <br/>
Ce domaine est soutenu financièrement par plusieurs organisations, entreprises ou gouvernements en raison de l'importance de l'enjeu : au moins un algorithme conçu pour utiliser un circuit quantique, l'algorithme de Shor, rendrait possible de nombreux calculs combinatoiresb hors de portée d'un ordinateur classique en l'état actuel des connaissances. La possibilité de casser les méthodes cryptographiques classiques est souvent mise en avant.</p>
</div>
</template>

<script>
  export default {
    name: 'Presentation',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .timeline{
    width:50%;
    margin:auto;
  }
</style>
