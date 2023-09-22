<script>
import { clients } from "../mocks/clients.mock";
</script>
<div class="mx-5 m-0 h-full flex min-h-screen items-center place-content-center ">
	<table class="table-auto border-collapse border border-spacing-2 border-slate-400">
		<thead>
			<tr>
				<th>Nome</th>
				<th>Tipo</th>
				<th>Nacionalidade</th>
				<th>Estado Civil</th>
				<th>Profissão</th>
				<th>Doc. Identificação</th>
				<th>Endereço</th>
				<th>E-mail</th>
				<th>Telefone</th>
				<th>Processos e Casos</th>
				<th>Eventos</th>
				<th>Tarefas</th>
			</tr>
		</thead>
		<tbody>
			{#each clients as client }
			<tr>
				<th>{client.name}</th>
				<th>{client.legal_documents[0].type == 1 ? "Fisica" : "Juridica"}</th>
				<th>{client.nacionality}</th>
				<th>{client.marital_status}</th>
				<th>{client.job_title}</th>
				<th>{client.legal_documents[0].document_number}</th>
				<th>{client.addresses[0]}</th>
				<th>{client.email}</th>
				<th>{client.phone}</th>
				<th>{client.lawsuits}</th>
				<th>{client.events}</th>
				<th>{client.tasks}</th>
			</tr>
			{/each}
		</tbody>
	</table>
</div>

