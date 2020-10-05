<template>
    <div class="create">
        <v-form v-model="valid">
            <v-container>
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
                </v-row>
            <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="First name"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="number"
                    :rules="nameRules"
                    
                    label="Phone Number"
                    required
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
                </v-col>
            </v-row>

             <v-row>
                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="location"
                    :rules="nameRules"
                    label="City"
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="website"
                    label="Website"
                    
                ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                md="4"
                >
                <v-text-field
                    v-model="logo"
                    label="Logo"
                ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-text-field
                        v-model="photo1"
                        label="Photo"
                    ></v-text-field>
                    <v-text-field
                        v-model="photo2"
                        label="Photo"
                    ></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field
                    v-model="photo3"
                    label="Photo"
                    ></v-text-field>
                    <v-text-field
                        v-model="photo4"
                        label="Photo"
                    ></v-text-field>
                </v-col>

               <v-col>  
                <v-text-field
                    v-model="photo5"
                    label="Photo"
                ></v-text-field>
                <v-text-field
                    v-model="photo6"
                    label="Photo"
                ></v-text-field>
                </v-col> 

                <v-col
                cols="12"
                md="12"
                >
                <v-text-field
                    v-model="summary"
                    label="Summary"
                ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="12"
                    >
                    <v-text-field
                        v-model="about"
                        label="About"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn @click="addToApi()" color="blue">
              Submit
            </v-btn>
            </v-container>
            
        </v-form>
    </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      valid: false,
      selectedCategory: undefined,
      name: "",
      number: "",
      nameRules: [v => !!v || "required"],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      summary: "",
      location: "",
      website: "",
      logo: "",
      photo1: "",
      photo2: "",
      photo3: "",
      photo4: "",
      photo5: "",
      photo6: "",
      about: "",
    };
  },
  mounted() {
    this.$store.dispatch("loadCategories");
  },
  computed: {
    ...mapState(["categories", "companies"]),
  },
  methods: {
    addToApi() {
      axios
        .post("https://znupit.herokuapp.com/companies", {
          name: this.name,
          summary: this.summary,
          contact: this.number,
          website: this.website,
          location: this.location,
          about: this.about,
          logo: this.logo,
          photos: [
            { image: this.photo1 },
            { image: this.photo2 },
            { image: this.photo3 },
            { image: this.photo4 },
            { image: this.photo5 },
            { image: this.photo6 },
          ],
          categories: [this.selectedCategory],
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
