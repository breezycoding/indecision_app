import React from "react";

const Action = (props) => (
	<div>
		<button 
			className="big_button"
			onClick={props.handle_pick}
			disabled={!props.has_options}
		>
			What should I do?</button>
	</div>
);


export default Action;