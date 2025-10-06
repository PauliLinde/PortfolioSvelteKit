import type { PageServerLoad } from './$types';

interface Repo {
	title: string;
	description: string;
	link: string;
	img: string;
}

export const load: PageServerLoad = async () => {
	const response = await fetch('https://api.github.com/users/paulilinde/repos');

	const githubRepos = await response.json();

	const repos: Repo[] = githubRepos.map((repo: any) => ({
		title: repo.name,
		description: repo.description || 'No description',
		link: repo.html_url,
		img: `https://opengraph.githubassets.com/1/${repo.full_name}`
	}));

	return { repos };
};