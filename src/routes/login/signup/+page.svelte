
<script>
// *TODO: connect to firebase    
	import Button from "../../../components/button.svelte";
    import InputField from "../../../components/input-field.svelte";
	import InputPassword from "../../../components/input-password.svelte";
    let email;
    let name;
    let lastname;
    let password;
    let confirmPassword
    let oab;
    function onsubmit(e){

    }

</script>
<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
    <form method="post" on:submit|preventDefault={onsubmit}>
        <h1 class="font-bold text-2xl leading-7 mb-5">Cadastre-se aqui:</h1>
        <InputField label='E-mail' name='email' placeholder='Digite seu e-mail' bind:value={email}/>
        <InputField label='Nome' name='name' placeholder='Digite seu nome' bind:value={name}/>
        <InputField label='Sobrenome' name='lastname' placeholder='Digite seu sobrenome' bind:value={lastname}/>
        <InputField label='OAB' name='oab' placeholder='Digite sua OAB' bind:value={oab}/>
        <InputPassword label='Senha' name='password' placeholder='Digite sua senha' bind:value={password} />
        <InputPassword label='Confime sua senha' name='confirmPassword' placeholder='Confirme sua senha' bind:value={confirmPassword} />
        <br/>
        <Button buttonTitle='Cadastrar' funcHandler />
        <div class="text-right">
            <p class="font-bold">Já tem uma conta? <a class="text-blue-modernize" href="/">Entre aqui</a></p>
        </div>
    </form>
</div>