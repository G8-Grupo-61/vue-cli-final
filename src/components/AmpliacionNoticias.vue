<template>
    <div class="container">
        
        <!-- Aquí comienzan las noticias -->

        <div v-for="(noticia, index) in noticias"
        :key="index">
            <img :src="noticia.imagApoyo" class="col-md-6 float-md-end mb-3 ms-md-3" alt=" ...">
            <h3 class="noticias-titulo">{{noticia.tituloPpal}}</h3>
            <p v-html="noticia.parrafo"></p>    
            <hr style="height:20px;color:brown">

        </div>


    <!-- Aquí comienza la primera receta -->
        <div class="row">
            <div class="col">
              <div class="noticias-card sombra" style="width: 30rem;">
                <img src="../assets/receta pasta y esparragos ajustado.jpg" class="card-img-top" alt="imagen">
                <div class="card-body">
                  <p class="card-text">
                  <h5>{{subTituloRect1}}</h5>
                  <ul>
                    <li v-for="(ingrediente, index) in ingredientes"
                    :key="index">
                    {{ingrediente}}
                    </li>                    
                  </ul>
                  </p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="noticias-card sombra">
                <div class="card-body">
                  <h5 class="card-title">{{tituloRect1}}</h5>
                  <p class="card-text" v-html="receta1Parrafo"></p>
                </div>
              </div>
            </div>
        </div>
        <hr style="height:20px;color:green">
        
        <!-- Aquí termina la primera receta -->

        <!-- Aquí comienza la segunda receta -->
        <div class="row">
            <div class="col">
              <div class="noticias-card sombra" style="width: 30rem;">
                <img src="../assets/sirope de agave ajustado.jpg" class="card-img-top" alt="imagen">
                <div class="card-body">
                  <p class="card-text">
                  <h5>{{tituloRect2}}</h5>
                  {{receta2Parrf1}}
                  </p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="noticias-card sombra">
                <div class="card-body">

                  <h5 class="card-title">Sirope de cereales</h5>

                  <p class="card-text">
                    {{receta2Parrf2}}
                  </p>
                </div>
              </div>
            </div>
          </div>

        <!-- Aquí termina la segunda receta -->


    </div>

</template>

