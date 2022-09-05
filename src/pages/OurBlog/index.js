import BLOG_DATA from "../../constants/blog-data";
import BlogCard from "../../components/BlogCard";
import styles from "./style.module.css";

const OurBlog = () => {
  return (
    <div className={styles.grid}>
      {BLOG_DATA.map((item) => (
        <BlogCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default OurBlog;
