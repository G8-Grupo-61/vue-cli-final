<template>
  <div>
          <section class="primeros_pasos">
        <h2 class="container titulo-servicios">
            <!-- {{titulo}} -->
            Primeros Pasos
        </h2>
        <div class="container seccion-servicios">
            <!-- Paso 1 -->
            <div v-for="(item,index) in prim_pasos" 
            :key="index"
            class="row align-items-center justify-content-center py-2 my-1 mx-1  bg-light" :class="{'flex-row-reverse': item.flex}">
            <div class="col-12 col-lg-6">
                <img class="img-fluid" :src="item.img" alt="imagen">
            </div>
            <div class="col-12 col-lg-6">
                <h5 >{{item.subtitulo}}</h5  >
                <p class="">
                {{item.texto}}
                <ul class="">
                <li v-for="(elemento,index) in item.lista"
                :key="index"
                >{{elemento.item}}</li>
                </ul>
                </p>
            </div>
            </div>          

        </div>
    </section>
  </div>
</template>


<script>


export default {
  

  name: "PrimerosPasos",
  data(){
    return{
      prim_pasos:[
                {
                titulo:"paso 1",
                img: require('../assets/location.jpg'),
                subtitulo: "Elige el lugar",
                texto: "Empieza por definir el espacio que le asignaras a la huerta ya que determina el fracaso o el éxito. ten en cuenta lo siguiente",
                lista:
                [
                    {item:"Cantidad de sol que recibe el lugar"},
                    {item:"Contar con un punto de agua cerca"},
                    {item:"protección contra corrientes de aire"},
                ],
                flex:""
                },
    
                {
                    titulo:"paso 2",
                    img:require('../assets/bulding.jpg'),
                    subtitulo:"Construir el huerto",
                    texto: "Con el sitio definido es hora de poner manos a la obra y diseñar la estructura del huerto",
                    lista:
                    [
                        {item:"Decide si será horizontal o vertical"},
                        {item:"Usa materiales usados: cajones y armarios viejos, botellas plásticas"},
                        {item:"Si no tienes un espacio continuo puedes usar macetas de diferentes tamaños"}
                    ],
                    flex:"flex-row-reverse"
                },
    
                {
                    titulo:"paso 3",
                    img:require('../assets/seeds.jpg'),
                    subtitulo:"Selecciona la tierra y las semillas",
                    texto: "Adquiere tierra fértil, lo más recomendable es que uses sustrato 100% orgánico puedes hacerlo tu mismo con una compostera. Para las semillas",
                    lista:
                    [
                        {item:"Elige plantas de temporada"},
                        {item:"Combina distintos tipos de plantas complementarias"},
                        {item:"Crea o usa semilleros"}
                    ],
                    flex:""
                }
            ]
    }//cierre return

  }//Cierre del data

};
</script>