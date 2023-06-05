import React from "react";
import TuitStates from "./tuit-states";
const TuitItem = (
 {
   tuit = {"_id": 123, "topic": "Space", "userName": "SpaceX",
   "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
   "time": "2h",   "image": "https://th.bing.com/th/id/R.e488777d759169c74b74aa95f07adbed?rik=VWCMNP%2fO1MdzWQ&riu=http%3a%2f%2fwww.carlogos.org%2flogo%2fTesla-logo-2003-2500x2500.png&ehk=JNBLiptu%2fRFyW%2fKfTZ0WnRm0dTAAOD2QoMqcnnk71e0%3d&risl=&pid=ImgRaw&r=0",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
    <div className="col-2">
       <img width={70} className="float-end rounded-circle" src={`${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div>{tuit.userName} . {tuit.time}</div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
       <div><TuitStates/></div>
     </div>
     
   </div>
  </li>
 );
};
export default TuitItem;