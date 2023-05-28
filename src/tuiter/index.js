import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home/home-screen";
import ExploreScreen from "./explore/explore-screen";
import BookmarksScreen from "./bookmarks/bookmarks-screen";
import ProfileScreen from "./profile/profile-screen";


function Tuiter() {
 return (
   <div>
     <Nav />
     <div className="row">
       <div className="col-2">
         <NavigationSidebar />
       </div>
       <div className="col-7">
         <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
         </Routes>
       </div>
       <div className="col-3">
         <h1>Who to follow</h1>
       </div>
     </div>
   </div>
 );
}
export default Tuiter;