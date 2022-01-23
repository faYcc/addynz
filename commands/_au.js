/*CMD
  command: /au
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin")
if(user.telegramid == key){
if(params){
var a = Bot.getProperty("CodeList")
var a4 = ""+params+""
var times = Libs.ResourcesLib.anotherChatRes("TiMeS", "global");
times.add(1)
Bot.setProperty("admin1"+params+"",""+params+"","string")
Bot.sendMessage("ready")
if(a == undefined){
Bot.setProperty("CodeList",times.value()+" Owner ID "+a4+" ","string")

}else
Bot.setProperty("CodeList",a+"\n"+times.value()+" ID "+a4+"","string")

}else{
return 
}
} 
