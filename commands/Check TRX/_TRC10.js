/*CMD
  command: /TRC10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Check TRX
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
HTTP.get({url: "https://apilist.tronscan.org/api/token/price?token="+params+"",success: "/VALIDTRXWALLET"})
}

