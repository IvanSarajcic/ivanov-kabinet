1. увод:

Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[2] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[3]

CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[4] This separation can improve content accessibility, since the content can be written without concern for its presentation; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.

Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternative formatting if the content is accessed on a mobile device.[5]

The name cascading comes from the specified priority scheme to determine which declaration applies if more than one declaration of a property match a particular element. This cascading priority scheme is predictable.

The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.[6]

In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL. CSS is also used in the GTK widget toolkit.

Сажети и превести ан српски


2. синтакса:

ево материјала за ову страницуЧ

CSS Syntax
CSS Syntax
A CSS rule consists of a selector and a declaration block:

CSS selector

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

Example
In this example all <p> elements will be center-aligned, with a red text color:

p {
  color: red;
  text-align: center;
}
Example Explained
p is a selector in CSS (it points to the HTML element you want to style: <p>).
color is a property, and red is the property value
text-align is a property, and center is the property value


одавде само најбитнијеЧ
03 selektori

CSS Selectors
CSS Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

We can divide CSS selectors into five categories:

Simple selectors (select elements based on name, id, class)
Combinator selectors (select elements based on a specific relationship between them)
Pseudo-class selectors (select elements based on a certain state)
Pseudo-elements selectors (select and style a part of an element)
Attribute selectors (select elements based on an attribute or attribute value)
This page will explain the most basic CSS selectors.

The CSS element Selector
The element selector selects HTML elements based on the element name.

Example
Here, all <p> elements on the page will be center-aligned, with a red text color: 

p {
  text-align: center;
  color: red;
}
The CSS id Selector
The id selector uses the id attribute of an HTML element to select a specific element.

The id of an element is unique within a page, so the id selector is used to select one unique element!

To select an element with a specific id, write a hash (#) character, followed by the id of the element.

Example
The CSS rule below will be applied to the HTML element with id="para1": 

#para1 {
  text-align: center;
  color: red;
}
Note: An id name cannot start with a number!

The CSS class Selector
The class selector selects HTML elements with a specific class attribute.

To select elements with a specific class, write a period (.) character, followed by the class name.

Example
In this example all HTML elements with class="center" will be red and center-aligned: 

.center {
  text-align: center;
  color: red;
}
You can also specify that only specific HTML elements should be affected by a class.

Example
In this example only <p> elements with class="center" will be red and center-aligned: 

p.center {
  text-align: center;
  color: red;
}
HTML elements can also refer to more than one class.

Example
In this example the <p> element will be styled according to class="center" and to class="large": 

<p class="center large">This paragraph refers to two classes.</p>
Note: A class name cannot start with a number!

The CSS Universal Selector
The universal selector (*) selects all HTML elements on the page.

Example
The CSS rule below will affect every HTML element on the page: 

* {
  text-align: center;
  color: blue;
}
The CSS Grouping Selector
The grouping selector selects all the HTML elements with the same style definitions.

Look at the following CSS code (the h1, h2, and p elements have the same style definitions):

h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
It will be better to group the selectors, to minimize the code.

To group selectors, separate each selector with a comma.

Example
In this example we have grouped the selectors from the code above: 

h1, h2, p {
  text-align: center;
  color: red;
}
Exercise
?
Which CSS selector is used to select an element with a specific id?


*
.
#
%

All CSS Simple Selectors
Selector	Example	Example description
#id	#firstname	Selects the element with id="firstname"
.class	.intro	Selects all elements with class="intro"
*	*	Selects all elements
element	p	Selects all <p> elements
element,element,..	div, p	Selects all <div> elements and all <p> elements



4. primena...:
How To Add CSS
How to Add CSS
When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.

There are three ways of inserting a style sheet:

External CSS
Internal CSS
Inline CSS
External CSS
With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.

Example
External styles are defined within the <link> element, inside the <head> section of an HTML page:

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
An external style sheet can be written in any text editor, and must be saved with a .css extension.

The external .css file should not contain any HTML tags.

Here is how the "mystyle.css" file looks:

"mystyle.css"
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
Note: Do not add a space between the property value (20) and the unit (px):
Incorrect (space): margin-left: 20 px;
Correct (no space): margin-left: 20px;

Internal CSS
An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the <style> element, inside the head section.

Example
Internal styles are defined within the <style> element, inside the <head> section of an HTML page:

<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
Inline CSS
An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

Example
Inline styles are defined within the "style" attribute of the relevant element:

<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>
Tip: An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.

Multiple Style Sheets
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used. 

Assume that an external style sheet has the following style for the <h1> element:

h1 {
  color: navy;
}
Then, assume that an internal style sheet also has the following style for the <h1> element:

h1 {
  color: orange;   
}
Example
If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange":

<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>
Example
However, if the internal style is defined before the link to the external style sheet, the <h1> elements will be "navy": 

<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
Cascading Order
What style will be used when there is more than one style specified for an HTML element?

All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

Inline style (inside an HTML element)
External and internal style sheets (in the head section)
Browser default
So, an inline style has the highest priority, and will override external and internal styles and browser defaults.






