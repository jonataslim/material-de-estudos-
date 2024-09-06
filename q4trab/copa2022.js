document.addEventListener('DOMContentLoaded', function() {
    const tabela = document.getElementById('copa2022').getElementsByTagName('tbody')[0];

    // Função para carregar os dados JSON e atualizar a tabela
    function carregarDados() {
        fetch('https://worldcupjson.net/matches')
            .then(response => response.json())
            .then(dados => {
                dados.forEach(jogo => {
                    const row = tabela.insertRow();
                    row.insertCell().textContent = new Date(jogo.datetime).toLocaleDateString('pt-BR');
                    row.insertCell().textContent = new Date(jogo.datetime).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                    row.insertCell().textContent = jogo.home_team_country;
                    row.insertCell().textContent = jogo.home_team.goals;
                    row.insertCell().textContent = jogo.away_team.goals;
                    row.insertCell().textContent = jogo.away_team_country;
                    row.insertCell().textContent = jogo.venue;
                    row.insertCell().textContent = jogo.location;
                });
            })
            .catch(error => {
                console.error('Erro ao carregar os dados:', error);
            });
    }

    // Carregar os dados ao iniciar
    carregarDados();
});
