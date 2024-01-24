import { PropTypes } from 'prop-types'
import { useState } from "react";
import Mensaje from "./Mensaje";


const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [mensaje, setMensaje] = useState("")


  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!(presupuesto) || presupuesto < 0) {
      setMensaje("No es un presupuesto valido")
      return
    }
    setMensaje("")
    setIsValidPresupuesto(true)

  }

  return (
    <div>
      <div className="bg-white  mx-auto p-10 rounded-lg shadow-lg max-w-2xl max-h-5xl ">
        <form action="" className="p-6" onSubmit={handlePresupuesto}>
          <div className="flex flex-col text-center space-y-3">
            <label htmlFor="" className="text-blue-500 text-lg">Definir Presupuesto</label>
            <input type="number" className="w-full text-center bg-blue-50 mx-auto" placeholder="Añade tu Presupuesto" value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value))} />
          </div>

          <input type="submit" value="Añadir" className="w-full mt-3 mx-auto bg-blue-900 font-bold text-white uppercase py-1 cursor-pointer" />

          {mensaje && <Mensaje tipo={"blue"}>{mensaje}</Mensaje>}
        </form>
      </div>
    </div>
  )
}

NuevoPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired,
}

export default NuevoPresupuesto
