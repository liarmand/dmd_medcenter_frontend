import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from "./components/layout";
import BaseRouter from "./router";
import {BrowserRouter} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

const patients = [{name:"Petya",surname:"Kolobkov"},{name:"Vika",surname:"Kolobkova"}];

class App extends Component {
  render() {
    return (
        <BrowserRouter>

            <CustomLayout>
                <BaseRouter/>
            </CustomLayout>

        </BrowserRouter>
    );
  }
}


const mapStateToProps = state => {
  console.log(state);
  return {
    isAuthenticated: state.token !== null
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);