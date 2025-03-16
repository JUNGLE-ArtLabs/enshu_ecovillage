import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./About.css";

export default function About() {
    const discordInvite = "https://discord.gg/C9ae763D"

    return (
      <div className="about-container">
        <h2>遠州エコビレッジに参加しませんか？</h2>
        <p>私は静岡県浜松市でパーマカルチャーと自然農とWEB3の融合で</p>
        <p>天然自然の循環の中で生活するエコビレッジを作ることを目指しています。</p>
        <p>いずれ土地を手に入れ家をセルフビルドして自然農で作物を作りDIYで作れるものは作っていく</p>
        <p>エコビレッジを作っていきたいと思っています。</p>
        <p>地域通貨KAI（貝）でのエコビレッジ内での経済の構築、DAOの創設もしていきたいと思っています。</p>
        <p>まずはDiscordのチャンネルに参加してみてください</p>
        <p>Discordのチャンネルは応募されてこちらで認証したら参加可能となります</p>
        <br />

        {/* QRコード表示 */}
        <div className="qr-code-container">
          <QRCodeCanvas value={discordInvite} size={150} />
        </div>

        {/* Discordボタン */}
        <a
          href={discordInvite}
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button">
            Discordに参加
          </a>
        <br />
        <Link to="/" className="about-button">←戻る</Link>
      </div>
    );
  }
  