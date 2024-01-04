<table class="skeleton-loader">
    <tbody>
      <!-- Adicione mais linhas conforme necessário -->
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <!-- Adicione mais colunas conforme necessário -->
      </tr>
    </tbody>
  </table>
<style>
.skeleton-loader {
	border-collapse: collapse;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border-spacing: 0px;
}
td {
	height: 50px;
	background-color: #e0e0e0;
}


.skeleton-loader td:before {
  content: '\00a0';
  display: block;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
