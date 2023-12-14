<script lang="ts">
	import Button from '../../../components/button.svelte';
	import InputField from '../../../components/input-field.svelte';
	import { goto } from '$app/navigation';
	let email;
	export let form;

	function backtologin() {
		throw goto('/');
	}
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<form method="post">
		{#if form?.success}<p class="mb-5 p-2 success bg-green-400 text-white font-bold rounded">
				Concluído! Verifique sua caixa de e-mail para continuar o processo de recuperação de senha!
			</p>{/if}
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Não foi possivel validar este e-mail, <br />verifique e tente novamente!
			</p>{/if}
			{#if form?.notExist}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				E-mail não encontrado, verifique e tente novamente!
			</p>{/if}
		<h1 class="font-bold text-2xl leading-7 mb-5">Esqueceu a senha?</h1>
		<p class="mb-2">
			Por favor, insira o endereço de e-mail associado à sua conta e lhe enviaremos um <br />link por e-mail
			para redefinir sua senha.
		</p>
		<InputField
			required={true}
			label="E-mail"
			name="email"
			placeholder="Digite seu e-mail"
			bind:value={email}
		/>
		<br />
		<Button buttonTitle="Enviar" funcHandler />
		<Button buttonTitle="Voltar ao login" buttonStyle="secondary" funcHandler={backtologin} />
	</form>
</div>
