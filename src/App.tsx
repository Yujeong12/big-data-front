import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Upload from "./pages/UploadLayout";
import Result from "./pages/ResultLayout";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
