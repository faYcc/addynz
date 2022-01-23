/*CMD
  command: /staff
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ETH
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (chat.chat_type == "private") {

return}
try {
  Api.getChatAdministrators({
    chat_id: chat.chatid,
    on_result: "/stafflii"
  })
} catch (err) {
  Bot.sendMessage(err)
  return
}

