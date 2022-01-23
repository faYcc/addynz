/*CMD
  command: /promote
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/promotez"
})

