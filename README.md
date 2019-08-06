# [pixel-drawing](https://adoxography.github.io/pixel-drawing/)

This program is based on an unplugged activity called [Pixel Programming](https://docs.google.com/document/d/1S__G3fasIgUhkeCkbC91TXHmhOF_MgwdKarz80bsvFE/edit?usp=sharing) from [Canada Learning Code](https://www.canadalearningcode.ca). It uses a simple domain-specific language (DSL) to demonstrate how simple instructions can be given to a computer.

## Usage

### Online
Pixel drawing is hosted on github; you can work with it online [here](https://adoxography.github.io/pixel-drawing).

### Offline
The entire program is self-contained in the repository. Just download it (e.g. `git clone https://github.com/adoxography/pixel-drawing`) and open `index.html` in your browser of choice.

## Syntax

### Expressions
The simplest **expression** is just a colour code; for example, this program would draw a single red pixel in the top left corner:

```
r
```

Multiple expressions can be given on a single line. Just put a space between them! This program would draw three red pixels:

```
r r r
```

We can shorten this program, though, by specifying a number in front of the colour code. This program is equivalent to the one above:

```
1r 1r 1r
```

The shortened version looks like this:

```
3r
```

The semicolon (`;`) can be used to end a line. Any expressions after a semicolon will be drawn on a new line. For example, this program would draw a 3x3 red square in the top left corner:

```
3r; 3r; 3r;
```

To make your code easier to read, though, you'll probably want to format it like this:

```
3r;
3r;
3r;
```

### Loops
Using numbered expressions is already a kind of loop, but there is syntax for more advanced loops. Take this program, for example:

```
2r 2y 2r 2y 2r 2y;
```

Here, the program `2r 2y` is repeated three times. This program does exactly that:

```
3[2r 2y];
```

Looping can be done over multi-line programs as well. For example, this program is really expressing a multi-line loop:

```
r y;
r y;
r y;
```

Using the looping syntax, it can be rewritten like this:

```
3[r y;]
```

## Licenses
* This project: [MIT](https://github.com/adoxography/pixel-drawing/blob/master/LICENSE)
* The [p5.js](https://github.com/processing/p5.js) library: [GNU Lesser General Public License v2.1](https://github.com/processing/p5.js/blob/master/license.txt)
* The [vue.js](https://vuejs.org) library: [MIT](https://github.com/vuejs/vue/blob/dev/LICENSE)
* The [bulma](https://bulma.io) library: [MIT](https://github.com/jgthms/bulma/blob/master/LICENSE)
