import Random from "./components/Random";
import Options from "./components/Options";
function App() {
    return (
        <div>
            <div className="text-center container">
                <h1 className="title display-1 text-warning mt-3">
                    What To Eat?
                </h1>
                <Random />
                <Options />
            </div>
        </div>
    );
}

export default App;
