<script>
</script>

<style>
  h1 {
    font-size: 36pt;
    line-height: 40pt;
    margin: 0;
    margin-top: 16px;
  }

  .date {
    line-height: 20pt;
  }

  .content {
    font-size: 14pt;
    line-height: 24pt;
  }

  .content :global(h2) {
    font-size: 24pt;
    line-height: 30pt;
  }
</style>

<article>
  <h1>
    <slot name="title" />
  </h1>
  <div class="date">
    <slot name="date" />
  </div>
  <div class="content">
    <slot name="content" />
  </div>
</article>
