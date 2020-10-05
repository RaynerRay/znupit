<template>
<div class="detail"> 
      <v-img dark height="120" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
     <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12" sm="12" 
      >
        <p>.</p>
        <h1 class="display-1 font-weight-thick mb-4 white--text">
          Browse and connect with verified service providers.
        </h1>
        

       </v-col>
    </v-row>
  </v-img>

        <v-container class="my-5 grey lighten-2" >
         <v-card
            class="mx-auto"
            max-width="1200"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-row>
                  <v-avatar
                  size="80px"
                  >
                    <img
                      
                      alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    >
                  </v-avatar>
                <v-col>
                    <p class="display-1 text--primary ">{{companyDetail.name}}</p>
                    <div class="overline mb-4 orange--text">{{companyDetail.location}}</div>
                </v-col>

                </v-row>
                 </v-list-item-content>

              <v-list-item-avatar
                tile
                size="50"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-container fluid>
                <v-row>
                  <router-link :to="{name: 'write-review' , params: {id:companyDetail._id}}">
                   <v-btn  outlined color="primary" dark class="mr-3">Write A Review</v-btn>
                  </router-link>  


                    <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        outlined
                      >
                        Request Quote
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Fill the form</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                label="Name*"
                                required
                              ></v-text-field>
                            </v-col>
                            
                              
                            <v-col
                              cols="12"
                              sm="6"
                              md="4"
                            >
                              <v-text-field
                                label="email*"
                                hint="email"
                                persistent-hint
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Email*"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Password*"
                                type="password"
                                required
                              ></v-text-field>
                            </v-col>
                            
                          </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Close
                        </v-btn>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="dialog = false"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                    <v-spacer></v-spacer>
                  <p class="ml-8 blue--text">website: {{companyDetail.website}}</p>
                </v-row>
              </v-container>
            </v-card-actions>
          </v-card>

         
          <v-card>
            <v-tabs
              fixed-tabs
              background-color="white"
              color="blue"
              
            >
              <v-tab><span><v-icon>mdi-picture-in-picture-bottom-right-outline</v-icon></span>Photos</v-tab>
              <v-tab><span><v-icon>mdi-help-circle-outline</v-icon></span>About Us</v-tab>
              <v-tab><span><v-icon>mdi-thumb-up-outline</v-icon></span>Reviews</v-tab>

         <v-tab-item>
        <v-container fluid>
          <v-row>
            
            
            <v-col
              cols="12"
              md="4"
              v-for="photo in companyDetail.photos" :key="photo.id"
            >
           
             
             <v-img
                :src="photo.image"
                lazy-src="https://picsum.photos/10/6?image"
                aspect-ratio="1"
              ></v-img>
              
            
             
            </v-col>
            
            
          </v-row>
        </v-container>
      </v-tab-item>     
        <v-tab-item>
          <v-container>
            <v-card flat>
              
              <v-card-text>
                <h3 class="mb-0">
                  {{companyDetail.about}}
                </h3>
              </v-card-text>
            </v-card>
          </v-container>
      </v-tab-item>
      
      <v-tab-item>
        <v-card flat id="reviews">
          <div v-for="relevant in relevantComments" :key="relevant.id">
           <v-card
              class="mx-auto my-5"
              max-width="1100"
              outlined
              
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-row>
                     <v-col>
                          <v-rating
                        v-model="rating"
                        length="5"
                        readonly
                        color="green"
                        background-color="grey lighten-1"
                        >
                        </v-rating>

                        
                          <p>by: <span  class="red--text">{{relevant.name}}</span></p>
                        
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col>
                        {{relevant.createdAt}}
                      </v-col>

                  </v-row>   
                  
                   <p>{{relevant.comments}}</p>
                  
                  </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </v-card>
      </v-tab-item>

      </v-tabs>
    </v-card>
    
  </v-container>
  <div v-for="photo in photos" :key="photo.id">
    {{photo.image}}
  </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      rating: 4,
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.$store.dispatch("loadCategories");
    this.$store.dispatch("loadCompanies");
    this.$store.dispatch("loadComments");
  },

  computed: {
    ...mapState(["categories", "companies", "comments"]),

    companyDetail() {
      return this.companies.find(company => company._id == this.id);
    },

    relevantComments() {
      return this.comments.filter(comment => {
        return comment.companies.includes(this.id);
      });
    },
  },
};
</script>

<style>
.detail {
  background-color: #f7f7f7;
}
</style>
