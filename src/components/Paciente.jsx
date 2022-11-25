
const Paciente = ({paciente}) => {
  
  const {nombre, propietario, email, fecha, sintomas} = paciente

  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='mb-3 text-gray-700 uppercase font-bold'>Nombre: 
    <span className='font-normal'>{nombre}</span></p>
    <p className='mb-3 text-gray-700 uppercase font-bold'>Propietario: 
    <span className='font-normal'>{propietario}</span></p>
    <p className='mb-3 text-gray-700 uppercase font-bold'>Email: 
    <span className='font-normal'>{email}</span></p>
    <p className='mb-3 text-gray-700 uppercase font-bold'>Fecha: 
    <span className='font-normal'>{fecha}</span></p>
    <p className='mb-3 text-gray-700 uppercase font-bold'>Sintomas: 
    <span className='font-normal'>{sintomas}</span></p>
    </div>
  )
}

export default Paciente