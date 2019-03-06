import React from "react";
import styled from 'styled-components';

const Button = props => {
    console.log(props.style);
    return (
        <button
            style={props.style}
            className={
                props.type == "primary" ? "btn btn-primary" : "btn btn-secondary"
            }
            onClick={props.action}
        >
            {props.title}
        </button>
    );
};

export default Button;
{/*export default styled.button`*/}
export const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border-radius: 5px !important;
	border: 0.05rem solid var(--lightBlue);
	border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
	{/*border-radius: 0.5rem;*/}
	padding: 0.2 rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0.2rem 0;
	transition: all 0.5s ease-in-out;
	{/*&: - it's the targeting container === ButtonContainer*/}
  &:hover {
  	background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  	color: var(--mainBlue);
  }
  &:focus {
  	outline: none;
  }
`;