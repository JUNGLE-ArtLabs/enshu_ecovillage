import { Link } from "react-router-dom";
import "./Home.css"; // CSSファイルをインポート

export default function Home() {
  return (
    <div className="home-container">
      <h1>遠州エコビレッジ</h1>
      <Link to="/about" className="button">入口</Link>
    </div>
  );
}
