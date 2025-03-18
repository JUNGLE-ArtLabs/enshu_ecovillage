import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./About.css";

export default function About() {
    const discordInvite = "https://discord.gg/C9ae763D"

    return (
      <div className="about-container">
        <h1>遠州エコビレッジ</h1>
        <h2>遠州エコビレッジに参加しませんか？</h2>
        <p>私は静岡県浜松市でパーマカルチャーと自然農とWEB3の融合で天然自然の循環の中で生活するエコビレッジを作ることを目指しています。
           いずれ土地を手に入れ家をセルフビルドして自然農で作物を作りDIYで作れるものは作っていくエコビレッジを作っていきたいと思っています。
           地域通貨KAI（貝）でエコビレッジ内での経済の構築、DAOの創設もしていきたいと思っています。
           遠州エコビレッジは小規模分散型でボトムアップの意思決定を持つコミュニティです。</p>
        <p>Discordコミュニティに参加してみてください</p>
        <p>Discordコミュニティは申込みされてこちらで承認したら参加可能となります</p>
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
      </div>
    );
  }
  