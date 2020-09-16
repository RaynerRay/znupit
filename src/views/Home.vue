<template>
  <v-app class="home" style="background: grey">
    <v-container class="my-5"
      ><br />
      <br />
      
      <v-row>
        <v-col cols="12" sm="4">
          <h2 class="grey--text font-weight-light">
            Discover and get quotes from local  <span class="blue--text">Proffesionals for just about any
            Service</span>
          </h2>
          <br />
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
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6">
          <v-img
            class="white--text align-end"
            height="300px"
            src="https://image.shutterstock.com/image-photo/young-hispanic-man-wearing-painter-600w-1775775713.jpg"
          >
          </v-img>
        </v-col> </v-row
      ><br />
      
     <div>
        <h1 class="grey--text font-weight-light">Explore the Marketplace</h1>
      </div>
      <br />
      <v-layout row wrap>
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://www.snupit.co.za/content/categories/home-building-and-trade/carpet-cleaning-services.png"
          >
          </v-img>
          <v-card-actions>
            <v-btn text color="grey">
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
            <v-btn text color="grey"> Photography & Videography </v-btn>
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
            <v-btn text color="grey"> Wedding Venues </v-btn>
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
            <v-btn text color="grey"> Explore More </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
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