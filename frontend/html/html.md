## Boilerplate

- Boilerplate is a standard and a minimal code that is required to create a functional webpage.In essy words, it is just a skeleton code which is pre-written.

### basic html tags

#### Heading tag: This tag is used to give heading to your webpage.There are 6 different types of heading tags.These are : `<h1>,<h2>,<h3>,<h4>,<h5>,<h6>`

- H1 means that the size would be the mazimum here. As you go down the numbers, i.e 2,3,4,5,6 (H2,h3,h4,h5,h6), the font size will keep on decreasing.

`    <h1>This is heading 1</h1>
    <h2>This is heading 2</h2>
    <h3>This is heading 3</h3>
    <h4>This is heading 4</h4>
    <h5>This is heading 5</h5>
    <h6>This is heading 6</h6>`

#### Paragraph tag.

- This tag is used to create a paragraph in your webpage.
- You can use it to write a long text or a short text.
- To use a paragraph tag, you have to enclose it with `<p>This is a paragraph tag</p>`

#### Bold tag

- This tag is used to make the text bold.
- You can use it to make a text bold by enclosing it with `<b>This is a bold</b>`

#### Hr tag

- This tag is used to create a horizontal line in your webpage.
- You can use it to create a horizontal line by using `<hr>` tag.

#### Link tag

- This tag is used to create a link in your webpage.
- You can use it to create a link by using `<a href="link">Visit this site</a>`
- a here stands for anchor tag.

#### Image tag

- This tag is used to add an image in your webpage.
- You can use it to add an image by using `<img src="link" alt="An image">`

#### Lists

- This tag is used to create a list in your webpage.
- There are two types of lists, ordered list and unordered list

##### Unordered List

- This does not have an order.
- The tag used for creating an unordered list is `<ul>`
- Ul tag is a parent tag which with the help of `li` tag is used to add lists in the unordered lists.

For example:

```
<ul> <li> Kadhai paneer</li> <li> Rajma chawal</li> <li> Paneer tikka</li> </ul>
```

##### Ordered List

- This has an order.
- If we use an order tag, the lists would be in a numbered foramt (1,2,3 etc)
- The tag used for creating an ordered list is `ol`
- Ol tag is a parent tag which with the help of `li` tag is used to add lists in the ordered manner
  For example:

```
<ol> <li> Kit kat shake</li> <li> Oreo shake</li> <li> Virgin Mojito's</li> </ol>
```

### Table tag

- This tag is used to create a table in your webpage.
- There are a couple of tags which make up a final table.
- The outmost parent tag here is `<table></table>`
- To add rows in a table we use `<tr></tr>`
- For adding values in each row, we use `<td></td>`
- If you want to add a heading in your table, you can simply use a `<th> </th>` tag

#### Attributes in tables
- `border` attribute is used to add a border to the table.
- `cellspacing` attribute is used to add a space between the cell and the border.
- `cellpadding` attribute is used to add a space between the cell and the content.
- For example:

```
 <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
      <tr>
        <td>Ritik</td>
        <td>20</td>
        <td>Male</td>
      </tr>
       <tr>
        <td>Himanshu</td>
        <td>22</td>
        <td>Male</td>
      </tr>
       <tr>
        <td>Akash</td>
        <td>24</td>
        <td>Male</td>
      </tr>
       <tr>
        <td>Navneet</td>
        <td>25</td>
        <td>Male</td>
      </tr>
```
