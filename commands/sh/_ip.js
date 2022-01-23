/*CMD
  command: /ip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: sh
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
var ip = params
HTTP.get({
  url:
    "http://ipwhois.app/json/"+ip+"?lang=es",
  success: "/IPResultado"
})
} 
