/*CMD
  command: z

  <<HELP

  HELP
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Libs.CoinPayments.setPrivateKey("0Ce053ba850f6b3033dbAc5e8A3A5932afC1850B56129D7885E5ec2490F9e6c4");
Libs.CoinPayments.setPublicKey("e6582f241b0a9742b2ab1c40ba9f9efc56cefe9478cf6abe4f539cff33273f39");
Libs.CoinPayments.setBBApiKey('1rMC7TZHsUq_CDeBxHcWiwA-JhNUPmscXQi5XMwf');
Api.deleteMessage({message_id : request.message_id})
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
})
//Nombre de la Llave: Main Trade Project Bot
//Llave Pública: e6582f241b0a9742b2ab1c40ba9f9efc56cefe9478cf6abe4f539cff33273f39
//Llave Privada: 0Ce053ba850f6b3033dbAc5e8A3A5932afC1850B56129D7885E5ec2490F9e6c4
//Libs.CoinPayments.setPrivateKey("16d62e4902b658487D437311BafD9b2b12D16Bb42fc2ee6Fd863c85Bc6FD3367");
//Libs.CoinPayments.setPublicKey("8832e1d455655a1f9d3142ff94f1a4654f5f2cb4e406ae7a9a2af6ca6e9bc019");

// Get your BB Api Key from Bots.Business App in Profile
//Libs.CoinPayments.setBBApiKey("1rMC7TZHsUq_CDeBxHcWiwA-JhNUPmscXQi5XMwf");
