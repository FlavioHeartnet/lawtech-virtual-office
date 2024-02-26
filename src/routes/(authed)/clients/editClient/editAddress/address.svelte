<script>
	import InputField from '../../../../../components/input-field.svelte';
</script>

<h3 class="font-bold">Endereço</h3>
<InputField label="CEP" name="zipCode" placeholder="Digite o CEP" required />
<InputField label="Avenida/Rua" name="street" placeholder="Digite a rua ou avenida" required />
<InputField label="Bairro" name="neighborhood" placeholder="Digite o bairro" required />
<div class="flex gap-2">
	<div class="flex-auto">
		<InputField label="Cidade" name="city" placeholder="Digite a cidade" required />
	</div>
	<div class="flex-auto">
		<InputField label="Estado" name="state" placeholder="Digite o estado" required />
	</div>
</div>
<InputField label="País" name="country" placeholder="Digite o estado" required />
<div class="flex gap-2">
	<div class="flex-auto">
		<InputField type="number" label="Número" name="number" placeholder="Digite o número" required />
	</div>
	<div class="flex-auto">
		<InputField label="Complemento" name="complement" placeholder="Digite o complemento" required />
	</div>
</div>
