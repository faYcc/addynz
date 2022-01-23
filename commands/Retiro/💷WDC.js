/*CMD
  command: 💷WDC
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Retiro
  answer: 
  keyboard: 
  aliases: 
CMD*/

var c = User.getProperty("id") 
Libs.CoinPayments.apiCall({
  fields: { cmd: "get_withdrawal_info",
            id: c
          },
  onSuccess: "💶WD"
          })
