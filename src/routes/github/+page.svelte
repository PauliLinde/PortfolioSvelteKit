<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: repos = data.repos;
</script>

<div class="container mx-auto px-4 py-8">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each repos as repo}
		<article class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
			<img
				alt="{repo.title}"
				src="{repo.img}"
				class="h-56 w-full object-cover"
			/>

			<div class="p-4 sm:p-6">
				<a href="{repo.link}">
					<h3 class="text-lg font-medium text-gray-900">
						{repo.title}
					</h3>
				</a>

				<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
					{repo.description}
				</p>

				<a href="{repo.link}" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
					Find out more

					<span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        		&rarr;
      </span>
				</a>
			</div>
		</article>

	{/each}
</div>
</div>


