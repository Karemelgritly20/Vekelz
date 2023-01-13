import Header from "../../components/Header/Header";
import styles from "./Dashboard.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Products from "../../components/Products/Products";
import CarCharts from "../../components/Charts/CarCharts";
function Dashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.header}>
          <Header />
          <CarCharts />
        </div>
      </div>
    </div>  
  );
}

export default Dashboard;
