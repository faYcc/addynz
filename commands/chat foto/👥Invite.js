/*CMD
  command: 👥Invite
  help: 
  need_reply: 
  auto_retry_time: 
  folder: chat foto
  answer: 
  keyboard: 
  aliases: 
CMD*/


var admin = Bot.getProperty("admin1"+user.telegramid)
if(user.telegramid == admin){
Api.invite_link({
invite_link: invite_link
})

Bot.sendMessage(invite_link)
}else{
Bot.sendMessage("`you don't have permission to do this`🥺", { is_reply: true })
}
