<template>
  <div>
    <div>
      <input class="field-input container-fluid" :type="type" :placeholder="placeholder">
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'FieldInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style>
.field-input {
  border: none;
  background-color: #f4f6ff;
  color: #333;
  padding: 10px;
  border-radius: 10px;
}
</style>
