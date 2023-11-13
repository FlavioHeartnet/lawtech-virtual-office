<script>
	import Button from "../../../components/button.svelte";
	import InputField from "../../../components/input-field.svelte";
    let email;


</script>
<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
    <form method="post">
        <h1 class="font-bold text-2xl leading-7 mb-5">Esqueceu a senha?</h1>
        <p class="mb-2">Please enter the email address associated with your account and We will email you a <br>link to reset your password.</p>
        <InputField label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
        <br/>
        <Button buttonTitle='Cadastrar' funcHandler />
        <div class="text-right">
            <p class="font-bold">Já tem uma conta? <a class="text-blue-modernize" href="/">Entre aqui</a></p>
        </div>
    </form>
</div>