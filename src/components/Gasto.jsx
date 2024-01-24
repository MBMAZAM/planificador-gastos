import { PropTypes } from 'prop-types'
import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";



const diccionarioIconos = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
}

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

  const { nombre, cantidad, categoria, id, fecha } = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)} className="bg-blue-600 flex items-center justify-center text-white font-bold">
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => eliminarGasto(id)}
        destructive={true}
        className="bg-pink-500 flex items-center justify-center text-white font-bold"
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );


  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className=" bg-white shadow-lg p-7 rounded-md max-w-2xl container mx-auto text-2xl flex justify-between items-center mb-5">
          <div className='flex flex-row gap-x-4 w-full'>

            <img src={diccionarioIconos[categoria]} alt="Icono Gastos" className='max-w-24' />
            <div className='w-full'>
              <p className='text-lg text-gray-600 block'>{categoria}</p>
              <p className='text-xl block'>{nombre} </p>
              <p className='text-xl block'>Agregado el: {''}
                <span className=''>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>

          <p className='font-bold'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
}

export default Gasto
