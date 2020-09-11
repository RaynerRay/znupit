<template>

<div class="services">
    <v-container class="my-5">
    <br>
    <v-row>
       
            <v-col cols="12" sm="3">
              <h3 class="blue-grey--text">Categories/Services</h3>
                <br>
              <router-link :to="{ name: 'company-list', params: { id: categories.id }}">
                <div class="category-list">
                    <div v-for="category in categories" :key="category.id">
                        <p>{{ category.name }} </p>
                    </div>
                </div>
                </router-link>
            </v-col>
        
        
                <v-col cols="12" sm="8">
                <div v-for="company in companies" :key="company.id">  
                <v-card
                    class="mx-auto"
                    max-width="800"
                    outlined
                    
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                          
                            <div class="overline mb-4">{{ company.location }}</div>
                            <v-row>
                              <v-col cols="12" sm="1">
                                <v-list-item-avatar
                            tile
                            size="40"
                            color="grey"
                        ></v-list-item-avatar>
                              </v-col>
                              <v-col>
                                <v-list-item-title class="headline xs-6 mb-1 blue-grey--text">{{ company.name }}</v-list-item-title>
                                <v-list-item-subtitle >
                                  {{ company.summary }}
                                </v-list-item-subtitle>
                              </v-col>
                            </v-row>
                            
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="40"
                            color="grey"
                        ></v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text color="blue-grey">{{ company.contact }}</v-btn>
                        <v-spacer></v-spacer>
                        
                        <v-btn text color="deep-orange accent3">Request Quote</v-btn>
                        
                        </v-card-actions>
                </v-card>
                </div> 
                <br>
                </v-col>
            
        

        
        
      </v-row><br>
    
    
        
    </v-container>   
  </div>
  
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
  },
  computed: {
    ...mapState(["categories", "companies"]),

    weddingCompanies() {
      return this.$store.getters.weddingCompanies;
    },
  },
};
</script>
