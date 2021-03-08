import CardHome from '../CardHome/Cards';
import Fondo from '../Fondo/Fondo';
import imagen2 from '../../imgs/imagen2.JPG';

function Home(){

  return (
    <section>
      <h1 align="center"><b>Inicio</b></h1>
      <div class="ml-8 ..."></div>
     <CardHome></CardHome>
     <div align="center"><img class="card-image center" src={imagen2}/></div>
     <br></br>
    <Fondo></Fondo>
    <br></br>
    </section>
  );
}

export default Home;
