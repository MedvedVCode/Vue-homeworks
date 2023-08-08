new Vue({
  el: '#app',
  data: {
    sorted: '',
    products: [
      { id: Date.now(), name: 'Кисть', price: 100 },
      { id: Date.now(), name: 'Масло', price: 230 },
      { id: Date.now(), name: 'Холст', price: 1000 },
      { id: Date.now(), name: 'Ветошь', price: 20 },
      { id: Date.now(), name: 'Разбавитель', price: 300 },
      { id: Date.now(), name: 'Кадмий красный', price: 250 },
      { id: Date.now(), name: 'Ультрамарин', price: 200 },
      { id: Date.now(), name: 'Масленка', price: 50 },
      { id: Date.now(), name: 'Телесная неополитанская', price: 250 },
    ],
    result: [],
  },
  computed: {
    sortedArray() {
      // this.result = JSON.parse(JSON.stringify(this.products));
			this.result = Array.from(this.products);
      switch (this.sorted) {
        case 'up': {
          return this.result.sort((a, b) => b.price - a.price);
        }
        case 'down': {
          return this.result.sort((a, b) => a.price - b.price);
        }
        case 'origin': {
          return this.result;
        }
				default:{
          return this.result;
				}
      }
    },
  },
  methods: {
    setState(condition) {
      this.sorted = condition;
    },
  },
});
