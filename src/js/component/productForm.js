import React from "react";
import { Context } from "../store/appContext.jsx";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Collapse,
	Col
} from "reactstrap";

export default class ProductForm extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			collapse: false
		};
		this.brand = React.createRef();
		this.price = React.createRef();
		this.category = React.createRef();
		this.description = React.createRef();
		this.image = React.createRef();
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	toggle() {
		this.setState(state => ({ collapse: !state.collapse }));
	}

	render() {
		return (
			<div>
				<Button
					color="primary"
					onClick={this.toggle}
					style={{ marginBottom: "1rem" }}>
					Add Item
				</Button>
				<Collapse isOpen={this.state.collapse}>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<Form>
									<FormGroup row>
										<Label for="brannd" sm={2}>
											Brand
										</Label>
										<Col sm={10}>
											<Input
												type="text"
												name="brand"
												ref={this.brand}
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
												placeholder="Product Brand"
											/>
										</Col>
									</FormGroup>

									<FormGroup row>
										<Label for="price" sm={2}>
											Price
										</Label>
										<Col sm={10}>
											<Input
												type="number"
												name="price"
												ref={this.price}
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
												placeholder="Price"
											/>
										</Col>
									</FormGroup>

									<FormGroup row>
										<Label for="category" sm={2}>
											Select One
										</Label>
										<Col sm={10}>
											<Input
												type="select"
												name="category"
												ref={this.category}
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}>
												<option>Top</option>
												<option>Bottom</option>
												<option>Accessory</option>
											</Input>
										</Col>
									</FormGroup>

									<FormGroup row>
										<Label for="description" sm={2}>
											Describe your Item
										</Label>
										<Col sm={10}>
											<Input
												type="textarea"
												name="description"
												ref={this.description}
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
											/>
										</Col>
									</FormGroup>

									<FormGroup row>
										<Label for="itemImg" sm={2}>
											File
										</Label>
										<Col sm={10}>
											<Input
												type="file"
												name="img"
												id="itemImg"
												ref={this.image}
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
											/>
											<FormText color="muted">
												jpeg, png
											</FormText>
										</Col>
									</FormGroup>
									<Button
										onClick={() => {
											this.setState({
												products: actions.createProduct(
													this.state.brand,
													this.state.price,
													this.state.category,
													this.state.description,
													this.state.image
												)
											});
										}}>
										Submit
									</Button>
								</Form>
							);
						}}
					</Context.Consumer>
				</Collapse>
			</div>
		);
	}
}
