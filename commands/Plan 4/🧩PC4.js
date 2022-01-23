/*CMD
  command: 🧩PC4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 4
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P4",
  onSuccess: "/WCR4",
  onIncome: "/DepoXGet4",
  onIPN: "/XIpn"
});

