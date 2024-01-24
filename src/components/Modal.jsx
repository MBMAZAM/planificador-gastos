import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";

import Mensaje from "./Mensaje";

import CerrarBotom from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {
  const [mensaje, setMensaje] = useState("");

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, [gastoEditar]);

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const handleModal = (e) => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 3000);

      return;
    }

    guardarGasto({ nombre, cantidad, categoria, id, fecha });
  };

  return (
    <div className="absolute z-20 top-0 left-0 w-full bg-black/85 h-screen flex justify-center ">
      <img
        src={CerrarBotom}
        alt=""
        className="absolute max-w-12 top-8 right-8 cursor-pointer z-10"
        onClick={ocultarModal}
      />
      <div className="p-4 w-full max-w-md absolute top-10">
        <form
          onSubmit={handleModal}
          className={`flex flex-col space-y-3   ${animarModal
              ? "transition-all duration-200 opacity-100 relative "
              : "opacity-0 duration-700"
            } `}
        >
          {mensaje && <Mensaje tipo={"red"}> {mensaje} </Mensaje>}

          <legend className="text-white text-center text-4xl uppercase mb-2">{gastoEditar.nombre ? "Editando Gasto": "Nuevo Gasto"}</legend>
          <div className="border-2 border-blue-600"></div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nombre" className="text-white text-2xl">
              Nombre Gasto
            </label>
            <input
              type="text"
              id="nombre"
              className="p-2 rounded-md "
              placeholder="Añade un Nombre de Gasto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="nocantidad" className="text-white text-2xl">
              Cantidad{" "}
            </label>
            <input
              type="number"
              id="nocantidad"
              className="p-2 rounded-md "
              placeholder="Añade la cantidad del Gasto:ej.300"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="categoria" className="text-white text-2xl">
              Categoría Gasto{" "}
            </label>
            <select
              name=""
              id="categoria"
              className="p-2 rounded-md text-center"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
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
         <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios": "Añadir Gasto"} className="bg-blue-500 text-white p-2 rounded-md mt-4 uppercase"/>
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animarModal: PropTypes.bool.isRequired,
  setAnimarModal: PropTypes.func.isRequired,
  guardarGasto: PropTypes.func.isRequired,
  gastoEditar: PropTypes.object.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
};

export default Modal;
