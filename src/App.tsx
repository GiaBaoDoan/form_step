import FormLayOut from "./components/FormLayOut";
import StepRps from "./components/StepRps";

function App() {
  return (
    <div className="relative">
      <StepRps />
      <div className="bg-blue-50 px-4 flex justify-center items-center min-h-screen">
        <div className="max-md:absolute px-4 top-1/4 w-full flex justify-center">
          <FormLayOut />
        </div>
      </div>
    </div>
  );
}

export default App;
