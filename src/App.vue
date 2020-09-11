<template>
  <v-app class="grey lighten-4">
    <Navbar />
    
    <v-main class="mx-4 mb-4">
      <!-- component matched by the route will render here -->
      <router-view></router-view>

    </v-main>
      
    
  
      
      
    
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
