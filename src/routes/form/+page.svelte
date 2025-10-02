<script>
		export let form;
</script>

{#if form?.success}
	<div class="success-message">
		{form.message}
	</div>
{/if}

{#if form?.error}
	<div class="error-message">
		{form.error}
	</div>
{/if}

<div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
	<div class="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8">
		<form method="POST" action="/form">
			<label for="Name" class="relative">
				<input
					type="text"
					id="name"
					placeholder=""
					class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
				/>
				<span
					class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
				>
				Name
			</span>
			</label><br>
			<label for="Email" class="relative">
				<input
					type="email"
					id="Email"
					placeholder=""
					class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
				/>

				<span
					class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
				>
				Email
			</span>
			</label><br>
			<label for="Message" class="relative block">
			<textarea
				id="message"
				rows="5"
				placeholder=""
				class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm resize-y"
			></textarea>

				<span
					class="absolute top-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-5"
				>
			 Message
			</span>
			</label>
			<button
				type="submit"
				class="group inline-block rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
						>
				<span
					class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent transition-all"
				>
					Send
				</span>
			</button>
		</form>
	</div>
</div>