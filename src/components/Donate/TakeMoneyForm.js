// import React from "react";
// import {
//   PaymentRequestButtonElement,
//   injectStripe
// } from "react-stripe-elements";

// class TakeMoneyForm extends Component {
//   constructor(props) {
//     super(props);

//     const paymentRequest = props.stripe.paymentRequest({
//       country: "US",
//       currency: "usd",
//       total: {
//         label: "Demo total",
//         amount: 1000
//       },
//       requestPayerName: true,
//       requestPayerEmail: true
//     });

//     paymentRequest.on("token", ({ complete, token, ...data }) => {
//       console.log("Received Stripe token: ", token);
//       console.log("Received customer information: ", data);
//       complete("success");
//     });

//     paymentRequest.canMakePayment().then(result => {
//       this.setState({ canMakePayment: !!result });
//     });

//     this.state = {
//       canMakePayment: false,
//       paymentRequest
//     };
//     const handleBlur = () => {
//       console.log("[blur]");
//     };
//     const handleChange = change => {
//       console.log("[change]", change);
//     };
//     const handleClick = () => {
//       console.log("[click]");
//     };
//     const handleFocus = () => {
//       console.log("[focus]");
//     };
//     const handleReady = () => {
//       console.log("[ready]");
//     };
//   }

//   render() {
//     return this.state.canMakePayment ? (
//       <PaymentRequestButtonElement
//         className="PaymentRequestButton"
//         onBlur={handleBlur}
//         onClick={handleClick}
//         onFocus={handleFocus}
//         onReady={handleReady}
//         paymentRequest={this.state.paymentRequest}
//         style={{
//           paymentRequestButton: {
//             theme: "dark",
//             height: "64px",
//             type: "donate"
//           }
//         }}
//       />
//     ) : null;
//   }
// }
// export default injectStripe(TakeMoneyForm);
