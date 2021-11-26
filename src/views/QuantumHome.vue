<template>
  <v-container>
    <br/><br/>
    <v-stepper v-model="e1">
    <v-stepper-header>

      <v-stepper-step :complete="e1 > 1" step="1" > Pseudo </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2" > Distribution </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3"> Algorithme </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4"> Téléchargement </v-stepper-step>

    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">

        <h3 class="mx-auto text-center" text-align="center">Choisir votre pseudo, il sera affiché dans le classement global</h3>
        <v-text-field style="max-width:250px" v-model="pseudo" class="mx-auto" label="Nom utilisateur" hide-details="auto" ></v-text-field>
        <br/><br/>
        <h4 class="mx-auto text-center" text-align="center">Un email pour vous contacter</h4>
        <v-text-field style="max-width:250px" v-model="mail" class="mx-auto" label="Email" hide-details="auto" ></v-text-field>
        <br/><br/>
        <v-btn color="primary" @click="first_step()"> Suivant </v-btn>

      </v-stepper-content>

      <v-stepper-content step="2">

    <v-row class="text-center">
      <v-col class="mb-8" cols="12" >

        <v-row  justify="space-around">
          <v-hover  v-slot="{ hover }">
            <v-card @click="select('windows')" v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <img width="75px" src="@/assets/windows_logo.png" />
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Windows
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>

          <v-hover  v-slot="{ hover }">
            <v-card @click="select('linux')" v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <img width="75px" src="@/assets/linux_logo.png" />
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Linux
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>

          <v-hover  v-slot="{ hover }">
            <v-card @click="select('macos')" v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <img width="75px" src="@/assets/apple_logo.png" />
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  MacOS
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>
        </v-row>
      </v-col>
    </v-row>
        

      </v-stepper-content>

      <v-stepper-content step="3">

        <v-row class="text-center">
      <v-col class="mb-8" cols="12" >

        <v-row  justify="space-around">
          
          <v-hover  v-slot="{ hover }">
            <v-card @click="algo('qiskit')" v-card :elevation="hover ? 12 : 2" outlined shaped tile width="250px">
              <v-card-title></v-card-title>
              <img width="75px" src="@/assets/quantum_logo.png" />
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Algorithme Shor
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>

          <v-hover  v-slot="{ hover }">
            <v-card @click="algo('naive')" v-card :elevation="hover ? 12 : 2" outlined shaped tile width="250px">
              <v-card-title></v-card-title>
              <img width="75px" src="@/assets/binary_logo.png" />
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Algorithme Binaire
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>

        </v-row>
      </v-col>
    </v-row>

        <v-btn text @click="e1 = 2"> Précédent </v-btn>
        <!-- <v-btn color="primary" @click="e1 = 1" > Terminer </v-btn> -->

      </v-stepper-content>

      <v-stepper-content step="4">
         <v-row class="text-center">
      <v-col class="mb-8" cols="12" >
        <br/>

        <v-row  justify="space-around">
          
        <v-btn :loading="loading3" :disabled="loading3" color="blue-grey" class="ma-2 white--text" @click="download()" >
          Télécharger
          <v-icon right dark > mdi-cloud-upload </v-icon>
        </v-btn>

        </v-row>
      </v-col>
    </v-row>
        <br/><br/>
        <v-btn text @click="e1 = 2"> Précédent </v-btn>
        <!-- <v-btn color="primary" @click="e1 = 1" > Terminer </v-btn> -->

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>


  </v-container>
</template>

<script>
  var axios = require('axios');
  export default {
    name: 'QuantumHome',

    data () {
      return {
        e1: 1,
        pseudo:'',
        mail:'',
        distribution:'',
        alg:'',
        loading3: false,
        loader: null,
      }
    },
    methods: {
      download:function() {
        this.loader = 'loading3'
        var config = { method: 'post', url: `https://workshop-cyberquantum-api.herokuapp.com/searcher/${this.pseudo}`, headers: { } };
        axios(config).then(function (response) { console.log(JSON.stringify(response.data)); }).catch(function (error) { console.log(error); });

        window.open(`https://workshop-cyberquantum-api.herokuapp.com/download/${this.distribution}/${this.alg}/${this.pseudo}`, '_blank').focus();
        

      },
      first_step:function() {
        if(this.mail=="" || this.pseudo==""){
          alert("Les champs 'Nom Utilisateur' et 'Email' ne peuvent pas être vide")
          return
        }

        this.e1 = 2
      },
      select:function(distribution) {
        this.distribution= distribution
        this.e1 = 3
      },
      algo:function(choice){
        this.alg=choice
        this.e1 = 4
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },


  }
</script>
