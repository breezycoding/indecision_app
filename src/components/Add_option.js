import React from "react";

export default class Add_option extends React.Component{
	/*since were using this in handle_add_option in here we need constructor function with props and super*/
	state = {
		error:undefined
	}
	
	handle_add_option = (event) => {
		event.preventDefault();
		const option = event.target.elements.option.value.trim();
		const error = this.props.handle_add_option(option);
		
		this.setState({ error });
		
		if(!error)
			event.target.elements.option.value = "";
		
	}
	
	render(){
		return(
			<div>
				{
					this.state.error && <p className="add_option_error">{this.state.error}</p>
				}
				<form className="add_option" onSubmit={this.handle_add_option}>
					<input className="add_option__input" type="text" name="option" />
					<button className="button">Submit</button>
				</form>
			</div>
		);
	}
}
