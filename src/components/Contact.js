import React, { Component } from 'react';
import Title from './Title';
import { render } from "react-dom";
import FormContainer from "../containers/FormContainer";

export default class Contact extends Component {

  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/
/*      <div>
        <Product />
      </div>*/

      <React.Fragment>
      	<div className = "py-5">
      		<div className = "container">
      		<Title name = "This is our" title = "Contact Form" />
      			<div className = "row">
					<FormContainer />
      			</div>
      		</div>
      	</div>
      </React.Fragment>
    );
  }
}

