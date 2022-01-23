/*CMD
  command: 🧩PC5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 5
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P5",
  onSuccess: "/WCR5",
  onIncome: "/DepoXGet5",
  onIPN: "/XIpn"
});

