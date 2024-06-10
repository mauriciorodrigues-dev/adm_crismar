document.getElementById('dataNascimento').addEventListener('change', function() {
  const birthDate = new Date(this.value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  document.getElementById('idade').value = age;
});

function adicionarResponsavel() {
  const container = document.getElementById('responsaveisContainer');
  const responsavelCount = container.getElementsByClassName('responsavel').length + 1;

  const newResponsavel = document.createElement('div');
  newResponsavel.className = 'responsavel';

  newResponsavel.innerHTML = `
      <label for="responsavelTipo${responsavelCount}">Tipo:</label>
      <input type="text" id="responsavelTipo${responsavelCount}" name="responsavelTipo[]"><br>

      <label for="responsavelTelefone${responsavelCount}">Telefone:</label>
      <input type="tel" id="responsavelTelefone${responsavelCount}" name="responsavelTelefone[]"><br>
  `;

  container.appendChild(newResponsavel);
}
