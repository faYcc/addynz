/*CMD
  command: ❄️TransCur
  help: 
  need_reply: 
  auto_retry_time: 
  folder: tip bjs
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
return} 
var cur = options.cur
var amo = options.amo
var user = options.user
var name = options.name
var b = Libs.ResourcesLib.userRes(cur)
var bb = Libs.ResourcesLib.anotherChatRes(cur, user)
if(b.value() < amo){
return
}
if(b.value() > amo){
return
}
bb.add(+amo)
Api.sendMessage({text : "👮 "+user.first_name+" tipped "+amo+" "+cur+" To "+name+"",parse_mode : "Markdown"})
