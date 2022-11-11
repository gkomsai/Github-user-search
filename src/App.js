import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes.jsx";


function App() {
  return (
    <Box w="100%">
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
