/*CMD
  command: 🧩PC6
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 6
  answer: 
  keyboard: 
  aliases: 
CMD*/


Libs.CoinPayments.createPermanentWallet({
  currency: "TRX",
  label: "P6",
  onSuccess: "/WCR6",
  onIncome: "/DepoXGet6",
  onIPN: "/XIpn"
});

