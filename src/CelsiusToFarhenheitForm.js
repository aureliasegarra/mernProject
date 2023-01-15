import React, { useState } from 'react';

function CelsiusToFahrenheitForm() {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    function handleCelsiusChange(e) {
        setCelsius(e.target.value);
        setFahrenheit((e.target.value * 9/5) + 32);
    }

    function registerValue(fahrenheit){
        console.log("Valeur bien enregistrée en base de donnée !");
    }

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-xs flex justify-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-20">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Celsius</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={celsius} onChange={handleCelsiusChange} type="number" placeholder="Celsius" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >Fahrenheit</label>
                        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{fahrenheit}</div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={registerValue}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>


    );
}

export default CelsiusToFahrenheitForm;