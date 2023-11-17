<script>
// @ts-nocheck
	import InputField from './../components/input-field.svelte'
	import InputPassword from './../components/input-password.svelte'
	import Button from './../components/button.svelte'
	export let form;
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
				{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">Não foi possivel validar seus dados, <br>verifique seus dados e tente novamente!</p>{/if}
				<h1 class="font-bold text-2xl leading-7">Bem vindo ao Lawtech Partner</h1><br/>
				<InputField required={true} label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
				
				<InputPassword  required={true} label='Password' name='password' placeholder='Digite sua senha' bind:value={password}/>
				
				<div class="mb-2 text-right">
					<a class="text-blue-modernize hover:text-blue-modernize-dark" href="/login/forgotpassword">Esqueceu a senha?</a>
				</div>
				<Button buttonTitle='Entrar' funcHandler />
				<div class="text-right">
					<p class="font-bold">Novo por aqui? <a class="text-blue-modernize" href="/login/signup">Cadastre-se</a></p>
				</div>
			</form>
		</div>
	</div>
</div>

