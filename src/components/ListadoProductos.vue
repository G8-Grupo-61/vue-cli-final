<template>
<div>
    <div class="container">
              <div class="row justify-content-center mb-2">
                    <div v-for="(contenido, index) in productos" 
                    :key="index"
                    class="col-12 col-md-2 border ms-2 my-1">
                      <img class="bg-transparent mx-auto d-block" :src="contenido.img" alt="imagen" width="60%" height="40%" >
                      <p class="fs-3 text-center">{{contenido.Nombre}}</p>
                      <p class="text-center">{{contenido.Precio}}</p>
                    </div>
              </div>
    </div>
</div>    
</template>

<script>
export default {
    
    name:"ListadoProductos",
    data(){
        return{
            productos:[
                {
                    Nombre:"Manzana",
                    cat:"Alimentos",
                    img:require("../assets/manzanas.jpg"),
                    Precio: "$ 800",
                },
                {
                    Nombre:"Zanahoria",
                    cat:"Alimentos",
                    img:require("../assets/zanahoria.jpg"),
                    Precio: "$ 400",
                },
                {
                    Nombre:"Trigo",
                    cat:"Alimentos",
                    img:require("../assets/trigo.jpg"),
                    Precio: "$ 1500",
                },
                {
                    Nombre:"Huevos",
                    cat:"Alimentos",
                    img:require("../assets/huevos.jpg"),
                    Precio: "$ 10000",
                },
                {
                    Nombre:"lechuga",
                    cat:"Alimentos",
                    img:require("../assets/lechuga.jpg"),
                    Precio: "$ 600",
                },
                {
                    Nombre:"Semillas",
                    cat:"Huerta",
                    img:require("../assets/semillas.jpg"),
                    Precio: "$ 2500",
                },
                {
                    Nombre:"tierra",
                    cat:"Huerta",
                    img:require("../assets/tierra.jpg"),
                    Precio: "$ 2000",
                },            
            ]

        }//cierre return
    }//cierre del data
}
</script>