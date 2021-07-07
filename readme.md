
Installation
---
`cd dart-frontend-assessment`

`npm i`

`npm run serve`

You should now be able to access my assessment at `http://localhost:8080/` in your PC's browser.

  

Submission
---
This submission uses Vue 3, primarily written in TypeScript. Styles are written in Sass and Bootstrap is integrated into the project. Another inclusion is Vuex and strict ESLint rules. This project will fail to compile if there are any ESLint errors detected.

  

Additional Info
---
`('b' + 'a' + + 'a' + 'a').toLowerCase()` = `banana` because JavaScript's engine tries to interpret `+'a'` as a number, which `'a'` isn't and it fails. This can easily be observed when typing `+ '2'` into a console and it resolves as the number `2` instead of string `'2'`.

Setting an empty string or a number instead `+ ''`/`+ '1'` alleviates this problem and resolves to `ba0a` instead of `baNaNa`. The `.toLowerCase()` function just sets the entire string to lowercase.
