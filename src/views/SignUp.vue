<template>
    <div class="p-4 container-fluid pt-5 col-12 col-sm-10 col-md-7 col-lg-6 col-xl-4">
      <div>
        <h1 class="fw-bold mb-5 text-primary fs-3">¡Bienvenido! 👋</h1>
        <FieldInput v-model="email" placeholder="Correo" type="text"></FieldInput>
        <span v-if="!$v.email.required">El correo es requerido</span>
        <FieldInput placeholder="Confirmar correo" class="mt-3" type="text"></FieldInput>
        <FieldInput placeholder="Contraseña" class="mt-3" type="password"></FieldInput>
        <FButton :text="'Registrarse'" class="my-5"></FButton>
        
        <div class="d-flex align-items-center justify-content-between">
          <div class="border-top border-2 w-25"></div>
          <span>O registrate con</span>
          <div class="border-top border-2 w-25"></div>
        </div>
  
        <FSocialButton class="mt-3"></FSocialButton>
  
      </div>
    </div>
  </template>
    
  <script>
  import FieldInput from '../components/FieldInput.vue'
  import FButton from '../components/FButton.vue'
  import FSocialButton from '../components/FSocialButton.vue'
  import { required } from 'vuelidate/lib/validators'

  
  export default {
    name: 'SignUp',
    components: { FieldInput, FButton, FSocialButton },
    data() {
      return {
        email: ''
      }
    },
    validations: {
      email: {
        required,
      },
    }
  }
  </script>
  
  <style>
  .text-primary {
    color: #3460fd;
  }
  </style>
  