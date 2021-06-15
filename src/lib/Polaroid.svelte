<script>
  export let src = ''
  export let alt = 'polaroid'
  export let effect = ''
  export let disableFilter = false

  const classNames = `polaroid-img ${effect}`
</script>

<style>
  .polaroid {
    display: flex;
    flex-direction: column;
    align-items: center;

    box-sizing: border-box;

    width: 350px;
    height: 410px;

    background-color: linen;
    box-shadow: 1px 1px 4px dimgrey;
    border: solid 0.5px antiquewhite;
  }

  img {
    width: 100%;
    height: 100%;

    object-position: center center;
    object-fit: cover;

    filter: blur(0.5px) contrast(105%) brightness(105%);
  }

  img.disableFilter {
    filter: none;
  }

  .polaroid-img {
    width: 310px;
    height: 310px;
    margin: 20px;

    position: relative;
    display: block;
    overflow: hidden;
  }

  .vignette::after {
    content: '';

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: radial-gradient(
      circle,
      hsla(36, 76%, 60%, 20%) 60%,
      hsla(36, 0%, 0%, 75%) 150%
    );
    mix-blend-mode: darken;
  }

  .drama::after {
    content: '';

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background: radial-gradient(
      circle,
      rgba(0, 212, 255, 20%) 0%,
      rgba(121, 33, 9, 25%) 60%,
      rgba(2, 0, 36, 45%) 100%
    );
    mix-blend-mode: darken;
  }

  .caption {
    font-family: cursive;
    font-size: 20pt;
    color: rgba(01, 02, 03, 80%);
  }
</style>

<div class="polaroid">
  <div class={classNames}><img {src} {alt} class:disableFilter /></div>
  <div class="caption">
    <slot />
  </div>
</div>
