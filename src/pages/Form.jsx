import React, { useEffect, useState } from 'react';
import hervas from '../img/hervas.png';
import tabara from '../img/tabara.png';
import vaquero from '../img/vaquero.png';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';


function Form() {
    const { username } = useParams();
    const [name, setName] = useState(atob(username));
    const [selectedImages, setSelectedImages] = useState([]);
    const [realizado, setRealizado] = useState(false);



    const toggleImageSelection = (image) => {
        setSelectedImages(prevSelectedImages => {
            if (prevSelectedImages.includes(image)) {
                return prevSelectedImages.filter(selectedImage => selectedImage !== image);
            } else {
                return [...prevSelectedImages, image];
            }
        });
    };

    useEffect(() => {
        // Comprobar si la cookie existe al cargar el componente
        const formularioEnviado = Cookies.get('formularioEnviado');
        if (formularioEnviado) {
            // Realizar cualquier acción necesaria
            setRealizado(true)
        }
    }, []);

    const isSelected = (image) => {
        return selectedImages.includes(image);
    };

    const selectedCount = selectedImages.length;

    let message;
    if (selectedCount === 0) {
        message = 'No has seleccionado a nadie';
    } else if (selectedCount === 1) {
        message = `Has seleccionado a ${isSelected(hervas) ? 'Hervas' : isSelected(tabara) ? 'Tabara' : 'Vaquero'}`;
    } else if (selectedCount === 3) {
        message = 'Has seleccionado a los tres';
    } else {
        const selectedNames = selectedImages.map(image => {
            if (image === hervas) return 'Hervas';
            if (image === tabara) return 'Tabara';
            if (image === vaquero) return 'Vaquero';
            return '';
        });
        message = `Has seleccionado a ${selectedNames.join(' y a ')}`;
    }

    const logSelection = () => {
        const selectionArray = [name, isSelected(hervas) ? 1 : 0, isSelected(tabara) ? 1 : 0, isSelected(vaquero) ? 1 : 0];
        Cookies.set('formularioEnviado', true);
        window.location.reload()
    };
    

    return (
        <>

            {realizado ? (
                <div className='flex font-semibold text-xl justify-center items-center text-center h-screen'>Gracias por realizar el formulario</div>
            ) : (
                <div>
                    <section>
                        <h1 className="flex m-auto justify-center my-8 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Encuesta de Cumpleaños</h1 >
                        <p className="flex m-auto justify-center  text-center mx-10 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Selecciona para que personas vas a realizar puesta de dinero para regalos</p>
                    </section >
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
                            <div onClick={() => toggleImageSelection(hervas)} className="relative">
                                <img className={`h-auto max-w-full rounded-lg ${isSelected(hervas) ? 'opacity-50 duration-300' : 'duration-300'}`} src={hervas} alt="" />
                                {isSelected(hervas) && <span className="absolute top-0 left-0 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
                            </div>
                            <div onClick={() => toggleImageSelection(tabara)} className="relative">
                                <img className={`h-auto max-w-full rounded-lg ${isSelected(tabara) ? 'opacity-50 duration-300' : 'duration-300'}`} src={tabara} alt="" />
                                {isSelected(tabara) && <span className="absolute top-0 left-0 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
                            </div>
                            <div onClick={() => toggleImageSelection(vaquero)} className="relative">
                                <img className={`h-auto max-w-full rounded-lg ${isSelected(vaquero) ? 'opacity-50 duration-300' : 'duration-300'}`} src={vaquero} alt="" />
                                {isSelected(vaquero) && <span className="absolute top-0 left-0 text-white bg-black bg-opacity-50 px-2 py-1 rounded">Seleccionado</span>}
                            </div>
                        </div>
                    </section>
                    <section>
                        <p className="text-center mt-8">{message}</p>
                    </section>
                    <section className=' my-8 mx-10'>
                        <button onClick={logSelection} className='bg-amber-400 w-3/4 m-auto py-2 rounded flex justify-center'>
                            Guardar respuesta
                        </button>
                    </section>
                </div >
            )
            }

        </>
    )
}

export default Form;
