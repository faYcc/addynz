/*CMD
  command: ➖CheckBal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

const z = User.getProperty("i")
Bot.setProperty("ad", message,"string")
Bot.editMessage("Envía la cantidad", z)
Bot.runCommand("➖CheckBal3")

