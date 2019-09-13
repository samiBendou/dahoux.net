import React from "react";
import ReactLoading from "react-loading";

const Loader = () => (
    <div className="loader-background">
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',

            }}>
            <ReactLoading type="bubbles" color="#000000"/>
        </div>
    </div>);

export default Loader;