import { PropTypes } from 'prop-types'
import Gasto from './Gasto'

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados
}) => {
  return (
    <div className='max-w-2xl mx-auto mt-24'>


      {
        filtro ? (
          <>
            <h2 className='container mx-auto text-2xl text-gray-600 font-bold mb-8'>
              {gastosFiltrados.length ? 'Hay gastos' : 'No hay gastos'}
            </h2>
            {gastosFiltrados.map((gasto) => (
              < Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} />
            ))}
          </>
        ) : (
          <>
            <h2 className='container mx-auto text-2xl text-gray-600 font-bold mb-8'>
              {gastos.length ? 'Hay gastos' : 'No hay gastos'}
            </h2>
            {gastos.map((gasto) => (
              < Gasto key={gasto.id} gasto={gasto} setGastoEditar={setGastoEditar} eliminarGasto={eliminarGasto} />
            ))}
          </>
        )
      }



    </div>
  )
}

ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
  filtro: PropTypes.string.isRequired,
  gastosFiltrados: PropTypes.array.isRequired,
}

export default ListadoGastos
