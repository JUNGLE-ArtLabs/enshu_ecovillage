import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import "./About.css";

export default function About() {
    const discordInvite = "https://discord.gg/CNQPqRG3PC"

    return (
      <div className="about-container">
        <h1>遠州エコビレッジ</h1>
        <h2>遠州エコビレッジに参加しませんか？</h2>
        <p>私は静岡県浜松市でパーマカルチャーと自然農とWEB3の融合で天然自然の循環の中で生活するエコビレッジを作ることを目指しています。
           いずれ土地を手に入れ家をセルフビルドして自然農で作物を作りDIYで作れるものは作っていくエコビレッジを作っていきたいと思っています。</p>
        <p>パーマカルチャーの領域では本を読んだりパーマカルチャーを実践している所を見学させてもらったりして知見を深めているところです。</p>
        <p>自然農の領域では自然農を実践している農家さんへ研修に通っており、自分でも畑を自然農で実践しています。</p>
        <p>WEB3の領域ではPolygon上で遠州エコビレッジの地域通貨KAIの発行を済ませDiscord内でガバナンストークンKAITOを使った提案・投票のシステムを実装しました。</p>
        <p>遠州エコビレッジはボトムアップの意思決定を持つ小規模分散型社会の１つのコミュニティです。</p>
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
  