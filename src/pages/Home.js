import { Link } from "react-router-dom";
import "./Home.css"; // CSSファイルをインポート

export default function Home() {
  return (
    <div className="home-container"
      style={{
        backgroundImage: "url('/homepage_top.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}>
      <h1>遠州エコビレッジ</h1>
      <Link to="/about" className="button">入口</Link>
    </div>
  );
}
