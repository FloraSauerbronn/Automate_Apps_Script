// Dia do Bolo YAAAAAY :D

function criarEventosRecorrentes() {
  // Configurações iniciais
  var dataInicio = new Date("2024-02-28T00:00:00"); // Data de início (quarta-feira)
  var dataFim = new Date("2024-06-26T23:59:59"); // Data de fim
  var numeroSemanas = 52; // Número de semanas para criar eventos recorrentes
  var listaConvidados = [
    { nome: "Flora", email: "flora.ufsc24@gmail.com" },
    { nome: "Fetter", email: "antoniofetter@gmail.com" },
    { nome: "Rafael", email: "rafael.bittencourt.2002@gmail.com" },
    { nome: "Gabriel", email: "gabrielsantincoutinho@gmail.com" },
    { nome: "Luiza", email: "lpfiorini@gmail.com" },
    { nome: "Gabi", email: "ffreiregabriela@gmail.com" },
    { nome: "Larissa", email: "larissa98ranny@gmail.com" },
    { nome: "Pamela", email: "pamela.costa2872@gmail.com" },
    { nome: "Daniel", email: "efraimedaniel@gmail.com" }
  ]; // Lista de convidados

  // Calcular intervalo entre os eventos (uma semana)
  var intervalo = 7 * 24 * 60 * 60 * 1000;

  // Obtém o calendário principal do usuário
  var calendario = CalendarApp.getDefaultCalendar();

  // Criar eventos recorrentes
  for (var i = 0; i < numeroSemanas; i++) {
    var dataEvento = new Date(dataInicio.getTime() + i * intervalo);

    // Verificar se a data do evento está após a data de fim
    if (dataEvento.getTime() > dataFim.getTime()) {
      Logger.log("Eventos criados até a data de fim.");
      break;
    }

    var convidado = listaConvidados[i % listaConvidados.length];
    var tituloEvento = "Hoje quem traz bolo é: " + convidado.nome;

    // Criar evento no calendário
    criarEvento(calendario, dataEvento, tituloEvento, [convidado.email]);

    // Enviar convite por e-mail
    enviarConvitePorEmail(convidado.email, tituloEvento, dataEvento);
  }
}

function criarEvento(calendario, data, titulo, convidados) {
  var evento = calendario.createEvent(
    titulo,
    data,
    new Date(data.getTime() + 1 * 60 * 60 * 1000), // Evento com 1 hora de duração
    {
      description: "Você é o selecionado da vez para trazer bolo e alimentar a pesquisa brasileira! Gratidão :)",
      location: "Bloco D - OCEANOGRAFIA",
      guests: convidados.join(','), // Adiciona convidados ao evento
    }
  );
}


function enviarConvitePorEmail(email, tituloEvento, dataEvento) {
  var corpoEmail = "Você está convidado para o evento: " + tituloEvento + " no dia " + dataEvento.toLocaleDateString('pt-BR');

  // Enviar e-mail
  MailApp.sendEmail({
    to: email,
    subject: "Convite para evento",
    body: corpoEmail
  });
}
