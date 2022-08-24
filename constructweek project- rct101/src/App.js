
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import UpperBar from './Components/Navbar/UpperBar';
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <UpperBar />
     <Navbar />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
