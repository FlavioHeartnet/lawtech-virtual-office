<script>
	import InputField from '../../../../../components/input-field.svelte';
	export let selectedAddress ={
						id: '1',
						street: '',
						address_number: '',
						neighbornhood: '',
						city: '',
						state: '',
						zip: '',
						country: '',
						complement: '',
						description: ''
	}
	
</script>
<h3 class="font-bold">Endereço</h3>
{selectedAddress.id}
<input type="hidden" name="id" value={selectedAddress.id}/> 
<InputField label="CEP" value={selectedAddress.zip} name="zipCode" placeholder="Digite o CEP" required />
<InputField label="Avenida/Rua"value={selectedAddress.street} name="street" placeholder="Digite a rua ou avenida" required />
<InputField label="Bairro" value={selectedAddress.neighbornhood} name="neighbornhood" placeholder="Digite o bairro" required />
<div class="flex gap-2">
	<div class="flex-auto">
		<InputField label="Cidade" value={selectedAddress.city} name="city" placeholder="Digite a cidade" required />
	</div>
	<div class="flex-auto">
		<InputField label="Estado" value={selectedAddress.state} name="state" placeholder="Digite o estado" required />
	</div>
</div>
<InputField label="País" name="country" value={selectedAddress.country}  placeholder="Digite o estado" required />
<div class="flex gap-2">
	<div class="flex-auto">
		<InputField type="number" value={selectedAddress.address_number}  label="Número" name="number" placeholder="Digite o número" required />
	</div>
	<div class="flex-auto">
		<InputField label="Complemento" value={selectedAddress.complement}  name="complement" placeholder="Digite o complemento" />
	</div>
</div>
