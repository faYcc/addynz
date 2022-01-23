/*CMD
  command: 🧩PC
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Plan
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P1",
  onSuccess: "/WCR",
  onIncome: "/DepoXGet",
  onIPN: "/XIpn"
});

