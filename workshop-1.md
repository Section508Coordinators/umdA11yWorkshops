---
layout: home
title: "Workshop 1"
permalink: /workshop-1/
workshop: workshop-1
---
This Workshop includes the following test cases:
<ul>
{% for testcase in site.testcases %}
        {% if testcase.workshop == page.workshop %}
        <li><a href="{{ testcase.url | prepend: site.baseurl }}">
                {% if testcase.layout == "shortcase" %}
                        {% if testcase.short-title %}
                                {{testcase.short-title}}
                        {% else %}
                                {{testcase.title}}
                        {% endif %}
                {% else %}
                        {% if testcase.short-title %}
                                {{testcase.short-title}} - {{testcase.title}}
                        {% else %}
                                {{testcase.title}}
                        {% endif %}
                {% endif %}
        </a></li>
        {% endif %}
{% endfor %}
</ul>