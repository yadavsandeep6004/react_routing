import { Link, createSearchParams,useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const BlogCard = ({ data }) => {

  const nevigage=useNavigate()
  const linkurl = `${data.id}`;

  const onReadMore = () => {
    nevigage({
      pathname:linkurl,
      search:createSearchParams(data).toString()
    })
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.h3}>{data.date}</h3>
      <h2 className={styles.h2}>{data.title}</h2>
      <p className={styles.p}>{data.description}</p>
      {/* <Link to={"" + data.id} className={styles.btn_primary}>
        Read More
      </Link> */}
       &nbsp; &nbsp;
      <Link
        to={`${linkurl}?${createSearchParams(data)}`}
        className={styles.btn_primary}>
        Read More
      </Link>
      &nbsp; &nbsp;
      <button type="button" className={styles.btn_primary} onClick={onReadMore}>
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
