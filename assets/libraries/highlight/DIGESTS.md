## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"
  integrity="sha384-pGqTJHE/m20W4oDrfxTVzOutpMhjK3uP/0lReY0Jq/KInpuJSXUnk4WAYbciCLqT"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/languages/go.min.js"
  integrity="sha384-Mtb4EH3R9NMDME1sPQALOYR8KGqwrXAtmc6XGxDd0XaXB23irPKsuET0JjZt5utI"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-ZCfS+s/zxY7O2bm2KoVJo1wUrLEpJDHZAi/LJAdJF5XjnfSWICkg6wHd2SEJGpyR /es/languages/java.js
sha384-716dHwZ7zbZcnEwTe7DLxlm5tH3Iyl8vSW5a2kYPgusEdp5k3A3jeZt0Ck+CjYE0 /es/languages/java.min.js
sha384-oQpcUGMBf+VDTHOLQ1uhPp1FgNBo0OZc9gbXGuVFwAogHlkh/Iw6cvKKgcgCQkmV /es/languages/javascript.js
sha384-3T8DJ91yCa1//uY9h8Bo4QLrgEtbz4ILN2x9kSM4QWX9/1kKu6UXC3RAbVQV85UQ /es/languages/javascript.min.js
sha384-e+d8RFZbtc5Pmt3xfX9uuElm63v5qOj7T5hAkkFbnYc1wEk7wCLlzOsm66MCf5Uk /es/languages/python.js
sha384-CPHh+9FxkWF3OtMZdTj5oQN1Qti0p4/5XBABz/JdgssOKHmfAOFz6Gu4tsG6MQiH /es/languages/python.min.js
sha384-cZ2d3Mo/jmTF9r2kHWcHmA8hehxX8N44UN6LSkEhaCRe6t8e9ntd5JEuafywm0aw /languages/java.js
sha384-8mc5ynnm3AlnXn8P3ccSqVAaZIDoijPM08/Hp4DABy6GMy7EHCQFwiIUoGAaGJiO /languages/java.min.js
sha384-p/utwvqrRVOLlz0BjJ0BCGCb2liTDipfz47/QmGXz9hoPIjCKYEgmYUC30VmGgZy /languages/javascript.js
sha384-L/XmDiyusXomLRGcRmcBpPlboRFjpQNV747OJvg+sEOpgGYvUsNwcC4JLNQ2dI6O /languages/javascript.min.js
sha384-WNah6F2QDUbmrNCi0fSEyKJbSb01S1ijnoiwbDnegW7dm2Cz/H1CiH1HhWlUvj01 /languages/python.js
sha384-YDj7s2Wf0QEwarV3OB8lvoNJJCH032vOLMDo2HDrYiEpQ+QmKN+e++x3hElX5S+w /languages/python.min.js
sha384-tqiMCsRsKXU9oKclVeG2xTZxHK3EZG7Ng///Eg9hTzMVR/BTbRHmiZquDwklquPr /highlight.js
sha384-Sammu7InlbrWJHgJH8tKlAD+AUmvKH6NL9KjmResxE+z+wSr7pGwQlr1kCHKJvRY /highlight.min.js
```

