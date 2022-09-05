import styles from "./style.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

const User = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((errer) => {
        console.log(errer);
      });
  }, []);

  return (
    <div className={styles.grid}>
      {!data
        ? "Lowding..."
        : data.map((item) => <UserCard user={item} key={item.id} />)}
    </div>
  );
};
export default User;
