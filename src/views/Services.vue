<template>

<div class="services">
    <div class="my-5">
    <br>
    <v-row>
       
            <v-col cols="12" sm="3">
              <h3 class="blue--text">Select A Category</h3>
              
                  <v-overflow-btn
                  v-model="selectedCategory"
                  class="my-2"
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
                    outlined
                    
                    
                >
                    <v-list-item three-line>
                        <v-list-item-content>
                          
                            <div class="overline mb-4 orange--text font-weight-bold">{{ relevant.location }}</div>
                            <v-row>
                              <v-col cols="12" sm="1">
                                <v-list-item-avatar
                            tile
                            size="40"
                            color="blue"
                        ></v-list-item-avatar>
                </v-col>
                              <v-col>
                               <router-link :to="{name: 'company-detail' , params: {id:relevant._id}}">
                                <v-list-item-title class="headline xs-6 mb-1 grey--text font-weight-bold">{{ relevant.name }}</v-list-item-title>
                                </router-link>
                                <v-list-item-subtitle class="font-weight-bold">
                                  {{ relevant.summary }}
                                </v-list-item-subtitle>
                              </v-col> 
                            </v-row>
                            
                        </v-list-item-content>

                        <v-list-item-avatar
                            tile
                            size="40"
                            color="blue lighten"
                        >
                          <v-btn text color="white">4.5</v-btn>
                        </v-list-item-avatar>
                        </v-list-item>

                        <v-card-actions>
                        <v-btn text color="blue lighten">{{ relevant.contact }}</v-btn>
                        <v-spacer></v-spacer>
                        
                        <v-btn text color="deep-blue accent3" outlined><span><v-icon>mdi-note-text-outline</v-icon></span>Request Quote</v-btn>
                        
                        </v-card-actions>
                </v-card>
                </div> 
                <br>
                </v-col>
            
        

        
        
      </v-row><br>
    
    
        
    </div>   
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

    relevantCompanies() {
      return this.companies.filter(company => {
        return company.categories.includes(this.selectedCategory);
      });
    },
  },
};
</script>