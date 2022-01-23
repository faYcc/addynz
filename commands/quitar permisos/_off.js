/*CMD
  command: /off
  help: 
  need_reply: 
  auto_retry_time: 
  folder: quitar permisos
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/0c"
})

