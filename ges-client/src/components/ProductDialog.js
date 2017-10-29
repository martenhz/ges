import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Products extends React.Component {

	constructor(props) {
		super(props);
		
		this.handleSave = this.handleSave.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		
		this.state = {
			open: props.open, 
			product: props.product,
			categories: []
		}
	}
	
	componentWillReceiveProps(nextProps) {
		this.setState({
			open: nextProps.open, 
			product: nextProps.product, 
			categories: []
		});
	}
	
	handleCategoryChange(event, index, value) { 
		const product = this.state.product;
		product.categoryId = value;
		
		console.log('changed category to');
		console.log(product.categoryId);
		
		this.setState({product});
	}
	
	handleNameChange(event) { 
		const product = this.state.product;
		product.name = event.target.value;
		
		this.setState({product});
	}
	
	handleSave() {
		const product = this.state.product;
		
		console.log('handleSave');
		console.log(product);
		
		product.name = this.state.name;
		product.categoryId = this.state.categoryId;
		
		// Save
		this.props.saveProduct(product);
		this.handleClose();
	}
	
	handleClose() {
		this.props.handleCloseDialog();
	}

    render() {
    	const actions = [
    	      <FlatButton
    	        label="Annuleren"
    	        primary={true}
    	        onClick={this.handleClose}
    	      />,
    	      <FlatButton
    	        label="Opslaan"
    	        primary={true}
    	        keyboardFocused={true}
    	        onClick={this.handleSave}
    	      />,
    	    ];
    	
    	const product = this.state.product;
    	
    	const categories = this.state.categories;
    	const categoryItems = categories.map((category) => {
			  return (
					  <MenuItem value={category.id} primaryText={category.name} />
			  )
		});
    	
        return (
        		<div>
	                <Dialog
	                  title="Product opslaan"
	                  actions={actions}
	                  modal={false}
	                  open={this.state.open}
	                  onRequestClose={this.handleClose}
	                  autoScrollBodyContent={true}
	                >
	                	<TextField
			                hintText="Product naam"
			                floatingLabelText="Product naam"
			                defaultValue={product.name}
	                		onChange={this.handleNameChange}
			              />
			            <br />
		                <SelectField
			                floatingLabelText="Categorie"
			                value={product.categoryId}
			                onChange={this.handleCategoryChange}
			            >
			                {categoryItems}
			            </SelectField>
	                </Dialog>
                </div>
        )
    }
}