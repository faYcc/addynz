/*CMD
  command: Welcome_0
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 🗣️ Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var new_user = User.getProperty ("new_user")
if(!new_user){ 
Bot.sendMessage("🚦New User🚦\n\n⚜ User = "+user.first_name+"\n🔰 Username = @"+user.username+"\n🆔 User ID = "+user.telegramid+"\n📛 User Link = ["+user.first_name+"](tg://user?id="+user.telegramid+")\nJoined on : "+time+"",{ is_reply: true })
User.setProperty ("new_user",true,"boolean")
}
