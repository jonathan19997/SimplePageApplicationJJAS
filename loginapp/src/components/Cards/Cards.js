import PillBotton from './PillBotton';
function Cards (){
  //JSX 
  return (
   
      <section className="Cards">
      <h1><b>En caso de problemas...</b></h1>
      <p>
       Si por alguna razón su correo electrónico o contraseña no son admitidos, verifique que estén escritos correctamente, omita espacios y caracteres especieales. En caso de que el problema de autenticación persista, de click en el "Solicitar Reporte" para que uno de nuestros técnicos le proporcione las razones por las que su correo y/o contraseñano no son admitidos; todo con base a los requerimientos de correo y contraseñade su cuenta.
      </p>
      <br></br>
      <div>
        <PillBotton text="Solicitar reporte" type="submit" click={(e) => { alert("Se ha solicitado su reporte.");}}></PillBotton>
        
      </div>
    </section>
  );
}

export default Cards;
