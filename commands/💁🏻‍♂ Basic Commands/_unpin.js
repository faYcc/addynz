/*CMD
  command: /unpin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💁🏻‍♂ Basic Commands
  answer: 
  keyboard: 
  aliases: .unpin
CMD*/

let id = user.telegramid
Api.getChatMember({
  user_id: id,
  on_result: "/unpinz"
})

