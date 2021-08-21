import Random from "./components/Random";
import Button from "./components/Button";
function App() {
    return (
        <div>
            <div className="text-center">
                <h1 className="title display-1 text-warning">What To Eat?</h1>
                <Random />
                <Button />
            </div>
        </div>
    );
}

export default App;
