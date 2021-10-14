<template>  
  <v-container>
    <v-main class="mt-2">
      <h1 class="text-center grey--text text--darken-3">
        Asesoría nutricional
      </h1>

    <!-- colocar desde aquí la plantilla y sus componentes -->
      <desarrollo-nutricional></desarrollo-nutricional>
    </v-main>    
  </v-container>
  
</template>

<script> 
  import DesarrolloNutricional from '../components/DesarrolloNutricional.vue' 
  export default {    
    name: 'AsesoriaNutricional',
  
  components: { DesarrolloNutricional }
};
</script>
