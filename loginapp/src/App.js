import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';
import Fondo from './components/Fondo/Fondo';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import imagen1 from './imgs/imagen1.jpg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <body bgcolor="#70CAEE">
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/todos" exact>
            <Todo />
          </Route>
          <Route path="/login" exact>
              <Login></Login>
              <CardHolder>
              
        <Cards></Cards>
        <div><img class="card-image" src={imagen1}/></div>
      </CardHolder>
      <br></br>
      <Fondo></Fondo>
      <br></br>
          </Route>
        </Switch>
      </section>
    </Router>
    </body>
  );
}

export default App;

/*

<section>
        <img src={imgMeme} alt="Un meme" />
      </section>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>

*/
