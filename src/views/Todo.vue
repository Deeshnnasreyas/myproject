<template>
  <div class="Todo">
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-spacer></v-spacer>
          <v-card class="mt-2 pa-2" v-for="n in 3" :key="n" outlined tile>
            <v-row>
              <v-col cols="12" sm="4" align="center">
                <v-avatar size="150" tile>
                  <v-img src="kfc1.png"></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="8" class="px-10">
                <v-app-bar flat color="rgba(0,0,0,0)">
                  <v-spacer></v-spacer>
                  <v-btn x-small color="red" dark>
                    <v-icon color="grey lighten-1">mdi-close</v-icon></v-btn
                  >
                </v-app-bar>
                <h2 class="grey--text">Super Dinner</h2>
                <h6 class="grey--text">KFC Salmiya</h6>
                <v-row>
                  <v-col cols="12" sm="6" class="mt-2">
                    <v-btn rounded dark color="#00E5FF">
                      Apply
                    </v-btn>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-spacer></v-spacer>
                    <v-btn x-small>-</v-btn>1<v-btn x-small>+</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-spacer></v-spacer>
        </v-col>
        <v-col cols="12" sm="3">
          <v-btn color="#00E5FF" dark>
            Back to Shops
          </v-btn>
          <v-spacer></v-spacer>
          <v-card class="rounded-xl">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="mb-1"
                  >Sub Total(3 items) : KD 10.35</v-list-item-title>
                <v-list-item-subtitle>Promo Discount</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-btn
        rounded
        color="#00E5FF"
        text-align="center"
        dark
        class="mx-auto"
        width="200px">
        CHECKOUT
      </v-btn>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <h4>You may also like</h4>
      <v-row>
        <v-col v-for="n in 6" :key="n" class="d-flex child-flex" cols="2">
          <v-card class="mx-auto" max-width="200" max-height="250">
            <v-avatar size="100" tile>
              <v-img src="nivea.png"></v-img>
            </v-avatar>
            <v-card-text>
              <div class="text--primary">
                Nivea body Milk 48h Nivea body Milk 48h
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [{ title: "Super Dinner" }, { subtitle: "KFC Salmiya" }],
  }),
};
</script>
