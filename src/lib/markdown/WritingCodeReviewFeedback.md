# Do's and don't's of writing code review feedback

12/09/2020

Code review is a core piece of many engineering workflows. Good code review practices have a big impact on code quality. They can identify bugs or testing gaps before code is shipped to users, or identify overly complex logic before it becomes tech debt. And they're one of many tools available to teach engineers about your team's technology, standards, and practices!

But if done carelessly, code review can also contribute to a toxic team culture. If feedback isn't given intentionally, it can add a lot of stress and anxiety to a process that's supposed to be helpful.

Here are some of my tips for writing PR feedback, based on my experiences and some of the mistakes I've made. Not every review or every comment should use all of them, but using them will help keep your feedback constructive and collaborative! 

## Table of Contents
  - [Include positive and negative feedback!](#include-positive-and-negative-feedback)
    - [⛔ Don't go overboard with positive feedback](#-dont-go-overboard-with-positive-feedback)
    - [⛔ Don't leave insincere positive comments](#-dont-leave-insincere-positive-comments)
    - [✅ Do leave emoji comments for quick praise](#-do-leave-emoji-comments-for-quick-praise)
    - [✅ Do highlight things you learned as a reviewer](#-do-highlight-things-you-learned-as-a-reviewer)
  - [Keep your feedback respectful](#keep-your-feedback-respectful)
    - [⛔ Don't use dismissive language](#-dont-use-dismissive-language)
    - [⛔ Don't leave comments without content](#-dont-leave-comments-without-content)
    - [⛔ Don't repeat the same comment](#-dont-repeat-the-same-comment)
    - [✅ Do respect different levels of expertise](#-do-respect-different-levels-of-expertise)
  - [Be personal](#be-personal)
    - [✅ Do offer feedback from your perspective](#-do-offer-feedback-from-your-perspective)
    - [✅ Do ask questions](#-do-ask-questions)
  - [Be explicit](#be-explicit)
    - [✅ Be explicit about *why*](#-be-explicit-about-why)
    - [✅ Be explicit about *importance*](#-be-explicit-about-importance)
  - [Take conversations offline](#take-conversations-offline)

## Include positive and negative feedback!

PR feedback tends to focus on areas for improvement. Like functions that could have better names, missed best practices, or places that need better test coverage.

Adding comments about good code reinforces those practices, and helps cut down on feedback anxiety in the PR process.

### ⛔ Don't go overboard with positive feedback

Too much positive feedback can feel forced or overwhelm your other comments.

### ⛔ Don't leave insincere positive comments

People will be able to tell if your comments are forced or insincere. This could make them assume all your positive feedback is insincere, or make them defensive about future areas for improvement.

### ✅ Do leave emoji comments for quick praise

> // 👍 Do:\
> 🔥

> // 👍 Do:\
> 🎉

> // 👍 Do:\
> 🙌

Emoji responses are an easy way to call out positive contributions without putting much thought into the wording.

### ✅ Do highlight things you learned as a reviewer

> // 👍 Do:\
> I've never used this function before. Thanks for sharing!

> // 👍 Do:\
> I didn't know our library supported this function! Can you share a link to the docs?

Code reviews are a great learning tool, and not only for the code author. If you learned something new from your review, celebrate it!

## Keep your feedback respectful

### ⛔ Don't use dismissive language

> // 👎 Don't:\
> Why didn't you just implement your function this way? It would be so much simpler!

> // 👍 Do:\
> Let's rewrite your function this way. I think that implementation would be easier for readers to understand!

Comments that belittle or diminish people turn code review into an antagonistic process. Staying more collaborative makes it easier for people to accept your feedback, and makes them more likely to ask you for feedback in the future.

### ⛔ Don't leave comments without content

> // 👎 Don't:\
> ?

> // 👎 Don't:\
> Fix me

> // 👎 Don't:\
> WTF?

> // 👍 Do:\
> Looks like this `debugger` was left in by accident. Let's be sure to remove it before merging the PR!

These comments might be enough to raise attention to obvious issues, like a `debugger` left in an open PR. But they can contribute to a dismissive tone and put code authors on the defensive.

### ⛔ Don't repeat the same comment


> // 👎 Don't:\
> Don't use `any`\
> Don't use `any`\
> ...\
> Don't use `any`

> // 👍 Do:\
> Typescript `any` is potentially dangerous, because it erases type information and could lead to subtle bugs elsewhere in the application.\
> \
> I see a few instances of `any` in this PR. Can you update them to use stricter typing?

Repeating the same comment multiple times makes it difficult to include relevant details in each comment, and you run the risk of overwhelming your other feedback. 

One or two repetitions is okay, as long as the comments have useful content.

If you are repeating feedback too many times, you should summarize your suggestion in one comment with full details. You can refer to specific examples in that comment, or add comments that link instances back to the full feedback, if needed.

### ✅ Do respect different levels of expertise

> // 👎 Don't:\
> Let's reimplement this function to use this pattern.

> // 👍 Do:\
> Let's reimplement this function to use this pattern. Check out this other example from our codebase, or these docs, and let me know if you have any questions!

Code review is one of the tools we have to teach engineers about new projects, new libraries, or new technologies. When working with someone who's learning, links to resources or examples are useful.

## Be personal

Feedback is generally subjective, based on your experiences as an engineer and a reviewer. Acknowledging that makes it more clear that your feedback is based on your perspective, and not an objective requirement.

### ✅ Do offer feedback from your perspective

> // 👎 Don't:\
> This pattern is hard to understand. Could we refactor to use named functions?

> // 👍 Do:\
> I found this pattern hard to understand. If we refactored to use named functions, it'd be easier for me to read and understand what we're doing here.

Giving feedback from your perspective leaves it open to the possibility that you're missing information. Maybe there's a shared pattern in the code base that you're just not used to yet.

Giving feedback from your perspective also leaves it open to discussion and differing opinions. The whole team doesn't need to agree about code patterns or naming schemes, so absolutes aren't helpful when giving this feedback.

### ✅ Do ask questions

> // 👍 Do:\
> This boolean logic is tough for me to understand. Can you explain the different conditions to me?\
> \
> Maybe we can use that to break the full condition down into some helper functions.

Asking questions can lead to a clearer explanation of what some complex logic is doing. That explanation can suggest ways to simplify or refactor that aren't as obvious without being familiar with the details.

Asking questions can also help you learn, if you're reviewing code for an app or library you aren't familiar with!

## Be explicit

When offering feedback, it helps to be explicit. It makes your expectations clearer to other participants, and can make your feedback more actionable.

### ✅ Be explicit about *why*

> // 👎 Don't:\
> Don't use `any`.

> // 👍 Do:\
> Typescript `any` is potentially dangerous, because it erases type information and could lead to subtle bugs elsewhere in the application.

Explaining why makes it clear where your feedback is coming from, especially for best practices or dangerous patterns.

Explaining why can also act as a teaching tool for your collaborators, because it gives them information about the reason your feedback is important.

If you've got docs, this is a great reason to link them!

### ✅ Be explicit about *importance*

> // 👍 Do:\
> I'm requesting changes on this PR. Please remove these secret keys from the source code and rotate them to avoid leaks before this is deployed to production.

> // 👍 Do:\
> As a follow up: Let's refactor this component and add more test coverage to (hopefully) prevent future regressions

> // 👍 Do:\
> Nit: This function name may be clearer as `shouldShowModal`

Some feedback is critical to address before a PR is merged, like security concerns or bugs in critical flows. If your feedback calls out an issue like that, your review should Request Changes to ensure they're addressed.

Other feedback is much less urgent. If your feedback can wait until after a PR is merged, especially for an urgent change, call that out by asking for a follow up. You can also ask the author to file a ticket to track that follow up, if you want them to take some concrete action before merging their change.

Marking nits is also a good practice, to be explicit about that feedback being less important than more critical feedback. If you're making a lot of significant comments, it may even be worth omitting the nits to emphasize the more important changes.

## Take conversations offline

If you've got a lot of feedback, or there's a communication gap between reviewer and author, it can be very helpful to take conversations out of GitHub.

Try pairing with the code author if they need help implementing your feedback, or schedule a quick call to discuss different options for addressing feedback. This can be especially helpful if a PR has gone through more than one round of feedback and some of your concerns aren't being addressed, or if there is a strong disagreement about the best way to address some feedback.

After discussing out of band, leave a summary in a comment on the PR. It will help remind everyone of the discussion, especially if there is more work to do before the PR is merged.