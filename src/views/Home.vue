<template>
  <div class="p-4 container-fluid pt-2 col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
    <div>
      <h1 class="fw-bold mb-5 text-primary fs-3">Inicio</h1>
      <h1 class="fs-4">Crear publicación</h1>
      <FTextArea v-model="publication" placeholder="¿Que quieres decir?"></FTextArea>
      <div>
        <FButton :text="'Publicar'" @click="addPublication()"></FButton>
      </div>
      <div class="border-top border-1 w-100 mt-2"></div>

      <div v-for="(publication, index) in publications" :key="index">
        <h1 class="fs-5 mt-3 fw-bold">anónimo 🤐</h1>
        <p>{{ publication }}</p>
        <div class="border-top border-1 w-100 mt-2"></div>
      </div>
    </div>
  </div>
</template>
  
<script>
import FTextArea from '../components/FTextArea.vue'
import FButton from '../components/FButton.vue'
export default {
  name: 'Home',
  components: { FTextArea, FButton },
  data() {
    return {
      publication: '',
      publications: ['Me gusta sofia de primero de industrial', 'A juan le ponen cacho']
    }
  },
  methods: {
    addPublication() {
      console.log("publication: ", this.publication)
      if (this.publication) {
        this.publications.push(this.publication);
        this.publication = '';
      }
    }
  }
}
</script>

<style>
.text-primary {
  color: #3460fd;
  color: white;
}
</style>
