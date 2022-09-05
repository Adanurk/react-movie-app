import { Box } from "@mui/system";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Box>
      <Navbar/>
      <AppRouter/>
    </Box>
  );
}

export default App;

