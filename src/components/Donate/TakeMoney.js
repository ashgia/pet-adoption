// import React from "react";
// import { CardElement, injectStripe } from "react-stripe-elements";

// // class TakeMoney extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.submit = this.submit.bind(this);
// //   }

// //   async submit(ev) {}
// //   render() {
// //     return (
// //       <div className="checkout">
// //         <p>Would you like to complete the purchase?</p>
// //         <CardElement />
// //         <button onClick={this.submit}>Send</button>
// //       </div>
// //     );
// //   }
// // }

// // render() {
// //     return this.state.canMakePayment ? (
// //       <PaymentRequestButtonElement
// //         className="PaymentRequestButton"
// //         onBlur={handleBlur}
// //         onClick={handleClick}
// //         onFocus={handleFocus}
// //         onReady={handleReady}
// //         paymentRequest={this.state.paymentRequest}
// //         style={{
// //           paymentRequestButton: {
// //             theme: 'dark',
// //             height: '64px',
// //             type: 'donate',
// //           },
// //         }}
// //       />
// //     ) : null;
// //   }
// // }
// // const PaymentRequestForm = injectStripe(TakeMoney);

// // export default injectStripe(TakeMoney);

// class TakeMoney extends Component {
//   constructor(props) {
//     super(props);

//     const paymentRequest = props.stripe.paymentRequest({
//       country: "US",
//       currency: "usd",
//       total: {
//         label: "Demo total",
//         amount: 1000
//       }
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
// const PaymentRequestForm = injectStripe(TakeMoney);
