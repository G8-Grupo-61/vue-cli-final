<template>  
  <v-container>
    <v-main class="mt-2">
      <h1 class="text-center grey--text text--darken-3">
        Huerta
      </h1>

    <!-- colocar desde aquí la plantilla y sus componentes -->
      <primeros-pasos></primeros-pasos>
      <mantenimiento-huerta></mantenimiento-huerta>
    </v-main>    
  </v-container>
  
</template>

<script>
  import PrimerosPasos from '@/components/PrimerosPasos'
import MantenimientoHuerta from '@/components/MantenimientoHuerta.vue'

  export default {
    name: 'Huerta',
    components: { PrimerosPasos, MantenimientoHuerta,},
  }
</script>