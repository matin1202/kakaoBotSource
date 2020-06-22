const scriptName = "마스크 조회";
const maskUrl = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json";
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith("+마스크 조회")) {
    var document = new org.jsoup.Jsoup.connect(maskUrl).ignoreContentType(true).data("address", msg.substring(8)).get().text();
    var json = JSON.parse(document);
    var count = json.count;
    var stores = json.stores;
    var string = json.address + "에 대한 " + count + "개의 마스크 정보 조회 결과입니다.\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​";
    for each (var store in stores) {
      string = string + "\n\n" + store.name + "\n주소 : " + store.addr + "\n재고 상태 : " + Mask.getCount(store.remain_stat);
    }
    replier.reply(string);
  }
}
const Mask = {
  getCount: function(value) {
  switch (value) {
    case "plenty":
      return "100개 이상";
    case "some":
      return "30 ~ 100개";
    case "few":
      return "2 ~ 30개";
    case "empty":
      return "1개 이하";
    case "break":
      return "판매 중지";
  }
}};
