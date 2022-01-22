<script>
  import { Layout, Link, Polaroid } from '../Components'
</script>

<style>
  .pronouns {
    font-size: 14pt;
  }

  .polaroid-wrapper {
    transform: rotate(1deg);
  }
</style>

<Layout>
  <h1>Chris Jackson <span class="pronouns">(he/him)</span></h1>
  <div class="polaroid-wrapper">
    <Polaroid
      src="/__img_path__/githubProfile.jpg"
      alt="self portrait, github profile pic"
      disableFilter>
      Hello!
    </Polaroid>
  </div>
  <p>
    I am a senior web engineer, working on building a broader skill set: full
    stack, dev ops, writing.
  </p>
  <p>
    I am a prolific code reviewer. I think a good code review practice helps the
    whole team learn and stay connected.
  </p>
  <p>I believe diverse voices improve products, teams, and the world.</p>
  <p>
    Find me elsewhere:
    <Link href="https://github.com/chrsjxn" external>github</Link>
    -
    <Link href="https://twitter.com/c_jackson_js" external>twitter</Link>
  </p>
</Layout>
