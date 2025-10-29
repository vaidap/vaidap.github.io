---
layout: layout.html
---

# Portfolio

I've freelanced as a video game UI/UX designer for [Strange Scaffold](https://www.strangescaffold.com/) on the following projects:

2025 | UI Designer on [Teenage Mutant Ninja Turtles: Tactical Takedown](https://store.steampowered.com/app/3229100/Teenage_Mutant_Ninja_Turtles_Tactical_Takedown/)

{% for project in collections.portfolio %}
{{ project.date | toISOYear }} | <a href="{{ project.url }}">{{ project.data.title }}</a>
{% endfor %}

I've also made a bunch of microgrames, they're on [itch.io](https://vaidap.itch.io/).

🚧 Page under construction -- more to be added!