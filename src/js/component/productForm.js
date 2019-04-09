import React from "react";
import { Context } from "../store/appContext.jsx";
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col
} from "reactstrap";

export default class ProductForm extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Form>
							<FormGroup row>
								<Label for="name" sm={2}>
									Brand
								</Label>
								<Col sm={10}>
									<Input
										type="text"
										name="name"
										id="name"
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
										id="price"
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
										id="category">
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
										id="description"
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
									/>
									<FormText color="muted">jpeg, png</FormText>
								</Col>
							</FormGroup>
							<Button>Submit</Button>
						</Form>
					);
				}}
			</Context.Consumer>
		);
	}
}