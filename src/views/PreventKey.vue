
<template>
  <div>

    <v-dialog v-model="dialog2" max-width="60%" >
      
      
      

        <v-card>
          <v-card-title>
            <v-row justify="center" align="center" >
        
        <!-- <v-chip class="ma-2 mx-auto" text-color="blue"> </v-chip> -->
            <v-chip class="ma-2" color="success" outlined >
          <v-icon left> mdi-server-plus </v-icon>
          Offre de lancement !
        </v-chip>
          </v-row>
          </v-card-title>
          <br/>
          <v-card-text>
            <h2>Accéder gratuitement à notre service PreventKey</h2>
      <p>Enregistrer vos clé publique, nous vous informerons si cette clé est compromise. Vous pouvez aussi participer à notre programme de recherche Quantum@Home</p>
          </v-card-text>
          <v-card-actions>
        <v-row justify="center" align="center" >
            <v-btn color="primary" text @click="dialog2 = false" > Commencer </v-btn>
        </v-row>
          </v-card-actions>
          <br/>
        </v-card>
      </v-dialog>

    <v-container class="result_frame mx-auto" v-if="result">
      <v-icon class="cross_close" @click="close_result_frame" color="red">close</v-icon>
      <v-row class="text-center">
        <v-col cols="12" class="mb-4">
          <div v-if="request_done">
            <h4>Analyse...</h4>
            <v-progress-circular style="margin-top:12.5%" :size="100" color="primary"  indeterminate ></v-progress-circular>
          </div>
          <div v-else>
            <div v-if="modulus.startsWith('Failed validating')">
              <h4>Le format de clé invalide
              <v-chip class="ma-2" color="red" @click="close_result_frame" >
                Fermer
              </v-chip>
              </h4>
            </div>
            <div v-else>
              <br/>
              <h4>Votre clé n'a pas été compromise, voici son modulus</h4>
                <!-- <v-text-field class="modulus_field" v-model="modulus" ></v-text-field> -->
                <br/>
                <v-textarea outlined class="modulus_field" name="input-7-8" auto-grow :value="modulus" ></v-textarea>
                <v-row justify="center" align="center" >
                <p>Nous avons ajouter votre clé dans notre programme de recherche, si nous trouvons une vulnérabilité nous vous contacterons à l'adresse mail suivante:<br/> {{mail}}</p>
                <br/>
                <v-chip class="ma-2" color="red" @click="close_result_frame" >
                Fermer
              </v-chip>
                </v-row>     
            </div>
            
            </div>
          </v-col>
        </v-row>

      </v-container>

    <v-container fluid style="max-width:80%">
      <br/><br/>
      <form>

      <v-divider inset></v-divider>
      <br/>
    <h3>Saisir votre clé publique</h3>
    <v-textarea required name="input-7-1" filled label="PUBLIC KEY" auto-grow :value="pubkey" v-model="pubkey">
    </v-textarea>
    <h3>Un email pour vous contacter si votre clé est compromise</h3>
    <v-text-field required v-model="mail" label="Mail"></v-text-field>
    <br/>
    <br/>
    <v-row justify="center" align="center" >
      <v-btn @click="submit" tile color="success" >
        <v-icon left>check</v-icon>
        Envoyer
      </v-btn>
    </v-row>
    </form>
  </v-container>
  </div>
</template>

<script>
  
  import axios from 'axios'
  export default {
    name: 'PreventKey',

    data () {
      return {
        pubkey:'',
        mail:'',
        modulus:'',
        result:false,
        request_done:true,
        dialog2:true // TODO set as true

      }
    },
    mounted:function() {
    },
    methods:{
      submit:function(){
        
        console.log(this.pubkey)
        if(this.pubkey=="" || this.mail == ""){
          alert("Le champs clé publique et mail ne peuvent pas être vide")
          return
        }
        this.result=true
        var data = JSON.stringify({"key":this.pubkey});

        var config = {
          method: 'post',
          url: 'http://localhost:5225/pubkey', headers: {  'Content-Type': 'application/json' },
          data : data
        };
        this.request_done=true
        axios(config).then( (response) => {
          
          this.modulus = response.data
          this.request_done=false
        })
      },
      close_result_frame:function(){
          this.result=false
        },
    }

  }
</script>

<style scoped>
  .result_frame {
      z-index:50;
      position:absolute;
      margin:auto;
      height:70%;
      padding:2% 5%;
      width:70%;
      left:15%;
      top:10%;
      background-color:white;
      box-shadow: 5px 5px 5px 5px rgba(0, 0, 255, .2)
    }
    .cross_close{
      position:absolute;
      right:10px;
    }
</style>
