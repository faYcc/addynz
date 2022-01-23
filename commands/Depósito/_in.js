/*CMD
  command: /in
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Depósito
  answer: 
  keyboard: 
  aliases: 
CMD*/

const depo = User.getProperty("depom")
if (depo) {
  Bot.sendMessage(
    "➕*Puedes empezar una inversión a partir de 10 Trx aquí*\n\n📊*Plan de retorno 1.5% Diariamente hasta acreditar 200%*"
  )
  Bot.sendMessage("Envíe su inversión a la siguiente wallet")
  Bot.sendMessage("`" + depo + "`")
} else {

  Bot.runCommand("🧩IN")
}

