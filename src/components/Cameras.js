import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumerCameras } from '../context';

export default class Cameras extends Component {

  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/
/*      <div>
        <Product />
      </div>*/

      <React.Fragment>
      	<div className = "py-5">
      		<div className = "container">
      		<Title name = "our" title = "cameras" />
      			<div className = "row">
      				<ProductConsumerCameras>
      					{value => {
      						return value.products.map( product => {
      							return <Product key = {product.id} product = {product} handleDetail = {value} />;
      						});
      					}}
      				</ProductConsumerCameras>
      			</div>
      		</div>
      	</div>
      </React.Fragment>
    );
  }
}
