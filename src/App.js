import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import CustomLayout from "./components/layout";
import BaseRouter from "./router";
import {BrowserRouter} from "react-router-dom";

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

export default App;
