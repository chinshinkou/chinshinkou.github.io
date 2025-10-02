---
title: "An End-To-End Hybrid Overhead Facial Orientation Estimation System for Offline Group Discussions"
collection: publications
category: international conference
permalink: /publication/inte_2
excerpt: 'Aiming to evaluate the concentration and engagement level in offline group discussion scenarios...'
date: 2023-11-29
venue: '14th International Conference on Mobile Computing and Ubiquitous Network (ICMU)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10412258'
citation: 'C. Chen, Y. Nakamura and Y. Arakawa, "An End-To-End Hybrid Overhead Facial Orientation Estimation System for Offline Group Discussions," 2023 Fourteenth International Conference on Mobile Computing and Ubiquitous Network (ICMU), Kyoto, Japan, 2023, pp. 1-6.'
---

Aiming to evaluate the concentration and engagement level in offline group discussion scenarios, we seek to capture the interaction information among meeting participants. In this paper, we focus on the facial orientation and present an end-to-end hybrid system capable of 2D overhead facial orientation estimation. Compared to common perspectives from which personal identity information is exposed, we explore approaches to perform overhead facial orientation estimation due to the privacy problem. The proposed system is a neural network-based architecture and composed of three modules. First we leverage and train from scratch the YOLOv8 model on the HollywoodHeads dataset, which allows full-perspective head detection in visual scenes. With the obtained head location, we then generate the corresponding head masks from the visual information within the bounding box. Finally, we fit them to ellipse so that 2D overhead facial orientation of all the meeting participants in the visual scenes can be estimated with the ellipse properties. Experiments demonstrate that our system achieves an MAE of 12.47 on the test dataset.