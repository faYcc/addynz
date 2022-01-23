/*CMD
  command: /pin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: pin
  answer: 
  keyboard: 
  aliases: .pin
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/pinz"
})

