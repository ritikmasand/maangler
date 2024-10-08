### Intoduction to CSS

- What is css?

1. Css (Cascading style sheet) is used to style and layout webpages, including elements like fonts,colors,spacing (Margins and padding) etc.
2. The extension for css is .css. For example (Filename.css).

### Types of css

#### Inline css

- Directly adding css styles to an html element.
- same line ✅
- same file ✅

```
<h1 style = "color: red"> This is a heading tag </h1>
```

#### Internal css

- Adding css styles to the head of an html document.
- The style tag `<style>` tag is used to add the css
- same line ❌
- same file ✅

for example:

```
<head>
<style>
h1 {
    color: red;
    }
    </style>
    </head>
```

#### External css

- Adding css styles in a separate file.
- The link tag `<link>` is used to link the external css file in the html file
- same line ❌
- same file ❌

  for ex:

```
<link rel="stylesheet" href="styles.css">
```

### Css selectors

- Used to select elements in the html document and which further helps of in providing styling to our tags.

#### Types of selectors

1. Elememt selector: Targets all elements of specific type.

```
p{
    color: blue;
}
```

2. Class selector: Targets elements with a specific class only.

```
<h3 class="highlight"> this is heading 3 </h3>
```

- To use a class selector inside your css file, we use a dot(.) notation.

```
.highlight{
    color: violet;
}
```

3. Id selector: Targets elements with a specific id only.

```
<h3 id="id_tag">This is h3 tag with an id selector <h3>
```

- To use an id selector inside your css file, we use a # symbol.

```
#id_tag{
    color: red;
    }
```

#### Grouping of selectors

- Given a condition- we have to apply same styling to differnt selectors, so instead writing down each selector differently, we can group them
- This helps us in writing a neat and a clean code.
- For example:

```
.a,
.b,
.c {
  background-color: aqua;
}
```

#### descendant selectors

- This is used to select elements that are nested inside another element.
- We use a space to separate the two selectors.

for example:

```
h1 p {
  background-color: brown;
}
```

#### Colors and backgrounds

1.  Color: Applying colors to text.

- You can either give a color name or just provide a 6 character hex code.
- The hex always starts with a #

```
h1{
    color:blue;
}
h2{
    color:#0043b8
}
```

2. backgrounds

- Backgrounds are used to give properties to the backgrounds.

```
background-color:#ff0000;
```

- background-image: url('image.jpg');
- background-repeat:no-repeat/repeat
- background-size:cover;

#### Fonts and text Styling

1.  Font family: This is used to select the font family of the text.
    This helps to provide different font styles to our html tags.

```
body{
    font-family:Arial, sans-serif;

}
```

2.  Font size: This is used to select the size of the font.
    This helps to provide different font sizes to our html tags.

3.  Font weight: This is used to determine the thickness of the text

```
font-size:16px;
font-weight:bolder;
```

4. Text Styling

- Align-items:
- Text-align: left/right/center
- Text-decoration: underline/overline/line-through,dotted,dashed.

```
p {
  text-align: right;
  text-decoration:overline;
}
```

5. Line height

- This is used to set the space between lines of text.

6. Letter spacing

- This is used to set the space between letters of text.
  For example:

```
.e {
  line-height: 15px;
  letter-spacing: 20px;
}
```

#### Border, Padding and Margins

1. Border: This is used to add a border around an element.
2. Padding: This is used to add space between the content and the border of an element.
3. Margin: This is used to add space between an element and other elements.

For example:

```
.e {
  line-height: 15px;
  /* letter-spacing: 20px; */

  border: 6px solid rgb(131, 13, 13);
  padding: 15px;
}
.d {
  border: 8px solid yellow;
  /* margin: 15px; */
  margin-left: 30px;
  margin-bottom: 30px;
}

```

#### Css Box Model

- The css box model is essentially a box that wraps every html element. It consists of : Content,Padding, borders and margins.

#### Some more important css stylings

1. Height: As the name suggests, It specifies the height of a tag.
2. Width: As the name suggests, It specifies the width of a tag.
   For example:

```
.dd {
  border: 2px solid red;
  height: 200px;
  width: 600px;
  padding: 40px;
}
```

3. Display: This is used to change the behaviour of the display for you tags.

- For example: We know that the default behaviour of div tag is block and that of span is inline.If we want to change their default behaviour, we can do it

```
div {
  display: inline;
}

span {
  display: block;
}

```

#### Media queries

- Media queries helps us to get a responsive design.That means using media queries you can apply different types of styles for the same set of tags with different dimensions.
- Using media queries, we adjust our code in a way such that it is suited for all screen sizes i.e
  desktop,mobile,tablets etc,smartwatches etc.

#### Min-width

- This is the minimum width that should in order for a styling to work.
- For example:

```
@media (min-width: 900px) {
  #parent {
    display: flex;
    flex-direction: column-reverse;
    border: 5px dotted purple;
    border-radius: 30%;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-color: cornflowerblue;
  }
  #part1 {
    font-size: larger;
    font-weight: bold;
    color: brown;
  }
  #part2 {
    font-size: larger;
    font-weight: bold;
    color: rgb(22, 111, 8);
  }
  #part3 {
    font-size: x-small;
    font-weight: bold;
    color: rgb(80, 2, 54);
  }
}

@media (max-width: 320px) {
  #parent {
    display: flex;
    flex-direction: column;
  }
}

```
- In the above code, the styles inside the parent div media query will be applied when the screen width is greater than or equal to 900px because we have specified the minimum width as 900.

#### max-width
- This is the maximum width that should be there in order for a styling to work.
- For example:
```
@media (max-width: 600px) {
  #parent {
    border: 4px solid red;
    display: flex;
    flex-direction: row-reverse;
    /* justify-content: end;
    align-items: end; */
    height: 300px;
    /* width: ; */
  }
  #part1 {
    background-color: blueviolet;
    height: 200px;
  }
  #part2 {
    background-color: rgba(77, 77, 169, 0);
    height: 200px;
  }
  #part3 {
    background-color: bisque;
    height: 200px;
  }
}
```
In the above code, the styling for media query will only work once the size of the screen reaches 600px or below because in this case I have set the maximum width as 600px.

