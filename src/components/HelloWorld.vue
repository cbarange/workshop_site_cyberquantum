<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/cyberquantum_logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          CyberQuantum
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12" >

        <v-row justify="center">
          <v-card v-card elevation="2" outlined shaped tile >
            <v-card-title></v-card-title>
            <v-icon x-large center>mdi-lock</v-icon>
            <v-card-title class="display-5">Confidentialité</v-card-title>
          </v-card>
          
          <v-card v-card elevation="2" outlined shaped tile >
            <v-card-title></v-card-title>
            <v-icon x-large center>speed</v-icon>
            <v-card-title class="display-5">Diagnostique</v-card-title>
          </v-card>

           <!-- Tendances -->
           <!-- Histoire -->
           <!-- Supremation quantique pour bientôt ? -->
           <!-- Premier pas  -->
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12" >

        <v-row justify="center">
          <v-card v-card elevation="2" outlined shaped tile >
            <v-card-title></v-card-title>
            <v-icon x-large center>category</v-icon>
            <v-card-title class="display-5">Premiers Pas</v-card-title>
          </v-card>
          <v-card v-card elevation="2" outlined shaped tile >
            <v-card-title></v-card-title>
            <v-icon x-large center>menu_book</v-icon>
            <v-card-title class="display-5">Tendances</v-card-title>
          </v-card>

            <v-icon x-large center>workspaces</v-icon>
            <v-icon x-large center>grid_view</v-icon>
            <v-icon x-large center>business</v-icon>
            <v-icon x-large center>forum</v-icon>
            <v-icon x-large center>blur_on</v-icon>
            <v-icon x-large center>filter_drama</v-icon>
            <v-icon x-large center>camera</v-icon>
            <v-icon x-large center>tune</v-icon>
            <v-icon x-large center>fitbit</v-icon>
            <v-icon x-large center>hive</v-icon>
            <v-icon x-large center>shield</v-icon>
            <v-icon x-large center>domain</v-icon>
            <v-icon x-large center>archive</v-icon>
            <v-icon x-large center>view_kanban</v-icon>
            <v-icon x-large center>view_timeline</v-icon>
            <v-icon x-large center>terminal</v-icon>
            <v-icon x-large center>view_carousel</v-icon>
            <v-icon x-large center>webhook</v-icon>
            <v-icon x-large center>space_dashboard</v-icon>
            <v-icon x-large center>view_headline</v-icon>
            <v-icon x-large center>timeline</v-icon>
            <v-icon x-large center>reorder</v-icon>
            <v-icon x-large center>lock_open</v-icon>
            <v-icon x-large center>task_alt</v-icon>
            <v-icon x-large center>description</v-icon>
            <v-icon x-large center>timeline</v-icon>
            <v-icon x-large center>timeline</v-icon>

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
