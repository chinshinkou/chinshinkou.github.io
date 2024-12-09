---
title: "マルチモーダルなマイクロ行動分析に基づく複数人会議の定量化"
collection: publications
category: Japanese national conference
permalink: /publication/nati_1
excerpt: '本研究では、オンライン会議の定量評価に着目し...'
date: 2022-06-20
venue: ' 第36回人工知能学会全国大会'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://www.jstage.jst.go.jp/article/pjsai/JSAI2022/0/JSAI2022_1P1GS1004/_article/-char/ja/'
citation: ' 陳辰昊, 徳原耕亮, 荒川豊, 渡邉洸、石丸翔也, "マルチモーダルなマイクロ行動分析に基づく複数人会議の定量化," 人工知能学会全国大会論文集 第36回全国大会 (2022), no. 1P1-GS-10-04.'
---

本研究では、オンライン会議の定量評価に着目し、ミーティング中よく発生する三つのマイクロ行動「発話」、「頷き」、「笑顔」を正確に検出し、エンドツーエンドのオンライン会議定量化システムを提案する。話者認識（ASD）システムでは、音声と映像の時系列情報を抽出するエンコーダ、cross-attentionによるモーダル情報インタラクションモジュール、および長期的な発話特徴を捉えるためのself-attentionモジュールが含まれてる。頷き検出のため、頭部姿勢推定（HPE）の研究で提案されたWHENetモデルに基づいて、頭部のピッチ方向を入力特徴として、GRUによる頷き認識システムを構築する。笑顔検出はHaarカスケード分類器を用いる。K-分割交差検証法によって提案手法を評価した結果、各モジュールのF値はそれぞれ94.9%、79.67%、71.19%であった。

