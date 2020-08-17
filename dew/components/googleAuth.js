import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import * as AuthorizationAction from '../../actions'
import { getCovidsList,getCovidIndo,getCovidPositif,getCovidSembuh,signIn } from '../../actions';

const AuthGoogle = (props,{ dispatch, isSignedIn, userId }) => {
  const [auth, setAuth] = useState(null);
 
  if(isSignedIn === false){
    console.log("belum sign")
    // alert("belum sign")
  }else{
    // alert("sudah login")
    console.log("sudah sign")

  } 
  useEffect(() => {
    // props.dispatch(getCovidsList());
    // props.dispatch(getCovidIndo());
    props.dispatch(getCovidPositif())
    props.dispatch(getCovidSembuh())
    console.log("covid provinsi v2",props.dispatch(signIn()));
  }, []);

  // console.log("ini props",props)


  const initAuth = () => { 
    const params = {
      clientId:
        "665583303856-dee0npijq291ee7iq30og902mkg1bc7a.apps.googleusercontent.com",
      scope: "email",
    };

    window.gapi.load("client:auth2", () => {
      window.gapi.client.init(params).then(() => {
        setAuth(window.gapi.auth2.getAuthInstance());
        onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
      });
    });
  };

  useEffect(() => {
    initAuth()
  }, []);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(
        AuthorizationAction.signIn(
          window.gapi.auth2.getAuthInstance().currentUser.get().getId()
        )
      );
    } else {
      dispatch(AuthorizationAction.signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        // <Redirect to="/somewhere/else" />
        <div>
          <span>{userId}</span>
          <button onClick={onSignOutClick}>Signout</button>
        </div>
      );
    } else {
      return (
        <div className="tomboldew">
          <button onClick={onSignInClick}>Sign In with Google</button>
        </div>
      )
    }
  };

  const renderDew = () =>{
    if(isSignedIn === null){
      return(
        <div className="tomboldew">
          <button onClick={onSignInClick}>Sign In with Google</button>
        </div>
      )
    }else{
      <h1>Sudah Login</h1>
    }
  }


  return (
    <div>
      <div>{renderDew()}</div>
      <h1>google</h1>
    </div>
  )

  // return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  console.log("ini state login google",state);
  
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};
export default connect(mapStateToProps) (AuthGoogle)
