import React from "react";
import Option from "./Option"

const Options = (props) => (
	<div>
		<div className="widget_header">
			<h3 className="widget_header__title">Your Option</h3>
			<button 
				className="button button--link" 
				onClick={props.handle_delete_options}>Remove All
			</button>
		</div>
		<p className="widget__message">{props.options.length === 0 && "Please add an option to get started"}</p>
		{
			props.options.map((option, index) => (
				<Option 
					key={option}
					option_text={option}
					count={index + 1}
					handle_delete_option={props.handle_delete_option}
				/>
			))
		}
	</div>
);


export default Options;