import React, { Component } from "react";

import classes from "./LearnerDetail.module.css";

import {
    getProducts,
    getCart,
    getProductsError,
    getProductsPending,
} from "../../store/reducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { addItemToCart } from "../../store/action";
import fetchProductsAction from "../../bloc/fetchProducts";

import { withRouter } from "react-router-dom";
import LearnerDetailItem from "./LearnerDetailItem/LearnerDetailItem";
import { Helmet } from "react-helmet";


class LearnerDetail extends Component {
    state = {};

    UNSAFE_componentWillMount() {

        if (this.props.learner === null) {
            this.props.history.replace("/");
            return;
        }

        this.props.fetchProducts(this.props.learner.id);

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.products !== this.props.products) {
            const products = {};
            this.props.products.forEach(
                (product) =>
                    (products[product._id] = {
                        id: product._id,
                        name: product.name,
                        email: product.email,
                        phone: product.phone,
                        // quantity: this.props.cart[product.id]
                        //     ? this.props.cart[product.id].quantity
                        //     : 0,
                            learnerId: product.learnerId,
                            linkedin: product.linkedin,
                            attendance:product.attendance,
                            codeLines:product.codeLines

                    })
            );

            this.setState({
                products,
            });
            console.log(products)
        }
    }

    addItemHandler = (product) => {
        const updatedProduct = { ...this.state.products };
        ++updatedProduct[product].quantity;
        this.setState({
            products: updatedProduct,
        });
        // this.props.addItemToCart(this.state.products[product]);
    };
    removeItemHandler = (product) => {
        const updatedProduct = { ...this.state.products };
        --updatedProduct[product].quantity;
        this.setState({
            products: updatedProduct,
        });

        // this.props.addItemToCart(this.state.products[product]);
    };

    render() {
        if (this.props.pending) {
            return (
                <h1 style={{ margin: "auto" }}>
                    Please wait while we fetch the details
                </h1>
            );
        }

        if (this.props.error) {
            return (
                <div style={{ margin: "auto", color: "red" }}>
                    Something went worng.. Please Refresh..!
                </div>
            );
        }

        const learner = this.props.learner;

        if (learner === null) {
            this.props.history.replace("/");
            return null;
        }

        let products = [];

        for (const product in this.state.products) {
            products.push({
                id: product,
                ...this.state.products[product],
            });
        }
        

        const productItems = [];

        products.forEach((product) => {
            productItems.push(
                
                <LearnerDetailItem 
                
                    key={product.id}
                    noEdit = {this.props.noEdit}
                    removeItemHandler={() => this.removeItemHandler(product.id)}
                    // addItemHandler={() => this.addItemHandler(product.id)}
                    product={product}
                />
            );
        });

        if(productItems.length === 0) {
            return <h1> The Learner haven't added any Details yet.</h1>
        }

        return (
            <div className={classes.LearnerDetail}>
               
{/*                
                <h2>{" "}{learner.name}</h2> */}
               
                {productItems}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: getProducts(state),
    cart: getCart(state),
    error: getProductsError(state),
    pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            // addItemToCart: addItemToCart,
            fetchProducts: fetchProductsAction,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(LearnerDetail));
