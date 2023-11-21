<script lang="ts">
	// @ts-nocheck

	import Button from '../../../components/button.svelte';
	import InputField from '../../../components/input-field.svelte';
	import { goto } from '$app/navigation';
	import type { ActionData } from './$types';
	let email;

	export let form: ActionData;
	function backtologin() {
		throw goto('/');
	}

	async function onsubmit(e) {
		const data = new FormData(event.currentTarget);
		const response = await fetch(e.currentTarget.action, {
			method: 'POST',
			body: data,
			headers: {
				'x-sveltekit-action': 'true'
			}
		});
	}
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<form method="post" on:submit|preventDefault={onsubmit}>
		{#if form?.incorrect}<p class="mb-5 p-2 error bg-red-400 text-white font-bold rounded">
				Não foi possivel validar este e-mail, <br />verifique e tente novamente!
			</p>{/if}
		<h1 class="font-bold text-2xl leading-7 mb-5">Esqueceu a senha?</h1>
		<p class="mb-2">
			Please enter the email address associated with your account and We will email you a <br />link
			to reset your password.
		</p>
		<InputField
			required={true}
			label="E-mail"
			name="email"
			placeholder="Digite seu e-mail"
			bind:value={email}
		/>
		<br />
		<Button buttonTitle="Cadastrar" funcHandler />
		<Button buttonTitle="Voltar ao login" buttonStyle="secondary" funcHandler={backtologin} />
	</form>
</div>
