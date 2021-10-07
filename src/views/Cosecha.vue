<template>  
  <v-container>
    <v-main class="mt-2">
      <h1 class="text-center grey--text text--darken-3">
        Nuestros productos
      </h1>

    <!-- colocar desde aquí la plantilla y sus componentes -->
      <listado-productos></listado-productos>
    
    </v-main>    
  </v-container>
  
</template>

<script>  
import ListadoProductos from '../components/ListadoProductos.vue'
  export default {
  components: { ListadoProductos },
    name: 'Cosecha',
  }
</script>