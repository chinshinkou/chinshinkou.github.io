---
title: "Quantitative Evaluation System for Online Meetings Based on Multimodal Microbehavior Analysis"
collection: publications
category: journal
permalink: /publication/journal_1
excerpt: 'Maintaining a positive interaction is the key to a healthy and efficient meeting...'
date: 2022-08-01
venue: 'Sensors & Materials'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://sensors.myu-group.co.jp/sm_pdf/SM3020.pdf'
citation: 'C. Chen, Y. Arakawa, K. Watanabe and S. Ishimaru, "Quantitative Evaluation System for Online Meetings Based on Multimodal Microbehavior Analysis", Sensors & Materials, 34.'
---

Maintaining a positive interaction is the key to a healthy and efficient meeting. Aiming to improve the quality of online meetings, we present an end-to-end neural-network-based system, named MeetingPipe, which is capable of quantitative microbehavior detection (smiling, nodding, and speaking) from recorded meeting videos. For smile detection, we build a neural network framework that consists of an 18-layer residual network for feature representation, and a selfattention layer to explore the correlation between each receptive field. To perform nodding detection, we obtain head rotation data as the key nodding feature. Then we use a gated recurrent unit followed by a squeeze-and-excitation mechanism to capture the temporal information of nodding patterns from head pitch angles. In addition, we utilize TalkNet, an active speaker detection model, which can effectively recognize active speakers from videos. Experiments demonstrate that with K-fold cross validation, the F1 scores of the smile, nodding, and speaking detection are 97.34, 81.26, and 94.90%, respectively. The processing can be accelerated with multiple GPUs due to the multithread design. The code is available at https://github.com/ humanophilic/MeetingPipe.