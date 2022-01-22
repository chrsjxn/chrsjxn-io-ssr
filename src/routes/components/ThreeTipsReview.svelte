<script>
  import { Layout, Link, BlogPost } from '../Components'
  import NextPostLink from '../Components/NextPostLink.svelte'
  export let nextPost = null
</script>

<style>
  .meme-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .meme {
    margin: auto;
    max-width: 100%;
  }

  .meme-container :global(a) {
    font-size: 10pt;
    text-align: end;
  }

  .review-comment {
    font-style: italic;
  }
</style>

<Layout>
  <BlogPost>
    <div slot="title">Three tips to be a better code reviewer today</div>
    <div slot="date">11/13/2020</div>
    <div slot="content">
      <p>
        As a professional software developer, code review is a big part of the
        job! It's often a requirement for shipping your work, and understanding
        code well enough to give feedback takes time.
      </p>
      <p>
        So engineering teams often turn to automation to help reduce the cost of
        code reviews. Test coverage and static analysis tools help avoid bugs
        and vulnerabilities. Linters and formatters keep devs from spending time
        and energy on code style.
      </p>
      <p>
        And these tools are great! But they miss the human aspect of
        professional development. With that in mind, here are three tips to help
        you be a better code reviewer for your team, no matter how experienced
        you are or what technology you use!
      </p>
      <h2>1. Do the tests document the code well enough?</h2>

      <p>
        Comments get out of date quickly. Design docs get lost. When you revisit
        a project, sometimes the only documentation you have is the tests.
      </p>
      <p>
        If you have great tests, that might not be too bad. If you have no
        tests, it could be a disaster!
      </p>
      <p>
        As a starting point for feedback about the tests, ask yourself these
        questions:
      </p>
      <ul>
        <li>
          Can I call this function, use this library, or render this component
          using the tests as examples?
        </li>
        <li>Do the tests tell me what inputs are valid?</li>
        <li>
          Do the tests tell me what inputs will throw an error or have invalid
          results?
        </li>
      </ul>

      <h2>2. What parts of the code were the hardest to understand?</h2>

      <p>
        After a feature has shipped, it needs to be maintained. Eventually,
        someone will read this code who has never seen it before, and they'll
        need to understand it well enough to change it.
      </p>
      <p>
        That person reading the code for the first time might even be you! Lots
        of engineers have done a `git blame` and realized they were the original
        author of the code they were just complaining about.
      </p>
      <div class="meme-container">
        <img
          class="meme"
          src="/__img_path__/spidermanMeme.jpg"
          alt="git blame as a spiderman looking at spiderman meme" />
        <Link
          external
          href="https://www.reddit.com/r/ProgrammerHumor/comments/6p9syt/the_problem_with_git_blame/">
          /r/ProgrammerHumor
        </Link>
      </div>
      <p>
        Thankfully, code review is a similar experience. As a reviewer, you're
        probably reading the code for the first time, and you don't have all the
        context of the code author. If any of the code was difficult to
        understand when you read it, offer some feedback to improve it!
      </p>
      <ul>
        <li>Could the names be clearer, or more descriptive?</li>
        <li>Could complex logic be broken down into utility functions?</li>
        <li>
          Could the documentation be improved with a comment? Or a more
          targetted test case?
        </li>
      </ul>

      <h2>3. Explain why</h2>

      <p>
        This last one is a little different from the first two, because it's
        about how you give your feedback, not about what feedback you give. And
        it's much simpler.
      </p>
      <p>When you give feedback during a code review, explain why!</p>
      <p>
        If you're an expert, code review is a tool to teach other engineers.
        Making suggestions and explaining why is how you do that.
      </p>
      <p>
        And if you're not teaching, explaining why helps to build empathy and
        open discussions about other options.
      </p>
      <p>
        You don't have to write a novel, but even a little explanation helps.
        For example, "<span class="review-comment">This boolean logic was tough
          for me to follow. Can you split it into a few utility functions?</span>"
      </p>
      <h2>What's next?</h2>

      <p>
        Being great at code reviews is a skill that takes a lot of practice, and
        there are a ton of topics that can't be covered in a quick list like
        this. Some of them are technical, like language specific best practices,
        and some of them are interpersonal, like offering effective feedback.
      </p>
      <p>
        But hopefully these tips will help you and your team get more value out
        of your code reviews!
      </p>
    </div>
  </BlogPost>
  <NextPostLink {nextPost} />
</Layout>
