---
layout: layout.html
---

Welcome to my corner of the web!

Hi! I'm Vaida, a designer based in Edinburgh, Scotland. On this website, you can read my [blog](/blog/), browse my [portfolio](/portfolio/), and find out more [about me](/about/).

## Latest posts

{% assign newest_first = collections.blog | reverse | slice: 0, 5 %}
{% for blog in newest_first %}
<p>{{ blog.date | toISODate }} — <a href="{{ blog.url }}">{{ blog.data.title }}</a></p>
{% endfor %}

[See all posts](/blog/)