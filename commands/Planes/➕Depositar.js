/*CMD
  command: ➕Depositar
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Planes
  answer: 
  keyboard: 
  aliases: 
CMD*/

const b = [
  [
    { title: "Plan 1 ~50 TRX~", command: "🧩P1" },
    { title: "Plan 2 ~100 TRX~", command: "🧩P2" },
    { title: "Plan 3 ~150 TRX~", command: "🧩P3" }
  ],
  [
    { title: "Plan 4 ~300 TRX~", command: "🧩P4" },
    { title: "Plan 5 ~500 TRX~", command: "🧩P5" },
    { title: "Plan 6 ~1k TRX~", command: "🧩P6" }
  ],
  [
    { title: "Plan 7 ~1.5k TRX~", command: "🧩P7" },
    { title: "Plan 8 ~3k TRX~", command: "🧩P8" },
    { title: "Plan 9 ~5k TRX~", command: "🧩P9" }
  ],
  [{ title: "Plan 10 ~10k TRX~", command: "🧩P10" }]
]
Bot.sendInlineKeyboard(b, "🧩Escoja uno de nuestros planes de inversión")
return

