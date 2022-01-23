/*CMD
  command: ➕CheckBal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Sección Balance
  answer: 
  keyboard: 
  aliases: 
CMD*/

const z = User.getProperty("i")
Bot.editMessage("Envía la cantidad",z)
User.setProperty("ad", message,"string")
User.setProperty("i", z,"string")
Bot.runCommand("➕CheckBal3") 
