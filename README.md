# README

See https://indepth.dev/posts/1116/angular-web-components-a-complete-guide.

Build webcomponent with:

```
ng build FirstWebComponent
```

Then embed in html with:

```html
<html>
  <head>
    <script src="./polyfills.679e1b6e39790569.js"></script>
    <script src="./runtime.53686c3b24a21c8a.js"></script>
    <script src="./main.2da89b5d5d3cad6d.js"></script>
  </head>
  <body>
    <ui-button test-data="blabla"></ui-button>
  </body>
</html>
```
