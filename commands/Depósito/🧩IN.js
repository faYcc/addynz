/*CMD
  command: 🧩IN
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Depósito
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: ""+bot.name+"",
  onSuccess: "/WCR",
  onIncome: "/DepoXGet",
  onIPN: "/XIpn"
});
