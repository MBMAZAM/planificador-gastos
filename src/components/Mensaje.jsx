import { PropTypes } from 'prop-types'

const Mensaje = ({ children, tipo }) => {

  const clases = {
    'blue': 'text-blue-800 border-blue-800',
    'red': 'text-red-800 border-red-800',
    'green': 'text-green-800 border-green-800',
    // Agrega más tipos y clases según sea necesario
  };


  return (
    <div className={`p-3 text-center ${clases[tipo]} uppercase font-bold  border-l-4 mt-3 bg-white`}>
      {children}
    </div>
  )
}

Mensaje.propTypes = {
  children: PropTypes.node.isRequired,
  tipo: PropTypes.string.isRequired,
}

export default Mensaje
