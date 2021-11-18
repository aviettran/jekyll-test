---
layout: none
---

var store = [
{%- for family in site.data.families -%}
    {
      "title":
    {{ "[Family] " | append: family.name | jsonify }},
      "excerpt":
    {{ family.description | newline_to_br |
          replace:"<br />", " " |
          replace:"</p>", " " |
          replace:"</h1>", " " |
          replace:"</h2>", " " |
          replace:"</h3>", " " |
          replace:"</h4>", " " |
          replace:"</h5>", " " |
          replace:"</h6>", " " |
          replace:"\n", " " |
        strip_html | strip_newlines | jsonify }},
      "url":
    {{ family.name | downcase | relative_url | jsonify }}
    },
{%- endfor -%}

{%- for genus in site.data.genera -%}
    {
      "title":
    {{ "[Genus] " | append: genus.name | jsonify }},
      "excerpt":
    {{ genus.description | newline_to_br |
          replace:"<br />", " " |
          replace:"</p>", " " |
          replace:"</h1>", " " |
          replace:"</h2>", " " |
          replace:"</h3>", " " |
          replace:"</h4>", " " |
          replace:"</h5>", " " |
          replace:"</h6>", " " |
          replace:"\n", " " |
        strip_html | strip_newlines | jsonify }},
      "url":
    {{ genus.family | append: "/" | append: genus.name | downcase | relative_url | jsonify }}
    },
{%- endfor -%}

{%- for _species in site.data.species -%}
    {
      "title":
    {{ "[Species] " | append: _species.genus | append: " " | append: _species.name | jsonify }},
      "excerpt":
    {{ _species.description | newline_to_br |
          replace:"<br />", " " |
          replace:"</p>", " " |
          replace:"</h1>", " " |
          replace:"</h2>", " " |
          replace:"</h3>", " " |
          replace:"</h4>", " " |
          replace:"</h5>", " " |
          replace:"</h6>", " " |
          replace:"\n", " " |
        strip_html | strip_newlines | jsonify }},
      "url":
    {{ _species.family | append: "/" | append: _species.genus | append: "/" | append: _species.name | downcase | relative_url | jsonify }}
    }
    {%- unless forloop.last -%},
    {%- endunless -%}
{%- endfor -%}
]