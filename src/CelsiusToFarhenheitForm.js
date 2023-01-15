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
        <form>
            <label>
                Degrees Celsius:
                <input type="number" value={celsius} onChange={handleCelsiusChange} />
            </label>
            <br />
            <label>
                Degrees Fahrenheit: {fahrenheit}
            </label>
            <br />
            <button type="button" onClick={registerValue}>Enregistrer</button>
        </form>
    );
}

export default CelsiusToFahrenheitForm;