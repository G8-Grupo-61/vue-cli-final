<template>
	<v-app id="inspire">

    <!-- MENU LATERAL -->
		<v-navigation-drawer v-model="visible" color="teal darken-4" temporary app>
			<v-list-item dark>
				<v-list-item-content>
					<v-list-item-title class="text-h6 lime--text">
						Seleccione
					</v-list-item-title>
					<v-list-item-subtitle>
						haciendo touch / clik
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list dense nav>
				<v-list-item
					v-for="item in menuItems"
					:key="item.title"
					:to="item.to"
					link
					dark
				>
					<v-list-item-icon>
						<v-icon color="lime lighten-1">
							{{ item.icon }}
						</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

    <!-- MENU SUPERIOR -->
		<v-app-bar app color="green" dark src="./assets/banner.jpg" prominent>
			<template v-slot:img="{ props }">
				<v-img
					v-bind="props"
					gradient="to top right, rgba(0, 100, 0,.5), rgba(85, 107, 47,.8)"
				></v-img>
			</template>

			<v-app-bar-nav-icon @click="visible = !visible"></v-app-bar-nav-icon>

			<v-app-bar-title>Salud a la mesa</v-app-bar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon @click.stop="dialog = true">mdi-account-lock</v-icon>
			</v-btn>

			<v-btn icon class="d-none">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-app-bar>		
    
    <!-- DIV PRINCIPAL DONDE SE MOSTRARÁN LAS PÁGINAS DEL SITIO  -->
		<v-main class="mt-0 pt-0">
			<router-view></router-view>
		</v-main>        

    <!-- LOGIN DE USUARIOS Y REGISTRO DE CLIENTES -->
    <v-row justify="center">
			<v-dialog v-model="dialog" max-width="600">
				<v-card>
					<v-tabs
						v-model="tab"
						background-color="green darken-1"
						centered
						dark
						icons-and-text
					>
						<v-tabs-slider color="orange"></v-tabs-slider>

						<v-tab href="#ingresar">
							Ingresar
							<v-icon>mdi-lock-alert-outline</v-icon>
						</v-tab>

						<v-tab href="#registrarse">
							Registrarse
							<v-icon>mdi-account-plus</v-icon>
						</v-tab>
					</v-tabs>

					<v-tabs-items v-model="tab">
						<v-tab-item :key="1" value="ingresar">
							<v-card flat>
								<v-card-text>
									<form>
										<v-text-field
											v-model="email"
											:error-messages="emailErrors"
											label="E-mail"
											required
											@input="$v.email.$touch()"
											@blur="$v.email.$touch()"
										></v-text-field>

										<v-text-field
											v-model="name"
											type="password"
											:error-messages="nameErrors"
											:counter="10"
											label="Password"
											required
											@input="$v.name.$touch()"
											@blur="$v.name.$touch()"
										></v-text-field>

										<v-card flat class="mt-3 d-flex justify-space-around">
											<v-btn small rounded dark color="success" @click="submit">
												Enviar
											</v-btn>
											<v-btn small rounded dark color="warning" @click="clear">
												Limpiar
											</v-btn>
										</v-card>
									</form>
								</v-card-text>
							</v-card>
						</v-tab-item>
						<v-tab-item :key="2" value="registrarse">
							<v-card flat>
								<v-card-text>
									<form>
										<v-text-field
											v-model="email"
											:error-messages="emailErrors"
											label="E-mail"
											required
											@input="$v.email.$touch()"
											@blur="$v.email.$touch()"
										></v-text-field>

										<v-text-field
											v-model="name"
											type="password"
											:error-messages="nameErrors"
											:counter="10"
											label="Password"
											required
											@input="$v.name.$touch()"
											@blur="$v.name.$touch()"
										></v-text-field>

                    <v-text-field
											v-model="pwd"
											type="password"
											:error-messages="pwdErrors"
											:counter="10"
											label="Repita password"
											required
											@input="$v.pwd.$touch()"
											@blur="$v.pwd.$touch()"
										></v-text-field>

										<v-card flat class="mt-3 d-flex justify-space-around">
											<v-btn small rounded dark color="success" @click="submit">
												Enviar
											</v-btn>
											<v-btn small rounded dark color="warning" @click="clear">
												Limpiar
											</v-btn>
										</v-card>
									</form>
								</v-card-text>
							</v-card>
						</v-tab-item>
					</v-tabs-items>
					<v-divider></v-divider>
					<v-card-actions class="green darken-1">
						<v-spacer></v-spacer>
						<v-btn color="white" text @click="dialog = false">
							Cerrar ventana
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</v-row>

    <!-- PIE DE PÁGINA -->
		<v-footer color="green darken-4" padless>
			<v-row no-gutters>
				<v-col class="d-flex justify-center flex-wrap">
					<v-btn
						v-for="link in links"
						:key="link"
						color="white"
						text
						rounded
						class=""
					>
						<span class="text-caption">{{ link }}</span>
					</v-btn>
				</v-col>
				<v-col
					class="light-green darken-3 py-4 text-center white--text"
					cols="12"
				>
					{{ new Date().getFullYear() }} — <span>Grupo 61 - Scrum grupo 8</span>
				</v-col>
			</v-row>
		</v-footer>

	</v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, sameAs, email } from "vuelidate/lib/validators";
export default {
	name: "App",
	mixins: [validationMixin],
	validations: {
		email: { required, email },
		name: { required, maxLength: maxLength(10) },
    pwd: {
      sameAsPassword: sameAs('name')
	  }
  },
	data: () => ({
		name: "",
		email: "",
    pwd: "",

		visible: false,
		dialog: false,
		tab: "ingresar",
		menuItems: [
			{
				title: "Inicio",
				icon: "mdi-home",
				to: "/",
			},
			{
				title: "Productos en cosecha",
				icon: "mdi-food-apple",
				to: "/cosecha",
			},
			{
				title: "Haga su huerta",
				icon: "mdi-flower-tulip",
				to: "/huerta",
			},
			{
				title: "Asesoría nutricional",
				icon: "mdi-hamburger-off",
				to: "/asesoria-nutricional",
			},
			{
				title: "Noticias y recetas",
				icon: "mdi-food-variant",
				to: "/noticias",
			},
		],
		links: ["Inicio", "Nosotros", "Equipo", "Servicios", "Blog", "Contactanos", "Enlaces Útiles"],
	}),
	computed: {		
		emailErrors() {
			const errors = [];
			if (!this.$v.email.$dirty) return errors;
			!this.$v.email.email && errors.push("Debe ser un e-mail válido");
			!this.$v.email.required && errors.push("E-mail es requerido");
			return errors;
		},
    nameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.maxLength &&
				errors.push("Debe ser de máximo 10 caractéres");
			!this.$v.name.required && errors.push("Password es requerido");
			return errors;
		},
		pwdErrors() {
			const errors = [];
			if (!this.$v.pwd.$dirty) return errors;
			!this.$v.pwd.maxLength &&
				errors.push("Debe ser de máximo 10 caractéres");
			!this.$v.pwd.required && errors.push("Repetir password es requerido");
			return errors;
		},
	},
	methods: {
		submit() {
			this.$v.$touch();
		},
		clear() {
			this.$v.$reset();
			this.name = "";
			this.email = "";
      this.pwd = "";
		},
	},
};
</script>

<style>
.v-list-item--active .v-list-item__content .v-list-item__title {
	color: yellow;
}
.v-card__text,
.v-card__title {
	word-break: normal !important;
}
</style>
