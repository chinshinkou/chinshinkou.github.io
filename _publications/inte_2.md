---
title: "ToonMeet: A Real-time Portrait Toonification Framework with Frame Interpolation Fine-tuned for Online Meeting"
collection: publications
category: international conference
permalink: /publication/inte_2
excerpt: 'In this paper, we propose ToonMeet...'
date: 2023-11-06
venue: '35th IEEE International Conference on Tools with Artificial Intelligence (ICTAI)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://ieeexplore.ieee.org/abstract/document/10356588'
citation: 'C. Chen, S. Fukushima, Y. Nakamura and Y. Arakawa, "ToonMeet: A Real-time Portrait Toonification Framework with Frame Interpolation Fine-tuned for Online Meeting," 2023 IEEE 35th International Conference on Tools with Artificial Intelligence (ICTAI), Atlanta, GA, USA, 2023, pp. 30-37.'
---

In this paper, we propose ToonMeet, a hybrid frame-work for high-resolution and style-controllable online meeting toonification that ensures real-time operation speed. ToonMeet applies video frame interpolation to traditional portrait toonification pipelines, allowing for the synthesis of intermediate frames between adjacent toonified keyframes, significantly accelerating the overall process and saving computational resources. However, this approach brings a new problem, where prevailing flow-based video frame interpolation methods tend to cause more ghost and blur artifacts in toonified scenes compared to non-toonified scenes, especially when fast-moving objects exist. We study this previously undiscussed problem and explore its causes. To address this, we introduce a new dataset called TM3B (Toonified Multi-modal Meeting Behaviors), offering high-resolution and cross-platform multi-modal stylized meeting data of Japanese youth in various scenarios. Then, we fine-tune ToonMeet on these tailored data and the resulting model presents improved optical flow estimation ability on toonified videos. Extensive experiments demonstrate that ToonMeet can achieve great spatiotemporal performance and perform high-quality toonification of online meetings with real-time operation speed.