import CelsiusToFahrenheitForm from './CelsiusToFarhenheitForm';

function App() {
    return (
        <div className="h-screen bg-slate-300">
            <header className="">
                <p className="font-mono text-5xl text-center mb-20 pt-20">Celsius to Fahrenheit 🌡</p>
                <CelsiusToFahrenheitForm />
            </header>

        </div>
    );
}

export default App;