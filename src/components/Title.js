import React from 'react';

				/*Component Title*/ /*props*/
export default function Title({name, title}) {
	return (
		<div className = "row">
			<div className = "col-10 am-auto my-2 text-center text-title">
				<h1 className = "text-capitalize font-weight-bold">
					{name} <strong className = "text-bright">{title}</strong>
				</h1>
			</div>
		</div>
	);
}
