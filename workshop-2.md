---
layout: home
title: "Workshop 2"
permalink: /workshop-2/
workshop: workshop-2
---
This Workshop includes the following test cases:
<ul>
{% for testcase in site.testcases %}
        {% if testcase.workshop == page.workshop %}
        <li><a href="{{ testcase.url | prepend: site.baseurl }}">{{testcase.title}}</a></li>
        {% endif %}
{% endfor %}
</ul>