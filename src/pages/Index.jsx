import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    const [name, setName] = useState('');
    const [action, setAction] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value; // Obtén el valor actualizado del campo de entrada
        setName(value); // Actualiza el estado con el nuevo valor

        // Verifica si el campo de entrada está vacío o no
        if (value !== '') {
            setAction(true);
        } else {
            setAction(false);
        }
    };

    return (
        <div className='h-screen'>
            <section>
                <h1 className="flex m-auto justify-center my-8 mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">Encuesta de Cumpleaños</h1>
                <p className="flex m-auto justify-center  text-center mx-10 mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Antes de realizar el formulario, ingrese el nombre para saber quien eres a la hora de ver para que personas vas a realizar puesta de dinero para regalos</p>
            </section>
            <form>
                <div className="mb-6 mx-10">
                    <input type="text" required value={name} onChange={handleInputChange} id="name" className="bg-gray-50 border m-auto justify-center flex border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="Ingrese su nombre" required />
                </div>
                <div className='mx-10'>
                    {action ? (
                        <Link to={'/form'} className='bg-amber-400 w-3/4 m-auto py-2 rounded flex justify-center'>
                            Enviar
                        </Link>
                    ) : (
                        <div className='bg-red-400 w-3/4 m-auto py-2 rounded flex justify-center'>
                            Enviar
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Index;
