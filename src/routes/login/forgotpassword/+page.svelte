<script>
	import Button from "../../../components/button.svelte";
	import InputField from "../../../components/input-field.svelte";
	import { goto } from "$app/navigation";
    let email;
    function backtologin(){
        throw goto('/');
    }

    function onsubmit(e){

    }

</script>
<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
    <form method="post" on:submit|preventDefault={onsubmit}>
        <h1 class="font-bold text-2xl leading-7 mb-5">Esqueceu a senha?</h1>
        <p class="mb-2">Please enter the email address associated with your account and We will email you a <br>link to reset your password.</p>
        <InputField label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
        <br/>
        <Button buttonTitle='Cadastrar' funcHandler />
        <Button buttonTitle='Voltar ao login' buttonStyle='secondary' funcHandler={backtologin} />
    </form>
</div>