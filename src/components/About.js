import React, { Component } from 'react';
import Title from './Title';
import styled from "styled-components";
import Button from './Button';
import {Link} from "react-router-dom";
import Modal from './Modal';

export default class About extends Component {

  render() {
    return (
      /*React.Fragment is used to simulate the HTML tags*/
/*      <div>
        <Product />
      </div>*/

      <React.Fragment>
{/*      	<div className = "py-5">*/}
{/*      		<div className = "container">
      		<Title name = "" title = "About Our Company" />*/}

                <section className="jumbotron text-center">
                    <div className="container">
                        <Title name = "This page is" title = "About our company" />
                        <p className="lead text-muted">Praesent vitae gravida purus, quis lacinia nisi. Etiam a nulla id mauris pellentesque semper vitae ut tellus. Mauris maximus felis sed rutrum tristique. Curabitur placerat porta risus vel mollis. Etiam eget lacus ut tellus sodales vestibulum. Pellentesque finibus posuere nibh, id sollicitudin tortor ultrices et. Etiam non metus ac odio ullamcorper elementum sed efficitur tellus. Morbi non nulla massa. Praesent commodo dapibus sollicitudin. Phasellus ac nisi sollicitudin, finibus tortor id, ornare massa. Pellentesque quis libero risus. Suspendisse eget rutrum metus, non pellentesque felis. Vivamus vel quam ornare, facilisis est sit amet, porttitor lacus. Etiam a massa ac justo sagittis dapibus id ut ipsum. Curabitur dictum ipsum at nibh elementum pretium non sed lorem. Etiam luctus sapien vel consectetur venenatis.</p>

                        <Link to = "/">
                            <button className = "btn btn-outline-info mb-3 px-5 text-uppercase" type = "button">More details ...
                            </button>
                        </Link>


                    </div>
                </section>

      			<div className = "row about">
            
      				<div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text lead text-muted">Etiam non metus ac odio ullamcorper elementum sed efficitur tellus. Morbi non nulla massa. Praesent commodo dapibus sollicitudin. Phasellus ac nisi sollicitudin, finibus tortor id, ornare massa. Pellentesque quis libero risus. Suspendisse eget rutrum metus, non pellentesque felis. Vivamus vel quam ornare, facilisis est sit amet, porttitor lacus. Etiam a massa ac justo sagittis dapibus id ut ipsum. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">Lorem Ipsum</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text lead text-muted">Etiam non metus ac odio ullamcorper elementum sed efficitur tellus. Morbi non nulla massa. Praesent commodo dapibus sollicitudin. Phasellus ac nisi sollicitudin, finibus tortor id, ornare massa. Pellentesque quis libero risus. Suspendisse eget rutrum metus, non pellentesque felis. Vivamus vel quam ornare, facilisis est sit amet, porttitor lacus. Etiam a massa ac justo sagittis dapibus id ut ipsum. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">Lorem Ipsum</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <div className="card-body">
                  <p className="card-text lead text-muted">Etiam non metus ac odio ullamcorper elementum sed efficitur tellus. Morbi non nulla massa. Praesent commodo dapibus sollicitudin. Phasellus ac nisi sollicitudin, finibus tortor id, ornare massa. Pellentesque quis libero risus. Suspendisse eget rutrum metus, non pellentesque felis. Vivamus vel quam ornare, facilisis est sit amet, porttitor lacus. Etiam a massa ac justo sagittis dapibus id ut ipsum. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-muted">Lorem Ipsum</small>
                  </div>
                </div>
              </div>
            </div>
      			</div>
{/*      		</div>*/}

{/*
      	</div>*/}
      </React.Fragment>
    );
  }
}

/*const About = styled.div`
	background: var(--mainBlue);
	.div.card-body{
		color: var(--mainDark) !important;
		margin: 20px !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`*/
