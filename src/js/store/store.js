const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [
				{
					id: 1,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 2,
					category: "Top",
					price: 5000,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 3,
					category: "Bottom",
					price: 11000,
					stocked: false,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 4,
					category: "Top",
					price: 799,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 5,
					category: "Bottom",
					price: 1300,
					stocked: false,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 6,
					category: "Bottom",
					price: 100,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 7,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 8,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 9,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 10,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 11,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 12,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				},
				{
					id: 13,
					category: "Top",
					price: 45.99,
					stocked: true,
					Image:
						"https://www.balenciaga.com/66/12/12122203pl_12_a_f.jpg",
					Description: "Short description of item 1",
					name: "Supreme Tee"
				}
			],
			shoppingCart: []
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
					total = shoppingCart[i].count * shoppingCart[i].item.price;

					console.log(itemTotal);
				} else {
					shoppingCart.push({
						count: 1,
						item: item
					});
					total = shoppingCart[i].count * shoppingCart[i].item.price;
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
					total += product.item.price * product.count;
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
			}
		}
	};
};

export default getState;
