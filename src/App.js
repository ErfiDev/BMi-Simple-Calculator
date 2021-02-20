import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import AppInfo from './Components/appInfo';
import Calculator from './Components/Calculator';

import "./CSS/Compiled/Main.css";
class App extends React.Component
{
    render()
    {
        let {toggle} = this.props.state;
        return(
            <Fragment>
                {!toggle ? <AppInfo /> : <Calculator /> }
            </Fragment>
        );
    }
}

const mapStateToProp = (state)=>{
    return {state};
};

export default connect(mapStateToProp)(App);