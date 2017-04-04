
## HTML
Elements (p, head, body, h1, li) are composed of tags (starting and ending). You need
both in all but a few cases.

Attributes are properties that we assign to elements. Some are required, most are
optional.
    - Required: (<a href="">, <img src="">)
    - Optional: (<p class="banner">, <button id="mainButton">)

The 'content' of an element is what comes between the starting and ending tag.

It's possible to put CSS and JS in an HTML file, but this is not common today. Instead
we separate out each into their own files to reduce complexity for human-folk.

## CSS

p.highlight {
    text-decoration: underline;
}

p.highlight     => 'selector'
text-decoration => 'property'
underline       => 'value'
(all together)  => 'rule'

There are three basic types of selectors: elements, class (.), and ID (#). We can
combine selectors in a variety of ways.

Every element has a box made up of four other boxes. Content is innermost and contains
the content of the element (text, picture, etc). Border is the edge of element.
    - Padding is the space between the content and the border.
    - Margin is the space beyond the border.

The 'normal' rules of the universe in CSS are governed by the 'box model' (everything
has these boxes, which are either block, inline, inline-block, or flex).

Sass is a tool that makes it easier to organize CSS. In particular, it helps keep
our code DRY (non-repetitive, Don't Repeat Yourself).