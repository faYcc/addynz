/*CMD
  command: /title
  help: 
  need_reply: 
  auto_retry_time: 
  folder: título de admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/titlez "+params+""
})
}
