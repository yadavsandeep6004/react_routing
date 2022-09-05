import styles from "./style.module.css";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  const [SearchParams] = useSearchParams();
  return (
    <div className={styles["user-details"]}>
      <h3 className={styles.h3}>UserId : {params.userId} </h3>
      <h3 className={styles.h3}>Username : {SearchParams.get("username")} </h3>
      <h2 className={styles.h2}>Name : {SearchParams.get("name")}</h2>
      <p className={styles.p}>Email : {SearchParams.get("email")}</p>
      <p className={styles.p}>Website : {SearchParams.get("website")} </p>
    </div>
  );
};

export default UserDetails;
