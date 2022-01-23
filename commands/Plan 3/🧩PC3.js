/*CMD
  command: 🧩PC3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 3
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P3",
  onSuccess: "/WCR3",
  onIncome: "/DepoXGet3",
  onIPN: "/XIpn"
});


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P3",
  onSuccess: "/WCR3",
  onIncome: "/DepoXGet3",
  onIPN: "/XIpn"
});

