<script>
	import Button from '../../../components/button.svelte';
	import InputField from '../../../components/input-field.svelte';
	let email;
	let name;
	let lastname;
	let password;
	let confirmPassword;
	let oab;
	export let form;
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<form method="post">
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
				Parabéns!!! Agora volte ao login, entre com seu e-mail para finalizarmos o cadastro.
			</p>{/if}
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Senhas não conferem, verifique se a senha foi digitada igualmente nos dois campos.
			</p>{/if}
		{#if form?.firebaseError}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Falha ao cadastrar, talvez esse e-mail ja tenha sido cadastrado.
			</p>{/if}
		{#if form?.failure}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Nossos serviços estão indisponíveis no momento, tente novamente mais tarde.
			</p>{/if}
		<h1 class="font-bold text-2xl leading-7 mb-5">Cadastre-se aqui:</h1>
		<InputField label="E-mail" name="email" placeholder="Digite seu e-mail" bind:value={email} />
		<InputField label="Nome" name="name" placeholder="Digite seu nome" bind:value={name} />
		<InputField
			label="Sobrenome"
			name="lastname"
			placeholder="Digite seu sobrenome"
			bind:value={lastname}
		/>
		<InputField label="OAB" name="oab" placeholder="Digite sua OAB" bind:value={oab} />
		<InputField
			type="password"
			label="Senha"
			name="password"
			placeholder="Digite sua senha"
			bind:value={password}
		/>
		<InputField
			type="password"
			label="Confime sua senha"
			name="confirmPassword"
			placeholder="Confirme sua senha"
			bind:value={confirmPassword}
		/>
		<br />
		<Button buttonTitle="Cadastrar" funcHandler />
		<div class="text-right">
			<p class="font-bold">
				Já tem uma conta? <a class="text-blue-modernize" href="/">Entre aqui</a>
			</p>
		</div>
	</form>
</div>
