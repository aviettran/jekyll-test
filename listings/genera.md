---
title: Genera
layout: custom_default
permalink: /genera/
---
{% for genus in site.data.genera %}
[{{ genus.name }}]({{ genus.family | append: "/" | append: genus.name | downcase | relative_url}})
{% endfor %}
