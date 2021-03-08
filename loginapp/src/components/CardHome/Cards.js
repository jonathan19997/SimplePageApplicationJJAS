import PillBotton from './PillBotton';
function Cards (){
  //JSX 
  return (
   
      <section className="Cards">
         
      <p>
      <br></br> ¿Tienes dudas sobre cómo adminisatrar tu negocio para que sea rentable?
      <br></br>
      <br></br>
      <h2><b><i>  Nosotros te ayudamos...</i></b></h2>
      <br></br>
        A través de nuestro staff y red de consultores, contamos con experiencia en el desarrollo de productos 
      y servicios para Organismos de Cooperación Internacional, Empresas, Gobiernos y Organizaciones Sociales.
      </p>
      <br></br>
      <br></br>
      <h1><b>¡Únete a nosotros y trabaja con nuestros expertos para desarrollar tu idea de negocio!</b></h1>
      <br></br>
      
      <p>
       Si deseas que nuestro staff se comunique contigo, da click en "Inscribirse ahora" para una conferencia virtual gratuita.
      </p>
      <br></br>
      <div>
        <PillBotton text="Inscribirse ahora" type="submit"></PillBotton>
        
      </div>
    </section>
  );
}

export default Cards;
