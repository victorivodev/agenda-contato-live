async function fetchAndDisplayContacts() {
  try {
    const response = await fetch('/contatos');
    const data = await response.json();
    const contactsTableBody = document.getElementById('contactsTableBody');
    contactsTableBody.innerHTML = ''; // Limpa os dados anteriores da tabela
    data.forEach(contact => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${contact.nome}</td>
        <td>${contact.email}</td>
        <td>${contact.telefone}</td>
        <td>
          <button class="btn btn-sm btn-info mr-2">Editar</button>
          <button class="btn btn-sm btn-danger">Excluir</button>
        </td>
      `;
      contactsTableBody.appendChild(row);
    });
  } catch (error) {
    console.error('Erro ao buscar contatos:', error);
  }
}

window.onload = fetchAndDisplayContacts;