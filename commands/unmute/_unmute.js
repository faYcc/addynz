/*CMD
  command: /unmute
  help: 
  need_reply: 
  auto_retry_time: 
  folder: unmute
  answer: 
  keyboard: 
  aliases: .unmute
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/unmutez"
})

