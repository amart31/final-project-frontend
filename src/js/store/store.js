const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [
				{
					productName: "Supreme Tee",
					productImage:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					productPrice: 44,
					productQuantity: 1,
					stocked: true,
					category: "Top",
					productDescription: "Short description of item 1"
				},
				{
					productName: "YSL Tee",
					productImage:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					productPrice: 34,
					productQuantity: 1,
					stocked: true,
					category: "Top",
					productDescription: "Short description of item 2"
				},
				{
					productName: "Balmain Tee",
					productImage:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					productPrice: 34,
					productQuantity: 1,
					stocked: false,
					category: "Top",
					productDescription: "Short description of item 2"
				},
				{
					productName: "Balenciaga Tee",
					productImage:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					productPrice: 47,
					productQuantity: 1,
					stocked: true,
					category: "Top",
					productDescription: "Short description of item 3"
				}
			],

			shoppingCart: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			addToCart: item => {
				//get the store
				const store = getStore();
				let shoppingCart = store.shoppingCart;
				let i = 0;
				let itemTotal = 0;
				var total = 0;
				//loop the products to look for index
				let product = shoppingCart.find((cartItem, index) => {
					if (cartItem.item === item) {
						i = index;
						return cartItem;
					}
				});

				console.log("product ", product);
				if (typeof product !== "undefined") {
					shoppingCart[i].count++;
					total =
						shoppingCart[i].count *
						shoppingCart[i].item.productPrice;

					console.log(itemTotal);
				} else {
					shoppingCart.push({
						count: 1,
						item: item
					});
					total =
						shoppingCart[i].count *
						shoppingCart[i].item.productPrice;
					console.log(itemTotal);
				}

				setStore({ shoppingCart: shoppingCart });
				console.log("current cart ", shoppingCart);
			},

			totalPrice: () => {
				const store = getStore();
				let total = 0;

				for (var obj in store.shoppingCart) {
					let product = store.shoppingCart[obj];
					total += product.item.productPrice * product.count;
				}
				return total;
			},
			setQty: (val, i) => {
				const store = getStore();

				store.shoppingCart[i].count = val.target.value;
				setStore({ shoppingCart: store.shoppingCart });
			},
			removeCartItem: item => {
				const store = getStore();
				let index;
				if (store.shoppingCart.includes(item)) {
					index = store.shoppingCart.indexOf(item);
					store.shoppingCart.splice(index, 1);
				}
			},
			validateEmail: e => {
				const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				const { validate } = this.state;
				if (emailRex.test(e.target.value)) {
					validate.emailState = "has-success";
				} else {
					validate.emailState = "has-danger";
				}
				this.setState({ validate });
			},
			SubmitForm: e => {
				e.preventDefault();
				console.log("okay");
			},
			handleSignupChange: async event => {
				const { target } = event;
				const value =
					target.type === "checkbox" ? target.checked : target.value;
				const { name } = target;
				await this.setState({
					[name]: value
				});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
