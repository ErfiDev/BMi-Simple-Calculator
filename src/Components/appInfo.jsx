import React from 'react';
import {useDispatch} from 'react-redux';
import toggleAction from '../Action/toggleAction';


const AppInfo = ()=>{

    const dis = useDispatch();

    return(
        <div className="info-container">
            <h1 id="h1-appinfo">
                bmi simple calculator <br />

                <span
                class="txt-type"
                data-wait="1000"
                data-words='["Made by React js and Redux" , "Prepared by Erfan Hanifezade"]'
                ></span>
            </h1>

            <button onClick={()=> dis(toggleAction())} className="start-btn">I'm Ready</button>
        </div>
    );
}

export default AppInfo;