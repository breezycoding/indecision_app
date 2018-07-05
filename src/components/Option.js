import React from "react";

const Option = (props) => (
	<div className="option">
		<p className="option__text">{props.count}. {props.option_text}</p>
		<button
			className="button button--link" 
			onClick={(e) => {
					props.handle_delete_option(props.option_text)
				}
			}
		>Remove</button>
	</div>
)


export default Option;