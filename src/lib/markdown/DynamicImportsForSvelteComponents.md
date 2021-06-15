# Building a blog with Svelte: Dynamic imports For Svelte components

02/17/2021

[Dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) are a really powerful JavaScript feature. Loading modules only when needed can significantly speed up the initial load of a single page application.

There is a cost, of course. Loading pages that aren't included in your initial bundle will be slower. But if you pick less popular pages to dynamically import—like account settings—most of your users will never have to pay that cost!

So how do we take advantage of dynamic imports with Svelte?

## Enter `<svelte:component>`

Svelte provides a special element for rendering components dynamically, `<svelte:component>`! The example from the [official tutorial](https://svelte.dev/tutorial/svelte-component) renders different components based on a user interaction, but the fundamentals are exactly what we need!

So let's set up a quick example with a static import first:

```svelte
<script>
  import About from './Routes/About.svelte'
</script>

<svelte:component this={About}>
```

## Making it dynamic

This example isn't very useful yet. Of course, we could always render our about page using the component directly: `<About />`. So let's make it dynamic!

```svelte
<script>
  import { onMount } from 'svelte'
  import Error404 from './Routes/Error404.svelte'

  let dynamicPage = null

  onMount(async () => {
      try {
          dynamicPage = (await import('./Routes/About.svelte')).default
      } catch (e) {
          // Handle errors if the dynamic route doesn't load:
          dynamicPage = Error404
      }
  })
</script>

<svelte:component this={dynamicPage}>
```

Let's break down the changes into smaller pieces, to understand what each change is doing with this dynamic route.

### Initial component setup

We're using [`onMount`](https://svelte.dev/tutorial/onmount) to trigger the dynamic import when this component is first rendered. My blog uses [page.js](https://github.com/visionmedia/page.js) as a router, so these dynamic imports are triggered by page transitions, but the logic is the same.

I've also imported an error component that is available in the main bundle, just in case there's an issue with the dynamic import: `  import Error404 from './Routes/Error404.svelte'`.

`let dynamicPage = null` is a little unusual, but `<svelte:component>` won't render if the value of `this` is [`falsy`](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). We'll update that value once we've loaded the page contents, but initially this will stop our component from rendering any output.

You can replace `null` with other values, if you'd prefer. `undefined`, `false`, `0`, or many other values will behave the same as `null`. Or you could import a loading component to indicate that this content is waiting on a network request.

### Dynamically importing `About.svelte`

`await import('./Routes/About.svelte')` is the expression that dynamically imports the About page, but we have two challenges. 

First, `await` will throw an exception if the promise rejects, so we need a `try/catch` to handle that error. In this case, we're setting `dynamicPage` to indicate that an error has happened: `dynamicPage = Error404`.

Second, `import('./Routes/About.svelte')` resolves to a module object, and `<svelte:component>` needs a component constructor. Looking at our static import, `import About from './Routes/About.svelte'`, we can see that our component is exported as the default export from its module, once it's been bundled. Our dynamic import can access the default export directly on the resolved module: `(await import('./Routes/About.svelte')).default`.

## Managing bundles

One challenge that's less obvious with dynamic imports is how your bundler handles components that are imported from these dynamic chunks. With my rollup config, moving to dynamic imported Svelte components created significantly more dynamic chunks than I expected!

That might make sense for your use case, but I wanted my shared components to be included in the `main` bundle, rather than dynamically imported. I previously split my `node_modules` into a separate bundle, with Rollup's [`manualChunks` option](https://www.chrsjxn.io/svelte/code-splitting), so let's update that config.

My shared components live in `src/Components/`, so we can use that directory to assign modules to chunks:

```javascript
// rollup.config.js:
//...
  output: {
    //...
    manualChunks: (moduleName) => {
      if (moduleName.includes('node_modules')) {
        return 'vendor'
      }

      if (moduleName.includes('src/Components/')) {
        return 'main'
      }
    },
//...
```

## Putting it all together

Our example dynamic `About` page is potentially good enough for your app. It has basic error handling, and we discussed how you'd integrate a loading indicator. But I want to show you an example that's a little bit more complex.

My `App.svelte` sets up a router with some static pages and some dynamically rendered posts. The paths for the dynamic posts are stored in a config object, along with some metadata and a loader function that does the dynamic import.

```javascript
// posts.js
export const posts = [
    {
        path: '/svelte/dynamic-imports',
        loader: () => import('../Routes/DynamicImportsForSvelteComponents.svelte'),
        // ...
    },
    // ...
]
```
&nbsp;
```svelte
<!-- App.svelte -->
<script>
  import About from './Routes/About.svelte'
  import Error404 from './Routes/404.svelte'
  import Home from './Routes/Home.svelte'
  import router from 'page'
  import { posts } from './Modules/posts'

  // Default to showing About:
  let page = About
  let nextPost = null

  // Scroll to top when navigating from the bottom of a post:
  router('*', (_, next) => {
    window.scrollTo({
      top: 0,
      left: 0,
    })

    next()
  })

  // Set up a dynamic route for each post in the config object:
  posts.forEach((post, i) => {
    router(post.path, async () => {
      // Posts take a `nextPost` prop to link to more content:
      nextPost = posts[i + 1]
      try {
        page = (await post.loader()).default
      } catch (err) {
        page = Error404
      }
    })
  })

  // Set up static routes:
  router('/', () => (page = Home))
  router('/about', () => (page = About))
  router('*', () => (page = Error404))

  router.start()
</script>

<svelte:component this={page} {nextPost} />
```

You can see the dynamic imports in action by visiting a post on [my blog](https://www.chrsjxn.io/). If you open up dev tools, you should see the core bundles loaded on the home page, and a small additional bundle loaded when clicking into any post. They're all around 3kB, because they include the markdown content as well as the Svelte component that renders the post, and they should cache very well as long as the content doesn't change.

Hopefully this was useful for you! If you have questions or comments, you can always find me [on twitter](https://twitter.com/c_jackson_js)!