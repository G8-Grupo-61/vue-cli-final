<template>
  <v-container>
    <v-main class="mt-2">
      <h1 class="text-center grey--text text--darken-3">Noticias y Recetas</h1>
      <!-- colocar desde aquí la plantilla y sus componentes -->
      <ampliacion-noticias></ampliacion-noticias>
    </v-main>
  </v-container>
</template>

<script>
import AmpliacionNoticias from '../components/AmpliacionNoticias.vue'

export default {
  name: "Noticias",
  data() {
    return {};
  },
  components: { AmpliacionNoticias }
};
</script>


 