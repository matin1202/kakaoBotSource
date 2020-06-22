const coInKorea = "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=&brdGubun=&ncvContSeq=&contSeq=&board_id=&gubun=";

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
	if(msg == "+현황"){
		try{
			var doc = new org.jsoup.Jsoup.connect(coInKorea).get();
			var elements = doc.select(".num td");
			var buffer = "확진 환자 수 : "+elements.eq(0).text()+"\n완치 환자 수 : "+elements.eq(1).text()+"\n격리 중 환자 수 : "+elements.eq(2).text()+"\n사망자 수 : "+elements.eq(3).text();
			replier.reply(buffer);
		}catch(e){
			Log.e(e+","+e.lineNumber);
		}
	}
}