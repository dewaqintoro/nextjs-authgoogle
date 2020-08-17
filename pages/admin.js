import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AdminDew extends Component {
  static propTypes = {
    prop: PropTypes
  }

  

  render() {
    console.log("props",this.props)
    // const renderAuthButton = () => {
    //   if (isSignedIn === null) {
    //     return null;
    //   } else if (isSignedIn) {
    //     console.log("sudah login")
    //     router.push('/admin')
    //   } else {
    //     console.log("Belum login")
    //     return <button onClick={onSignInClick}>Sign In with Google</button>;
    //   }
    // };
    return (
      <div>
        <h1>Admin <span>{this.props.userId}</span></h1>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};

export default connect(mapStateToProps) (AdminDew)