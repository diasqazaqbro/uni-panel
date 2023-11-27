import styles from "./Dashboard.module.scss";
import { ChartArea } from "../../features/Chart/ChartArea";
import Gpt from "../../features/Gpt";
const Dashboard = () => {
  return (
    <>
      <Gpt />
      <div className={styles.charts}>
        <div className={styles.item}>
          <ChartArea />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
