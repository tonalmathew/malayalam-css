## മലയാളം CSS

> _ഈ പ്ലഗിൻ മലയാളികൾക്ക്  മാത്രം ഉപയോഗപ്രദമായ ഒന്ന് ആയതുകൊണ്ട് ഈ റീഡ്‌മി ഫയൽ പൂർണമായും മലയാളത്തിൽ തന്നെ ആയിരിക്കും._


### എങ്ങനെ ഇൻസ്റ്റാൾ ചെയ്യാം

- `npm install malayalam-css --save-dev`

- ഇനി postcss ഇൻസ്റ്റാൾ ആക്കാം

  `npm install postcss postcss-cli --save-dev`

### എങ്ങനെ യൂസ് ചെയ്യാം

- `postcss.config.js` ഫയൽ ഉണ്ടാക്കി താഴെ നൽകിയിരിക്കുന്ന കോഡ് പേസ്റ്റ് ചെയ്യുക.

  ```js

    module.exports = {
    plugins: [
      require('malayalam-css')
    ]
  }

  ```

- `package.json` ഫയലിൽ താഴെ നൽകിയിരിക്കുന്ന കോഡ് പേസ്റ്റ് ചെയ്യുക.
  ```json

  "scripts": {
    "build:css": "postcss style.css --dir styles -w"
  }
  
  ```

- ഇനി `npm run build:css` റൺ ചെയ്യുക

### എങ്ങനെ CSS എഴുതാം

ഉദാഹരണം: 

```css

  h1 {
    നിറം: നീല
  }
  div {
    വീതി: 20%
  }

```
---

> _contribute ചെയ്യാൻ താല്പര്യം ഉള്ളവർക് `dict.js` ഫയലിൽ ഇല്ലാത്തത് എല്ലാം കൂട്ടിച്ചേർക്കാവുന്നതാണ്_