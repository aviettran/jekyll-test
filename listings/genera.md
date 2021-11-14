---
title: Genera
layout: custom_default
permalink: /genera/
---
{% for genus in site.data.genera %}
[{{ genus.genus }}]({{ genus.genus | downcase | relative_url}})
{% endfor %}
