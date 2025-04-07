import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./About.css";

export default function About() {
    const discordInvite = "https://discord.gg/CNQPqRG3PC"

    return (
      <div className="about-container">
        <h1>遠州エコビレッジ</h1>
        <h2>遠州エコビレッジに参加しませんか？</h2>
        <p>私は静岡県浜松市でパーマカルチャーと自然農とWEB3が融合したエコビレッジを作ることを目指しています</p>
        <p>ベースとなる考え</p>
        <p>・天然自然の循環の中で暮らそう</p>
        <p>・多様性を歓迎し調和しよう</p>
        <p>・テクノロジーを取り入れよう</p>
        <p>遠州エコビレッジはボトムアップの意思決定を持つ小規模分散型社会の１つのコミュニティです</p>
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
  