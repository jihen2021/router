import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Principal from './Principal';



function App() {
  return (
    <div className="App">


      <Router>
       <nav>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/Principal">Principal</Link></li>
         </ul>
       </nav>
       <Switch>
         
            <Route path="/" exact  component={Home}/>
            <Route path="/Principal" exact component={Principal}/>
           </Switch>
      </Router>


    

    </div >
  );
}

export default App;
