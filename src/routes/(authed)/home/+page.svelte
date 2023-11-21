<script>
	import Button from '../../../components/button.svelte';
</script>

<div class="container p-5">
	<h1>Bem vindo</h1>
	<br />
	<form method="post" action="/login/logout">
		<div class="w-40">
			<Button buttonTitle="Log out" buttonStyle="primary" funcHandler />
		</div>
	</form>
</div>
