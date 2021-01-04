<template>
  <div class="home">
    <h3>Bienvenido {{ usuario.nombre }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState(['usuario'])
  }
}
</script>
