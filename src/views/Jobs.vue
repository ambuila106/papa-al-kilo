<template>
  <div class="job">
    <h1 class="job-title">JOBS</h1>

    <p>
      Empleos: {{ jobs.length }}
    </p>
    <div v-for="job in jobs" @click="goToBusiness(job.number)" :key="job?.description" class="bordered-box">
      {{ job?.description }}

      <template v-if="job?.number">
        <hr>
        <a class="job-number">
          Whatsapp: {{ job.number }}
        </a>
      </template>
    </div>
  </div>
</template>

<script>
import app from '@/firebase.js'
import { getDatabase, ref, get, set, onValue } from "firebase/database";

export default {
  name: 'Jobs',
  components: { },
  data() {
    return {
      email: '',
      emails: [],
      db: null,
      showModalSucces:false,
      jobs: []
    }
  },
  async mounted() {
    //const db = firebase.database().ref();
    this.db = getDatabase();
    this.addView()

    const jobsRef = ref(this.db, 'jobs/');

    onValue(jobsRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      this.jobs = data.reverse().filter(elemento => elemento)
    })

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
      if(number) {
        window.location.href = 'https://wa.me/' + "57" + number
      }
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

