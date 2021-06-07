## ARIA: Die Grenzen

- Wo immer native Elemente existieren, sind sie überlegen
- Ein `button`-Element nachzubauen, ist aufwendig:

  - Natives Element:
    ```html
    <button type="button">I'm a button!</button>
    ```
  - Do-it-yourself-Variante:

    ```html
    <span class="button" role="button" tabindex="0">I'm a button, too!</span>

    <script>
      // Trigger `click` event on `enter` and `space`
      document.querySelector(".button").addEventListener(
        "keydown",
        function (event) {
          if ([13, 32].includes(event.keyCode)) {
            event.target.click();
          }
        },
        false
      );
    </script>
    ```
