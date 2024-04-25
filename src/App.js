import React, { useState } from 'react';
import hervas from './img/hervas.png';
import tabara from './img/tabara.png';
import vaquero from './img/vaquero.png';

export default function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (image) => {
    setSelectedImages(prevSelectedImages => {
      if (prevSelectedImages.includes(image)) {
        return prevSelectedImages.filter(selectedImage => selectedImage !== image);
      } else {
        return [...prevSelectedImages, image];
      }
    });
  };

  const isSelected = (image) => {
    return selectedImages.includes(image);
  };

  return (
    <>
      <section className="">
        <h1 className="flex m-auto justify-center my-8 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Encuesta de Cumpleaños</h1>
        <p className="flex m-auto justify-center  text-center mx-10 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Selecciona para que personas vas a realizar puesta de dinero para regalos</p>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
          <div onClick={() => toggleImageSelection(hervas)}>
            <img className={`h-auto max-w-full rounded-lg ${isSelected(hervas) ? 'opacity-50' : ''}`} src={hervas} alt="" />
            {isSelected(hervas) && <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
          </div>
          <div onClick={() => toggleImageSelection(tabara)}>
            <img className={`h-auto max-w-full rounded-lg ${isSelected(tabara) ? 'opacity-50' : ''}`} src={tabara} alt="" />
            {isSelected(tabara) && <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
          </div>
          <div onClick={() => toggleImageSelection(vaquero)}>
            <img className={`h-auto max-w-full rounded-lg ${isSelected(vaquero) ? 'opacity-50' : ''}`} src={vaquero} alt="" />
            {isSelected(vaquero) && <span className="absolute top-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
          </div>
        </div>
      </section>
    </>
  )
}