<script>
export default {
  name: "AmpliacionNoticias",
  data() {
    return {
      noticias: [
        {
          //Noticia 1
          tituloPpal: `Cuida el organismo y tu peso`,
          imagApoyo: require("../assets/organismo y peso.jpg"),
          parrafo: `La clave para alcanzar y mantener un peso saludable está en hacer ejercicio regularmente y tener unos buenos
                                hábitos alimentarios. Algunas personas creen que hacer ejercicio y seguir unos buenos hábitos alimentarios
                                requiere mucho esfuerzo y planificación pero esto no es cierto. De hecho, la mejor forma de modificar los
                                hábitos cotidianos es haciendo pequeños cambios que gradualmente irán formando parte de nuestra rutina diaria.
                                Todos sabemos lo que significa introducir cambios en nuestra vida diaria que ahora están firmemente
                                establecidos en nuestro estilo de vida —por ejemplo, todos hemos aprendido a lavarnos los dientes y estamos acostumbrado a
                                hacerlo varias veces cada día. He aquí la información que necesitas para que otros cambios saludables te
                                resulten igual de fáciles.<br>
                                Alimentarse bien no significa ponerse a dieta o a régimen una y otra vez. De hecho, los estudios han
                                demostrado que ponerse a dieta a menudo no funciona —y las dietas de adelgazamiento pueden tener un efecto rebote, ya que
                                mucha gente, al dejar de hacer dieta, gana incluso más peso del que tenía antes de ponerse a dieta.
                                Una de la causas de que las dietas no funcionen es porque instan a pensar que hay alimentos "buenos" y
                                "malos," cuando lo cierto es que todo es bueno si se toma con moderación. Además en la mayoría de dietas de
                                adelgazamiento se debe dejar de comer ciertos alimentos, lo que favorece los “antojos” de esos alimentos en
                                concreto. Y muchas dietas y regimenes provocan en el organismo carencias de nutrientes importantes. Los
                                jóvenes deben seguir una dieta variada, y no hay nada malo en permitirse algún manjar rico de sabor pero poco
                                nutritivo de vez en cuando. Por ejemplo, una barrita de caramelo tiene un sabor más especial si nos la tomamos de vez en
                                cuando que si lo hacemos cada día.<br>
                                La mejor forma de mantenerse en un peso saludable (o de perder peso en caso necesario) es hacer elecciones
                                saludables en lo que a alimentos se refiere cada día. Para algunos, esto implicará modificar la mentalidad en
                                lo que a la comida se refiere. En vez de pensar en la comida en términos emocionales (por ejemplo, como una
                                recompensa por haber sacado buena nota en un examen o una forma de afrontar el estrés), vela tal y como es
                                —una forma práctica de llenar de combustible tu cuerpo.<br>
                                He aquí 10 consejos para convertir la alimentación saludable en una parte de tu vida:<br>
                                <ul>
                                <li>Sustituye los refrescos, los zumos de frutas y las bebidas para deportistas que sean ricas en azúcar 
                                por agua, leche semidesnatada o bebidas sin azúcar.</li>
                                <li>Toma por lo menos cinco raciones de fruta y verdura al día. La fibra te saciará y obtendrás los
                                nutrientes y sabores que necesita tu cuerpo para sentirse satisfecho.</li>
                                <li>Come alimentos de todos los grupos. Aparte de la fruta y la verdura, incluye cereales integrales y
                                proteínas magras en cada comida.</li>
                                <li>Cuando comas en un establecimiento de comida rápida, haz elecciones saludables dentro de lo posible.
                                Elige un bocadillo de hamburguesa pequeño (de un solo piso) en vez de uno inmenso (de varios pisos) y acompáñalo
                                con una ensalada en vez de con patatas fritas. Elige siempre raciones normales, no super o extragrandes. Y todavía
                                mejor: evita los establecimientos de comida rápida siempre que puedas.</li>
                                <li>Ten siempre a mano alimentos saludables. Si la cocina de tu casa siempre está llena de alimentos
                                saludables, como apio, pasas o manteca de cacahuete, tendrás muchas menos oportunidades de lanzarte sobre un paquete
                                de pastas (¡Tal vez tengas que enseñarles a tus padres un par de cosas sobre los alimentos para asegurarte de
                                que te compran cosas buenas!).</li>
                                <li>Llévate de casa tus propios tentempiés para no caer en la tentación de utilizar las máquinas
                                dispensadoras de alimentos o de entrar en un supermercado. Prueba a llevarte palitos de zanahoria, piezas de fruta o muesli
                                hecho por ti en vez de un paquete de galletas, una bolsa de patatas fritas u otro alimento de fabricación
                                industrial, que suelen estar cargados de grasas y calorías.</li>
                                <li>Come cuando tengas hambre. Si tienes la tentación de picar algo por puro aburrimiento, intenta buscar
                                otra forma de ocupar el tiempo.</li>
                                <li>Desayuna de forma saludable cada día.</li>
                                <li>No hagas las comidas principales ni tomes tentempiés viendo la televisión porque probablemente acabarás
                                comiendo más de lo que necesitas.</li>
                                <li>Fíjate en el tamaño de las porciones. Si una porción es demasiado grande, pártela por la mitad y déjate
                                la otra mitad para más adelante o bien compártela con un amigo.</li> `,
        },
        {
          //Noticia 2
          tituloPpal: "Alimentación y actividad física",
          imagApoyo: require("../assets/alimentacion y actividad fisica.jpg"),
          parrafo: `Los dos principales factores que intervienen en el estado de salud de la persona son las características
                                genéticas y el estilo de vida. La mayor parte de las enfermedades tienen una base genética, pero el estilo
                                de vida del individuo es el factor que determina qué patología puede desarrollar en el transcurso de los años.
                                En Europa, la mayoría de las principales causas de muerte corresponden a enfermedades crónicas relacionadas
                                directamente con la falta de cambio de conductas asociadas al estilo de vida, que el propio individuo puede
                                llegar a controlar. Las conductas que representan un peligro para la conservación de la salud se consideran factores de riesgo.
                                Dos de los principales, con mayor influencia negativa en las patologías crónicas, son el sedentarismo y la
                                alimentación inadecuada. Las personas físicamente activas disfrutan de una mayor calidad de vida, por que padecen menos limitaciones
                                que normalmente se asocian con las enfermedades crónicas y el envejecimiento; además están beneficiadas por una
                                mayor esperanza de vida. Mejorando nuestro estilo de vida, se reducen los riesgos de enfermedades
                                cardiovasculares y cáncer, las principales causas de mortalidad en la humanidad.<br>
                                El ejercicio físico aumenta el bienestar psicológico y mejora nuestro estado de ánimo, refuerza la
                                autoestima, genera autoconfianza y aumenta de control en uno mismo. Es importante promover la práctica de actividad física y deportiva en todas las edades, ya que implica
                                cambios positivos en el bienestar personal, inmediatamente después de haber hecho algún tipo de deporte. Está
                                comprobado que reduce problemas de ansiedad y depresiones. Los adolescentes deben hacer 60 minutos de actividad física cada día. Fíjate en la palabra "actividad":
                                siempre y cuando hagas que tu cuerpo se mueva, no significa necesariamente que tengas que hacer ejercicios
                                complicados o ir al gimnasio diariamente. Lo importante es que cada semana hagas actividad de forma equilibrada,
                                incluyendo ejercicios aeróbicos, de fuerza o musculación y de flexibilidad. Convierte el ejercicio en un hábito
                                programando cada día algún tipo de actividad física. Los días que tengas entrenamiento de fútbol o clase de aeróbic tal vez no te resulte complicado hacer
                                ejercicio durante una hora o más. Pero la mayoría de nosotros estamos muy ocupados y 60 minutos de actividad física
                                diaria pueden parecernos mucho tiempo. La buena noticia es que puedes dividir esos 60 minutos en períodos de
                                actividad física más cortos distribuidos a lo largo del día.<br>
                                Del mismo modo que te tomas un tentempié saludable para matar el gusanillo, los “tentempiés de ejercicio”
                                pueden ayudarte a mantener alto tu nivel de energía. Por ejemplo, levántate 15 minutos antes y haz varios
                                estiramientos o ejercicios de yoga. Anda a buen ritmo o haz un poco de footing a la hora de comer. Y haz lo mismo al salir
                                de tu centro de enseñanza —o vuelve a casa en bici o a pie. Si añades a esto subir por las escaleras en vez de
                                coger el ascensor, las clases de gimnasia y los paseos entre clases, probablemente llegarás a los 60 minutos
                                de ejercicio físico diario.La actividad física y el deporte son sinónimo de salud, expresa valores de vida, alegría, deseo de progreso,
                                de libertad, y de movimiento, de compartir, de sociabilizar, todos estos aspectos son de enriquecimiento tanto
                                personal como grupal. Por lo tanto, en el ámbito psicológico para todas las personas es fundamental el ejercicio físico.`,
        },
        {
          //Noticia 3
          tituloPpal: "ALIMENTACIÓN ORGÁNICA, LO QUE DEBES SABER",
          imagApoyo: require("../assets/alimentacion organica.jpg"),
          parrafo: ` Una de las últimas tendencias que ha cobrado importancia en el mundo es la de la alimentación orgánica. Es natural que cada vez más exista una mayor consciencia acerca de nuestro estilo de vida y este tipo de alimentación, además de ser sano y equilibrado, también implica una alternativa para el cuidado y conservación de nuestro planeta.<br>
          El concepto de orgánico va más allá de la publicidad que se le hace o de una moda de ciertos sectores healthy de la población. En realidad se trata de productos que han pasado por procesos agrícolas y ganaderos comprometidos con la conservación del medio ambiente y la salud de las personas y justamente ahí es donde radica su importancia.<br>
          <b>IMPORTANCIA DE LOS PRODUCTOS ORGÁNICOS</b><br>
           La comida orgánica es fundamental para el sano funcionamiento de tu cuerpo, no decimos que debes solo comer esto; solo que sería lo ideal. Por supuesto de ahí radica su importancia y de lo riguroso que debe ser tu conocimiento sobre el cuidado de la salud. Por ejemplo, seguro habrás visto en Internet la cantidad dietas orgánicas que parecen funcionar, sin embargo, para identificarlas y que sí funcionen, deberás tener en cuenta cómo diferenciar estos alimentos, para que sirven, cómo funcionan y así comenzar a alimentarte correctamente.<br>
           <b>¿Los alimentos orgánicos son para mi?</b><br>
           Al final, no se trata de la cantidad, sino de la calidad. Recuérdalo.<br>
           Estos productos son una de las opciones más saludables en términos de nutrición, aunque no son para todos. Es importante que identifiques si son adecuados para ti o tu familia teniendo en cuenta valores nutricionales, costos, tus gustos, e incluso, hasta sus ingredientes.<br>
           Otro punto importante es si te interesa cuidar el medio ambiente, es una de las formas que puedes hacerlo. ¿Sabías que este tipo de agricultura orgánica reduce la contaminación? ¿no? y no solo eso, también contribuye al ahorro recursos no biodegradables y mitiga el desgaste de los suelos. Este tipo de procesos de cultivo son naturales, sin químicos; así que si tu interés está en contribuir al planeta de otra manera, los productos orgánicos son para ti.<br>
           <h5>DIFERENCIA ALIMENTOS ORGÁNICOS DE LOS ALIMENTOS CONVENCIONALES</h5>
           La producción de alimentos orgánicos se diferencian de la alimentación convencional por las siguientes características:<br> 
           <ul>
           <li>Usa métodos naturales para la fertilización de la tierra promoviendo la conservación del agua y del suelo.</li>
           <li>No utiliza conservadores ni aditivos en el caso de alimentos procesados.</li>
           <li>En la producción ganadera no se emplean hormonas de crecimiento, anabólicos ni antibióticos.</li>
           <li>En la alimentación ganadera utiliza productos orgánicos para evitar el control de plagas, reduciendo al máximo el uso de pesticidas.</li></ul>
           También podrás diferenciar un alimento orgánico, de uno convencional, o menos natural, a través de sus ingredientes. Si son artificiales o no. Si se usan ingredientes sintéticos, modificados genéticamente, pesticidas, entre otros factores, podrían perjudicar tu salud a largo plazo. A diferencia de los no orgánicos, una alimentación más sana te ayudará a reducir futuros problemas de salud ya que, por ejemplo, no tienen conservantes, químicos u otros elementos que puedan ser perjudiciales.<br>
           <b>¡Además son mucho más frescos!</b><br>
           El concepto de orgánico se plantea desde la producción de este tipo de alimentos. Estos son hechos con productos naturales y buenas prácticas de cosecha ya que alrededor del 90% de sus ingredientes también lo son. De igual forma, podrás encontrarte con alimentos hechos a partir de estos productos y para que sigan siendo ‘naturales‘ deberán contar con al menos un 75% de ingredientes orgánicos.`,
        },
      ],

      subTituloRect1: "Ingredientes para 4 porciones",
      ingredientes: [
        "300 grs de pasta",
        "3 alcachofas",
        "12 espárragos trigueros",
        "2 dl de crema de leche",
        "100 grs de jamón",
        "Aceite de oliva virgen extra",
        "Sal y pimienta",
      ],

      tituloRect1: "Pasta con jamón, espárragos y alcachofas",

      receta1Parrafo: ` 1. Limpiar las alcachofas quitando las hojas exteriores y cortando las en láminas longitudinales.
            Limpiar y cortar la base dura de los espárragos verdes. Salar alcachofas y espárragos. Poner una sartén al
            fuego con 1 cucharada de aceite de oliva. Saltear los espárragos a fuego fuerte. Y mantener hasta que
            queden al dente. Añadir 2 cucharadas más de aceite y freír las alcachofas hasta que cojan color. Reservar.<br>

            2. Cortar en tiras el jamón. Poner una sartén al fuego con un chorrito de aceite y saltear el jamón
            2 o 3 minutos. Añadir la nata y dejar reducir 3 o 4 minutos. Salpimentar y reservar.<br>

            3. Poner una olla con abundante agua al fuego. Echar la pasta, salar y cocer siguiendo las
            instrucciones del fabricante de la pasta. Servir la pasta con la salsa, y los espárragos y alcachofas fritas.<br>

            4. Siempre será una buena idea acompañar el plato con una copa de vino blanco previamente enfriado.`,

      tituloRect2: "Sirope de ágave",

      receta2Parrf1: `El sirope de ágave también conocido como néctar de agave o miel de agave es el jugo vegetal dulce que
            se extrae de las hojas o pencas del agave, planta de aspecto parecido a una yuca o cactus pero que en
            realidad es una suculenta similar al aloe vera. Originaria de América tropical, subtropical y el
            Caribe, existen más de cien especies de plantas, pero para la producción del sirope se emplean principalmente
            el ágave azul y el ágave maguey.`,

      receta2Parrf2: `Edulcorante que resulta del proceso de convertir el almidón de los granos en azúcares simples, por
            la acción de las enzimas, de modo que el organismo pueda asimilarlos lentamente, según sus necesidades.
            De este modo, y al contrario que el azúcar industrial, el sirope de cereales no sobrecarga el hígado
            o los riñones, no altera el metabolismo y la circulación, no causa desmineralización, obesidad,
            diabetes o caries dentales. Constituyen pues, la forma más equilibrada de endulzar tus postres y más recomendables que otros
            endulzantes naturales como la miel, fructosa o siropes de frutas. Su aspecto y textura es similar al
            de la miel y puedes elegir sirope de arroz, cebada, trigo o maíz, según tus preferencias.`,
    };
  },
};
</script>

<style scoped>
.card {
  min-width: 13rem;
  max-width: 19rem;
  margin-bottom: 1rem;
}

.noticias-card {
  min-width: 12rem;
  max-width: 100%;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* sombra para las tarjetas */
.sombra {
  /* box-shadow: 0 0 0.2em rgb(200, 200, 200), 0 0 0.2em rgb(200, 200, 200),0 0 0.2em rgb(200, 200, 200); */
  box-shadow: 0px 10px 10px rgb(93, 93, 93);
}

.titulo-noticias {
  color: rgb(248, 160, 59);
}

.noticias-titulo {
  color: black;
}

.noticias-main {
  margin-top: 30px;
}
.seccion-noticias {
  background-color: rgb(250, 177, 94);
  padding: 1.5rem;
}
.articulo-noticias {
  background-color: rgb(247, 192, 129);
}

.noticias-articulo {
  font-size: medium;
}
</style>

