/*CMD
  command: /ban
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ban
  answer: 
  keyboard: 
  aliases: .ban
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/ban1"
})

