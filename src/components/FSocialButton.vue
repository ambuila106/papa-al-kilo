<template>
  <div>
    <div class="f-social-button d-flex justify-content-center gap-3">
      <img src="@/assets/google.png" alt="">
      Google
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
.f-social-button {
  border: 1px solid;
  border-color: #3461fc75;
  padding: 10px;
  border-radius: 10px;
}

.f-social-button img {
  width: 25px;
}
</style>