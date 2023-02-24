<section className='containerBlog'>
     

<div className='formBlog'>
  <h1 className='principalTitle'>BLOG'S REDACTOR</h1>
  <div className='row'>

    <div className='col-md-6'>
      <label>Tema de interes</label>
      <select id='selectInteres' className='form-control' >
        <option value="Tecnología">Tecnología</option>
        <option value="Viaje">Viaje</option>
        <option value="Moda y belleza">Moda y belleza</option>
        <option value="Salud y fitness">Salud y fitness</option>
        <option value="Cocina y alimentación">Cocina y alimentación</option>
        <option value="Finanzas personales">Finanzas personales</option>
        <option value="Entretenimiento">Entretenimiento</option>
        <option value="Negocios y emprendimiento">Negocios y emprendimiento</option>
      </select>
      <p><b>Seleccionaste:</b></p>
    </div>

    <div className='col-md-6'>
    <label>Tono de escritura</label>
      <select id='selectInteres' className='form-control' >
        <option>Informal</option>
        <option>Serio</option>
        <option>Amigable</option>
        <option>Humorístico</option>
        <option>Autoriatario</option>
      </select>
      <p><b>Seleccionaste:</b></p>
    </div>
    <div className='col-md-12'>
      <span>Escribir sobre:</span>
      <textarea id="textAreaBlog" className='form-control' placeholder='Separa tus ideas, con una " , "'></textarea>
    </div>
    
    <div className='col-md-12 mt-3'>
        <label>Controla la "Temperatura"</label>
       <input type="range" className='inputRange' min="0" max="1" value="0"></input>
    </div>
    
  </div>
  <button className='btnEnviar bg-primary'>Enviar</button>
</div>

</section>



