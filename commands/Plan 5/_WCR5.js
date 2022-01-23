/*CMD
  command: /WCR5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Plan 5
  answer: 
  keyboard: 
  aliases: 
CMD*/


let wallet = options.result.address;
User.setProperty("p5", wallet, "string");
Bot.runCommand("🧩P5") 
