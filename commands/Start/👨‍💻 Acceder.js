/*CMD
  command: 👨‍💻 Acceder
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Start
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid;
let ch = Bot.getProperty("channel") 
Api.getChatMember({
chat_id : ch,
user_id : id,
on_result : "🧩GA"})
