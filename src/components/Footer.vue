<template>
  <div class="footer" @click="click()">
    <div class="cart">
      <span>
        {{ $store.state.cart.length }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-check-fill me-3" viewBox="0 0 16 16">
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
      </svg>
    </div>

    <span class="fs-5">Realizar pedido</span>
  </div>
</template>
<script>

export default {
  name: 'Footer',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    text: {
      type: String,
      default: 'Ingresar'
    }
  },

  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>

<style>
.footer {
  height: 60px;
  background-color: orange;
  box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: fixed;
  z-index: 3;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.cart {
  position: relative;
}

.cart span{
  background-color: red;
  position: absolute;
  border-radius: 47px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 6px;
  font-size: 12px;
  top: -10px;
}
</style>
