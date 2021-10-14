<template>
  <div class="container">
    <div v-for="(asesoria, index) in asesorias" :key="index">
      <h3 class="asesoria-titulo">{{ asesoria.tituloPpal }}</h3>
      <img :src="asesoria.imagApoyo" />
      <p v-html="asesoria.parrafo"></p>
      <hr style="height: 20px; color: brown" />
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DesarrolloNutricional",
  data() {
    return {
      asesorias: [
        {
          tituloPpal: "Mantén hábitos de vida saludables",
          imagApoyo: require("../assets/habitos.png"),
          parrafo:
            "Mantener hábitos saludables a lo largo de los años es esencial para que eleves tu calidad de vida y cuides de tu salud. Por eso, cuando de bienestar se trata lo mejor es llevar una alimentación balanceada, realizar actividad física y evitar prácticas nocivas para la salud.",
        },
         {
          tituloPpal: "¿Qué es la obesidad y cuáles son sus riesgos?",
          imagApoyo: require("../assets/obesidad.png"),
          parrafo:
            "De acuerdo con la Organización Mundial de la Salud, la obesidad es una enfermedad que se caracteriza por una acumulación excesiva de grasa en el cuerpo. Aunque muchos suelen creer que es, exclusivamente, un problema estético lo cierto es que puede acarrear el desarrollo de patologías más graves",
        },
        {
          tituloPpal: "El hambre emocional",
          imagApoyo: require("../assets/hambre.png"),
          parrafo:
            "Controla el hambre emocional, si sientes ansiedad, es una pésima idea que comas por este impulso. Para esto, te recomendamos que tomes dos refrigerios saludables a lo largo del día entre comidas.",
        },
      ],
    };
  },
};
</script>
