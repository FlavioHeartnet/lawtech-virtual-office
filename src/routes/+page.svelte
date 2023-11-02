<script>
	import InputField from './../components/input-field.svelte'
	let textfieldvalue = ''
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	
	<InputField name='email' placeholder='Digite seu e-mail' value={textfieldvalue}/>
</div>

