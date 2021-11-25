<template>
  <div>
    <v-container class="result_frame mx-auto" v-if="result">
      <v-icon class="cross_close" @click="close_result_frame" color="red">close</v-icon>
      <v-row class="text-center">
        <v-col cols="12" class="mb-4">
          <div v-if="request_done">
            <h4>Récupération du certificat TSL/SSL</h4>
            <v-progress-circular style="margin-top:12.5%" :size="100" color="primary"  indeterminate ></v-progress-circular>
          </div>
          <div v-else>
            <h4>Voici le nombre utlisé pour chiffrer les échanges avec le site {{domain}}</h4>
            <!-- <v-text-field class="modulus_field" v-model="modulus" ></v-text-field> -->
            <br/>
            <v-textarea outlined class="modulus_field" name="input-7-8" auto-grow :value="modulus" ></v-textarea>

            <div v-if="modulus.startsWith('Failed validating')">
              <h4>Impossible de charger le certificat du site {{domain}}, le format n'est pas encore supporté.
                <v-chip
                class="ma-2"
                color="secondary"
                >
                Coming soon...
              </v-chip>
              <br/><br/>Essayer un autre domaine
              <br>
              <br>
              <br>
              <v-chip
                class="ma-2"
                color="red" @click="close_result_frame"
                >
                Fermer
              </v-chip>
            </h4>
          </div>
          <v-card v-else class="mx-auto" max-width="750" outlined >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                </div>
                <v-list-item-title class="text-h5 mb-2">
                  Analyse du site {{domain}}
                </v-list-item-title>
                <v-list-item-subtitle>

                  

                  Les échanges sont sécurisés avec une clé de <strong>{{get_modulus_length()}}</strong> bit
                  <br/>

                  
                </v-list-item-subtitle>
              </v-list-item-content>

              
            </v-list-item>
            <v-card-text>
              Les meilleurs calculateurs quantiques actuels prennent <strong>{{get_duration().time}}</strong><br/> pour rompre la sécurité de votre siteweb avec un cout: 
              <strong>{{get_duration().cost}}</strong>
            </v-card-text>
            <v-rating empty-icon="star_outline" readonly full-icon="star" hover length="5" size="20" :value="get_duration().score" ></v-rating>
          </v-card>

              <!-- <v-textarea class="v-textarea" :value="modulus" v-model="modulus">    
              </v-textarea> -->
            </div>
          </v-col>
        </v-row>

      </v-container>

      <v-container>
        <v-row class="text-center">
          <v-col cols="12">
            <v-img
            :src="require('@/assets/cyberquantum_logo.png')"
            class="my-3"
            contain
            height="150"
            />
          </v-col>

          <v-col class="mb-4">
            <h2 style="max-width:70%" class="display-2 mx-auto font-weight-bold mb-3">
              Découvrer quand la sécurité de votre site web sera dépassée par les calculateurs quantiques.
            </h2>
          </v-col>
          <v-col class="mb-8" cols="12">
            <v-text-field class="v-text-field" v-model="domain" label="Domaine, ex:epsi.fr"></v-text-field>
            <v-btn class="ma-2"  color="success"  @click="get_modulus" > Valider </v-btn>
          </v-col>
        </v-row>
        
        <!-- Field domain + port -->
        <!-- Send button -->
        <!-- Display modulus -->
        <!-- Say if it is right -->
      </v-container>
    </div>
  </template>

  <script>
    import axios from 'axios'
    export default {
      name: 'CheckCertModulus',

      data () {
        return {
          domain:'',
          modulus:'',
          result:false,
          request_done:true
        }
      },
      methods:{
        get_modulus:function() {
          if(this.domain==""){
            alert("Use valid domain name")
            return
          }
          this.request_done=true
          axios.get(`https://workshop-cyberquantum-api.herokuapp.com/modulus/${this.domain}/443`).then( response => {
            this.modulus=response.data
          // await new Promise(r => setTimeout(r, 500))
          this.request_done=false
        })

          this.result=true

        },
        close_result_frame:function(){
          this.result=false
        },
        get_modulus_length:function(){
          /* eslint-disable */
          /* global BigInt */
          return BigInt(this.modulus).toString(2).length
        },
        get_duration:function(){
          let bit_length = this.get_modulus_length()

          if(bit_length<250){
            return {time:"<3 Jours", cost: "500$", score:0}
          } else if (bit_length<600 ){
            return {time:"15 Jours", cost: "100 000$", score:1}
          }else if (bit_length<1200 ){
            return {time:"90 Jours", cost: "200 000$", score:2}
          }else if (bit_length<2100 ){
            return {time:"3 Ans", cost: "500 000$", score:3}
          }else if (bit_length<4300 ){
            return {time:"10 Ans", cost: "1 000 000$", score:4}
          }else{
            return {time:">10 Ans", cost: "Inestimable", score:5}
          }


          
          



        } 

      }
    }
  </script>

  <style scoped>
    .v-text-field{
      max-width: 400px;
      margin:auto;
    }
    .result_frame {
      z-index:50;
      position:absolute;
      margin:auto;
      height:95%;
      width:80%;
      left:10%;
      top:3%;
      background-color:white;
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 255, .2)
    }
    .cross_close{
      position:absolute;
      right:10px;
    }
    .v-textarea{
      width:80%;
    }
    .modulus_field{
      min-width:85%;
      min-height:85%;
    }
  </style>
