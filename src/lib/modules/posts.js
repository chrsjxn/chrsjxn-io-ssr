export const posts = [
	{
		title: 'On Burnout: Lessons Learned',
		date: '07/19/2022',
		path: '/work/on-burnout',
		external: '',
		category: 'Work'
	},
	{
		title: 'Building a blog with Svelte: Dynamic imports For Svelte components',
		date: '02/17/2021',
		path: '/svelte/dynamic-imports',
		external: '',
		category: 'Svelte'
	},
	{
		title: 'Getting Value from End to End Tests',
		date: '02/03/2021',
		path: '/testing/getting-value-from-end-to-end-tests',
		external: '',
		category: 'Testing'
	},
	{
		title: 'Building a blog with Svelte: Fetching images via CDN',
		date: '12/16/2020',
		path: '/svelte/images-via-cdn',
		external: '',
		category: 'Svelte'
	},
	{
		title: "Do's and don't's of writing code review feedback",
		date: '12/9/2020',
		path: '/code-review/writing-feedback',
		external: 'https://dev.to/chrsjxn/do-s-and-don-t-s-of-writing-code-review-feedback-2lcm',
		category: 'Code review'
	},
	{
		title: 'Building a blog with Svelte: Code splitting',
		date: '12/2/2020',
		path: '/svelte/code-splitting',
		external: 'https://dev.to/chrsjxn/building-a-blog-with-svelte-code-splitting-1mdi',
		category: 'Svelte'
	},
	{
		title: 'Building a blog with Svelte: Adding Markdown',
		date: '11/25/2020',
		path: '/svelte/adding-markdown',
		external: 'https://dev.to/chrsjxn/building-a-blog-with-svelte-adding-markdown-17k1',
		category: 'Svelte'
	},
	{
		title: 'Building a simple theme store with Svelte',
		date: '11/18/2020',
		path: '/svelte/theme-store',
		external: 'https://dev.to/chrsjxn/building-a-simple-theme-store-with-svelte-9bo',
		category: 'Svelte'
	},
	{
		title: 'Three tips to be a better code reviewer today',
		date: '11/13/2020',
		path: '/code-review/three-tips',
		external: 'https://dev.to/chrsjxn/three-tips-to-be-a-better-code-reviewer-today-4g2j',
		category: 'Code review'
	},
	{
		title: 'Polaroid component demo',
		date: '11/05/2020',
		path: '/components/polaroid',
		category: 'Components'
	},
	{
		title: 'Reviewing code like a junior engineer',
		date: '11/05/2020',
		path: '/code-review/like-a-junior',
		category: 'Code review'
	}
];

export const sortedPosts = {};
export const categories = []

for (let i = 0; i < posts.length; i++) {
	const post = posts[i];
	const category = post.category;

	if (sortedPosts[category] === undefined) {
		sortedPosts[category] = [];
		categories.push(category);
	}

	sortedPosts[category].push(post);
}
