<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Shopping
          </v-list-item-title>
          <v-list-item-subtitle>
            Best shopping Experience!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#00E5FF" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Shopping</v-app-bar-title>
      <v-spacer></v-spacer>
     
 <v-col
          cols="12"
          sm="3"
        
        >
          <v-text-field
            label="Location"
            solo
            append-icon="mdi-map-marker"
           
          ></v-text-field>
        </v-col>
         
    
     
      
      <v-col
          cols="12"
          sm="3"
         
        >
          <v-text-field
            label="Search"
            solo
            
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-col>   
   
   
<v-icon>mdi-bell</v-icon>
<v-icon>mdi-cart</v-icon>
    
     <v-icon>mdi-account-circle</v-icon>
      <v-btn icon>
         <v-spacer></v-spacer>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
     
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>



<script>

export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Order", icon: "mdi-shopping", to: "/Order" },
      { title: "About", icon: "mdi-help-box", to: "./About" },
      ],
     
  }),
};
</script>
<style lang="sass">
.v-input.Expanding-location
  .v-input__slot
    &:before,&:after
         min-width: 250px
         min-height: 5px
         margin-top: 30px
        

       
         .v-input.Expanding-search
  .v-input__slot
    &:before,&:after
         min-width: 250px
         min-height: 5px
         margin-top: 30px
</style>
 
