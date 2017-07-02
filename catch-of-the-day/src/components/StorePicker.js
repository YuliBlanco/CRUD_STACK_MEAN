import React from 'react';


class StorePicker extends React.Component {
	render(){
		//coment in JS
		return (

			<form className="store-selector">
			{/*This is a coment with JSX*/}
			<p>Please enter a store</p>
			<input type="text" required placeholder="Store Name" />
			<button type="submit"> Visit Store </button>
			</form>

			)
	}
}

export default StorePicker;