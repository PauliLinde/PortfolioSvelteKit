<script>
		export let form;
</script>

<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-12">
	<div class="w-full max-w-2xl">

		<div class="text-center mb-8">
			<h3 class="text-xl md:text-2xl text-gray-600 mb-4">
				Would you like to know more, have any questions, want to work together, or just tell a bad joke?
				Please don't hesitate to send me a message!
			</h3>
		</div>

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

		<div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
			<form method="POST" action="/form" class="space-y-6">
				<label for="name" class="relative block">
					<input
						type="text"
						id="name"
						name="name"
						placeholder=""
						class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
						required />
					<span class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
            Name
          </span>
				</label>

				<label for="email" class="relative block">
					<input
						type="email"
						id="email"
						name="email"
						placeholder=""
						class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
						required />
					<span class="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
            Email
          </span>
				</label>

				<label for="message" class="relative block">
          <textarea
						id="message"
						rows="5"
						name="message"
						placeholder=""
						class="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm resize-y"
						required>
          </textarea>
					<span class="absolute top-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-3 peer-focus:-translate-y-5">
            Message
          </span>
				</label>

				<button
					type="submit"
					class="group inline-block rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden">
          <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent transition-all">
            Send
          </span>
				</button>
			</form>
		</div>
	</div>
</div>