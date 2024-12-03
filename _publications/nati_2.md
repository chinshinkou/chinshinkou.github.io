---
title: "A study on estimating the accurate head IMU motion from Video"
collection: publications
category: national conference
permalink: /publication/nati_2
excerpt: 'Inertial measurement unit (IMU) data have been utilized in human activity recognition (HAR)...'
date: 2022-07-06
venue: 'マルチメディア, 分散, 協調とモバイルシンポジウム 2022 論文集'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://cir.nii.ac.jp/crid/1050011771467456512'
citation: 'M. Lu, and C. Chen, "A study on estimating the accurate head IMU motion from Video," マルチメディア, 分散, 協調とモバイルシンポジウム 2022 論文集 2022 (2022): 918-923.'
---

Inertial measurement unit (IMU) data have been utilized in human activity recognition (HAR). In recent studies, deep learning recognition for IMU data has caught researchers' attention for the capability of automatic feature extraction and accurate prediction. On the other hand, the challenge of data collection and labeling discourages researchers to step into it. IMUTube provides a solution by building up a pipeline to estimate virtual IMU data from YouTube videos for body motion. For head motion data, several methods, such as OpenFace 2.0 provide the function of predicting facial landmarks and calculating head facing angle from video. However, to our knowledge, there is no study focusing on estimating IMU data from human head motion. In our previous work DisCaaS, we created the M3B dataset which contains IMU and 360-degree video data from the meeting. We exploit head motion data extraction models to predict participants' nodding and speaking gestures. In order to further improve the performance of nodding recognition, in this paper, we are interested in understanding the quality of estimated gyro data calculated from these existing head motion models. We investigate the difference between the motion data estimated from video and those measured by a 9-axis sensor not only in the time domain but also in the frequency domain. Finally, we discuss the future direction of the result.

