# Building a blog with Svelte: Code splitting

12/2/2020

Last week, I shared the steps I took to add Markdown support to my blog, written in Svelte. And I'm happy with how portable the Markdown content is, and how smooth the authoring experience is with `livereload` in my development environment.

But I do have one more concern that I want to address before I feel good about this solution.

Right now, adding content increases the size of my app bundle. The more I write, the slower my site will be!

So let's fix that with code splitting. We can keep our authoring working with static files in a git repository, and get significantly better cache performance for our assets.

## Adding a vendor bundle

For the first step, we'll split out our `npm` modules into a separate vendor bundle. Rollup will fingerprint that file, so our users will be able to cache it as long as we don't change any of our dependencies!

We're going to use the [`manualChunks`](https://rollupjs.org/guide/en/#outputmanualchunks) option in our rollup config to split our files with a custom function:

```javascript
export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    // Code Splitting requires specific module types, so we'll use EcmaScript modules:
    format: 'es',
    name: 'app',
    // Our output needs to be a directory, instead of a single file:
    dir: 'public/build/',
    manualChunks: (moduleName) => {
      // Every module whose name includes `node_modules` should be in vendor:
      if (moduleName.includes('node_modules')) {
        return 'vendor'
      }
      // Every other module will be in the chunk based on its entry point!
    },
  },
```

But now we have a problem. The HTML template included in the Svelte template doesn't support ES module files by default, and now rollup is generating files with a different name!

So let's fix our HTML now. We need to tell the browser that this script is an EcmaScript module with `type="module"`, and we need to use the updated name, `/build/main.js`.

```html
<!-- Before: <script defer src='/build/bundle.js'></script> -->
<script type="module" defer src='/build/main.js'></script>
```

With those changes, we should be able to run our site in development without any issues. Loading the page will now load two javascript files, `/build/main.js` and a second file `/build/vendor-[hash].js`.

## Removing Markdown from the main bundle

Our vendor bundle should be a big performance benefit, but we still have the problem where adding Markdown content will continue to increase our app size over time.

We can fix that by using the `import()` function to load that content as needed, and rollup will split those chunks for us automatically.

### Adding dynamic imports

We'll start by adding [dynamic imports](https://rollupjs.org/guide/en/#dynamic-import) for the Markdown content to the post components:

```html
<script>
  import { Layout, Markdown } from '../Components'
  import { onMount } from 'svelte'

  let markdown = ''
  
  // When we mount this component, load the markdown chunk:
  onMount(async () => {
    markdown = (await import('../Markdown/AddingMarkdownToSvelte.md')).default
  })
</script>

<Layout>
  <Markdown {markdown} />
</Layout>
```

One of those lines is a little odd, though: `(await import('../Markdown/AddingMarkdownToSvelte.md')).default`. As a side effect of loading this markdown content as an application chunk, it's been packaged as a module! 

This does add a small bit of overhead into the file contents, but it's not much. And it does mean that we need to access the `default` export when we import the module.

### Updating the `Markdown` component

The last change we need to make is to update the `Markdown` component to rerender when its content loads. My initial component assumed the Markdown was fixed as soon as the component was rendered, so we could just render once.

But now, we need to be able to update the Markdown content when the chunk loads, and we'll use `beforeUpdate` from Svelte to do that:

```javascript
  import { beforeUpdate } from 'svelte'

  export let markdown = ''

  let rendered = ''

  beforeUpdate(() => {
    rendered = md.render(markdown)
  })
```

The component will still render the content like before: `{@html rendered}`, but now replacing the markdown will rerender the page.

## Cross-browser compatibility

One concern to be aware of if you want to add this to your site, is that scripts with `type="module"` are not supported in Internet Explorer or some older phone browsers. [`caniuse`](https://caniuse.com/es6-module) has the full details.

If you're following along, this shouldn't be a huge concern. By default, the Svelte build is also not supported in Internet Explorer, so if this compatibility is critical for you, you've got more work to do!

## Wrapping up

With all of that in place, my blog now loads only the content it needs and is set to have good cache performance for the larger `vendor` chunk.

My authoring workflow is still simple, mostly writing Markdown into a file with a little bit of Svelte to wire up the page.

And if I want to migrate to a CMS or build an api to serve my content, the components are ready to load that content asynchronously with only a small change! (Moving to loading posts from another source would even let me avoid creating a new route component for each post!)

These changes will be up shortly [on github](https://github.com/chrsjxn/svelte-plus-markdown), and if you want to chat, you can find me [on twitter](https://twitter.com/c_jackson_js)!
