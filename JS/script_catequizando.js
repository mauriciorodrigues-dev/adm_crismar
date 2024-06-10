const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        switch (button.id) {
            case 'btn_catequizando-inscricao':
                alert('Função: Inscrição');
                break;
            case 'btn_catequizando-edit':
                alert('Função: Editar');
                break;
            case 'btn_catequizando-delete':
                alert('Função: Excluir');
                break;
        }
    });
});