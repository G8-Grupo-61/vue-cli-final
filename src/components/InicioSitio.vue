<template>
	<v-container class="mt-12">
    
    <!-- VIDEO, LOGO Y TITULO -->
    <v-row class="mt-16">
      <video-bg class="mt-0" :sources="['./ensalada_frutas.mp4']" img="./ensalada_frutas.mp4">
      <v-col cols="12">
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="300"
				/>
			</v-col>
        <v-col cols="12" class="mb-4">
          <h1 class="display-1 sombratexto text-center white--text text--darken-3 mb-3">
            Tu eres lo que consumes..
          </h1>
			</v-col>
      </video-bg>
    </v-row>    		

    <!-- NUESTROS SERVICIOS -->
		<v-row class="my-3 green lighten-1 d-flex justify-sm-space-around ">
			<h1
				class="my-3 text-center font-weight-bold display-1 grey--text text--lighten-2 "
			>
				Nuestros servicios
			</h1>

			<v-col
				class="d-flex flex-sm-column"
				cols="12"
				sm="3"
				v-for="(servicio, index) in servicios"
				:key="index"
			>
				<v-card class="flex flex-column" elevation="14">
					<v-img            
            class="white--text align-end"
						height="200px"
						:style="{
							backgroundImage:
								'url(' + require('../assets/' + servicio.imagen) + ')',
              backgroundPosition:'center'
						}"
						alt="imagen"
					>
						<v-card-title>{{
							servicio.titulo
						}}</v-card-title>
					</v-img>

					<v-card-subtitle class="pb-0">
						{{ servicio.subtitulo }}
					</v-card-subtitle>

					<v-card-text class="text--primary green lighten-3">
						<div>{{ servicio.textocorto }}</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="green" text>
							Mas detalles
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<!-- NOTICIAS Y RECETAS SALUDABLES -->
		<v-row class="my-3 orange lighten-2 d-flex justify-sm-space-around ">
			<h1
				class="my-3 text-center font-weight-bold display-1 grey--text text--lighten-2 "
			>
				Noticias y recetas saludables
			</h1>

			<v-col
				class="d-flex flex-sm-column"
				cols="12"
				sm="3"
				v-for="(noticia, index) in noticias"
				:key="index"
			>
				<v-card class="flex flex-column" elevation="14">
					<v-img            
            class="white--text align-end"
						height="200px"
						:style="{
							backgroundImage:
								'url(' + require('../assets/' + noticia.imagen) + ')',
              backgroundPosition:'center'
						}"
						alt="imagen"
					>
						<v-card-title>{{
							noticia.titulo
						}}</v-card-title>
					</v-img>

					<v-card-subtitle class="pb-0">
						{{ noticia.subtitulo }}
					</v-card-subtitle>

					<v-card-text class="text--primary amber lighten-4">
						<div>{{ noticia.textocorto }}</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="green" text>
							Mas detalles
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

		<!-- EQUPO DE TRABAJO -->
		<v-row class="my-3 deep-orange lighten-2 d-flex justify-sm-space-around">
			<h1
				class="my-3 text-center font-weight-bold display-1 grey--text text--lighten-2"
			>
				Nuestro equipo de trabajo
			</h1>
			<v-col
				class="d-flex flex-sm-column"
				cols="12"
				sm="2"
				v-for="(p, index) in grupo"
				:key="index"
			>
				<v-card class="flex flex-column"  elevation="14">
					<v-img
						class="white--text align-end"
						height="200px"
						:style="{
							backgroundImage:
								'url(' + require('../assets/' + p.imagen) + ')',
              backgroundPosition:'center'
						}"
						alt="imagen"
					>
						<v-card-title>{{ p.titulo }}</v-card-title>
					</v-img>

					<v-card-subtitle class="pb-0">
						{{ p.subtitulo }}
					</v-card-subtitle>

					<v-card-text class="text--primary deep-orange lighten-4">
						<div>{{ p.textocorto }}</div>
					</v-card-text>

					<v-card-actions>
						<v-btn color="green" text>
							Mas detalles
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>

	</v-container>
</template>

<script>
import VideoBg from 'vue-videobg'
export default {
	name: "InicioSitio",
	data() {
		return {
			grupo: {},
			noticias: {},
			servicios: {},
		};
	},
	methods: {
		getJson(url) {
			fetch(url)
				.then((resp) => {
					return resp.json();
				})
				.then((json) => {
					if (url.includes("grupo")) {
						this.grupo = json;
					}          
					if (url.includes("noticias")) {
						this.noticias = json;
					}
					if (url.includes("servicios")) {
						this.servicios = json;
					}
				});
		},
	},
	created: function() {
		// llenamos los array de objetos para ciclar las tarjetas
		this.getJson("./json/grupo.json"),
    this.getJson("./json/noticias.json"),
    this.getJson("./json/servicios.json");
	},
  components: { VideoBg }
};
</script>

<style scoped>
  .v-card__title, .v-card-subtitle{
    text-shadow: black 0.1em 0.1em 0.2em !important;
    word-break: normal !important;
  }
  .sombratexto{
    text-shadow: black 0.1em 0.1em 0.2em !important;
  }
</style>
