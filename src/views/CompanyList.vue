<template>
    <div>
        <h1>Hello {{ this.$route.params.id }}</h1>
        
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
  },
};
</script>
