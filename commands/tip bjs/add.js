/*CMD
  command: add
  help: 
  need_reply: 
  auto_retry_time: 
  folder: tip bjs
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var a1 = params.split(" ")[0]
var a2 = params.split(" ")[1]
var balance = Libs.ResourcesLib.userRes(a1)
balance.add(+a2)
}
