<script context="module">
	export const prerender = true;
</script>

<script>
	import { Aside, BlogPost, NextPostLink } from '$lib/';
	export let nextPost = null;
</script>

<svelte:head>
	<title>chrsjxn.io - Reviewing code like a junior engineer</title>
	<meta name="description" content="Reviewing code like a junior engineer" />
</svelte:head>

<BlogPost>
	<div slot="title">Reviewing code like a junior engineer</div>
	<div slot="date">11/05/2020</div>
	<div slot="content">
		<p>
			I've met a lot of engineers who don't feel comfortable offering feedback on code they read.
			Most of them are junior engineers, but I've seen it with very senior engineers, too.
		</p>
		<p>
			And this is completely natural. When you're learning on the job, code review is a very
			one-sided process. You push up your changes and post them for review. You get your first
			feedback, and it's all about patterns and best practices you didn't know! If you're like me,
			you feel a bit of impostor syndrome, and you learn from this feedback. When you push your next
			set of changes, you get more feedback and you learn something else.
		</p>
		<p>Every time this happens, you also learn a pattern that was never intended:</p>
		<p>"Code reviewers need to know more than code authors."</p>
		<p>
			It can be comforting, knowing that your code is always being reviewed by an expert. But if you
			believe this, you're devaluing your own contributions and giving up your seat at the table.
		</p>
		<p>So how do you contribute like a junior engineer?</p>
		<h2>1. Read the changes to code your team maintains</h2>
		<p>
			This one may seem obvious, but it's important. How can you offer feedback if you don't read
			the code?
		</p>
		<p>
			You should also note that I said "read" and not "review" here. Being familiar with the changes
			to your code base is useful, even if you don't have comments or questions on every change.
		</p>
		<h2>2. Highlight code that is hard for you to understand, and explain why</h2>
		<p>
			Are the variable names hard to understand? Is it unclear what parameters mean or where they
			come from? Are the functions too big?
		</p>
		<p>
			We read code much more often than we write it. Every time we fix a bug or onboard a new team
			member, we read the code to remind ourselves of what's happening under the hood. Feedback like
			this doesn't require a deep technical expertise, but it helps make the code easier to read
			when we come back to it.
		</p>
		<Aside>
			<p>
				And just in case you're not convinced this is important, just think about one of my favorite
				programming memes. "What idiot wrote this trash? `git blame` Oh. That idiot is me!"
			</p>
			<p>
				This gets even more relevant as I get more senior. With more responsibilities and larger
				projects, it takes me a lot longer to revisit code that I wrote before.
			</p>
			<div class="meme-container">
				<img
					src="/__img_path__/code-last-month.png"
					alt="Meme with Thanos not recognizing his code from last month"
					class="meme"
				/>
			</div>
			<p>(I had this meme saved, but now I don't know where it came from!)</p>
		</Aside>
		<h2>3. Ask questions, especially about why</h2>
		<p>
			Software engineering is all about choices and trade offs you make between different
			alternatives. Asking questions about why a choice was made, or what alternatives were
			considered, can tell you what's most valuable to your team. Or it can highlight alternatives
			that are easier to test, more performant, or better in a less obvious way.
		</p>
		<h2>4. That's it!</h2>
		<p>
			You don't have to be an expert to review code that your team is writing! Asking questions
			helps you learn how the code works and what's important. Reading the code and highlighting
			areas that are hard to understand will lead to code that is more maintainable for the team as
			a whole.
		</p>
		<p>
			If you're worried about asking too many questions on GitHub, or you don't feel comfortable
			giving your feedback in that way, I recommend scheduling some time with the author to do a
			pair review. You can cover a lot of topics in a half hour session, and that 1:1 time can let
			you ask questions that aren't relevant to the rest of the team.
		</p>
		<p>
			Hopefully these tips will be useful to you the next time you do a code review, whether you're
			junior or not!
		</p>
	</div>
</BlogPost>
<NextPostLink {nextPost} />

<style>
	.meme-container {
		display: flex;
		justify-content: center;
	}

	.meme {
		margin: auto;
		max-width: 100%;
	}
</style>
