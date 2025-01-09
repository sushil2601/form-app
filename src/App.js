import AddDetails from "./AddDetails";
import FormApp from "./FormApp";
import Home from "./Home";
import {Routes ,Route, Link} from "react-router-dom";

function App() {

  return (
    <div>

      <nav>

        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/add'>Add</Link>
        </li>

        <li>
          <Link to='/update'>Update</Link>
        </li>
      </nav>



      <Routes>

        <Route 
          path="/"
          element = {<Home />}

        />

        <Route 
          path  = "/add"
          element = {<FormApp />}
        />

        <Route 
          path="/update" 
          element = {<AddDetails />}
        />

      </Routes>
    </div>
  );
}

export default App;
