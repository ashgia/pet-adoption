import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
// import { Elements, StripeProvider } from "react-stripe-elements";
// import TakeMoneyForm from "./TakeMoneyForm";

class TakeMoney extends Component {
  onToken = token => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token)
      // }).then(response => {
      //   response.json().then(data => {
      //     alert(`We are in business, ${data.email}`);
      //   });
    });
  };

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_wpTGYfkOhU8Nv7gFXsliCVW8"
        name="Tulu's Friends"
        description="Thank you for your generosity."
        currency="USD"
        amount={1000}
      >
        <button className="btn-donate">Donate</button>
      </StripeCheckout>
    );
  }
}

export default TakeMoney;
