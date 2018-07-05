import React from "react";
import Modal from "react-modal";

const Option_modal = (props) => (
	<Modal
		isOpen={!!props.selected_option}
		onRequestClose={props.handle_clear_selected_option}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{
			props.selected_option && <p className="modal__body">{props.selected_option}</p>
		}
		<button className="button" onClick={props.handle_clear_selected_option}>Okay</button>
	</Modal>
);


export default Option_modal;

/*
	-modal require two props to work
		isOpen = accepts boolean
		contentLabel = for accessibility settings. use name for people who use accesible device. this will not show to users, only ith accesibility settings enabled.
	-we use props to determine whether the modal will open
*/