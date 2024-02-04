<template>
  <div class="card-product">
    <div @click="addProduct(id)" class="card-product__add">+</div>
    <div class="card-product__image">
      <img :src="image" alt="">
    </div>
    <span class="fw-semibold">{{ name }}</span>
    <br>
    <span class="card-product__description">{{ description }}</span>
    <div class="text-end fw-bold pt-1">${{ price }}</div>
  </div>
</template>
<script>

export default {
  name: 'CardProduct',
  props: {
    id: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: 'image'
    },
    name: {
      type: String,
      default: 'name'
    },
    description: {
      type: String,
      default: 'name'
    },
    price: {
      type: Number,
      default: 0
    }
  },

  methods: {
    addProduct(id) {
      this.$emit('addProduct', id)
    }
  }
}
</script>

<style>
  .card-product {
    max-width: 150px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.05);
    padding: .75rem;
    position: relative;
  }

  @media (min-width: 400px) {
    .card-product {
      max-width: 170px;
    }
  }

  .card-product__description {
    font-size: 12px;
  }

  .card-product__image {
    padding: 1rem;
    width: 100%; /* Ancho deseado del contenedor */
    overflow: hidden;
  }

  .card-product__image img{
    width: 100%; /* Ancho deseado del contenedor */
    height: 100%;
    object-fit: contain;
  }

  .card-product__add {
    position: absolute;
    background-color: red;
    width: 30px;
    height: 30px;
    border-radius: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: -15px;
    top: -15px;
    font-size: 25px;
  }
</style>
