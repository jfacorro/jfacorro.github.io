$(function (){
	if(typeof sIFR == "function"){
		// This is the older, ordered syntax
		sIFR.replaceElement(named({sSelector:"h1", sFlashSrc:"swf/sIFR/tradegothic.swf", sColor:"#000000", sLinkColor:"#000000", sBgColor:"#FFFFFF"}));
	};

	$('center').css('position','relative');
	$('center').css('top','500px');
	$('center > div').css('width','200px');
	$('center > div > span').css('display','none');
});