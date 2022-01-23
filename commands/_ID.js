/*CMD
  command: /ID
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var co = Bot.getProperty("CodeList")
Bot.sendMessage("*Todos los ID Autorizados* \n===============\n\n"+co+"\n\n*Tal vez haya más pero me da igual, coloco los que yo quiera*")
