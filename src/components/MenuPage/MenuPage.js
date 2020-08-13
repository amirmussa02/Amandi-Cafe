import React, { Component } from "react";
import { connect } from "react-redux";
import GoToCartButton from "../GoToCartButton/GoToCartButton";
import ProductCard from "../ProductCard/ProductCard";
import "./MenuPage.css";


class MenuPage extends Component {
// const MenuPage = ({ reduxState, dispatch }) => {
//   useEffect(() => {
//     //This will activate the saga that will do a get call for menu items
//     dispatch({ type: "FETCH_MENU" });
//   }, []);
componentDidMount(){
  this.props.dispatch({ type: "FETCH_MENU" })
}

render() {
  return (
    <>
      <div class="header">
        <div></div>
        <h1>Menu</h1>
        <GoToCartButton />
      </div>

      {/* {JSON.stringify(reduxState.menu[1])} */}

      {this.props.reduxState.menu.length > 0 && (
        <div class="container">
          {this.props.reduxState.menu.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
};
}

//this is used to connect this page to the reduxState and use props anywhere
const mapStateToProps = (reduxState) => ({
  reduxState,
});
export default connect(mapStateToProps)(MenuPage);
