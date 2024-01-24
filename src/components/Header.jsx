import PropTypes from 'prop-types';

import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({ gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {
  return (
    <header className="bg-blue-500 h-[350px]   mx-0 relative">
      <h1 className="text-white  text-center py-7 text-4xl uppercase relative" >Planificador de Gastos</h1>


      {isValidPresupuesto ? (<ControlPresupuesto
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />) : (<NuevoPresupuesto
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto} />)
      }



    </header>
  )
}

Header.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastos: PropTypes.func.isRequired,
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  isValidPresupuesto: PropTypes.bool.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired,
};

export default Header
