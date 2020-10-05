<template>
  
  <v-card class="navbar">
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-bold">Znup</span>
          <span >it</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn v-if="!loggedIn" outlined class="blue--text mx-1" >
          <span>Login</span>
      </v-btn>
      <v-btn v-if="loggedIn" outlined class="blue--text mx-1" >
          <span>Logout</span>
      </v-btn>
      
      

    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
        <v-list>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-item-action>
              <v-icon class="white--text">
                {{ link.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-icon class="white--text">
                {{ link.text }}
              </v-icon>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-food", text: "About", route: "/about" },
        { icon: "mdi-message", text: "Services", route: "/services" },
        { icon: "mdi-message", text: "Join", route: "/join" },
      ],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style>
.navbar {
  background-color: #fcfcfc;
}
</style>
