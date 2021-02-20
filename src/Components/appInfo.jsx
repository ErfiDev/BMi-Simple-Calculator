import React from 'react';


const AppInfo = ()=>{
    return(
        <div className="info-container">
            <h1>
                bmi simple calculator <br />

                <span
                class="txt-type"
                data-wait="3000"
                data-words='["Made by React js and Redux" , "Prepared by Erfan Hanifezade"]'
                ></span>
            </h1>


            <button className="start-btn">I'm Ready</button>
        </div>
    );
}

export default AppInfo;