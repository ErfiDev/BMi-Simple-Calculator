import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import AppInfo from './Components/appInfo';
import Calculator from './Components/Calculator';
import Chart from './Components/chartBMI';

import "./CSS/Compiled/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component
{
    render()
    {
        let {toggle} = this.props.state;
        let {toggleChart} = this.props.state;
        return(
            <Fragment>
                {!toggle ? <AppInfo /> : <Calculator /> }

                {toggleChart ? <Chart /> : null}
            </Fragment>
        );
    }
}

const mapStateToProp = (state)=>{
    return {state};
};

export default connect(mapStateToProp)(App);