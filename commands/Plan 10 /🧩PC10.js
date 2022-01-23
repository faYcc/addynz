/*CMD
  command: 🧩PC10
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 10 
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P10",
  onSuccess: "/WCR10",
  onIncome: "/DepoXGet10",
  onIPN: "/XIpn"
});

