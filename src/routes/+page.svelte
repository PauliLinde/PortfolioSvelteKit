<script lang="ts">
	import profileImage from '$lib/assets/profile.jpeg';
	import { onMount, onDestroy } from 'svelte';
	import { PageService } from '$lib/services/page.service';

	let name = 'Paulina Linderborg';
	let profession = 'developer';
	let displayText = '';
	let pageService: PageService;

	onMount(() => {
		pageService = new PageService(profession, (text) => {
			displayText = text;
		});
		pageService.start();
	});

	onDestroy(() => {
		if (pageService) {
			pageService.stop();
		}
	});
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
	<div class="max-w-6xl w-full">

		<div class="text-center mb-12">
			<h3 class="text-xl md:text-2xl text-gray-600 mb-4">
				Hello, my name is <span class="font-semibold text-gray-900">{name}</span>, I'm a
			</h3>

			<h1 class="text-5xl md:text-7xl font-bold text-gray-900 min-h-[5rem] flex items-center justify-center">
				{displayText}<span class="animate-pulse">|</span>
			</h1>
		</div>

		<div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

				<div class="lg:col-span-2 space-y-6">
					<p class="text-lg text-gray-700 leading-relaxed">
						Welcome to my portfolio!
					</p>

					<div class="border-l-4 border-gray-300 pl-6 space-y-4">
						<p class="text-gray-700 leading-relaxed">
							I'm currently in my second year of the Java program at Nackademin,
							and this is my DevOps course project. The frontend is built with
							<span class="font-semibold">SvelteKit, TypeScript, and TailwindCSS</span>,
							deployed on Vercel. I'm fetching my public repositories via the GitHub API.
						</p>

						<p class="text-gray-700 leading-relaxed">
							My frontend and backend are connected through API calls. The backend
							was built with <span class="font-semibold">Symfony/PHP and PostgreSQL</span>
							on Render, deployed on Upsun. Both projects include CI pipelines
							through GitHub Actions.
						</p>

						<p class="text-gray-700 leading-relaxed">
							To see more of my work,
							<a href="/github" class="text-blue-600 hover:text-blue-800 font-semibold underline">
								click here
							</a>
							or visit <span class="font-bold text-gray-900">My GitHub</span> to check
							out all my public repositories.
						</p>

						<p class="text-gray-700 leading-relaxed">
							This was a really fun project that's preparing me for my LIA (internship)
							at Sirvoy, where I'll be using all these technologies. Big thanks to
							our teacher, Yahya Hussein, for this idea!
						</p>
					</div>

					<div class="flex justify-center lg:justify-start pt-6">
						<a
							href="/github"
							class="group inline-block rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden transition-all"
						>
              <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent transition-all">
                View My Projects
              </span>
						</a>
					</div>
				</div>

				<div class="lg:col-span-1 flex items-center justify-center">
					<img
						src={profileImage}
						alt="Paulina Linderborg"
						class="rounded-lg shadow-xl w-full max-w-sm object-cover aspect-square"
					/>
				</div>

			</div>
		</div>

	</div>
</div>

<style>
    @keyframes slide-loop {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        20% {
            transform: translateX(0);
            opacity: 1;
        }
        80% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }

    .animate-slide-loop {
        animation: slide-loop 4s ease-in-out infinite;
    }
</style>