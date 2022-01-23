/*CMD
  command: 💷Incp1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Cpinfo
  answer: 
  keyboard: 
  aliases: 
CMD*/


  Libs.CoinPayments.apiCall({
    fields: { cmd: "get_basic_info" },
    onSuccess: "/onInfo"
  })
  

