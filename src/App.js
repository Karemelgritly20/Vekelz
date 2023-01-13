import Header from "./components/Header/Header";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Products from "./components/Products/Products";
import Booking from "./Pages/Booking/Booking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
 {/* <div style={{display: 'flex' , flexDirection:'column'}}>
     <div className={styles.app}>
       <div className={styles.sidebar}>
         <Sidebar />
       </div>
       <div className={styles.header}>
         <Header />
         <Products />
       </div>
       
     </div>
 </div> */}

        <Route index element={<Booking />} />
        <Route path="dashboard" element={<Dashboard />} />

 </Routes>
 </BrowserRouter>
  );
}

export default App;
