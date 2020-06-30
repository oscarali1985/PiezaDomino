# ![4Geeks Logo](http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks,16) HTML + CSS middle earth football chess!

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/ernestomedinam/middle-earth-football-chess.git)

## What to do next?

Create a `index.html` file with the [basic HTML structure](http://content.breatheco.de/lesson/what-is-html-learn-html#page-structure) and see it live by running web-server using the following command:

```sh
$ pip3 install flask && python3 server.py
```

- You can create as many HTML files you want
- You can also create CSS files and you can import them onto your website using a `<link>` tag placed between the `<head></head>` tags, like this:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```
## What to build

Build field, bench and players, so that your game looks like this: ![Sample image](https://www.awesomescreenshot.com/image/4975113/d2b6a3dcb69a925901262d13cf9b06ae)

### Hints
- Build two sections, one for the field and one for the bench
- All players and lines could be divs
- Have the bench be a flexbox and the field be a 7x7 grid
- Use images on img folder as background images for the players according to their specie