<script>
  import { Layout, Link } from '../Components'
  import { posts } from '../Modules/posts'

</script>

<style global>
  li {
    list-style-position: outside;
    line-height: 2em;
  }

  li.post {
    list-style-type: '📓 ';
  }

</style>

<Layout>
  <h1>Writing</h1>
  <ul>
    {#each posts as post}
      <li class="post">
        <Link href={post.path}>{post.title}</Link>
        ({post.date})
      </li>
    {/each}
  </ul>
</Layout>
