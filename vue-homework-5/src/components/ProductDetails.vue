<template>
	<div class="product">
		<h1 class="product__title">ProductDetails</h1>
		<details class="product__currency">
			<summary>Выберите валюту</summary>
			<button @click="setCurrentCurrency('dollar')">&#36; Доллар</button>
			<button @click="setCurrentCurrency('rub')">&#x20bd; Рубль</button>
			<button @click="setCurrentCurrency('cny')">&yen; Юань</button>
			<button @click="setCurrentCurrency('euro')">&euro; Евро</button>
		</details>
		<div class="card">
			<h2>{{ product.name }}</h2>
			<h3>{{ formattedPrice }}</h3>
			<p v-if="product.available">Available</p>
			<p v-else>Out of stock</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProductDetails',
	props: {
	},
	data() {
		return {
			product: { id: 1, name: 'Мастихин', price: 300, available: true },
			currentCurrency: 'rub',
			currencyRubleToDollar: 0.01038,
			currencyRubleToCny: 0.075484,
			currencyRubleToEuro: 0.009559,

		}
	},
	methods: {
		setCurrentCurrency(currency) {
			this.currentCurrency = currency;
		}
	},
	computed: {
		formattedPrice() {
			let price = this.product.price;
			switch (this.currentCurrency) {
				case 'rub':
					price = price.toFixed(2) + ' ₽';
					break;
				case 'dollar':
					price = '$' + (price*this.currencyRubleToDollar).toFixed(2);
					break;
				case 'cny':
					price = '¥' + (price*this.currencyRubleToCny).toFixed(2);
					break;
				case 'euro':
					price = '€ ' + (price*this.currencyRubleToEuro).toFixed(2);
					break;
				default:
					break;
			}
			return price;
		}
	}
}
</script>

<style lang="scss" scoped>
.product {

	&__title {
		padding: 0;
		margin: 0;
	}

	&__currency {
		text-transform: uppercase;
		font-size: 25px;
		margin-top: 20px;

		& button {
			display: block;
			background-color: transparent;
			padding: 10px;
			border: 1px solid tomato;
			border-radius: 5px;
			cursor: pointer;
			font-size: 20px;
			margin-top: 10px;
			margin-left: auto;
			margin-right: auto;
		}
	}
}


.card {
	max-width: 400px;
	width: 100%;
	padding: 20px;
	border: 1px solid teal;
	border-radius: 10px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 30px;

}
</style>