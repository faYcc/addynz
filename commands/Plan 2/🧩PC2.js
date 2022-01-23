/*CMD
  command: 🧩PC2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 2
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P2",
  onSuccess: "/WCR2",
  onIncome: "/DepoXGet2",
  onIPN: "/XIpn"
});

