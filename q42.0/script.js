document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#teams-table tbody');

    // Função para criar uma linha na tabela
    function createRow(team) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${team.name}</td>
            <td>${team.group_letter}</td>
            <td>${team.group_points}</td>
            <td>${team.wins}</td>
            <td>${team.draws}</td>
            <td>${team.losses}</td>
            <td>${team.games_played}</td>
            <td>${team.goals_for}</td>
            <td>${team.goals_against}</td>
            <td>${team.goal_differential}</td>
        `;
        tableBody.appendChild(row);
    }

    // Função para buscar e processar os dados da API
    function loadTeams() {
        const apiUrl = 'https://worldcupjson.net/teams'; // URL da API com dados
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.groups.forEach(group => {
                    group.teams.forEach(team => createRow(team));
                });
            })
            .catch(error => console.error('Erro ao carregar os dados:', error));
    }

    // Carregar os times quando o DOM estiver pronto
    loadTeams();
});


