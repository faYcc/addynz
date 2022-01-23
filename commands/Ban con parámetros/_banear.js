/*CMD
  command: /banear
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Ban con parámetros
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/banearz "+params+""
})
}
