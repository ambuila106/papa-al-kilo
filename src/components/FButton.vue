<template>
  <div>
    <div>
    <button class="f-button container-fluid">Ingresar</button>
    </div>
  </div>
</template>
    
<script>

export default {
  name: 'FButton',
  props: {
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
  
<style>
  .f-button {
    border: none;
    background-color: #3461fc;
    color: #ffff;
    padding: 10px;
    border-radius: 10px;
  }
</style>
  