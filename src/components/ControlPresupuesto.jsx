import { PropTypes } from 'prop-types'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { useState, useEffect } from 'react';


const ControlPresupuesto = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {


  const [porcentaje, setPorcentaje] = useState(0); // [0, funcionQueModificaElEstado
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);





  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);

    const totalDisponible = presupuesto - totalGastado;


    //Calcular el porcentaje
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);


    setDisponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1500)


  }, [gastos, presupuesto])

  const formatearPresupuesto = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  const handleResetApp = ()=> {
    const resultado = confirm('¿Estas seguro de resetear la app?');

    if(resultado){
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
      localStorage.clear();
    }
  }


  return (
    <>
      <div className="bg-white  mx-auto p-10 rounded-lg shadow-lg max-w-5xl max-h-5xl md:flex justify-around mt-5 flex items-center ">
        <div className='w-40 h-40 md:w-60 md:h-60'>
          <CircularProgressbar styles={buildStyles({
            pathColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
            trailColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",
            textSize: "8px",
            textColor: porcentaje > 100 ? "#dc2626" : "#3b82f6",

          })}
            value={porcentaje}
            text={`${porcentaje}% Gastado`}
          />
        </div>
        <div className="">
          <button className='uppercase text-center px-7 py-3 rounded-lg mb-3 bg-pink-600 text-white w-full' type='button' onClick={handleResetApp}>
            Resetear App
          </button>
          <p>
            <span className="text-blue-500 font-bold text-xl">Presupuesto:</span> {formatearPresupuesto(presupuesto)}
          </p>
          <p className={`${disponible < 0 ? "text-red-700 font-bold" : ""}  `}>
            <span className={`${disponible < 0 ? "text-red-700" : "text-blue-500"} font-bold text-xl`}>Disponible:</span> {formatearPresupuesto(disponible)}
          </p>
          <p>
            <span className="text-blue-500 font-bold text-xl">Gastado:</span> {formatearPresupuesto(gastado)}
          </p>
        </div>
      </div>
    </>
  )
}

ControlPresupuesto.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastos: PropTypes.func.isRequired,
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired,
}

export default ControlPresupuesto
