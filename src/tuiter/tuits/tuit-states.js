import React from "react";

const TuitStates = (
    {
        tuit_states = {"liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345}
      }
) => {
 return(
    <div className="row">
        <div className="col-3">
            <i className="bi bi-chat"></i> {tuit_states.replies}
            <i className="bi bi-arrow-repeat"></i> {tuit_states.retuits}
            <i className="bi bi-heart"></i> {tuit_states.likes}
            <i className="bi bi-upload"></i>
        </div>
    </div>
 );
};
export default TuitStates;