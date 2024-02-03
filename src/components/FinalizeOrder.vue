<template>
  <div @click="finalizeOrder()" class="finalize-order">
    <div class="cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp me-3" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
      </svg>
    </div>

    <span class="fs-5">Finalizar orden</span>
  </div>
</template>
<script>

export default {
  name: 'FinalizeOrder',
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
    },

    getTextOrder() {
      let mensajePedido = "Hola, este es mi pedido:\n";

      this.$store.state.cart.forEach(producto => {
        const nombreProducto = producto.name;
        const cantidadProducto = producto.amount;

        mensajePedido += `${cantidadProducto} ${nombreProducto}, `;
      });

      const mensajeFinal = mensajePedido.slice(0, -2) + "\n\nComo puedo continuar?";

      const mensajeCodificado = encodeURIComponent(mensajeFinal);
      return mensajeCodificado
    },

    finalizeOrder(){
      let number = 3227914251
      let order = this.getTextOrder()
      window.location.href = 'https://wa.me/' + "57" + number + "?text=" + order
    }
  }
}
</script>

<style>
.finalize-order {
  height: 60px;
  background-color: #25D366;
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
