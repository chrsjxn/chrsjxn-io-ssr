<script>
  import Link from './Link.svelte'

  const currentYear = new Date().getFullYear()
</script>

<style>
  .wrapper {
    position: fixed;
    padding: 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--background-color);
  }

  .content {
    width: clamp(20ch, 75%, 80ch);
    margin: auto;
  }

  @media print {
    .wrapper {
      position: absolute;
    }
  }
</style>

<div class="wrapper">
  <div class="content">
    © Chris Jackson
    {currentYear}
    -
    <Link
      href="https://github.com/chrsjxn/chrsjxn-io"
      external
      externalIndicator={false}>
      src
    </Link>
    -
    <Link
      href="https://twitter.com/c_jackson_js"
      external
      externalIndicator={false}>
      twitter
    </Link>
    - Be kind!
  </div>
</div>
