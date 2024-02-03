import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],
    products:[
      {
        id: 1,
        image: "https://firebasestorage.googleapis.com/v0/b/papa-al-kilo.appspot.com/o/mexicana.PNG?alt=media&token=ce5387fd-bcaa-465a-9f53-975f026346bf",
        name: "Méxicana",
        description: "Maíz, carne desmechada, guacamole, jalapeño, picoegallo, salchicha, queso",
        price: 36000,
        category: "general",
      },
      {
        id: 2,
        image: "https://firebasestorage.googleapis.com/v0/b/papa-al-kilo.appspot.com/o/mexicana.PNG?alt=media&token=ce5387fd-bcaa-465a-9f53-975f026346bf",
        name: "Paisa",
        description: "Maíz, carne desmechada, guacamole, jalapeño, picoegallo, salchicha, queso",
        price: 36000,
        category: "general",
      },
      {
        id: 3,
        image: "https://firebasestorage.googleapis.com/v0/b/papa-al-kilo.appspot.com/o/mexicana.PNG?alt=media&token=ce5387fd-bcaa-465a-9f53-975f026346bf",
        name: "Criolla",
        description: "Maíz, carne desmechada, guacamole, jalapeño, picoegallo, salchicha, queso",
        price: 36000,
        category: "general",
      },
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    addProduct(state, id) {
      const product = state.products.find(product => product.id === id)
      const existProductIndex = state.cart.findIndex(product => product.id === id);

      if (existProductIndex !== -1) {
        state.cart[existProductIndex].amount++;
      } else {
        state.cart.push({ ...product, amount: 1 });
      }
    }
  }
})

export default store
