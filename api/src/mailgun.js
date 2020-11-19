var api_key = "b5c113301e92d7905ae874c95a2a0d3b-2af183ba-def9cce4";
var domain = "sandboxe9e3450cb5b04c92a05e5501df8811fe.mailgun.org";
var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

var data = {
  from: "wachu <mauroocando@gmail.com>",
  to: "mauroocando@gmail.com",
  subject: "Q FUNCIONE LA PUTA Q ME PARIO",
  text: "Testing some Mailgun awesomeness!",
};

mailgun.messages().send(data, function (error, body) {
  if (error) {
    console.log(error);
  }
  console.log(body);
});
