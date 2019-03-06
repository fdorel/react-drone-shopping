import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/
/*      <div>
        <Product />
      </div>*/

      <React.Fragment>
      	<div className = "py-5">
      		<div className = "container">
      		<Title name = "Our store provides you" title = "with different drone models" />
      			<div className = "row">
      				<ProductConsumer>
      					{value => {
      						return value.products.map( product => {
      							return <Product key = {product.id} product = {product} handleDetail = {value} />;
      						});
      					}}
      				</ProductConsumer>
      			</div>
      		</div>
      	</div>
      </React.Fragment>
    );
  }
}
