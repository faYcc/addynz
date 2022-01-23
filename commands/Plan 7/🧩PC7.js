/*CMD
  command: 🧩PC7
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 7
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P7",
  onSuccess: "/WCR7",
  onIncome: "/DepoXGet7",
  onIPN: "/XIpn"
});

