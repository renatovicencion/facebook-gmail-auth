<template>
  <v-app>

    <Navbar v-if="usuario != ''" />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import { mapState } from "vuex";
import Navbar from "@/components/Navbar"


export default {
  name: 'App',

  components: {
    Navbar
  },
  computed: {
    ...mapState(['usuario'])
  }
};
</script>
