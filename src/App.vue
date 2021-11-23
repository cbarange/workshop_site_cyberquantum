<template>
  <v-app>
    
    <v-app-bar app color="primary" dark >
      <v-btn href="/" text>
        <div class="d-flex align-center">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/cyberquantum_logo.png" transition="scale-transition" width="40" />
          CyberQuantum
        </div>
      </v-btn>

      <v-spacer></v-spacer>
      <h2 class="font-weight-light">Be ready for tomorrow 🚀</h2> 
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/cbarange/workshop_cybersecu_quantum" target="_blank" text >
        <span class="mr-2">Contribuer</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>

    <v-footer app padless color="primary lighten-1">
      <v-row justify="center" no-gutters >
      <v-col class="primary lighten-1 py-1 text-center white--text" cols="11" >
        
        <v-btn v-for="link in links_1" :key="link" color="white" text rounded class="my-1" >
          {{ link }}
        </v-btn>
          {{ new Date().getFullYear() }}—<strong>CyberQuantum</strong>
        <v-btn v-for="link in links_2" :key="link" color="white" text rounded class="my-1" >
          {{ link }}
      </v-btn>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links_1: [
        'Home',
        'Services',
      ],
    links_2: [
        'Blog',
        'Nous Contacter',
      ],
  }),
};
</script>
