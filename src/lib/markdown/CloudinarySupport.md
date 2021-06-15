# Building a blog with Svelte: Fetching images via CDN

12/16/2020

Continuing along with the blog series, we're in a pretty good place right now. The main bundle is less than 10 kB of javascript over the network, and the vendor bundle is about 50 kB. Add in a few small CSS files, thanks to tailwind and some custom styles, and my blog pages are currently seeing 100s across the board on Lighthouse!

Except if I'm on a post with an image.

Netlify caching is great, but a single image file could outweigh the entire application. And using a CDN gives us some other advantages specific to hosting images, so let's set one up!

## Signing up for Cloudinary

I picked [Cloudinary](https://cloudinary.com/), because I have some familiarity with their [remote image fetch](https://cloudinary.com/documentation/fetch_remote_images#remote_image_fetch_url) feature from work, and their free tier is way more than I need for the amount of traffic that my blog is currently seeing.

Once signed up for Cloudinary, all I had to do in their admin UI was configure my security settings to restrict remote image fetching to images on my domain.

## Redirecting to Cloudinary on Netlify

Netlify supports [proxy redirects](https://docs.netlify.com/routing/redirects/rewrites-proxies/#proxy-to-another-service) to other services, as long as we configure our redirect with a 200 status. To enable those redirects, we just need to add a [redirect config](https://docs.netlify.com/configure-builds/file-based-configuration/#redirects) to our `netlify.toml`.

```
# Paths like `/cloudinary/imageFile.jpg` go to cloudinary
# Don't forget to swap in your username and domain:
[[redirects]]
  from = "/cloudinary/*"
  to = """\
    https://res.cloudinary.com/\
    <Cloudinary Account Name>/\
    image/fetch/\
    q_auto,f_auto/\
    https://<Your Blog Domain>/images/:splat\
  """
  status = 200

# All other URLs serve /index.html for the Svelte app:
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

With this in place, I'll update all the image URLs in my posts to refer to `/cloudinary/<imageName>.<ext>`, and Netlify will proxy them via Cloudinary!

## Local development support

But there's a small problem, still. Locally, my images aren't in a `/cloudinary` directory, so local development can't render them. They're currently located in `/public/images`, and I think that's a sensible location for them. So we're going to update our Rollup config to generate different image paths for local assets and built assets.

We've already used a few Rollup plugins to add features to this blog, and we're going to add one more now.

```bash
npm install --save-dev @rollup/plugin-replace
```

[`@rollup/plugin-replace`](https://github.com/rollup/plugins/tree/master/packages/replace) will replace strings with other content during a build. And the `rollup.config.js` that comes with a new Svelte project already knows whether it's building for `production`. 

We're going to use the plugin to replace `__imgPath__` with the right path for each environment. That will be `/images` in local development, and `/cloudinary` on production:

```javascript
// Import @rollup/plugin-import with the other imports:
import replace from '@rollup/plugin-replace'

// ...

// Add @rollup/plugin-replace to the plugins config
export default {
  input: 'src/main.js',
  output: { /* ... */ },
  plugins: [
    replace({
      __imgPath__: production ? 'cloudinary' : 'images',
    }),

    // ...
```

This does mean we need to make one more change to the Svelte components. Anywhere we updated to load images from `/cloudinary/<fileName>.<ext>` now needs to use `__imgPath__/<fileName>.<ext>`. Once that change is in place, local development serves local images and the Netlify deploy will serve assets from Cloudinary!

One caveat: My code actually uses a slightly different replacement snippet, but this config will process `__imgPath__` in markdown, so the real one would get replaced by the same plugin in my actual build! 🤣

## Cloudinary transformations

The Netlify redirect we set up applies a very basic set of transformations: `q_auto,f_auto`. Those flags let Cloudinary decide what quality image to serve (`q_auto`), and which format to serve (`f_auto`). Automatic format selection even serves `webp` images to browsers that support them!

Taken together, both of these settings help reduce the size of images without significantly affecting how they look at common image sizes for the web.

There are a ton of other transformations you can apply via URL, including cropping to fit an aspect ratio, automatically rotating, and more. These are all documented in [Cloudinary's documentation](https://cloudinary.com/documentation/transformation_reference), and can be applied simply by updating the Cloudinary URL in the Netlify config.

## Wrapping up

My image assets are still generally larger than my blog's code, but the file size via Cloudinary is significantly smaller. And they're served with cache headers that avoid any network round trips to verify the cache, like other Netlify assets.

I may follow up by setting up a second image path for HD images, like photos that should stay high quality. And all I'll need to do is follow the same steps as above, adding a new redirect rule and a new Rollup replacement rule for local dev support!

And even if you're not using Netlify to host your blog, you can use `@rollup/plugin-replace` to swap out your local URL for a Cloudinary URL in production. You'll need to include the full Cloudinary fetch URL in your plugin config, and you'll need to be sure to serve the base image assets on your production domain.

Of course, how could I end this post without including at least one image? So here's a screenshot of the [polaroid component I've been hacking on](https://www.chrsjxn.io/components/polaroid), rendered in dark mode, with images fetched from Cloudinary:

![Polaroid component demo. Four polaroid images stack on top of each other, slightly haphazardly. One shows SF during the wildfires, when the sky was orange and dark. One shows the author, looking at his laptop and thinking. And the other two are close ups of birds, one seagull and one raven.](/__img_path__/PolaroidComponentDemo.png)