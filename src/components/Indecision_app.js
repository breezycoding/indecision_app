import React from "react";
import Add_option from "./Add_option"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import Option_modal from "./Option_modal"

/*creating component*/
export default class Indecision_app extends React.Component{
	state = {
		options: [],
		selected_option: undefined
	}
	
	handle_clear_selected_option = () => {
		this.setState({ selected_option: undefined});
	}

	handle_delete_options = () => {
		this.setState({ options: []});
	}
	
	handle_pick = () => {
		const random_num = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[random_num];
		this.setState({ selected_option: option});
	}

	handle_add_option = (option) => {
		if(!option){
			return "Enter valid value to add Item";
		}else if(this.state.options.indexOf(option) > -1){
			return "this option already exist"; 
		}
		this.setState((previous_state)=>{
			return{ options: previous_state.options.concat([option]) }
		});
	}

	handle_delete_option = (option_to_remove) => {
		this.setState((previous_state)=>{
			return{
				options:previous_state.options.filter((option) => option_to_remove !== option)
			}
		});
	}
	
	componentDidMount(){
		try{
			const json = localStorage.getItem("options");
			const options = JSON.parse(json);
			if(options){
				this.setState({ options });
			}
		}catch(e){	}
	}
	
	componentDidUpdate(previous_props, previous_state){
		if(previous_state.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem("options", json);
		}
	}
	
	componentWillUnmount(){
		console.log("componentWillUnmount");
	}
	
	render(){
		const title = "Indecision App V.2";
		const subtitle = "Put youre life in the hands of computer";
		
		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<div className="container">
					<Action 
						has_options ={this.state.options.length > 0}
						handle_pick={this.handle_pick}
					/>
					<div className="widget">
						<Options 
							options={this.state.options}
							handle_delete_options={this.handle_delete_options}
							handle_delete_option={this.handle_delete_option}
						/>
						<Add_option 
							handle_add_option={this.handle_add_option}
						/>
					</div>
					<Option_modal 
						selected_option={this.state.selected_option}
						handle_clear_selected_option={this.handle_clear_selected_option}
					/>
				</div>
			</div>
		);
	}
}
