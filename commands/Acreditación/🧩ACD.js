/*CMD
  command: 🧩ACD
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Acreditación
  answer: 
  keyboard: 
  aliases: 
CMD*/

var z = User.getProperty("id")
Bot.editMessage("Envíame los detalles de la siguiente manera\nID de usuario Cantidad de acreditación TRX ID de inversión\n Ejemplo\n1885642106 10 TRX 1",z)
Bot.runCommand("🧩ACD2") 
