---
title: "Method of Sea Wave Extraction and Matching from Images Based on Convolutional Neural Network"
collection: publications
category: international conference
permalink: /publication/inte_8
excerpt: 'Tsunami is known as one of the most destructive natural disasters...'
date: 2019-07-02
venue: '5th International Conference on Engineering, Applied Sciences and Technology (ICEAST)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/8802545'
citation: 'C. Chen, C. Lu and Y. Yang, "Method of Sea Wave Extraction and Matching from Images Based on Convolutional Neural Network," 2019 5th International Conference on Engineering, Applied Sciences and Technology (ICEAST), Luang Prabang, Laos, 2019, pp. 1-4.'
---

Tsunami is known as one of the most destructive natural disasters. Aiming to measure Tsunami, our laboratory proposed a method based on binocular stereo vision. As we calculate the 3D coordinates of sea waves, the sea surface height in surveillance area can be measured in real time. Sea wave extraction and sea wave matching are two key steps in the above method. By conventional image processing methods, the effects of sea wave extraction and sea wave matching are not satisfactory because of uneven illuminance and different filming angles. In this paper, we propose a method of sea wave extraction and sea wave matching based on Convolutional Neural Network (CNN). Firstly, we take photos of the sea surface with two cameras. Given the raw photos, we divide them into small blocks of waves. According to the wave quantity in each block, we can build databases for sea wave extraction. And databases for sea wave matching can be built according to the matching situation of two blocks from left and right photos. Then we make use of the open-source software library Tensorflow to establish two CNN frameworks. After being trained by training databases, experiments on the test database show that the two CNN systems can separately extract and match sea waves from photos with considerable accuracy within several seconds. Besides, our network is self-adaptive to different sea wave images as well as to different camera settings.
