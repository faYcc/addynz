/*CMD
  command: unbaned
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unban con params
  answer: 
  keyboard: 
  aliases: 
CMD*/

var id = Bot.getProperty("id")
Bot.sendMessage(""+id+"\nAction:* ♻️ UnBanned.",
  { is_reply: true }
)
