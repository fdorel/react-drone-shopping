import React, { Component } from 'react'

export default function EmptyCart(){
    return(
        <div className = "mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>There are no items in the cart</h1>
                    <h2 className="text-bright">Please go back to Items menu to choose one or more</h2>
                </div>
            </div>
        </div>
    )
}