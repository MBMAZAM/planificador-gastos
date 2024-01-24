import PropTypes from 'prop-types';


const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='text-center mt-40 max-w-5xl shadow-lg mx-auto p-9'>
      <form action="">
        <div className="flex justify-around">
          <label htmlFor="" className="text-3xl text-gray-600 font-bold">Filtrar Gastos</label>
          <select name="" id="" value={filtro} onChange={e => setFiltro(e.target.value)} className="w-4/6 bg-zinc-100 p-3 rounded-md text-center">
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  )
}

Filtros.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired,
};

export default Filtros
