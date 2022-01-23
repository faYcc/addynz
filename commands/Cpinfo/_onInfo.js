/*CMD
  command: /onInfo
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Cpinfo
  answer: 
  keyboard: 
  aliases: 
CMD*/

var data = JSON.parse(content)
var us = data.result.username
var mcid = data.result.merchant_id
var em = data.result.email
var kyc = data.result.kyc_status
Bot.sendMessage(
  "Coinpayments Username: " +
    us +
    "\nMerchant ID: " +
    mcid +
    "\nEmail: " +
    em +
    "\nKYC Verified: " +
    kyc +
    ""
)

