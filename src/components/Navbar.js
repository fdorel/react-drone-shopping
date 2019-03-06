/*Navbar.js is a component, so it begins with an uppercase letter*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/

      	<NavWrapper className = "navbar navbar-expand-sm navbar-dark px-sm-5">
      	{
      	/* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    
      	title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    
  		title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/}
			<Link to = "/">
				<img src = {logo} alt = "store" className = "navbar-brand" />
			</Link>
			<ul className = "navbar-nav align-items-center">
				<li className = "ml-5">
					<Link to = "./" className = "nav-item nav-link">
						Items
					</Link>
				</li>
				<li className = "ml-5">
					<Link to = "/About" className = "nav-item nav-link">
						About
					</Link>
				</li>
				<li className = "ml-5">
					<Link to = "./Contact" className = "nav-item nav-link">
						Contact
					</Link>
				</li>
			</ul>
			<Link to = '/cart' className = "ml-auto">
				<ButtonContainer>
					<span className = "mr-2">
						<i className = "fas fa-shopping-bag"></i>
					</span>					
					my cart
				</ButtonContainer>
			</Link>
{/*			<Link to = '../admin' className = "ml-auto">
				<ButtonContainer>
					<span className = "mr-2">
						<i className = "fas fa-user" />
					</span>
					admin
				</ButtonContainer>
			</Link>*/}
		</NavWrapper>
    );
  }
}

/*Here should be the styled ButtonContainer component from Button.js*/
const NavWrapper = styled.nav`
	background: var(--mainBlue);
	.nav-link{
		color: var(--mainDark) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`