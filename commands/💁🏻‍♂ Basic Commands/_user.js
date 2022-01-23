/*CMD
  command: /user
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💁🏻‍♂ Basic Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

var name = ""+request.reply_to_message.from.first_name+""
var user = ""+request.reply_to_message.from.username+""
var namee = ""+request.reply_to_message.from.last_name+""
var id = ""+request.reply_to_message.from.id+""

Bot.sendMessage("Exᴛʀᴀᴄᴛᴇᴅ Dᴀᴛᴀʙᴀsᴇ Fʀᴏᴍ Tᴇʟᴇɢʀᴀᴍ's Dᴀᴛᴀʙᴀsᴇ\n\nFirst Name : "+name+"\nLast Name : "+namee+"\nUsername : @"+user+"\n\n🆔 User ID = "+id+"\n📛 User Link = [""Click Here""](tg://user?id="+id+")",{ is_reply: true })

