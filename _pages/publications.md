---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 3
toc:
  sidebar: left
---

<!-- _pages/publications.md -->

<div class="publications">
  <h2>Journals (International)</h2>
  {% bibliography --query @*[category=journals_international]* %}

  <h2>Journals (Japanese)</h2>
  {% bibliography --query @*[category=journals_japanese]* %}

  <h2>Conferences (International)</h2>
  {% bibliography --query @*[category=conferences_international]* %}

  <h2>Conferences (Japanese)</h2>
  {% bibliography --query @*[category=conferences_japanese]* %}

  <h2>Others</h2>
  {% bibliography --query @*[category=others]* %}
</div>
