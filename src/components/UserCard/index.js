import { Link, createSearchParams } from "react-router-dom";
import styles from "./style.module.css";

const UserCard = (props) => {
  const PATH_URL = `${props.user.id}`;

  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>User-Id:{props.user.id}</h3>
      <h2 className={styles.h2}>Username:{props.user.username}</h2>
      <Link
        to={`${PATH_URL}?${createSearchParams(props.user)}`}
        className={styles.btn_primary}
      >
        More Details
      </Link>
    </div>
  );
};

export default UserCard;
