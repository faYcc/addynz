/*CMD
  command: 🧩PC9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 9
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P9",
  onSuccess: "/WCR9",
  onIncome: "/DepoXGet9",
  onIPN: "/XIpn"
});

