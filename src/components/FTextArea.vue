<template>
  <div>
    <div>
      <textarea v-model="publication" rows="3" class="f-text-area container-fluid" :placeholder="placeholder"></textarea>
    </div>
  </div>
</template>
    
<script>
  export default {
    name: 'FTextArea',
    props: {
      placeholder: {
        type: String,
        default: 'text'
      }
    },

    data() {
      return {
        publication: ''
      }
    },

    watch: {
      publication(value) {
        this.$emit('input', value)
      }
    }
  }
</script>
  
<style>
  .f-text-area {
    border: 1px solid;
    background-color: #000516;
    color: #fff;
    padding: 10px;
    border-radius: 10px;
    border-color: #333;
  }
</style>
  