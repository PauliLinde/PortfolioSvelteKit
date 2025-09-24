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

<form method="POST" action="/form">
	<label>
		Email
		<input name="email" type="email" autocomplete="off">
	</label>
	<label>
		Message
		<input name="message" type="text" autocomplete="off">
	</label>
	<button>Send</button>
</form>