import Header from "../../components/Header/Header";
import styles from "./Booking.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Products from "../../components/Products/Products";
function Booking() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.header}>
          <Header />
          <Products />
        </div>
      </div>
    </div>  
  );
}

export default Booking;
