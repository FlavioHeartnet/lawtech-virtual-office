<script>
	import InputField from './../components/input-field.svelte'
	import InputPassword from './../components/input-password.svelte'
	import Button from './../components/button.svelte'
	let email = ''
	let password = ''
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<div>
			<img src="https://modernize-nextjs.adminmart.com/images/backgrounds/login-bg.svg" alt=""/>
		</div>
		<div>
			<form method="post">
				<h1 class="font-bold text-2xl leading-7">Bem vindo ao Lawtech Partner</h1><br/>
				<InputField label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
				<br/>
				<InputPassword  label='Password' name='password' placeholder='Digite sua senha' bind:value={password}/>
				<br/>
				<div class="mb-2 text-right">
					<a class="text-blue-modernize hover:text-blue-modernize-dark" href="#">Esqueceu a senha?</a>
				</div>
				<Button buttonTitle='Entrar' funcHandler />
				<div class="text-right">
					<p class="font-bold">Novo por aqui? <a class="text-blue-modernize" href="#">Cadastre-se</a></p>
				</div>
			</form>
		</div>
	</div>
</div>

