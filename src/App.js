import React from 'react';
import hervas from './img/hervas.png';
import tabara from './img/tabara.png';
import vaquero from './img/vaquero.png';
import { showAlert } from 'tailwind-toastify';

export default function App() {

  const handleShowAlert = (type, title, message) => {
    showAlert(type, title, message, { duration: 5000 }); // Duración de 5000 milisegundos (5 segundos)
  }

  return (
    <>
      <section className="">
        <h1 className="flex m-auto justify-center my-8 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Encuesta de Cumpleaños</h1>
        <p className="flex m-auto justify-center  text-center mx-10 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Selecciona para que personas vas a realizar puesta de dinero para regalos</p>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
          <div onClick={() => handleShowAlert('success', 'Success', 'Mostrando alerta de éxito')}>
            <img className="h-auto max-w-full rounded-lg" src={hervas} alt="" />
          </div>
          <div onClick={() => handleShowAlert('success', 'Success', 'Mostrando alerta de éxito')}>
            <img className="h-auto max-w-full rounded-lg" src={tabara} alt="" />
          </div>
          <div onClick={() => handleShowAlert('success', 'Success', 'Mostrando alerta de éxito')}>
            <img className="h-auto max-w-full rounded-lg" src={vaquero} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
