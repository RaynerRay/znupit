<template>
<div class="my-5">    
  <v-card
    class="mx-auto"
    max-width="800"
    outlined
  >
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="register">

        <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
        ></v-text-field>

        <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        ></v-text-field>
        
        <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        ></v-text-field>

        <v-row>
            <v-btn
                color="success"
                class="mr-4"
                type="submit"
                >
                Register
            </v-btn>
        
        
            <v-btn
                color="warning"
                class="mr-4"
            >
                Login
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

    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v =>
        (v && v.length >= 5 && v.length <= 50) ||
        "Name must be more than 5 characters & less than 50",
    ],

    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 5) || "Password must be more than 5 characters",
    ],
  }),
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then(this.$router.push({ name: "login" }));
    },
  },
};
</script>