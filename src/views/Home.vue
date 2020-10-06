<template>
  <div class="ml-2 mr-2 home">
    <!--<v-img dark height="130" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
     <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12" sm="6" 
      >
        <p class="font-weight-thin">
          Browse & connect with 
        </p>
        <h4 class="mb-5 display-1 font-weight-light mb-4 white--text">
           Verified companies/services
        </h4>

       </v-col>
     </v-row>
    </v-img> -->
      
      <v-row>
        <v-col cols="12" sm="3">
         
          <h1 class="blue--text ml-8 font-weight-thin">Select A Category</h1>
          <v-overflow-btn
            v-model="selectedCategory"
            class="my-2 ml-5"
            :items="categories"
            label="Select A Category "
            item-text="name"
            item-value="_id"
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-col>
         <v-col cols="12" sm="8">
                <div v-for="relevant in relevantCompanies" :key="relevant.id">  
                <v-card
                    class="mx-auto my-3"
                    max-width="800"
                    tile
                    
                    
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                          
                            <div class="overline mb-4 orange--text font-weight-bold">{{ relevant.location }}</div>
                            <v-row>
                              <v-col cols="12" sm="1">
                                <v-avatar
                                  size="50px"
                                  >
                                    <img
                                      
                                      alt="Avatar"
                                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                                    >
                                </v-avatar>
                </v-col>
                              <v-col>
                               <router-link :to="{name: 'company-detail' , params: {id:relevant._id}}">
                                <v-list-item-title class="headline xs-6 mb-1 black--text font-weight-thin">{{ relevant.name }}</v-list-item-title>
                                </router-link>
                                <p>
                                  {{ relevant.summary }}
                                </p>
                              </v-col> 
                            </v-row>
                            
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="40"
                            color="teal"
                        >
                          <v-btn text color="white" class="font-weight-thin">4.5</v-btn>
                        </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text  color="blue lighten">{{ relevant.contact }}</v-btn>
                        <v-spacer></v-spacer>
                        
                        <v-btn text color="deep-blue accent3" outlined><span><v-icon>mdi-note-text-outline</v-icon></span>Get Quote</v-btn>
                        
                        </v-card-actions>
                </v-card>
                </div> 
                <br>
              </v-col>
        </v-row>
   </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    model: null,
    selectedCategory: undefined,
  }),
  components: {},
  methods: {},
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
  },
  computed: {
    ...mapState(["categories", "companies"]),
    weddingCompanies() {
      return this.$store.getters.weddingCompanies;
    },
    relevantCompanies() {
      console.log(this.selectedCategory);
      return this.companies.filter(company => {
        return company.categories.includes(this.selectedCategory);
      });
    },
  },
};
</script>

<style>
.home {
  background-color: #ffffff;
}
</style>