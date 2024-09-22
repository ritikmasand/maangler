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
