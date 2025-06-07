---
layout: layout.html
---

# Blog

Also available as an [RSS feed](/feed.xml)!

{% for blog in collections.blog %}
<p>{{ blog.date | toISODate }} <a href="{{ blog.url }}">{{ blog.data.title }}</a></p>
{% endfor %}