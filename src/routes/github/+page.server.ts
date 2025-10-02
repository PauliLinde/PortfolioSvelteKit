import { GITHUB_TOKEN } from '$env/static/private';
import type { PageServerLoad } from './$types';

interface Repo {
	title: string;
	description: string;
	link: string;
	img: string;
}

export const load: PageServerLoad = async () => {
	// Hämta från GitHub API (om du vill ha live data)
	const response = await fetch('https://api.github.com/users/paulilinde/repos', {
		headers: {
			'Authorization': `token ${GITHUB_TOKEN}`,
			'Accept': 'application/vnd.github.v3+json'
		}
	});

	const githubRepos = await response.json();

	const repos: Repo[] = githubRepos.map((repo: any) => ({
		title: repo.name,
		description: repo.description || 'No description',
		link: repo.html_url,
		img: `https://opengraph.githubassets.com/1/${repo.full_name}` // GitHub's OG image
	}));

	return { repos };
};