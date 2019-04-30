import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Rent } from "./views/rent.jsx";
import { RentByCategory } from "./views/rentByCategory.jsx";
import { Item } from "./views/singleProduct.jsx";
import { Login } from "./views/login.jsx";
import { Signup } from "./views/signup.jsx";
import { About } from "./views/aboutus.jsx";
import { Contact } from "./views/contactus.jsx";
import { Account } from "./views/account.jsx";
import { Cart } from "./views/cart.jsx";
import FAQs from "./views/faqs";

import Store from "./store/appContext.jsx";

import NavBar from "./component/navbar.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column">
				<BrowserRouter>
					<ScrollToTop>
						<NavBar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/rent" component={Rent} />
							<Route
								path="/categories"
								component={RentByCategory}
							/>
							<Route path="/item/:theid" component={Item} />
							<Route path="/login" component={Login} />
							<Route path="/signup" component={Signup} />
							<Route path="/aboutus" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/account" component={Account} />
							<Route path="/cart" component={Cart} />
							<Route path="/faqs" component={FAQs} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
