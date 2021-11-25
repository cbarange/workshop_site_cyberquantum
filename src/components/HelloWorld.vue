<template>
  <v-container style="width:70%">
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('@/assets/cyberquantum_logo.png')"
          class="my-3"
          contain
          height="200"
        /> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          CyberQuantum
        </h1>
      </v-col>

      <v-col class="mb-8" cols="12" >

        <v-row justify="space-around">
          <a href="/presentation" text style="text-decoration:none">
          <v-hover v-slot="{ hover }">
            <v-card v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <v-icon color="green darken-2" x-large center>timeline</v-icon>
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Factorisation<br/> Quantique
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>
          </a>
          
          <a href="/check-cert-modulus" text style="text-decoration:none">
          <v-hover v-slot="{ hover }">
            <v-card v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <v-icon color="blue darken-2" x-large center>speed</v-icon>
              <v-card-title class="display-5">
              
                <v-spacer /> <div class="text-center">
                  Diagnostique<br/> Quantique
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>
          </a>


            <v-hover v-slot="{ hover }">
          <a href="/leaderboard" text style="text-decoration:none">
              <v-card v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              
                <v-card-title></v-card-title>
                <v-icon color="purple darken-2" x-large center>view_timeline</v-icon>
                <v-card-title class="display-5">
                  <v-spacer /> <div class="text-center">
                    Classement<br/>⠀
                  </div> <v-spacer />
              </v-card-title>
              </v-card>
          </a>
            </v-hover>

          
            

           
           <!-- Histoire -->
           <!-- Supremation quantique pour bientôt ? -->
           
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12" >

        <v-row justify="space-around">
          
          
          <v-hover v-slot="{ hover }">
            <v-card disabled v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">

              <v-card-title></v-card-title>
              <v-icon color="purple" x-large center>category</v-icon>
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Premiers Pas<br/><v-chip class="ma-2" text-color=""> Coming soon... </v-chip>
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>
          

          <v-hover v-slot="{ hover }">
            <v-card v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <v-icon color="orange darken-2" x-large center>terminal</v-icon>
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Quantum@Home  <br/><v-chip class="ma-2" color="yellow" text-color=""> Early Access </v-chip>
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>

          <a href="/prevent-key" text style="text-decoration:none">
          <v-hover v-slot="{ hover }">
            <v-card v-card :elevation="hover ? 12 : 2" outlined shaped tile width="200px">
              <v-card-title></v-card-title>
              <v-icon x-large center>webhook</v-icon>
              <v-card-title class="display-5">
                <v-spacer /> <div class="text-center">
                  Prevent Key <v-chip class="ma-2" color="green" text-color="white" >PRO</v-chip>
                </div> <v-spacer />
              </v-card-title>
            </v-card>
          </v-hover>
          </a>


          

            <!-- <v-icon x-large center>filter_drama</v-icon>
            <v-icon x-large center>blur_on</v-icon>
            <v-icon x-large center>workspaces</v-icon>
            <v-icon x-large center>grid_view</v-icon>
            <v-icon x-large center>business</v-icon>
            <v-icon x-large center>forum</v-icon>
            <v-icon x-large center>camera</v-icon>
            <v-icon x-large center>archive</v-icon>
            <v-icon x-large center>view_kanban</v-icon>
            <v-icon x-large center>view_carousel</v-icon>
            <v-icon x-large center>description</v-icon>
            <v-icon x-large center>task_alt</v-icon>
            <v-icon x-large center>shield</v-icon>
            <v-icon x-large center>timeline</v-icon>
            <v-icon x-large center>space_dashboard</v-icon> -->
            

        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
