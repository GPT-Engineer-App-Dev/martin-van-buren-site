import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accomplishments from "./pages/Accomplishments";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/accomplishments" element={<Accomplishments />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
