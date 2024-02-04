<template>
  <div class="home">
    <Header />
    <div class="products">
      <CardProduct
        :image="product.image"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        v-for="product in products"
        :key="product.id"
        class="mb-3"
        @addProduct="addProduct"
        :id="product.id"
      />
    </div>
    <Footer @click="toggleModalCart()" />

    <transition name="slide-fade">
      <ModalCart @deleteProduct="deleteProduct" @addProduct="addProduct" v-if="isOpenModalCart" @toggleModalCart="toggleModalCart" />
    </transition>
  </div>
</template>

<script>
import CardProduct from '../components/CardProduct.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ModalCart from '../components/ModalCart.vue'

export default {
  name: "Home",
  components: {
    CardProduct,
    Header,
    Footer,
    ModalCart
  },
  data() {
    return {
      publication: "",
      publications: [],
      db: null,
      isOpenModalCart: false
    };
  },
  async mounted() {},

  methods: {
    addProduct(id){
      this.$store.commit('addProduct', id)
    },

    deleteProduct(id){
      this.$store.commit('deleteProduct', id)
    },

    toggleModalCart() {
      this.isOpenModalCart = !this.isOpenModalCart
    }
  },

  computed: {
    products() {
      return this.$store.state.products
    },
  }
};
</script>

<style>
.text-primary {
  color: #3460fd;
  color: white;
}
.home {
  background-color: #f3f3f3;
  min-height: 100vh;
}

.products {
  padding: 90px 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%); /* Cambiado de translateX a translateY */
  opacity: .9;
}

</style>
