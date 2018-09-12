import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { ButtonGroup, Button } from "reactstrap";
import { connect } from "react-redux";
import { getUser } from "../../ducks/authReducer";

class NewAdopt extends Component {
  render() {
    return (
      //   <div>
      //     <h1>Create/Login Your Account</h1>
      //     <ButtonGroup>
      //       <Link to="">
      //         <Button>Login</Button>
      //       </Link>
      //     </ButtonGroup>
      //   </div>
      <div>
        <a href="http://localhost:3001/newAdoptLogin">Login</a>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(NewAdopt);

