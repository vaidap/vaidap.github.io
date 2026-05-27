---
layout: layout.html
---

# Blog

Also available as an [RSS feed](/feed.xml)!

{% assign newest_first = collections.blog | reverse %}
{% for blog in newest_first %}
<p>{{ blog.date | toISODate }} — <a href="{{ blog.url }}">{{ blog.data.title }}</a></p>
{% endfor %}