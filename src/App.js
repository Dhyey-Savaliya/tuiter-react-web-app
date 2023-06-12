
import Labs from './labs/index';
import HelloWorld from './labs/a3/hello-world';
import Tuiter from './tuiter';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from "react-router";
import {Navigate} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
  // let qwe = { ert: 4 };
  // const wer = (ewq) => console.log(ewq.ert);
  // return (
  //   <div>
  //     <button onClick={() => wer({ ...qwe, ert: qwe.ert + 1 })}>Lvp</button>
  //     <button onClick={() => wer({ ...qwe, ert: qwe.ert - 3 })}>Poi</button>
  //   </div>
  // );
}
export default App;
