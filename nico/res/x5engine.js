// Incomedia WebSite X5 2007. All rights reserved.
var imBrw_op=window.opera;
var imBrw_ie=document.all && !imBrw_op;
var imBrw_ns=document.getElementById && !imBrw_ie;
var imEffectEnabled = /MSIE [678]/.test(navigator.userAgent) && navigator.platform == "Win32";
var imHoverToEnable = /MSIE (5\.5)|[6]/.test(navigator.userAgent) && navigator.platform == "Win32";
var mbTipOk = false;
function imGetLayer(sName) {return document.all?document.all[sName]:document.getElementById?document.getElementById(sName) : "";}
function imIEBody(){return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body}
function imOpenLocation(sNewLocation){
document.location = sNewLocation;
}
function imGetParameter(sParamName) {
var sQueryString = "";
var iStart = 0;
var iEnd = 0;
if (window.top.location.search != 0)
sQueryString = unescape(window.top.location.search);
sParamName = sParamName + "=";
if (sQueryString.length > 0) {
iStart = sQueryString.indexOf(sParamName);
if ( iStart != -1 ) {
iStart += sParamName.length;
iEnd = sQueryString.indexOf("&",iStart);
if (iEnd == -1)
iEnd = sQueryString.length;
return sQueryString.substring(iStart,iEnd);
}
return null;
}
}
function imOnload() {
if (document.getElementById("imMnMn") != null) {
if (document.getElementsByTagName) {
if (imHoverToEnable) {
var oList = document.getElementById("imMnMn").getElementsByTagName("LI");
for (var i=0; i<oList.length; i++) {
oList[i].onmouseover=function() {this.className+=" iehover";}
oList[i].onmouseout=function() {this.className=this.className.replace(new RegExp(" iehover\\b"), "");}
}
}
}
}
}
if (window.attachEvent) window.attachEvent("onload", imOnload);
function imPreloadImages(sImgNames) {
sNames = sImgNames.split(",");
for(iList = 0 ; iList < sNames.length ; iList++) {
var oImg = new Image();
oImg.src = sNames[iList];
}
}
function imFormatInt(i) {
if (i<10) i='0'+i;
return i;
}
function imShowHour() {
var now=new Date();
imGetLayer("imHour").innerHTML = now.getHours()+':'+imFormatInt(now.getMinutes())+':'+imFormatInt(now.getSeconds())+' ';
setTimeout(imShowHour,1000);
}
function imShowDate(sDay,sMonth,iMode) {
var now=new Date();
if (iMode == 0)
document.write(sDay.substr(now.getDay()*3,3)+' '+now.getDate()+' '+sMonth.substr(now.getMonth()*3,3)+', '+now.getFullYear());
else
document.write(sDay.substr(now.getDay()*3,3)+', '+sMonth.substr(now.getMonth()*3,3)+' '+now.getDate()+' '+now.getFullYear());
}
function imPopUpWin(sUrl,w,h,cb,sb){
if (cb=='yes')
sProp='';
else {
if ((w==-1) || (h==-1)) {
sProp= 'width='+screen.width+',height='+screen.height+',top=0,left=0,scrollbars=no,location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
} else {
l=(screen.width)?(screen.width-w)/2:100;
t=(screen.height)?(screen.height-h)/2:100;
sProp='width='+ w +',height='+ h +',top='+ t +',left='+ l +',scrollbars='+ sb +',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=no';
}
}
oWin=window.open(sUrl,'',sProp);
oWin.focus();
}
var msSSTrans = new Array(50);
msSSTrans[0] = "BasicImage(grayscale=0, xray=0, mirror=0, invert=0, opacity=1, rotation=0)";
msSSTrans[1] = "rnd";
msSSTrans[2] = "Barn(motion='out',orientation='vertical')";
msSSTrans[3] = "Barn(motion='out',orientation='horizontal')";
msSSTrans[4] = "Barn(motion='in',orientation='vertical')";
msSSTrans[5] = "Barn(motion='in',orientation='horizontal')";
msSSTrans[6] = "Blinds(Bands=2,direction='up')";
msSSTrans[7] = "Blinds(Bands=2,direction='down')";
msSSTrans[8] = "Blinds(Bands=2,direction='left')";
msSSTrans[9] = "Blinds(Bands=2,direction='right')";
msSSTrans[10] = "Blinds(Bands=15,direction='up')";
msSSTrans[11] = "Blinds(Bands=15,direction='down')";
msSSTrans[12] = "Blinds(Bands=15,direction='left')";
msSSTrans[13] = "Blinds(Bands=15,direction='right')";
msSSTrans[14] = "Checkerboard(Direction='up',SquaresX=4,SquaresY=4)";
msSSTrans[15] = "Checkerboard(Direction='down',SquaresX=4,SquaresY=4)";
msSSTrans[16] = "Checkerboard(Direction='left',SquaresX=4,SquaresY=4)";
msSSTrans[17] = "Checkerboard(Direction='right',SquaresX=4,SquaresY=4)";
msSSTrans[18] = "Checkerboard(Direction='up',SquaresX=50,SquaresY=12)";
msSSTrans[19] = "Checkerboard(Direction='down',SquaresX=50,SquaresY=12)";
msSSTrans[20] = "Checkerboard(Direction='left',SquaresX=50,SquaresY=12)";
msSSTrans[21] = "Checkerboard(Direction='right',SquaresX=50,SquaresY=12)";
msSSTrans[22] = "Fade(Overlap=1.00)";
msSSTrans[23] = "Fade(Overlap=0.00)";
msSSTrans[24] = "GradientWipe(GradientSize=0.00,wipestyle=0,motion='forward')";
msSSTrans[25] = "GradientWipe(GradientSize=0.00,wipestyle=0,motion='reverse')";
msSSTrans[26] = "GradientWipe(GradientSize=0.00,wipestyle=1,motion='forward')";
msSSTrans[27] = "GradientWipe(GradientSize=0.00,wipestyle=1,motion='reverse')";
msSSTrans[28] = "GradientWipe(GradientSize=0.75,wipestyle=0,motion='forward')";
msSSTrans[29] = "GradientWipe(GradientSize=0.75,wipestyle=0,motion='reverse')";
msSSTrans[30] = "GradientWipe(GradientSize=0.75,wipestyle=1,motion='forward')";
msSSTrans[31] = "GradientWipe(GradientSize=0.75,wipestyle=1,motion='reverse')";
msSSTrans[32] = "Iris(irisstyle='PLUS',motion='out')";
msSSTrans[33] = "Iris(irisstyle='PLUS',motion='in')";
msSSTrans[34] = "Iris(irisstyle='DIAMOND',motion='out')";
msSSTrans[35] = "Iris(irisstyle='DIAMOND',motion='in')";
msSSTrans[36] = "Iris(irisstyle='CIRCLE',motion='out')";
msSSTrans[37] = "Iris(irisstyle='CIRCLE',motion='in')";
msSSTrans[38] = "Iris(irisstyle='CROSS',motion='out')";
msSSTrans[39] = "Iris(irisstyle='CROSS',motion='in')";
msSSTrans[40] = "Iris(irisstyle='SQUARE',motion='out')";
msSSTrans[41] = "Iris(irisstyle='SQUARE',motion='in')";
msSSTrans[42] = "Iris(irisstyle='STAR',motion='out')";
msSSTrans[43] = "Iris(irisstyle='STAR',motion='in')";
msSSTrans[44] = "RadialWipe(wipestyle='CLOCK')";
msSSTrans[45] = "RadialWipe(wipestyle='WEDGE')";
msSSTrans[46] = "RadialWipe(wipestyle='RADIAL')";
msSSTrans[47] = "Wheel(spokes=2)";
msSSTrans[48] = "Wheel(spokes=4)";
msSSTrans[49] = "Wheel(spokes=10)";
msSSTrans[50] = "RandomBars(orientation='horizontal')";
msSSTrans[51] = "RandomBars(orientation='vertical')";
msSSTrans[52] = "RandomDissolve(duration=1)";
msSSTrans[53] = "Slide(slidestyle='HIDE',Bands=1)";
msSSTrans[54] = "Slide(slidestyle='SWAP',Bands=1)";
msSSTrans[55] = "Slide(slidestyle='PUSH',Bands=1)";
msSSTrans[56] = "Slide(slidestyle='HIDE',Bands=2)";
msSSTrans[57] = "Slide(slidestyle='SWAP',Bands=2)";
msSSTrans[58] = "Slide(slidestyle='PUSH',Bands=2)";
msSSTrans[59] = "Slide(slidestyle='HIDE',Bands=10)";
msSSTrans[60] = "Slide(slidestyle='SWAP',Bands=10)";
msSSTrans[61] = "Slide(slidestyle='PUSH',Bands=10)";
msSSTrans[62] = "Spiral(GridSizeX=8,GridSizeY=8)";
msSSTrans[63] = "Spiral(GridSizeX=16,GridSizeY=16)";
msSSTrans[64] = "Zigzag(GridSizeX=6,GridSizeY=6)";
msSSTrans[65] = "Zigzag(GridSizeX=12,GridSizeY=12)";
msSSTrans[66] = "Stretch(stretchstyle='HIDE')";
msSSTrans[67] = "Stretch(stretchstyle='PUSH')";
msSSTrans[68] = "Stretch(stretchstyle='SPIN')";
msSSTrans[69] = "Strips(motion='rightdown')";
msSSTrans[70] = "Strips(motion='leftdown')";
msSSTrans[71] = "Strips(motion='rightup')";
msSSTrans[72] = "Strips(motion='leftup')";
msSSTrans[73] = "Pixelate(MaxSquare=5)";
msSSTrans[74] = "Pixelate(MaxSquare=50)";
msSSTrans[75] = "Inset()";
var msImgList = new Array();
var miImgW = new Array();
var miImgH = new Array();
var miSSDelay = new Array();
var miSSEffect = new Array();
var msSSDescr = new Array();
var msSSLink = new Array();
var miSSCount = new Array();
var moSSTime = new Array();
function imSSLoad(iID,oImgData) {
msImgList[iID] = new Array();
miImgW[iID] = new Array();
miImgH[iID] = new Array();
miSSEffect[iID] = new Array();
miSSDelay[iID] = new Array();
msSSDescr[iID] = new Array();
msSSLink[iID] = new Array();
for(i=0;i<oImgData.length;i++){
msImgList[iID][i+1] = "slideshow/"+oImgData[i][0];
miImgW[iID][i+1] = oImgData[i][1];
miImgH[iID][i+1] = oImgData[i][2];
miSSDelay[iID][i+1] = oImgData[i][3]*1000;
miSSEffect[iID][i+1] = oImgData[i][4];
msSSDescr[iID][i+1] = oImgData[i][5];
msSSLink[iID][i+1] = oImgData[i][6];
}
if(!miSSCount[iID]) miSSCount[iID]=1;
}
function imDoTrans(iID,iStep) {
iLast = msImgList[iID].length-1;
miSSCount[iID]=(miSSCount[iID]+iStep);
if (miSSCount[iID] == iLast + 1) miSSCount[iID] = 1;
if (miSSCount[iID] == 0) miSSCount[iID] = iLast;
var div_Descr=imGetLayer("imSSDescr_"+iID);
var div_Main=imGetLayer("imSSBackg_"+iID);
var div_Image=imGetLayer("imSSImage_"+iID);
if (imEffectEnabled) {
if (miSSEffect[iID][miSSCount[iID]] == 1)
iSSEffectType = Math.floor(Math.random()*73) + 2;
else
iSSEffectType = miSSEffect[iID][miSSCount[iID]];
div_Main.style.filter="progid:DXImageTransform.Microsoft."+msSSTrans[iSSEffectType];
div_Main.filters.item(0).Apply();
}
div_Descr.innerHTML=msSSDescr[iID][miSSCount[iID]];
div_Image.src = msImgList[iID][miSSCount[iID]];
iHeight=parseInt(msSSDescr[iID][miSSCount[iID]]==''?0:div_Descr.offsetHeight);
iTop=parseInt((div_Main.offsetHeight-miImgH[iID][miSSCount[iID]]-iHeight)/2);
div_Image.style.top=iTop+'px';
div_Descr.style.top=iTop+miImgH[iID][miSSCount[iID]]+'px';
div_Image.style.left=parseInt((div_Main.offsetWidth-miImgW[iID][miSSCount[iID]])/2)+'px';
if (imEffectEnabled) div_Main.filters.item(0).Play();
if(msSSLink[iID][miSSCount[iID]] != "#")
div_Image.style.cursor = 'pointer';
else
div_Image.style.cursor = 'default';
iNext = miSSCount[iID]+1
if (iNext <= iLast) {
oImg = new Image();
oImg.src = msImgList[iID][iNext];
}
}
function imLink(iID){
if(msSSLink[iID][miSSCount[iID]] != "#")
location = msSSLink[iID][miSSCount[iID]];
}
function imDoAuto(iID) {
imDoTrans(iID,1);
iAutoDelay=miSSDelay[iID][miSSCount[iID]];
moSSTime[iID]=setTimeout("imDoAuto("+iID+")", iAutoDelay);
}
function imSSPlay(iID,Auto,iBtnType) {
if (Auto == 1) {
miSSCount[iID]=1;
iAutoDelay=miSSDelay[iID][miSSCount[iID]];
moSSTime[iID]=setTimeout("imDoAuto("+iID+")", iAutoDelay);
}
else {
cmd_Auto = imGetLayer('imssPlay_' + iID);
if (cmd_Auto.alt == 'Pause') {
cmd_Auto.alt='Play';
cmd_Auto.src='res/ss_play'+iBtnType+'.gif';
clearTimeout(moSSTime[iID]);
}
else {
cmd_Auto.alt='Pause';
cmd_Auto.src='res/ss_pause'+iBtnType+'.gif';
imDoTrans(iID, 1);
iAutoDelay=miSSDelay[iID][miSSCount[iID]];
moSSTime[iID]=setTimeout("imDoAuto("+iID+")", iAutoDelay);
}
}
}
function imZIZoom(sImage,iHeight,iWidth,sDescr) {
var imZIdiv_Backg = imGetLayer("imZIBackg");
var imZIdiv_Image = imGetLayer("imZIImage");
var imZIyScroll;
var imZIwindowHeight;
if (window.innerHeight && window.scrollMaxY)
imZIyScroll = window.innerHeight + window.scrollMaxY;
else if (document.body.scrollHeight > document.body.offsetHeight)
imZIyScroll = document.body.scrollHeight;
else
imZIyScroll = document.body.offsetHeight;
if (self.innerHeight)
imZIwindowHeight = self.innerHeight;
else if (document.documentElement && document.documentElement.clientHeight)
imZIwindowHeight = document.documentElement.clientHeight;
else if (document.body)
imZIwindowHeight = document.body.clientHeight;
imZIpageHeight = imZIyScroll < imZIwindowHeight ? imZIwindowHeight : imZIyScroll;
if (self.pageYOffset)
imZIyScroll = self.pageYOffset;
else if (document.documentElement && document.documentElement.scrollTop)
imZIyScroll = document.documentElement.scrollTop;
else if (document.body)
imZIyScroll = document.body.scrollTop;
imZIdiv_Backg.style.top = '0px';
imZIdiv_Backg.style.height = (imZIpageHeight + 'px');
imZIdiv_Backg.style.zIndex = '2000';
var imZIImageTop = imZIyScroll + ((imZIwindowHeight - 35 - iHeight) / 2);
var div_Descr = "";
if (sDescr!="") div_Descr = "<div id=\"imZICaption\">" + sDescr + "</div>";
imZIdiv_Backg.innerHTML = "<div id=\"imZIImage\" style=\"margin-top:" + ((imZIImageTop < 0) ? "0px" : imZIImageTop) + "px" + "; width: " + (iWidth + 14) + "px\"><img src=\"" + sImage + "\" width=\"" + iWidth + "\" height=\"" + iHeight + "\" />" + div_Descr + "</div>";
imZIdiv_Backg.style.display = "block";
}
function imZIHide(){
imGetLayer("imZIBackg").style.display = "none";
imGetLayer("imZIImage").innerHtml = "";
}
