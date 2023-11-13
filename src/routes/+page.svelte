<script>
	import InputField from './../components/input-field.svelte'
	import InputPassword from './../components/input-password.svelte'
	import Button from './../components/button.svelte'
	let email = ''
	let password = ''
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<form method="post">
		<h1 class="font-bold">Lawtech Partner</h1><br/>
		<InputField label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
		<br/>
		<InputPassword  label='Password' name='password' placeholder='Digite sua senha' bind:value={password}/>
		<br/>
		<Button buttonTitle='Entrar' funcHandler />
		<Button buttonTitle='Cadastre-se' funcHandler />
	</form>
</div>

