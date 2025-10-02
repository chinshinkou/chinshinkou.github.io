---
title: "CRNLI: A Textual Entailment Dataset in the Chemistry Domain"
collection: publications
category: international conference
permalink: /publication/inte_1
excerpt: 'Natural language inference (NLI) involves determining the entailment relation between pairs of textual statements...'
date: 2025-08-25
venue: '28th International Conference on Text, Speech, and Dialogue (TSD2025)'
# slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-032-02551-7_9'
citation: 'Chen, C., Masuda, T., Ushiku, Y., Tanaka, S., Saito, K., Hirakawa, T., Yamashita, T., & Fujiyoshi, H. (2025). CRNLI: A Textual Entailment Dataset in the Chemistry Domain. International Conference on Text, Speech and Dialogue.'
---

Natural language inference (NLI) involves determining the entailment relation between pairs of textual statements. Despite substantial progress in recent years, a significant performance gap remains between general-domain benchmarks and domain-specific scenarios, particularly those characterized by dense scientific terminology. In this work, we present a new NLI corpus for the chemistry domain, named CRNLI (ChemRxiv Natural Language Inference). To the best of our knowledge, CRNLI is the first structured dataset designed for chemical NLI. It is constructed from ChemRxiv, a leading preprint repository in chemical sciences. We generate hypothesis-conclusion pairs from the Abstract and Conclusion sections of ChemRxiv papers, covering a broad spectrum of chemical subfields. CRNLI focuses on long-form inference, providing entailment instances that are substantially longer than those in exiting NLI datasets. We benchmark a diverse set of models spanning different architectural paradigms and further propose LANLI (LLMs Adapted for Natural Language Inference), a decoder-only framework tailored for long-form hypothesis verification in chemical contexts. Extensive experiments demonstrate that LANLI outperforms all baseline models by 3.19% in accuracy on the CRNLI test set.
