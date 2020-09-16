<template>
    <div> 
        <v-container class="my-5 grey lighten-2" >
         <v-card
            class="mx-auto"
            max-width="1200"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <p class="display-1 text--primary">{{companyDetail.name}}</p>
                <div class="overline mb-4">{{companyDetail.location}}</div>
                
                <v-list-item-subtitle>{{companyDetail.summary}}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar
                tile
                size="80"
                color="grey"
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-container fluid>
                <v-btn text color="deep-blue accent3" outlined class="mr-5"><span><v-icon>mdi-pencil</v-icon></span>Write A Review</v-btn>
                  
                <v-btn text color="deep-blue accent3" outlined class="mr-5"><span><v-icon>mdi-note-text-outline</v-icon></span>Request Quote</v-btn>
                  
                <v-btn text color="deep-blue accent3" outlined> <span><v-icon>mdi-message-processing-outline</v-icon></span>Send A Message</v-btn>
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
            >
              <v-img
                src="https://picsum.photos/500/300?image"
                lazy-src="https://picsum.photos/10/6?image"
                aspect-ratio="1"
              ></v-img>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-img
                src="https://picsum.photos/500/300?image"
                lazy-src="https://picsum.photos/10/6?image"
                aspect-ratio="1"
              ></v-img>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
              <v-img
                src="https://picsum.photos/500/300?image"
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
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </v-card-text>
            </v-card>
          </v-container>
      </v-tab-item>
      
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            </p>

            <p class="mb-0">
              Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
            </v-tabs>
          </v-card>

        </v-container>
      </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },

  computed: {
    ...mapState(["categories", "companies"]),

    companyDetail() {
      return this.companies.find(company => company._id == this.id);
    },
  },
};
</script>
