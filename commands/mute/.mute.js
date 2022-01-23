/*CMD
  command: .mute
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mute
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: ".mutez"
})

