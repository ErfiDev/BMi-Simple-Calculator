import React,{Fragment} from 'react';

import AppInfo from './Components/appInfo';
import Calculator from './Components/Calculator';

import "./CSS/Compiled/Main.css";
class App extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <AppInfo />
                <Calculator />
            </Fragment>
        );
    }
}

export default App;