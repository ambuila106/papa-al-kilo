<template>
  <div class="job">
    <h1 class="job-title">JOBS</h1>

    <p>
      Empleos: {{ jobs.length }}
    </p>

    <div @click="goToBusiness(job.number)" v-for="job in jobs" :key="job" class="bordered-box">
      {{ job.description }}
      <hr>
      <a class="job-number">
        Whatsapp: {{ job.number }}
      </a>
    </div>
  </div>
</template>

<script>
import app from '@/firebase.js'
import { getDatabase, ref, get, set } from "firebase/database";

export default {
  name: 'Jobs',
  components: { },
  data() {
    return {
      email: '',
      emails: [],
      db: null,
      showModalSucces:false,
      jobs: [
        {
          description: "Se solicita mesero con experiencia para discotela La Bendición.",
          number: 3219332502
        },
        {
          description: "Se necesita grafitero o artista para pintar una pared de 12M x 12M.",
          number: 3043976788
        },
        {
          description: "Se necesita mesera bien presentada y con experiencia para trabajar en Felina.",
          number: 3027466977
        },
        {
          description: "Se necesita Auxiliar logistico en chorillano, sueldo: salario mínimo con prestaciones de ley y auxilio de transporte",
          number: 3197887917
        },
        {
          description: "Se necesita Asesor comercial en chorillano, sueldo: salario mínimo con prestaciones de ley y auxilio de transporte",
          number: 3197887917
        },
        {
          description: "Se necesita Auxiliar de bodega en chorillano, sueldo: salario mínimo con prestaciones de ley y auxilio de transporte",
          number: 3197887917
        },
        {
          description: "Se necesita monitora para estudio webcam, con disponibilidad de tiempo y buena actitud",
          number: 3213532560
        },
        {
          description: "Se nececita gerente educativo para liceo los nogales, adjunta hoja de vida al correo: liceo.losnogales@hotmail.com",
          number: 3146106444
        },
        {
          description: "Se nececita psicólogo educativo para liceo los nogales, adjunta hoja de vida al correo: liceo.losnogales@hotmail.com.",
          number: 3146106444
        },
        {
          description: "Se necesita a mujer para manejo de redes sociales a tiempo completo, conocimientos necesarios: Copys persuasivos, conocimientos básicos en ventas, manejo de chatgpt, canva básico.",
          number: 3204042712
        },
      ]
    }
  },
  async mounted() {
    //const db = firebase.database().ref();
    this.db = getDatabase();
    this.addView()

    console.log(getDatabase(app))
  },


  methods: {
    async addView(){
      const listaRef = ref(this.db, 'views'); // Ajusta el nombre de tu lista

        try {
          const snapshot = await get(listaRef);

          const listaActual = snapshot.val();

          if (listaActual) {
            listaActual.push("new view");

            await set(listaRef, listaActual);
          } else {
            await set(listaRef, ["new view"]);
          }

        } catch (error) {
          console.error("Error al agregar la vista", error);
        }
    },

    goToBusiness(number){
      window.location.href = 'https://wa.me/' + "57" + number
    }
  },

  watch: {
    showModalSucces() {
      if(this.showModalSucces) {
        setTimeout(() => {
          this.showModalSucces = false;
        }, 2000);
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

.job {
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.job-title {
  padding: 2rem 0;
  font-size: 50px;
  letter-spacing: 1rem;
}

.job-subtitle {
  font-size: 20px;
}

.job-number {
  color: #25D366;
  text-decoration: none;
}

.ml-1 {
  margin-left: .5rem;
}

.mt-1 {
  margin-top: .25rem;
}

.button {
  padding: 10px;
  background-color: #c3afff;
  color: black;
  border-radius: 10px;
}

.bordered-box {
  border: 1px solid #fff;
  border-radius: 10px;
  padding: .75rem;
  margin-bottom: 1.5rem;
}

.h-50 {
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>

