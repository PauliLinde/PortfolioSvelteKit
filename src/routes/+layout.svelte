<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logo.png';

	let { children } = $props();
</script>

<header class="bg-white">
	<div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
		<a class="block text-teal-600" href="/">
			<span class="sr-only">Home</span>
			<img src={logo} alt="Logo" class="h-20" />
		</a>

		<div class="flex flex-1 items-center justify-end md:justify-between">
			<nav aria-label="Global" class="hidden md:block">
				<ul class="flex items-center gap-6 text-sm">
					<li>
						<a class="text-gray-500 transition hover:text-gray-500/75" href="/about"> About </a>
					</li>

					<li>
						<a class="text-gray-500 transition hover:text-gray-500/75" href="/github"> My Github </a>
					</li>

					<li>
						<a class="text-gray-500 transition hover:text-gray-500/75" href="/form"> Contact me </a>
					</li>
				</ul>
			</nav>
			</div>
		</div>
</header>

{@render children?.()}
