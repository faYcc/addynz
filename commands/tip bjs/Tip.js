/*CMD
  command: Tip
  help: 
  need_reply: false
  auto_retry_time: 
  folder: tip bjs
  answer: 
  keyboard: 
  aliases: tip
CMD*/

if(params){
var amo = params.split(" ")[0] 
var cur = params.split(" ")[1] 
var id = ""+request.reply_to_message.from.id+""
var name = ""+request.reply_to_message.from.first_name+""

var b = Libs.ResourcesLib.userRes(cur)
var bb = Libs.ResourcesLib.anotherUserRes(cur, id)
if(b.value() < amo){
Bot.sendMessage("a") 
return
}
if(amo > b.value()){
Bot.sendMessage("b") 
return
}
b.add(-amo)
bb.add(+amo)
Api.sendMessage({text : "👮 "+user.first_name+" tipped "+amo+" "+cur+" To "+name+"",parse_mode : "Markdown"})
}

