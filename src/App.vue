<template>
  <v-app>
    
    <v-app-bar app color="primary" dark >
      <v-btn href="/" text>
        <div class="d-flex align-center">
          <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="@/assets/cyberquantum_logo.png" transition="scale-transition" width="40" />
          CuberQuantum
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
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2" >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12" >
        {{ new Date().getFullYear() }} — <strong>CyberQuantum</strong>
      </v-col>
    </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
        'Home',
        'Équipe',
        'Services',
        'Blog',
        'Nous Contacter',
      ],
  }),
};
</script>
