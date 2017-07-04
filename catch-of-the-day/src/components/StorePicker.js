import React from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';


class StorePicker extends React.Component {
	//constructor() {
	//	super();
	//	this.goToStore = this.goToStore.bind(this);
	//}
	goToStore(event){
		event.preventDefault();
		console.log('You changed the url');
		//first grab the text from the box
		const storeId = this.storeInput.value;
		console.log(`Going to ${storeId}`)
		//console.log(this.storeInput);
		//second we're goinh to transition from / to/store/:storeId
		this.context.router.history.push(`/store/:storeId`);
	}

	render() {
		//coment in JS
		return (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
			{/*This is a coment with JSX*/}
			<p>Please enter a store</p>
			<input type="text" required placeholder="Store Name"  defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
			<button type="submit"> Visit Store </button>
			</form>

			)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.shape({
    history: React.PropTypes.object.isRequired,
  }),
}
export default StorePicker;