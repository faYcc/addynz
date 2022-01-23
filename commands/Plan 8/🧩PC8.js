/*CMD
  command: 🧩PC8
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Plan 8
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P8",
  onSuccess: "/WCR8",
  onIncome: "/DepoXGet8",
  onIPN: "/XIpn"
});

