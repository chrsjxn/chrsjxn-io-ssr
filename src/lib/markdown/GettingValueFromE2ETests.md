# Getting Value from End to End Tests

02/03/2021

My big project for the second half of 2020 was to "fix" some of our end to end tests—to make them useful. In some ways, the project was a huge success!

We unblocked automation through our login flow, fixing some persistent flakiness from an ongoing refactor of our session management. And we built the tests into a docker image, so we could easily execute them in any of our deploy pipelines. We now run them automatically before deploying several critical services, and it only takes a single PR to integrate them with other deploys.

Despite that success, I still see a lot of challenges with these tests. And I have some advice, if you're thinking about writing your own end to end tests.

## Isolate your test data

Every interesting test relies on test data. You need a predictable storefront to test adding and removing items from a shopping cart. You need a test account with payment details to test checkouts. You may be able to mock some of the data you need, or you may be able to write less specific tests for some features, but the data that backs your tests is critical.

My ideal approach would be a set of tools that set up test data before the tests are run, and tear down the data after the tests complete. But I would settle for data that's only used by the end to end testing suite.

Changing one setting on a shared test account could easily lead to hours debugging end to end test failures. If the tests block deploys, that could be a very costly delay.

## Test as early as possible

We chose to test release candidates for a few of our critical services. Those deploys trigger the tests about once a day, meaning we have up to 24 hours of changes to check if the tests fail.

Running the tests as soon as possible after a change makes it a lot easier to find the change that introduced any problems. Engineers are also more likely to be available and paying attention after making a change. Especially now, when so many teammates are remote, engineers might not be available if the tests run infrequently.

## Invest in monitoring and error tracking

Errors in end to end tests are very similar to errors in production. The tests generally only have access to the UI, like a user would, and problems could occur in any part of your stack.

If your end to end test fails with a request that times out, your UI might not give you enough information to find out what caused that error. But this is just like errors that happen to real users.

There are a ton of different tools and strategies for monitoring and detecting errors in production, from simple error log collection to distributed tracing solutions. And those tools will help you debug errors in your end to end tests.

## Invest in the rest of your tests

This feels like a combination of my previous two suggestions, but I think it's worth calling out separately. (It's also the suggestion most likely to come up during a job interview!)

Many of the failures I've seen with end to end tests could have been caught much sooner with stronger unit or integration testing. Especially as testing tools, like [Testing Library](https://testing-library.com/) and [MSW](https://mswjs.io/) get more sophisticated. 

These tests give you more consistent results, and diligent developers might even catch problems before committing them. Debugging test failures is also significantly easier when you're only testing a small piece of your full application.

## Full stack tests need full stack owners

I originally stated this one to my manager as "product tests need product owners," but I think that's not actually strong enough. It's easy to think of end to end tests as "UI tests," because that's how they interact with your application.

Every team involved in the stability of your product should care about the results of your end to end tests. After all, every one of those teams could introduce a change that breaks the tests!

If the only team investigating failures is your UI team, it could take them a long time to find issues at another layer of the stack. Hopefully you've invested in error monitoring, so it's easy to find the team that should investigate!

## Conclusion

I'm moving on to other projects for 2021, but the team is working on a couple of these. Maybe I'll be able to convince them to try all five.

What do you think? Have developer-driven end to end tests been beneficial for you? Or are they still too slow—or too flaky—to feel useful?

If you've got suggestions I've missed, or you just want to chat about testing, you can find me [on twitter](https://twitter.com/c_jackson_js)! 🙌