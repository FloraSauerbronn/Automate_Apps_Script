// Função para excluir eventos específicos
function excluirEventos() {
  var calendario = CalendarApp.getDefaultCalendar();
  var eventos = calendario.getEvents(new Date(), new Date("2100-01-01T00:00:00")); // Intervalo de datas sem limites

  for (var i = 0; i < eventos.length; i++) {
    var tituloEvento = eventos[i].getTitle();
    if (tituloEvento.startsWith("Hoje quem traz bolo é:")) {
      eventos[i].deleteEvent();
    }
  }

  Logger.log("Eventos específicos foram excluídos.");
}
