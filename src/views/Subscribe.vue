<template>
  <div class="welcome">
    <div class="h-50">
      <h1 class="welcome-title">FESTI</h1>
      <p class="welcome-subtitle">Encuentra empleo, roommates, apartamento y recupera tus objetos perdidos.</p>
    </div>

    <div class="bordered-box">
      <p>Envia tu correo institucional para que seas de los primeros en usarla</p>
      <div class="input-send">
        <input v-model="email" type="text" placeholder="Correo Institucional">
        <div class="button" @click="addEmail()">Enviar</div>
      </div>
    </div>

    <div
      v-if="showModalSucces"
      class="d-flex alert alert-success fade show position-absolute top-50"
      role="alert"
    >
      <strong>¡correo enviado con exito!</strong>
    </div>
  </div>
</template>

<script>
import app from '@/firebase.js'
import { getDatabase, ref, get, set, onValue} from "firebase/database";

export default {
  name: 'Subscribe',
  components: { },
  data() {
    return {
      email: '',
      emails: [],
      db: null,
      showModalSucces:false,
    }
  },
  async mounted() {
    //const db = firebase.database().ref();
    this.db = getDatabase();
    const starCountRef = ref(this.db, 'emails/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      console.log("data: ", data)
      this.emails = data
    })

    console.log(getDatabase(app))
  },

  methods: {
    async addEmail(){
      const listaRef = ref(this.db, 'emails'); // Ajusta el nombre de tu lista

        try {
          // Obtén la lista actual una vez
          const snapshot = await get(listaRef);

          const listaActual = snapshot.val();

          // Si la lista existe, agrégale el nuevo correo
          if (listaActual) {
            listaActual.push(this.email);

            // Actualiza la lista en la base de datos
            await set(listaRef, listaActual);
          } else {
            // Si la lista no existe, crea una nueva lista con el primer correo
            await set(listaRef, [this.email]);
          }

          this.email = ""
          this.showModalSucces = true
        } catch (error) {
          console.error("Error al agregar el correo", error);
        }
    },
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

.welcome {
  margin: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.welcome-title {
  font-size: 50px;
  letter-spacing: 1rem;
}

.welcome-subtitle {
  font-size: 20px;
}

.input-send {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-send input {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
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

