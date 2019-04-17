const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [],
			shoppingCart: [],
			session: {
				isLoggedIn: false,
				token: "",
				user_display_name: "",
				user_email: "",
				user_nicename: ""
			}
		},
		actions: {
			handleFormSubmit: () => {
				event.preventDefault();
				const store = getStore();
				let session = store.session;
				if (session.isLoggedIn === true) {
					alert("sucess");
				} else {
					alert("error");
				}
				return;
			},
			login: (user, pass) => {
				const endpoint =
					"https://wordpress-project-amart31.c9users.io/wp-json/jwt-auth/v1/token";

				console.log(user, pass);
				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error" + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();

							store.session = data;
							store.session.isLoggedIn = true;
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},

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
						shoppingCart[i].item.meta_keys.product_price;

					console.log(itemTotal);
				} else {
					shoppingCart.push({
						count: 1,
						item: item
					});
					total =
						shoppingCart[i].count *
						shoppingCart[i].item.meta_keys.product_price;
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
					total +=
						product.item.meta_keys.product_price * product.count;
				}
				return "$" + total;
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
			}
		}
	};
};

export default getState;
