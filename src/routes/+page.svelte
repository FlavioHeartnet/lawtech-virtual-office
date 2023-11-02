<script>
	import Button from './../components/button.svelte'

	const alertFunc = () =>{
		alert('ola')
	}
</script>

<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center">
	<Button funcHandler={alertFunc} buttonTitle='Sign Up'/>
</div>

