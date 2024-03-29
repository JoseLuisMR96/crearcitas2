import React, { useState } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes}) => {

  const [nombre,setNombre] = useState('');
  const [propietario,setPropietario] = useState('');
  const [email,setEmail] = useState('');
  const [fecha,setFecha] = useState('');
  const [sintomas,setSintomas] = useState('');

  const [error, setError] = useState(false);

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    //Validacion del formulario

    if([nombre, propietario, email, fecha, sintomas].includes('')){
        console.log("Campo vacio");
        setError(true)
        return;
    }
    
    setError(false)

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }
  
    setPacientes([...pacientes,objetoPaciente])

    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade pacientes y <span className='text-indigo-600 font-bold'>Administralos</span></p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5'>
          {error && <Error>'Todos los campos son obligatorios'</Error>}
          <div className='mb-5'>
              <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre mascota</label>
              <input id='mascota' type="text" placeholder='nombre de la mascota' 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={nombre} onChange={ (e) => setNombre(e.target.value)} />
          </div>

          <div className='mb-5'>
              <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
              <input id='propietario' type="text" placeholder='nombre del propietario' 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={propietario} onChange={ (e) => setPropietario(e.target.value)}/>
          </div>

          <div className='mb-5'>
              <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
              <input id='email' type="text" placeholder='Email' 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={email} onChange={ (e) => setEmail(e.target.value)} />
          </div>

          <div className='mb-5'>
              <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha</label>
              <input id='alta' type="date" placeholder='fecha' 
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={fecha} onChange={ (e) => setFecha(e.target.value)}/>
          </div>
          <div className='mb-5'>
              <label htmlFor="texto" className='block text-gray-700 uppercase font-bold'>Sintomas</label>
              <textarea name="" id="texto" className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
              placeholder='Describe los sintomas' cols="30" rows="10" value={sintomas} onChange={ (e) => setSintomas(e.target.value)}></textarea>
          </div>

          <input type="submit"  className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-colors' value="Agregar paciente"/>

      </form>
   
    </div>

    
 
  )
}

export default Formulario
