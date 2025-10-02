---
title: "Method of Sea Wave Matching Based on Siamese Network"
collection: publications
category: international conference
permalink: /publication/inte_6
excerpt: 'Tsunami is known as one of the most destructive natural disasters...'
date: 2019-08-31
venue: '7th Asia International Symposium on Mechatronics'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://link.springer.com/chapter/10.1007/978-981-32-9441-7_89#citeas'
citation: 'C. Chen, C. Lu and Y. Yang, "Method of Sea Wave Matching Based on Siamese Network," In: Proceedings of the 7th Asia International Symposium on Mechatronics. Lecture Notes in Electrical Engineering, vol 589. Springer, Singapore.'
---

Tsunami is known as one of the most destructive natural disasters. Aiming to measure Tsunami, our laboratory proposes a method based on the binocular stereo vision. As we calculate the 3D coordinates of sea waves, the sea surface height in surveillance area can be measured in real time. Sea wave matching is the key step in the above method. However, because of the wave deformation caused by uneven illuminance and different filming angles, it is difficult to match the deformed sea waves by conventional image processing methods. In this paper, we propose a method of sea wave matching based on Siamese Network. Firstly, we take photos of the sea surface with two cameras. Given the raw photos, we divide them into small blocks of waves. Blocks contains few waves will be removed. Then the remaining blocks from left and right photos will be connected and saved as image samples of training database. Afterwards we establish a siamese network framework consisting of two identical convolutional neural networks (CNN). After being trained by database, the siamese network can measure the similarity metric between the two inputs and tell whether the input waves are matched or not. Experiments on the test database show that our method can match sea waves with approximately 78% accuracy within several seconds. Besides, our network is self-adaptive to different sea wave photos as well as to different camera settings.
