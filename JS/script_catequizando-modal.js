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
  newResponsavel.className = 'responsavel form_group';

  newResponsavel.innerHTML = `
      <div class="form_group-item">
          <label for="responsavelTipo${responsavelCount}">Grau de Parentesco:</label>
          <select class="width-default" name="responsavelTipo[]" id="responsavelTipo${responsavelCount}">
              <option value="pai">Pai</option>
              <option value="mae">Mãe</option>
              <option value="tio">Tio</option>
              <option value="tia">Tia</option>
              <option value="avoM">Avô</option>
              <option value="avoF">Avó</option>
              <option value="irmao">Irmão</option>
              <option value="irma">Irmã</option>
              <option value="outro">Outro</option>
          </select>
      </div>
      <div class="form_group-item">
          <label for="nomeResponsavel${responsavelCount}">Nome Responsável:</label>
          <input type="text" id="nomeResponsavel${responsavelCount}" style="width: 20rem;" name="nomeResponsavel[]">
      </div>
      <div class="form_group-item">
          <label for="responsavelTelefone${responsavelCount}">Telefone:</label>
          <input type="tel" id="responsavelTelefone${responsavelCount}" name="responsavelTelefone[]">
      </div>
      <div class="form_group-item">
          <label for="email${responsavelCount}">E-mail:</label>
          <input type="email" id="email${responsavelCount}" style="width: 20rem;" name="responsavelEmail[]">
      </div>
  `;

  container.appendChild(newResponsavel);
}


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.getElementById("defaultOpen").click();


