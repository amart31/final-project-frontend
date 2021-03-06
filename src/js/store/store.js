const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [],

			categories: [],

			shoppingCart: [],

			wishList: [],

			featuredProducts: [],

			session: {
				isLoggedIn: false,
				username: "user",
				password: "pass",
				token: ""
			}
		},
		actions: {
			createProduct: (
				brand,
				title,
				price,
				category,
				description,
				image
			) => {
				const store = getStore();
				const endpoint =
					"https://wordpress-project-amart31.c9users.io/wp-json/sample_api/v1/products";

				var formData = new FormData();
				formData.append("image", image);

				fetch(
					"https://wordpress-project-amart31.c9users.io/wp-json/wp/v2/media",
					{
						method: "POST",
						credentials: "include",
						headers: {
							"Content-Type": formData,
							Authorization: "Bearer " + store.session.token
						},
						body: formData
					}
				)
					.then(function(response) {
						console.log(response);
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						accept: "application/json"
					},
					body: JSON.stringify({
						post_title: title,
						product_brand: brand,
						product_price: price,
						category: category,
						product_description: description
					})
				})
					.then(function(response) {
						return response.json();
					})
					.then(res => {
						fetch(
							"https://wordpress-project-amart31.c9users.io/wp-json/sample_api/v1/products"
						)
							.then(response => {
								if (response.status !== 200) {
									alert(
										"Connection error, status " +
											response.status
									);
									return;
								}
								response.json().then(data => {
									const store = getStore();
									store.products = data;
									setStore({ store });
								});
							})
							.catch(err => {
								alert("Fetch error: ", err);
							});
					})

					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			register: (user, pass, email) => {
				const endpoint =
					"https://wordpress-project-amart31.c9users.io/wp-json/wp/v2/users/register";

				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass,
						email: email
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error " + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			login: (user, pass) => {
				const endpoint =
					"https://wordpress-project-amart31.c9users.io/wp-json/jwt-auth/v1/token";

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
			handleSignOut(e) {
				const store = getStore();
				e.preventDefault();
				store.session = {
					isLoggedIn: false,
					username: "user",
					password: "pass",
					token: ""
				};
				store.shoppingCart = [];
				this.props.history.push("/login");
				setStore({ store: store });
			},

			addToWishList: item => {
				const store = getStore();
				let wishList = store.wishList;
				let i = 0;

				let product = wishList.find((wishListItem, index) => {
					if (wishListItem.item === item) {
						i = index;
						return wishListItem.item;
					}
				});

				if (typeof product !== "undefined") {
					return false;
				} else {
					wishList.push({
						item: item
					});
				}

				setStore({ wishList: wishList });
			},

			addToCart: item => {
				//get the store
				const store = getStore();
				let shoppingCart = store.shoppingCart;
				let i = 0;
				let itemTotal = 0;
				let total = 0;
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
					console.log(total);
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

				store.shoppingCart[i].count = Number(val);
				setStore({ store });
			},
			removeCartItem: item => {
				const store = getStore();
				let index;
				if (store.shoppingCart.includes(item)) {
					index = store.shoppingCart.indexOf(item);
					store.shoppingCart.splice(index, 1);
				}
			},
			cartTotalItems: () => {
				const store = getStore();
				let cartTotal = 0;

				for (var obj in store.shoppingCart) {
					let product = store.shoppingCart[obj];
					cartTotal += product.count;
				}
				return cartTotal;
			}
		}
	};
};

export default getState;
