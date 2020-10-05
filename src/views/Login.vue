<template>
<div class="my-5">    
  <v-card
    class="mx-auto"
    max-width="800"
    outlined
  >
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="login">

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>
        
        <v-text-field
        v-model="password"
        label="Password"
        required
        ></v-text-field>

        <v-row>
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
                >
                Login
            </v-btn>
        
        
            <v-btn
                color="warning"
                class="mr-4"
            >
                Sign Up
            </v-btn>
        </v-row>
            

    
    </v-form>
  </v-container>
  </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
  }),

  methods: {
    login() {
      this.$store
        .dispatch("retrieveToken", {
          email: this.email,
          password: this.password,
        })
        .then(this.$router.push({ name: "write-review" }));
    },
  },
};
</script>