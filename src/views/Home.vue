<template>
  <div class="home">
    
    <v-container class="my-5"><br>

      <br>
      <br>
      <br>
      <v-row>
        <v-col cols="12" sm="4">
          <h3 class="blue-grey--text">Discover and get quotes from local Proffesionals for just about any Service </h3>
          <br>

          <v-overflow-btn
            class="my-2"
            :items="categories"
            label="Select A Category "
            target="#dropdown-example"
          ></v-overflow-btn>
        </v-col>
        <v-spacer></v-spacer>
        
        <v-col cols="12" sm="6">
           <v-img
            class="white--text align-end"
            height="300px"
            src="https://image.shutterstock.com/image-photo/young-hispanic-man-wearing-painter-600w-1775775713.jpg"
          >
          </v-img>
        </v-col>
      </v-row><br>
      <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
    >
      <v-slide-item
        v-for="category in categories"
        :key="category.id"
        v-slot:default="{ active, toggle }"
        v-model="company"
      >
        <v-card
          :color="active ? undefined : 'yellow lighten-1'"
          class="ma-4"
          height="150"
          width="150"
          @click="toggle; getCompanies();"
          
          
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >

          <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4" >OVERLINE</div>
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                <v-list-item-subtitle class="overline my-3" justify="">{{ category.name }}</v-list-item-subtitle>
              </v-list-item-content>
          </v-list-item>        
            
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>

      <div>
        <h2 class="blue-grey--text">Popular services near you</h2>
      </div><br>
      <v-layout row wrap>
        
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://www.snupit.co.za/content/categories/home-building-and-trade/carpet-cleaning-services.png"
          >
          </v-img>
          <v-card-actions>
            <v-btn text color="blue-grey">
              Building Materials and Repairs
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://www.snupit.co.za/content/categories/home-building-and-trade/house-cleaning.png"
          >
          </v-img>
          <v-card-actions>
            <v-btn text color="blue-grey">
              Photography & Videography
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://www.snupit.co.za/content/categories/home-building-and-trade/handyman.png"
          >
          </v-img>
          <v-card-actions>
            <v-btn text color="blue-grey">
              Wedding Venues
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card class="mx-auto" max-width="200">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://www.snupit.co.za/content/categories/events/catering.png"
          >
          </v-img>
          <v-card-actions>
            <v-btn text color="blue-grey">
              Explore More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    model: null,
  }),
  components: {},
  methods: {
    getCompanies: {},
  },
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
