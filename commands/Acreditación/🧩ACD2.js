/*CMD
  command: 🧩ACD2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Acreditación
  answer: 
  keyboard: 
  aliases: 
CMD*/

var z = User.getProperty("id")
Bot.runCommand('🧩AC'+' '+message+'') 
Api.deleteMessage({message_id : request.message_id}) 
