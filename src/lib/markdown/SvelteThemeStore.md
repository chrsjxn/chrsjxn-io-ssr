# Building a simple theme store with Svelte

11/18/2020

Dark mode has been gaining in popularity over the past few years, and now all of the major operating systems support a global dark theme. And a lot of major sites offer a dark mode toggle. But with modern browsers we can do better! We can use the user's OS preference to show them the color theme they prefer when they first land on our sites!

This tutorial is going to teach you how to detect a user's OS theme in CSS and JavaScript, as well as how to build a Svelte store to respond to theme changes.

## Detecting dark mode in CSS

The secret to detecting a user's OS theme is the media query `prefers-color-scheme`. The two major options are light and dark, and we can easily use them to define CSS variables to apply these themes for an entire site.

```css
@media (prefers-color-scheme: dark) {
  --background-color: midnightblue;
}

@media (prefers-color-scheme: light) {
  --background-color: snow;
}
```

## Detecting dark mode in JavaScript

We can use the same media query to detect a user's OS theme in JavaScript, as well!

JavaScript supports executing any media query with [`window.matchMedia`](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia). The call returns a `MediaQueryList` object that supports two features we'll need when we build the Svelte store.

The two properties we care about are `matches`, for checking the result of the media query, and `addListener` for detecting changes.

```javascript
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

const darkModeEnabled = darkModeQuery.matches

darkModeQuery.addListener(event => {
    console.log('Theme changed to:', event.matches ? 'dark' : 'light')
})
```

## Building our Svelte store

The CSS approach is very useful for a static site, but as we add components or import libraries that need to know about our theme, it becomes more important to have a single source of truth for that data in our app.

So let's build a theme store for a Svelte app!

We start by defining our writable store based on the user's OS theme when the store is first loaded:

```javascript
import { writable } from 'svelte/store'

// Set up our MediaQueryList
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

// Initial theme config from current state
export const theme = writable(prefersDarkMode.matches ? 'dark' : 'light')
```

This is a great start, and it's probably enough for many apps, because users don't change their OS themes too often. But it's only a little bit more work to add an event listener to detect changes:

```javascript
// Update the store if OS preference changes
const updateThemeOnChange = e => theme.set(e.matches ? 'dark' : 'light')
prefersDarkMode.addListener(updateThemeOnChange)

// Export a function to clean up the listener if needed
export const cleanUp = () => prefersDarkMode.removeListener(updateThemeOnChange)
```

Putting all of this together, we have a simple theme store that responds to OS theme changes quickly! If you want to see a demo, you can check it out [on the Svelte REPL](https://svelte.dev/repl/15a88f72670845b4a173bc558fd537f9?version=3.29.7)!

## Caveats
There are a few small gotchas with this approach that might result in your users seeing the wrong theme.

A few browsers, including IE, do not support the media query we're using. However, nearly all browsers support `matchMedia`, so they should fall back to whichever theme you picked as the default. For full details, see [Can I use prefers-color-scheme?](https://caniuse.com/prefers-color-scheme).

And if you enable some privacy settings, like `privacy.resistFingerprinting` in Firefox, this media query will default to the light theme. For more details here, see [prefers-color-scheme on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

## Next steps!

This simple store is only a few lines of code, thanks to the power of the prefers-color-scheme media query. So I want to leave you with some suggestions for work you could do to learn a little more!

The Svelte store I'm using here is relatively simple. We set an initial value when we create it with `writable`, and we can update the value with `set`. Can you write a React hook for this state, or implement the store in another state library?

It's great to respond to user preferences, but what if the user wants to use your app with a different theme? Can you update the store to change themes when the user pushes a button? Can you update the store so that our app theme is independent from the OS theme, after they've pushed that button?

Happy coding!
