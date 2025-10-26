---
layout: layout.html
---

# Portfolio

🚧 HEAVY CONSTRUCTION - PROCEED AT YOUR OWN RISK 🚧

I've also freelanced as a video game UI/UX designer for [Strange Scaffold](https://www.strangescaffold.com/) on the following projects:
* [Teenage Mutant Ninja Turtles: Tactical Takedown](https://store.steampowered.com/app/3229100/Teenage_Mutant_Ninja_Turtles_Tactical_Takedown/)
* [Life Eater](https://store.steampowered.com/app/2632930/Life_Eater/), which NME has listed as [one of the best games of 2024 so far](https://www.nme.com/features/the-best-games-of-2024-so-far-3767675). Also Markiplier played it and seemed to like it.

I've also made a bunch of microgrames, they're on [itch.io](https://vaidap.itch.io/).

{% for project in collections.portfolio %}
<p><a href="{{ project.url }}">{{ project.data.title }}</a></p>
{% endfor %}