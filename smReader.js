var sg = 0;
var sg3 = 0;
var firstChart = 0;
var chartNumber = 1;
var keySecond = 0;
var secondChart = [];
var keyThird = 0;
var title = "";
var songTitleClean;
var tickCount = 0;
var tickCount2 = 0;
var tickCount3 = 0;
var tickCount4 = 0;
var tickCount5 = 0;
var tickCount6 = 0;
var stopSign = [];
var stopsTick;
var stopsTime;
var stopSplit = [];
var stopSplit1 = [];
var stopSplit2 = [];
var rawStopsS = ""
var stepN = 0;
var keyDebug = 0;
var debugArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
var foundExpString = ""
var gs = [];
var arrayNew = [];
var newSong = 0;
var offsetParsed = 0;
var offsetCleanNinus = "";
var offsetParsedMinus = "";
var files = ""
var skipAhead = 0;
var timeWait = 0;
var clicker = 0;
var offsetClean = 0;
var foundNum = "";
var foundExp = "";
var replace = "";
var replacedExp = [];
var splitter = "";
var splitterAcc = [];
var splitterAcc2 = [];
var splitter2 = "";
var splitterNum1 = [];
var splitterNum2 = [];
var splitterAccFinal = "";
var bpmTick = [];
var bpmRate = [];
var bpmtick = [];
var bpmrate = [];
var splitterAcc = [];
var splitterAcc2 = [];
var splitterNum1 = [];
var splitterNum2 = [];
var replacedExp = [];
var foundExp1 = [];
var foundExp2 = [];
var foundNumA1 = [];
var foundNumA2 = [];
var button1 = "";
var button2 = "";
var button3 = "";
var button4 = "";
var alert1 = "";
var button1Code = "KeyA";
var button2Code = "KeyS";
var button3Code = "KeyK";
var button4Code = "KeyL";
var fullArrayCopy = [];
var currentBpmArray = [];
var array = [];
var array1 = [];
var arrayTime = [];
var newArray = [];
var fullArray = [];
var acc = 0;
var count = 0;
var lineN = 0;
var commaIndex = [];
var index = 0;
var commaIndexT = [];
var key = 0;
var scCount = 0;
var rawBpmArray = [];
var rawBpmArrayS = "";
var bpmTick = [];
var bpmRate = [];
var tickCheck = 0;
// console.time('Time');
// fs = require('fs');
// var allContents = fs.readFileSync('sm.txt', 'utf-8');
var allContents = "";
var cTime = 0;
var stepRate = 0;
var movement1 = 10000000;
var movement2 = 10000000;
var movement3 = 10000000;
var movement4 = 10000000;
var movement5 = 10000000;
var movement6 = 10000000;
var movement7 = 10000000;
var movement8 = 10000000;
var movement9 = 10000000;
var movement10 = 10000000;
var movement1b = 10000000;
var movement2b = 10000000;
var movement3b = 10000000;
var movement4b = 10000000;
var movement1c = 10000000;
var movement2c = 10000000;
var movement3c = 10000000;
var movement4c = 10000000;
var movement1d = 10000000;
var movement2d = 10000000;
var movement3d = 10000000;
var movement4d = 10000000;
var movement1e = 10000000;
var movement2e = 10000000;
var movement3e = 10000000;
var movement4e = 10000000;
var movement1f = 10000000;
var movement2f = 10000000;
var movement3f = 10000000;
var movement4f = 10000000;
var movement1g = 10000000;
var movement2g = 10000000;
var movement3g = 10000000;
var movement4g = 10000000;
var movement1h = 10000000;
var movement2h = 10000000;
var movement3h = 10000000;
var movement4h = 10000000;
var movement1i = 10000000;
var movement2i = 10000000;
var movement3i = 10000000;
var movement4i = 10000000;
var movement1j = 10000000;
var movement2j = 10000000;
var movement3j = 10000000;
var movement4j = 10000000;
var movement1k = 10000000;
var movement2k = 10000000;
var movement3k = 10000000;
var movement4k = 10000000;
var movement1l = 10000000;
var movement2l = 10000000;
var movement3l = 10000000;
var movement4l = 10000000;
var movement1m = 10000000;
var movement2m = 10000000;
var movement3m = 10000000;
var movement4m = 10000000;
var movement1n = 10000000;
var movement2n = 10000000;
var movement3n = 10000000;
var movement4n = 10000000;
var movement1o = 10000000;
var movement2o = 10000000;
var movement3o = 10000000;
var movement4o = 10000000;
var movement1p = 10000000;
var movement2p = 10000000;
var movement3p = 10000000;
var movement4p = 10000000;
var movement1q = 10000000;
var movement2q = 10000000;
var movement3q = 10000000;
var movement4q = 10000000;
var movement1r = 10000000;
var movement2r = 10000000;
var movement3r = 10000000;
var movement4r = 10000000;
var movement1s = 10000000;
var movement2s = 10000000;
var movement3s = 10000000;
var movement4s = 10000000;
var movement1t = 10000000;
var movement2t = 10000000;
var movement3t = 10000000;
var movement4t = 10000000;
var movement1u = 10000000;
var movement2u = 10000000;
var movement3u = 10000000;
var movement4u = 10000000;
var movement1v = 10000000;
var movement2v = 10000000;
var movement3v = 10000000;
var movement4v = 10000000;
var movement1w = 10000000;
var movement2w = 10000000;
var movement3w = 10000000;
var movement4w = 10000000;
var movement1x = 10000000;
var movement2x = 10000000;
var movement3x = 10000000;
var movement4x = 10000000;
var movement1y = 10000000;
var movement2y = 10000000;
var movement3y = 10000000;
var movement4y = 10000000;
var movement1z = 10000000;
var movement2z = 10000000;
var movement3z = 10000000;
var movement4z = 10000000;
var accel;
var stepDrop = 0;
var commaIndexValue = 1;
var elapsedTime = 0;
var difference = 0;
var lowTime = 0;
var keyLow = 0;
var differenceRate = 0;
var a = 0;
var b = 2;
var c = 2;
var d = 0;
var differenceRateT = 0;
var differenceMeasure = 0;
var key3 = 0;
var keyNew = 0;
var newDifference = 0;
var difference2 = 0;
var newDifferenceM = 0;
var key4 = 0;
var S = 0;
var fullArray2 = [];
var nTime = 0;
var key5 = 0;
var key1st = 0;
var key2nd = 0;
var key3rd = 0;
var key4th = 0;
var key6th = 0;
var key8th = 0;
var key12th = 0;
var key16th = 0;
var key24th = 0;
var key48th = 0;
var currentDifference = 0;
var currentDifferenceAcc = 0;
var movementAcc = 0;
var movementAccA = 0;
var movementAccB = 0;
var movementAccC = 0;
var movementAccD = 0;
var movementA = 0;
var keyMovementA1 = 0;
var keyMovementB1 = 0;
var keyMovementC1 = 0;
var keyMovementD1 = 0;
var keyMovementA2 = 0;
var keyMovementB2 = 0;
var keyMovementC2 = 0;
var keyMovementD2 = 0;
var keyMovementA3 = 0;
var keyMovementB3 = 0;
var keyMovementC3 = 0;
var keyMovementD3 = 0;
var keyMovementA4 = 0;
var keyMovementB4 = 0;
var keyMovementC4 = 0;
var keyMovementD4 = 0;
var keyMovementA5 = 0;
var keyMovementB5 = 0;
var keyMovementC5 = 0;
var keyMovementD5 = 0;
var keyMovementA6 = 0;
var keyMovementB6 = 0;
var keyMovementC6 = 0;
var keyMovementD6 = 0;
var keyMovementA7 = 0;
var keyMovementB7 = 0;
var keyMovementC7 = 0;
var keyMovementD7 = 0;
var keyMovementA8 = 0;
var keyMovementB8 = 0;
var keyMovementC8 = 0;
var keyMovementD8 = 0;
var keyMovementA9 = 0;
var keyMovementB9 = 0;
var keyMovementC9 = 0;
var keyMovementD9 = 0;
var keyMovementA10 = 0;
var keyMovementB10 = 0;
var keyMovementC10 = 0;
var keyMovementD10 = 0;
var keyMovementA11 = 0;
var keyMovementB11 = 0;
var keyMovementC11 = 0;
var keyMovementD11 = 0;
var keyMovementA12 = 0;
var keyMovementB12 = 0;
var keyMovementC12 = 0;
var keyMovementD12 = 0;
var keyMovementA13 = 0;
var keyMovementB13 = 0;
var keyMovementC13 = 0;
var keyMovementD13 = 0;
var keyMovementA14 = 0;
var keyMovementB14 = 0;
var keyMovementC14 = 0;
var keyMovementD14 = 0;
var keyMovementA15 = 0;
var keyMovementB15 = 0;
var keyMovementC15 = 0;
var keyMovementD15 = 0;
var keyMovementA16 = 0;
var keyMovementB16 = 0;
var keyMovementC16 = 0;
var keyMovementD16 = 0;
var keyMovementA17 = 0;
var keyMovementB17 = 0;
var keyMovementC17 = 0;
var keyMovementD17 = 0;
var keyMovementA18 = 0;
var keyMovementB18 = 0;
var keyMovementC18 = 0;
var keyMovementD18 = 0;
var keyMovementA19 = 0;
var keyMovementB19 = 0;
var keyMovementC19 = 0;
var keyMovementD19 = 0;
var keyMovementA20 = 0;
var keyMovementB20 = 0;
var keyMovementC20 = 0;
var keyMovementD20 = 0;
var keyMovementA21 = 0;
var keyMovementB21 = 0;
var keyMovementC21 = 0;
var keyMovementD21 = 0;
var keyMovementA22 = 0;
var keyMovementB22 = 0;
var keyMovementC22 = 0;
var keyMovementD22 = 0;
var keyMovementA23 = 0;
var keyMovementB23 = 0;
var keyMovementC23 = 0;
var keyMovementD23 = 0;
var keyMovementA24 = 0;
var keyMovementB24 = 0;
var keyMovementC24 = 0;
var keyMovementD24 = 0;
var keyMovementA25 = 0;
var keyMovementB25 = 0;
var keyMovementC25 = 0;
var keyMovementD25 = 0;
var keyMovementA26 = 0;
var keyMovementB26 = 0;
var keyMovementC26 = 0;
var keyMovementD26 = 0;
var audioN = 0;
var keyBpmTick1 = 1;
var millisecond = 1000;
var second = millisecond / 1000;
var minute = 60;
var key = 0;
var key2 = 0;
var timeS = 0;
var audio = new Audio('');
var audio2 = new Audio('');
var audio3 = new Audio('');
var audio4 = new Audio('');
var audio5 = new Audio('');
var audio6 = new Audio('');
var audio7 = new Audio('');
var audio8 = new Audio('');
var audio9 = new Audio('');
var commaIndexT2 = [];
var combo = stepRate / 4;
var an = 0;
var keyReverse = 0;
var timeSS = 0;
var keyT1st = 0;
var keyT2nd = 0;
var keyT3rd = 0;
var keyT4th = 0;
var keyT6th = 0;
var keyT8th = 0;
var keyT12th = 0;
var keyT16th = 0;
var keyT24th = 0;
var keyT48th = 0;
var cTickCheck = 0;
var nTickCheck = 0;
var newTickCheck = 0;
var stepRateTime = 0;
var newStepRateTime = 0;
var currentTickCheck = 0;
var tTime = 0;
var tickCheckAcc = 0;
var tickCheckAccT = 0;
var e = -1;
var Sl = -1
var key0 = 0;
var differenceRound = Math.round(difference)
var differenceRound2 = Math.round(difference)
var missCheck1 = 0;
var missCheck2 = 0;
var missCheck3 = 0;
var missCheck4 = 0;
var keyMissCheck1 = 0;
var keyMissCheck2 = 0;
var keyMissCheck3 = 0;
var keyMissCheck4 = 0;
var success1 = 0;
var success2 = 0;
var success3 = 0;
var success4 = 0;
var stepRateN = 0;
var keyStepRate1 = 0;
var keyStepRate2 = 0;
var keyStepRate3 = 0;
var keyStepRate4 = 0;
var keyStepRate5 = 0;
var keyStepRate6 = 0;
var keyStepRate7 = 0;
var keyStepRate8 = 0;
var stepRateC = 0;
var commaIndexTC = 0;
var keyButtonPlay = 0;
var bpmTickN = 0;
var miss = 0;
var hit = 0;
var scrollV = 19;
var heightV = 40;
var widthV = 118;
var radiusV = 0;
var spacingV1 = 120;
var spacingV2 = 240;
var spacingV3 = 360;
var spacingV4 = 480;
var spacingV5 = 700;
var spacingV6 = 280;
var spacingList = 41;
var spacingResults = 300;
var hitBoxBottom = 600;
var hitBoxTop = 300;
var hitBoxTop2 = 1149
var hitBoxBottom2 = -199
var optionsV = 0;
var backgroundV = 0;
var steps = 0;
var audio10;
var clicky = 0;
var limit1 = 0;
var downscroll = 0;
var stepDropUp = 900;
var stepDropDown = 30;
var audioSync = 630
var audioSync2 = 0;
var keyDifficulty = 0;
var UpMiddle = 100;
var DownMiddle = 800;
var UpA1 = 96;
var UpA2 = 104;
var UpUpB1 = 92;
var UpUpB2 = 96;
var UpDownB1 = 104;
var UpDownB2 = 108;
var UpUpC1 = 88;
var UpUpC2 = 92;
var UpDownC1 = 108;
var UpDownC2 = 112;
var UpUpD1 = 84;
var UpUpD2 = 88;
var UpDownD1 = 112;
var UpDownD2 = 116;
var DownA1 = 796;
var DownA2 = 804;
var DownUpB1 = 792;
var DownUpB2 = 796;
var DownDownB1 = 804;
var DownDownB2 = 808;
var DownUpC1 = 788;
var DownUpC2 = 792;
var DownDownC1 = 808;
var DownDownC2 = 812;
var DownUpD1 = 784;
var DownUpD2 = 788;
var DownDownD1 = 812;
var DownDownD2 = 816;
var upload = 0;
var noteReverser = 0;
var screenCutV = 0;
var screenCutTop = 957;
var screenCutTopDS = 8;
var screenCutHeight = 0;
var screenCutWidth = 700;
var noteColorV = 0;
var judgeOffsetV = 0;
var ultimate = 0;
var fancy = 0;
var stunning = 0;
var accuracyContainer = document.getElementById("accuracyContainer");
var accuracyContainerSpacing = 612;
var accuracy = document.getElementById("accuracy")
var keyAccuracy = 0;
var screenCut = this.document.getElementById("screenCut")
var array1S = [];
var newArrayS = [];
var arrayNewS = [];
var arrayyS = [];
var arrayTimeS = [];
var commaIndexS = [];
var commaIndexTS = [];
var lineNS = 0;
var countS = 0;
var keyCount = 0;
var arrayS = 0;
var scCountS = 0;
var indexS = 0;

var array13 = [];
var newArray3 = [];
var arrayNew3 = [];
var arrayy3 = [];
var arrayTime3 = [];
var commaIndex3 = [];
var commaIndexT3 = [];
var lineN3 = 0;
var count3 = 0;
var keyCount3 = 0;
var array3 = 0;
var scCount3 = 0;
var index3 = 0;
var keyThird = 0;
var chart3 = [];

var sg4 = 0;
var array14 = [];
var newArray4 = [];
var arrayNew4 = [];
var arrayy4 = [];
var arrayTime4 = [];
var commaIndex4 = [];
var commaIndexT4 = [];
var lineN4 = 0;
var count4 = 0;
var keyCount4 = 0;
var array4 = 0;
var scCount4 = 0;
var index4 = 0;
var keyFourth = 0;
var chart4 = [];

var sg5 = 0;
var array15 = [];
var newArray5 = [];
var arrayNew5 = [];
var arrayy5 = [];
var arrayTime5 = [];
var commaIndex5 = [];
var commaIndexT5 = [];
var lineN5 = 0;
var count5 = 0;
var keyCount5 = 0;
var array5 = 0;
var scCount5 = 0;
var index5 = 0;
var keyFifth = 0;
var chart5 = [];
var uniqueArray = [];
var sg6 = 0;
var array16 = [];
var newArray6 = [];
var arrayNew6 = [];
var arrayy6 = [];
var arrayTime6 = [];
var commaIndex6 = [];
var commaIndexT6 = [];
var lineN6 = 0;
var count6 = 0;
var keyCount6 = 0;
var array6 = 0;
var scCount6 = 0;
var index6 = 0;
var keySixth = 0;
var chart6 = [];
var scores = 0;
var difficultyCount = 0;
var difficulty1 = ""
var difficulty2 = ""
var difficulty3 = ""
var difficulty4 = ""
var difficulty5 = ""
var difficulty6 = ""
var keyNewTick = 0;
var na = 0;
var bannerS = 750;
var backgroundPic = "";
var scoreN = 0;
var scoresA = [];
var keyScores = 0;
var keyPlay = 0;
var keyResults = 0;
var keyPlayAccuracy = 0;
var allScores = [];
var backgroundImage = this.document.getElementById("backgroundImage")
var background2 = 0;
var sexyBob = 0;
var searchArray = [];
var stopFound = 0;
var allStops = [];
var stopTick = [];
var stopTime = [];
var stopTickC = 0;
var stopStop = 0;
var artist = "";
var timeInterval1;
var tickDuration;
var rate = 1;
document.getElementById("uploadButton").addEventListener("click", uploadChange);
function uploadChange() {
    upload = 1;
}
var monkeyLag = "Do you";
if (downscroll == 0) {
    var d1 = document.createElement('div');
    d1.setAttribute("id", "Div1");
    d1.style.cssText = 'position:absolute;top:500px;left:600px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2 = document.createElement('div');
    d2.setAttribute("id", "Div2");
    d2.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3 = document.createElement('div');
    d3.setAttribute("id", "Div3");
    d3.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4 = document.createElement('div');
    d4.setAttribute("id", "Div4");
    d4.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1b = document.createElement('div');
    d1b.setAttribute("id", "Div1");
    d1b.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2b = document.createElement('div');
    d2b.setAttribute("id", "Div2");
    d2b.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3b = document.createElement('div');
    d3b.setAttribute("id", "Div3");
    d3b.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4b = document.createElement('div');
    d4b.setAttribute("id", "Div4");
    d4b.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1c = document.createElement('div');
    d1c.setAttribute("id", "Div1");
    d1c.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2c = document.createElement('div');
    d2c.setAttribute("id", "Div2");
    d2c.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3c = document.createElement('div');
    d3c.setAttribute("id", "Div3");
    d3c.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4c = document.createElement('div');
    d4c.setAttribute("id", "Div4");
    d4c.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1d = document.createElement('div');
    d1d.setAttribute("id", "Div1");
    d1d.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2d = document.createElement('div');
    d2d.setAttribute("id", "Div2");
    d2d.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3d = document.createElement('div');
    d3d.setAttribute("id", "Div3");
    d3d.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4d = document.createElement('div');
    d4d.setAttribute("id", "Div4");
    d4d.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1e = document.createElement('div');
    d1e.setAttribute("id", "Div1");
    d1e.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2e = document.createElement('div');
    d2e.setAttribute("id", "Div2");
    d2e.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3e = document.createElement('div');
    d3e.setAttribute("id", "Div3");
    d3e.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4e = document.createElement('div');
    d4e.setAttribute("id", "Div4");
    d4e.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1f = document.createElement('div');
    d1f.setAttribute("id", "Div1");
    d1f.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2f = document.createElement('div');
    d2f.setAttribute("id", "Div2");
    d2f.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3f = document.createElement('div');
    d3f.setAttribute("id", "Div3");
    d3f.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4f = document.createElement('div');
    d4f.setAttribute("id", "Div4");
    d4f.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1g = document.createElement('div');
    d1g.setAttribute("id", "Div1");
    d1g.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2g = document.createElement('div');
    d2g.setAttribute("id", "Div2");
    d2g.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3g = document.createElement('div');
    d3g.setAttribute("id", "Div3");
    d3g.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4g = document.createElement('div');
    d4g.setAttribute("id", "Div4");
    d4g.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1h = document.createElement('div');
    d1h.setAttribute("id", "Div1");
    d1h.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2h = document.createElement('div');
    d2h.setAttribute("id", "Div2");
    d2h.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3h = document.createElement('div');
    d3h.setAttribute("id", "Div3");
    d3h.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4h = document.createElement('div');
    d4h.setAttribute("id", "Div4");
    d4h.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1i = document.createElement('div');
    d1i.setAttribute("id", "Div1");
    d1i.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2i = document.createElement('div');
    d2i.setAttribute("id", "Div2");
    d2i.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3i = document.createElement('div');
    d3i.setAttribute("id", "Div3");
    d3i.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4i = document.createElement('div');
    d4i.setAttribute("id", "Div4");
    d4i.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1j = document.createElement('div');
    d1j.setAttribute("id", "Div1");
    d1j.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2j = document.createElement('div');
    d2j.setAttribute("id", "Div2");
    d2j.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3j = document.createElement('div');
    d3j.setAttribute("id", "Div3");
    d3j.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4j = document.createElement('div');
    d4j.setAttribute("id", "Div4");
    d4j.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1k = document.createElement('div');
    d1k.setAttribute("id", "Div1");
    d1k.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2k = document.createElement('div');
    d2k.setAttribute("id", "Div2");
    d2k.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3k = document.createElement('div');
    d3k.setAttribute("id", "Div3");
    d3k.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4k = document.createElement('div');
    d4k.setAttribute("id", "Div4");
    d4k.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1l = document.createElement('div');
    d1l.setAttribute("id", "Div1");
    d1l.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2l = document.createElement('div');
    d2l.setAttribute("id", "Div2");
    d2l.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3l = document.createElement('div');
    d3l.setAttribute("id", "Div3");
    d3l.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4l = document.createElement('div');
    d4l.setAttribute("id", "Div4");
    d4l.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1m = document.createElement('div');
    d1m.setAttribute("id", "Div1");
    d1m.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2m = document.createElement('div');
    d2m.setAttribute("id", "Div2");
    d2m.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3m = document.createElement('div');
    d3m.setAttribute("id", "Div3");
    d3m.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4m = document.createElement('div');
    d4m.setAttribute("id", "Div4");
    d4m.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1n = document.createElement('div');
    d1n.setAttribute("id", "Div1");
    d1n.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2n = document.createElement('div');
    d2n.setAttribute("id", "Div2");
    d2n.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3n = document.createElement('div');
    d3n.setAttribute("id", "Div3");
    d3n.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4n = document.createElement('div');
    d4n.setAttribute("id", "Div4");
    d4n.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1o = document.createElement('div');
    d1o.setAttribute("id", "Div1");
    d1o.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2o = document.createElement('div');
    d2o.setAttribute("id", "Div2");
    d2o.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3o = document.createElement('div');
    d3o.setAttribute("id", "Div3");
    d3o.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4o = document.createElement('div');
    d4o.setAttribute("id", "Div4");
    d4o.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1p = document.createElement('div');
    d1p.setAttribute("id", "Div1");
    d1p.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2p = document.createElement('div');
    d2p.setAttribute("id", "Div2");
    d2p.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3p = document.createElement('div');
    d3p.setAttribute("id", "Div3");
    d3p.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4p = document.createElement('div');
    d4p.setAttribute("id", "Div4");
    d4p.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1q = document.createElement('div');
    d1q.setAttribute("id", "Div1");
    d1q.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2q = document.createElement('div');
    d2q.setAttribute("id", "Div2");
    d2q.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3q = document.createElement('div');
    d3q.setAttribute("id", "Div3");
    d3q.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4q = document.createElement('div');
    d4q.setAttribute("id", "Div4");
    d4q.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1r = document.createElement('div');
    d1r.setAttribute("id", "Div1");
    d1r.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2r = document.createElement('div');
    d2r.setAttribute("id", "Div2");
    d2r.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3r = document.createElement('div');
    d3r.setAttribute("id", "Div3");
    d3r.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4r = document.createElement('div');
    d4r.setAttribute("id", "Div4");
    d4r.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1s = document.createElement('div');
    d1s.setAttribute("id", "Div1");
    d1s.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2s = document.createElement('div');
    d2s.setAttribute("id", "Div2");
    d2s.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3s = document.createElement('div');
    d3s.setAttribute("id", "Div3");
    d3s.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4s = document.createElement('div');
    d4s.setAttribute("id", "Div4");
    d4s.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1t = document.createElement('div');
    d1t.setAttribute("id", "Div1");
    d1t.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2t = document.createElement('div');
    d2t.setAttribute("id", "Div2");
    d2t.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3t = document.createElement('div');
    d3t.setAttribute("id", "Div3");
    d3t.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4t = document.createElement('div');
    d4t.setAttribute("id", "Div4");
    d4t.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1u = document.createElement('div');
    d1u.setAttribute("id", "Div1");
    d1u.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2u = document.createElement('div');
    d2u.setAttribute("id", "Div2");
    d2u.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3u = document.createElement('div');
    d3u.setAttribute("id", "Div3");
    d3u.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4u = document.createElement('div');
    d4u.setAttribute("id", "Div4");
    d4u.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1v = document.createElement('div');
    d1v.setAttribute("id", "Div1");
    d1v.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2v = document.createElement('div');
    d2v.setAttribute("id", "Div2");
    d2v.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3v = document.createElement('div');
    d3v.setAttribute("id", "Div3");
    d3v.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4v = document.createElement('div');
    d4v.setAttribute("id", "Div4");
    d4v.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1w = document.createElement('div');
    d1w.setAttribute("id", "Div1");
    d1w.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2w = document.createElement('div');
    d2w.setAttribute("id", "Div2");
    d2w.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3w = document.createElement('div');
    d3w.setAttribute("id", "Div3");
    d3w.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4w = document.createElement('div');
    d4w.setAttribute("id", "Div4");
    d4w.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1x = document.createElement('div');
    d1x.setAttribute("id", "Div1");
    d1x.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2x = document.createElement('div');
    d2x.setAttribute("id", "Div2");
    d2x.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3x = document.createElement('div');
    d3x.setAttribute("id", "Div3");
    d3x.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4x = document.createElement('div');
    d4x.setAttribute("id", "Div4");
    d4x.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1y = document.createElement('div');
    d1y.setAttribute("id", "Div1");
    d1y.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2y = document.createElement('div');
    d2y.setAttribute("id", "Div2");
    d2y.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3y = document.createElement('div');
    d3y.setAttribute("id", "Div3");
    d3y.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4y = document.createElement('div');
    d4y.setAttribute("id", "Div4");
    d4y.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d1z = document.createElement('div');
    d1z.setAttribute("id", "Div1");
    d1z.style.cssText = 'position:absolute;top:500px;left:100px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d2z = document.createElement('div');
    d2z.setAttribute("id", "Div2");
    d2z.style.cssText = 'position:absolute;top:500px;left:200px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d3z = document.createElement('div');
    d3z.setAttribute("id", "Div3");
    d3z.style.cssText = 'position:absolute;top:500px;left:300px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
    var d4z = document.createElement('div');
    d4z.setAttribute("id", "Div4");
    d4z.style.cssText = 'position:absolute;top:500px;left:400px;width:80px;height:80px;opacity:0.9;z-index:100;background:rgb(160, 89, 160);border-radius:10px;';
}
document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
document.getElementById("span2").innerHTML = "Height" + " " + heightV
document.getElementById("span3").innerHTML = "Width" + " " + widthV
document.getElementById("span4").innerHTML = "Spacing" + " " + spacingV1
document.getElementById("span5").innerHTML = "Radius" + " " + radiusV
document.getElementById("span6").innerHTML = "Background" + " " + backgroundV
document.getElementById("span11").innerHTML = "Song Offset" + " " + audioSync2 / 7
document.getElementById("span12").innerHTML = "Reverse Notes" + " " + noteReverser
document.getElementById("span13").innerHTML = "Screen Cut" + " " + screenCutV
document.getElementById("span14").innerHTML = "Note Color" + " " + noteColorV
document.getElementById("span15").innerHTML = "Judge Offset" + " " + judgeOffsetV
document.getElementById("span16").innerHTML = "Chart Number" + " " + chartNumber
document.getElementById("span18").innerHTML = "Background 2" + " " + background2
document.getElementById("span20").innerHTML = "Rate" + " " + rate
document.getElementById("ultimate").innerHTML = "U" + " " + ultimate
document.getElementById("fancy").innerHTML = "F" + " " + fancy
document.getElementById("stunning").innerHTML = "S" + " " + stunning
async function buttonPlay() {
    stopTickC = 0;
    keyPlayAccuracy = 0;
    limit1 = 0;
    keyResults = 1;
    keyStepRate1 = 0;
    keyPlay = 1;
    keyScores = 0;
    na = 0;
    upload = 1;
    document.getElementById("titleResults").innerHTML = ""
    document.getElementById("ultimateResults").innerHTML = ""
    document.getElementById("fancyResults").innerHTML = ""
    document.getElementById("stunningResults").innerHTML = ""
    document.getElementById("missResults").innerHTML = ""
    ultimate = 0;
    fancy = 0;
    stunning = 0;
    keyAccuracy = 1;
    stepN = 0;
    debugArray = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    // newSong = 0;
    document.getElementById("audio").load();
    audio = document.getElementById("audio");
    if (offsetClean.startsWith("1") || offsetClean.startsWith("2") || offsetClean.startsWith("3") || offsetClean.startsWith("4") || offsetClean.startsWith("5") || offsetClean.startsWith("6") || offsetClean.startsWith("7") || offsetClean.startsWith("8")) {
        parseInt(offsetClean)
        setTimeout(function () {
            audio.pause()
            audio.play();
            audio.playbackRate = rate;
        }, (offsetClean * 1000) + audioSync + audioSync2)
        // audio.play();
    }
    if (offsetClean.startsWith("-")) {
        var offsetCleanNinus = offsetClean.replace("-", "")
        var offsetParsedMinus = parseFloat(offsetCleanNinus)
        audio.pause()
        audio.currentTime = offsetParsedMinus
        setTimeout(function () {
            audio.pause()
            audio.play();
            audio.playbackRate = rate;
        }, audioSync + audioSync2)
    }
    if (offsetClean == 0) {
        setTimeout(function () {
            audio.pause()
            audio.play();
            audio.playbackRate = rate;
        }, audioSync + audioSync2)
    }
    // var audio = document.getElementById("audio")
    // audio.play()
    hit = 0;
    miss = 0;
    movement1 = 10000000;
    movement2 = 10000000;
    movement3 = 10000000;
    movement4 = 10000000;
    movement5 = 10000000;
    movement6 = 10000000;
    movement7 = 10000000;
    movement8 = 10000000;
    movement9 = 10000000;
    movement10 = 10000000;
    movement1b = 10000000;
    movement2b = 10000000;
    movement3b = 10000000;
    movement4b = 10000000;
    movement1c = 10000000;
    movement2c = 10000000;
    movement3c = 10000000;
    movement4c = 10000000;
    movement1d = 10000000;
    movement2d = 10000000;
    movement3d = 10000000;
    movement4d = 10000000;
    movement1e = 10000000;
    movement2e = 10000000;
    movement3e = 10000000;
    movement4e = 10000000;
    movement1f = 10000000;
    movement2f = 10000000;
    movement3f = 10000000;
    movement4f = 10000000;
    movement1g = 10000000;
    movement2g = 10000000;
    movement3g = 10000000;
    movement4g = 10000000;
    movement1h = 10000000;
    movement2h = 10000000;
    movement3h = 10000000;
    movement4h = 10000000;
    movement1i = 10000000;
    movement2i = 10000000;
    movement3i = 10000000;
    movement4i = 10000000;
    movement1j = 10000000;
    movement2j = 10000000;
    movement3j = 10000000;
    movement4j = 10000000;
    movement1k = 10000000;
    movement2k = 10000000;
    movement3k = 10000000;
    movement4k = 10000000;
    movement1l = 10000000;
    movement2l = 10000000;
    movement3l = 10000000;
    movement4l = 10000000;
    movement1m = 10000000;
    movement2m = 10000000;
    movement3m = 10000000;
    movement4m = 10000000;
    movement1n = 10000000;
    movement2n = 10000000;
    movement3n = 10000000;
    movement4n = 10000000;
    movement1o = 10000000;
    movement2o = 10000000;
    movement3o = 10000000;
    movement4o = 10000000;
    movement1p = 10000000;
    movement2p = 10000000;
    movement3p = 10000000;
    movement4p = 10000000;
    movement1q = 10000000;
    movement2q = 10000000;
    movement3q = 10000000;
    movement4q = 10000000;
    movement1r = 10000000;
    movement2r = 10000000;
    movement3r = 10000000;
    movement4r = 10000000;
    movement1s = 10000000;
    movement2s = 10000000;
    movement3s = 10000000;
    movement4s = 10000000;
    movement1t = 10000000;
    movement2t = 10000000;
    movement3t = 10000000;
    movement4t = 10000000;
    movement1u = 10000000;
    movement2u = 10000000;
    movement3u = 10000000;
    movement4u = 10000000;
    movement1v = 10000000;
    movement2v = 10000000;
    movement3v = 10000000;
    movement4v = 10000000;
    movement1w = 10000000;
    movement2w = 10000000;
    movement3w = 10000000;
    movement4w = 10000000;
    movement1x = 10000000;
    movement2x = 10000000;
    movement3x = 10000000;
    movement4x = 10000000;
    movement1y = 10000000;
    movement2y = 10000000;
    movement3y = 10000000;
    movement4y = 10000000;
    movement1z = 10000000;
    movement2z = 10000000;
    movement3z = 10000000;
    movement4z = 10000000;
    if (downscroll == 1) {
        movement1z = -1000000;
        movement2z = -1000000;
        movement3z = -1000000;
        movement4z = -1000000;
    }
    // if (audioN == 1) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio.play();
    //     }, 500)
    // }
    // if (audioN == 2) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio2.play();
    //     }, 500)
    // }
    // if (audioN == 3) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     audio3.currentTime = -.1;
    //     setTimeout(function () {
    //         audio3.play();
    //     }, 500)
    // }
    // if (audioN == 4) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio4.play();
    //     }, 500)
    // }
    // if (audioN == 5) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio5.play();
    //     }, 500)
    // }
    // if (audioN == 6) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio6.play();
    //     }, 500)
    // }
    // if (audioN == 7) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio7.play();
    //     }, 500)
    // }
    // if (audioN == 8) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio8.play();
    //     }, 500)
    // }
    // if (audioN == 9) {
    //     audio.pause();
    //     audio.currentTime = 0;
    //     audio2.pause();
    //     audio2.currentTime = 0;
    //     audio3.pause();
    //     audio3.currentTime = 0;
    //     audio4.pause();
    //     audio4.currentTime = 0;
    //     audio5.pause();
    //     audio5.currentTime = 0;
    //     audio6.pause();
    //     audio6.currentTime = 1;
    //     audio7.pause();
    //     audio7.currentTime = 0;
    //     audio8.pause();
    //     audio8.currentTime = 0;
    //     audio9.pause();
    //     audio9.currentTime = 0;
    //     setTimeout(function () {
    //         audio9.play();
    //     }, 500)
    // }
    // if (clicky % 2 == 0) {
    //     setTimeout(function () {
    //         audio.play()
    //     }, audioSync)
    // }
    movementAccD = 0;
    keyMovementD1 = 0;
    keyMovementD2 = 0;
    keyMovementD3 = 0;
    keyMovementD4 = 0;
    movementAccB = 0;
    keyMovementB1 = 0;
    keyMovementB2 = 0;
    keyMovementB3 = 0;
    keyMovementB4 = 0;
    movementAccC = 0;
    keyMovementC1 = 0;
    keyMovementC2 = 0;
    keyMovementC3 = 0;
    keyMovementC4 = 0;
    movementAccA = 0;
    keyMovementA1 = 0;
    keyMovementA2 = 0;
    keyMovementA3 = 0;
    keyMovementA4 = 0;
    keyMovementA5 = 0;
    keyMovementB5 = 0;
    keyMovementC5 = 0;
    keyMovementD5 = 0;
    keyMovementA6 = 0;
    keyMovementB6 = 0;
    keyMovementC6 = 0;
    keyMovementD6 = 0;
    keyMovementA7 = 0;
    keyMovementB7 = 0;
    keyMovementC7 = 0;
    keyMovementD7 = 0;
    keyMovementA8 = 0;
    keyMovementB8 = 0;
    keyMovementC8 = 0;
    keyMovementD8 = 0;
    keyMovementA9 = 0;
    keyMovementB9 = 0;
    keyMovementC9 = 0;
    keyMovementD9 = 0;
    keyMovementA10 = 0;
    keyMovementB10 = 0;
    keyMovementC10 = 0;
    keyMovementD10 = 0;
    keyMovementA11 = 0;
    keyMovementB11 = 0;
    keyMovementC11 = 0;
    keyMovementD11 = 0;
    keyMovementA12 = 0;
    keyMovementB12 = 0;
    keyMovementC12 = 0;
    keyMovementD12 = 0;
    keyMovementA13 = 0;
    keyMovementB13 = 0;
    keyMovementC13 = 0;
    keyMovementD13 = 0;
    keyMovementA14 = 0;
    keyMovementB14 = 0;
    keyMovementC14 = 0;
    keyMovementD14 = 0;
    keyMovementA15 = 0;
    keyMovementB15 = 0;
    keyMovementC15 = 0;
    keyMovementD15 = 0;
    keyMovementA16 = 0;
    keyMovementB16 = 0;
    keyMovementC16 = 0;
    keyMovementD16 = 0;
    keyMovementA17 = 0;
    keyMovementB17 = 0;
    keyMovementC17 = 0;
    keyMovementD17 = 0;
    keyMovementA18 = 0;
    keyMovementB18 = 0;
    keyMovementC18 = 0;
    keyMovementD18 = 0;
    keyMovementA19 = 0;
    keyMovementB19 = 0;
    keyMovementC19 = 0;
    keyMovementD19 = 0;
    keyMovementA20 = 0;
    keyMovementB20 = 0;
    keyMovementC20 = 0;
    keyMovementD20 = 0;
    keyMovementA21 = 0;
    keyMovementB21 = 0;
    keyMovementC21 = 0;
    keyMovementD21 = 0;
    keyMovementA22 = 0;
    keyMovementB22 = 0;
    keyMovementC22 = 0;
    keyMovementD22 = 0;
    keyMovementA23 = 0;
    keyMovementB23 = 0;
    keyMovementC23 = 0;
    keyMovementD23 = 0;
    keyMovementA24 = 0;
    keyMovementB24 = 0;
    keyMovementC24 = 0;
    keyMovementD24 = 0;
    keyMovementA25 = 0;
    keyMovementB25 = 0;
    keyMovementC25 = 0;
    keyMovementD25 = 0;
    keyMovementA26 = 0;
    keyMovementB26 = 0;
    keyMovementC26 = 0;
    keyMovementD26 = 0;
    // timeS = 0;
    keyMovementA4 = 0;
    nTime = timeS
    currentDifference = 0
    currentDifferenceAcc = 0
    S = 0;
    a = 0;
    stepDrop = 0;
    commaIndexValue = 1;
    elapsedTime = 0;
    rawBpmArray = [];
    rawBpmArrayS = "";
    // bpmRate = [];
    allContents = "";
    array = []
    array1 = []
    arrayTime = []
    newArray = []
    b = 0
    // key = 1;
    differenceRate = 0;
    differenceRateT = 0;
    cTime = timeS;
    key2 = 1;
    keyLow = 0;
    Math.round(difference)
    newDifference = 0
    combo = stepRate / 4;
    tickCheckAccT = 0
    tickCheck = 0
    tickCheckAcc = 0
    missCheck1 = 0
    missCheck2 = 0
    missCheck3 = 0
    missCheck4 = 0
    keyStepRate1 = 0;
    keyStepRate2 = 0;
    keyStepRate3 = 0;
    keyStepRate4 = 0;
    keyStepRate5 = 0;
    keyStepRate6 = 0;
    keyStepRate7 = 0;
    keyStepRate8 = 0;
    stepRateN = 0;
}
async function button() {
    stopStop = 0;
    stopFound = 0;
    allStops = [];
    stopTick = [];
    stopTime = [];
    stopTickC = 0;
    keyPlayAccuracy = 1;
    keyResults = 0;
    keyPlay = 0;
    difficulty1 = ""
    difficulty2 = ""
    difficulty3 = ""
    difficulty4 = ""
    difficulty5 = ""
    difficulty6 = ""
    difficultyCount = 0;
    sg5 = 0;
    array15 = [];
    newArray5 = [];
    arrayNew5 = [];
    arrayy5 = [];
    arrayTime5 = [];
    commaIndex5 = [];
    commaIndexT5 = [];
    lineN5 = 0;
    count5 = 0;
    keyCount5 = 0;
    array5 = 0;
    scCount5 = 0;
    index5 = 0;
    keyFifth = 0;
    chart5 = [];

    sg6 = 0;
    array16 = [];
    newArray6 = [];
    arrayNew6 = [];
    arrayy6 = [];
    arrayTime6 = [];
    commaIndex6 = [];
    commaIndexT6 = [];
    lineN6 = 0;
    count6 = 0;
    keyCount6 = 0;
    array6 = 0;
    scCount6 = 0;
    index6 = 0;
    keySixth = 0;
    chart6 = [];
    sg4 = 0;
    array14 = [];
    newArray4 = [];
    arrayNew4 = [];
    arrayy4 = [];
    arrayTime4 = [];
    commaIndex4 = [];
    commaIndexT4 = [];
    lineN4 = 0;
    count4 = 0;
    keyCount4 = 0;
    array4 = 0;
    scCount4 = 0;
    index4 = 0;
    keyFourth = 0;
    chart4 = [];
    array13 = [];
    newArray3 = [];
    arrayNew3 = [];
    arrayy3 = [];
    arrayTime3 = [];
    commaIndex3 = [];
    commaIndexT3 = [];
    lineN3 = 0;
    count3 = 0;
    keyCount3 = 0;
    array3 = 0;
    scCount3 = 0;
    index3 = 0;
    keyThird = 0;
    chart3 = [];
    firstChart = 0;
    array1S = [];
    newArrayS = [];
    arrayNewS = [];
    arrayyS = [];
    arrayTimeS = [];
    commaIndexS = [];
    commaIndexTS = [];
    secondChart = [];
    keySecond = 0;
    lineNS = 0;
    countS = 0;
    keyCount = 0;
    arrayS = 0;
    scCountS = 0;
    indexS = 0;
    tickCount = 0;
    texts = mta.value;
    var allContents = texts
    stopSign = [];
    stopsTick;
    stopsTime;
    stopSplit = [];
    stopSplit1 = [];
    stopSplit2 = [];
    rawStopsS = ""
    // if (newSong == 1) {
    //     movement1 = 10000000;
    //     movement2 = 10000000;
    //     movement3 = 10000000;
    //     movement4 = 10000000;
    //     movement5 = 10000000;
    //     movement6 = 10000000;
    //     movement7 = 10000000;
    //     movement8 = 10000000;
    //     movement9 = 10000000;
    //     movement10 = 10000000;
    //     movement1b = 10000000;
    //     movement2b = 10000000;
    //     movement3b = 10000000;
    //     movement4b = 10000000;
    //     movement1c = 10000000;
    //     movement2c = 10000000;
    //     movement3c = 10000000;
    //     movement4c = 10000000;
    //     movement1d = 10000000;
    //     movement2d = 10000000;
    //     movement3d = 10000000;
    //     movement4d = 10000000;
    //     movement1e = 10000000;
    //     movement2e = 10000000;
    //     movement3e = 10000000;
    //     movement4e = 10000000;
    //     movement1f = 10000000;
    //     movement2f = 10000000;
    //     movement3f = 10000000;
    //     movement4f = 10000000;
    //     movement1g = 10000000;
    //     movement2g = 10000000;
    //     movement3g = 10000000;
    //     movement4g = 10000000;
    //     movement1h = 10000000;
    //     movement2h = 10000000;
    //     movement3h = 10000000;
    //     movement4h = 10000000;
    //     d1.style.top = movement1 + "px";
    //     d2.style.top = movement2 + "px";
    //     d3.style.top = movement3 + "px";
    //     d4.style.top = movement4 + "px";
    //     d1b.style.top = movement1b + "px";
    //     d2b.style.top = movement2b + "px";
    //     d3b.style.top = movement3b + "px";
    //     d4b.style.top = movement4b + "px";
    //     d1c.style.top = movement1c + "px";
    //     d2c.style.top = movement2c + "px";
    //     d3c.style.top = movement3c + "px";
    //     d4c.style.top = movement4c + "px";
    //     d1d.style.top = movement1d + "px";
    //     d2d.style.top = movement2d + "px";
    //     d3d.style.top = movement3d + "px";
    //     d4d.style.top = movement4d + "px";
    //     d1e.style.top = movement1e + "px";
    //     d2e.style.top = movement2e + "px";
    //     d3e.style.top = movement3e + "px";
    //     d4e.style.top = movement4e + "px";
    //     d1f.style.top = movement1f + "px";
    //     d2f.style.top = movement2f + "px";
    //     d3f.style.top = movement3f + "px";
    //     d4f.style.top = movement4f + "px";
    //     d1g.style.top = movement1g + "px";
    //     d2g.style.top = movement2g + "px";
    //     d3g.style.top = movement3g + "px";
    //     d4g.style.top = movement4g + "px";
    //     d1h.style.top = movement1h + "px";
    //     d2h.style.top = movement2h + "px";
    //     d3h.style.top = movement3h + "px";
    //     d4h.style.top = movement4h + "px";
    //     hit = 0;
    //     miss = 0;
    //     document.getElementById("hit").innerHTML = "Hit: 0"
    //     document.getElementById("miss").innerHTML = "Miss: 0"
    //     return;
    // }
    newSong = 1;
    foundExp = "";
    replace = ""
    replacedExp = []
    splitter = ""
    splitterAcc = []
    splitterAcc2 = []
    splitter2 = ""
    splitterNum1 = []
    splitterNum2 = []
    splitterAccFinal = ""
    bpmTick = []
    bpmRate = []
    for (var q = 0; q < foundNum.length; q++) {
        var split = foundNum[q].split("=");
        foundNumA1.push(split[0]);
        foundNumA2.push(split[1]);
    }
    document.getElementById("difficulty").innerHTML = ""
    document.getElementById("songTitle").innerHTML = ""
    keyDifficulty = 0;
    movement1 = 10000000;
    movement2 = 10000000;
    movement3 = 10000000;
    movement4 = 10000000;
    movement5 = 10000000;
    movement6 = 10000000;
    movement7 = 10000000;
    movement8 = 10000000;
    movement9 = 10000000;
    movement10 = 10000000;
    movement1b = 10000000;
    movement2b = 10000000;
    movement3b = 10000000;
    movement4b = 10000000;
    movement1c = 10000000;
    movement2c = 10000000;
    movement3c = 10000000;
    movement4c = 10000000;
    movement1d = 10000000;
    movement2d = 10000000;
    movement3d = 10000000;
    movement4d = 10000000;
    movement1e = 10000000;
    movement2e = 10000000;
    movement3e = 10000000;
    movement4e = 10000000;
    movement1f = 10000000;
    movement2f = 10000000;
    movement3f = 10000000;
    movement4f = 10000000;
    movement1g = 10000000;
    movement2g = 10000000;
    movement3g = 10000000;
    movement4g = 10000000;
    movement1h = 10000000;
    movement2h = 10000000;
    movement3h = 10000000;
    movement4h = 10000000;
    movement1i = 10000000;
    movement2i = 10000000;
    movement3i = 10000000;
    movement4i = 10000000;
    movement1j = 10000000;
    movement2j = 10000000;
    movement3j = 10000000;
    movement4j = 10000000;
    movement1k = 10000000;
    movement2k = 10000000;
    movement3k = 10000000;
    movement4k = 10000000;
    movement1l = 10000000;
    movement2l = 10000000;
    movement3l = 10000000;
    movement4l = 10000000;
    movement1m = 10000000;
    movement2m = 10000000;
    movement3m = 10000000;
    movement4m = 10000000;
    movement1n = 10000000;
    movement2n = 10000000;
    movement3n = 10000000;
    movement4n = 10000000;
    movement1o = 10000000;
    movement2o = 10000000;
    movement3o = 10000000;
    movement4o = 10000000;
    movement1p = 10000000;
    movement2p = 10000000;
    movement3p = 10000000;
    movement4p = 10000000;
    movement1q = 10000000;
    movement2q = 10000000;
    movement3q = 10000000;
    movement4q = 10000000;
    movement1r = 10000000;
    movement2r = 10000000;
    movement3r = 10000000;
    movement4r = 10000000;
    movement1s = 10000000;
    movement2s = 10000000;
    movement3s = 10000000;
    movement4s = 10000000;
    movement1t = 10000000;
    movement2t = 10000000;
    movement3t = 10000000;
    movement4t = 10000000;
    movement1u = 10000000;
    movement2u = 10000000;
    movement3u = 10000000;
    movement4u = 10000000;
    movement1v = 10000000;
    movement2v = 10000000;
    movement3v = 10000000;
    movement4v = 10000000;
    movement1w = 10000000;
    movement2w = 10000000;
    movement3w = 10000000;
    movement4w = 10000000;
    movement1x = 10000000;
    movement2x = 10000000;
    movement3x = 10000000;
    movement4x = 10000000;
    movement1y = 10000000;
    movement2y = 10000000;
    movement3y = 10000000;
    movement4y = 10000000;
    movement1z = 10000000;
    movement2z = 10000000;
    movement3z = 10000000;
    movement4z = 10000000;
    hit = 0;
    miss = 0;
    an = 0;
    fullArrayCopy = [];
    currentBpmArray = [];
    array = []
    array1 = []
    arrayTime = []
    newArray = []
    fullArray = []
    secondChart = []
    sg = 0
    sg3 = 0
    sg4 = 0;
    sg5 = 0;
    sg6 = 0;
    keySecond = 0;
    acc = 0
    count = 0
    lineN = 0;
    commaIndex = [];
    index = 0;
    commaIndexT = [];
    key = 0;
    scCount = 0;
    rawBpmArray = [];
    rawBpmArrayS = "";
    bpmTick = [];
    bpmRate = [];
    tickCheck = 0;
    // bpmTick = [];
    stepRate = 0;
    key3 = 1;
    key2 = 0;
    fullArray = []
    secondChart = []
    sg = 0
    sg3 = 0
    keySecond = 0;
    commaIndex = [];
    index = 0;
    commaIndexT = [];
    elapsedTime = 0;
    // let [fileHandle] = await window.showOpenFilePicker();
    document.getElementById("difficulty").innerHTML = "Loading...";
    // console.log(fileHandle.kind);
    // let fileData = await fileHandle.getFile();
    // let text = await fileData.text();
    // console.log(fileData)
    // if (allContents != "") {
    document.getElementById("buttonPlay").style.visibility = "visibile";
    // }
    allContents = texts
    // document.getElementById("smText").innerHTML = allContents
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.startsWith("#TITLE:")) {
            title = line
            document.getElementById("smText").innerHTML = line
        }
        if (line.startsWith("#ARTIST:")) {
            artist = line
            artist = artist.replace("#ARTIST:", "")
            artist = artist.replace(";", "")
        }
        if (line.startsWith("#STOPS:")) {
            stopFound = 1;
            stopSign.push(line)
            stopSign[0] = stopSign[0].replace("#STOPS:", "");
            stopSign[0] = stopSign[0].split("=");
            rawStopsS = stopSign[0]
            rawStopsS = rawStopsS.toString()
            stopSplit = rawStopsS.split(",")
            stopSplit1 = stopSplit[0]
            stopSplit2 = stopSplit[1]
            parseFloat(stopSplit1)
            parseFloat(stopSplit2)
            stopSign[0] = stopsTick
            parseFloat(stopsTick)
            stopSign[1] = stopsTime
            parseFloat(stopsTime)
        }
        if (stopFound == 1 && line.startsWith(",4") || stopFound == 1 && line.startsWith(",3") || stopFound == 1 && line.startsWith(",2") || stopFound == 1 && line.startsWith(",1") || stopFound == 1 && line.startsWith(",5") || stopFound == 1 && line.startsWith(",6") || stopFound == 1 && line.startsWith(",7") || stopFound == 1 && line.startsWith(",8") || stopFound == 1 && line.startsWith(",9")) {
            allStops.push(line)
            for (let c = 0; c < allStops.length; c++) {
                allStops[c] = allStops[c].replace(",", "");
            }
        }
        if (line.startsWith("#STOPS:1") || line.startsWith("#STOPS:2") || line.startsWith("#STOPS:3") || line.startsWith("#STOPS:4") || line.startsWith("#STOPS:5") || line.startsWith("#STOPS:6") || line.startsWith("#STOPS:7") || line.startsWith("#STOPS:8") || line.startsWith("#STOPS:9")) {
            stopStop = 1;
        }
        if (stopStop == 0) {
            if (line.startsWith(",0") || line.startsWith(",1") || line.startsWith(",2") || line.startsWith(",3") || line.startsWith(",4") || line.startsWith(",5") || line.startsWith(",6") || line.startsWith(",7") || line.startsWith(",8") || line.startsWith(",9") || line.startsWith("#BPMS")) {
                rawBpmArray.push(line)
                document.getElementById("test").innerHTMl = rawBpmArray
            }
        }

        if (line.startsWith("#OFFSET:")) {
            var offsetRaw = line.replace("#OFFSET:", "");
            if (offsetRaw.startsWith("-")) {
                var skipAhead = 1;
            }
            if (offsetRaw.startsWith("1") || offsetRaw.startsWith("2") || offsetRaw.startsWith("3") || offsetRaw.startsWith("4") || offsetRaw.startsWith("5") || offsetRaw.startsWith("6") || offsetRaw.startsWith("7") || offsetRaw.startsWith("8") || offsetRaw.startsWith("9")) {
                var timeWait = 1;
            }
            if (!line.startsWith("-")) {
                offsetClean = offsetRaw.replace(";", "");
            }
            if (line.startsWith("-")) {
                offsetClean = offsetRaw.replace(";", "");
            }
        }
        if (line.startsWith("#TITLE:")) {
            var SongTitle = line.replace("#TITLE:", "");
            songTitleClean = SongTitle.replace(";", "");
            document.getElementById("songTitle").innerHTML = songTitleClean
            document.getElementById("songTitle").style.visibility = "visible";
        }
        if (line.startsWith("     1") && !line.includes(".") || line.startsWith("     2") && !line.includes(".") || line.startsWith("     3") && !line.includes(".") || line.startsWith("     4") && !line.includes(".") || line.startsWith("     5" && !line.includes(".")) || line.startsWith("     6") && !line.includes(".") || line.startsWith("     7") && !line.includes(".") || line.startsWith("     8") && !line.includes(".") || line.startsWith("     9") && !line.includes(".")) {
            difficultyCount += 1;
            if (difficultyCount == 1) {
                difficulty1 = line;
                difficulty1 = difficulty1.split(" ").join("")
                difficulty1 = difficulty1.replace(":", "")
            }
            if (difficultyCount == 2) {
                difficulty2 = line;
                difficulty2 = difficulty2.split(" ").join("")
                difficulty2 = difficulty2.replace(":", "")
            }
            if (difficultyCount == 3) {
                difficulty3 = line;
                difficulty3 = difficulty3.split(" ").join("")
                difficulty3 = difficulty3.replace(":", "")
            }
            if (difficultyCount == 4) {
                difficulty4 = line;
                difficulty4 = difficulty4.split(" ").join("")
                difficulty4 = difficulty4.replace(":", "")
            }
            if (difficultyCount == 5) {
                difficulty5 = line;
                difficulty5 = difficulty5.split(" ").join("")
                difficulty5 = difficulty5.replace(":", "")
            }
            if (difficultyCount == 6) {
                difficulty6 = line;
                difficulty6 = difficulty6.split(" ").join("")
                difficulty6 = difficulty6.replace(":", "")
            }
        }
        // const csLewisQuote = 'We are what we believe we are.';
        // const regex = /we/g;
        // csLewisQuote.match(regex); // ["we", "we"]
        if (line.startsWith("//--")) {
            firstChart += 1;
        }
        if (firstChart == 1) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndex.push(lineN)
                // console.log("commaIndex", commaIndex)
                if (count >= 0) {
                    newArray = array1
                    // console.log(newArray.length)
                    array += 1
                }
                array1 = []
                count++
                // for (time in arrayTime) {
                //     if (arrayTime[time] == 0) {
                //         acc++
                //         arrayTime[time] = newArray.length / 4
            }
            lineN++;
        }
        if (firstChart == 2) {
            if (keyCount == 0) {
                keyCount = 1;
                countS = 0;
                lineNS = 0;
                commaIndexS = [];
                commaIndexTS = [];
            }
        }
        if (firstChart == 3) {
            if (keyCount3 == 0) {
                keyCount3 = 1;
                count3 = 0;
                lineN3 = 0;
                commaIndex3 = [];
                commaIndexT3 = [];
            }
        }
        if (firstChart == 4) {
            if (keyCount4 == 0) {
                keyCount4 = 1;
                count4 = 0;
                lineN4 = 0;
                commaIndex4 = [];
                commaIndexT4 = [];
            }
        }
        if (firstChart == 5) {
            if (keyCount5 == 0) {
                keyCount5 = 1;
                count5 = 0;
                lineN5 = 0;
                commaIndex5 = [];
                commaIndexT5 = [];
            }
        }
        if (firstChart == 6) {
            if (keyCount6 == 0) {
                keyCount6 = 1;
                count6 = 0;
                lineN6 = 0;
                commaIndex6 = [];
                commaIndexT6 = [];
            }
        }
        if (firstChart == 2) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndexS.push(lineNS)
                // console.log("commaIndex", commaIndex)
                if (countS >= 0) {
                    newArrayS = array1S
                    // console.log(newArray.length)
                    arrayS += 1
                }
                array1S = []
                countS++
                // for (time in arrayTime) {
                //     if (arrayTime[time] == 0) {
                //         acc++
                //         arrayTime[time] = newArray.length / 4
            }
            lineNS++;
        }
        if (firstChart == 3) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndex3.push(lineN3)

                if (count3 >= 0) {
                    newArray3 = array13

                    array3 += 1
                }
                array13 = []
                count3++
                // for (time in arrayTime) {
                //     if (arrayTime[time] == 0) {
                //         acc++
                //         arrayTime[time] = newArray.length / 4
            }
            lineN3++;
        }
        if (firstChart == 4) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndex4.push(lineN4)
                if (count4 >= 0) {
                    newArray4 = array14
                    array4 += 1
                }
                array14 = []
                count4++
            }
            lineN4++;
        }
        if (firstChart == 5) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndex5.push(lineN5)
                if (count5 >= 0) {
                    newArray5 = array15
                    array5 += 1
                }
                array15 = []
                count5++
            }
            lineN5++;
        }
        if (firstChart == 6) {
            if (line == "," || line.startsWith(",  //")) {
                commaIndex6.push(lineN6)
                if (count6 >= 0) {
                    newArray6 = array16
                    array6 += 1
                }
                array16 = []
                count6++
            }
            lineN6++;
        }
        // console.log(fullArray)
        if (line.length == 4 && firstChart == 1) {
            uniqueArray.push(line)
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (key == 0) {
                    key = 1;
                    commaIndex.push(lineN - 2)
                    array1 = [];
                    newArray = [];
                    arrayNew = [];
                    arrayy = [];
                    arrayTime = [];
                }
                fullArray.push((line))
                array1.push((line))
            }
        }
        if (line.length == 4 && firstChart == 2) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (keySecond == 0) {
                    keySecond = 1;
                    commaIndexS.push(lineNS - 2)
                    array1S = [];
                    newArrayS = [];
                    arrayNewS = [];
                    arrayyS = [];
                    arrayTimeS = [];
                }
                secondChart.push(line);
                array1S.push(line);
            }
        }
        if (line.length == 4 && firstChart == 3) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (keyThird == 0) {
                    keyThird = 1;
                    commaIndex3.push(lineN3 - 2)
                    array13 = [];
                    newArray3 = [];
                    arrayNew3 = [];
                    arrayy3 = [];
                    arrayTime3 = [];
                }
                chart3.push(line);
                array13.push(line);
            }
        }
        if (line.length == 4 && firstChart == 4) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (keyFourth == 0) {
                    keyFourth = 1;
                    commaIndex4.push(lineN4 - 2)
                    array14 = [];
                    newArray4 = [];
                    arrayNew4 = [];
                    arrayy4 = [];
                    arrayTime4 = [];
                }
                chart4.push(line);
                array14.push(line);
            }
        }
        if (line.length == 4 && firstChart == 5) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (keyFifth == 0) {
                    keyFifth = 1;
                    commaIndex5.push(lineN5 - 2)
                    array15 = [];
                    newArray5 = [];
                    arrayNew5 = [];
                    arrayy5 = [];
                    arrayTime5 = [];
                }
                chart5.push(line);
                array15.push(line);
            }
        }
        if (line.length == 4 && firstChart == 6) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (keySixth == 0) {
                    keySixth = 1;
                    commaIndex6.push(lineN6 - 2)
                    array16 = [];
                    newArray6 = [];
                    arrayNew6 = [];
                    arrayy6 = [];
                    arrayTime6 = [];
                }
                chart6.push(line);
                array16.push(line);
            }
        }
        if (chartNumber == 1 && firstChart == 1) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (fullArray.length <= 4 && newArray.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTime.splice(i, 0, 1))
                    tickCount += 4;
                }
                if (fullArray.length > 4 && fullArray.length < 9 && newArray.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTime.splice(i, 0, 2))
                    tickCount += 4;
                }
                if (fullArray.length > 8 && fullArray.length < 13 && newArray.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTime.splice(i, 0, 3))
                    tickCount += 4;
                }
                if (fullArray.length > 12 && fullArray.length < 17 && newArray.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTime.splice(i, 0, 4))
                    tickCount += 4;
                }
                if (fullArray.length > 16 && fullArray.length < 25 && newArray.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTime.splice(i, 0, 6))
                    tickCount += 4;
                }
                if (fullArray.length > 24 && fullArray.length < 33 && newArray.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTime.splice(i, 0, 8))
                    tickCount += 4;
                }
                if (fullArray.length > 32 && fullArray.length < 49 && newArray.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTime.splice(i, 0, 12))
                    tickCount += 4;
                }
                if (fullArray.length > 48 && fullArray.length < 65 && newArray.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTime.splice(i, 0, 16))
                    tickCount += 4;
                }
                if (fullArray.length > 64 && fullArray.length < 97 && newArray.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTime.splice(i, 0, 24))
                    tickCount += 4;
                }
                if (fullArray.length > 97 && fullArray.length < 194 && newArray.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTime.splice(i, 0, 48))
                    tickCount += 4;
                }
                if (newArray.length == 4) {
                    arrayTime.push(1)
                }
                if (newArray.length == 8) {
                    arrayTime.push(2)
                }
                if (newArray.length == 12) {
                    arrayTime.push(3)
                }
                if (newArray.length == 16) {
                    arrayTime.push(4)
                }
                if (newArray.length == 24) {
                    arrayTime.push(6)
                }
                if (newArray.length == 32) {
                    arrayTime.push(8)
                }
                if (newArray.length == 48) {
                    arrayTime.push(12)
                }
                if (newArray.length == 64) {
                    arrayTime.push(16)
                }
                if (newArray.length == 96) {
                    arrayTime.push(24)
                }
                if (newArray.length == 192) {
                    arrayTime.push(48)
                }
            }
        }
        if (firstChart == 2) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (secondChart.length <= 4 && newArrayS.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTimeS.splice(i, 0, 1))
                    tickCount2 += 4;
                }
                if (secondChart.length > 4 && secondChart.length < 9 && newArrayS.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTimeS.splice(i, 0, 2))
                    tickCount2 += 4;
                }
                if (secondChart.length > 8 && secondChart.length < 13 && newArrayS.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTimeS.splice(i, 0, 3))
                    tickCount2 += 4;
                }
                if (secondChart.length > 12 && secondChart.length < 17 && newArrayS.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTimeS.splice(i, 0, 4))
                    tickCount2 += 4;
                }
                if (secondChart.length > 16 && secondChart.length < 25 && newArrayS.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTimeS.splice(i, 0, 6))
                    tickCount2 += 4;
                }
                if (secondChart.length > 24 && secondChart.length < 33 && newArrayS.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTimeS.splice(i, 0, 8))
                    tickCount2 += 4;
                }
                if (secondChart.length > 32 && secondChart.length < 49 && newArrayS.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTimeS.splice(i, 0, 12))
                    tickCount2 += 4;
                }
                if (secondChart.length > 48 && secondChart.length < 65 && newArrayS.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTimeS.splice(i, 0, 16))
                    tickCount2 += 4;
                }
                if (secondChart.length > 64 && secondChart.length < 97 && newArrayS.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTimeS.splice(i, 0, 24))
                    tickCount2 += 4;
                }
                if (secondChart.length > 97 && secondChart.length < 194 && newArrayS.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTimeS.splice(i, 0, 48))
                    tickCount2 += 4;
                }
                if (newArrayS.length == 4) {
                    arrayTimeS.push(1)
                }
                if (newArrayS.length == 8) {
                    arrayTimeS.push(2)
                }
                if (newArrayS.length == 12) {
                    arrayTimeS.push(3)
                }
                if (newArrayS.length == 16) {
                    arrayTimeS.push(4)
                }
                if (newArrayS.length == 24) {
                    arrayTimeS.push(6)
                }
                if (newArrayS.length == 32) {
                    arrayTimeS.push(8)
                }
                if (newArrayS.length == 48) {
                    arrayTimeS.push(12)
                }
                if (newArrayS.length == 64) {
                    arrayTimeS.push(16)
                }
                if (newArrayS.length == 96) {
                    arrayTimeS.push(24)
                }
                if (newArrayS.length == 192) {
                    arrayTimeS.push(48)
                }
            }
        }
        if (firstChart == 3) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (chart3.length <= 4 && newArray3.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTime3.splice(i, 0, 1))
                    tickCount3 += 4;
                }
                if (chart3.length > 4 && chart3.length < 9 && newArray3.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTime3.splice(i, 0, 2))
                    tickCount3 += 4;
                }
                if (chart3.length > 8 && chart3.length < 13 && newArray3.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTime3.splice(i, 0, 3))
                    tickCount3 += 4;
                }
                if (chart3.length > 12 && chart3.length < 17 && newArray3.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTime3.splice(i, 0, 4))
                    tickCount3 += 4;
                }
                if (chart3.length > 16 && chart3.length < 25 && newArray3.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTime3.splice(i, 0, 6))
                    tickCount3 += 4;
                }
                if (chart3.length > 24 && chart3.length < 33 && newArray3.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTime3.splice(i, 0, 8))
                    tickCount3 += 4;
                }
                if (chart3.length > 32 && chart3.length < 49 && newArray3.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTime3.splice(i, 0, 12))
                    tickCount3 += 4;
                }
                if (chart3.length > 48 && chart3.length < 65 && newArray3.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTime3.splice(i, 0, 16))
                    tickCount3 += 4;
                }
                if (chart3.length > 64 && chart3.length < 97 && newArray3.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTime3.splice(i, 0, 24))
                    tickCount3 += 4;
                }
                if (chart3.length > 97 && chart3.length < 194 && newArray3.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTime3.splice(i, 0, 48))
                    tickCount3 += 4;
                }
                if (newArray3.length == 4) {
                    arrayTime3.push(1)
                }
                if (newArray3.length == 8) {
                    arrayTime3.push(2)
                }
                if (newArray3.length == 12) {
                    arrayTime3.push(3)
                }
                if (newArray3.length == 16) {
                    arrayTime3.push(4)
                }
                if (newArray3.length == 24) {
                    arrayTime3.push(6)
                }
                if (newArray3.length == 32) {
                    arrayTime3.push(8)
                }
                if (newArray3.length == 48) {
                    arrayTime3.push(12)
                }
                if (newArray3.length == 64) {
                    arrayTime3.push(16)
                }
                if (newArray3.length == 96) {
                    arrayTime3.push(24)
                }
                if (newArray3.length == 192) {
                    arrayTime3.push(48)
                }
            }
        }
        if (firstChart == 4) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (chart4.length <= 4 && newArray4.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTime4.splice(i, 0, 1))
                    tickCount4 += 4;
                }
                if (chart4.length > 4 && chart4.length < 9 && newArray4.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTime4.splice(i, 0, 2))
                    tickCount4 += 4;
                }
                if (chart4.length > 8 && chart4.length < 13 && newArray4.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTime4.splice(i, 0, 3))
                    tickCount4 += 4;
                }
                if (chart4.length > 12 && chart4.length < 17 && newArray4.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTime4.splice(i, 0, 4))
                    tickCount4 += 4;
                }
                if (chart4.length > 16 && chart4.length < 25 && newArray4.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTime4.splice(i, 0, 6))
                    tickCount4 += 4;
                }
                if (chart4.length > 24 && chart4.length < 33 && newArray4.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTime4.splice(i, 0, 8))
                    tickCount4 += 4;
                }
                if (chart4.length > 32 && chart4.length < 49 && newArray4.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTime4.splice(i, 0, 12))
                    tickCount4 += 4;
                }
                if (chart4.length > 48 && chart4.length < 65 && newArray4.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTime4.splice(i, 0, 16))
                    tickCount4 += 4;
                }
                if (chart4.length > 64 && chart4.length < 97 && newArray4.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTime4.splice(i, 0, 24))
                    tickCount4 += 4;
                }
                if (chart4.length > 97 && chart4.length < 194 && newArray4.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTime4.splice(i, 0, 48))
                    tickCount4 += 4;
                }
                if (newArray4.length == 4) {
                    arrayTime4.push(1)
                }
                if (newArray4.length == 8) {
                    arrayTime4.push(2)
                }
                if (newArray4.length == 12) {
                    arrayTime4.push(3)
                }
                if (newArray4.length == 16) {
                    arrayTime4.push(4)
                }
                if (newArray4.length == 24) {
                    arrayTime4.push(6)
                }
                if (newArray4.length == 32) {
                    arrayTime4.push(8)
                }
                if (newArray4.length == 48) {
                    arrayTime4.push(12)
                }
                if (newArray4.length == 64) {
                    arrayTime4.push(16)
                }
                if (newArray4.length == 96) {
                    arrayTime4.push(24)
                }
                if (newArray4.length == 192) {
                    arrayTime4.push(48)
                }
            }
        }
        if (firstChart == 5) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (chart5.length <= 4 && newArray5.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTime5.splice(i, 0, 1))
                    tickCount5 += 4;
                }
                if (chart5.length > 4 && chart5.length < 9 && newArray5.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTime5.splice(i, 0, 2))
                    tickCount5 += 4;
                }
                if (chart5.length > 8 && chart5.length < 13 && newArray5.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTime5.splice(i, 0, 3))
                    tickCount5 += 4;
                }
                if (chart5.length > 12 && chart5.length < 17 && newArray5.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTime5.splice(i, 0, 4))
                    tickCount5 += 4;
                }
                if (chart5.length > 16 && chart5.length < 25 && newArray5.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTime5.splice(i, 0, 6))
                    tickCount5 += 4;
                }
                if (chart5.length > 24 && chart5.length < 33 && newArray5.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTime5.splice(i, 0, 8))
                    tickCount5 += 4;
                }
                if (chart5.length > 32 && chart5.length < 49 && newArray5.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTime5.splice(i, 0, 12))
                    tickCount5 += 4;
                }
                if (chart5.length > 48 && chart5.length < 65 && newArray5.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTime5.splice(i, 0, 16))
                    tickCount5 += 4;
                }
                if (chart5.length > 64 && chart5.length < 97 && newArray5.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTime5.splice(i, 0, 24))
                    tickCount5 += 4;
                }
                if (chart5.length > 97 && chart5.length < 194 && newArray5.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTime5.splice(i, 0, 48))
                    tickCount5 += 4;
                }
                if (newArray5.length == 4) {
                    arrayTime5.push(1)
                }
                if (newArray5.length == 8) {
                    arrayTime5.push(2)
                }
                if (newArray5.length == 12) {
                    arrayTime5.push(3)
                }
                if (newArray5.length == 16) {
                    arrayTime5.push(4)
                }
                if (newArray5.length == 24) {
                    arrayTime5.push(6)
                }
                if (newArray5.length == 32) {
                    arrayTime5.push(8)
                }
                if (newArray5.length == 48) {
                    arrayTime5.push(12)
                }
                if (newArray5.length == 64) {
                    arrayTime5.push(16)
                }
                if (newArray5.length == 96) {
                    arrayTime5.push(24)
                }
                if (newArray5.length == 192) {
                    arrayTime5.push(48)
                }
            }
        }
        if (firstChart == 6) {
            if (line.startsWith(0) || line.startsWith(1) || line.startsWith(2) || line.startsWith(3) || line.startsWith(4) || line.startsWith(5) || line.startsWith(6) || line.startsWith(7) || line.startsWith(8) || line.startsWith(9) || line.startsWith("M")) {
                if (chart6.length <= 4 && newArray6.length == 0) {
                    Array.from({ length: 4 }, (x, i) => arrayTime6.splice(i, 0, 1))
                    tickCount6 += 4;
                }
                if (chart6.length > 4 && chart6.length < 9 && newArray6.length == 0) {
                    Array.from({ length: 8 }, (x, i) => arrayTime6.splice(i, 0, 2))
                    tickCount6 += 4;
                }
                if (chart6.length > 8 && chart6.length < 13 && newArray6.length == 0) {
                    Array.from({ length: 12 }, (x, i) => arrayTime6.splice(i, 0, 3))
                    tickCount6 += 4;
                }
                if (chart6.length > 12 && chart6.length < 17 && newArray6.length == 0) {
                    Array.from({ length: 16 }, (x, i) => arrayTime6.splice(i, 0, 4))
                    tickCount6 += 4;
                }
                if (chart6.length > 16 && chart6.length < 25 && newArray6.length == 0) {
                    Array.from({ length: 24 }, (x, i) => arrayTime6.splice(i, 0, 6))
                    tickCount6 += 4;
                }
                if (chart6.length > 24 && chart6.length < 33 && newArray6.length == 0) {
                    Array.from({ length: 32 }, (x, i) => arrayTime6.splice(i, 0, 8))
                    tickCount6 += 4;
                }
                if (chart6.length > 32 && chart6.length < 49 && newArray6.length == 0) {
                    Array.from({ length: 48 }, (x, i) => arrayTime6.splice(i, 0, 12))
                    tickCount6 += 4;
                }
                if (chart6.length > 48 && chart6.length < 65 && newArray6.length == 0) {
                    Array.from({ length: 64 }, (x, i) => arrayTime6.splice(i, 0, 16))
                    tickCount6 += 4;
                }
                if (chart6.length > 64 && chart6.length < 97 && newArray6.length == 0) {
                    Array.from({ length: 96 }, (x, i) => arrayTime6.splice(i, 0, 24))
                    tickCount6 += 4;
                }
                if (chart6.length > 97 && chart6.length < 194 && newArray6.length == 0) {
                    Array.from({ length: 192 }, (x, i) => arrayTime6.splice(i, 0, 48))
                    tickCount6 += 4;
                }
                if (newArray6.length == 4) {
                    arrayTime6.push(1)
                }
                if (newArray6.length == 8) {
                    arrayTime6.push(2)
                }
                if (newArray6.length == 12) {
                    arrayTime6.push(3)
                }
                if (newArray6.length == 16) {
                    arrayTime6.push(4)
                }
                if (newArray6.length == 24) {
                    arrayTime6.push(6)
                }
                if (newArray6.length == 32) {
                    arrayTime6.push(8)
                }
                if (newArray6.length == 48) {
                    arrayTime6.push(12)
                }
                if (newArray6.length == 64) {
                    arrayTime6.push(16)
                }
                if (newArray6.length == 96) {
                    arrayTime6.push(24)
                }
                if (newArray6.length == 192) {
                    arrayTime6.push(48)
                }
            }
        }
        if (firstChart == 1) {
            if (line == ";") {
                scCount += 1;
                if (scCount > 0) {
                    commaIndex.push(index)
                    // console.log(commaIndex)
                }

            }
            index++
        }
        if (firstChart == 2) {
            if (line == ";") {
                if (scCountS == 0) {
                    scCountS += 1;
                    commaIndexS.push(indexS)
                    // console.log(commaIndex)
                }

            }
            indexS++
        }
        if (firstChart == 3) {
            if (line == ";") {
                if (scCount3 == 0) {
                    scCount3 += 1;
                    commaIndex3.push(index3)
                }

            }
            index3++
        }
        if (firstChart == 4) {
            if (line == ";") {
                if (scCount4 == 0) {
                    scCount4 += 1;
                    commaIndex4.push(index4)
                }
            }
            index4++
        }
        if (firstChart == 5) {
            if (line == ";") {
                if (scCount5 == 0) {
                    scCount5 += 1;
                    commaIndex5.push(index5)
                }
            }
            index5++
        }
        if (firstChart == 6) {
            if (line == ";") {
                if (scCount6 == 0) {
                    scCount6 += 1;
                    commaIndex6.push(index6)
                }
            }
            index6++
        }
    });
    fullArrayCopy = fullArray
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amount = 0;
        var amount0 = 0;
        var amount1 = 1;
        var arrayy = []
        for (index in commaIndex) {
            amount = commaIndex[amount1] - commaIndex[amount0] - 1
            arrayy.push(amount)
            // console.log(amount)
            amount0++
            amount1++
            if (amount == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexT.push(1))
                tickCount += 4;
            }
            if (amount == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexT.push(2))
                tickCount += 4;
            }
            if (amount == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexT.push(3))
                tickCount += 4;
            }
            if (amount == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexT.push(4))
                tickCount += 4;
            }
            if (amount == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexT.push(6))
                tickCount += 4;
            }
            if (amount == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexT.push(8))
                tickCount += 4;
            }
            if (amount == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexT.push(12))
                tickCount += 4;
            }
            if (amount == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexT.push(16))
                tickCount += 4;
            }
            if (amount == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexT.push(24))
                tickCount += 4;
            }
            if (amount > 100 && amount < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexT.push(48))
                tickCount += 4;
            }
        }
    }
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amountS = 0;
        var amount0S = 0;
        var amount1S = 1;
        var arrayyS = []
        for (index in commaIndexS) {
            amountS = commaIndexS[amount1S] - commaIndexS[amount0S] - 1
            arrayyS.push(amountS)
            // console.log(amount)
            amount0S++
            amount1S++
            // if (scCount == 1) {}
            if (amountS == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexTS.push(1))
                tickCount2 += 4;
            }
            if (amountS == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexTS.push(2))
                tickCount2 += 4;
            }
            if (amountS == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexTS.push(3))
                tickCount2 += 4;
            }
            if (amountS == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexTS.push(4))
                tickCount2 += 4;
            }
            if (amountS == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexTS.push(6))
                tickCount2 += 4;
            }
            if (amountS == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexTS.push(8))
                tickCount2 += 4;
            }
            if (amountS == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexTS.push(12))
                tickCount2 += 4;
            }
            if (amountS == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexTS.push(16))
                tickCount2 += 4;
            }
            if (amountS == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexTS.push(24))
                tickCount2 += 4;
            }
            if (amountS > 100 && amountS < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexTS.push(48))
                tickCount2 += 4;
            }
        }
    }
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amount3 = 0;
        var amount03 = 0;
        var amount13 = 1;
        var arrayy3 = []
        for (index in commaIndex3) {
            amount3 = commaIndex3[amount13] - commaIndex3[amount03] - 1
            arrayy3.push(amount3)
            // console.log(amount)
            amount03++
            amount13++
            // if (scCount == 1) {}
            if (amount3 == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexT3.push(1))
                tickCount3 += 4;
            }
            if (amount3 == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexT3.push(2))
                tickCount3 += 4;
            }
            if (amount3 == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexT3.push(3))
                tickCount3 += 4;
            }
            if (amount3 == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexT3.push(4))
                tickCount3 += 4;
            }
            if (amount3 == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexT3.push(6))
                tickCount3 += 4;
            }
            if (amount3 == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexT3.push(8))
                tickCount3 += 4;
            }
            if (amount3 == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexT3.push(12))
                tickCount3 += 4;
            }
            if (amount3 == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexT3.push(16))
                tickCount3 += 4;
            }
            if (amount3 == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexT3.push(24))
                tickCount3 += 4;
            }
            if (amount3 > 100 && amount3 < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexT3.push(48))
                tickCount3 += 4;
            }
        }
    }
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amount4 = 0;
        var amount04 = 0;
        var amount14 = 1;
        var arrayy4 = []
        for (index in commaIndex4) {
            amount4 = commaIndex4[amount14] - commaIndex4[amount04] - 1
            arrayy4.push(amount4)
            // console.log(amount)
            amount04++
            amount14++
            // if (scCount == 1) {}
            if (amount4 == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexT4.push(1))
                tickCount4 += 4;
            }
            if (amount4 == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexT4.push(2))
                tickCount4 += 4;
            }
            if (amount4 == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexT4.push(3))
                tickCount4 += 4;
            }
            if (amount4 == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexT4.push(4))
                tickCount4 += 4;
            }
            if (amount4 == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexT4.push(6))
                tickCount4 += 4;
            }
            if (amount4 == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexT4.push(8))
                tickCount4 += 4;
            }
            if (amount4 == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexT4.push(12))
                tickCount4 += 4;
            }
            if (amount4 == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexT4.push(16))
                tickCount4 += 4;
            }
            if (amount4 == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexT4.push(24))
                tickCount4 += 4;
            }
            if (amount4 > 100 && amount4 < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexT4.push(48))
                tickCount4 += 4;
            }
        }
    }
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amount5 = 0;
        var amount05 = 0;
        var amount15 = 1;
        var arrayy5 = []
        for (index in commaIndex5) {
            amount5 = commaIndex5[amount15] - commaIndex5[amount05] - 1
            arrayy5.push(amount5)
            // console.log(amount)
            amount05++
            amount15++
            if (amount5 == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexT5.push(1))
                tickCount5 += 4;
            }
            if (amount5 == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexT5.push(2))
                tickCount5 += 4;
            }
            if (amount5 == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexT5.push(3))
                tickCount5 += 4;
            }
            if (amount5 == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexT5.push(4))
                tickCount5 += 4;
            }
            if (amount5 == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexT5.push(6))
                tickCount5 += 4;
            }
            if (amount5 == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexT5.push(8))
                tickCount5 += 4;
            }
            if (amount5 == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexT5.push(12))
                tickCount5 += 4;
            }
            if (amount5 == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexT5.push(16))
                tickCount5 += 4;
            }
            if (amount5 == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexT5.push(24))
                tickCount5 += 4;
            }
            if (amount5 > 100 && amount5 < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexT5.push(48))
                tickCount5 += 4;
            }
        }
    }
    if (chartNumber == 1 || chartNumber == 2 || chartNumber == 3 || chartNumber == 4 || chartNumber == 5 || chartNumber == 6) {
        var amount6 = 0;
        var amount06 = 0;
        var amount16 = 1;
        var arrayy6 = []
        for (index in commaIndex6) {
            amount6 = commaIndex6[amount16] - commaIndex6[amount06] - 1
            arrayy6.push(amount6)
            // console.log(amount)
            amount06++
            amount16++
            // if (scCount == 1) {}
            if (amount6 == 4) {
                Array.from({ length: 4 }, (x, i) => commaIndexT6.push(1))
                tickCount6 += 4;
            }
            if (amount6 == 8) {
                Array.from({ length: 8 }, (x, i) => commaIndexT6.push(2))
                tickCount6 += 4;
            }
            if (amount6 == 12) {
                Array.from({ length: 12 }, (x, i) => commaIndexT6.push(3))
                tickCount6 += 4;
            }
            if (amount6 == 16) {
                Array.from({ length: 16 }, (x, i) => commaIndexT6.push(4))
                tickCount6 += 4;
            }
            if (amount6 == 24) {
                Array.from({ length: 24 }, (x, i) => commaIndexT6.push(6))
                tickCount6 += 4;
            }
            if (amount6 == 32) {
                Array.from({ length: 32 }, (x, i) => commaIndexT6.push(8))
                tickCount6 += 4;
            }
            if (amount6 == 48) {
                Array.from({ length: 48 }, (x, i) => commaIndexT6.push(12))
                tickCount6 += 4;
            }
            if (amount6 == 64) {
                Array.from({ length: 64 }, (x, i) => commaIndexT6.push(16))
                tickCount6 += 4;
            }
            if (amount6 == 96) {
                Array.from({ length: 96 }, (x, i) => commaIndexT6.push(24))
                tickCount6 += 4;
            }
            if (amount6 > 100 && amount6 < 200) {
                Array.from({ length: 192 }, (x, i) => commaIndexT6.push(48))
                tickCount6 += 4;
            }
        }
    }
    for (let i = 0; i < allStops.length; i++) {
        allStops[i] = allStops[i].split("=");
    }
    var pos = 0;
    for (let i = 0; i < allStops.length; i++) {
        pos = 0;
        stopTick.push(allStops[i][pos])
        pos++;
        stopTime.push(allStops[i][pos])
    }
    stopTime.unshift(stopSplit2)
    stopTick.unshift(stopSplit1)
    parseFloat(stopTime)
    parseFloat(stopTick)
    // console.log(commaIndexT.length, "amount")
    function onlyUnique(value, index, array) {
        return array.indexOf(value) === index;
    }
    var unique = uniqueArray.filter(onlyUnique);
    // tickRPS(unique)

    // tickRPS(unique);
    // tickRPS(commaIndex, "commaIndex");
    // tickRPS("fullArray", fullArray)
    // tickRPS("commaIndexT", commaIndexT)
    document.getElementById("fullArray").innerHTML = "Step " + fullArray
    document.getElementById("indexCommaT").innerHTML = "Beats Per Measure " + commaIndexT
    // tickRPS(rawBpmArray)
    rawBpmArrayS = rawBpmArray.toString()
    const regexp = /([0-9]+).([0-9]+)/g;
    const regexp2 = /([0-9]*).([0-9]*)=([0-9]*).*([0-9]*)/g;
    const regexpNum = /([0-9]+)=([0-9]+).([0-9]+)/g;
    // const foundNum = rawBpmArrayS.match(regexpNum)
    foundExp = rawBpmArrayS.match(regexp2);
    for (item in foundNum) {
        item.split("=")
    }
    var arrayNew = new Array();
    foundExpString = foundExp[0];
    foundExpString = foundExpString.toString();
    arrayNew = foundExpString.split(',');
    arrayNew[0] = arrayNew[0].replace(":", "");
    // arrayNew[-2] = arrayNew[-2].replace(";", "");
    // for (var c = 0; c < arrayNew.length; c++) {
    //     splitter = arrayNew[c].split("=");
    //     splitterAcc.push(splitter)
    // }
    for (var c = 0; c < arrayNew.length; c++) {
        splitter = arrayNew[c].split("=");
        splitterAcc.push(splitter)
    }
    splitterAcc = splitterAcc.toString();
    // splitterAcc = splitterAcc.replace(",", "")
    var splitterAccFinal = splitterAcc.split(",")
    gs = splitterAccFinal.filter(Boolean);
    for (let sb = 0; sb < gs.length; sb++)
        (sb % 2 == 0 ? bpmTick : bpmRate).push(gs[sb]);
    document.getElementById("bpmTick").innerHTML = "Bpm Tick " + bpmTick
    document.getElementById("bpmRate").innerHTML = "Bpm Rate " + bpmRate
    bpmRate[bpmRate.length - 1] = bpmRate[bpmRate.length - 1].replace(";", "")
    // console.log("bpmTick length", bpmTick.length)
    // console.log(audio.duration)
    // document.getElementById("test").innerHTML = "foundExp " + foundExp
    // document.getElementById("test2").innerHTML = "foundExpString" + foundExpString
    // document.getElementById("test2").innerHTML = "arrayNew" + arrayNew[0] + " " + arrayNew[1]
    // // document.getElementById("test9").innerHTML = "foundNumA1 " + foundNumA1
    // document.getElementById("test3").innerHTML = "foundExp[] " + foundExp[0] + " " + foundExp[1] + " " + foundExp[2]
    // document.getElementById("test4").innerHTML = "replacedExp " + replacedExp;
    // document.getElementById("test5").innerHTML = "splitterAcc " + splitterAcc;
    // document.getElementById("test8").innerHTML = "splitterAcc " + splitterAcc[0] + " " + splitterAcc[1] + " " + splitterAcc[2];
    // document.getElementById("test6").innerHTML = "bpmtick " + bpmtick;
    // document.getElementById("test7").innerHTML = "bpmrate " + bpmrate;
    // // document.getElementById("test9").innerHTML = "splitterAcc2 " + splitterAcc2
    // document.getElementById("test10").innerHTML = "splitterNum1 " + splitterNum1
    // document.getElementById("test11").innerHTML = "splitterNum2 " + splitterNum2
    // document.getElementById("test12").innerHTML = "filtered " + filtered
    // document.getElementById("test13").innerHTML = "splitterAccFinal " + splitterAccFinal
    // document.getElementById("test14").innerHTML = "splitterAccFinal " + splitterAccFinal[0] + " " + splitterAccFinal[1] + " " + splitterAccFinal[2] + " " + splitterAccFinal[3];
    // console.log(rawBpmArrayS);
    const found = rawBpmArrayS.match(regexp)
    // console.log(found, "found")
    // for (let s = 0; s < found.length; s++)
    //     (s % 2 == 0 ? bpmTick : bpmRate).push(found[s]);
    // console.log(bpmTick, bpmRate)
    // document.getElementById("bpmTick").value = ""
    // document.getElementById("bpmRate").value = ""
    if (firstChart == 1 && chartNumber == 2) {
        document.getElementById("span16").style.color = "red";
    }
    if (firstChart == 6 && chartNumber == 6 || firstChart == 5 && chartNumber == 5 || firstChart == 4 && chartNumber == 4 || firstChart == 3 && chartNumber == 3 || firstChart == 2 && chartNumber == 2 || firstChart >= 1 && chartNumber == 1) {
        document.getElementById("span16").style.color = "rgb(173, 142, 219)";
    }
}
function handleFiles(event) {
    offsetParsed = parseFloat(offsetClean)
    settime()
    // var offsetCleanMinus = offsetRaw.replace("-", "");
    files = event.target.files;
    $("#src").attr("src", URL.createObjectURL(files[0]));
}
document.getElementById("upload").addEventListener("change", handleFiles, false);
function settime() {
    // offsetParsed = parseInt(offsetClean)
    // console.log("offsetClean", offsetClean)
    // audio = document.getElementById("audio");
    // audio.currentTime = 0//offsetParsed - .35;
}
function step(timestamp) {
    window.requestAnimationFrame(step);
    // difference = (timeS * stepRate * commaIndexT[a] - nTime) / 1000;
    if (key2 == 1) {
        // console.log(("newStepRateTime1", timeSS + newStepRateTime) * commaIndexT[a])
        // console.log("newStepRateTime2", timeSS + newStepRateTime)
        timeSS = timestamp - cTime;
        timeS = timestamp;
        millisecond = timeS;
        if (limit1 == 0) {
            limit1 = 1
            // nTime = timestamp - cTime
            nTime = timestamp
        }
        second = millisecond / 1000;
        minute = second * 60;
        if (newTickCheck >= bpmRate[currentTickCheck]) {
            newTickCheck = bpmRate[currentTickCheck]
            stepRateTime = timeSS
        }
        newStepRateTime = timeS - newStepRateTime * stepRate;
        if (S < 1000000) {
            if (stepRateN !== stepRateC || tickCheckAccT >= stopTick[stopTickC]) {
                if (keyStepRate1 == 0) {
                    keyStepRate1 = 1
                    stepRateC = stepRateN
                    tickDuration = timestamp - timeInterval1
                    timeInterval1 = timestamp
                    differenceRound = Math.round(difference)
                    combo = 0;
                    nTime = timestamp
                    if (tickDuration < 260) {
                        nTime = timestamp - 21
                    }
                    if (tickDuration >= 260 && tickDuration < 275) {
                        nTime = timestamp - 19
                    }
                    if (tickDuration >= 275 && tickDuration < 400) {
                        nTime = timestamp - 19
                    }
                    if (tickDuration >= 400 && tickDuration < 600) {
                        nTime = timestamp - 17
                    }
                    if (tickDuration >= 600 && tickDuration < 1000) {
                        nTime = timestamp - 15
                    }
                    if (tickDuration >= 1000) {
                        nTime = timestamp - 15
                    }
                    if (tickCheckAccT >= stopTick[stopTickC]) {
                        nTime = timestamp + (stopTime[stopTickC] * 1000)
                        stopTickC++;
                    }
                    currentDifference = currentDifference + difference;
                    currentDifferenceAcc = currentDifference;
                }
            }
            difference = (timeS - nTime + .000000000001) * 48 * stepRate * rate / 1000
        }
        elapsedTime = timeS - cTime
        // differenceStepRate = difference * commaIndexValue;
        differenceMeasure = difference / 4
        // if (bpmTick[0] != undefined && keyBpmTick1 == 0) {
        //     keyBpmTick1 = 1;
        //     stepRate = bpmTick[0]
        // }
        // stepDrop = stepRate * commaIndexT[1]
        // if (stepRateN == 1) {
        //     if (keyStepRate1 == 0) {
        //         keyStepRate1 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 2) {
        //     if (keyStepRate2 == 0) {
        //         keyStepRate2 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 3) {
        //     if (keyStepRate3 == 0) {
        //         keyStepRate3 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 4) {
        //     if (keyStepRate4 == 0) {
        //         keyStepRate4 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 5) {
        //     if (keyStepRate5 == 0) {
        //         keyStepRate5 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 6) {
        //     if (keyStepRate6 == 0) {
        //         keyStepRate6 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 7) {
        //     if (keyStepRate7 == 0) {
        //         keyStepRate7 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        // if (stepRateN == 8) {
        //     if (keyStepRate8 == 0) {
        //         keyStepRate8 = 1;
        //         nTime = timestamp
        //         combo = 0;
        //         currentDifference = currentDifference + difference;
        //         currentDifferenceAcc = currentDifference;
        //         difference = ((timeS - nTime + .000000000001) * commaIndexT[a] * (stepRate / 1.005) / 1000)
        //     }
        // }
        if (S < 10000000) {
            if (keyT1st == 0) {
                keyT1st = 1;
                keyT2nd = 0;
                keyT3rd = 0;
                keyT4th = 0;
                keyT6th = 0;
                keyT8th = 0;
                keyT12th = 0;
                keyT16th = 0;
                keyT24th = 0;
                keyT48th = 0;
                nTickCheck = S;
                tickCheckAcc += tickCheck
            }
            if (stepRate => 1) {
                tickCheck = (S - nTickCheck) / 48
            }
            if (stepRate < 1) {
                tickCheck = (S - nTickCheck) / 48
            }
            tickCheckAccT = tickCheck + tickCheckAcc
        }
        // if (commaIndexT[a] == 1) {
        //     if (keyT2nd == 0) {
        //         keyT1st = 1;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 2) {
        //     if (keyT2nd == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 1;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 3) {
        //     if (keyT3rd == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 1;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 4) {
        //     if (keyT4th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 1;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 6) {
        //     if (keyT6th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 1;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 8) {
        //     if (keyT8th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 1;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 12) {
        //     if (keyT12th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 1;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 16) {
        //     if (keyT24th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 1;
        //         keyT24th = 0;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 24) {
        //     if (keyT24th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 1;
        //         keyT48th = 0;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // if (commaIndexT[a] == 48) {
        //     if (keyT48th == 0) {
        //         keyT1st = 0;
        //         keyT2nd = 0;
        //         keyT3rd = 0;
        //         keyT4th = 0;
        //         keyT6th = 0;
        //         keyT8th = 0;
        //         keyT12th = 0;
        //         keyT16th = 0;
        //         keyT24th = 0;
        //         keyT48th = 1;
        //         nTickCheck = S;
        //         tickCheckAcc += tickCheck
        //     }
        //     tickCheck = (S - nTickCheck) / 48
        //     tickCheckAccT = tickCheck + tickCheckAcc
        // }
        // console.log("tick check", tickCheck)
        if (S >= bpmTick[0]) {
            if (keyNewTick == 0) {
                keyNewTick = 1
                newTickCheck = 0
                stepRate = bpmRate[0] / 60
                stepRateN = 0;
                keyStepRate1 = 0;
                na++
            }
        }
        if (tickCheckAccT >= bpmTick[na]) {
            keyNewTick = 0;
            if (keyNewTick == 0) {
                keyNewTick = 1
                newTickCheck = na
                stepRate = bpmRate[na] / 60
                stepRateN = na;
                keyStepRate1 = 0;
                na++;
            }
        }
        differenceRound = Math.round(difference)
        if (chartNumber == 1) {
            while (S > a && S <= fullArray.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexT[a] * stepRate
                timeCounter = difference * commaIndexT[a]// - newDifference
                if (commaIndexT[a] != commaIndexT[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= fullArray.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }
        if (chartNumber == 2) {
            while (S > a && S <= secondChart.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexTS[a] * stepRate
                timeCounter = difference * commaIndexTS[a]// - newDifference
                if (commaIndexTS[a] != commaIndexTS[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= secondChart.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }
        if (chartNumber == 3) {
            while (S > a && S <= chart3.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexT3[a] * stepRate
                timeCounter = difference * commaIndexT3[a]// - newDifference
                if (commaIndexT3[a] != commaIndexT3[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= chart3.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }
        if (chartNumber == 4) {
            while (S > a && S <= chart4.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexT4[a] * stepRate
                timeCounter = difference * commaIndexT4[a]// - newDifference
                if (commaIndexT4[a] != commaIndexT4[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= chart4.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }
        if (chartNumber == 5) {
            while (S > a && S <= chart5.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexT5[a] * stepRate
                timeCounter = difference * commaIndexT5[a]// - newDifference
                if (commaIndexT5[a] != commaIndexT5[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= chart5.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }
        if (chartNumber == 6) {
            while (S > a && S <= chart6.length) {
                differenceRate = difference //* commaIndexT[c] - newDifference
                bps = commaIndexT6[a] * stepRate
                timeCounter = difference * commaIndexT6[a]// - newDifference
                if (commaIndexT6[a] != commaIndexT6[c]) {
                    difference2 = newDifference - newDifferenceM
                }
                if (a <= chart6.length)
                    a += 1;
                e += 1;
                c += 1;
            }
        }

    }
    // console.log(second, bpmRate[0], "second, bpmRate0")
    // console.log(second, " second ")
    // console.log(difference, "differnce")
    // if (differenceRate % 1 == 0) {
    // if (fullArray[S] == "1000") {
    //     document.getElementById("div2").style.border = "none";
    //     // d1.remove()
    //     document.body.appendChild(d1);
    //     console.log("yes")
    // }
    // }
    var newRate = difference;
    // console.log(differenceRound)
    while (chartNumber == 1 && differenceRound > combo && S <= fullArray.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (fullArray[S] != "0000") {
                debugArray.unshift(fullArray[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 1) {
            if (fullArray[S] == "0001") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0002") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0010") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0013") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0020") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0023") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0031") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0032") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0100") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0103") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0130") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0133") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0200") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0203") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "0230") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0233") {
                movementAccB += 1;
            }
            if (fullArray[S] == "0301") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0302") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0310") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0313") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0320") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "0323") {
                movementAccC += 1;
            }
            if (fullArray[S] == "0331") {
                movementAccD += 1;
            }
            if (fullArray[S] == "0332") {
                movementAccD += 1;
            }
            if (fullArray[S] == "1000") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1003") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1030") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1033") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "1300") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1303") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "1330") {
                movementAccA += 1;
            }
            if (fullArray[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "1333") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2000") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2003") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2030") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2033") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (fullArray[S] == "2300") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2303") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "2330") {
                movementAccA += 1;
            }
            if (fullArray[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "2333") {
                movementAccA += 1;
            }
            if (fullArray[S] == "3001") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3002") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3010") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3013") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3020") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3023") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3031") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3032") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3100") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3103") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3130") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3133") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3200") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3203") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (fullArray[S] == "3230") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3233") {
                movementAccB += 1;
            }
            if (fullArray[S] == "3301") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3302") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3310") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3313") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3320") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (fullArray[S] == "3323") {
                movementAccC += 1;
            }
            if (fullArray[S] == "3331") {
                movementAccD += 1;
            }
            if (fullArray[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }

    while (chartNumber == 2 && differenceRound > combo && S <= secondChart.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (secondChart[S] != "0000") {
                debugArray.unshift(secondChart[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 2) {
            if (secondChart[S] == "0001") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0002") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0010") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0013") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0020") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0023") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0031") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0032") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0100") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0103") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0130") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0133") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0200") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0203") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "0230") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0233") {
                movementAccB += 1;
            }
            if (secondChart[S] == "0301") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0302") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0310") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0313") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0320") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "0323") {
                movementAccC += 1;
            }
            if (secondChart[S] == "0331") {
                movementAccD += 1;
            }
            if (secondChart[S] == "0332") {
                movementAccD += 1;
            }
            if (secondChart[S] == "1000") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1003") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1030") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1033") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "1300") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1303") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "1330") {
                movementAccA += 1;
            }
            if (secondChart[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "1333") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2000") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2003") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2030") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2033") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (secondChart[S] == "2300") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2303") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "2330") {
                movementAccA += 1;
            }
            if (secondChart[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "2333") {
                movementAccA += 1;
            }
            if (secondChart[S] == "3001") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3002") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3010") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3013") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3020") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3023") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3031") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3032") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3100") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3103") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3130") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3133") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3200") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3203") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (secondChart[S] == "3230") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3233") {
                movementAccB += 1;
            }
            if (secondChart[S] == "3301") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3302") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3310") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3313") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3320") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (secondChart[S] == "3323") {
                movementAccC += 1;
            }
            if (secondChart[S] == "3331") {
                movementAccD += 1;
            }
            if (secondChart[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }
    while (chartNumber == 3 && differenceRound > combo && S <= chart3.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (chart3[S] != "0000") {
                debugArray.unshift(chart3[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 3) {
            if (chart3[S] == "0001") {
                movementAccD += 1;
            }
            if (chart3[S] == "0002") {
                movementAccD += 1;
            }
            if (chart3[S] == "0010") {
                movementAccC += 1;
            }
            if (chart3[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0013") {
                movementAccC += 1;
            }
            if (chart3[S] == "0020") {
                movementAccC += 1;
            }
            if (chart3[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0023") {
                movementAccC += 1;
            }
            if (chart3[S] == "0031") {
                movementAccD += 1;
            }
            if (chart3[S] == "0032") {
                movementAccD += 1;
            }
            if (chart3[S] == "0100") {
                movementAccB += 1;
            }
            if (chart3[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0103") {
                movementAccB += 1;
            }
            if (chart3[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0130") {
                movementAccB += 1;
            }
            if (chart3[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0133") {
                movementAccB += 1;
            }
            if (chart3[S] == "0200") {
                movementAccB += 1;
            }
            if (chart3[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0203") {
                movementAccB += 1;
            }
            if (chart3[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "0230") {
                movementAccB += 1;
            }
            if (chart3[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0233") {
                movementAccB += 1;
            }
            if (chart3[S] == "0301") {
                movementAccD += 1;
            }
            if (chart3[S] == "0302") {
                movementAccD += 1;
            }
            if (chart3[S] == "0310") {
                movementAccC += 1;
            }
            if (chart3[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0313") {
                movementAccC += 1;
            }
            if (chart3[S] == "0320") {
                movementAccC += 1;
            }
            if (chart3[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "0323") {
                movementAccC += 1;
            }
            if (chart3[S] == "0331") {
                movementAccD += 1;
            }
            if (chart3[S] == "0332") {
                movementAccD += 1;
            }
            if (chart3[S] == "1000") {
                movementAccA += 1;
            }
            if (chart3[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1003") {
                movementAccA += 1;
            }
            if (chart3[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1030") {
                movementAccA += 1;
            }
            if (chart3[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1033") {
                movementAccA += 1;
            }
            if (chart3[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "1300") {
                movementAccA += 1;
            }
            if (chart3[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1303") {
                movementAccA += 1;
            }
            if (chart3[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "1330") {
                movementAccA += 1;
            }
            if (chart3[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "1333") {
                movementAccA += 1;
            }
            if (chart3[S] == "2000") {
                movementAccA += 1;
            }
            if (chart3[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2003") {
                movementAccA += 1;
            }
            if (chart3[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2030") {
                movementAccA += 1;
            }
            if (chart3[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2033") {
                movementAccA += 1;
            }
            if (chart3[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart3[S] == "2300") {
                movementAccA += 1;
            }
            if (chart3[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2303") {
                movementAccA += 1;
            }
            if (chart3[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "2330") {
                movementAccA += 1;
            }
            if (chart3[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "2333") {
                movementAccA += 1;
            }
            if (chart3[S] == "3001") {
                movementAccD += 1;
            }
            if (chart3[S] == "3002") {
                movementAccD += 1;
            }
            if (chart3[S] == "3010") {
                movementAccC += 1;
            }
            if (chart3[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3013") {
                movementAccC += 1;
            }
            if (chart3[S] == "3020") {
                movementAccC += 1;
            }
            if (chart3[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3023") {
                movementAccC += 1;
            }
            if (chart3[S] == "3031") {
                movementAccD += 1;
            }
            if (chart3[S] == "3032") {
                movementAccD += 1;
            }
            if (chart3[S] == "3100") {
                movementAccB += 1;
            }
            if (chart3[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3103") {
                movementAccB += 1;
            }
            if (chart3[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3130") {
                movementAccB += 1;
            }
            if (chart3[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3133") {
                movementAccB += 1;
            }
            if (chart3[S] == "3200") {
                movementAccB += 1;
            }
            if (chart3[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3203") {
                movementAccB += 1;
            }
            if (chart3[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart3[S] == "3230") {
                movementAccB += 1;
            }
            if (chart3[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3233") {
                movementAccB += 1;
            }
            if (chart3[S] == "3301") {
                movementAccD += 1;
            }
            if (chart3[S] == "3302") {
                movementAccD += 1;
            }
            if (chart3[S] == "3310") {
                movementAccC += 1;
            }
            if (chart3[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3313") {
                movementAccC += 1;
            }
            if (chart3[S] == "3320") {
                movementAccC += 1;
            }
            if (chart3[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart3[S] == "3323") {
                movementAccC += 1;
            }
            if (chart3[S] == "3331") {
                movementAccD += 1;
            }
            if (chart3[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }
    while (chartNumber == 4 && differenceRound > combo && S <= chart4.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (chart4[S] != "0000") {
                debugArray.unshift(chart4[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 4) {
            if (chart4[S] == "0001") {
                movementAccD += 1;
            }
            if (chart4[S] == "0002") {
                movementAccD += 1;
            }
            if (chart4[S] == "0010") {
                movementAccC += 1;
            }
            if (chart4[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0013") {
                movementAccC += 1;
            }
            if (chart4[S] == "0020") {
                movementAccC += 1;
            }
            if (chart4[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0023") {
                movementAccC += 1;
            }
            if (chart4[S] == "0031") {
                movementAccD += 1;
            }
            if (chart4[S] == "0032") {
                movementAccD += 1;
            }
            if (chart4[S] == "0100") {
                movementAccB += 1;
            }
            if (chart4[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0103") {
                movementAccB += 1;
            }
            if (chart4[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0130") {
                movementAccB += 1;
            }
            if (chart4[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0133") {
                movementAccB += 1;
            }
            if (chart4[S] == "0200") {
                movementAccB += 1;
            }
            if (chart4[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0203") {
                movementAccB += 1;
            }
            if (chart4[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "0230") {
                movementAccB += 1;
            }
            if (chart4[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0233") {
                movementAccB += 1;
            }
            if (chart4[S] == "0301") {
                movementAccD += 1;
            }
            if (chart4[S] == "0302") {
                movementAccD += 1;
            }
            if (chart4[S] == "0310") {
                movementAccC += 1;
            }
            if (chart4[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0313") {
                movementAccC += 1;
            }
            if (chart4[S] == "0320") {
                movementAccC += 1;
            }
            if (chart4[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "0323") {
                movementAccC += 1;
            }
            if (chart4[S] == "0331") {
                movementAccD += 1;
            }
            if (chart4[S] == "0332") {
                movementAccD += 1;
            }
            if (chart4[S] == "1000") {
                movementAccA += 1;
            }
            if (chart4[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1003") {
                movementAccA += 1;
            }
            if (chart4[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1030") {
                movementAccA += 1;
            }
            if (chart4[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1033") {
                movementAccA += 1;
            }
            if (chart4[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "1300") {
                movementAccA += 1;
            }
            if (chart4[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1303") {
                movementAccA += 1;
            }
            if (chart4[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "1330") {
                movementAccA += 1;
            }
            if (chart4[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "1333") {
                movementAccA += 1;
            }
            if (chart4[S] == "2000") {
                movementAccA += 1;
            }
            if (chart4[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2003") {
                movementAccA += 1;
            }
            if (chart4[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2030") {
                movementAccA += 1;
            }
            if (chart4[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2033") {
                movementAccA += 1;
            }
            if (chart4[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart4[S] == "2300") {
                movementAccA += 1;
            }
            if (chart4[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2303") {
                movementAccA += 1;
            }
            if (chart4[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "2330") {
                movementAccA += 1;
            }
            if (chart4[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "2333") {
                movementAccA += 1;
            }
            if (chart4[S] == "3001") {
                movementAccD += 1;
            }
            if (chart4[S] == "3002") {
                movementAccD += 1;
            }
            if (chart4[S] == "3010") {
                movementAccC += 1;
            }
            if (chart4[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3013") {
                movementAccC += 1;
            }
            if (chart4[S] == "3020") {
                movementAccC += 1;
            }
            if (chart4[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3023") {
                movementAccC += 1;
            }
            if (chart4[S] == "3031") {
                movementAccD += 1;
            }
            if (chart4[S] == "3032") {
                movementAccD += 1;
            }
            if (chart4[S] == "3100") {
                movementAccB += 1;
            }
            if (chart4[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3103") {
                movementAccB += 1;
            }
            if (chart4[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3130") {
                movementAccB += 1;
            }
            if (chart4[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3133") {
                movementAccB += 1;
            }
            if (chart4[S] == "3200") {
                movementAccB += 1;
            }
            if (chart4[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3203") {
                movementAccB += 1;
            }
            if (chart4[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart4[S] == "3230") {
                movementAccB += 1;
            }
            if (chart4[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3233") {
                movementAccB += 1;
            }
            if (chart4[S] == "3301") {
                movementAccD += 1;
            }
            if (chart4[S] == "3302") {
                movementAccD += 1;
            }
            if (chart4[S] == "3310") {
                movementAccC += 1;
            }
            if (chart4[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3313") {
                movementAccC += 1;
            }
            if (chart4[S] == "3320") {
                movementAccC += 1;
            }
            if (chart4[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart4[S] == "3323") {
                movementAccC += 1;
            }
            if (chart4[S] == "3331") {
                movementAccD += 1;
            }
            if (chart4[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }
    while (chartNumber == 5 && differenceRound > combo && S <= chart5.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (chart5[S] != "0000") {
                debugArray.unshift(chart5[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 5) {
            if (chart5[S] == "0001") {
                movementAccD += 1;
            }
            if (chart5[S] == "0002") {
                movementAccD += 1;
            }
            if (chart5[S] == "0010") {
                movementAccC += 1;
            }
            if (chart5[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0013") {
                movementAccC += 1;
            }
            if (chart5[S] == "0020") {
                movementAccC += 1;
            }
            if (chart5[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0023") {
                movementAccC += 1;
            }
            if (chart5[S] == "0031") {
                movementAccD += 1;
            }
            if (chart5[S] == "0032") {
                movementAccD += 1;
            }
            if (chart5[S] == "0100") {
                movementAccB += 1;
            }
            if (chart5[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0103") {
                movementAccB += 1;
            }
            if (chart5[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0130") {
                movementAccB += 1;
            }
            if (chart5[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0133") {
                movementAccB += 1;
            }
            if (chart5[S] == "0200") {
                movementAccB += 1;
            }
            if (chart5[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0203") {
                movementAccB += 1;
            }
            if (chart5[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "0230") {
                movementAccB += 1;
            }
            if (chart5[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0233") {
                movementAccB += 1;
            }
            if (chart5[S] == "0301") {
                movementAccD += 1;
            }
            if (chart5[S] == "0302") {
                movementAccD += 1;
            }
            if (chart5[S] == "0310") {
                movementAccC += 1;
            }
            if (chart5[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0313") {
                movementAccC += 1;
            }
            if (chart5[S] == "0320") {
                movementAccC += 1;
            }
            if (chart5[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "0323") {
                movementAccC += 1;
            }
            if (chart5[S] == "0331") {
                movementAccD += 1;
            }
            if (chart5[S] == "0332") {
                movementAccD += 1;
            }
            if (chart5[S] == "1000") {
                movementAccA += 1;
            }
            if (chart5[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1003") {
                movementAccA += 1;
            }
            if (chart5[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1030") {
                movementAccA += 1;
            }
            if (chart5[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1033") {
                movementAccA += 1;
            }
            if (chart5[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "1300") {
                movementAccA += 1;
            }
            if (chart5[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1303") {
                movementAccA += 1;
            }
            if (chart5[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "1330") {
                movementAccA += 1;
            }
            if (chart5[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "1333") {
                movementAccA += 1;
            }
            if (chart5[S] == "2000") {
                movementAccA += 1;
            }
            if (chart5[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2003") {
                movementAccA += 1;
            }
            if (chart5[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2030") {
                movementAccA += 1;
            }
            if (chart5[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2033") {
                movementAccA += 1;
            }
            if (chart5[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart5[S] == "2300") {
                movementAccA += 1;
            }
            if (chart5[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2303") {
                movementAccA += 1;
            }
            if (chart5[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "2330") {
                movementAccA += 1;
            }
            if (chart5[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "2333") {
                movementAccA += 1;
            }
            if (chart5[S] == "3001") {
                movementAccD += 1;
            }
            if (chart5[S] == "3002") {
                movementAccD += 1;
            }
            if (chart5[S] == "3010") {
                movementAccC += 1;
            }
            if (chart5[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3013") {
                movementAccC += 1;
            }
            if (chart5[S] == "3020") {
                movementAccC += 1;
            }
            if (chart5[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3023") {
                movementAccC += 1;
            }
            if (chart5[S] == "3031") {
                movementAccD += 1;
            }
            if (chart5[S] == "3032") {
                movementAccD += 1;
            }
            if (chart5[S] == "3100") {
                movementAccB += 1;
            }
            if (chart5[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3103") {
                movementAccB += 1;
            }
            if (chart5[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3130") {
                movementAccB += 1;
            }
            if (chart5[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3133") {
                movementAccB += 1;
            }
            if (chart5[S] == "3200") {
                movementAccB += 1;
            }
            if (chart5[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3203") {
                movementAccB += 1;
            }
            if (chart5[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart5[S] == "3230") {
                movementAccB += 1;
            }
            if (chart5[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3233") {
                movementAccB += 1;
            }
            if (chart5[S] == "3301") {
                movementAccD += 1;
            }
            if (chart5[S] == "3302") {
                movementAccD += 1;
            }
            if (chart5[S] == "3310") {
                movementAccC += 1;
            }
            if (chart5[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3313") {
                movementAccC += 1;
            }
            if (chart5[S] == "3320") {
                movementAccC += 1;
            }
            if (chart5[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart5[S] == "3323") {
                movementAccC += 1;
            }
            if (chart5[S] == "3331") {
                movementAccD += 1;
            }
            if (chart5[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }
    while (chartNumber == 6 && differenceRound > combo && S <= chart6.length) {
        S++;
        combo++
        if (S > stepN) {
            stepN = S;
            this.document.getElementById("step0").innerHTML = debugArray[0];
            this.document.getElementById("step1").innerHTML = debugArray[1];
            this.document.getElementById("step2").innerHTML = debugArray[2];
            this.document.getElementById("step3").innerHTML = debugArray[3];
            this.document.getElementById("step4").innerHTML = debugArray[4];
            this.document.getElementById("step5").innerHTML = debugArray[5];
            this.document.getElementById("step6").innerHTML = debugArray[6];
            this.document.getElementById("step7").innerHTML = debugArray[7];
            this.document.getElementById("step8").innerHTML = debugArray[8];
            this.document.getElementById("step9").innerHTML = debugArray[9];
            this.document.getElementById("step10").innerHTML = debugArray[10];
            this.document.getElementById("step11").innerHTML = debugArray[11];
            this.document.getElementById("step12").innerHTML = debugArray[12];
            this.document.getElementById("step13").innerHTML = debugArray[13];
            this.document.getElementById("step14").innerHTML = debugArray[14];
            this.document.getElementById("step15").innerHTML = debugArray[15];
            this.document.getElementById("step16").innerHTML = debugArray[16];
            this.document.getElementById("step17").innerHTML = debugArray[17];
            this.document.getElementById("step18").innerHTML = debugArray[18];
            this.document.getElementById("step19").innerHTML = debugArray[19];
            this.document.getElementById("step20").innerHTML = debugArray[20];
            this.document.getElementById("step21").innerHTML = debugArray[21];
            this.document.getElementById("step22").innerHTML = debugArray[22];
            this.document.getElementById("step23").innerHTML = debugArray[23];
            this.document.getElementById("step24").innerHTML = debugArray[24];
            if (chart6[S] != "0000") {
                debugArray.unshift(chart6[S])
            }
        }
        // fullArray2.shift()
        // commaIndexT2.shift()
        // document.getElementById("fullArray2").innerHTML = "Step " + fullArray2
        // document.getElementById("indexCommaT2").innerHTML = "Rate " + commaIndexT2
        // if (fullArray[S] == "0000") {
        //     setTimeout(function () {
        //     }, 2)
        //     setTimeout(function () {
        //     }, 4)
        // }
        if (chartNumber == 6) {
            if (chart6[S] == "0001") {
                movementAccD += 1;
            }
            if (chart6[S] == "0002") {
                movementAccD += 1;
            }
            if (chart6[S] == "0010") {
                movementAccC += 1;
            }
            if (chart6[S] == "0011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0013") {
                movementAccC += 1;
            }
            if (chart6[S] == "0020") {
                movementAccC += 1;
            }
            if (chart6[S] == "0021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0023") {
                movementAccC += 1;
            }
            if (chart6[S] == "0031") {
                movementAccD += 1;
            }
            if (chart6[S] == "0032") {
                movementAccD += 1;
            }
            if (chart6[S] == "0100") {
                movementAccB += 1;
            }
            if (chart6[S] == "0101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0103") {
                movementAccB += 1;
            }
            if (chart6[S] == "0110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0130") {
                movementAccB += 1;
            }
            if (chart6[S] == "0131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0133") {
                movementAccB += 1;
            }
            if (chart6[S] == "0200") {
                movementAccB += 1;
            }
            if (chart6[S] == "0201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0203") {
                movementAccB += 1;
            }
            if (chart6[S] == "0210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "0230") {
                movementAccB += 1;
            }
            if (chart6[S] == "0231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0233") {
                movementAccB += 1;
            }
            if (chart6[S] == "0301") {
                movementAccD += 1;
            }
            if (chart6[S] == "0302") {
                movementAccD += 1;
            }
            if (chart6[S] == "0310") {
                movementAccC += 1;
            }
            if (chart6[S] == "0311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0313") {
                movementAccC += 1;
            }
            if (chart6[S] == "0320") {
                movementAccC += 1;
            }
            if (chart6[S] == "0321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "0323") {
                movementAccC += 1;
            }
            if (chart6[S] == "0331") {
                movementAccD += 1;
            }
            if (chart6[S] == "0332") {
                movementAccD += 1;
            }
            if (chart6[S] == "1000") {
                movementAccA += 1;
            }
            if (chart6[S] == "1001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1003") {
                movementAccA += 1;
            }
            if (chart6[S] == "1010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1030") {
                movementAccA += 1;
            }
            if (chart6[S] == "1031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1033") {
                movementAccA += 1;
            }
            if (chart6[S] == "1100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "1300") {
                movementAccA += 1;
            }
            if (chart6[S] == "1301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1303") {
                movementAccA += 1;
            }
            if (chart6[S] == "1310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "1330") {
                movementAccA += 1;
            }
            if (chart6[S] == "1331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "1333") {
                movementAccA += 1;
            }
            if (chart6[S] == "2000") {
                movementAccA += 1;
            }
            if (chart6[S] == "2001") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2002") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2003") {
                movementAccA += 1;
            }
            if (chart6[S] == "2010") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2011") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2012") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2013") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2020") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2021") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2022") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2023") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2030") {
                movementAccA += 1;
            }
            if (chart6[S] == "2031") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2032") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2033") {
                movementAccA += 1;
            }
            if (chart6[S] == "2100") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2101") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2102") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2103") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2110") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2111") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2112") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2113") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2120") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2121") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2122") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2123") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2130") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2131") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2132") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2133") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2200") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2201") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2202") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2203") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2210") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2211") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2212") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2213") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2220") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2221") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2222") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2223") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2230") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2231") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2232") {
                movementAccA += 1;
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2233") {
                movementAccA += 1;
                movementAccB += 1;
            }
            if (chart6[S] == "2300") {
                movementAccA += 1;
            }
            if (chart6[S] == "2301") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2302") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2303") {
                movementAccA += 1;
            }
            if (chart6[S] == "2310") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2311") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2312") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2313") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2320") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2321") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2322") {
                movementAccA += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2323") {
                movementAccA += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "2330") {
                movementAccA += 1;
            }
            if (chart6[S] == "2331") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2332") {
                movementAccA += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "2333") {
                movementAccA += 1;
            }
            if (chart6[S] == "3001") {
                movementAccD += 1;
            }
            if (chart6[S] == "3002") {
                movementAccD += 1;
            }
            if (chart6[S] == "3010") {
                movementAccC += 1;
            }
            if (chart6[S] == "3011") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3012") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3013") {
                movementAccC += 1;
            }
            if (chart6[S] == "3020") {
                movementAccC += 1;
            }
            if (chart6[S] == "3021") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3022") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3023") {
                movementAccC += 1;
            }
            if (chart6[S] == "3031") {
                movementAccD += 1;
            }
            if (chart6[S] == "3032") {
                movementAccD += 1;
            }
            if (chart6[S] == "3100") {
                movementAccB += 1;
            }
            if (chart6[S] == "3101") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3102") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3103") {
                movementAccB += 1;
            }
            if (chart6[S] == "3110") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3111") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3112") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3113") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3120") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3121") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3122") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3123") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3130") {
                movementAccB += 1;
            }
            if (chart6[S] == "3131") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3132") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3133") {
                movementAccB += 1;
            }
            if (chart6[S] == "3200") {
                movementAccB += 1;
            }
            if (chart6[S] == "3201") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3202") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3203") {
                movementAccB += 1;
            }
            if (chart6[S] == "3210") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3211") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3212") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3213") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3220") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3221") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3222") {
                movementAccB += 1;
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3223") {
                movementAccB += 1;
                movementAccC += 1;
            }
            if (chart6[S] == "3230") {
                movementAccB += 1;
            }
            if (chart6[S] == "3231") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3232") {
                movementAccB += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3233") {
                movementAccB += 1;
            }
            if (chart6[S] == "3301") {
                movementAccD += 1;
            }
            if (chart6[S] == "3302") {
                movementAccD += 1;
            }
            if (chart6[S] == "3310") {
                movementAccC += 1;
            }
            if (chart6[S] == "3311") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3312") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3313") {
                movementAccC += 1;
            }
            if (chart6[S] == "3320") {
                movementAccC += 1;
            }
            if (chart6[S] == "3321") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3322") {
                movementAccC += 1;
                movementAccD += 1;
            }
            if (chart6[S] == "3323") {
                movementAccC += 1;
            }
            if (chart6[S] == "3331") {
                movementAccD += 1;
            }
            if (chart6[S] == "3332") {
                movementAccD += 1;
            }

            // document.getElementById("+6tick").innerHTML = " Tick " + a + " S " + S
        }
    }
    while (an <= commaIndexT.length) {
        if (commaIndexT[commaIndexT.length - an] == 1) {
            Array.from({ length: 47 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 2) {
            Array.from({ length: 23 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 3) {
            Array.from({ length: 15 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 4) {
            Array.from({ length: 11 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 6) {
            Array.from({ length: 7 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 8) {
            Array.from({ length: 5 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 12) {
            Array.from({ length: 3 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 16) {
            Array.from({ length: 2 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        if (commaIndexT[commaIndexT.length - an] == 24) {
            Array.from({ length: 1 }, (x, i) => fullArray.splice(commaIndexT.length - an + 1, 0, "0000"))
        }
        an++
    }

    while (sg <= commaIndexTS.length) {
        if (commaIndexTS[commaIndexTS.length - sg] == 1) {
            Array.from({ length: 47 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 2) {
            Array.from({ length: 23 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 3) {
            Array.from({ length: 15 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 4) {
            Array.from({ length: 11 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 6) {
            Array.from({ length: 7 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 8) {
            Array.from({ length: 5 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 12) {
            Array.from({ length: 3 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 16) {
            Array.from({ length: 2 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        if (commaIndexTS[commaIndexTS.length - sg] == 24) {
            Array.from({ length: 1 }, (x, i) => secondChart.splice(commaIndexTS.length - sg + 1, 0, "0000"))
        }
        sg++
    }
    while (sg3 <= commaIndexT3.length) {
        if (commaIndexT3[commaIndexT3.length - sg3] == 1) {
            Array.from({ length: 47 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 2) {
            Array.from({ length: 23 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 3) {
            Array.from({ length: 15 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 4) {
            Array.from({ length: 11 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 6) {
            Array.from({ length: 7 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 8) {
            Array.from({ length: 5 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 12) {
            Array.from({ length: 3 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 16) {
            Array.from({ length: 2 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        if (commaIndexT3[commaIndexT3.length - sg3] == 24) {
            Array.from({ length: 1 }, (x, i) => chart3.splice(commaIndexT3.length - sg3 + 1, 0, "0000"))
        }
        sg3++
    }
    while (sg4 <= commaIndexT4.length) {
        if (commaIndexT4[commaIndexT4.length - sg4] == 1) {
            Array.from({ length: 47 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 2) {
            Array.from({ length: 23 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 3) {
            Array.from({ length: 15 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 4) {
            Array.from({ length: 11 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 6) {
            Array.from({ length: 7 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 8) {
            Array.from({ length: 5 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 12) {
            Array.from({ length: 3 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 16) {
            Array.from({ length: 2 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        if (commaIndexT4[commaIndexT4.length - sg4] == 24) {
            Array.from({ length: 1 }, (x, i) => chart4.splice(commaIndexT4.length - sg4 + 1, 0, "0000"))
        }
        sg4++
    }
    while (sg5 <= commaIndexT5.length) {
        if (commaIndexT5[commaIndexT5.length - sg5] == 1) {
            Array.from({ length: 47 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 2) {
            Array.from({ length: 23 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 3) {
            Array.from({ length: 15 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 4) {
            Array.from({ length: 11 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 6) {
            Array.from({ length: 7 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 8) {
            Array.from({ length: 5 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 12) {
            Array.from({ length: 3 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 16) {
            Array.from({ length: 2 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        if (commaIndexT5[commaIndexT5.length - sg5] == 24) {
            Array.from({ length: 1 }, (x, i) => chart5.splice(commaIndexT5.length - sg5 + 1, 0, "0000"))
        }
        sg5++
    }
    while (sg6 <= commaIndexT6.length) {
        if (commaIndexT6[commaIndexT6.length - sg6] == 1) {
            Array.from({ length: 47 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 2) {
            Array.from({ length: 23 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 3) {
            Array.from({ length: 15 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 4) {
            Array.from({ length: 11 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 6) {
            Array.from({ length: 7 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 8) {
            Array.from({ length: 5 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 12) {
            Array.from({ length: 3 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 16) {
            Array.from({ length: 2 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        if (commaIndexT6[commaIndexT6.length - sg6] == 24) {
            Array.from({ length: 1 }, (x, i) => chart6.splice(commaIndexT6.length - sg6 + 1, 0, "0000"))
        }
        sg6++
    }
    // console.log(fullArray)
    if (downscroll == 0) {
        if (movementAccD > 26) {
            movementAccD = 1;
            keyMovementD1 = 0;
            keyMovementD2 = 0;
            keyMovementD3 = 0;
            keyMovementD4 = 0;
            keyMovementD5 = 0;
            keyMovementD6 = 0;
            keyMovementD7 = 0;
            keyMovementD8 = 0;
            keyMovementD9 = 0;
            keyMovementD10 = 0;
            keyMovementD11 = 0;
            keyMovementD12 = 0;
            keyMovementD13 = 0;
            keyMovementD14 = 0;
            keyMovementD15 = 0;
            keyMovementD16 = 0;
            keyMovementD17 = 0;
            keyMovementD18 = 0;
            keyMovementD19 = 0;
            keyMovementD20 = 0;
            keyMovementD21 = 0;
            keyMovementD22 = 0;
            keyMovementD23 = 0;
            keyMovementD24 = 0;
            keyMovementD25 = 0;
            keyMovementD26 = 0;
        }
        if (movementAccB > 26) {
            movementAccB = 1;
            keyMovementB1 = 0;
            keyMovementB2 = 0;
            keyMovementB3 = 0;
            keyMovementB4 = 0;
            keyMovementB5 = 0;
            keyMovementB6 = 0;
            keyMovementB7 = 0;
            keyMovementB8 = 0;
            keyMovementB9 = 0;
            keyMovementB10 = 0;
            keyMovementB11 = 0;
            keyMovementB12 = 0;
            keyMovementB13 = 0;
            keyMovementB14 = 0;
            keyMovementB15 = 0;
            keyMovementB16 = 0;
            keyMovementB17 = 0;
            keyMovementB18 = 0;
            keyMovementB19 = 0;
            keyMovementB20 = 0;
            keyMovementB21 = 0;
            keyMovementB22 = 0;
            keyMovementB23 = 0;
            keyMovementB24 = 0;
            keyMovementB25 = 0;
            keyMovementB26 = 0;
        }
        if (movementAccC > 26) {
            movementAccC = 1;
            keyMovementC1 = 0;
            keyMovementC2 = 0;
            keyMovementC3 = 0;
            keyMovementC4 = 0;
            keyMovementC5 = 0;
            keyMovementC6 = 0;
            keyMovementC7 = 0;
            keyMovementC8 = 0;
            keyMovementC9 = 0;
            keyMovementC10 = 0;
            keyMovementC11 = 0;
            keyMovementC12 = 0;
            keyMovementC13 = 0;
            keyMovementC14 = 0;
            keyMovementC15 = 0;
            keyMovementC16 = 0;
            keyMovementC17 = 0;
            keyMovementC18 = 0;
            keyMovementC19 = 0;
            keyMovementC20 = 0;
            keyMovementC21 = 0;
            keyMovementC22 = 0;
            keyMovementC23 = 0;
            keyMovementC24 = 0;
            keyMovementC25 = 0;
            keyMovementC26 = 0;
        }
        if (movementAccA > 26) {
            movementAccA = 1;
            keyMovementA1 = 0;
            keyMovementA2 = 0;
            keyMovementA3 = 0;
            keyMovementA4 = 0;
            keyMovementA5 = 0;
            keyMovementA6 = 0;
            keyMovementA7 = 0;
            keyMovementA8 = 0;
            keyMovementA9 = 0;
            keyMovementA10 = 0;
            keyMovementA11 = 0;
            keyMovementA12 = 0;
            keyMovementA13 = 0;
            keyMovementA14 = 0;
            keyMovementA15 = 0;
            keyMovementA16 = 0;
            keyMovementA17 = 0;
            keyMovementA18 = 0;
            keyMovementA19 = 0;
            keyMovementA20 = 0;
            keyMovementA21 = 0;
            keyMovementA22 = 0;
            keyMovementA23 = 0;
            keyMovementA24 = 0;
            keyMovementA25 = 0;
            keyMovementA26 = 0;
        }
        if (movementAccA > 0) {
            if (keyMovementA1 == 0) {
                movement1 = stepDropUp;
                keyMovementA1 = 1;
            }
        }
        if (movementAccB > 0) {
            if (keyMovementB1 == 0) {
                movement2 = stepDropUp;
                keyMovementB1 = 1;
            }
        }
        if (movementAccC > 0) {
            if (keyMovementC1 == 0) {
                movement3 = stepDropUp;
                keyMovementC1 = 1;
            }
        }
        if (movementAccD > 0) {
            if (keyMovementD1 == 0) {
                movement4 = stepDropUp;
                keyMovementD1 = 1;
            }
        }
        if (movementAccA > 1) {
            if (keyMovementA2 == 0) {
                movement1b = stepDropUp;
                keyMovementA2 = 1;
            }
        }
        if (movementAccB > 1) {
            if (keyMovementB2 == 0) {
                movement2b = stepDropUp;
                keyMovementB2 = 1;
            }
        }
        if (movementAccC > 1) {
            if (keyMovementC2 == 0) {
                movement3b = stepDropUp;
                keyMovementC2 = 1;
            }
        }
        if (movementAccD > 1) {
            if (keyMovementD2 == 0) {
                movement4b = stepDropUp;
                keyMovementD2 = 1;
            }
        }
        if (movementAccA > 2) {
            if (keyMovementA3 == 0) {
                movement1c = stepDropUp;
                keyMovementA3 = 1;
            }
        }
        if (movementAccB > 2) {
            if (keyMovementB3 == 0) {
                movement2c = stepDropUp;
                keyMovementB3 = 1;
            }
        }
        if (movementAccC > 2) {
            if (keyMovementC3 == 0) {
                movement3c = stepDropUp;
                keyMovementC3 = 1;
            }
        }
        if (movementAccD > 2) {
            if (keyMovementD3 == 0) {
                movement4c = stepDropUp;
                keyMovementD3 = 1;
            }
        }
        if (movementAccA > 3) {
            if (keyMovementA4 == 0) {
                movement1d = stepDropUp;
                keyMovementA4 = 1;
            }
        }
        if (movementAccB > 3) {
            if (keyMovementB4 == 0) {
                movement2d = stepDropUp;
                keyMovementB4 = 1;
            }
        }
        if (movementAccC > 3) {
            if (keyMovementC4 == 0) {
                movement3d = stepDropUp;
                keyMovementC4 = 1;
            }
        }
        if (movementAccD > 3) {
            if (keyMovementD4 == 0) {
                movement4d = stepDropUp;
                keyMovementD4 = 1;
            }
        }
        if (movementAccA > 4) {
            if (keyMovementA5 == 0) {
                movement1e = stepDropUp;
                keyMovementA5 = 1;
            }
        }
        if (movementAccB > 4) {
            if (keyMovementB5 == 0) {
                movement2e = stepDropUp;
                keyMovementB5 = 1;
            }
        }
        if (movementAccC > 4) {
            if (keyMovementC5 == 0) {
                movement3e = stepDropUp;
                keyMovementC5 = 1;
            }
        }
        if (movementAccD > 4) {
            if (keyMovementD5 == 0) {
                movement4e = stepDropUp;
                keyMovementD5 = 1;
            }
        }
        if (movementAccA > 5) {
            if (keyMovementA6 == 0) {
                movement1f = stepDropUp;
                keyMovementA6 = 1;
            }
        }
        if (movementAccB > 5) {
            if (keyMovementB6 == 0) {
                movement2f = stepDropUp;
                keyMovementB6 = 1;
            }
        }
        if (movementAccC > 5) {
            if (keyMovementC6 == 0) {
                movement3f = stepDropUp;
                keyMovementC6 = 1;
            }
        }
        if (movementAccD > 5) {
            if (keyMovementD6 == 0) {
                movement4f = stepDropUp;
                keyMovementD6 = 1;
            }
        }
        if (movementAccA > 6) {
            if (keyMovementA7 == 0) {
                movement1g = stepDropUp;
                keyMovementA7 = 1;
            }
        }
        if (movementAccB > 6) {
            if (keyMovementB7 == 0) {
                movement2g = stepDropUp;
                keyMovementB7 = 1;
            }
        }
        if (movementAccC > 6) {
            if (keyMovementC7 == 0) {
                movement3g = stepDropUp;
                keyMovementC7 = 1;
            }
        }
        if (movementAccD > 6) {
            if (keyMovementD7 == 0) {
                movement4g = stepDropUp;
                keyMovementD7 = 1;
            }
        }
        if (movementAccA > 7) {
            if (keyMovementA8 == 0) {
                movement1h = stepDropUp;
                keyMovementA8 = 1;
            }
        }
        if (movementAccB > 7) {
            if (keyMovementB8 == 0) {
                movement2h = stepDropUp;
                keyMovementB8 = 1;
            }
        }
        if (movementAccC > 7) {
            if (keyMovementC8 == 0) {
                movement3h = stepDropUp;
                keyMovementC8 = 1;
            }
        }
        if (movementAccD > 7) {
            if (keyMovementD8 == 0) {
                movement4h = stepDropUp;
                keyMovementD8 = 1;
            }
        }
        if (movementAccA > 8) {
            if (keyMovementA9 == 0) {
                movement1i = stepDropUp;
                keyMovementA9 = 1;
            }
        }
        if (movementAccB > 8) {
            if (keyMovementB9 == 0) {
                movement2i = stepDropUp;
                keyMovementB9 = 1;
            }
        }
        if (movementAccC > 8) {
            if (keyMovementC9 == 0) {
                movement3i = stepDropUp;
                keyMovementC9 = 1;
            }
        }
        if (movementAccD > 8) {
            if (keyMovementD9 == 0) {
                movement4i = stepDropUp;
                keyMovementD9 = 1;
            }
        }
        if (movementAccA > 9) {
            if (keyMovementA10 == 0) {
                movement1j = stepDropUp;
                keyMovementA10 = 1;
            }
        }
        if (movementAccB > 9) {
            if (keyMovementB10 == 0) {
                movement2j = stepDropUp;
                keyMovementB10 = 1;
            }
        }
        if (movementAccC > 9) {
            if (keyMovementC10 == 0) {
                movement3j = stepDropUp;
                keyMovementC10 = 1;
            }
        }
        if (movementAccD > 9) {
            if (keyMovementD10 == 0) {
                movement4j = stepDropUp;
                keyMovementD10 = 1;
            }
        }
        if (movementAccA > 10) {
            if (keyMovementA11 == 0) {
                movement1k = stepDropUp;
                keyMovementA11 = 1;
            }
        }
        if (movementAccB > 10) {
            if (keyMovementB11 == 0) {
                movement2k = stepDropUp;
                keyMovementB11 = 1;
            }
        }
        if (movementAccC > 10) {
            if (keyMovementC11 == 0) {
                movement3k = stepDropUp;
                keyMovementC11 = 1;
            }
        }
        if (movementAccD > 10) {
            if (keyMovementD11 == 0) {
                movement4k = stepDropUp;
                keyMovementD11 = 1;
            }
        }
        if (movementAccA > 11) {
            if (keyMovementA12 == 0) {
                movement1l = stepDropUp;
                keyMovementA12 = 1;
            }
        }
        if (movementAccB > 11) {
            if (keyMovementB12 == 0) {
                movement2l = stepDropUp;
                keyMovementB12 = 1;
            }
        }
        if (movementAccC > 11) {
            if (keyMovementC12 == 0) {
                movement3l = stepDropUp;
                keyMovementC12 = 1;
            }
        }
        if (movementAccD > 11) {
            if (keyMovementD12 == 0) {
                movement4l = stepDropUp;
                keyMovementD12 = 1;
            }
        }
        if (movementAccA > 12) {
            if (keyMovementA13 == 0) {
                movement1m = stepDropUp;
                keyMovementA13 = 1;
            }
        }
        if (movementAccB > 12) {
            if (keyMovementB13 == 0) {
                movement2m = stepDropUp;
                keyMovementB13 = 1;
            }
        }
        if (movementAccC > 12) {
            if (keyMovementC13 == 0) {
                movement3m = stepDropUp;
                keyMovementC13 = 1;
            }
        }
        if (movementAccD > 12) {
            if (keyMovementD13 == 0) {
                movement4m = stepDropUp;
                keyMovementD13 = 1;
            }
        }
        if (movementAccA > 13) {
            if (keyMovementA14 == 0) {
                movement1n = stepDropUp;
                keyMovementA14 = 1;
            }
        }
        if (movementAccB > 13) {
            if (keyMovementB14 == 0) {
                movement2n = stepDropUp;
                keyMovementB14 = 1;
            }
        }
        if (movementAccC > 13) {
            if (keyMovementC14 == 0) {
                movement3n = stepDropUp;
                keyMovementC14 = 1;
            }
        }
        if (movementAccD > 13) {
            if (keyMovementD14 == 0) {
                movement4n = stepDropUp;
                keyMovementD14 = 1;
            }
        }
        if (movementAccA > 14) {
            if (keyMovementA15 == 0) {
                movement1o = stepDropUp;
                keyMovementA15 = 1;
            }
        }
        if (movementAccB > 14) {
            if (keyMovementB15 == 0) {
                movement2o = stepDropUp;
                keyMovementB15 = 1;
            }
        }
        if (movementAccC > 14) {
            if (keyMovementC15 == 0) {
                movement3o = stepDropUp;
                keyMovementC15 = 1;
            }
        }
        if (movementAccD > 14) {
            if (keyMovementD15 == 0) {
                movement4o = stepDropUp;
                keyMovementD15 = 1;
            }
        }
        if (movementAccA > 15) {
            if (keyMovementA16 == 0) {
                movement1p = stepDropUp;
                keyMovementA16 = 1;
            }
        }
        if (movementAccB > 15) {
            if (keyMovementB16 == 0) {
                movement2p = stepDropUp;
                keyMovementB16 = 1;
            }
        }
        if (movementAccC > 15) {
            if (keyMovementC16 == 0) {
                movement3p = stepDropUp;
                keyMovementC16 = 1;
            }
        }
        if (movementAccD > 15) {
            if (keyMovementD16 == 0) {
                movement4p = stepDropUp;
                keyMovementD16 = 1;
            }
        }
        if (movementAccA > 16) {
            if (keyMovementA17 == 0) {
                movement1q = stepDropUp;
                keyMovementA17 = 1;
            }
        }
        if (movementAccB > 16) {
            if (keyMovementB17 == 0) {
                movement2q = stepDropUp;
                keyMovementB17 = 1;
            }
        }
        if (movementAccC > 16) {
            if (keyMovementC17 == 0) {
                movement3q = stepDropUp;
                keyMovementC17 = 1;
            }
        }
        if (movementAccD > 16) {
            if (keyMovementD17 == 0) {
                movement4q = stepDropUp;
                keyMovementD17 = 1;
            }
        }
        if (movementAccA > 17) {
            if (keyMovementA18 == 0) {
                movement1r = stepDropUp;
                keyMovementA18 = 1;
            }
        }
        if (movementAccB > 17) {
            if (keyMovementB18 == 0) {
                movement2r = stepDropUp;
                keyMovementB18 = 1;
            }
        }
        if (movementAccC > 17) {
            if (keyMovementC18 == 0) {
                movement3r = stepDropUp;
                keyMovementC18 = 1;
            }
        }
        if (movementAccD > 17) {
            if (keyMovementD18 == 0) {
                movement4r = stepDropUp;
                keyMovementD18 = 1;
            }
        }
        if (movementAccA > 18) {
            if (keyMovementA19 == 0) {
                movement1s = stepDropUp;
                keyMovementA19 = 1;
            }
        }
        if (movementAccB > 18) {
            if (keyMovementB19 == 0) {
                movement2s = stepDropUp;
                keyMovementB19 = 1;
            }
        }
        if (movementAccC > 18) {
            if (keyMovementC19 == 0) {
                movement3s = stepDropUp;
                keyMovementC19 = 1;
            }
        }
        if (movementAccD > 18) {
            if (keyMovementD19 == 0) {
                movement4s = stepDropUp;
                keyMovementD19 = 1;
            }
        }
        if (movementAccA > 19) {
            if (keyMovementA20 == 0) {
                movement1t = stepDropUp;
                keyMovementA20 = 1;
            }
        }
        if (movementAccB > 19) {
            if (keyMovementB20 == 0) {
                movement2t = stepDropUp;
                keyMovementB20 = 1;
            }
        }
        if (movementAccC > 19) {
            if (keyMovementC20 == 0) {
                movement3t = stepDropUp;
                keyMovementC20 = 1;
            }
        }
        if (movementAccD > 19) {
            if (keyMovementD20 == 0) {
                movement4t = stepDropUp;
                keyMovementD20 = 1;
            }
        }
        if (movementAccA > 20) {
            if (keyMovementA21 == 0) {
                movement1u = stepDropUp;
                keyMovementA21 = 1;
            }
        }
        if (movementAccB > 20) {
            if (keyMovementB21 == 0) {
                movement2u = stepDropUp;
                keyMovementB21 = 1;
            }
        }
        if (movementAccC > 20) {
            if (keyMovementC21 == 0) {
                movement3u = stepDropUp;
                keyMovementC21 = 1;
            }
        }
        if (movementAccD > 20) {
            if (keyMovementD21 == 0) {
                movement4u = stepDropUp;
                keyMovementD21 = 1;
            }
        }
        if (movementAccA > 21) {
            if (keyMovementA22 == 0) {
                movement1v = stepDropUp;
                keyMovementA22 = 1;
            }
        }
        if (movementAccB > 21) {
            if (keyMovementB22 == 0) {
                movement2v = stepDropUp;
                keyMovementB22 = 1;
            }
        }
        if (movementAccC > 21) {
            if (keyMovementC22 == 0) {
                movement3v = stepDropUp;
                keyMovementC22 = 1;
            }
        }
        if (movementAccD > 21) {
            if (keyMovementD22 == 0) {
                movement4v = stepDropUp;
                keyMovementD22 = 1;
            }
        }
        if (movementAccA > 22) {
            if (keyMovementA23 == 0) {
                movement1w = stepDropUp;
                keyMovementA23 = 1;
            }
        }
        if (movementAccB > 22) {
            if (keyMovementB23 == 0) {
                movement2w = stepDropUp;
                keyMovementB23 = 1;
            }
        }
        if (movementAccC > 22) {
            if (keyMovementC23 == 0) {
                movement3w = stepDropUp;
                keyMovementC23 = 1;
            }
        }
        if (movementAccD > 22) {
            if (keyMovementD23 == 0) {
                movement4w = stepDropUp;
                keyMovementD23 = 1;
            }
        }
        if (movementAccA > 23) {
            if (keyMovementA24 == 0) {
                movement1x = stepDropUp;
                keyMovementA24 = 1;
            }
        }
        if (movementAccB > 23) {
            if (keyMovementB24 == 0) {
                movement2x = stepDropUp;
                keyMovementB24 = 1;
            }
        }
        if (movementAccC > 23) {
            if (keyMovementC24 == 0) {
                movement3x = stepDropUp;
                keyMovementC24 = 1;
            }
        }
        if (movementAccD > 23) {
            if (keyMovementD24 == 0) {
                movement4x = stepDropUp;
                keyMovementD24 = 1;
            }
        }
        if (movementAccA > 24) {
            if (keyMovementA25 == 0) {
                movement1y = stepDropUp;
                keyMovementA25 = 1;
            }
        }
        if (movementAccB > 24) {
            if (keyMovementB25 == 0) {
                movement2y = stepDropUp;
                keyMovementB25 = 1;
            }
        }
        if (movementAccC > 24) {
            if (keyMovementC25 == 0) {
                movement3y = stepDropUp;
                keyMovementC25 = 1;
            }
        }
        if (movementAccD > 24) {
            if (keyMovementD25 == 0) {
                movement4y = stepDropUp;
                keyMovementD25 = 1;
            }
        }
        if (movementAccA > 25) {
            if (keyMovementA26 == 0) {
                movement1z = stepDropUp;
                keyMovementA26 = 1;
            }
        }
        if (movementAccB > 25) {
            if (keyMovementB26 == 0) {
                movement2z = stepDropUp;
                keyMovementB26 = 1;
            }
        }
        if (movementAccC > 25) {
            if (keyMovementC26 == 0) {
                movement3z = stepDropUp;
                keyMovementC26 = 1;
            }
        }
        if (movementAccD > 25) {
            if (keyMovementD26 == 0) {
                movement4z = stepDropUp;
                keyMovementD26 = 1;
            }
        }
    }
    if (downscroll == 1) {
        if (movementAccD > 26) {
            movementAccD = 1;
            keyMovementD1 = 0;
            keyMovementD2 = 0;
            keyMovementD3 = 0;
            keyMovementD4 = 0;
            keyMovementD5 = 0;
            keyMovementD6 = 0;
            keyMovementD7 = 0;
            keyMovementD8 = 0;
            keyMovementD9 = 0;
            keyMovementD10 = 0;
            keyMovementD11 = 0;
            keyMovementD12 = 0;
            keyMovementD13 = 0;
            keyMovementD14 = 0;
            keyMovementD15 = 0;
            keyMovementD16 = 0;
            keyMovementD17 = 0;
            keyMovementD18 = 0;
            keyMovementD19 = 0;
            keyMovementD20 = 0;
            keyMovementD21 = 0;
            keyMovementD22 = 0;
            keyMovementD23 = 0;
            keyMovementD24 = 0;
            keyMovementD25 = 0;
            keyMovementD26 = 0;
        }
        if (movementAccB > 26) {
            movementAccB = 1;
            keyMovementB1 = 0;
            keyMovementB2 = 0;
            keyMovementB3 = 0;
            keyMovementB4 = 0;
            keyMovementB5 = 0;
            keyMovementB6 = 0;
            keyMovementB7 = 0;
            keyMovementB8 = 0;
            keyMovementB9 = 0;
            keyMovementB10 = 0;
            keyMovementB11 = 0;
            keyMovementB12 = 0;
            keyMovementB13 = 0;
            keyMovementB14 = 0;
            keyMovementB15 = 0;
            keyMovementB16 = 0;
            keyMovementB17 = 0;
            keyMovementB18 = 0;
            keyMovementB19 = 0;
            keyMovementB20 = 0;
            keyMovementB21 = 0;
            keyMovementB22 = 0;
            keyMovementB23 = 0;
            keyMovementB24 = 0;
            keyMovementB25 = 0;
            keyMovementB26 = 0;
        }
        if (movementAccC > 26) {
            movementAccC = 1;
            keyMovementC1 = 0;
            keyMovementC2 = 0;
            keyMovementC3 = 0;
            keyMovementC4 = 0;
            keyMovementC5 = 0;
            keyMovementC6 = 0;
            keyMovementC7 = 0;
            keyMovementC8 = 0;
            keyMovementC9 = 0;
            keyMovementC10 = 0;
            keyMovementC11 = 0;
            keyMovementC12 = 0;
            keyMovementC13 = 0;
            keyMovementC14 = 0;
            keyMovementC15 = 0;
            keyMovementC16 = 0;
            keyMovementC17 = 0;
            keyMovementC18 = 0;
            keyMovementC19 = 0;
            keyMovementC20 = 0;
            keyMovementC21 = 0;
            keyMovementC22 = 0;
            keyMovementC23 = 0;
            keyMovementC24 = 0;
            keyMovementC25 = 0;
            keyMovementC26 = 0;
        }
        if (movementAccA > 26) {
            movementAccA = 1;
            keyMovementA1 = 0;
            keyMovementA2 = 0;
            keyMovementA3 = 0;
            keyMovementA4 = 0;
            keyMovementA5 = 0;
            keyMovementA6 = 0;
            keyMovementA7 = 0;
            keyMovementA8 = 0;
            keyMovementA9 = 0;
            keyMovementA10 = 0;
            keyMovementA11 = 0;
            keyMovementA12 = 0;
            keyMovementA13 = 0;
            keyMovementA14 = 0;
            keyMovementA15 = 0;
            keyMovementA16 = 0;
            keyMovementA17 = 0;
            keyMovementA18 = 0;
            keyMovementA19 = 0;
            keyMovementA20 = 0;
            keyMovementA21 = 0;
            keyMovementA22 = 0;
            keyMovementA23 = 0;
            keyMovementA24 = 0;
            keyMovementA25 = 0;
            keyMovementA26 = 0;
        }
        if (movementAccA > 0) {
            if (keyMovementA1 == 0) {
                movement1 = stepDropDown;
                keyMovementA1 = 1;
            }
        }
        if (movementAccB > 0) {
            if (keyMovementB1 == 0) {
                movement2 = stepDropDown;
                keyMovementB1 = 1;
            }
        }
        if (movementAccC > 0) {
            if (keyMovementC1 == 0) {
                movement3 = stepDropDown;
                keyMovementC1 = 1;
            }
        }
        if (movementAccD > 0) {
            if (keyMovementD1 == 0) {
                movement4 = stepDropDown;
                keyMovementD1 = 1;
            }
        }
        if (movementAccA > 1) {
            if (keyMovementA2 == 0) {
                movement1b = stepDropDown;
                keyMovementA2 = 1;
            }
        }
        if (movementAccB > 1) {
            if (keyMovementB2 == 0) {
                movement2b = stepDropDown;
                keyMovementB2 = 1;
            }
        }
        if (movementAccC > 1) {
            if (keyMovementC2 == 0) {
                movement3b = stepDropDown;
                keyMovementC2 = 1;
            }
        }
        if (movementAccD > 1) {
            if (keyMovementD2 == 0) {
                movement4b = stepDropDown;
                keyMovementD2 = 1;
            }
        }
        if (movementAccA > 2) {
            if (keyMovementA3 == 0) {
                movement1c = stepDropDown;
                keyMovementA3 = 1;
            }
        }
        if (movementAccB > 2) {
            if (keyMovementB3 == 0) {
                movement2c = stepDropDown;
                keyMovementB3 = 1;
            }
        }
        if (movementAccC > 2) {
            if (keyMovementC3 == 0) {
                movement3c = stepDropDown;
                keyMovementC3 = 1;
            }
        }
        if (movementAccD > 2) {
            if (keyMovementD3 == 0) {
                movement4c = stepDropDown;
                keyMovementD3 = 1;
            }
        }
        if (movementAccA > 3) {
            if (keyMovementA4 == 0) {
                movement1d = stepDropDown;
                keyMovementA4 = 1;
            }
        }
        if (movementAccB > 3) {
            if (keyMovementB4 == 0) {
                movement2d = stepDropDown;
                keyMovementB4 = 1;
            }
        }
        if (movementAccC > 3) {
            if (keyMovementC4 == 0) {
                movement3d = stepDropDown;
                keyMovementC4 = 1;
            }
        }
        if (movementAccD > 3) {
            if (keyMovementD4 == 0) {
                movement4d = stepDropDown;
                keyMovementD4 = 1;
            }
        }
        if (movementAccA > 4) {
            if (keyMovementA5 == 0) {
                movement1e = stepDropDown;
                keyMovementA5 = 1;
            }
        }
        if (movementAccB > 4) {
            if (keyMovementB5 == 0) {
                movement2e = stepDropDown;
                keyMovementB5 = 1;
            }
        }
        if (movementAccC > 4) {
            if (keyMovementC5 == 0) {
                movement3e = stepDropDown;
                keyMovementC5 = 1;
            }
        }
        if (movementAccD > 4) {
            if (keyMovementD5 == 0) {
                movement4e = stepDropDown;
                keyMovementD5 = 1;
            }
        }
        if (movementAccA > 5) {
            if (keyMovementA6 == 0) {
                movement1f = stepDropDown;
                keyMovementA6 = 1;
            }
        }
        if (movementAccB > 5) {
            if (keyMovementB6 == 0) {
                movement2f = stepDropDown;
                keyMovementB6 = 1;
            }
        }
        if (movementAccC > 5) {
            if (keyMovementC6 == 0) {
                movement3f = stepDropDown;
                keyMovementC6 = 1;
            }
        }
        if (movementAccD > 5) {
            if (keyMovementD6 == 0) {
                movement4f = stepDropDown;
                keyMovementD6 = 1;
            }
        }
        if (movementAccA > 6) {
            if (keyMovementA7 == 0) {
                movement1g = stepDropDown;
                keyMovementA7 = 1;
            }
        }
        if (movementAccB > 6) {
            if (keyMovementB7 == 0) {
                movement2g = stepDropDown;
                keyMovementB7 = 1;
            }
        }
        if (movementAccC > 6) {
            if (keyMovementC7 == 0) {
                movement3g = stepDropDown;
                keyMovementC7 = 1;
            }
        }
        if (movementAccD > 6) {
            if (keyMovementD7 == 0) {
                movement4g = stepDropDown;
                keyMovementD7 = 1;
            }
        }
        if (movementAccA > 7) {
            if (keyMovementA8 == 0) {
                movement1h = stepDropDown;
                keyMovementA8 = 1;
            }
        }
        if (movementAccB > 7) {
            if (keyMovementB8 == 0) {
                movement2h = stepDropDown;
                keyMovementB8 = 1;
            }
        }
        if (movementAccC > 7) {
            if (keyMovementC8 == 0) {
                movement3h = stepDropDown;
                keyMovementC8 = 1;
            }
        }
        if (movementAccD > 7) {
            if (keyMovementD8 == 0) {
                movement4h = stepDropDown;
                keyMovementD8 = 1;
            }
        }
        if (movementAccA > 8) {
            if (keyMovementA9 == 0) {
                movement1i = stepDropDown;
                keyMovementA9 = 1;
            }
        }
        if (movementAccB > 8) {
            if (keyMovementB9 == 0) {
                movement2i = stepDropDown;
                keyMovementB9 = 1;
            }
        }
        if (movementAccC > 8) {
            if (keyMovementC9 == 0) {
                movement3i = stepDropDown;
                keyMovementC9 = 1;
            }
        }
        if (movementAccD > 8) {
            if (keyMovementD9 == 0) {
                movement4i = stepDropDown;
                keyMovementD9 = 1;
            }
        }
        if (movementAccA > 9) {
            if (keyMovementA10 == 0) {
                movement1j = stepDropDown;
                keyMovementA10 = 1;
            }
        }
        if (movementAccB > 9) {
            if (keyMovementB10 == 0) {
                movement2j = stepDropDown;
                keyMovementB10 = 1;
            }
        }
        if (movementAccC > 9) {
            if (keyMovementC10 == 0) {
                movement3j = stepDropDown;
                keyMovementC10 = 1;
            }
        }
        if (movementAccD > 9) {
            if (keyMovementD10 == 0) {
                movement4j = stepDropDown;
                keyMovementD10 = 1;
            }
        }
        if (movementAccA > 10) {
            if (keyMovementA11 == 0) {
                movement1k = stepDropDown;
                keyMovementA11 = 1;
            }
        }
        if (movementAccB > 10) {
            if (keyMovementB11 == 0) {
                movement2k = stepDropDown;
                keyMovementB11 = 1;
            }
        }
        if (movementAccC > 10) {
            if (keyMovementC11 == 0) {
                movement3k = stepDropDown;
                keyMovementC11 = 1;
            }
        }
        if (movementAccD > 10) {
            if (keyMovementD11 == 0) {
                movement4k = stepDropDown;
                keyMovementD11 = 1;
            }
        }
        if (movementAccA > 11) {
            if (keyMovementA12 == 0) {
                movement1l = stepDropDown;
                keyMovementA12 = 1;
            }
        }
        if (movementAccB > 11) {
            if (keyMovementB12 == 0) {
                movement2l = stepDropDown;
                keyMovementB12 = 1;
            }
        }
        if (movementAccC > 11) {
            if (keyMovementC12 == 0) {
                movement3l = stepDropDown;
                keyMovementC12 = 1;
            }
        }
        if (movementAccD > 11) {
            if (keyMovementD12 == 0) {
                movement4l = stepDropDown;
                keyMovementD12 = 1;
            }
        }
        if (movementAccA > 12) {
            if (keyMovementA13 == 0) {
                movement1m = stepDropDown;
                keyMovementA13 = 1;
            }
        }
        if (movementAccB > 12) {
            if (keyMovementB13 == 0) {
                movement2m = stepDropDown;
                keyMovementB13 = 1;
            }
        }
        if (movementAccC > 12) {
            if (keyMovementC13 == 0) {
                movement3m = stepDropDown;
                keyMovementC13 = 1;
            }
        }
        if (movementAccD > 12) {
            if (keyMovementD13 == 0) {
                movement4m = stepDropDown;
                keyMovementD13 = 1;
            }
        }
        if (movementAccA > 13) {
            if (keyMovementA14 == 0) {
                movement1n = stepDropDown;
                keyMovementA14 = 1;
            }
        }
        if (movementAccB > 13) {
            if (keyMovementB14 == 0) {
                movement2n = stepDropDown;
                keyMovementB14 = 1;
            }
        }
        if (movementAccC > 13) {
            if (keyMovementC14 == 0) {
                movement3n = stepDropDown;
                keyMovementC14 = 1;
            }
        }
        if (movementAccD > 13) {
            if (keyMovementD14 == 0) {
                movement4n = stepDropDown;
                keyMovementD14 = 1;
            }
        }
        if (movementAccA > 14) {
            if (keyMovementA15 == 0) {
                movement1o = stepDropDown;
                keyMovementA15 = 1;
            }
        }
        if (movementAccB > 14) {
            if (keyMovementB15 == 0) {
                movement2o = stepDropDown;
                keyMovementB15 = 1;
            }
        }
        if (movementAccC > 14) {
            if (keyMovementC15 == 0) {
                movement3o = stepDropDown;
                keyMovementC15 = 1;
            }
        }
        if (movementAccD > 14) {
            if (keyMovementD15 == 0) {
                movement4o = stepDropDown;
                keyMovementD15 = 1;
            }
        }
        if (movementAccA > 15) {
            if (keyMovementA16 == 0) {
                movement1p = stepDropDown;
                keyMovementA16 = 1;
            }
        }
        if (movementAccB > 15) {
            if (keyMovementB16 == 0) {
                movement2p = stepDropDown;
                keyMovementB16 = 1;
            }
        }
        if (movementAccC > 15) {
            if (keyMovementC16 == 0) {
                movement3p = stepDropDown;
                keyMovementC16 = 1;
            }
        }
        if (movementAccD > 15) {
            if (keyMovementD16 == 0) {
                movement4p = stepDropDown;
                keyMovementD16 = 1;
            }
        }
        if (movementAccA > 16) {
            if (keyMovementA17 == 0) {
                movement1q = stepDropDown;
                keyMovementA17 = 1;
            }
        }
        if (movementAccB > 16) {
            if (keyMovementB17 == 0) {
                movement2q = stepDropDown;
                keyMovementB17 = 1;
            }
        }
        if (movementAccC > 16) {
            if (keyMovementC17 == 0) {
                movement3q = stepDropDown;
                keyMovementC17 = 1;
            }
        }
        if (movementAccD > 16) {
            if (keyMovementD17 == 0) {
                movement4q = stepDropDown;
                keyMovementD17 = 1;
            }
        }
        if (movementAccA > 17) {
            if (keyMovementA18 == 0) {
                movement1r = stepDropDown;
                keyMovementA18 = 1;
            }
        }
        if (movementAccB > 17) {
            if (keyMovementB18 == 0) {
                movement2r = stepDropDown;
                keyMovementB18 = 1;
            }
        }
        if (movementAccC > 17) {
            if (keyMovementC18 == 0) {
                movement3r = stepDropDown;
                keyMovementC18 = 1;
            }
        }
        if (movementAccD > 17) {
            if (keyMovementD18 == 0) {
                movement4r = stepDropDown;
                keyMovementD18 = 1;
            }
        }
        if (movementAccA > 18) {
            if (keyMovementA19 == 0) {
                movement1s = stepDropDown;
                keyMovementA19 = 1;
            }
        }
        if (movementAccB > 18) {
            if (keyMovementB19 == 0) {
                movement2s = stepDropDown;
                keyMovementB19 = 1;
            }
        }
        if (movementAccC > 18) {
            if (keyMovementC19 == 0) {
                movement3s = stepDropDown;
                keyMovementC19 = 1;
            }
        }
        if (movementAccD > 18) {
            if (keyMovementD19 == 0) {
                movement4s = stepDropDown;
                keyMovementD19 = 1;
            }
        }
        if (movementAccA > 19) {
            if (keyMovementA20 == 0) {
                movement1t = stepDropDown;
                keyMovementA20 = 1;
            }
        }
        if (movementAccB > 19) {
            if (keyMovementB20 == 0) {
                movement2t = stepDropDown;
                keyMovementB20 = 1;
            }
        }
        if (movementAccC > 19) {
            if (keyMovementC20 == 0) {
                movement3t = stepDropDown;
                keyMovementC20 = 1;
            }
        }
        if (movementAccD > 19) {
            if (keyMovementD20 == 0) {
                movement4t = stepDropDown;
                keyMovementD20 = 1;
            }
        }
        if (movementAccA > 20) {
            if (keyMovementA21 == 0) {
                movement1u = stepDropDown;
                keyMovementA21 = 1;
            }
        }
        if (movementAccB > 20) {
            if (keyMovementB21 == 0) {
                movement2u = stepDropDown;
                keyMovementB21 = 1;
            }
        }
        if (movementAccC > 20) {
            if (keyMovementC21 == 0) {
                movement3u = stepDropDown;
                keyMovementC21 = 1;
            }
        }
        if (movementAccD > 20) {
            if (keyMovementD21 == 0) {
                movement4u = stepDropDown;
                keyMovementD21 = 1;
            }
        }
        if (movementAccA > 21) {
            if (keyMovementA22 == 0) {
                movement1v = stepDropDown;
                keyMovementA22 = 1;
            }
        }
        if (movementAccB > 21) {
            if (keyMovementB22 == 0) {
                movement2v = stepDropDown;
                keyMovementB22 = 1;
            }
        }
        if (movementAccC > 21) {
            if (keyMovementC22 == 0) {
                movement3v = stepDropDown;
                keyMovementC22 = 1;
            }
        }
        if (movementAccD > 21) {
            if (keyMovementD22 == 0) {
                movement4v = stepDropDown;
                keyMovementD22 = 1;
            }
        }
        if (movementAccA > 22) {
            if (keyMovementA23 == 0) {
                movement1w = stepDropDown;
                keyMovementA23 = 1;
            }
        }
        if (movementAccB > 22) {
            if (keyMovementB23 == 0) {
                movement2w = stepDropDown;
                keyMovementB23 = 1;
            }
        }
        if (movementAccC > 22) {
            if (keyMovementC23 == 0) {
                movement3w = stepDropDown;
                keyMovementC23 = 1;
            }
        }
        if (movementAccD > 22) {
            if (keyMovementD23 == 0) {
                movement4w = stepDropDown;
                keyMovementD23 = 1;
            }
        }
        if (movementAccA > 23) {
            if (keyMovementA24 == 0) {
                movement1x = stepDropDown;
                keyMovementA24 = 1;
            }
        }
        if (movementAccB > 23) {
            if (keyMovementB24 == 0) {
                movement2x = stepDropDown;
                keyMovementB24 = 1;
            }
        }
        if (movementAccC > 23) {
            if (keyMovementC24 == 0) {
                movement3x = stepDropDown;
                keyMovementC24 = 1;
            }
        }
        if (movementAccD > 23) {
            if (keyMovementD24 == 0) {
                movement4x = stepDropDown;
                keyMovementD24 = 1;
            }
        }
        if (movementAccA > 24) {
            if (keyMovementA25 == 0) {
                movement1y = stepDropDown;
                keyMovementA25 = 1;
            }
        }
        if (movementAccB > 24) {
            if (keyMovementB25 == 0) {
                movement2y = stepDropDown;
                keyMovementB25 = 1;
            }
        }
        if (movementAccC > 24) {
            if (keyMovementC25 == 0) {
                movement3y = stepDropDown;
                keyMovementC25 = 1;
            }
        }
        if (movementAccD > 24) {
            if (keyMovementD25 == 0) {
                movement4y = stepDropDown;
                keyMovementD25 = 1;
            }
        }
        if (movementAccA > 25) {
            if (keyMovementA26 == 0) {
                movement1z = stepDropDown;
                keyMovementA26 = 1;
            }
        }
        if (movementAccB > 25) {
            if (keyMovementB26 == 0) {
                movement2z = stepDropDown;
                keyMovementB26 = 1;
            }
        }
        if (movementAccC > 25) {
            if (keyMovementC26 == 0) {
                movement3z = stepDropDown;
                keyMovementC26 = 1;
            }
        }
        if (movementAccD > 25) {
            if (keyMovementD26 == 0) {
                movement4z = stepDropDown;
                keyMovementD26 = 1;
            }
        }
    }
    if (upload == 0) {
        document.getElementById("hit").innerHTML = ""
        document.getElementById("miss").innerHTML = ""
        document.getElementById("ultimate").innerHTML = ""
        document.getElementById("fancy").innerHTML = ""
        document.getElementById("stunning").innerHTML = ""
        document.getElementById("results").innerHTML = ""
        accuracy.innerHTML = ""
    }
    if (keyPlayAccuracy == 0 && upload == 1) {
        document.getElementById("hit").innerHTML = "Hit: " + hit
        document.getElementById("miss").innerHTML = "M " + miss
        document.getElementById("listContainer").innerHTML = ""
        document.getElementById("ultimate").innerHTML = "U" + " " + ultimate
        document.getElementById("fancy").innerHTML = "F" + " " + fancy
        document.getElementById("stunning").innerHTML = "S" + " " + stunning
    }
    if (upload == 1) {
        if (chartNumber == 1) {
            if (S >= fullArray.length && fullArray.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 2) {
            if (S >= secondChart.length && secondChart.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 3) {
            if (S >= chart3.length && chart3.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 4) {
            if (S >= chart4.length && chart4.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 5) {
            if (S >= chart5.length && chart5.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 6) {
            if (S >= chart6.length && chart6.length !== 0 && keyResults == 1 && keyScores == 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 3000);
            }
        }
        if (chartNumber == 1 && scrollV <= 5) {
            if (S >= fullArray.length && fullArray.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
        if (chartNumber == 2 && scrollV <= 5) {
            if (S >= secondChart.length && secondChart.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
        if (chartNumber == 3 && scrollV <= 5) {
            if (S >= chart3.length && chart3.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
        if (chartNumber == 4 && scrollV <= 5) {
            if (S >= chart4.length && chart4.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
        if (chartNumber == 5 && scrollV <= 5) {
            if (S >= chart5.length && chart5.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
        if (chartNumber == 6 && scrollV <= 5) {
            if (S >= chart6.length && chart6.length !== 0) {
                keyScores = 1;
                setTimeout(function () {
                    save()
                    scoresSave()
                    upload = 0;
                    document.getElementById("ultimateResults").innerHTML = "Ultimate " + ultimate
                    document.getElementById("fancyResults").innerHTML = "Fancy " + fancy
                    document.getElementById("stunningResults").innerHTML = "Stunning " + stunning
                    document.getElementById("missResults").innerHTML = "Miss " + miss
                }, 10000);
            }
        }
    }
    this.document.getElementById("hit").innterHTML = ""
    if (movement1 < 10 || movement1 > 870) {
        d1.style.opacity = "0.0"
    }
    if (movement1b < 10 || movement1b > 870) {
        d1b.style.opacity = "0.0"
    }
    if (movement1c < 10 || movement1c > 870) {
        d1c.style.opacity = "0.0"
    }
    if (movement1d < 10 || movement1d > 870) {
        d1d.style.opacity = "0.0"
    }
    if (movement1e < 10 || movement1e > 870) {
        d1e.style.opacity = "0.0"
    }
    if (movement1f < 10 || movement1f > 870) {
        d1f.style.opacity = "0.0"
    }
    if (movement1g < 10 || movement1g > 870) {
        d1g.style.opacity = "0.0"
    }
    if (movement1h < 10 || movement1h > 870) {
        d1h.style.opacity = "0.0"
    }
    if (movement1i < 10 || movement1i > 870) {
        d1i.style.opacity = "0.0"
    }
    if (movement1j < 10 || movement1j > 870) {
        d1j.style.opacity = "0.0"
    }
    if (movement1k < 10 || movement1k > 870) {
        d1k.style.opacity = "0.0"
    }
    if (movement1l < 10 || movement1l > 870) {
        d1l.style.opacity = "0.0"
    }
    if (movement1m < 10 || movement1m > 870) {
        d1m.style.opacity = "0.0"
    }
    if (movement1n < 10 || movement1n > 870) {
        d1n.style.opacity = "0.0"
    }
    if (movement1o < 10 || movement1o > 870) {
        d1o.style.opacity = "0.0"
    }
    if (movement1p < 10 || movement1p > 870) {
        d1p.style.opacity = "0.0"
    }
    if (movement1q < 10 || movement1q > 870) {
        d1q.style.opacity = "0.0"
    }
    if (movement1r < 10 || movement1r > 870) {
        d1r.style.opacity = "0.0"
    }
    if (movement1s < 10 || movement1s > 870) {
        d1s.style.opacity = "0.0"
    }
    if (movement1t < 10 || movement1t > 870) {
        d1t.style.opacity = "0.0"
    }
    if (movement1u < 10 || movement1u > 870) {
        d1u.style.opacity = "0.0"
    }
    if (movement1v < 10 || movement1v > 870) {
        d1v.style.opacity = "0.0"
    }
    if (movement1w < 10 || movement1w > 870) {
        d1w.style.opacity = "0.0"
    }
    if (movement1x < 10 || movement1x > 870) {
        d1x.style.opacity = "0.0"
    }
    if (movement1y < 10 || movement1y > 870) {
        d1y.style.opacity = "0.0"
    }
    if (movement1z < 10 || movement1z > 870) {
        d1z.style.opacity = "0.0"
    }
    if (movement1 > 10 && movement1 < 870) {
        d1.style.opacity = "0.9"
    }
    if (movement1b > 10 && movement1b < 870) {
        d1b.style.opacity = "0.9"
    }
    if (movement1c > 10 && movement1c < 870) {
        d1c.style.opacity = "0.9"
    }
    if (movement1d > 10 && movement1d < 870) {
        d1d.style.opacity = "0.9"
    }
    if (movement1e > 10 && movement1e < 870) {
        d1e.style.opacity = "0.9"
    }
    if (movement1f > 10 && movement1f < 870) {
        d1f.style.opacity = "0.9"
    }
    if (movement1g > 10 && movement1g < 870) {
        d1g.style.opacity = "0.9"
    }
    if (movement1h > 10 && movement1h < 870) {
        d1h.style.opacity = "0.9"
    }
    if (movement1i > 10 && movement1i < 870) {
        d1i.style.opacity = "0.9"
    }
    if (movement1j > 10 && movement1j < 870) {
        d1j.style.opacity = "0.9"
    }
    if (movement1k > 10 && movement1k < 870) {
        d1k.style.opacity = "0.9"
    }
    if (movement1l > 10 && movement1l < 870) {
        d1l.style.opacity = "0.9"
    }
    if (movement1m > 10 && movement1m < 870) {
        d1m.style.opacity = "0.9"
    }
    if (movement1n > 10 && movement1n < 870) {
        d1n.style.opacity = "0.9"
    }
    if (movement1o > 10 && movement1o < 870) {
        d1o.style.opacity = "0.9"
    }
    if (movement1p > 10 && movement1p < 870) {
        d1p.style.opacity = "0.9"
    }
    if (movement1q > 10 && movement1q < 870) {
        d1q.style.opacity = "0.9"
    }
    if (movement1r > 10 && movement1r < 870) {
        d1r.style.opacity = "0.9"
    }
    if (movement1s > 10 && movement1s < 870) {
        d1s.style.opacity = "0.9"
    }
    if (movement1t > 10 && movement1t < 870) {
        d1t.style.opacity = "0.9"
    }
    if (movement1u > 10 && movement1u < 870) {
        d1u.style.opacity = "0.9"
    }
    if (movement1v > 10 && movement1v < 870) {
        d1v.style.opacity = "0.9"
    }
    if (movement1w > 10 && movement1w < 870) {
        d1w.style.opacity = "0.9"
    }
    if (movement1x > 10 && movement1x < 870) {
        d1x.style.opacity = "0.9"
    }
    if (movement1y > 10 && movement1y < 870) {
        d1y.style.opacity = "0.9"
    }
    if (movement1z > 10 && movement1z < 870) {
        d1z.style.opacity = "0.9"
    }
    if (movement2 < 10 || movement2 > 870) {
        d2.style.opacity = "0.0"
    }
    if (movement2b < 10 || movement2b > 870) {
        d2b.style.opacity = "0.0"
    }
    if (movement2c < 10 || movement2c > 870) {
        d2c.style.opacity = "0.0"
    }
    if (movement2d < 10 || movement2d > 870) {
        d2d.style.opacity = "0.0"
    }
    if (movement2e < 10 || movement2e > 870) {
        d2e.style.opacity = "0.0"
    }
    if (movement2f < 10 || movement2f > 870) {
        d2f.style.opacity = "0.0"
    }
    if (movement2g < 10 || movement2g > 870) {
        d2g.style.opacity = "0.0"
    }
    if (movement2h < 10 || movement2h > 870) {
        d2h.style.opacity = "0.0"
    }
    if (movement2i < 10 || movement2i > 870) {
        d2i.style.opacity = "0.0"
    }
    if (movement2j < 10 || movement2j > 870) {
        d2j.style.opacity = "0.0"
    }
    if (movement2k < 10 || movement2k > 870) {
        d2k.style.opacity = "0.0"
    }
    if (movement2l < 10 || movement2l > 870) {
        d2l.style.opacity = "0.0"
    }
    if (movement2m < 10 || movement2m > 870) {
        d2m.style.opacity = "0.0"
    }
    if (movement2n < 10 || movement2n > 870) {
        d2n.style.opacity = "0.0"
    }
    if (movement2o < 10 || movement2o > 870) {
        d2o.style.opacity = "0.0"
    }
    if (movement2p < 10 || movement2p > 870) {
        d2p.style.opacity = "0.0"
    }
    if (movement2q < 10 || movement2q > 870) {
        d2q.style.opacity = "0.0"
    }
    if (movement2r < 10 || movement2r > 870) {
        d2r.style.opacity = "0.0"
    }
    if (movement2s < 10 || movement2s > 870) {
        d2s.style.opacity = "0.0"
    }
    if (movement2t < 10 || movement2t > 870) {
        d2t.style.opacity = "0.0"
    }
    if (movement2u < 10 || movement2u > 870) {
        d2u.style.opacity = "0.0"
    }
    if (movement2v < 10 || movement2v > 870) {
        d2v.style.opacity = "0.0"
    }
    if (movement2w < 10 || movement2w > 870) {
        d2w.style.opacity = "0.0"
    }
    if (movement2x < 10 || movement2x > 870) {
        d2x.style.opacity = "0.0"
    }
    if (movement2y < 10 || movement2y > 870) {
        d2y.style.opacity = "0.0"
    }
    if (movement2z < 10 || movement2z > 870) {
        d2z.style.opacity = "0.0"
    }
    if (movement2 > 10 && movement2 < 870) {
        d2.style.opacity = "0.9"
    }
    if (movement2b > 10 && movement2b < 870) {
        d2b.style.opacity = "0.9"
    }
    if (movement2c > 10 && movement2c < 870) {
        d2c.style.opacity = "0.9"
    }
    if (movement2d > 10 && movement2d < 870) {
        d2d.style.opacity = "0.9"
    }
    if (movement2e > 10 && movement2e < 870) {
        d2e.style.opacity = "0.9"
    }
    if (movement2f > 10 && movement2f < 870) {
        d2f.style.opacity = "0.9"
    }
    if (movement2g > 10 && movement2g < 870) {
        d2g.style.opacity = "0.9"
    }
    if (movement2h > 10 && movement2h < 870) {
        d2h.style.opacity = "0.9"
    }
    if (movement2i > 10 && movement2i < 870) {
        d2i.style.opacity = "0.9"
    }
    if (movement2j > 10 && movement2j < 870) {
        d2j.style.opacity = "0.9"
    }
    if (movement2k > 10 && movement2k < 870) {
        d2k.style.opacity = "0.9"
    }
    if (movement2l > 10 && movement2l < 870) {
        d2l.style.opacity = "0.9"
    }
    if (movement2m > 10 && movement2m < 870) {
        d2m.style.opacity = "0.9"
    }
    if (movement2n > 10 && movement2n < 870) {
        d2n.style.opacity = "0.9"
    }
    if (movement2o > 10 && movement2o < 870) {
        d2o.style.opacity = "0.9"
    }
    if (movement2p > 10 && movement2p < 870) {
        d2p.style.opacity = "0.9"
    }
    if (movement2q > 10 && movement2q < 870) {
        d2q.style.opacity = "0.9"
    }
    if (movement2r > 10 && movement2r < 870) {
        d2r.style.opacity = "0.9"
    }
    if (movement2s > 10 && movement2s < 870) {
        d2s.style.opacity = "0.9"
    }
    if (movement2t > 10 && movement2t < 870) {
        d2t.style.opacity = "0.9"
    }
    if (movement2u > 10 && movement2u < 870) {
        d2u.style.opacity = "0.9"
    }
    if (movement2v > 10 && movement2v < 870) {
        d2v.style.opacity = "0.9"
    }
    if (movement2w > 10 && movement2w < 870) {
        d2w.style.opacity = "0.9"
    }
    if (movement2x > 10 && movement2x < 870) {
        d2x.style.opacity = "0.9"
    }
    if (movement2y > 10 && movement2y < 870) {
        d2y.style.opacity = "0.9"
    }
    if (movement2z > 10 && movement2z < 870) {
        d2z.style.opacity = "0.9"
    }
    if (movement3 < 10 || movement3 > 870) {
        d3.style.opacity = "0.0"
    }
    if (movement3b < 10 || movement3b > 870) {
        d3b.style.opacity = "0.0"
    }
    if (movement3c < 10 || movement3c > 870) {
        d3c.style.opacity = "0.0"
    }
    if (movement3d < 10 || movement3d > 870) {
        d3d.style.opacity = "0.0"
    }
    if (movement3e < 10 || movement3e > 870) {
        d3e.style.opacity = "0.0"
    }
    if (movement3f < 10 || movement3f > 870) {
        d3f.style.opacity = "0.0"
    }
    if (movement3g < 10 || movement3g > 870) {
        d3g.style.opacity = "0.0"
    }
    if (movement3h < 10 || movement3h > 870) {
        d3h.style.opacity = "0.0"
    }
    if (movement3i < 10 || movement3i > 870) {
        d3i.style.opacity = "0.0"
    }
    if (movement3j < 10 || movement3j > 870) {
        d3j.style.opacity = "0.0"
    }
    if (movement3k < 10 || movement3k > 870) {
        d3k.style.opacity = "0.0"
    }
    if (movement3l < 10 || movement3l > 870) {
        d3l.style.opacity = "0.0"
    }
    if (movement3m < 10 || movement3m > 870) {
        d3m.style.opacity = "0.0"
    }
    if (movement3n < 10 || movement3n > 870) {
        d3n.style.opacity = "0.0"
    }
    if (movement3o < 10 || movement3o > 870) {
        d3o.style.opacity = "0.0"
    }
    if (movement3p < 10 || movement3p > 870) {
        d3p.style.opacity = "0.0"
    }
    if (movement3q < 10 || movement3q > 870) {
        d3q.style.opacity = "0.0"
    }
    if (movement3r < 10 || movement3r > 870) {
        d3r.style.opacity = "0.0"
    }
    if (movement3s < 10 || movement3s > 870) {
        d3s.style.opacity = "0.0"
    }
    if (movement3t < 10 || movement3t > 870) {
        d3t.style.opacity = "0.0"
    }
    if (movement3u < 10 || movement3u > 870) {
        d3u.style.opacity = "0.0"
    }
    if (movement3v < 10 || movement3v > 870) {
        d3v.style.opacity = "0.0"
    }
    if (movement3w < 10 || movement3w > 870) {
        d3w.style.opacity = "0.0"
    }
    if (movement3x < 10 || movement3x > 870) {
        d3x.style.opacity = "0.0"
    }
    if (movement3y < 10 || movement3y > 870) {
        d3y.style.opacity = "0.0"
    }
    if (movement3z < 10 || movement3z > 870) {
        d3z.style.opacity = "0.0"
    }
    if (movement3 > 10 && movement3 < 870) {
        d3.style.opacity = "0.9"
    }
    if (movement3b > 10 && movement3b < 870) {
        d3b.style.opacity = "0.9"
    }
    if (movement3c > 10 && movement3c < 870) {
        d3c.style.opacity = "0.9"
    }
    if (movement3d > 10 && movement3d < 870) {
        d3d.style.opacity = "0.9"
    }
    if (movement3e > 10 && movement3e < 870) {
        d3e.style.opacity = "0.9"
    }
    if (movement3f > 10 && movement3f < 870) {
        d3f.style.opacity = "0.9"
    }
    if (movement3g > 10 && movement3g < 870) {
        d3g.style.opacity = "0.9"
    }
    if (movement3h > 10 && movement3h < 870) {
        d3h.style.opacity = "0.9"
    }
    if (movement3i > 10 && movement3i < 870) {
        d3i.style.opacity = "0.9"
    }
    if (movement3j > 10 && movement3j < 870) {
        d3j.style.opacity = "0.9"
    }
    if (movement3k > 10 && movement3k < 870) {
        d3k.style.opacity = "0.9"
    }
    if (movement3l > 10 && movement3l < 870) {
        d3l.style.opacity = "0.9"
    }
    if (movement3m > 10 && movement3m < 870) {
        d3m.style.opacity = "0.9"
    }
    if (movement3n > 10 && movement3n < 870) {
        d3n.style.opacity = "0.9"
    }
    if (movement3o > 10 && movement3o < 870) {
        d3o.style.opacity = "0.9"
    }
    if (movement3p > 10 && movement3p < 870) {
        d3p.style.opacity = "0.9"
    }
    if (movement3q > 10 && movement3q < 870) {
        d3q.style.opacity = "0.9"
    }
    if (movement3r > 10 && movement3r < 870) {
        d3r.style.opacity = "0.9"
    }
    if (movement3s > 10 && movement3s < 870) {
        d3s.style.opacity = "0.9"
    }
    if (movement3t > 10 && movement3t < 870) {
        d3t.style.opacity = "0.9"
    }
    if (movement3u > 10 && movement3u < 870) {
        d3u.style.opacity = "0.9"
    }
    if (movement3v > 10 && movement3v < 870) {
        d3v.style.opacity = "0.9"
    }
    if (movement3w > 10 && movement3w < 870) {
        d3w.style.opacity = "0.9"
    }
    if (movement3x > 10 && movement3x < 870) {
        d3x.style.opacity = "0.9"
    }
    if (movement3y > 10 && movement3y < 870) {
        d3y.style.opacity = "0.9"
    }
    if (movement3z > 10 && movement3z < 870) {
        d3z.style.opacity = "0.9"
    }
    if (movement4 < 10 || movement4 > 870) {
        d4.style.opacity = "0.0"
    }
    if (movement4b < 10 || movement4b > 870) {
        d4b.style.opacity = "0.0"
    }
    if (movement4c < 10 || movement4c > 870) {
        d4c.style.opacity = "0.0"
    }
    if (movement4d < 10 || movement4d > 870) {
        d4d.style.opacity = "0.0"
    }
    if (movement4e < 10 || movement4e > 870) {
        d4e.style.opacity = "0.0"
    }
    if (movement4f < 10 || movement4f > 870) {
        d4f.style.opacity = "0.0"
    }
    if (movement4g < 10 || movement4g > 870) {
        d4g.style.opacity = "0.0"
    }
    if (movement4h < 10 || movement4h > 870) {
        d4h.style.opacity = "0.0"
    }
    if (movement4i < 10 || movement4i > 870) {
        d4i.style.opacity = "0.0"
    }
    if (movement4j < 10 || movement4j > 870) {
        d4j.style.opacity = "0.0"
    }
    if (movement4k < 10 || movement4k > 870) {
        d4k.style.opacity = "0.0"
    }
    if (movement4l < 10 || movement4l > 870) {
        d4l.style.opacity = "0.0"
    }
    if (movement4m < 10 || movement4m > 870) {
        d4m.style.opacity = "0.0"
    }
    if (movement4n < 10 || movement4n > 870) {
        d4n.style.opacity = "0.0"
    }
    if (movement4o < 10 || movement4o > 870) {
        d4o.style.opacity = "0.0"
    }
    if (movement4p < 10 || movement4p > 870) {
        d4p.style.opacity = "0.0"
    }
    if (movement4q < 10 || movement4q > 870) {
        d4q.style.opacity = "0.0"
    }
    if (movement4r < 10 || movement4r > 870) {
        d4r.style.opacity = "0.0"
    }
    if (movement4s < 10 || movement4s > 870) {
        d4s.style.opacity = "0.0"
    }
    if (movement4t < 10 || movement4t > 870) {
        d4t.style.opacity = "0.0"
    }
    if (movement4u < 10 || movement4u > 870) {
        d4u.style.opacity = "0.0"
    }
    if (movement4v < 10 || movement4v > 870) {
        d4v.style.opacity = "0.0"
    }
    if (movement4w < 10 || movement4w > 870) {
        d4w.style.opacity = "0.0"
    }
    if (movement4x < 10 || movement4x > 870) {
        d4x.style.opacity = "0.0"
    }
    if (movement4y < 10 || movement4y > 870) {
        d4y.style.opacity = "0.0"
    }
    if (movement4z < 10 || movement4z > 870) {
        d4z.style.opacity = "0.0"
    }
    if (movement4 > 10 && movement4 < 870) {
        d4.style.opacity = "0.9"
    }
    if (movement4b > 10 && movement4b < 870) {
        d4b.style.opacity = "0.9"
    }
    if (movement4c > 10 && movement4c < 870) {
        d4c.style.opacity = "0.9"
    }
    if (movement4d > 10 && movement4d < 870) {
        d4d.style.opacity = "0.9"
    }
    if (movement4e > 10 && movement4e < 870) {
        d4e.style.opacity = "0.9"
    }
    if (movement4f > 10 && movement4f < 870) {
        d4f.style.opacity = "0.9"
    }
    if (movement4g > 10 && movement4g < 870) {
        d4g.style.opacity = "0.9"
    }
    if (movement4h > 10 && movement4h < 870) {
        d4h.style.opacity = "0.9"
    }
    if (movement4i > 10 && movement4i < 870) {
        d4i.style.opacity = "0.9"
    }
    if (movement4j > 10 && movement4j < 870) {
        d4j.style.opacity = "0.9"
    }
    if (movement4k > 10 && movement4k < 870) {
        d4k.style.opacity = "0.9"
    }
    if (movement4l > 10 && movement4l < 870) {
        d4l.style.opacity = "0.9"
    }
    if (movement4m > 10 && movement4m < 870) {
        d4m.style.opacity = "0.9"
    }
    if (movement4n > 10 && movement4n < 870) {
        d4n.style.opacity = "0.9"
    }
    if (movement4o > 10 && movement4o < 870) {
        d4o.style.opacity = "0.9"
    }
    if (movement4p > 10 && movement4p < 870) {
        d4p.style.opacity = "0.9"
    }
    if (movement4q > 10 && movement4q < 870) {
        d4q.style.opacity = "0.9"
    }
    if (movement4r > 10 && movement4r < 870) {
        d4r.style.opacity = "0.9"
    }
    if (movement4s > 10 && movement4s < 870) {
        d4s.style.opacity = "0.9"
    }
    if (movement4t > 10 && movement4t < 870) {
        d4t.style.opacity = "0.9"
    }
    if (movement4u > 10 && movement4u < 870) {
        d4u.style.opacity = "0.9"
    }
    if (movement4v > 10 && movement4v < 870) {
        d4v.style.opacity = "0.9"
    }
    if (movement4w > 10 && movement4w < 870) {
        d4w.style.opacity = "0.9"
    }
    if (movement4x > 10 && movement4x < 870) {
        d4x.style.opacity = "0.9"
    }
    if (movement4y > 10 && movement4y < 870) {
        d4y.style.opacity = "0.9"
    }
    if (movement4z > 10 && movement4z < 870) {
        d4z.style.opacity = "0.9"
    }
    if (firstChart == 1 && chartNumber == 2) {
        document.getElementById("span16").style.color = "red";
    }
    if (firstChart == 6 && chartNumber == 6 || firstChart == 5 && chartNumber == 5 || firstChart == 4 && chartNumber == 4 || firstChart == 3 && chartNumber == 3 || firstChart == 2 && chartNumber == 2 || firstChart >= 1 && chartNumber == 1) {
        document.getElementById("span16").style.color = "rgb(173, 142, 219)";
    }
    if (chartNumber == 1 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty1;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    if (chartNumber == 2 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty2;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    if (chartNumber == 3 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty3;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    if (chartNumber == 4 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty4;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    if (chartNumber == 5 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty5;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    if (chartNumber == 6 && firstChart > 0) {
        document.getElementById("difficulty").innerHTML = "Difficulty " + difficulty6;
        document.getElementById("difficulty").style.visibility = "visible";
    }
    document.getElementById("imageContainer").style.left = bannerS + "px";
    if (accuracy.innerHTML == "Ultimate") {
        accuracy.style.color = "Yellow";
    }
    if (accuracy.innerHTML == "Fancy") {
        accuracy.style.color = "Green";
    }
    if (accuracy.innerHTML == "Stunning") {
        accuracy.style.color = "rgb(222, 91, 218)";
    }

    bubbleDiv.style.top = bubbleM + "px";
    bubbleDiv2.style.top = bubbleM2 + "px";
    bubbleDiv3.style.top = bubbleM3 + "px";
    birdDiv.style.top = bubbleM4 + "px";
    bubbleM -= scrollV / 6.7;
    bubbleM2 -= scrollV / 8.0;
    bubbleM3 -= scrollV / 5.0;
    bubbleM4 -= scrollV / 7.0;
    if (bubbleM < -800) {
        bubbleM = window.innerHeight;
        bubbleR1 = Math.ceil(Math.random() * window.innerWidth);
        bubbleDiv.style.left = bubbleR1 + "px";
    }
    if (bubbleM2 < -800) {
        bubbleM2 = window.innerHeight;
        bubbleR2 = Math.ceil(Math.random() * window.innerWidth);
        bubbleDiv2.style.left = bubbleR2 + "px";
    }
    if (bubbleM3 < -800) {
        bubbleM3 = window.innerHeight;
        bubbleR3 = Math.ceil(Math.random() * window.innerWidth);
        bubbleDiv3.style.left = bubbleR3 + "px";
    }
    if (bubbleM4 < -800) {
        bubbleR4 = Math.ceil(Math.random() * window.innerWidth);
        bubbleM4 = window.innerHeight;
        if (background2 == 0) {
            if (bubbleR4 < 40) {
                birdDiv.style.opacity = "1.0"
                bubbleDiv3.style.left = bubbleR3 + "px";
            }
            if (bubbleR4 >= 40) {
                birdDiv.style.opacity = "0.0"
                bubbleDiv3.style.left = bubbleR3 + "px";
            }
        }
    }
    if (background2 == 1) {
        bubbleDiv3.style.opacity = "0.0"
        bubbleDiv2.style.opacity = "0.0"
        bubbleDiv.style.opacity = "0.0"
    }
    if (background2 == 0) {
        bubbleDiv3.style.opacity = "1.0"
        bubbleDiv2.style.opacity = "1.0"
        bubbleDiv.style.opacity = "1.0"
    }
    if (backgroundImage.src == "")
        backgroundImage.style.opacity = "0.0"
    if (downscroll == 0) {
        movement1 -= scrollV;
        movement2 -= scrollV;

        movement3 -= scrollV;
        movement4 -= scrollV;
        movement1b -= scrollV;
        movement2b -= scrollV;
        movement3b -= scrollV;
        movement4b -= scrollV;
        movement1c -= scrollV;
        movement2c -= scrollV;
        movement3c -= scrollV;
        movement4c -= scrollV;
        movement1d -= scrollV;
        movement2d -= scrollV;
        movement3d -= scrollV;
        movement4d -= scrollV;
        movement1e -= scrollV;
        movement2e -= scrollV;
        movement3e -= scrollV;
        movement4e -= scrollV;
        movement1f -= scrollV;
        movement2f -= scrollV;
        movement3f -= scrollV;
        movement4f -= scrollV;
        movement1g -= scrollV;
        movement2g -= scrollV;
        movement3g -= scrollV;
        movement4g -= scrollV;
        movement1h -= scrollV;
        movement2h -= scrollV;
        movement3h -= scrollV;
        movement4h -= scrollV;
        movement1i -= scrollV;
        movement2i -= scrollV;
        movement3i -= scrollV;
        movement4i -= scrollV;
        movement1j -= scrollV;
        movement2j -= scrollV;
        movement3j -= scrollV;
        movement4j -= scrollV;
        movement1k -= scrollV;
        movement2k -= scrollV;
        movement3k -= scrollV;
        movement4k -= scrollV;
        movement1l -= scrollV;
        movement2l -= scrollV;
        movement3l -= scrollV;
        movement4l -= scrollV;
        movement1m -= scrollV;
        movement2m -= scrollV;
        movement3m -= scrollV;
        movement4m -= scrollV;
        movement1n -= scrollV;
        movement2n -= scrollV;
        movement3n -= scrollV;
        movement4n -= scrollV;
        movement1o -= scrollV;
        movement2o -= scrollV;
        movement3o -= scrollV;
        movement4o -= scrollV;
        movement1p -= scrollV;
        movement2p -= scrollV;
        movement3p -= scrollV;
        movement4p -= scrollV;
        movement1q -= scrollV;
        movement2q -= scrollV;
        movement3q -= scrollV;
        movement4q -= scrollV;
        movement1r -= scrollV;
        movement2r -= scrollV;
        movement3r -= scrollV;
        movement4r -= scrollV;
        movement1s -= scrollV;
        movement2s -= scrollV;
        movement3s -= scrollV;
        movement4s -= scrollV;
        movement1t -= scrollV;
        movement2t -= scrollV;
        movement3t -= scrollV;
        movement4t -= scrollV;
        movement1u -= scrollV;
        movement2u -= scrollV;
        movement3u -= scrollV;
        movement4u -= scrollV;
        movement1v -= scrollV;
        movement2v -= scrollV;
        movement3v -= scrollV;
        movement4v -= scrollV;
        movement1w -= scrollV;
        movement2w -= scrollV;
        movement3w -= scrollV;
        movement4w -= scrollV;
        movement1x -= scrollV;
        movement2x -= scrollV;
        movement3x -= scrollV;
        movement4x -= scrollV;
        movement1y -= scrollV;
        movement2y -= scrollV;
        movement3y -= scrollV;
        movement4y -= scrollV;
        movement1z -= scrollV;
        movement2z -= scrollV;
        movement3z -= scrollV;
        movement4z -= scrollV;
    }
    if (downscroll == 1) {
        movement1 += scrollV;
        movement2 += scrollV;
        movement3 += scrollV;
        movement4 += scrollV;
        movement1b += scrollV;
        movement2b += scrollV;
        movement3b += scrollV;
        movement4b += scrollV;
        movement1c += scrollV;
        movement2c += scrollV;
        movement3c += scrollV;
        movement4c += scrollV;
        movement1d += scrollV;
        movement2d += scrollV;
        movement3d += scrollV;
        movement4d += scrollV;
        movement1e += scrollV;
        movement2e += scrollV;
        movement3e += scrollV;
        movement4e += scrollV;
        movement1f += scrollV;
        movement2f += scrollV;
        movement3f += scrollV;
        movement4f += scrollV;
        movement1g += scrollV;
        movement2g += scrollV;
        movement3g += scrollV;
        movement4g += scrollV;
        movement1h += scrollV;
        movement2h += scrollV;
        movement3h += scrollV;
        movement4h += scrollV;
        movement1i += scrollV;
        movement2i += scrollV;
        movement3i += scrollV;
        movement4i += scrollV;
        movement1j += scrollV;
        movement2j += scrollV;
        movement3j += scrollV;
        movement4j += scrollV;
        movement1k += scrollV;
        movement2k += scrollV;
        movement3k += scrollV;
        movement4k += scrollV;
        movement1l += scrollV;
        movement2l += scrollV;
        movement3l += scrollV;
        movement4l += scrollV;
        movement1m += scrollV;
        movement2m += scrollV;
        movement3m += scrollV;
        movement4m += scrollV;
        movement1n += scrollV;
        movement2n += scrollV;
        movement3n += scrollV;
        movement4n += scrollV;
        movement1o += scrollV;
        movement2o += scrollV;
        movement3o += scrollV;
        movement4o += scrollV;
        movement1p += scrollV;
        movement2p += scrollV;
        movement3p += scrollV;
        movement4p += scrollV;
        movement1q += scrollV;
        movement2q += scrollV;
        movement3q += scrollV;
        movement4q += scrollV;
        movement1r += scrollV;
        movement2r += scrollV;
        movement3r += scrollV;
        movement4r += scrollV;
        movement1s += scrollV;
        movement2s += scrollV;
        movement3s += scrollV;
        movement4s += scrollV;
        movement1t += scrollV;
        movement2t += scrollV;
        movement3t += scrollV;
        movement4t += scrollV;
        movement1u += scrollV;
        movement2u += scrollV;
        movement3u += scrollV;
        movement4u += scrollV;
        movement1v += scrollV;
        movement2v += scrollV;
        movement3v += scrollV;
        movement4v += scrollV;
        movement1w += scrollV;
        movement2w += scrollV;
        movement3w += scrollV;
        movement4w += scrollV;
        movement1x += scrollV;
        movement2x += scrollV;
        movement3x += scrollV;
        movement4x += scrollV;
        movement1y += scrollV;
        movement2y += scrollV;
        movement3y += scrollV;
        movement4y += scrollV;
        movement1z += scrollV;
        movement2z += scrollV;
        movement3z += scrollV;
        movement4z += scrollV;
    }
    d1.style.height = heightV + "px";
    div.style.height = heightV + "px";
    div2.style.height = heightV + "px";
    div3.style.height = heightV + "px";
    div4.style.height = heightV + "px";
    d2.style.height = heightV + "px";
    d3.style.height = heightV + "px";
    d4.style.height = heightV + "px";
    d1b.style.height = heightV + "px";
    d2b.style.height = heightV + "px";
    d3b.style.height = heightV + "px";
    d4b.style.height = heightV + "px";
    d1c.style.height = heightV + "px";
    d2c.style.height = heightV + "px";
    d3c.style.height = heightV + "px";
    d4c.style.height = heightV + "px";
    d1d.style.height = heightV + "px";
    d2d.style.height = heightV + "px";
    d3d.style.height = heightV + "px";
    d4d.style.height = heightV + "px";
    d1e.style.height = heightV + "px";
    d2e.style.height = heightV + "px";
    d3e.style.height = heightV + "px";
    d4e.style.height = heightV + "px";
    d1f.style.height = heightV + "px";
    d2f.style.height = heightV + "px";
    d3f.style.height = heightV + "px";
    d4f.style.height = heightV + "px";
    d1g.style.height = heightV + "px";
    d2g.style.height = heightV + "px";
    d3g.style.height = heightV + "px";
    d4g.style.height = heightV + "px";
    d1h.style.height = heightV + "px";
    d2h.style.height = heightV + "px";
    d3h.style.height = heightV + "px";
    d4h.style.height = heightV + "px";
    d1i.style.height = heightV + "px";
    d2i.style.height = heightV + "px";
    d3i.style.height = heightV + "px";
    d4i.style.height = heightV + "px";
    d1j.style.height = heightV + "px";
    d2j.style.height = heightV + "px";
    d3j.style.height = heightV + "px";
    d4j.style.height = heightV + "px";
    d1k.style.height = heightV + "px";
    d2k.style.height = heightV + "px";
    d3k.style.height = heightV + "px";
    d4k.style.height = heightV + "px";
    d1l.style.height = heightV + "px";
    d2l.style.height = heightV + "px";
    d3l.style.height = heightV + "px";
    d4l.style.height = heightV + "px";
    d1m.style.height = heightV + "px";
    d2m.style.height = heightV + "px";
    d3m.style.height = heightV + "px";
    d4m.style.height = heightV + "px";
    d1n.style.height = heightV + "px";
    d2n.style.height = heightV + "px";
    d3n.style.height = heightV + "px";
    d4n.style.height = heightV + "px";
    d1o.style.height = heightV + "px";
    d2o.style.height = heightV + "px";
    d3o.style.height = heightV + "px";
    d4o.style.height = heightV + "px";
    d1p.style.height = heightV + "px";
    d2p.style.height = heightV + "px";
    d3p.style.height = heightV + "px";
    d4p.style.height = heightV + "px";
    d1q.style.height = heightV + "px";
    d2q.style.height = heightV + "px";
    d3q.style.height = heightV + "px";
    d4q.style.height = heightV + "px";
    d1r.style.height = heightV + "px";
    d2r.style.height = heightV + "px";
    d3r.style.height = heightV + "px";
    d4r.style.height = heightV + "px";
    d1s.style.height = heightV + "px";
    d2s.style.height = heightV + "px";
    d3s.style.height = heightV + "px";
    d4s.style.height = heightV + "px";
    d1t.style.height = heightV + "px";
    d2t.style.height = heightV + "px";
    d3t.style.height = heightV + "px";
    d4t.style.height = heightV + "px";
    d1u.style.height = heightV + "px";
    d2u.style.height = heightV + "px";
    d3u.style.height = heightV + "px";
    d4u.style.height = heightV + "px";
    d1v.style.height = heightV + "px";
    d2v.style.height = heightV + "px";
    d3v.style.height = heightV + "px";
    d4v.style.height = heightV + "px";
    d1w.style.height = heightV + "px";
    d2w.style.height = heightV + "px";
    d3w.style.height = heightV + "px";
    d4w.style.height = heightV + "px";
    d1x.style.height = heightV + "px";
    d2x.style.height = heightV + "px";
    d3x.style.height = heightV + "px";
    d4x.style.height = heightV + "px";
    d1y.style.height = heightV + "px";
    d2y.style.height = heightV + "px";
    d3y.style.height = heightV + "px";
    d4y.style.height = heightV + "px";
    d1z.style.height = heightV + "px";
    d2z.style.height = heightV + "px";
    d3z.style.height = heightV + "px";
    d4z.style.height = heightV + "px";
    d1.style.width = widthV + "px";
    div.style.width = widthV + "px";
    div2.style.width = widthV + "px";
    div3.style.width = widthV + "px";
    div4.style.width = widthV + "px";
    d2.style.width = widthV + "px";
    d3.style.width = widthV + "px";
    d4.style.width = widthV + "px";
    d1b.style.width = widthV + "px";
    d2b.style.width = widthV + "px";
    d3b.style.width = widthV + "px";
    d4b.style.width = widthV + "px";
    d1c.style.width = widthV + "px";
    d2c.style.width = widthV + "px";
    d3c.style.width = widthV + "px";
    d4c.style.width = widthV + "px";
    d1d.style.width = widthV + "px";
    d2d.style.width = widthV + "px";
    d3d.style.width = widthV + "px";
    d4d.style.width = widthV + "px";
    d1e.style.width = widthV + "px";
    d2e.style.width = widthV + "px";
    d3e.style.width = widthV + "px";
    d4e.style.width = widthV + "px";
    d1f.style.width = widthV + "px";
    d2f.style.width = widthV + "px";
    d3f.style.width = widthV + "px";
    d4f.style.width = widthV + "px";
    d1g.style.width = widthV + "px";
    d2g.style.width = widthV + "px";
    d3g.style.width = widthV + "px";
    d4g.style.width = widthV + "px";
    d1h.style.width = widthV + "px";
    d2h.style.width = widthV + "px";
    d3h.style.width = widthV + "px";
    d4h.style.width = widthV + "px";
    d1i.style.width = widthV + "px";
    d2i.style.width = widthV + "px";
    d3i.style.width = widthV + "px";
    d4i.style.width = widthV + "px";
    d1j.style.width = widthV + "px";
    d2j.style.width = widthV + "px";
    d3j.style.width = widthV + "px";
    d4j.style.width = widthV + "px";
    d1k.style.width = widthV + "px";
    d2k.style.width = widthV + "px";
    d3k.style.width = widthV + "px";
    d4k.style.width = widthV + "px";
    d1l.style.width = widthV + "px";
    d2l.style.width = widthV + "px";
    d3l.style.width = widthV + "px";
    d4l.style.width = widthV + "px";
    d1m.style.width = widthV + "px";
    d2m.style.width = widthV + "px";
    d3m.style.width = widthV + "px";
    d4m.style.width = widthV + "px";
    d1n.style.width = widthV + "px";
    d2n.style.width = widthV + "px";
    d3n.style.width = widthV + "px";
    d4n.style.width = widthV + "px";
    d1o.style.width = widthV + "px";
    d2o.style.width = widthV + "px";
    d3o.style.width = widthV + "px";
    d4o.style.width = widthV + "px";
    d1p.style.width = widthV + "px";
    d2p.style.width = widthV + "px";
    d3p.style.width = widthV + "px";
    d4p.style.width = widthV + "px";
    d1q.style.width = widthV + "px";
    d2q.style.width = widthV + "px";
    d3q.style.width = widthV + "px";
    d4q.style.width = widthV + "px";
    d1r.style.width = widthV + "px";
    d2r.style.width = widthV + "px";
    d3r.style.width = widthV + "px";
    d4r.style.width = widthV + "px";
    d1s.style.width = widthV + "px";
    d2s.style.width = widthV + "px";
    d3s.style.width = widthV + "px";
    d4s.style.width = widthV + "px";
    d1t.style.width = widthV + "px";
    d2t.style.width = widthV + "px";
    d3t.style.width = widthV + "px";
    d4t.style.width = widthV + "px";
    d1u.style.width = widthV + "px";
    d2u.style.width = widthV + "px";
    d3u.style.width = widthV + "px";
    d4u.style.width = widthV + "px";
    d1v.style.width = widthV + "px";
    d2v.style.width = widthV + "px";
    d3v.style.width = widthV + "px";
    d4v.style.width = widthV + "px";
    d1w.style.width = widthV + "px";
    d2w.style.width = widthV + "px";
    d3w.style.width = widthV + "px";
    d4w.style.width = widthV + "px";
    d1x.style.width = widthV + "px";
    d2x.style.width = widthV + "px";
    d3x.style.width = widthV + "px";
    d4x.style.width = widthV + "px";
    d1y.style.width = widthV + "px";
    d2y.style.width = widthV + "px";
    d3y.style.width = widthV + "px";
    d4y.style.width = widthV + "px";
    d1z.style.width = widthV + "px";
    d2z.style.width = widthV + "px";
    d3z.style.width = widthV + "px";
    d4z.style.width = widthV + "px";
    div.style.left = spacingV1 + "px";
    div2.style.left = spacingV2 + "px";
    div3.style.left = spacingV3 + "px";
    div4.style.left = spacingV4 + "px";
    d1.style.left = spacingV1 + "px";
    d2.style.left = spacingV2 + "px";
    d3.style.left = spacingV3 + "px";
    d4.style.left = spacingV4 + "px";
    d1b.style.left = spacingV1 + "px";
    d2b.style.left = spacingV2 + "px";
    d3b.style.left = spacingV3 + "px";
    d4b.style.left = spacingV4 + "px";
    d1c.style.left = spacingV1 + "px";
    d2c.style.left = spacingV2 + "px";
    d3c.style.left = spacingV3 + "px";
    d4c.style.left = spacingV4 + "px";
    d1d.style.left = spacingV1 + "px";
    d2d.style.left = spacingV2 + "px";
    d3d.style.left = spacingV3 + "px";
    d4d.style.left = spacingV4 + "px";
    d1e.style.left = spacingV1 + "px";
    d2e.style.left = spacingV2 + "px";
    d3e.style.left = spacingV3 + "px";
    d4e.style.left = spacingV4 + "px";
    d1f.style.left = spacingV1 + "px";
    d2f.style.left = spacingV2 + "px";
    d3f.style.left = spacingV3 + "px";
    d4f.style.left = spacingV4 + "px";
    d1g.style.left = spacingV1 + "px";
    d2g.style.left = spacingV2 + "px";
    d3g.style.left = spacingV3 + "px";
    d4g.style.left = spacingV4 + "px";
    d1h.style.left = spacingV1 + "px";
    d2h.style.left = spacingV2 + "px";
    d3h.style.left = spacingV3 + "px";
    d4h.style.left = spacingV4 + "px";
    d1i.style.left = spacingV1 + "px";
    d2i.style.left = spacingV2 + "px";
    d3i.style.left = spacingV3 + "px";
    d4i.style.left = spacingV4 + "px";
    d1j.style.left = spacingV1 + "px";
    d2j.style.left = spacingV2 + "px";
    d3j.style.left = spacingV3 + "px";
    d4j.style.left = spacingV4 + "px";
    d1k.style.left = spacingV1 + "px";
    d2k.style.left = spacingV2 + "px";
    d3k.style.left = spacingV3 + "px";
    d4k.style.left = spacingV4 + "px";
    d1l.style.left = spacingV1 + "px";
    d2l.style.left = spacingV2 + "px";
    d3l.style.left = spacingV3 + "px";
    d4l.style.left = spacingV4 + "px";
    d1m.style.left = spacingV1 + "px";
    d2m.style.left = spacingV2 + "px";
    d3m.style.left = spacingV3 + "px";
    d4m.style.left = spacingV4 + "px";
    d1n.style.left = spacingV1 + "px";
    d2n.style.left = spacingV2 + "px";
    d3n.style.left = spacingV3 + "px";
    d4n.style.left = spacingV4 + "px";
    d1o.style.left = spacingV1 + "px";
    d2o.style.left = spacingV2 + "px";
    d3o.style.left = spacingV3 + "px";
    d4o.style.left = spacingV4 + "px";
    d1p.style.left = spacingV1 + "px";
    d2p.style.left = spacingV2 + "px";
    d3p.style.left = spacingV3 + "px";
    d4p.style.left = spacingV4 + "px";
    d1q.style.left = spacingV1 + "px";
    d2q.style.left = spacingV2 + "px";
    d3q.style.left = spacingV3 + "px";
    d4q.style.left = spacingV4 + "px";
    d1r.style.left = spacingV1 + "px";
    d2r.style.left = spacingV2 + "px";
    d3r.style.left = spacingV3 + "px";
    d4r.style.left = spacingV4 + "px";
    d1s.style.left = spacingV1 + "px";
    d2s.style.left = spacingV2 + "px";
    d3s.style.left = spacingV3 + "px";
    d4s.style.left = spacingV4 + "px";
    d1t.style.left = spacingV1 + "px";
    d2t.style.left = spacingV2 + "px";
    d3t.style.left = spacingV3 + "px";
    d4t.style.left = spacingV4 + "px";
    d1u.style.left = spacingV1 + "px";
    d2u.style.left = spacingV2 + "px";
    d3u.style.left = spacingV3 + "px";
    d4u.style.left = spacingV4 + "px";
    d1v.style.left = spacingV1 + "px";
    d2v.style.left = spacingV2 + "px";
    d3v.style.left = spacingV3 + "px";
    d4v.style.left = spacingV4 + "px";
    d1w.style.left = spacingV1 + "px";
    d2w.style.left = spacingV2 + "px";
    d3w.style.left = spacingV3 + "px";
    d4w.style.left = spacingV4 + "px";
    d1x.style.left = spacingV1 + "px";
    d2x.style.left = spacingV2 + "px";
    d3x.style.left = spacingV3 + "px";
    d4x.style.left = spacingV4 + "px";
    d1y.style.left = spacingV1 + "px";
    d2y.style.left = spacingV2 + "px";
    d3y.style.left = spacingV3 + "px";
    d4y.style.left = spacingV4 + "px";
    d1z.style.left = spacingV1 + "px";
    d2z.style.left = spacingV2 + "px";
    d3z.style.left = spacingV3 + "px";
    d4z.style.left = spacingV4 + "px";
    mainDiv.style.width = spacingV5 + "px";
    document.getElementById("imageContainer").style.left = bannerS + "px";
    screenCut.style.width = screenCutWidth + "px";
    accuracyContainer.style.left = accuracyContainerSpacing + "px";
    paContainer.style.left = spacingV6 + "px";
    document.getElementById("resultsContainer").style.left = spacingResults + "px";
    document.getElementById("listContainer").style.left = spacingList + "px";
    div.style.borderRadius = radiusV + "px";
    div2.style.borderRadius = radiusV + "px";
    div3.style.borderRadius = radiusV + "px";
    div4.style.borderRadius = radiusV + "px";
    d1.style.borderRadius = radiusV + "px";
    d2.style.borderRadius = radiusV + "px";
    d3.style.borderRadius = radiusV + "px";
    d4.style.borderRadius = radiusV + "px";
    d1b.style.borderRadius = radiusV + "px";
    d2b.style.borderRadius = radiusV + "px";
    d3b.style.borderRadius = radiusV + "px";
    d4b.style.borderRadius = radiusV + "px";
    d1c.style.borderRadius = radiusV + "px";
    d2c.style.borderRadius = radiusV + "px";
    d3c.style.borderRadius = radiusV + "px";
    d4c.style.borderRadius = radiusV + "px";
    d1d.style.borderRadius = radiusV + "px";
    d2d.style.borderRadius = radiusV + "px";
    d3d.style.borderRadius = radiusV + "px";
    d4d.style.borderRadius = radiusV + "px";
    d1e.style.borderRadius = radiusV + "px";
    d2e.style.borderRadius = radiusV + "px";
    d3e.style.borderRadius = radiusV + "px";
    d4e.style.borderRadius = radiusV + "px";
    d1f.style.borderRadius = radiusV + "px";
    d2f.style.borderRadius = radiusV + "px";
    d3f.style.borderRadius = radiusV + "px";
    d4f.style.borderRadius = radiusV + "px";
    d1g.style.borderRadius = radiusV + "px";
    d2g.style.borderRadius = radiusV + "px";
    d3g.style.borderRadius = radiusV + "px";
    d4g.style.borderRadius = radiusV + "px";
    d1h.style.borderRadius = radiusV + "px";
    d2h.style.borderRadius = radiusV + "px";
    d3h.style.borderRadius = radiusV + "px";
    d4h.style.borderRadius = radiusV + "px";
    d1i.style.borderRadius = radiusV + "px";
    d2i.style.borderRadius = radiusV + "px";
    d3i.style.borderRadius = radiusV + "px";
    d4i.style.borderRadius = radiusV + "px";
    d1j.style.borderRadius = radiusV + "px";
    d2j.style.borderRadius = radiusV + "px";
    d3j.style.borderRadius = radiusV + "px";
    d4j.style.borderRadius = radiusV + "px";
    d1k.style.borderRadius = radiusV + "px";
    d2k.style.borderRadius = radiusV + "px";
    d3k.style.borderRadius = radiusV + "px";
    d4k.style.borderRadius = radiusV + "px";
    d1l.style.borderRadius = radiusV + "px";
    d2l.style.borderRadius = radiusV + "px";
    d3l.style.borderRadius = radiusV + "px";
    d4l.style.borderRadius = radiusV + "px";
    d1m.style.borderRadius = radiusV + "px";
    d2m.style.borderRadius = radiusV + "px";
    d3m.style.borderRadius = radiusV + "px";
    d4m.style.borderRadius = radiusV + "px";
    d1n.style.borderRadius = radiusV + "px";
    d2n.style.borderRadius = radiusV + "px";
    d3n.style.borderRadius = radiusV + "px";
    d4n.style.borderRadius = radiusV + "px";
    d1o.style.borderRadius = radiusV + "px";
    d2o.style.borderRadius = radiusV + "px";
    d3o.style.borderRadius = radiusV + "px";
    d4o.style.borderRadius = radiusV + "px";
    d1p.style.borderRadius = radiusV + "px";
    d2p.style.borderRadius = radiusV + "px";
    d3p.style.borderRadius = radiusV + "px";
    d4p.style.borderRadius = radiusV + "px";
    d1q.style.borderRadius = radiusV + "px";
    d2q.style.borderRadius = radiusV + "px";
    d3q.style.borderRadius = radiusV + "px";
    d4q.style.borderRadius = radiusV + "px";
    d1r.style.borderRadius = radiusV + "px";
    d2r.style.borderRadius = radiusV + "px";
    d3r.style.borderRadius = radiusV + "px";
    d4r.style.borderRadius = radiusV + "px";
    d1s.style.borderRadius = radiusV + "px";
    d2s.style.borderRadius = radiusV + "px";
    d3s.style.borderRadius = radiusV + "px";
    d4s.style.borderRadius = radiusV + "px";
    d1t.style.borderRadius = radiusV + "px";
    d2t.style.borderRadius = radiusV + "px";
    d3t.style.borderRadius = radiusV + "px";
    d4t.style.borderRadius = radiusV + "px";
    d1u.style.borderRadius = radiusV + "px";
    d2u.style.borderRadius = radiusV + "px";
    d3u.style.borderRadius = radiusV + "px";
    d4u.style.borderRadius = radiusV + "px";
    d1v.style.borderRadius = radiusV + "px";
    d2v.style.borderRadius = radiusV + "px";
    d3v.style.borderRadius = radiusV + "px";
    d4v.style.borderRadius = radiusV + "px";
    d1w.style.borderRadius = radiusV + "px";
    d2w.style.borderRadius = radiusV + "px";
    d3w.style.borderRadius = radiusV + "px";
    d4w.style.borderRadius = radiusV + "px";
    d1x.style.borderRadius = radiusV + "px";
    d2x.style.borderRadius = radiusV + "px";
    d3x.style.borderRadius = radiusV + "px";
    d4x.style.borderRadius = radiusV + "px";
    d1y.style.borderRadius = radiusV + "px";
    d2y.style.borderRadius = radiusV + "px";
    d3y.style.borderRadius = radiusV + "px";
    d4y.style.borderRadius = radiusV + "px";
    d1z.style.borderRadius = radiusV + "px";
    d2z.style.borderRadius = radiusV + "px";
    d3z.style.borderRadius = radiusV + "px";
    d4z.style.borderRadius = radiusV + "px";
    d1.style.top = movement1 + "px";
    d2.style.top = movement2 + "px";
    d3.style.top = movement3 + "px";
    d4.style.top = movement4 + "px";
    d1b.style.top = movement1b + "px";
    d2b.style.top = movement2b + "px";
    d3b.style.top = movement3b + "px";
    d4b.style.top = movement4b + "px";
    d1c.style.top = movement1c + "px";
    d2c.style.top = movement2c + "px";
    d3c.style.top = movement3c + "px";
    d4c.style.top = movement4c + "px";
    d1d.style.top = movement1d + "px";
    d2d.style.top = movement2d + "px";
    d3d.style.top = movement3d + "px";
    d4d.style.top = movement4d + "px";
    d1e.style.top = movement1e + "px";
    d2e.style.top = movement2e + "px";
    d3e.style.top = movement3e + "px";
    d4e.style.top = movement4e + "px";
    d1f.style.top = movement1f + "px";
    d2f.style.top = movement2f + "px";
    d3f.style.top = movement3f + "px";
    d4f.style.top = movement4f + "px";
    d1g.style.top = movement1g + "px";
    d2g.style.top = movement2g + "px";
    d3g.style.top = movement3g + "px";
    d4g.style.top = movement4g + "px";
    d1h.style.top = movement1h + "px";
    d2h.style.top = movement2h + "px";
    d3h.style.top = movement3h + "px";
    d4h.style.top = movement4h + "px";
    d1i.style.top = movement1i + "px";
    d2i.style.top = movement2i + "px";
    d3i.style.top = movement3i + "px";
    d4i.style.top = movement4i + "px";
    d1j.style.top = movement1j + "px";
    d2j.style.top = movement2j + "px";
    d3j.style.top = movement3j + "px";
    d4j.style.top = movement4j + "px";
    d1k.style.top = movement1k + "px";
    d2k.style.top = movement2k + "px";
    d3k.style.top = movement3k + "px";
    d4k.style.top = movement4k + "px";
    d1l.style.top = movement1l + "px";
    d2l.style.top = movement2l + "px";
    d3l.style.top = movement3l + "px";
    d4l.style.top = movement4l + "px";
    d1m.style.top = movement1m + "px";
    d2m.style.top = movement2m + "px";
    d3m.style.top = movement3m + "px";
    d4m.style.top = movement4m + "px";
    d1n.style.top = movement1n + "px";
    d2n.style.top = movement2n + "px";
    d3n.style.top = movement3n + "px";
    d4n.style.top = movement4n + "px";
    d1o.style.top = movement1o + "px";
    d2o.style.top = movement2o + "px";
    d3o.style.top = movement3o + "px";
    d4o.style.top = movement4o + "px";
    d1p.style.top = movement1p + "px";
    d2p.style.top = movement2p + "px";
    d3p.style.top = movement3p + "px";
    d4p.style.top = movement4p + "px";
    d1q.style.top = movement1q + "px";
    d2q.style.top = movement2q + "px";
    d3q.style.top = movement3q + "px";
    d4q.style.top = movement4q + "px";
    d1r.style.top = movement1r + "px";
    d2r.style.top = movement2r + "px";
    d3r.style.top = movement3r + "px";
    d4r.style.top = movement4r + "px";
    d1s.style.top = movement1s + "px";
    d2s.style.top = movement2s + "px";
    d3s.style.top = movement3s + "px";
    d4s.style.top = movement4s + "px";
    d1t.style.top = movement1t + "px";
    d2t.style.top = movement2t + "px";
    d3t.style.top = movement3t + "px";
    d4t.style.top = movement4t + "px";
    d1u.style.top = movement1u + "px";
    d2u.style.top = movement2u + "px";
    d3u.style.top = movement3u + "px";
    d4u.style.top = movement4u + "px";
    d1v.style.top = movement1v + "px";
    d2v.style.top = movement2v + "px";
    d3v.style.top = movement3v + "px";
    d4v.style.top = movement4v + "px";
    d1w.style.top = movement1w + "px";
    d2w.style.top = movement2w + "px";
    d3w.style.top = movement3w + "px";
    d4w.style.top = movement4w + "px";
    d1x.style.top = movement1x + "px";
    d2x.style.top = movement2x + "px";
    d3x.style.top = movement3x + "px";
    d4x.style.top = movement4x + "px";
    d1y.style.top = movement1y + "px";
    d2y.style.top = movement2y + "px";
    d3y.style.top = movement3y + "px";
    d4y.style.top = movement4y + "px";
    d1z.style.top = movement1z + "px";
    d2z.style.top = movement2z + "px";
    d3z.style.top = movement3z + "px";
    d4z.style.top = movement4z + "px";
    document.getElementById("mainDiv").style.background = "hsla(309, " + backgroundV + "%, 20%, 1)";
    if (backgroundV <= 0) {
        document.getElementById("mainDiv").style.background = "black"
    }
    if (optionsV == 1) {
        document.getElementById("options").style.visibility = "visible";
        document.getElementById("optionsHidden").style.visibility = "hidden";
    }
    if (optionsV == 0) {
        document.getElementById("options").style.visibility = "hidden";
        document.getElementById("optionsHidden").style.visibility = "visible";
    }
    document.body.appendChild(d4);
    document.body.appendChild(d3);
    document.body.appendChild(d2);
    document.body.appendChild(d1);
    document.body.appendChild(d4b);
    document.body.appendChild(d3b);
    document.body.appendChild(d2b);
    document.body.appendChild(d1b);
    document.body.appendChild(d4c);
    document.body.appendChild(d3c);
    document.body.appendChild(d2c);
    document.body.appendChild(d1c);
    document.body.appendChild(d4d);
    document.body.appendChild(d3d);
    document.body.appendChild(d2d);
    document.body.appendChild(d1d);
    document.body.appendChild(d4e);
    document.body.appendChild(d3e);
    document.body.appendChild(d2e);
    document.body.appendChild(d1e);
    document.body.appendChild(d4f);
    document.body.appendChild(d3f);
    document.body.appendChild(d2f);
    document.body.appendChild(d1f);
    document.body.appendChild(d4g);
    document.body.appendChild(d3g);
    document.body.appendChild(d2g);
    document.body.appendChild(d1g);
    document.body.appendChild(d4h);
    document.body.appendChild(d3h);
    document.body.appendChild(d2h);
    document.body.appendChild(d1h);
    document.body.appendChild(d4i);
    document.body.appendChild(d3i);
    document.body.appendChild(d2i);
    document.body.appendChild(d1i);
    document.body.appendChild(d4j);
    document.body.appendChild(d3j);
    document.body.appendChild(d2j);
    document.body.appendChild(d1j);
    document.body.appendChild(d4k);
    document.body.appendChild(d3k);
    document.body.appendChild(d2k);
    document.body.appendChild(d1k);
    document.body.appendChild(d4l);
    document.body.appendChild(d3l);
    document.body.appendChild(d2l);
    document.body.appendChild(d1l);
    document.body.appendChild(d4m);
    document.body.appendChild(d3m);
    document.body.appendChild(d2m);
    document.body.appendChild(d1m);
    document.body.appendChild(d4n);
    document.body.appendChild(d3n);
    document.body.appendChild(d2n);
    document.body.appendChild(d1n);
    document.body.appendChild(d4o);
    document.body.appendChild(d3o);
    document.body.appendChild(d2o);
    document.body.appendChild(d1o);
    document.body.appendChild(d4p);
    document.body.appendChild(d3p);
    document.body.appendChild(d2p);
    document.body.appendChild(d1p);
    document.body.appendChild(d4q);
    document.body.appendChild(d3q);
    document.body.appendChild(d2q);
    document.body.appendChild(d1q);
    document.body.appendChild(d4r);
    document.body.appendChild(d3r);
    document.body.appendChild(d2r);
    document.body.appendChild(d1r);
    document.body.appendChild(d4s);
    document.body.appendChild(d3s);
    document.body.appendChild(d2s);
    document.body.appendChild(d1s);
    document.body.appendChild(d4t);
    document.body.appendChild(d3t);
    document.body.appendChild(d2t);
    document.body.appendChild(d1t);
    document.body.appendChild(d4u);
    document.body.appendChild(d3u);
    document.body.appendChild(d2u);
    document.body.appendChild(d1u);
    document.body.appendChild(d4v);
    document.body.appendChild(d3v);
    document.body.appendChild(d2v);
    document.body.appendChild(d1v);
    document.body.appendChild(d4w);
    document.body.appendChild(d3w);
    document.body.appendChild(d2w);
    document.body.appendChild(d1w);
    document.body.appendChild(d4x);
    document.body.appendChild(d3x);
    document.body.appendChild(d2x);
    document.body.appendChild(d1x);
    document.body.appendChild(d4y);
    document.body.appendChild(d3y);
    document.body.appendChild(d2y);
    document.body.appendChild(d1y);
    document.body.appendChild(d4z);
    document.body.appendChild(d3z);
    document.body.appendChild(d2z);
    document.body.appendChild(d1z);
    // console.log(movement4, movement4b, movement4c, movement4d, movement4e, movement4f, movement4g, movement4h)
    // document.getElementById("div2").innerHTML = miss;
    // document.getElementById("div3").innerHTML = hit;
    if (downscroll == 0) {
        if (movement1 < -200 && movement1 > -250) {
            movement1 = 10000000;
            miss += 1;
        }
        if (movement1b < -200 && movement1b > -250) {
            movement1b = 10000000;
            miss += 1;
        }
        if (movement1c < -200 && movement1c > -250) {
            miss += 1;
            movement1c = 10000000;
        }
        if (movement1d < -200 && movement1d > -250) {
            miss += 1;
            movement1d = 10000000;
        }
        if (movement2 < -200 && movement2 > -250) {
            miss += 1;
            movement2 = 10000000;
        }
        if (movement2b < -200 && movement2b > -250) {
            miss += 1;
            movement2b = 10000000;
        }
        if (movement2c < -200 && movement2c > -250) {
            miss += 1;
            movement2c = 10000000;
        }
        if (movement2d < -200 && movement2d > -250) {
            miss += 1;
            movement2d = 10000000;
        }
        if (movement3 < -200 && movement3 > -250) {
            miss += 1;
            movement3 = 10000000;
        }
        if (movement3b < -200 && movement3b > -250) {
            miss += 1;
            movement3b = 10000000;
        }
        if (movement3c < -200 && movement3c > -250) {
            miss += 1;
            movement3c = 10000000;
        }
        if (movement3d < -200 && movement3d > -250) {
            miss += 1;
            movement3d = 10000000;
        }
        if (movement4 < -200 && movement4 > -250) {
            miss += 1;
            movement4 = 10000000;
        }
        if (movement4b < -200 && movement4b > -250) {
            miss += 1;
            movement4b = 10000000;
        }
        if (movement4c < -200 && movement4c > -250) {
            miss += 1;
            movement4c = 10000000;
        }
        if (movement4d < -200 && movement4d > -250) {
            miss += 1;
            movement4d = 10000000;
        }
        if (movement1e < -200 && movement1e > -250) {
            miss += 1;
            movement1e = 10000000;
        }
        if (movement2e < -200 && movement2e > -250) {
            miss += 1;
            movement2e = 10000000;
        }
        if (movement3e < -200 && movement3e > -250) {
            miss += 1;
            movement3e = 10000000;
        }
        if (movement4e < -200 && movement4e > -250) {
            miss += 1;
            movement4e = 10000000;
        }
        if (movement1f < -200 && movement1f > -250) {
            miss += 1;
            movement1f = 10000000;
        }
        if (movement2f < -200 && movement2f > -250) {
            miss += 1;
            movement2f = 10000000;
        }
        if (movement3f < -200 && movement3f > -250) {
            miss += 1;
            movement3f = 10000000;
        }
        if (movement4f < -200 && movement4f > -250) {
            miss += 1;
            movement4f = 10000000;
        }
        if (movement1g < -200 && movement1g > -250) {
            miss += 1;
            movement1g = 10000000;
        }
        if (movement2g < -200 && movement2g > -250) {
            miss += 1;
            movement2g = 10000000;
        }
        if (movement3g < -200 && movement3g > -250) {
            miss += 1;
            movement3g = 10000000;
        }
        if (movement4g < -200 && movement4g > -250) {
            miss += 1;
            movement4g = 10000000;
        }
        if (movement1h < -200 && movement1h > -250) {
            miss += 1;
            movement1h = 10000000;
        }
        if (movement2h < -200 && movement2h > -250) {
            miss += 1;
            movement2h = 10000000;
        }
        if (movement3h < -200 && movement3h > -250) {
            miss += 1;
            movement3h = 10000000;
        }
        if (movement4h < -200 && movement4h > -250) {
            miss += 1;
            movement4h = 10000000;
        }
        if (movement1i < -200 && movement1i > -250) {
            miss += 1;
            movement1i = 10000000;
        }
        if (movement2i < -200 && movement2i > -250) {
            miss += 1;
            movement2i = 10000000;
        }
        if (movement3i < -200 && movement3i > -250) {
            miss += 1;
            movement3i = 10000000;
        }
        if (movement4i < -200 && movement4i > -250) {
            miss += 1;
            movement4i = 10000000;
        }
        if (movement1j < -200 && movement1j > -250) {
            miss += 1;
            movement1j = 10000000;
        }
        if (movement2j < -200 && movement2j > -250) {
            miss += 1;
            movement2j = 10000000;
        }
        if (movement3j < -200 && movement3j > -250) {
            miss += 1;
            movement3j = 10000000;
        }
        if (movement4j < -200 && movement4j > -250) {
            miss += 1;
            movement4j = 10000000;
        }
        if (movement1k < -200 && movement1k > -250) {
            miss += 1;
            movement1k = 10000000;
        }
        if (movement2k < -200 && movement2k > -250) {
            miss += 1;
            movement2k = 10000000;
        }
        if (movement3k < -200 && movement3k > -250) {
            miss += 1;
            movement3k = 10000000;
        }
        if (movement4k < -200 && movement4k > -250) {
            miss += 1;
            movement4K = 10000000;
        }
        if (movement1l < -200 && movement1l > -250) {
            miss += 1;
            movement1l = 10000000;
        }
        if (movement2l < -200 && movement2l > -250) {
            miss += 1;
            movement2l = 10000000;
        }
        if (movement3l < -200 && movement3l > -250) {
            miss += 1;
            movement3l = 10000000;
        }
        if (movement4l < -200 && movement4l > -250) {
            miss += 1;
            movement4l = 10000000;
        }
        if (movement1m < -200 && movement1m > -250) {
            miss += 1;
            movement1m = 10000000;
        }
        if (movement2m < -200 && movement2m > -250) {
            miss += 1;
            movement2m = 10000000;
        }
        if (movement3m < -200 && movement3m > -250) {
            miss += 1;
            movement3m = 10000000;
        }
        if (movement4m < -200 && movement4m > -250) {
            miss += 1;
            movement4m = 10000000;
        }
        if (movement1n < -200 && movement1n > -250) {
            miss += 1;
            movement1n = 10000000;
        }
        if (movement2n < -200 && movement2n > -250) {
            miss += 1;
            movement2n = 10000000;
        }
        if (movement3n < -200 && movement3n > -250) {
            miss += 1;
            movement3n = 10000000;
        }
        if (movement4n < -200 && movement4n > -250) {
            miss += 1;
            movement4n = 10000000;
        }
        if (movement1o < -200 && movement1o > -250) {
            miss += 1;
            movement1o = 10000000;
        }
        if (movement2o < -200 && movement2o > -250) {
            miss += 1;
            movement2o = 10000000;
        }
        if (movement3o < -200 && movement3o > -250) {
            miss += 1;
            movement3o = 10000000;
        }
        if (movement4o < -200 && movement4o > -250) {
            miss += 1;
            movement4o = 10000000;
        }
        if (movement1p < -200 && movement1p > -250) {
            miss += 1;
            movement1p = 10000000;
        }
        if (movement2p < -200 && movement2p > -250) {
            miss += 1;
            movement2p = 10000000;
        }
        if (movement3p < -200 && movement3p > -250) {
            miss += 1;
            movement3p = 10000000;
        }
        if (movement4p < -200 && movement4p > -250) {
            miss += 1;
            movement4p = 10000000;
        }
        if (movement1q < -200 && movement1q > -250) {
            miss += 1;
            movement1q = 10000000;
        }
        if (movement2q < -200 && movement2q > -250) {
            miss += 1;
            movement2q = 10000000;
        }
        if (movement3q < -200 && movement3q > -250) {
            miss += 1;
            movement3q = 10000000;
        }
        if (movement4q < -200 && movement4q > -250) {
            miss += 1;
            movement4q = 10000000;
        }
        if (movement1r < -200 && movement1r > -250) {
            miss += 1;
            movement1r = 10000000;
        }
        if (movement2r < -200 && movement2r > -250) {
            miss += 1;
            movement2r = 10000000;
        }
        if (movement3r < -200 && movement3r > -250) {
            miss += 1;
            movement3r = 10000000;
        }
        if (movement4r < -200 && movement4r > -250) {
            miss += 1;
            movement4r = 10000000;
        }
        if (movement1s < -200 && movement1s > -250) {
            miss += 1;
            movement1s = 10000000;
        }
        if (movement2s < -200 && movement2s > -250) {
            miss += 1;
            movement2s = 10000000;
        }
        if (movement3s < -200 && movement3s > -250) {
            miss += 1;
            movement3s = 10000000;
        }
        if (movement4s < -200 && movement4s > -250) {
            miss += 1;
            movement4s = 10000000;
        }
        if (movement1t < -200 && movement1t > -250) {
            miss += 1;
            movement1t = 10000000;
        }
        if (movement2t < -200 && movement2t > -250) {
            miss += 1;
            movement2t = 10000000;
        }
        if (movement3t < -200 && movement3t > -250) {
            miss += 1;
            movement3t = 10000000;
        }
        if (movement4t < -200 && movement4t > -250) {
            miss += 1;
            movement4t = 10000000;
        }
        if (movement1u < -200 && movement1u > -250) {
            miss += 1;
            movement1u = 10000000;
        }
        if (movement2u < -200 && movement2u > -250) {
            miss += 1;
            movement2u = 10000000;
        }
        if (movement3u < -200 && movement3u > -250) {
            miss += 1;
            movement3u = 10000000;
        }
        if (movement4u < -200 && movement4u > -250) {
            miss += 1;
            movement4u = 10000000;
        }
        if (movement1v < -200 && movement1v > -250) {
            miss += 1;
            movement1v = 10000000;
        }
        if (movement2v < -200 && movement2v > -250) {
            miss += 1;
            movement2v = 10000000;
        }
        if (movement3v < -200 && movement3v > -250) {
            miss += 1;
            movement3v = 10000000;
        }
        if (movement4v < -200 && movement4v > -250) {
            miss += 1;
            movement4v = 10000000;
        }
        if (movement1w < -200 && movement1w > -250) {
            miss += 1;
            movement1w = 10000000;
        }
        if (movement2w < -200 && movement2w > -250) {
            miss += 1;
            movement2w = 10000000;
        }
        if (movement3w < -200 && movement3w > -250) {
            miss += 1;
            movement3w = 10000000;
        }
        if (movement4w < -200 && movement4w > -250) {
            miss += 1;
            movement4w = 10000000;
        }
        if (movement1x < -200 && movement1x > -250) {
            miss += 1;
            movement1x = 10000000;
        }
        if (movement2x < -200 && movement2x > -250) {
            miss += 1;
            movement2x = 10000000;
        }
        if (movement3x < -200 && movement3x > -250) {
            miss += 1;
            movement3x = 10000000;
        }
        if (movement4x < -200 && movement4x > -250) {
            miss += 1;
            movement4x = 10000000;
        }
        if (movement1y < -200 && movement1y > -250) {
            miss += 1;
            movement1y = 10000000;
        }
        if (movement2y < -200 && movement2y > -250) {
            miss += 1;
            movement2y = 10000000;
        }
        if (movement3y < -200 && movement3y > -250) {
            miss += 1;
            movement3y = 10000000;
        }
        if (movement4y < -200 && movement4y > -250) {
            miss += 1;
            movement4y = 10000000;
        }
        if (movement1z < -200 && movement1z > -250) {
            miss += 1;
            movement1z = 10000000;
        }
        if (movement2z < -200 && movement2z > -250) {
            miss += 1;
            movement2z = 10000000;
        }
        if (movement3z < -200 && movement3z > -250) {
            miss += 1;
            movement3z = 10000000;
        }
        if (movement4z < -200 && movement4z > -250) {
            miss += 1;
            movement4z = 10000000;
        }
    }
    if (downscroll == 1) {
        if (movement1 > 1150 && movement1 < 1200) {
            movement1 = -10000000;
            miss += 1;
        }
        if (movement1b > 1150 && movement1b < 1200) {
            movement1b = -10000000;
            miss += 1;
        }
        if (movement1c > 1150 && movement1c < 1200) {
            miss += 1;
            movement1c = -10000000;
        }
        if (movement1d > 1150 && movement1d < 1200) {
            miss += 1;
            movement1d = -10000000;
        }
        if (movement2 > 1150 && movement2 < 1200) {
            miss += 1;
            movement2 = -10000000;
        }
        if (movement2b > 1150 && movement2b < 1200) {
            miss += 1;
            movement2b = -10000000;
        }
        if (movement2c > 1150 && movement2c < 1200) {
            miss += 1;
            movement2c = -10000000;
        }
        if (movement2d > 1150 && movement2d < 1200) {
            miss += 1;
            movement2d = -10000000;
        }
        if (movement3 > 1150 && movement3 < 1200) {
            miss += 1;
            movement3 = -10000000;
        }
        if (movement3b > 1150 && movement3b < 1200) {
            miss += 1;
            movement3b = -10000000;
        }
        if (movement3c > 1150 && movement3c < 1200) {
            miss += 1;
            movement3c = -10000000;
        }
        if (movement3d > 1150 && movement3d < 1200) {
            miss += 1;
            movement3d = -10000000;
        }
        if (movement4 > 1150 && movement4 < 1200) {
            miss += 1;
            movement4 = -10000000;
        }
        if (movement4b > 1150 && movement4b < 1200) {
            miss += 1;
            movement4b = -10000000;
        }
        if (movement4c > 1150 && movement4c < 1200) {
            miss += 1;
            movement4c = -10000000;
        }
        if (movement4d > 1150 && movement4d < 1200) {
            miss += 1;
            movement4d = -10000000;
        }
        if (movement1e > 1150 && movement1e < 1200) {
            miss += 1;
            movement1e = -10000000;
        }
        if (movement2e > 1150 && movement2e < 1200) {
            miss += 1;
            movement2e = -10000000;
        }
        if (movement3e > 1150 && movement3e < 1200) {
            miss += 1;
            movement3e = -10000000;
        }
        if (movement4e > 1150 && movement4e < 1200) {
            miss += 1;
            movement4e = -10000000;
        }
        if (movement1f > 1150 && movement1f < 1200) {
            miss += 1;
            movement1f = -10000000;
        }
        if (movement2f > 1150 && movement2f < 1200) {
            miss += 1;
            movement2f = -10000000;
        }
        if (movement3f > 1150 && movement3f < 1200) {
            miss += 1;
            movement3f = -10000000;
        }
        if (movement4f > 1150 && movement4f < 1200) {
            miss += 1;
            movement4f = -10000000;
        }
        if (movement1g > 1150 && movement1g < 1200) {
            miss += 1;
            movement1g = -10000000;
        }
        if (movement2g > 1150 && movement2g < 1200) {
            miss += 1;
            movement2g = -10000000;
        }
        if (movement3g > 1150 && movement3g < 1200) {
            miss += 1;
            movement3g = -10000000;
        }
        if (movement4g > 1150 && movement4g < 1200) {
            miss += 1;
            movement4g = -10000000;
        }
        if (movement1h > 1150 && movement1h < 1200) {
            miss += 1;
            movement1h = -10000000;
        }
        if (movement2h > 1150 && movement2h < 1200) {
            miss += 1;
            movement2h = -10000000;
        }
        if (movement3h > 1150 && movement3h < 1200) {
            miss += 1;
            movement3h = -10000000;
        }
        if (movement4h > 1150 && movement4h < 1200) {
            miss += 1;
            movement4h = -10000000;
        }
        if (movement1i > 1150 && movement1i < 1200) {
            miss += 1;
            movement1i = -10000000;
        }
        if (movement2i > 1150 && movement2i < 1200) {
            miss += 1;
            movement2i = -10000000;
        }
        if (movement3i > 1150 && movement3i < 1200) {
            miss += 1;
            movement3i = -10000000;
        }
        if (movement4i > 1150 && movement4i < 1200) {
            miss += 1;
            movement4i = -10000000;
        }
        if (movement1j > 1150 && movement1j < 1200) {
            miss += 1;
            movement1j = -10000000;
        }
        if (movement2j > 1150 && movement2j < 1200) {
            miss += 1;
            movement2j = -10000000;
        }
        if (movement3j > 1150 && movement3j < 1200) {
            miss += 1;
            movement3j = -10000000;
        }
        if (movement4j > 1150 && movement4j < 1200) {
            miss += 1;
            movement4j = -10000000;
        }
        if (movement1k > 1150 && movement1k < 1200) {
            miss += 1;
            movement1k = -10000000;
        }
        if (movement2k > 1150 && movement2k < 1200) {
            miss += 1;
            movement2k = -10000000;
        }
        if (movement3k > 1150 && movement3k < 1200) {
            miss += 1;
            movement3k = -10000000;
        }
        if (movement4k > 1150 && movement4k < 1200) {
            miss += 1;
            movement4k = -10000000;
        }
        if (movement1l > 1150 && movement1l < 1200) {
            miss += 1;
            movement1l = -10000000;
        }
        if (movement2l > 1150 && movement2l < 1200) {
            miss += 1;
            movement2l = -10000000;
        }
        if (movement3l > 1150 && movement3l < 1200) {
            miss += 1;
            movement3l = -10000000;
        }
        if (movement4l > 1150 && movement4l < 1200) {
            miss += 1;
            movement4l = -10000000;
        }
        if (movement1m > 1150 && movement1m < 1200) {
            miss += 1;
            movement1m = -10000000;
        }
        if (movement2m > 1150 && movement2m < 1200) {
            miss += 1;
            movement2m = -10000000;
        }
        if (movement3m > 1150 && movement3m < 1200) {
            miss += 1;
            movement3m = -10000000;
        }
        if (movement4m > 1150 && movement4m < 1200) {
            miss += 1;
            movement4m = -10000000;
        }
        if (movement1n > 1150 && movement1n < 1200) {
            miss += 1;
            movement1n = -10000000;
        }
        if (movement2n > 1150 && movement2n < 1200) {
            miss += 1;
            movement2n = -10000000;
        }
        if (movement3n > 1150 && movement3n < 1200) {
            miss += 1;
            movement3n = -10000000;
        }
        if (movement4n > 1150 && movement4n < 1200) {
            miss += 1;
            movement4n = -10000000;
        }
        if (movement1o > 1150 && movement1o < 1200) {
            miss += 1;
            movement1o = -10000000;
        }
        if (movement2o > 1150 && movement2o < 1200) {
            miss += 1;
            movement2o = -10000000;
        }
        if (movement3o > 1150 && movement3o < 1200) {
            miss += 1;
            movement3o = -10000000;
        }
        if (movement4o > 1150 && movement4o < 1200) {
            miss += 1;
            movement4o = -10000000;
        }
        if (movement1p > 1150 && movement1p < 1200) {
            miss += 1;
            movement1p = -10000000;
        }
        if (movement2p > 1150 && movement2p < 1200) {
            miss += 1;
            movement2p = -10000000;
        }
        if (movement3p > 1150 && movement3p < 1200) {
            miss += 1;
            movement3p = -10000000;
        }
        if (movement4p > 1150 && movement4p < 1200) {
            miss += 1;
            movement4p = -10000000;
        }
        if (movement1q > 1150 && movement1q < 1200) {
            miss += 1;
            movement1q = -10000000;
        }
        if (movement2q > 1150 && movement2q < 1200) {
            miss += 1;
            movement2q = -10000000;
        }
        if (movement3q > 1150 && movement3q < 1200) {
            miss += 1;
            movement3q = -10000000;
        }
        if (movement4q > 1150 && movement4q < 1200) {
            miss += 1;
            movement4q = -10000000;
        }
        if (movement1r > 1150 && movement1r < 1200) {
            miss += 1;
            movement1r = -10000000;
        }
        if (movement2r > 1150 && movement2r < 1200) {
            miss += 1;
            movement2r = -10000000;
        }
        if (movement3r > 1150 && movement3r < 1200) {
            miss += 1;
            movement3r = -10000000;
        }
        if (movement4r > 1150 && movement4r < 1200) {
            miss += 1;
            movement4r = -10000000;
        }
        if (movement1s > 1150 && movement1s < 1200) {
            miss += 1;
            movement1s = -10000000;
        }
        if (movement2s > 1150 && movement2s < 1200) {
            miss += 1;
            movement2s = -10000000;
        }
        if (movement3s > 1150 && movement3s < 1200) {
            miss += 1;
            movement3s = -10000000;
        }
        if (movement4s > 1150 && movement4s < 1200) {
            miss += 1;
            movement4s = -10000000;
        }
        if (movement1t > 1150 && movement1t < 1200) {
            miss += 1;
            movement1t = -10000000;
        }
        if (movement2t > 1150 && movement2t < 1200) {
            miss += 1;
            movement2t = -10000000;
        }
        if (movement3t > 1150 && movement3t < 1200) {
            miss += 1;
            movement3t = -10000000;
        }
        if (movement4t > 1150 && movement4t < 1200) {
            miss += 1;
            movement4t = -10000000;
        }
        if (movement1u > 1150 && movement1u < 1200) {
            miss += 1;
            movement1u = -10000000;
        }
        if (movement2u > 1150 && movement2u < 1200) {
            miss += 1;
            movement2u = -10000000;
        }
        if (movement3u > 1150 && movement3u < 1200) {
            miss += 1;
            movement3u = -10000000;
        }
        if (movement4u > 1150 && movement4u < 1200) {
            miss += 1;
            movement4u = -10000000;
        }
        if (movement1v > 1150 && movement1v < 1200) {
            miss += 1;
            movement1v = -10000000;
        }
        if (movement2v > 1150 && movement2v < 1200) {
            miss += 1;
            movement2v = -10000000;
        }
        if (movement3v > 1150 && movement3v < 1200) {
            miss += 1;
            movement3v = -10000000;
        }
        if (movement4v > 1150 && movement4v < 1200) {
            miss += 1;
            movement4v = -10000000;
        }
        if (movement1w > 1150 && movement1w < 1200) {
            miss += 1;
            movement1w = -10000000;
        }
        if (movement2w > 1150 && movement2w < 1200) {
            miss += 1;
            movement2w = -10000000;
        }
        if (movement3w > 1150 && movement3w < 1200) {
            miss += 1;
            movement3w = -10000000;
        }
        if (movement4w > 1150 && movement4w < 1200) {
            miss += 1;
            movement4w = -10000000;
        }
        if (movement1x > 1150 && movement1x < 1200) {
            miss += 1;
            movement1x = -10000000;
        }
        if (movement2x > 1150 && movement2x < 1200) {
            miss += 1;
            movement2x = -10000000;
        }
        if (movement3x > 1150 && movement3x < 1200) {
            miss += 1;
            movement3x = -10000000;
        }
        if (movement4x > 1150 && movement4x < 1200) {
            miss += 1;
            movement4x = -10000000;
        }
        if (movement1y > 1150 && movement1y < 1200) {
            miss += 1;
            movement1y = -10000000;
        }
        if (movement2y > 1150 && movement2y < 1200) {
            miss += 1;
            movement2y = -10000000;
        }
        if (movement3y > 1150 && movement3y < 1200) {
            miss += 1;
            movement3y = -10000000;
        }
        if (movement4y > 1150 && movement4y < 1200) {
            miss += 1;
            movement4y = -10000000;
        }
        if (movement1z > 1150 && movement1z < 1200) {
            miss += 1;
            movement1z = -10000000;
        }
        if (movement2z > 1150 && movement2z < 1200) {
            miss += 1;
            movement2z = -10000000;
        }
        if (movement3z > 1150 && movement3z < 1200) {
            miss += 1;
            movement3z = -10000000;
        }
        if (movement4z > 1150 && movement4z < 1200) {
            miss += 1;
            movement4z = -10000000;
        }
    }
    // if (missCheck1 == 0) {
    //     if (keyMissCheck1 == 0) {
    //         keyMissCheck1 = 1
    //     }
    // }
    // if (missCheck2 == 0) {
    //     if (keyMissCheck1 == 0) {
    //         keyMissCheck1 = 1
    //     }
    // }
    // if (missCheck3 == 0) {
    //     if (keyMissCheck1 == 0) {
    //         keyMissCheck1 = 1
    //     }
    // }
    // if (missCheck4 == 0) {
    //     if (keyMissCheck1 == 0) {
    //         keyMissCheck1 = 1
    //     }
    // }
    // if (missCheck1 == 1) {
    //     movement1 = 10000000;
    //     success1 = 1;
    // }
    // if (missCheck1 == 2) {
    //     movement1b = 10000000;
    //     success1 = 2;
    // }
    // if (missCheck1 == 3) {
    //     movement1c = 10000000;
    //     success1 = 3;
    // }
    // if (missCheck1 == 4) {
    //     movement1d = 10000000;
    //     success1 = 4;
    // }
    // if (missCheck1 == 5) {
    //     movement1e = 10000000;
    //     success1 = 5;
    // }
    // if (missCheck1 == 6) {
    //     movement1f = 10000000;
    //     success1 = 6;
    // }
    // if (missCheck1 == 7) {
    //     movement1g = 10000000;
    //     success1 = 7;
    // }
    // if (missCheck1 == 8) {
    //     movement1h = 10000000;
    //     success1 = 0;
    //     missCheck1 = 0;
    // }
    // if (missCheck2 == 1) {
    //     movement2 = 10000000;
    //     success2 = 1;
    // }
    // if (missCheck2 == 2) {
    //     movement2b = 10000000;
    //     success2 = 2;
    // }
    // if (missCheck2 == 3) {
    //     movement2c = 10000000;
    //     success2 = 3;
    // }
    // if (missCheck2 == 4) {
    //     movement2d = 10000000;
    //     success2 = 4;
    // }
    // if (missCheck2 == 5) {
    //     movement2e = 10000000;
    //     success2 = 5;
    // }
    // if (missCheck2 == 6) {
    //     movement2f = 10000000;
    //     success2 = 6;
    // }
    // if (missCheck2 == 7) {
    //     movement2g = 10000000;
    //     success2 = 7;
    // }
    // if (missCheck2 == 8) {
    //     movement2h = 10000000;
    //     success2 = 0;
    //     missCheck2 = 0;
    // }
    // if (missCheck3 == 1) {
    //     movement3 = 10000000;
    //     success3 = 1;
    // }
    // if (missCheck3 == 2) {
    //     movement3b = 10000000;
    //     success3 = 2;
    // }
    // if (missCheck3 == 3) {
    //     movement3c = 10000000;
    //     success3 = 3;
    // }
    // if (missCheck3 == 4) {
    //     movement3d = 10000000;
    //     success3 = 4;
    // }
    // if (missCheck3 == 5) {
    //     movement3e = 10000000;
    //     success3 = 5;
    // }
    // if (missCheck3 == 6) {
    //     movement3f = 10000000;
    //     success3 = 6;
    // }
    // if (missCheck3 == 7) {
    //     movement3g = 10000000;
    //     success3 = 7;
    // }
    // if (missCheck3 == 8) {
    //     movement3h = 10000000;
    //     success3 = 0;
    //     missCheck3 = 0;
    // }
    // if (missCheck4 == 1) {
    //     movement4 = 10000000;
    //     success4 = 1;
    // }
    // if (missCheck4 == 2) {
    //     movement4b = 10000000;
    //     success4 = 2;
    // }
    // if (missCheck4 == 3) {
    //     movement4c = 10000000;
    //     success4 = 3;
    // }
    // if (missCheck4 == 4) {
    //     movement4d = 10000000;
    //     success4 = 4;
    // }
    // if (missCheck4 == 5) {
    //     movement4e = 10000000;
    //     success4 = 5;
    // }
    // if (missCheck4 == 6) {
    //     movement4f = 10000000;
    //     success4 = 6;
    // }
    // if (missCheck4 == 7) {
    //     movement4g = 10000000;
    //     success4 = 7;
    // }
    // if (missCheck4 == 8) {
    //     movement4h = 10000000;
    //     success4 = 0;
    //     missCheck4 = 0;
    // }
    // console.log("audioSync ", audioSync)
    if (downscroll == 0) {
        document.getElementById("div").style.top = 100 + "px"
        document.getElementById("div2").style.top = 100 + "px"
        document.getElementById("div3").style.top = 100 + "px"
        document.getElementById("div4").style.top = 100 + "px"
        document.getElementById("ddiv").style.top = 100 + "px"
        document.getElementById("ddiv2").style.top = 100 + "px"
        document.getElementById("ddiv3").style.top = 100 + "px"
        document.getElementById("ddiv4").style.top = 100 + "px"
    }
    if (downscroll == 1) {
        document.getElementById("div").style.top = 800 + "px"
        document.getElementById("div2").style.top = 800 + "px"
        document.getElementById("div3").style.top = 800 + "px"
        document.getElementById("div4").style.top = 800 + "px"
        document.getElementById("ddiv").style.top = 800 + "px"
        document.getElementById("ddiv2").style.top = 800 + "px"
        document.getElementById("ddiv3").style.top = 800 + "px"
        document.getElementById("ddiv4").style.top = 800 + "px"
    }
    if (key2 == 1) {
        document.getElementById("currentRate").innerHTML = " Measure " + differenceMeasure.toFixed(3) + " difference" + difference
        // document.getElementById("rate").innerHTML = "Current Bpm Rate " + stepRate.toFixed(3) + "x"
        document.getElementById("elapsedTime").innerHTML = " Elapsed Time " + (elapsedTime / 1000).toFixed(3)
        document.getElementById("tick").innerHTML = " Tick " + tickCheckAccT.toFixed(1) + " Step # " + S
        document.getElementById("stepRate").innerHTML = " Current Step Rate: " + differenceRate.toFixed(1) + " Beats Per Measure: " + commaIndexT[a] * 4
        // document.getElementById("bps").innerHTML = "Current Max Steps Per Second: " + bps.toFixed(3) * 4 + " currentDifferenceAcc " + currentDifferenceAcc
        key3 = 0;
    }
    if (key3 == 1) {
        key2 = 0;
        document.getElementById("currentRate").innerHTML = " Measure " + differenceMeasure.toFixed(3) + " difference" + difference
        // document.getElementById("rate").innerHTML = "Current Bpm Rate " + stepRate.toFixed(3) + "x"
        document.getElementById("elapsedTime").innerHTML = " Elapsed Time " + (elapsedTime / 1000).toFixed(3)
        document.getElementById("tick").innerHTML = " Tick " + tickCheckAccT.toFixed(1) + " Step # " + S
        document.getElementById("stepRate").innerHTML = " Current Step Rate: " + differenceRate.toFixed(1) + " Beats Per Measure: " + commaIndexT[a] * 4
        document.getElementById("bps").innerHTML = "Current Max Steps Per Second: " + bps * 4 + " currentDifferenceAcc " + currentDifferenceAcc
    }
}
addEventListener("keydown", function (e) {
    // console.log(e.code)
    if (e.code == 'F12') {
        keyDebug += 1;
        if (keyDebug == 2) {
            keyDebug = 0;
        }
        if (keyDebug == 0) {
            this.document.getElementById("stepDebug").style.display = "none";
            this.document.getElementById("fullArray").style.display = "none";
            this.document.getElementById("indexCommaT").style.display = "none";
            this.document.getElementById("bpmTick").style.display = "none";
            this.document.getElementById("bpmRate").style.display = "none";
        }
        if (keyDebug == 1) {
            this.document.getElementById("stepDebug").style.display = "inline-block";
            this.document.getElementById("fullArray").style.display = "inline-block";
            this.document.getElementById("indexCommaT").style.display = "inline-block";
            this.document.getElementById("bpmTick").style.display = "inline-block";
            this.document.getElementById("bpmRate").style.display = "inline-block";
        }
    }
    if (e.code == 'Enter') {
        buttonPlay()
        searchScores()
        this.setTimeout(function () {
        }, 1000)
        //     stepRateN = 0;
        //     missCheck1 = 0;
        //     missCheck2 = 0;
        //     missCheck3 = 0;
        //     missCheck4 = 0;
        //     keyStepRate1 = 0;
        //     keyStepRate2 = 0;
        //     keyStepRate3 = 0;
        //     keyStepRate4 = 0;
        //     keyStepRate5 = 0;
        //     keyStepRate6 = 0;
        //     keyStepRate7 = 0;
        //     keyStepRate8 = 0;
        //     success1 = 0;
        //     success2 = 0;
        //     success3 = 0;
        //     success4 = 0;
        //     miss = 0;
        //     hit = 0;
    }
    if (e.code == button1Code) {
        document.getElementById("div").style.outline = "3px solid #a059a0";
        setTimeout(function () {
            document.getElementById("div").style.outline = "none";
        }, 36)
    }
    if (e.code == button2Code) {
        document.getElementById("div2").style.outline = "3px solid #a059a0";
        setTimeout(function () {
            document.getElementById("div2").style.outline = "none";
        }, 36)
    }
    if (e.code == button3Code) {
        document.getElementById("div3").style.outline = "3px solid #a059a0";
        setTimeout(function () {
            document.getElementById("div3").style.outline = "none";
        }, 36)
    }
    if (e.code == button4Code) {
        document.getElementById("div4").style.outline = "3px solid #a059a0";
        setTimeout(function () {
            document.getElementById("div4").style.outline = "none";
        }, 36)
    }
    if (e.code == button1Code) {
        if (downscroll == 0) {
            if (movement1 > UpMiddle - (4 * scrollV) && movement1 < UpMiddle + (4 * scrollV) && movement1z > movement1) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1.style.top = movement1 + "px";
                movement1 = 10000000;
                hit += 1;
                return;
            }
            if (movement1 > UpMiddle - (8 * scrollV) && movement1 < UpMiddle + (8 * scrollV) && movement1z > movement1) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1.style.top = movement1 + "px";
                movement1 = 10000000;
                hit += 1;
                return;
            }
            if (movement1 > UpMiddle - (12 * scrollV) && movement1 < UpMiddle + (12 * scrollV) && movement1z > movement1) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1.style.top = movement1 + "px";
                movement1 = 10000000;
                hit += 1;
                return;
            }
            if (movement1b > UpMiddle - (4 * scrollV) && movement1b < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1b.style.top = movement1b + "px";
                movement1b = 10000000;
                hit += 1;
                return;
            }
            if (movement1b > UpMiddle - (8 * scrollV) && movement1b < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1b.style.top = movement1b + "px";
                movement1b = 10000000;
                hit += 1;
                return;
            }
            if (movement1b > UpMiddle - (12 * scrollV) && movement1b < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1b.style.top = movement1b + "px";
                movement1b = 10000000;
                hit += 1;
                return;
            }
            if (movement1c > UpMiddle - (4 * scrollV) && movement1c < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1c.style.top = movement1c + "px";
                movement1c = 10000000;
                hit += 1;
                return;
            }
            if (movement1c > UpMiddle - (8 * scrollV) && movement1c < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1c.style.top = movement1c + "px";
                movement1c = 10000000;
                hit += 1;
                return;
            }
            if (movement1c > UpMiddle - (12 * scrollV) && movement1c < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1c.style.top = movement1c + "px";
                movement1c = 10000000;
                hit += 1;
                return;
            }
            if (movement1d > UpMiddle - (4 * scrollV) && movement1d < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1d.style.top = movement1d + "px";
                movement1d = 10000000;
                hit += 1;
                return;
            }
            if (movement1d > UpMiddle - (8 * scrollV) && movement1d < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1d.style.top = movement1d + "px";
                movement1d = 10000000;
                hit += 1;
                return;
            }
            if (movement1d > UpMiddle - (12 * scrollV) && movement1d < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1d.style.top = movement1d + "px";
                movement1d = 10000000;
                hit += 1;
                return;
            }
            if (movement1e > UpMiddle - (4 * scrollV) && movement1e < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1e.style.top = movement1e + "px";
                movement1e = 10000000;
                hit += 1;
                return;
            }
            if (movement1e > UpMiddle - (8 * scrollV) && movement1e < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1e.style.top = movement1e + "px";
                movement1e = 10000000;
                hit += 1;
                return;
            }
            if (movement1e > UpMiddle - (12 * scrollV) && movement1e < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1e.style.top = movement1e + "px";
                movement1e = 10000000;
                hit += 1;
                return;
            }
            if (movement1f > UpMiddle - (4 * scrollV) && movement1f < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1f.style.top = movement1f + "px";
                movement1f = 10000000;
                hit += 1;
                return;
            }
            if (movement1f > UpMiddle - (8 * scrollV) && movement1f < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1f.style.top = movement1f + "px";
                movement1f = 10000000;
                hit += 1;
                return;
            }
            if (movement1f > UpMiddle - (12 * scrollV) && movement1f < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1f.style.top = movement1f + "px";
                movement1f = 10000000;
                hit += 1;
                return;
            }
            if (movement1g > UpMiddle - (4 * scrollV) && movement1g < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1g.style.top = movement1g + "px";
                movement1g = 10000000;
                hit += 1;
                return;
            }
            if (movement1g > UpMiddle - (8 * scrollV) && movement1g < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1g.style.top = movement1g + "px";
                movement1g = 10000000;
                hit += 1;
                return;
            }
            if (movement1g > UpMiddle - (12 * scrollV) && movement1g < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1g.style.top = movement1g + "px";
                movement1g = 10000000;
                hit += 1;
                return;
            }
            if (movement1h > UpMiddle - (4 * scrollV) && movement1h < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1h.style.top = movement1h + "px";
                movement1h = 10000000;
                hit += 1;
                return;
            }
            if (movement1h > UpMiddle - (8 * scrollV) && movement1h < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1h.style.top = movement1h + "px";
                movement1h = 10000000;
                hit += 1;
                return;
            }
            if (movement1h > UpMiddle - (12 * scrollV) && movement1h < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1h.style.top = movement1h + "px";
                movement1h = 10000000;
                hit += 1;
                return;
            }
            if (movement1i > UpMiddle - (4 * scrollV) && movement1i < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1i.style.top = movement1i + "px";
                movement1i = 10000000;
                hit += 1;
                return;
            }
            if (movement1i > UpMiddle - (8 * scrollV) && movement1i < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1i.style.top = movement1i + "px";
                movement1i = 10000000;
                hit += 1;
                return;
            }
            if (movement1i > UpMiddle - (12 * scrollV) && movement1i < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1i.style.top = movement1i + "px";
                movement1i = 10000000;
                hit += 1;
                return;
            }
            if (movement1j > UpMiddle - (4 * scrollV) && movement1j < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1j.style.top = movement1j + "px";
                movement1j = 10000000;
                hit += 1;
                return;
            }
            if (movement1j > UpMiddle - (8 * scrollV) && movement1j < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1j.style.top = movement1j + "px";
                movement1j = 10000000;
                hit += 1;
                return;
            }
            if (movement1j > UpMiddle - (12 * scrollV) && movement1j < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1j.style.top = movement1j + "px";
                movement1j = 10000000;
                hit += 1;
                return;
            }
            if (movement1k > UpMiddle - (4 * scrollV) && movement1k < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1k.style.top = movement1k + "px";
                movement1k = 10000000;
                hit += 1;
                return;
            }
            if (movement1k > UpMiddle - (8 * scrollV) && movement1k < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1k.style.top = movement1k + "px";
                movement1k = 10000000;
                hit += 1;
                return;
            }
            if (movement1k > UpMiddle - (12 * scrollV) && movement1k < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1k.style.top = movement1k + "px";
                movement1k = 10000000;
                hit += 1;
                return;
            }
            if (movement1l > UpMiddle - (4 * scrollV) && movement1l < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1l.style.top = movement1l + "px";
                movement1l = 10000000;
                hit += 1;
                return;
            }
            if (movement1l > UpMiddle - (8 * scrollV) && movement1l < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1l.style.top = movement1l + "px";
                movement1l = 10000000;
                hit += 1;
                return;
            }
            if (movement1l > UpMiddle - (12 * scrollV) && movement1l < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1l.style.top = movement1l + "px";
                movement1l = 10000000;
                hit += 1;
                return;
            }
            if (movement1m > UpMiddle - (4 * scrollV) && movement1m < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1m.style.top = movement1m + "px";
                movement1m = 10000000;
                hit += 1;
                return;
            }
            if (movement1m > UpMiddle - (8 * scrollV) && movement1m < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1m.style.top = movement1m + "px";
                movement1m = 10000000;
                hit += 1;
                return;
            }
            if (movement1m > UpMiddle - (12 * scrollV) && movement1m < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1m.style.top = movement1m + "px";
                movement1m = 10000000;
                hit += 1;
                return;
            }
            if (movement1n > UpMiddle - (4 * scrollV) && movement1n < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1n.style.top = movement1n + "px";
                movement1n = 10000000;
                hit += 1;
                return;
            }
            if (movement1n > UpMiddle - (8 * scrollV) && movement1n < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1n.style.top = movement1n + "px";
                movement1n = 10000000;
                hit += 1;
                return;
            }
            if (movement1n > UpMiddle - (12 * scrollV) && movement1n < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1n.style.top = movement1n + "px";
                movement1n = 10000000;
                hit += 1;
                return;
            }
            if (movement1o > UpMiddle - (4 * scrollV) && movement1o < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1o.style.top = movement1o + "px";
                movement1o = 10000000;
                hit += 1;
                return;
            }
            if (movement1o > UpMiddle - (8 * scrollV) && movement1o < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1o.style.top = movement1o + "px";
                movement1o = 10000000;
                hit += 1;
                return;
            }
            if (movement1o > UpMiddle - (12 * scrollV) && movement1o < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1o.style.top = movement1o + "px";
                movement1o = 10000000;
                hit += 1;
                return;
            }
            if (movement1p > UpMiddle - (4 * scrollV) && movement1p < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1p.style.top = movement1p + "px";
                movement1p = 10000000;
                hit += 1;
                return;
            }
            if (movement1p > UpMiddle - (8 * scrollV) && movement1p < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1p.style.top = movement1p + "px";
                movement1p = 10000000;
                hit += 1;
                return;
            }
            if (movement1p > UpMiddle - (12 * scrollV) && movement1p < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1p.style.top = movement1p + "px";
                movement1p = 10000000;
                hit += 1;
                return;
            }
            if (movement1q > UpMiddle - (4 * scrollV) && movement1q < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1q.style.top = movement1q + "px";
                movement1q = 10000000;
                hit += 1;
                return;
            }
            if (movement1q > UpMiddle - (8 * scrollV) && movement1q < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1q.style.top = movement1q + "px";
                movement1q = 10000000;
                hit += 1;
                return;
            }
            if (movement1q > UpMiddle - (12 * scrollV) && movement1q < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1q.style.top = movement1q + "px";
                movement1q = 10000000;
                hit += 1;
                return;
            }
            if (movement1r > UpMiddle - (4 * scrollV) && movement1r < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1r.style.top = movement1r + "px";
                movement1r = 10000000;
                hit += 1;
                return;
            }
            if (movement1r > UpMiddle - (8 * scrollV) && movement1r < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1r.style.top = movement1r + "px";
                movement1r = 10000000;
                hit += 1;
                return;
            }
            if (movement1r > UpMiddle - (12 * scrollV) && movement1r < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1r.style.top = movement1r + "px";
                movement1r = 10000000;
                hit += 1;
                return;
            }
            if (movement1s > UpMiddle - (4 * scrollV) && movement1s < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1s.style.top = movement1s + "px";
                movement1s = 10000000;
                hit += 1;
                return;
            }
            if (movement1s > UpMiddle - (8 * scrollV) && movement1s < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1s.style.top = movement1s + "px";
                movement1s = 10000000;
                hit += 1;
                return;
            }
            if (movement1s > UpMiddle - (12 * scrollV) && movement1s < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1s.style.top = movement1s + "px";
                movement1s = 10000000;
                hit += 1;
                return;
            }
            if (movement1t > UpMiddle - (4 * scrollV) && movement1t < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1t.style.top = movement1t + "px";
                movement1t = 10000000;
                hit += 1;
                return;
            }
            if (movement1t > UpMiddle - (8 * scrollV) && movement1t < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1t.style.top = movement1t + "px";
                movement1t = 10000000;
                hit += 1;
                return;
            }
            if (movement1t > UpMiddle - (12 * scrollV) && movement1t < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1t.style.top = movement1t + "px";
                movement1t = 10000000;
                hit += 1;
                return;
            }
            if (movement1u > UpMiddle - (4 * scrollV) && movement1u < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1u.style.top = movement1u + "px";
                movement1u = 10000000;
                hit += 1;
                return;
            }
            if (movement1u > UpMiddle - (8 * scrollV) && movement1u < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1u.style.top = movement1u + "px";
                movement1u = 10000000;
                hit += 1;
                return;
            }
            if (movement1u > UpMiddle - (12 * scrollV) && movement1u < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1u.style.top = movement1u + "px";
                movement1u = 10000000;
                hit += 1;
                return;
            }
            if (movement1v > UpMiddle - (4 * scrollV) && movement1v < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1v.style.top = movement1v + "px";
                movement1v = 10000000;
                hit += 1;
                return;
            }
            if (movement1v > UpMiddle - (8 * scrollV) && movement1v < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1v.style.top = movement1v + "px";
                movement1v = 10000000;
                hit += 1;
                return;
            }
            if (movement1v > UpMiddle - (12 * scrollV) && movement1v < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1v.style.top = movement1v + "px";
                movement1v = 10000000;
                hit += 1;
                return;
            }
            if (movement1w > UpMiddle - (4 * scrollV) && movement1w < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1w.style.top = movement1w + "px";
                movement1w = 10000000;
                hit += 1;
                return;
            }
            if (movement1w > UpMiddle - (8 * scrollV) && movement1w < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1w.style.top = movement1w + "px";
                movement1w = 10000000;
                hit += 1;
                return;
            }
            if (movement1w > UpMiddle - (12 * scrollV) && movement1w < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1w.style.top = movement1w + "px";
                movement1w = 10000000;
                hit += 1;
                return;
            }
            if (movement1x > UpMiddle - (4 * scrollV) && movement1x < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1x.style.top = movement1x + "px";
                movement1x = 10000000;
                hit += 1;
                return;
            }
            if (movement1x > UpMiddle - (8 * scrollV) && movement1x < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1x.style.top = movement1x + "px";
                movement1x = 10000000;
                hit += 1;
                return;
            }
            if (movement1x > UpMiddle - (12 * scrollV) && movement1x < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1x.style.top = movement1x + "px";
                movement1x = 10000000;
                hit += 1;
                return;
            }
            if (movement1y > UpMiddle - (4 * scrollV) && movement1y < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1y.style.top = movement1y + "px";
                movement1y = 10000000;
                hit += 1;
                return;
            }
            if (movement1y > UpMiddle - (8 * scrollV) && movement1y < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1y.style.top = movement1y + "px";
                movement1y = 10000000;
                hit += 1;
                return;
            }
            if (movement1y > UpMiddle - (12 * scrollV) && movement1y < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1y.style.top = movement1y + "px";
                movement1y = 10000000;
                hit += 1;
                return;
            }
            if (movement1z > UpMiddle - (4 * scrollV) && movement1z < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1z.style.top = movement1z + "px";
                movement1z = 10000000;
                hit += 1;
                return;
            }
            if (movement1z > UpMiddle - (8 * scrollV) && movement1z < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1z.style.top = movement1z + "px";
                movement1z = 10000000;
                hit += 1;
                return;
            }
            if (movement1z > UpMiddle - (12 * scrollV) && movement1z < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1z.style.top = movement1z + "px";
                movement1z = 10000000;
                hit += 1;
                return;
            }
        }
        if (downscroll == 1) {
            if (movement1 < DownMiddle + (4 * scrollV) && movement1 > DownMiddle - (4 * scrollV) && movement1z < movement1) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1.style.top = movement1 + "px";
                movement1 = -10000000;
                hit += 1;
                return;
            }
            if (movement1b < DownMiddle + (4 * scrollV) && movement1b > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1b.style.top = movement1b + "px";
                movement1b = -10000000;
                hit += 1;
                return;
            }
            if (movement1c < DownMiddle + (4 * scrollV) && movement1c > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1c.style.top = movement1c + "px";
                movement1c = -10000000;
                hit += 1;
                return;
            }
            if (movement1d < DownMiddle + (4 * scrollV) && movement1d > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1d.style.top = movement1d + "px";
                movement1d = -10000000;
                hit += 1;
                return;
            }
            if (movement1e < DownMiddle + (4 * scrollV) && movement1e > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1e.style.top = movement1e + "px";
                movement1e = -10000000;
                hit += 1;
                return;
            }
            if (movement1f < DownMiddle + (4 * scrollV) && movement1f > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1f.style.top = movement1f + "px";
                movement1f = -10000000;
                hit += 1;
                return;
            }
            if (movement1g < DownMiddle + (4 * scrollV) && movement1g > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1g.style.top = movement1g + "px";
                movement1g = -10000000;
                hit += 1;
                return;
            }
            if (movement1h < DownMiddle + (4 * scrollV) && movement1h > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1h.style.top = movement1h + "px";
                movement1h = -10000000;
                hit += 1;
                return;
            }
            if (movement1i < DownMiddle + (4 * scrollV) && movement1i > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1i.style.top = movement1i + "px";
                movement1i = -10000000;
                hit += 1;
                return;
            }
            if (movement1j < DownMiddle + (4 * scrollV) && movement1j > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1j.style.top = movement1j + "px";
                movement1j = -10000000;
                hit += 1;
                return;
            }
            if (movement1k < DownMiddle + (4 * scrollV) && movement1k > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1k.style.top = movement1k + "px";
                movement1k = -10000000;
                hit += 1;
                return;
            }
            if (movement1l < DownMiddle + (4 * scrollV) && movement1l > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1l.style.top = movement1l + "px";
                movement1l = -10000000;
                hit += 1;
                return;
            }
            if (movement1m < DownMiddle + (4 * scrollV) && movement1m > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1m.style.top = movement1m + "px";
                movement1m = -10000000;
                hit += 1;
                return;
            }
            if (movement1n < DownMiddle + (4 * scrollV) && movement1n > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1n.style.top = movement1n + "px";
                movement1n = -10000000;
                hit += 1;
                return;
            }
            if (movement1o < DownMiddle + (4 * scrollV) && movement1o > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1o.style.top = movement1o + "px";
                movement1o = -10000000;
                hit += 1;
                return;
            }
            if (movement1p < DownMiddle + (4 * scrollV) && movement1p > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1p.style.top = movement1p + "px";
                movement1p = -10000000;
                hit += 1;
                return;
            }
            if (movement1q < DownMiddle + (4 * scrollV) && movement1q > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1q.style.top = movement1q + "px";
                movement1q = -10000000;
                hit += 1;
                return;
            }
            if (movement1r < DownMiddle + (4 * scrollV) && movement1r > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1r.style.top = movement1r + "px";
                movement1r = -10000000;
                hit += 1;
                return;
            }
            if (movement1s < DownMiddle + (4 * scrollV) && movement1s > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1s.style.top = movement1s + "px";
                movement1s = -10000000;
                hit += 1;
                return;
            }
            if (movement1t < DownMiddle + (4 * scrollV) && movement1t > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1t.style.top = movement1t + "px";
                movement1t = -10000000;
                hit += 1;
                return;
            }
            if (movement1u < DownMiddle + (4 * scrollV) && movement1u > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1u.style.top = movement1u + "px";
                movement1u = -10000000;
                hit += 1;
                return;
            }
            if (movement1v < DownMiddle + (4 * scrollV) && movement1v > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1v.style.top = movement1v + "px";
                movement1v = -10000000;
                hit += 1;
                return;
            }
            if (movement1w < DownMiddle + (4 * scrollV) && movement1w > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1w.style.top = movement1w + "px";
                movement1w = -10000000;
                hit += 1;
                return;
            }
            if (movement1x < DownMiddle + (4 * scrollV) && movement1x > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1x.style.top = movement1x + "px";
                movement1x = -10000000;
                hit += 1;
                return;
            }
            if (movement1y < DownMiddle + (4 * scrollV) && movement1y > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1y.style.top = movement1y + "px";
                movement1y = -10000000;
                hit += 1;
                return;
            }
            if (movement1z < DownMiddle + (4 * scrollV) && movement1z > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d1z.style.top = movement1z + "px";
                movement1z = -10000000;
                hit += 1;
                return;
            }

            if (movement1 < DownMiddle + (8 * scrollV) && movement1 > DownMiddle - (8 * scrollV) && movement1z < movement1) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 1;
                d1.style.top = movement1 + "px";
                movement1 = -10000000;
                hit += 1;
                return;
            }
            if (movement1b < DownMiddle + (8 * scrollV) && movement1b > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1b.style.top = movement1b + "px";
                missCheck1 = 2;
                movement1b = -10000000;
                hit += 1;
                return;
            }
            if (movement1c < DownMiddle + (8 * scrollV) && movement1c > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 3;
                d1c.style.top = movement1c + "px";
                movement1c = -10000000;
                hit += 1;
                return;
            }
            if (movement1d < DownMiddle + (8 * scrollV) && movement1d > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 4;
                d1d.style.top = movement1d + "px";
                movement1d = -10000000;
                hit += 1;
                return;
            }
            if (movement1e < DownMiddle + (8 * scrollV) && movement1e > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 5;
                d1e.style.top = movement1e + "px";
                movement1e = -10000000;
                hit += 1;
                return;
            }
            if (movement1f < DownMiddle + (8 * scrollV) && movement1f > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 6;
                d1f.style.top = movement1f + "px";
                movement1f = -10000000;
                hit += 1;
                return;
            }
            if (movement1g < DownMiddle + (8 * scrollV) && movement1g > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 7;
                d1g.style.top = movement1g + "px";
                movement1g = -10000000;
                hit += 1;
                return;
            }
            if (movement1h < DownMiddle + (8 * scrollV) && movement1h > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                missCheck1 = 8;
                d1h.style.top = movement1h + "px";
                movement1h = -10000000;
                hit += 1;
                return;
            }
            if (movement1i < DownMiddle + (8 * scrollV) && movement1i > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1i.style.top = movement1i + "px";
                movement1i = -10000000;
                hit += 1;
                return;
            }
            if (movement1j < DownMiddle + (8 * scrollV) && movement1j > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1j.style.top = movement1j + "px";
                movement1j = -10000000;
                hit += 1;
                return;
            }
            if (movement1k < DownMiddle + (8 * scrollV) && movement1k > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1k.style.top = movement1k + "px";
                movement1k = -10000000;
                hit += 1;
                return;
            }
            if (movement1l < DownMiddle + (8 * scrollV) && movement1l > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1l.style.top = movement1l + "px";
                movement1l = -10000000;
                hit += 1;
                return;
            }
            if (movement1m < DownMiddle + (8 * scrollV) && movement1m > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1m.style.top = movement1m + "px";
                movement1m = -10000000;
                hit += 1;
                return;
            }
            if (movement1n < DownMiddle + (8 * scrollV) && movement1n > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1n.style.top = movement1n + "px";
                movement1n = -10000000;
                hit += 1;
                return;
            }
            if (movement1o < DownMiddle + (8 * scrollV) && movement1o > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1o.style.top = movement1o + "px";
                movement1o = -10000000;
                hit += 1;
                return;
            }
            if (movement1p < DownMiddle + (8 * scrollV) && movement1p > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1p.style.top = movement1p + "px";
                movement1p = -10000000;
                hit += 1;
                return;
            }
            if (movement1q < DownMiddle + (8 * scrollV) && movement1q > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1q.style.top = movement1q + "px";
                movement1q = -10000000;
                hit += 1;
                return;
            }
            if (movement1r < DownMiddle + (8 * scrollV) && movement1r > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1r.style.top = movement1r + "px";
                movement1r = -10000000;
                hit += 1;
                return;
            }
            if (movement1s < DownMiddle + (8 * scrollV) && movement1s > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1s.style.top = movement1s + "px";
                movement1s = -10000000;
                hit += 1;
                return;
            }
            if (movement1t < DownMiddle + (8 * scrollV) && movement1t > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1t.style.top = movement1t + "px";
                movement1t = -10000000;
                hit += 1;
                return;
            }
            if (movement1u < DownMiddle + (8 * scrollV) && movement1u > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1u.style.top = movement1u + "px";
                movement1u = -10000000;
                hit += 1;
                return;
            }
            if (movement1v < DownMiddle + (8 * scrollV) && movement1v > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1v.style.top = movement1v + "px";
                movement1v = -10000000;
                hit += 1;
                return;
            }
            if (movement1w < DownMiddle + (8 * scrollV) && movement1w > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1w.style.top = movement1w + "px";
                movement1w = -10000000;
                hit += 1;
                return;
            }
            if (movement1x < DownMiddle + (8 * scrollV) && movement1x > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1x.style.top = movement1x + "px";
                movement1x = -10000000;
                hit += 1;
                return;
            }
            if (movement1y < DownMiddle + (8 * scrollV) && movement1y > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1y.style.top = movement1y + "px";
                movement1y = -10000000;
                hit += 1;
                return;
            }
            if (movement1z < DownMiddle + (8 * scrollV) && movement1z > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d1z.style.top = movement1z + "px";
                movement1z = -10000000;
                hit += 1;
                return;
            }

            if (movement1 < DownMiddle + (12 * scrollV) && movement1 > DownMiddle - (12 * scrollV) && movement1z < movement1) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1.style.top = movement1 + "px";
                movement1 = -10000000;
                hit += 1;
                return;
            }
            if (movement1b < DownMiddle + (12 * scrollV) && movement1b > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1b.style.top = movement1b + "px";
                movement1b = -10000000;
                hit += 1;
                return;
            }
            if (movement1c < DownMiddle + (12 * scrollV) && movement1c > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1c.style.top = movement1c + "px";
                movement1c = -10000000;
                hit += 1;
                return;
            }
            if (movement1d < DownMiddle + (12 * scrollV) && movement1d > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1d.style.top = movement1d + "px";
                movement1d = -10000000;
                hit += 1;
                return;
            }
            if (movement1e < DownMiddle + (12 * scrollV) && movement1e > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1e.style.top = movement1e + "px";
                movement1e = -10000000;
                hit += 1;
                return;
            }
            if (movement1f < DownMiddle + (12 * scrollV) && movement1f > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1f.style.top = movement1f + "px";
                movement1f = -10000000;
                hit += 1;
                return;
            }
            if (movement1g < DownMiddle + (12 * scrollV) && movement1g > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1g.style.top = movement1g + "px";
                movement1g = -10000000;
                hit += 1;
                return;
            }
            if (movement1h < DownMiddle + (12 * scrollV) && movement1h > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1h.style.top = movement1h + "px";
                movement1h = -10000000;
                hit += 1;
                return;
            }
            if (movement1i < DownMiddle + (12 * scrollV) && movement1i > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1i.style.top = movement1i + "px";
                movement1i = -10000000;
                hit += 1;
                return;
            }
            if (movement1j < DownMiddle + (12 * scrollV) && movement1j > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1j.style.top = movement1j + "px";
                movement1j = -10000000;
                hit += 1;
                return;
            }
            if (movement1k < DownMiddle + (12 * scrollV) && movement1k > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1k.style.top = movement1k + "px";
                movement1k = -10000000;
                hit += 1;
                return;
            }
            if (movement1l < DownMiddle + (12 * scrollV) && movement1l > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1l.style.top = movement1l + "px";
                movement1l = -10000000;
                hit += 1;
                return;
            }
            if (movement1m < DownMiddle + (12 * scrollV) && movement1m > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1m.style.top = movement1m + "px";
                movement1m = -10000000;
                hit += 1;
                return;
            }
            if (movement1n < DownMiddle + (12 * scrollV) && movement1n > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1n.style.top = movement1n + "px";
                movement1n = -10000000;
                hit += 1;
                return;
            }
            if (movement1o < DownMiddle + (12 * scrollV) && movement1o > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1o.style.top = movement1o + "px";
                movement1o = -10000000;
                hit += 1;
                return;
            }
            if (movement1p < DownMiddle + (12 * scrollV) && movement1p > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1p.style.top = movement1p + "px";
                movement1p = -10000000;
                hit += 1;
                return;
            }
            if (movement1q < DownMiddle + (12 * scrollV) && movement1q > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1q.style.top = movement1q + "px";
                movement1q = -10000000;
                hit += 1;
                return;
            }
            if (movement1r < DownMiddle + (12 * scrollV) && movement1r > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1r.style.top = movement1r + "px";
                movement1r = -10000000;
                hit += 1;
                return;
            }
            if (movement1s < DownMiddle + (12 * scrollV) && movement1s > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1s.style.top = movement1s + "px";
                movement1s = -10000000;
                hit += 1;
                return;
            }
            if (movement1t < DownMiddle + (12 * scrollV) && movement1t > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1t.style.top = movement1t + "px";
                movement1t = -10000000;
                hit += 1;
                return;
            }
            if (movement1u < DownMiddle + (12 * scrollV) && movement1u > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1u.style.top = movement1u + "px";
                movement1u = -10000000;
                hit += 1;
                return;
            }
            if (movement1v < DownMiddle + (12 * scrollV) && movement1v > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1v.style.top = movement1v + "px";
                movement1v = -10000000;
                hit += 1;
                return;
            }
            if (movement1w < DownMiddle + (12 * scrollV) && movement1w > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1w.style.top = movement1w + "px";
                movement1w = -10000000;
                hit += 1;
                return;
            }
            if (movement1x < DownMiddle + (12 * scrollV) && movement1x > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1x.style.top = movement1x + "px";
                movement1x = -10000000;
                hit += 1;
                return;
            }
            if (movement1y < DownMiddle + (12 * scrollV) && movement1y > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1y.style.top = movement1y + "px";
                movement1y = -10000000;
                hit += 1;
                return;
            }
            if (movement1z < DownMiddle + (12 * scrollV) && movement1z > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d1z.style.top = movement1z + "px";
                movement1z = -10000000;
                hit += 1;
                return;
            }
        }
    }
    if (e.code == button2Code) {
        if (downscroll == 0) {
            if (movement2 > UpMiddle - (4 * scrollV) && movement2 < UpMiddle + (4 * scrollV) && movement2z > movement2) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2.style.top = movement2 + "px";
                movement2 = 10000000;
                hit += 1;
                return;
            }
            if (movement2b > UpMiddle - (4 * scrollV) && movement2b < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2b.style.top = movement2b + "px";
                movement2b = 10000000;
                hit += 1;
                return;
            }
            if (movement2c > UpMiddle - (4 * scrollV) && movement2c < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2c.style.top = movement2c + "px";
                movement2c = 10000000;
                hit += 1;
                return;
            }
            if (movement2d > UpMiddle - (4 * scrollV) && movement2d < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2d.style.top = movement2d + "px";
                movement2d = 10000000;
                hit += 1;
                return;
            }
            if (movement2e > UpMiddle - (4 * scrollV) && movement2e < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2e.style.top = movement2e + "px";
                movement2e = 10000000;
                hit += 1;
                return;
            }
            if (movement2f > UpMiddle - (4 * scrollV) && movement2f < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2f.style.top = movement2f + "px";
                movement2f = 10000000;
                hit += 1;
                return;
            }
            if (movement2g > UpMiddle - (4 * scrollV) && movement2g < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2g.style.top = movement2g + "px";
                movement2g = 10000000;
                hit += 1;
                return;
            }
            if (movement2h > UpMiddle - (4 * scrollV) && movement2h < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2h.style.top = movement2h + "px";
                movement2h = 10000000;
                hit += 1;
                return;
            }
            if (movement2i > UpMiddle - (4 * scrollV) && movement2i < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2i.style.top = movement2i + "px";
                movement2i = 10000000;
                hit += 1;
                return;
            }
            if (movement2j > UpMiddle - (4 * scrollV) && movement2j < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2j.style.top = movement2j + "px";
                movement2j = 10000000;
                hit += 1;
                return;
            }
            if (movement2k > UpMiddle - (4 * scrollV) && movement2k < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2k.style.top = movement2k + "px";
                movement2k = 10000000;
                hit += 1;
                return;
            }
            if (movement2l > UpMiddle - (4 * scrollV) && movement2l < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2l.style.top = movement2l + "px";
                movement2l = 10000000;
                hit += 1;
                return;
            }
            if (movement2m > UpMiddle - (4 * scrollV) && movement2m < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2m.style.top = movement2m + "px";
                movement2m = 10000000;
                hit += 1;
                return;
            }
            if (movement2n > UpMiddle - (4 * scrollV) && movement2n < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2n.style.top = movement2n + "px";
                movement2n = 10000000;
                hit += 1;
                return;
            }
            if (movement2o > UpMiddle - (4 * scrollV) && movement2o < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2o.style.top = movement2o + "px";
                movement2o = 10000000;
                hit += 1;
                return;
            }
            if (movement2p > UpMiddle - (4 * scrollV) && movement2p < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2p.style.top = movement2p + "px";
                movement2p = 10000000;
                hit += 1;
                return;
            }
            if (movement2q > UpMiddle - (4 * scrollV) && movement2q < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2q.style.top = movement2q + "px";
                movement2q = 10000000;
                hit += 1;
                return;
            }
            if (movement2r > UpMiddle - (4 * scrollV) && movement2r < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2r.style.top = movement2r + "px";
                movement2r = 10000000;
                hit += 1;
                return;
            }
            if (movement2s > UpMiddle - (4 * scrollV) && movement2s < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2s.style.top = movement2s + "px";
                movement2s = 10000000;
                hit += 1;
                return;
            }
            if (movement2t > UpMiddle - (4 * scrollV) && movement2t < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2t.style.top = movement2t + "px";
                movement2t = 10000000;
                hit += 1;
                return;
            }
            if (movement2u > UpMiddle - (4 * scrollV) && movement2u < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2u.style.top = movement2u + "px";
                movement2u = 10000000;
                hit += 1;
                return;
            }
            if (movement2v > UpMiddle - (4 * scrollV) && movement2v < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2v.style.top = movement2v + "px";
                movement2v = 10000000;
                hit += 1;
                return;
            }
            if (movement2w > UpMiddle - (4 * scrollV) && movement2w < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2w.style.top = movement2w + "px";
                movement2w = 10000000;
                hit += 1;
                return;
            }
            if (movement2x > UpMiddle - (4 * scrollV) && movement2x < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2x.style.top = movement2x + "px";
                movement2x = 10000000;
                hit += 1;
                return;
            }
            if (movement2y > UpMiddle - (4 * scrollV) && movement2y < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2y.style.top = movement2y + "px";
                movement2y = 10000000;
                hit += 1;
                return;
            }
            if (movement2z > UpMiddle - (4 * scrollV) && movement2z < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2z.style.top = movement2z + "px";
                movement2z = 10000000;
                hit += 1;
                return;
            }

            if (movement2 > UpMiddle - (8 * scrollV) && movement2 < UpMiddle + (8 * scrollV) && movement2z > movement2) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2.style.top = movement2 + "px";
                movement2 = 10000000;
                hit += 1;
                return;
            }
            if (movement2b > UpMiddle - (8 * scrollV) && movement2b < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2b.style.top = movement2b + "px";
                movement2b = 10000000;
                hit += 1;
                return;
            }
            if (movement2c > UpMiddle - (8 * scrollV) && movement2c < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2c.style.top = movement2c + "px";
                movement2c = 10000000;
                hit += 1;
                return;
            }
            if (movement2d > UpMiddle - (8 * scrollV) && movement2d < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2d.style.top = movement2d + "px";
                movement2d = 10000000;
                hit += 1;
                return;
            }
            if (movement2e > UpMiddle - (8 * scrollV) && movement2e < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2e.style.top = movement2e + "px";
                movement2e = 10000000;
                hit += 1;
                return;
            }
            if (movement2f > UpMiddle - (8 * scrollV) && movement2f < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2f.style.top = movement2f + "px";
                movement2f = 10000000;
                hit += 1;
                return;
            }
            if (movement2g > UpMiddle - (8 * scrollV) && movement2g < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2g.style.top = movement2g + "px";
                movement2g = 10000000;
                hit += 1;
                return;
            }
            if (movement2h > UpMiddle - (8 * scrollV) && movement2h < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2h.style.top = movement2h + "px";
                movement2h = 10000000;
                hit += 1;
                return;
            }
            if (movement2i > UpMiddle - (8 * scrollV) && movement2i < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2i.style.top = movement2i + "px";
                movement2i = 10000000;
                hit += 1;
                return;
            }
            if (movement2j > UpMiddle - (8 * scrollV) && movement2j < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2j.style.top = movement2j + "px";
                movement2j = 10000000;
                hit += 1;
                return;
            }
            if (movement2k > UpMiddle - (8 * scrollV) && movement2k < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2k.style.top = movement2k + "px";
                movement2k = 10000000;
                hit += 1;
                return;
            }
            if (movement2l > UpMiddle - (8 * scrollV) && movement2l < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2l.style.top = movement2l + "px";
                movement2l = 10000000;
                hit += 1;
                return;
            }
            if (movement2m > UpMiddle - (8 * scrollV) && movement2m < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2m.style.top = movement2m + "px";
                movement2m = 10000000;
                hit += 1;
                return;
            }
            if (movement2n > UpMiddle - (8 * scrollV) && movement2n < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2n.style.top = movement2n + "px";
                movement2n = 10000000;
                hit += 1;
                return;
            }
            if (movement2o > UpMiddle - (8 * scrollV) && movement2o < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2o.style.top = movement2o + "px";
                movement2o = 10000000;
                hit += 1;
                return;
            }
            if (movement2p > UpMiddle - (8 * scrollV) && movement2p < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2p.style.top = movement2p + "px";
                movement2p = 10000000;
                hit += 1;
                return;
            }
            if (movement2q > UpMiddle - (8 * scrollV) && movement2q < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2q.style.top = movement2q + "px";
                movement2q = 10000000;
                hit += 1;
                return;
            }
            if (movement2r > UpMiddle - (8 * scrollV) && movement2r < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2r.style.top = movement2r + "px";
                movement2r = 10000000;
                hit += 1;
                return;
            }
            if (movement2s > UpMiddle - (8 * scrollV) && movement2s < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2s.style.top = movement2s + "px";
                movement2s = 10000000;
                hit += 1;
                return;
            }
            if (movement2t > UpMiddle - (8 * scrollV) && movement2t < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2t.style.top = movement2t + "px";
                movement2t = 10000000;
                hit += 1;
                return;
            }
            if (movement2u > UpMiddle - (8 * scrollV) && movement2u < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2u.style.top = movement2u + "px";
                movement2u = 10000000;
                hit += 1;
                return;
            }
            if (movement2v > UpMiddle - (8 * scrollV) && movement2v < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2v.style.top = movement2v + "px";
                movement2v = 10000000;
                hit += 1;
                return;
            }
            if (movement2w > UpMiddle - (8 * scrollV) && movement2w < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2w.style.top = movement2w + "px";
                movement2w = 10000000;
                hit += 1;
                return;
            }
            if (movement2x > UpMiddle - (8 * scrollV) && movement2x < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2x.style.top = movement2x + "px";
                movement2x = 10000000;
                hit += 1;
                return;
            }
            if (movement2y > UpMiddle - (8 * scrollV) && movement2y < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2y.style.top = movement2y + "px";
                movement2y = 10000000;
                hit += 1;
                return;
            }
            if (movement2z > UpMiddle - (8 * scrollV) && movement2z < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2z.style.top = movement2z + "px";
                movement2z = 10000000;
                hit += 1;
                return;
            }

            if (movement2 > UpMiddle - (12 * scrollV) && movement2 < UpMiddle + (12 * scrollV) && movement2z > movement2) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2.style.top = movement2 + "px";
                movement2 = 10000000;
                hit += 1;
                return;
            }
            if (movement2b > UpMiddle - (12 * scrollV) && movement2b < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2b.style.top = movement2b + "px";
                movement2b = 10000000;
                hit += 1;
                return;
            }
            if (movement2c > UpMiddle - (12 * scrollV) && movement2c < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2c.style.top = movement2c + "px";
                movement2c = 10000000;
                hit += 1;
                return;
            }
            if (movement2d > UpMiddle - (12 * scrollV) && movement2d < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2d.style.top = movement2d + "px";
                movement2d = 10000000;
                hit += 1;
                return;
            }
            if (movement2e > UpMiddle - (12 * scrollV) && movement2e < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2e.style.top = movement2e + "px";
                movement2e = 10000000;
                hit += 1;
                return;
            }
            if (movement2f > UpMiddle - (12 * scrollV) && movement2f < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2f.style.top = movement2f + "px";
                movement2f = 10000000;
                hit += 1;
                return;
            }
            if (movement2g > UpMiddle - (12 * scrollV) && movement2g < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2g.style.top = movement2g + "px";
                movement2g = 10000000;
                hit += 1;
                return;
            }
            if (movement2h > UpMiddle - (12 * scrollV) && movement2h < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2h.style.top = movement2h + "px";
                movement2h = 10000000;
                hit += 1;
                return;
            }
            if (movement2i > UpMiddle - (12 * scrollV) && movement2i < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2i.style.top = movement2i + "px";
                movement2i = 10000000;
                hit += 1;
                return;
            }
            if (movement2j > UpMiddle - (12 * scrollV) && movement2j < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2j.style.top = movement2j + "px";
                movement2j = 10000000;
                hit += 1;
                return;
            }
            if (movement2k > UpMiddle - (12 * scrollV) && movement2k < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2k.style.top = movement2k + "px";
                movement2k = 10000000;
                hit += 1;
                return;
            }
            if (movement2l > UpMiddle - (12 * scrollV) && movement2l < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2l.style.top = movement2l + "px";
                movement2l = 10000000;
                hit += 1;
                return;
            }
            if (movement2m > UpMiddle - (12 * scrollV) && movement2m < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2m.style.top = movement2m + "px";
                movement2m = 10000000;
                hit += 1;
                return;
            }
            if (movement2n > UpMiddle - (12 * scrollV) && movement2n < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2n.style.top = movement2n + "px";
                movement2n = 10000000;
                hit += 1;
                return;
            }
            if (movement2o > UpMiddle - (12 * scrollV) && movement2o < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2o.style.top = movement2o + "px";
                movement2o = 10000000;
                hit += 1;
                return;
            }
            if (movement2p > UpMiddle - (12 * scrollV) && movement2p < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2p.style.top = movement2p + "px";
                movement2p = 10000000;
                hit += 1;
                return;
            }
            if (movement2q > UpMiddle - (12 * scrollV) && movement2q < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2q.style.top = movement2q + "px";
                movement2q = 10000000;
                hit += 1;
                return;
            }
            if (movement2r > UpMiddle - (12 * scrollV) && movement2r < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2r.style.top = movement2r + "px";
                movement2r = 10000000;
                hit += 1;
                return;
            }
            if (movement2s > UpMiddle - (12 * scrollV) && movement2s < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2s.style.top = movement2s + "px";
                movement2s = 10000000;
                hit += 1;
                return;
            }
            if (movement2t > UpMiddle - (12 * scrollV) && movement2t < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2t.style.top = movement2t + "px";
                movement2t = 10000000;
                hit += 1;
                return;
            }
            if (movement2u > UpMiddle - (12 * scrollV) && movement2u < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2u.style.top = movement2u + "px";
                movement2u = 10000000;
                hit += 1;
                return;
            }
            if (movement2v > UpMiddle - (12 * scrollV) && movement2v < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2v.style.top = movement2v + "px";
                movement2v = 10000000;
                hit += 1;
                return;
            }
            if (movement2w > UpMiddle - (12 * scrollV) && movement2w < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2w.style.top = movement2w + "px";
                movement2w = 10000000;
                hit += 1;
                return;
            }
            if (movement2x > UpMiddle - (12 * scrollV) && movement2x < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2x.style.top = movement2x + "px";
                movement2x = 10000000;
                hit += 1;
                return;
            }
            if (movement2y > UpMiddle - (12 * scrollV) && movement2y < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2y.style.top = movement2y + "px";
                movement2y = 10000000;
                hit += 1;
                return;
            }
            if (movement2z > UpMiddle - (12 * scrollV) && movement2z < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2z.style.top = movement2z + "px";
                movement2z = 10000000;
                hit += 1;
                return;
            }
        }
        if (downscroll == 1) {
            if (movement2 < DownMiddle + (4 * scrollV) && movement2 > DownMiddle - (4 * scrollV) && movement2z < movement2) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2.style.top = movement2 + "px";
                movement2 = -10000000;
                hit += 1;
                return;
            }
            if (movement2b < DownMiddle + (4 * scrollV) && movement2b > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2b.style.top = movement2b + "px";
                movement2b = -10000000;
                hit += 1;
                return;
            }
            if (movement2c < DownMiddle + (4 * scrollV) && movement2c > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2c.style.top = movement2c + "px";
                movement2c = -10000000;
                hit += 1;
                return;
            }
            if (movement2d < DownMiddle + (4 * scrollV) && movement2d > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2d.style.top = movement2d + "px";
                movement2d = -10000000;
                hit += 1;
                return;
            }
            if (movement2e < DownMiddle + (4 * scrollV) && movement2e > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2e.style.top = movement2e + "px";
                movement2e = -10000000;
                hit += 1;
                return;
            }
            if (movement2f < DownMiddle + (4 * scrollV) && movement2f > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2f.style.top = movement2f + "px";
                movement2f = -10000000;
                hit += 1;
                return;
            }
            if (movement2g < DownMiddle + (4 * scrollV) && movement2g > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2g.style.top = movement2g + "px";
                movement2g = -10000000;
                hit += 1;
                return;
            }
            if (movement2h < DownMiddle + (4 * scrollV) && movement2h > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2h.style.top = movement2h + "px";
                movement2h = -10000000;
                hit += 1;
                return;
            }
            if (movement2i < DownMiddle + (4 * scrollV) && movement2i > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2i.style.top = movement2i + "px";
                movement2i = -10000000;
                hit += 1;
                return;
            }
            if (movement2j < DownMiddle + (4 * scrollV) && movement2j > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2j.style.top = movement2j + "px";
                movement2j = -10000000;
                hit += 1;
                return;
            }
            if (movement2k < DownMiddle + (4 * scrollV) && movement2k > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2k.style.top = movement2k + "px";
                movement2k = -10000000;
                hit += 1;
                return;
            }
            if (movement2l < DownMiddle + (4 * scrollV) && movement2l > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2l.style.top = movement2l + "px";
                movement2l = -10000000;
                hit += 1;
                return;
            }
            if (movement2m < DownMiddle + (4 * scrollV) && movement2m > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2m.style.top = movement2m + "px";
                movement2m = -10000000;
                hit += 1;
                return;
            }
            if (movement2n < DownMiddle + (4 * scrollV) && movement2n > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2n.style.top = movement2n + "px";
                movement2n = -10000000;
                hit += 1;
                return;
            }
            if (movement2o < DownMiddle + (4 * scrollV) && movement2o > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2o.style.top = movement2o + "px";
                movement2o = -10000000;
                hit += 1;
                return;
            }
            if (movement2p < DownMiddle + (4 * scrollV) && movement2p > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2p.style.top = movement2p + "px";
                movement2p = -10000000;
                hit += 1;
                return;
            }
            if (movement2q < DownMiddle + (4 * scrollV) && movement2q > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2q.style.top = movement2q + "px";
                movement2q = -10000000;
                hit += 1;
                return;
            }
            if (movement2r < DownMiddle + (4 * scrollV) && movement2r > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2r.style.top = movement2r + "px";
                movement2r = -10000000;
                hit += 1;
                return;
            }
            if (movement2s < DownMiddle + (4 * scrollV) && movement2s > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2s.style.top = movement2s + "px";
                movement2s = -10000000;
                hit += 1;
                return;
            }
            if (movement2t < DownMiddle + (4 * scrollV) && movement2t > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2t.style.top = movement2t + "px";
                movement2t = -10000000;
                hit += 1;
                return;
            }
            if (movement2u < DownMiddle + (4 * scrollV) && movement2u > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2u.style.top = movement2u + "px";
                movement2u = -10000000;
                hit += 1;
                return;
            }
            if (movement2v < DownMiddle + (4 * scrollV) && movement2v > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2v.style.top = movement2v + "px";
                movement2v = -10000000;
                hit += 1;
                return;
            }
            if (movement2w < DownMiddle + (4 * scrollV) && movement2w > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2w.style.top = movement2w + "px";
                movement2w = -10000000;
                hit += 1;
                return;
            }
            if (movement2x < DownMiddle + (4 * scrollV) && movement2x > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2x.style.top = movement2x + "px";
                movement2x = -10000000;
                hit += 1;
                return;
            }
            if (movement2y < DownMiddle + (4 * scrollV) && movement2y > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2y.style.top = movement2y + "px";
                movement2y = -10000000;
                hit += 1;
                return;
            }
            if (movement2z < DownMiddle + (4 * scrollV) && movement2z > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d2z.style.top = movement2z + "px";
                movement2z = -10000000;
                hit += 1;
                return;
            }

            if (movement2 < DownMiddle + (8 * scrollV) && movement2 > DownMiddle - (8 * scrollV) && movement2z < movement2) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2.style.top = movement2 + "px";
                movement2 = -10000000;
                hit += 1;
                return;
            }
            if (movement2b < DownMiddle + (8 * scrollV) && movement2b > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2b.style.top = movement2b + "px";
                movement2b = -10000000;
                hit += 1;
                return;
            }
            if (movement2c < DownMiddle + (8 * scrollV) && movement2c > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2c.style.top = movement2c + "px";
                movement2c = -10000000;
                hit += 1;
                return;
            }
            if (movement2d < DownMiddle + (8 * scrollV) && movement2d > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2d.style.top = movement2d + "px";
                movement2d = -10000000;
                hit += 1;
                return;
            }
            if (movement2e < DownMiddle + (8 * scrollV) && movement2e > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2e.style.top = movement2e + "px";
                movement2e = -10000000;
                hit += 1;
                return;
            }
            if (movement2f < DownMiddle + (8 * scrollV) && movement2f > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2f.style.top = movement2f + "px";
                movement2f = -10000000;
                hit += 1;
                return;
            }
            if (movement2g < DownMiddle + (8 * scrollV) && movement2g > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2g.style.top = movement2g + "px";
                movement2g = -10000000;
                hit += 1;
                return;
            }
            if (movement2h < DownMiddle + (8 * scrollV) && movement2h > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2h.style.top = movement2h + "px";
                movement2h = -10000000;
                hit += 1;
                return;
            }
            if (movement2i < DownMiddle + (8 * scrollV) && movement2i > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2i.style.top = movement2i + "px";
                movement2i = -10000000;
                hit += 1;
                return;
            }
            if (movement2j < DownMiddle + (8 * scrollV) && movement2j > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2j.style.top = movement2j + "px";
                movement2j = -10000000;
                hit += 1;
                return;
            }
            if (movement2k < DownMiddle + (8 * scrollV) && movement2k > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2k.style.top = movement2k + "px";
                movement2k = -10000000;
                hit += 1;
                return;
            }
            if (movement2l < DownMiddle + (8 * scrollV) && movement2l > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2l.style.top = movement2l + "px";
                movement2l = -10000000;
                hit += 1;
                return;
            }
            if (movement2m < DownMiddle + (8 * scrollV) && movement2m > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2m.style.top = movement2m + "px";
                movement2m = -10000000;
                hit += 1;
                return;
            }
            if (movement2n < DownMiddle + (8 * scrollV) && movement2n > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2n.style.top = movement2n + "px";
                movement2n = -10000000;
                hit += 1;
                return;
            }
            if (movement2o < DownMiddle + (8 * scrollV) && movement2o > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2o.style.top = movement2o + "px";
                movement2o = -10000000;
                hit += 1;
                return;
            }
            if (movement2p < DownMiddle + (8 * scrollV) && movement2p > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2p.style.top = movement2p + "px";
                movement2p = -10000000;
                hit += 1;
                return;
            }
            if (movement2q < DownMiddle + (8 * scrollV) && movement2q > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2q.style.top = movement2q + "px";
                movement2q = -10000000;
                hit += 1;
                return;
            }
            if (movement2r < DownMiddle + (8 * scrollV) && movement2r > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2r.style.top = movement2r + "px";
                movement2r = -10000000;
                hit += 1;
                return;
            }
            if (movement2s < DownMiddle + (8 * scrollV) && movement2s > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2s.style.top = movement2s + "px";
                movement2s = -10000000;
                hit += 1;
                return;
            }
            if (movement2t < DownMiddle + (8 * scrollV) && movement2t > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2t.style.top = movement2t + "px";
                movement2t = -10000000;
                hit += 1;
                return;
            }
            if (movement2u < DownMiddle + (8 * scrollV) && movement2u > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2u.style.top = movement2u + "px";
                movement2u = -10000000;
                hit += 1;
                return;
            }
            if (movement2v < DownMiddle + (8 * scrollV) && movement2v > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2v.style.top = movement2v + "px";
                movement2v = -10000000;
                hit += 1;
                return;
            }
            if (movement2w < DownMiddle + (8 * scrollV) && movement2w > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2w.style.top = movement2w + "px";
                movement2w = -10000000;
                hit += 1;
                return;
            }
            if (movement2x < DownMiddle + (8 * scrollV) && movement2x > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2x.style.top = movement2x + "px";
                movement2x = -10000000;
                hit += 1;
                return;
            }
            if (movement2y < DownMiddle + (8 * scrollV) && movement2y > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2y.style.top = movement2y + "px";
                movement2y = -10000000;
                hit += 1;
                return;
            }
            if (movement2z < DownMiddle + (8 * scrollV) && movement2z > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d2z.style.top = movement2z + "px";
                movement2z = -10000000;
                hit += 1;
                return;
            }

            if (movement2 < DownMiddle + (12 * scrollV) && movement2 > DownMiddle - (12 * scrollV) && movement2z < movement2) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2.style.top = movement2 + "px";
                movement2 = -10000000;
                hit += 1;
                return;
            }
            if (movement2b < DownMiddle + (12 * scrollV) && movement2b > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2b.style.top = movement2b + "px";
                movement2b = -10000000;
                hit += 1;
                return;
            }
            if (movement2c < DownMiddle + (12 * scrollV) && movement2c > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2c.style.top = movement2c + "px";
                movement2c = -10000000;
                hit += 1;
                return;
            }
            if (movement2d < DownMiddle + (12 * scrollV) && movement2d > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2d.style.top = movement2d + "px";
                movement2d = -10000000;
                hit += 1;
                return;
            }
            if (movement2e < DownMiddle + (12 * scrollV) && movement2e > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2e.style.top = movement2e + "px";
                movement2e = -10000000;
                hit += 1;
                return;
            }
            if (movement2f < DownMiddle + (12 * scrollV) && movement2f > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2f.style.top = movement2f + "px";
                movement2f = -10000000;
                hit += 1;
                return;
            }
            if (movement2g < DownMiddle + (12 * scrollV) && movement2g > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2g.style.top = movement2g + "px";
                movement2g = -10000000;
                hit += 1;
                return;
            }
            if (movement2h < DownMiddle + (12 * scrollV) && movement2h > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2h.style.top = movement2h + "px";
                movement2h = -10000000;
                hit += 1;
                return;
            }
            if (movement2i < DownMiddle + (12 * scrollV) && movement2i > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2i.style.top = movement2i + "px";
                movement2i = -10000000;
                hit += 1;
                return;
            }
            if (movement2j < DownMiddle + (12 * scrollV) && movement2j > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2j.style.top = movement2j + "px";
                movement2j = -10000000;
                hit += 1;
                return;
            }
            if (movement2k < DownMiddle + (12 * scrollV) && movement2k > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2k.style.top = movement2k + "px";
                movement2k = -10000000;
                hit += 1;
                return;
            }
            if (movement2l < DownMiddle + (12 * scrollV) && movement2l > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2l.style.top = movement2l + "px";
                movement2l = -10000000;
                hit += 1;
                return;
            }
            if (movement2m < DownMiddle + (12 * scrollV) && movement2m > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2m.style.top = movement2m + "px";
                movement2m = -10000000;
                hit += 1;
                return;
            }
            if (movement2n < DownMiddle + (12 * scrollV) && movement2n > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2n.style.top = movement2n + "px";
                movement2n = -10000000;
                hit += 1;
                return;
            }
            if (movement2o < DownMiddle + (12 * scrollV) && movement2o > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2o.style.top = movement2o + "px";
                movement2o = -10000000;
                hit += 1;
                return;
            }
            if (movement2p < DownMiddle + (12 * scrollV) && movement2p > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2p.style.top = movement2p + "px";
                movement2p = -10000000;
                hit += 1;
                return;
            }
            if (movement2q < DownMiddle + (12 * scrollV) && movement2q > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2q.style.top = movement2q + "px";
                movement2q = -10000000;
                hit += 1;
                return;
            }
            if (movement2r < DownMiddle + (12 * scrollV) && movement2r > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2r.style.top = movement2r + "px";
                movement2r = -10000000;
                hit += 1;
                return;
            }
            if (movement2s < DownMiddle + (12 * scrollV) && movement2s > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2s.style.top = movement2s + "px";
                movement2s = -10000000;
                hit += 1;
                return;
            }
            if (movement2t < DownMiddle + (12 * scrollV) && movement2t > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2t.style.top = movement2t + "px";
                movement2t = -10000000;
                hit += 1;
                return;
            }
            if (movement2u < DownMiddle + (12 * scrollV) && movement2u > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2u.style.top = movement2u + "px";
                movement2u = -10000000;
                hit += 1;
                return;
            }
            if (movement2v < DownMiddle + (12 * scrollV) && movement2v > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2v.style.top = movement2v + "px";
                movement2v = -10000000;
                hit += 1;
                return;
            }
            if (movement2w < DownMiddle + (12 * scrollV) && movement2w > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2w.style.top = movement2w + "px";
                movement2w = -10000000;
                hit += 1;
                return;
            }
            if (movement2x < DownMiddle + (12 * scrollV) && movement2x > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2x.style.top = movement2x + "px";
                movement2x = -10000000;
                hit += 1;
                return;
            }
            if (movement2y < DownMiddle + (12 * scrollV) && movement2y > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2y.style.top = movement2y + "px";
                movement2y = -10000000;
                hit += 1;
                return;
            }
            if (movement2z < DownMiddle + (12 * scrollV) && movement2z > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d2z.style.top = movement2z + "px";
                movement2z = -10000000;
                hit += 1;
                return;
            }
        }
    }
    if (e.code == button3Code || e.code == "Insert") {
        if (downscroll == 0) {
            if (movement3 > UpMiddle - (4 * scrollV) && movement3 < UpMiddle + (4 * scrollV) && movement3z > movement3) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3.style.top = movement3 + "px";
                movement3 = 10000000;
                hit += 1;
                return;
            }
            if (movement3b > UpMiddle - (4 * scrollV) && movement3b < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3b.style.top = movement3b + "px";
                movement3b = 10000000;
                hit += 1;
                return;
            }
            if (movement3c > UpMiddle - (4 * scrollV) && movement3c < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3c.style.top = movement3c + "px";
                movement3c = 10000000;
                hit += 1;
                return;
            }
            if (movement3d > UpMiddle - (4 * scrollV) && movement3d < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3d.style.top = movement3d + "px";
                movement3d = 10000000;
                hit += 1;
                return;
            }
            if (movement3e > UpMiddle - (4 * scrollV) && movement3e < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3e.style.top = movement3e + "px";
                movement3e = 10000000;
                hit += 1;
                return;
            }
            if (movement3f > UpMiddle - (4 * scrollV) && movement3f < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3f.style.top = movement3f + "px";
                movement3f = 10000000;
                hit += 1;
                return;
            }
            if (movement3g > UpMiddle - (4 * scrollV) && movement3g < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3g.style.top = movement3g + "px";
                movement3g = 10000000;
                hit += 1;
                return;
            }
            if (movement3h > UpMiddle - (4 * scrollV) && movement3h < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3h.style.top = movement3h + "px";
                movement3h = 10000000;
                hit += 1;
                return;
            }
            if (movement3i > UpMiddle - (4 * scrollV) && movement3i < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3i.style.top = movement3i + "px";
                movement3i = 10000000;
                hit += 1;
                return;
            }
            if (movement3j > UpMiddle - (4 * scrollV) && movement3j < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3j.style.top = movement3j + "px";
                movement3j = 10000000;
                hit += 1;
                return;
            }
            if (movement3k > UpMiddle - (4 * scrollV) && movement3k < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3k.style.top = movement3k + "px";
                movement3k = 10000000;
                hit += 1;
                return;
            }
            if (movement3l > UpMiddle - (4 * scrollV) && movement3l < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3l.style.top = movement3l + "px";
                movement3l = 10000000;
                hit += 1;
                return;
            }
            if (movement3m > UpMiddle - (4 * scrollV) && movement3m < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3m.style.top = movement3m + "px";
                movement3m = 10000000;
                hit += 1;
                return;
            }
            if (movement3n > UpMiddle - (4 * scrollV) && movement3n < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3n.style.top = movement3n + "px";
                movement3n = 10000000;
                hit += 1;
                return;
            }
            if (movement3o > UpMiddle - (4 * scrollV) && movement3o < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3o.style.top = movement3o + "px";
                movement3o = 10000000;
                hit += 1;
                return;
            }
            if (movement3p > UpMiddle - (4 * scrollV) && movement3p < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3p.style.top = movement3p + "px";
                movement3p = 10000000;
                hit += 1;
                return;
            }
            if (movement3q > UpMiddle - (4 * scrollV) && movement3q < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3q.style.top = movement3q + "px";
                movement3q = 10000000;
                hit += 1;
                return;
            }
            if (movement3r > UpMiddle - (4 * scrollV) && movement3r < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3r.style.top = movement3r + "px";
                movement3r = 10000000;
                hit += 1;
                return;
            }
            if (movement3s > UpMiddle - (4 * scrollV) && movement3s < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3s.style.top = movement3s + "px";
                movement3s = 10000000;
                hit += 1;
                return;
            }
            if (movement3t > UpMiddle - (4 * scrollV) && movement3t < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3t.style.top = movement3t + "px";
                movement3t = 10000000;
                hit += 1;
                return;
            }
            if (movement3u > UpMiddle - (4 * scrollV) && movement3u < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3u.style.top = movement3u + "px";
                movement3u = 10000000;
                hit += 1;
                return;
            }
            if (movement3v > UpMiddle - (4 * scrollV) && movement3v < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3v.style.top = movement3v + "px";
                movement3v = 10000000;
                hit += 1;
                return;
            }
            if (movement3w > UpMiddle - (4 * scrollV) && movement3w < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3w.style.top = movement3w + "px";
                movement3w = 10000000;
                hit += 1;
                return;
            }
            if (movement3x > UpMiddle - (4 * scrollV) && movement3x < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3x.style.top = movement3x + "px";
                movement3x = 10000000;
                hit += 1;
                return;
            }
            if (movement3y > UpMiddle - (4 * scrollV) && movement3y < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3y.style.top = movement3y + "px";
                movement3y = 10000000;
                hit += 1;
                return;
            }
            if (movement3z > UpMiddle - (4 * scrollV) && movement3z < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3z.style.top = movement3z + "px";
                movement3z = 10000000;
                hit += 1;
                return;
            }

            if (movement3 > UpMiddle - (8 * scrollV) && movement3 < UpMiddle + (8 * scrollV) && movement3z > movement3) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3.style.top = movement3 + "px";
                movement3 = 10000000;
                hit += 1;
                return;
            }
            if (movement3b > UpMiddle - (8 * scrollV) && movement3b < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3b.style.top = movement3b + "px";
                movement3b = 10000000;
                hit += 1;
                return;
            }
            if (movement3c > UpMiddle - (8 * scrollV) && movement3c < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3c.style.top = movement3c + "px";
                movement3c = 10000000;
                hit += 1;
                return;
            }
            if (movement3d > UpMiddle - (8 * scrollV) && movement3d < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3d.style.top = movement3d + "px";
                movement3d = 10000000;
                hit += 1;
                return;
            }
            if (movement3e > UpMiddle - (8 * scrollV) && movement3e < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3e.style.top = movement3e + "px";
                movement3e = 10000000;
                hit += 1;
                return;
            }
            if (movement3f > UpMiddle - (8 * scrollV) && movement3f < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3f.style.top = movement3f + "px";
                movement3f = 10000000;
                hit += 1;
                return;
            }
            if (movement3g > UpMiddle - (8 * scrollV) && movement3g < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3g.style.top = movement3g + "px";
                movement3g = 10000000;
                hit += 1;
                return;
            }
            if (movement3h > UpMiddle - (8 * scrollV) && movement3h < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3h.style.top = movement3h + "px";
                movement3h = 10000000;
                hit += 1;
                return;
            }
            if (movement3i > UpMiddle - (8 * scrollV) && movement3i < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3i.style.top = movement3i + "px";
                movement3i = 10000000;
                hit += 1;
                return;
            }
            if (movement3j > UpMiddle - (8 * scrollV) && movement3j < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3j.style.top = movement3j + "px";
                movement3j = 10000000;
                hit += 1;
                return;
            }
            if (movement3k > UpMiddle - (8 * scrollV) && movement3k < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3k.style.top = movement3k + "px";
                movement3k = 10000000;
                hit += 1;
                return;
            }
            if (movement3l > UpMiddle - (8 * scrollV) && movement3l < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3l.style.top = movement3l + "px";
                movement3l = 10000000;
                hit += 1;
                return;
            }
            if (movement3m > UpMiddle - (8 * scrollV) && movement3m < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3m.style.top = movement3m + "px";
                movement3m = 10000000;
                hit += 1;
                return;
            }
            if (movement3n > UpMiddle - (8 * scrollV) && movement3n < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3n.style.top = movement3n + "px";
                movement3n = 10000000;
                hit += 1;
                return;
            }
            if (movement3o > UpMiddle - (8 * scrollV) && movement3o < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3o.style.top = movement3o + "px";
                movement3o = 10000000;
                hit += 1;
                return;
            }
            if (movement3p > UpMiddle - (8 * scrollV) && movement3p < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3p.style.top = movement3p + "px";
                movement3p = 10000000;
                hit += 1;
                return;
            }
            if (movement3q > UpMiddle - (8 * scrollV) && movement3q < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3q.style.top = movement3q + "px";
                movement3q = 10000000;
                hit += 1;
                return;
            }
            if (movement3r > UpMiddle - (8 * scrollV) && movement3r < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3r.style.top = movement3r + "px";
                movement3r = 10000000;
                hit += 1;
                return;
            }
            if (movement3s > UpMiddle - (8 * scrollV) && movement3s < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3s.style.top = movement3s + "px";
                movement3s = 10000000;
                hit += 1;
                return;
            }
            if (movement3t > UpMiddle - (8 * scrollV) && movement3t < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3t.style.top = movement3t + "px";
                movement3t = 10000000;
                hit += 1;
                return;
            }
            if (movement3u > UpMiddle - (8 * scrollV) && movement3u < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3u.style.top = movement3u + "px";
                movement3u = 10000000;
                hit += 1;
                return;
            }
            if (movement3v > UpMiddle - (8 * scrollV) && movement3v < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3v.style.top = movement3v + "px";
                movement3v = 10000000;
                hit += 1;
                return;
            }
            if (movement3w > UpMiddle - (8 * scrollV) && movement3w < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3w.style.top = movement3w + "px";
                movement3w = 10000000;
                hit += 1;
                return;
            }
            if (movement3x > UpMiddle - (8 * scrollV) && movement3x < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3x.style.top = movement3x + "px";
                movement3x = 10000000;
                hit += 1;
                return;
            }
            if (movement3y > UpMiddle - (8 * scrollV) && movement3y < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3y.style.top = movement3y + "px";
                movement3y = 10000000;
                hit += 1;
                return;
            }
            if (movement3z > UpMiddle - (8 * scrollV) && movement3z < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3z.style.top = movement3z + "px";
                movement3z = 10000000;
                hit += 1;
                return;
            }

            if (movement3 > UpMiddle - (12 * scrollV) && movement3 < UpMiddle + (12 * scrollV) && movement3z > movement3) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3.style.top = movement3 + "px";
                movement3 = 10000000;
                hit += 1;
                return;
            }
            if (movement3b > UpMiddle - (12 * scrollV) && movement3b < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3b.style.top = movement3b + "px";
                movement3b = 10000000;
                hit += 1;
                return;
            }
            if (movement3c > UpMiddle - (12 * scrollV) && movement3c < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3c.style.top = movement3c + "px";
                movement3c = 10000000;
                hit += 1;
                return;
            }
            if (movement3d > UpMiddle - (12 * scrollV) && movement3d < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3d.style.top = movement3d + "px";
                movement3d = 10000000;
                hit += 1;
                return;
            }
            if (movement3e > UpMiddle - (12 * scrollV) && movement3e < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3e.style.top = movement3e + "px";
                movement3e = 10000000;
                hit += 1;
                return;
            }
            if (movement3f > UpMiddle - (12 * scrollV) && movement3f < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3f.style.top = movement3f + "px";
                movement3f = 10000000;
                hit += 1;
                return;
            }
            if (movement3g > UpMiddle - (12 * scrollV) && movement3g < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3g.style.top = movement3g + "px";
                movement3g = 10000000;
                hit += 1;
                return;
            }
            if (movement3h > UpMiddle - (12 * scrollV) && movement3h < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3h.style.top = movement3h + "px";
                movement3h = 10000000;
                hit += 1;
                return;
            }
            if (movement3i > UpMiddle - (12 * scrollV) && movement3i < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3i.style.top = movement3i + "px";
                movement3i = 10000000;
                hit += 1;
                return;
            }
            if (movement3j > UpMiddle - (12 * scrollV) && movement3j < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3j.style.top = movement3j + "px";
                movement3j = 10000000;
                hit += 1;
                return;
            }
            if (movement3k > UpMiddle - (12 * scrollV) && movement3k < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3k.style.top = movement3k + "px";
                movement3k = 10000000;
                hit += 1;
                return;
            }
            if (movement3l > UpMiddle - (12 * scrollV) && movement3l < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3l.style.top = movement3l + "px";
                movement3l = 10000000;
                hit += 1;
                return;
            }
            if (movement3m > UpMiddle - (12 * scrollV) && movement3m < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3m.style.top = movement3m + "px";
                movement3m = 10000000;
                hit += 1;
                return;
            }
            if (movement3n > UpMiddle - (12 * scrollV) && movement3n < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3n.style.top = movement3n + "px";
                movement3n = 10000000;
                hit += 1;
                return;
            }
            if (movement3o > UpMiddle - (12 * scrollV) && movement3o < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3o.style.top = movement3o + "px";
                movement3o = 10000000;
                hit += 1;
                return;
            }
            if (movement3p > UpMiddle - (12 * scrollV) && movement3p < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3p.style.top = movement3p + "px";
                movement3p = 10000000;
                hit += 1;
                return;
            }
            if (movement3q > UpMiddle - (12 * scrollV) && movement3q < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3q.style.top = movement3q + "px";
                movement3q = 10000000;
                hit += 1;
                return;
            }
            if (movement3r > UpMiddle - (12 * scrollV) && movement3r < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3r.style.top = movement3r + "px";
                movement3r = 10000000;
                hit += 1;
                return;
            }
            if (movement3s > UpMiddle - (12 * scrollV) && movement3s < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3s.style.top = movement3s + "px";
                movement3s = 10000000;
                hit += 1;
                return;
            }
            if (movement3t > UpMiddle - (12 * scrollV) && movement3t < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3t.style.top = movement3t + "px";
                movement3t = 10000000;
                hit += 1;
                return;
            }
            if (movement3u > UpMiddle - (12 * scrollV) && movement3u < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3u.style.top = movement3u + "px";
                movement3u = 10000000;
                hit += 1;
                return;
            }
            if (movement3v > UpMiddle - (12 * scrollV) && movement3v < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3v.style.top = movement3v + "px";
                movement3v = 10000000;
                hit += 1;
                return;
            }
            if (movement3w > UpMiddle - (12 * scrollV) && movement3w < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3w.style.top = movement3w + "px";
                movement3w = 10000000;
                hit += 1;
                return;
            }
            if (movement3x > UpMiddle - (12 * scrollV) && movement3x < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3x.style.top = movement3x + "px";
                movement3x = 10000000;
                hit += 1;
                return;
            }
            if (movement3y > UpMiddle - (12 * scrollV) && movement3y < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3y.style.top = movement3y + "px";
                movement3y = 10000000;
                hit += 1;
                return;
            }
            if (movement3z > UpMiddle - (12 * scrollV) && movement3z < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3z.style.top = movement3z + "px";
                movement3z = 10000000;
                hit += 1;
                return;
            }
        }
        if (downscroll == 1) {
            if (movement3 < DownMiddle + (4 * scrollV) && movement3 > DownMiddle - (4 * scrollV) && movement3z < movement3) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3.style.top = movement3 + "px";
                movement3 = -10000000;
                hit += 1;
                return;
            }
            if (movement3b < DownMiddle + (4 * scrollV) && movement3b > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3b.style.top = movement3b + "px";
                movement3b = -10000000;
                hit += 1;
                return;
            }
            if (movement3c < DownMiddle + (4 * scrollV) && movement3c > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3c.style.top = movement3c + "px";
                movement3c = -10000000;
                hit += 1;
                return;
            }
            if (movement3d < DownMiddle + (4 * scrollV) && movement3d > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3d.style.top = movement3d + "px";
                movement3d = -10000000;
                hit += 1;
                return;
            }
            if (movement3e < DownMiddle + (4 * scrollV) && movement3e > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3e.style.top = movement3e + "px";
                movement3e = -10000000;
                hit += 1;
                return;
            }
            if (movement3f < DownMiddle + (4 * scrollV) && movement3f > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3f.style.top = movement3f + "px";
                movement3f = -10000000;
                hit += 1;
                return;
            }
            if (movement3g < DownMiddle + (4 * scrollV) && movement3g > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3g.style.top = movement3g + "px";
                movement3g = -10000000;
                hit += 1;
                return;
            }
            if (movement3h < DownMiddle + (4 * scrollV) && movement3h > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3h.style.top = movement3h + "px";
                movement3h = -10000000;
                hit += 1;
                return;
            }
            if (movement3i < DownMiddle + (4 * scrollV) && movement3i > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3i.style.top = movement3i + "px";
                movement3i = -10000000;
                hit += 1;
                return;
            }
            if (movement3j < DownMiddle + (4 * scrollV) && movement3j > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3j.style.top = movement3j + "px";
                movement3j = -10000000;
                hit += 1;
                return;
            }
            if (movement3k < DownMiddle + (4 * scrollV) && movement3k > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3k.style.top = movement3k + "px";
                movement3k = -10000000;
                hit += 1;
                return;
            }
            if (movement3l < DownMiddle + (4 * scrollV) && movement3l > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3l.style.top = movement3l + "px";
                movement3l = -10000000;
                hit += 1;
                return;
            }
            if (movement3m < DownMiddle + (4 * scrollV) && movement3m > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3m.style.top = movement3m + "px";
                movement3m = -10000000;
                hit += 1;
                return;
            }
            if (movement3n < DownMiddle + (4 * scrollV) && movement3n > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3n.style.top = movement3n + "px";
                movement3n = -10000000;
                hit += 1;
                return;
            }
            if (movement3o < DownMiddle + (4 * scrollV) && movement3o > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3o.style.top = movement3o + "px";
                movement3o = -10000000;
                hit += 1;
                return;
            }
            if (movement3p < DownMiddle + (4 * scrollV) && movement3p > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3p.style.top = movement3p + "px";
                movement3p = -10000000;
                hit += 1;
                return;
            }
            if (movement3q < DownMiddle + (4 * scrollV) && movement3q > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3q.style.top = movement3q + "px";
                movement3q = -10000000;
                hit += 1;
                return;
            }
            if (movement3r < DownMiddle + (4 * scrollV) && movement3r > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3r.style.top = movement3r + "px";
                movement3r = -10000000;
                hit += 1;
                return;
            }
            if (movement3s < DownMiddle + (4 * scrollV) && movement3s > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3s.style.top = movement3s + "px";
                movement3s = -10000000;
                hit += 1;
                return;
            }
            if (movement3t < DownMiddle + (4 * scrollV) && movement3t > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3t.style.top = movement3t + "px";
                movement3t = -10000000;
                hit += 1;
                return;
            }
            if (movement3u < DownMiddle + (4 * scrollV) && movement3u > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3u.style.top = movement3u + "px";
                movement3u = -10000000;
                hit += 1;
                return;
            }
            if (movement3v < DownMiddle + (4 * scrollV) && movement3v > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3v.style.top = movement3v + "px";
                movement3v = -10000000;
                hit += 1;
                return;
            }
            if (movement3w < DownMiddle + (4 * scrollV) && movement3w > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3w.style.top = movement3w + "px";
                movement3w = -10000000;
                hit += 1;
                return;
            }
            if (movement3x < DownMiddle + (4 * scrollV) && movement3x > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3x.style.top = movement3x + "px";
                movement3x = -10000000;
                hit += 1;
                return;
            }
            if (movement3y < DownMiddle + (4 * scrollV) && movement3y > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3y.style.top = movement3y + "px";
                movement3y = -10000000;
                hit += 1;
                return;
            }
            if (movement3z < DownMiddle + (4 * scrollV) && movement3z > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d3z.style.top = movement3z + "px";
                movement3z = -10000000;
                hit += 1;
                return;
            }

            if (movement3 < DownMiddle + (8 * scrollV) && movement3 > DownMiddle - (8 * scrollV) && movement3z < movement3) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3.style.top = movement3 + "px";
                movement3 = -10000000;
                hit += 1;
                return;
            }
            if (movement3b < DownMiddle + (8 * scrollV) && movement3b > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3b.style.top = movement3b + "px";
                movement3b = -10000000;
                hit += 1;
                return;
            }
            if (movement3c < DownMiddle + (8 * scrollV) && movement3c > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3c.style.top = movement3c + "px";
                movement3c = -10000000;
                hit += 1;
                return;
            }
            if (movement3d < DownMiddle + (8 * scrollV) && movement3d > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3d.style.top = movement3d + "px";
                movement3d = -10000000;
                hit += 1;
                return;
            }
            if (movement3e < DownMiddle + (8 * scrollV) && movement3e > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3e.style.top = movement3e + "px";
                movement3e = -10000000;
                hit += 1;
                return;
            }
            if (movement3f < DownMiddle + (8 * scrollV) && movement3f > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3f.style.top = movement3f + "px";
                movement3f = -10000000;
                hit += 1;
                return;
            }
            if (movement3g < DownMiddle + (8 * scrollV) && movement3g > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3g.style.top = movement3g + "px";
                movement3g = -10000000;
                hit += 1;
                return;
            }
            if (movement3h < DownMiddle + (8 * scrollV) && movement3h > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3h.style.top = movement3h + "px";
                movement3h = -10000000;
                hit += 1;
                return;
            }
            if (movement3i < DownMiddle + (8 * scrollV) && movement3i > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3i.style.top = movement3i + "px";
                movement3i = -10000000;
                hit += 1;
                return;
            }
            if (movement3j < DownMiddle + (8 * scrollV) && movement3j > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3j.style.top = movement3j + "px";
                movement3j = -10000000;
                hit += 1;
                return;
            }
            if (movement3k < DownMiddle + (8 * scrollV) && movement3k > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3k.style.top = movement3k + "px";
                movement3k = -10000000;
                hit += 1;
                return;
            }
            if (movement3l < DownMiddle + (8 * scrollV) && movement3l > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3l.style.top = movement3l + "px";
                movement3l = -10000000;
                hit += 1;
                return;
            }
            if (movement3m < DownMiddle + (8 * scrollV) && movement3m > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3m.style.top = movement3m + "px";
                movement3m = -10000000;
                hit += 1;
                return;
            }
            if (movement3n < DownMiddle + (8 * scrollV) && movement3n > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3n.style.top = movement3n + "px";
                movement3n = -10000000;
                hit += 1;
                return;
            }
            if (movement3o < DownMiddle + (8 * scrollV) && movement3o > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3o.style.top = movement3o + "px";
                movement3o = -10000000;
                hit += 1;
                return;
            }
            if (movement3p < DownMiddle + (8 * scrollV) && movement3p > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3p.style.top = movement3p + "px";
                movement3p = -10000000;
                hit += 1;
                return;
            }
            if (movement3q < DownMiddle + (8 * scrollV) && movement3q > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3q.style.top = movement3q + "px";
                movement3q = -10000000;
                hit += 1;
                return;
            }
            if (movement3r < DownMiddle + (8 * scrollV) && movement3r > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3r.style.top = movement3r + "px";
                movement3r = -10000000;
                hit += 1;
                return;
            }
            if (movement3s < DownMiddle + (8 * scrollV) && movement3s > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3s.style.top = movement3s + "px";
                movement3s = -10000000;
                hit += 1;
                return;
            }
            if (movement3t < DownMiddle + (8 * scrollV) && movement3t > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3t.style.top = movement3t + "px";
                movement3t = -10000000;
                hit += 1;
                return;
            }
            if (movement3u < DownMiddle + (8 * scrollV) && movement3u > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3u.style.top = movement3u + "px";
                movement3u = -10000000;
                hit += 1;
                return;
            }
            if (movement3v < DownMiddle + (8 * scrollV) && movement3v > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3v.style.top = movement3v + "px";
                movement3v = -10000000;
                hit += 1;
                return;
            }
            if (movement3w < DownMiddle + (8 * scrollV) && movement3w > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3w.style.top = movement3w + "px";
                movement3w = -10000000;
                hit += 1;
                return;
            }
            if (movement3x < DownMiddle + (8 * scrollV) && movement3x > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3x.style.top = movement3x + "px";
                movement3x = -10000000;
                hit += 1;
                return;
            }
            if (movement3y < DownMiddle + (8 * scrollV) && movement3y > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3y.style.top = movement3y + "px";
                movement3y = -10000000;
                hit += 1;
                return;
            }
            if (movement3z < DownMiddle + (8 * scrollV) && movement3z > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d3z.style.top = movement3z + "px";
                movement3z = -10000000;
                hit += 1;
                return;
            }

            if (movement3 < DownMiddle + (12 * scrollV) && movement3 > DownMiddle - (12 * scrollV) && movement3z < movement3) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3.style.top = movement3 + "px";
                movement3 = -10000000;
                hit += 1;
                return;
            }
            if (movement3b < DownMiddle + (12 * scrollV) && movement3b > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3b.style.top = movement3b + "px";
                movement3b = -10000000;
                hit += 1;
                return;
            }
            if (movement3c < DownMiddle + (12 * scrollV) && movement3c > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3c.style.top = movement3c + "px";
                movement3c = -10000000;
                hit += 1;
                return;
            }
            if (movement3d < DownMiddle + (12 * scrollV) && movement3d > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3d.style.top = movement3d + "px";
                movement3d = -10000000;
                hit += 1;
                return;
            }
            if (movement3e < DownMiddle + (12 * scrollV) && movement3e > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3e.style.top = movement3e + "px";
                movement3e = -10000000;
                hit += 1;
                return;
            }
            if (movement3f < DownMiddle + (12 * scrollV) && movement3f > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3f.style.top = movement3f + "px";
                movement3f = -10000000;
                hit += 1;
                return;
            }
            if (movement3g < DownMiddle + (12 * scrollV) && movement3g > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3g.style.top = movement3g + "px";
                movement3g = -10000000;
                hit += 1;
                return;
            }
            if (movement3h < DownMiddle + (12 * scrollV) && movement3h > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3h.style.top = movement3h + "px";
                movement3h = -10000000;
                hit += 1;
                return;
            }
            if (movement3i < DownMiddle + (12 * scrollV) && movement3i > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3i.style.top = movement3i + "px";
                movement3i = -10000000;
                hit += 1;
                return;
            }
            if (movement3j < DownMiddle + (12 * scrollV) && movement3j > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3j.style.top = movement3j + "px";
                movement3j = -10000000;
                hit += 1;
                return;
            }
            if (movement3k < DownMiddle + (12 * scrollV) && movement3k > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3k.style.top = movement3k + "px";
                movement3k = -10000000;
                hit += 1;
                return;
            }
            if (movement3l < DownMiddle + (12 * scrollV) && movement3l > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3l.style.top = movement3l + "px";
                movement3l = -10000000;
                hit += 1;
                return;
            }
            if (movement3m < DownMiddle + (12 * scrollV) && movement3m > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3m.style.top = movement3m + "px";
                movement3m = -10000000;
                hit += 1;
                return;
            }
            if (movement3n < DownMiddle + (12 * scrollV) && movement3n > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3n.style.top = movement3n + "px";
                movement3n = -10000000;
                hit += 1;
                return;
            }
            if (movement3o < DownMiddle + (12 * scrollV) && movement3o > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3o.style.top = movement3o + "px";
                movement3o = -10000000;
                hit += 1;
                return;
            }
            if (movement3p < DownMiddle + (12 * scrollV) && movement3p > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3p.style.top = movement3p + "px";
                movement3p = -10000000;
                hit += 1;
                return;
            }
            if (movement3q < DownMiddle + (12 * scrollV) && movement3q > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3q.style.top = movement3q + "px";
                movement3q = -10000000;
                hit += 1;
                return;
            }
            if (movement3r < DownMiddle + (12 * scrollV) && movement3r > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3r.style.top = movement3r + "px";
                movement3r = -10000000;
                hit += 1;
                return;
            }
            if (movement3s < DownMiddle + (12 * scrollV) && movement3s > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3s.style.top = movement3s + "px";
                movement3s = -10000000;
                hit += 1;
                return;
            }
            if (movement3t < DownMiddle + (12 * scrollV) && movement3t > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3t.style.top = movement3t + "px";
                movement3t = -10000000;
                hit += 1;
                return;
            }
            if (movement3u < DownMiddle + (12 * scrollV) && movement3u > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3u.style.top = movement3u + "px";
                movement3u = -10000000;
                hit += 1;
                return;
            }
            if (movement3v < DownMiddle + (12 * scrollV) && movement3v > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3v.style.top = movement3v + "px";
                movement3v = -10000000;
                hit += 1;
                return;
            }
            if (movement3w < DownMiddle + (12 * scrollV) && movement3w > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3w.style.top = movement3w + "px";
                movement3w = -10000000;
                hit += 1;
                return;
            }
            if (movement3x < DownMiddle + (12 * scrollV) && movement3x > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3x.style.top = movement3x + "px";
                movement3x = -10000000;
                hit += 1;
                return;
            }
            if (movement3y < DownMiddle + (12 * scrollV) && movement3y > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3y.style.top = movement3y + "px";
                movement3y = -10000000;
                hit += 1;
                return;
            }
            if (movement3z < DownMiddle + (12 * scrollV) && movement3z > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d3z.style.top = movement3z + "px";
                movement3z = -10000000;
                hit += 1;
                return;
            }
        }
    }
    if (e.code == button4Code || e.code == "Home") {
        if (downscroll == 0) {
            if (movement4 > UpMiddle - (4 * scrollV) && movement4 < UpMiddle + (4 * scrollV) && movement4z > movement4) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4.style.top = movement4 + "px";
                movement4 = 10000000;
                hit += 1;
                return;
            }
            if (movement4b > UpMiddle - (4 * scrollV) && movement4b < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4b.style.top = movement4b + "px";
                movement4b = 10000000;
                hit += 1;
                return;
            }
            if (movement4c > UpMiddle - (4 * scrollV) && movement4c < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4c.style.top = movement4c + "px";
                movement4c = 10000000;
                hit += 1;
                return;
            }
            if (movement4d > UpMiddle - (4 * scrollV) && movement4d < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4d.style.top = movement4d + "px";
                movement4d = 10000000;
                hit += 1;
                return;
            }
            if (movement4e > UpMiddle - (4 * scrollV) && movement4e < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4e.style.top = movement4e + "px";
                movement4e = 10000000;
                hit += 1;
                return;
            }
            if (movement4f > UpMiddle - (4 * scrollV) && movement4f < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4f.style.top = movement4f + "px";
                movement4f = 10000000;
                hit += 1;
                return;
            }
            if (movement4g > UpMiddle - (4 * scrollV) && movement4g < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4g.style.top = movement4g + "px";
                movement4g = 10000000;
                hit += 1;
                return;
            }
            if (movement4h > UpMiddle - (4 * scrollV) && movement4h < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4h.style.top = movement4h + "px";
                movement4h = 10000000;
                hit += 1;
                return;
            }
            if (movement4i > UpMiddle - (4 * scrollV) && movement4i < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4i.style.top = movement4i + "px";
                movement4i = 10000000;
                hit += 1;
                return;
            }
            if (movement4j > UpMiddle - (4 * scrollV) && movement4j < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4j.style.top = movement4j + "px";
                movement4j = 10000000;
                hit += 1;
                return;
            }
            if (movement4k > UpMiddle - (4 * scrollV) && movement4k < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4k.style.top = movement4k + "px";
                movement4k = 10000000;
                hit += 1;
                return;
            }
            if (movement4l > UpMiddle - (4 * scrollV) && movement4l < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4l.style.top = movement4l + "px";
                movement4l = 10000000;
                hit += 1;
                return;
            }
            if (movement4m > UpMiddle - (4 * scrollV) && movement4m < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4m.style.top = movement4m + "px";
                movement4m = 10000000;
                hit += 1;
                return;
            }
            if (movement4n > UpMiddle - (4 * scrollV) && movement4n < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4n.style.top = movement4n + "px";
                movement4n = 10000000;
                hit += 1;
                return;
            }
            if (movement4o > UpMiddle - (4 * scrollV) && movement4o < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4o.style.top = movement4o + "px";
                movement4o = 10000000;
                hit += 1;
                return;
            }
            if (movement4p > UpMiddle - (4 * scrollV) && movement4p < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4p.style.top = movement4p + "px";
                movement4p = 10000000;
                hit += 1;
                return;
            }
            if (movement4q > UpMiddle - (4 * scrollV) && movement4q < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4q.style.top = movement4q + "px";
                movement4q = 10000000;
                hit += 1;
                return;
            }
            if (movement4r > UpMiddle - (4 * scrollV) && movement4r < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4r.style.top = movement4r + "px";
                movement4r = 10000000;
                hit += 1;
                return;
            }
            if (movement4s > UpMiddle - (4 * scrollV) && movement4s < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4s.style.top = movement4s + "px";
                movement4s = 10000000;
                hit += 1;
                return;
            }
            if (movement4t > UpMiddle - (4 * scrollV) && movement4t < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4t.style.top = movement4t + "px";
                movement4t = 10000000;
                hit += 1;
                return;
            }
            if (movement4u > UpMiddle - (4 * scrollV) && movement4u < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4u.style.top = movement4u + "px";
                movement4u = 10000000;
                hit += 1;
                return;
            }
            if (movement4v > UpMiddle - (4 * scrollV) && movement4v < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4v.style.top = movement4v + "px";
                movement4v = 10000000;
                hit += 1;
                return;
            }
            if (movement4w > UpMiddle - (4 * scrollV) && movement4w < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4w.style.top = movement4w + "px";
                movement4w = 10000000;
                hit += 1;
                return;
            }
            if (movement4x > UpMiddle - (4 * scrollV) && movement4x < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4x.style.top = movement4x + "px";
                movement4x = 10000000;
                hit += 1;
                return;
            }
            if (movement4y > UpMiddle - (4 * scrollV) && movement4y < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4y.style.top = movement4y + "px";
                movement4y = 10000000;
                hit += 1;
                return;
            }
            if (movement4z > UpMiddle - (4 * scrollV) && movement4z < UpMiddle + (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4z.style.top = movement4z + "px";
                movement4z = 10000000;
                hit += 1;
                return;
            }

            if (movement4 > UpMiddle - (8 * scrollV) && movement4 < UpMiddle + (8 * scrollV) && movement4z > movement4) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4.style.top = movement4 + "px";
                movement4 = 10000000;
                hit += 1;
                return;
            }
            if (movement4b > UpMiddle - (8 * scrollV) && movement4b < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4b.style.top = movement4b + "px";
                movement4b = 10000000;
                hit += 1;
                return;
            }
            if (movement4c > UpMiddle - (8 * scrollV) && movement4c < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4c.style.top = movement4c + "px";
                movement4c = 10000000;
                hit += 1;
                return;
            }
            if (movement4d > UpMiddle - (8 * scrollV) && movement4d < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4d.style.top = movement4d + "px";
                movement4d = 10000000;
                hit += 1;
                return;
            }
            if (movement4e > UpMiddle - (8 * scrollV) && movement4e < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4e.style.top = movement4e + "px";
                movement4e = 10000000;
                hit += 1;
                return;
            }
            if (movement4f > UpMiddle - (8 * scrollV) && movement4f < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4f.style.top = movement4f + "px";
                movement4f = 10000000;
                hit += 1;
                return;
            }
            if (movement4g > UpMiddle - (8 * scrollV) && movement4g < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4g.style.top = movement4g + "px";
                movement4g = 10000000;
                hit += 1;
                return;
            }
            if (movement4h > UpMiddle - (8 * scrollV) && movement4h < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4h.style.top = movement4h + "px";
                movement4h = 10000000;
                hit += 1;
                return;
            }
            if (movement4i > UpMiddle - (8 * scrollV) && movement4i < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4i.style.top = movement4i + "px";
                movement4i = 10000000;
                hit += 1;
                return;
            }
            if (movement4j > UpMiddle - (8 * scrollV) && movement4j < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4j.style.top = movement4j + "px";
                movement4j = 10000000;
                hit += 1;
                return;
            }
            if (movement4k > UpMiddle - (8 * scrollV) && movement4k < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4k.style.top = movement4k + "px";
                movement4k = 10000000;
                hit += 1;
                return;
            }
            if (movement4l > UpMiddle - (8 * scrollV) && movement4l < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4l.style.top = movement4l + "px";
                movement4l = 10000000;
                hit += 1;
                return;
            }
            if (movement4m > UpMiddle - (8 * scrollV) && movement4m < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4m.style.top = movement4m + "px";
                movement4m = 10000000;
                hit += 1;
                return;
            }
            if (movement4n > UpMiddle - (8 * scrollV) && movement4n < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4n.style.top = movement4n + "px";
                movement4n = 10000000;
                hit += 1;
                return;
            }
            if (movement4o > UpMiddle - (8 * scrollV) && movement4o < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4o.style.top = movement4o + "px";
                movement4o = 10000000;
                hit += 1;
                return;
            }
            if (movement4p > UpMiddle - (8 * scrollV) && movement4p < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4p.style.top = movement4p + "px";
                movement4p = 10000000;
                hit += 1;
                return;
            }
            if (movement4q > UpMiddle - (8 * scrollV) && movement4q < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4q.style.top = movement4q + "px";
                movement4q = 10000000;
                hit += 1;
                return;
            }
            if (movement4r > UpMiddle - (8 * scrollV) && movement4r < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4r.style.top = movement4r + "px";
                movement4r = 10000000;
                hit += 1;
                return;
            }
            if (movement4s > UpMiddle - (8 * scrollV) && movement4s < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4s.style.top = movement4s + "px";
                movement4s = 10000000;
                hit += 1;
                return;
            }
            if (movement4t > UpMiddle - (8 * scrollV) && movement4t < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4t.style.top = movement4t + "px";
                movement4t = 10000000;
                hit += 1;
                return;
            }
            if (movement4u > UpMiddle - (8 * scrollV) && movement4u < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4u.style.top = movement4u + "px";
                movement4u = 10000000;
                hit += 1;
                return;
            }
            if (movement4v > UpMiddle - (8 * scrollV) && movement4v < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4v.style.top = movement4v + "px";
                movement4v = 10000000;
                hit += 1;
                return;
            }
            if (movement4w > UpMiddle - (8 * scrollV) && movement4w < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4w.style.top = movement4w + "px";
                movement4w = 10000000;
                hit += 1;
                return;
            }
            if (movement4x > UpMiddle - (8 * scrollV) && movement4x < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4x.style.top = movement4x + "px";
                movement4x = 10000000;
                hit += 1;
                return;
            }
            if (movement4y > UpMiddle - (8 * scrollV) && movement4y < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4y.style.top = movement4y + "px";
                movement4y = 10000000;
                hit += 1;
                return;
            }
            if (movement4z > UpMiddle - (8 * scrollV) && movement4z < UpMiddle + (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4z.style.top = movement4z + "px";
                movement4z = 10000000;
                hit += 1;
                return;
            }

            if (movement4 > UpMiddle - (12 * scrollV) && movement4 < UpMiddle + (12 * scrollV) && movement4z > movement4) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4.style.top = movement4 + "px";
                movement4 = 10000000;
                hit += 1;
                return;
            }
            if (movement4b > UpMiddle - (12 * scrollV) && movement4b < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4b.style.top = movement4b + "px";
                movement4b = 10000000;
                hit += 1;
                return;
            }
            if (movement4c > UpMiddle - (12 * scrollV) && movement4c < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4c.style.top = movement4c + "px";
                movement4c = 10000000;
                hit += 1;
                return;
            }
            if (movement4d > UpMiddle - (12 * scrollV) && movement4d < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4d.style.top = movement4d + "px";
                movement4d = 10000000;
                hit += 1;
                return;
            }
            if (movement4e > UpMiddle - (12 * scrollV) && movement4e < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4e.style.top = movement4e + "px";
                movement4e = 10000000;
                hit += 1;
                return;
            }
            if (movement4f > UpMiddle - (12 * scrollV) && movement4f < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4f.style.top = movement4f + "px";
                movement4f = 10000000;
                hit += 1;
                return;
            }
            if (movement4g > UpMiddle - (12 * scrollV) && movement4g < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4g.style.top = movement4g + "px";
                movement4g = 10000000;
                hit += 1;
                return;
            }
            if (movement4h > UpMiddle - (12 * scrollV) && movement4h < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4h.style.top = movement4h + "px";
                movement4h = 10000000;
                hit += 1;
                return;
            }
            if (movement4i > UpMiddle - (12 * scrollV) && movement4i < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4i.style.top = movement4i + "px";
                movement4i = 10000000;
                hit += 1;
                return;
            }
            if (movement4j > UpMiddle - (12 * scrollV) && movement4j < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4j.style.top = movement4j + "px";
                movement4j = 10000000;
                hit += 1;
                return;
            }
            if (movement4k > UpMiddle - (12 * scrollV) && movement4k < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4k.style.top = movement4k + "px";
                movement4k = 10000000;
                hit += 1;
                return;
            }
            if (movement4l > UpMiddle - (12 * scrollV) && movement4l < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4l.style.top = movement4l + "px";
                movement4l = 10000000;
                hit += 1;
                return;
            }
            if (movement4m > UpMiddle - (12 * scrollV) && movement4m < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4m.style.top = movement4m + "px";
                movement4m = 10000000;
                hit += 1;
                return;
            }
            if (movement4n > UpMiddle - (12 * scrollV) && movement4n < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4n.style.top = movement4n + "px";
                movement4n = 10000000;
                hit += 1;
                return;
            }
            if (movement4o > UpMiddle - (12 * scrollV) && movement4o < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4o.style.top = movement4o + "px";
                movement4o = 10000000;
                hit += 1;
                return;
            }
            if (movement4p > UpMiddle - (12 * scrollV) && movement4p < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4p.style.top = movement4p + "px";
                movement4p = 10000000;
                hit += 1;
                return;
            }
            if (movement4q > UpMiddle - (12 * scrollV) && movement4q < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4q.style.top = movement4q + "px";
                movement4q = 10000000;
                hit += 1;
                return;
            }
            if (movement4r > UpMiddle - (12 * scrollV) && movement4r < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4r.style.top = movement4r + "px";
                movement4r = 10000000;
                hit += 1;
                return;
            }
            if (movement4s > UpMiddle - (12 * scrollV) && movement4s < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4s.style.top = movement4s + "px";
                movement4s = 10000000;
                hit += 1;
                return;
            }
            if (movement4t > UpMiddle - (12 * scrollV) && movement4t < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4t.style.top = movement4t + "px";
                movement4t = 10000000;
                hit += 1;
                return;
            }
            if (movement4u > UpMiddle - (12 * scrollV) && movement4u < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4u.style.top = movement4u + "px";
                movement4u = 10000000;
                hit += 1;
                return;
            }
            if (movement4v > UpMiddle - (12 * scrollV) && movement4v < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4v.style.top = movement4v + "px";
                movement4v = 10000000;
                hit += 1;
                return;
            }
            if (movement4w > UpMiddle - (12 * scrollV) && movement4w < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4w.style.top = movement4w + "px";
                movement4w = 10000000;
                hit += 1;
                return;
            }
            if (movement4x > UpMiddle - (12 * scrollV) && movement4x < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4x.style.top = movement4x + "px";
                movement4x = 10000000;
                hit += 1;
                return;
            }
            if (movement4y > UpMiddle - (12 * scrollV) && movement4y < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4y.style.top = movement4y + "px";
                movement4y = 10000000;
                hit += 1;
                return;
            }
            if (movement4z > UpMiddle - (12 * scrollV) && movement4z < UpMiddle + (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4z.style.top = movement4z + "px";
                movement4z = 10000000;
                hit += 1;
                return;
            }
        }
        if (downscroll == 1) {
            if (movement4 < DownMiddle + (4 * scrollV) && movement4 > DownMiddle - (4 * scrollV) && movement4z < movement4) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4.style.top = movement4 + "px";
                movement4 = -10000000;
                hit += 1;
                return;
            }
            if (movement4b < DownMiddle + (4 * scrollV) && movement4b > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4b.style.top = movement4b + "px";
                movement4b = -10000000;
                hit += 1;
                return;
            }
            if (movement4c < DownMiddle + (4 * scrollV) && movement4c > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4c.style.top = movement4c + "px";
                movement4c = -10000000;
                hit += 1;
                return;
            }
            if (movement4d < DownMiddle + (4 * scrollV) && movement4d > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4d.style.top = movement4d + "px";
                movement4d = -10000000;
                hit += 1;
                return;
            }
            if (movement4e < DownMiddle + (4 * scrollV) && movement4e > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4e.style.top = movement4e + "px";
                movement4e = -10000000;
                hit += 1;
                return;
            }
            if (movement4f < DownMiddle + (4 * scrollV) && movement4f > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4f.style.top = movement4f + "px";
                movement4f = -10000000;
                hit += 1;
                return;
            }
            if (movement4g < DownMiddle + (4 * scrollV) && movement4g > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4g.style.top = movement4g + "px";
                movement4g = -10000000;
                hit += 1;
                return;
            }
            if (movement4h < DownMiddle + (4 * scrollV) && movement4h > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4h.style.top = movement4h + "px";
                movement4h = -10000000;
                hit += 1;
                return;
            }
            if (movement4i < DownMiddle + (4 * scrollV) && movement4i > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4i.style.top = movement4i + "px";
                movement4i = -10000000;
                hit += 1;
                return;
            }
            if (movement4j < DownMiddle + (4 * scrollV) && movement4j > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4j.style.top = movement4j + "px";
                movement4j = -10000000;
                hit += 1;
                return;
            }
            if (movement4k < DownMiddle + (4 * scrollV) && movement4k > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4k.style.top = movement4k + "px";
                movement4k = -10000000;
                hit += 1;
                return;
            }
            if (movement4l < DownMiddle + (4 * scrollV) && movement4l > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4l.style.top = movement4l + "px";
                movement4l = -10000000;
                hit += 1;
                return;
            }
            if (movement4m < DownMiddle + (4 * scrollV) && movement4m > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4m.style.top = movement4m + "px";
                movement4m = -10000000;
                hit += 1;
                return;
            }
            if (movement4n < DownMiddle + (4 * scrollV) && movement4n > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4n.style.top = movement4n + "px";
                movement4n = -10000000;
                hit += 1;
                return;
            }
            if (movement4o < DownMiddle + (4 * scrollV) && movement4o > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4o.style.top = movement4o + "px";
                movement4o = -10000000;
                hit += 1;
                return;
            }
            if (movement4p < DownMiddle + (4 * scrollV) && movement4p > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4p.style.top = movement4p + "px";
                movement4p = -10000000;
                hit += 1;
                return;
            }
            if (movement4q < DownMiddle + (4 * scrollV) && movement4q > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4q.style.top = movement4q + "px";
                movement4q = -10000000;
                hit += 1;
                return;
            }
            if (movement4r < DownMiddle + (4 * scrollV) && movement4r > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4r.style.top = movement4r + "px";
                movement4r = -10000000;
                hit += 1;
                return;
            }
            if (movement4s < DownMiddle + (4 * scrollV) && movement4s > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4s.style.top = movement4s + "px";
                movement4s = -10000000;
                hit += 1;
                return;
            }
            if (movement4t < DownMiddle + (4 * scrollV) && movement4t > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4t.style.top = movement4t + "px";
                movement4t = -10000000;
                hit += 1;
                return;
            }
            if (movement4u < DownMiddle + (4 * scrollV) && movement4u > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4u.style.top = movement4u + "px";
                movement4u = -10000000;
                hit += 1;
                return;
            }
            if (movement4v < DownMiddle + (4 * scrollV) && movement4v > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4v.style.top = movement4v + "px";
                movement4v = -10000000;
                hit += 1;
                return;
            }
            if (movement4w < DownMiddle + (4 * scrollV) && movement4w > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4w.style.top = movement4w + "px";
                movement4w = -10000000;
                hit += 1;
                return;
            }
            if (movement4x < DownMiddle + (4 * scrollV) && movement4x > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4x.style.top = movement4x + "px";
                movement4x = -10000000;
                hit += 1;
                return;
            }
            if (movement4y < DownMiddle + (4 * scrollV) && movement4y > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4y.style.top = movement4y + "px";
                movement4y = -10000000;
                hit += 1;
                return;
            }
            if (movement4z < DownMiddle + (4 * scrollV) && movement4z > DownMiddle - (4 * scrollV)) {
                accuracy.innerHTML = "Ultimate"
                ultimate += 1;
                d4z.style.top = movement4z + "px";
                movement4z = -10000000;
                hit += 1;
                return;
            }

            if (movement4 < DownMiddle + (8 * scrollV) && movement4 > DownMiddle - (8 * scrollV) && movement4z < movement4) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4.style.top = movement4 + "px";
                movement4 = -10000000;
                hit += 1;
                return;
            }
            if (movement4b < DownMiddle + (8 * scrollV) && movement4b > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4b.style.top = movement4b + "px";
                movement4b = -10000000;
                hit += 1;
                return;
            }
            if (movement4c < DownMiddle + (8 * scrollV) && movement4c > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4c.style.top = movement4c + "px";
                movement4c = -10000000;
                hit += 1;
                return;
            }
            if (movement4d < DownMiddle + (8 * scrollV) && movement4d > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4d.style.top = movement4d + "px";
                movement4d = -10000000;
                hit += 1;
                return;
            }
            if (movement4e < DownMiddle + (8 * scrollV) && movement4e > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4e.style.top = movement4e + "px";
                movement4e = -10000000;
                hit += 1;
                return;
            }
            if (movement4f < DownMiddle + (8 * scrollV) && movement4f > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4f.style.top = movement4f + "px";
                movement4f = -10000000;
                hit += 1;
                return;
            }
            if (movement4g < DownMiddle + (8 * scrollV) && movement4g > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4g.style.top = movement4g + "px";
                movement4g = -10000000;
                hit += 1;
                return;
            }
            if (movement4h < DownMiddle + (8 * scrollV) && movement4h > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4h.style.top = movement4h + "px";
                movement4h = -10000000;
                hit += 1;
                return;
            }
            if (movement4i < DownMiddle + (8 * scrollV) && movement4i > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4i.style.top = movement4i + "px";
                movement4i = -10000000;
                hit += 1;
                return;
            }
            if (movement4j < DownMiddle + (8 * scrollV) && movement4j > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4j.style.top = movement4j + "px";
                movement4j = -10000000;
                hit += 1;
                return;
            }
            if (movement4k < DownMiddle + (8 * scrollV) && movement4k > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4k.style.top = movement4k + "px";
                movement4k = -10000000;
                hit += 1;
                return;
            }
            if (movement4l < DownMiddle + (8 * scrollV) && movement4l > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4l.style.top = movement4l + "px";
                movement4l = -10000000;
                hit += 1;
                return;
            }
            if (movement4m < DownMiddle + (8 * scrollV) && movement4m > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4m.style.top = movement4m + "px";
                movement4m = -10000000;
                hit += 1;
                return;
            }
            if (movement4n < DownMiddle + (8 * scrollV) && movement4n > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4n.style.top = movement4n + "px";
                movement4n = -10000000;
                hit += 1;
                return;
            }
            if (movement4o < DownMiddle + (8 * scrollV) && movement4o > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4o.style.top = movement4o + "px";
                movement4o = -10000000;
                hit += 1;
                return;
            }
            if (movement4p < DownMiddle + (8 * scrollV) && movement4p > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4p.style.top = movement4p + "px";
                movement4p = -10000000;
                hit += 1;
                return;
            }
            if (movement4q < DownMiddle + (8 * scrollV) && movement4q > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4q.style.top = movement4q + "px";
                movement4q = -10000000;
                hit += 1;
                return;
            }
            if (movement4r < DownMiddle + (8 * scrollV) && movement4r > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4r.style.top = movement4r + "px";
                movement4r = -10000000;
                hit += 1;
                return;
            }
            if (movement4s < DownMiddle + (8 * scrollV) && movement4s > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4s.style.top = movement4s + "px";
                movement4s = -10000000;
                hit += 1;
                return;
            }
            if (movement4t < DownMiddle + (8 * scrollV) && movement4t > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4t.style.top = movement4t + "px";
                movement4t = -10000000;
                hit += 1;
                return;
            }
            if (movement4u < DownMiddle + (8 * scrollV) && movement4u > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4u.style.top = movement4u + "px";
                movement4u = -10000000;
                hit += 1;
                return;
            }
            if (movement4v < DownMiddle + (8 * scrollV) && movement4v > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4v.style.top = movement4v + "px";
                movement4v = -10000000;
                hit += 1;
                return;
            }
            if (movement4w < DownMiddle + (8 * scrollV) && movement4w > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4w.style.top = movement4w + "px";
                movement4w = -10000000;
                hit += 1;
                return;
            }
            if (movement4x < DownMiddle + (8 * scrollV) && movement4x > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4x.style.top = movement4x + "px";
                movement4x = -10000000;
                hit += 1;
                return;
            }
            if (movement4y < DownMiddle + (8 * scrollV) && movement4y > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4y.style.top = movement4y + "px";
                movement4y = -10000000;
                hit += 1;
                return;
            }
            if (movement4z < DownMiddle + (8 * scrollV) && movement4z > DownMiddle - (8 * scrollV)) {
                accuracy.innerHTML = "Fancy"
                fancy += 1;
                d4z.style.top = movement4z + "px";
                movement4z = -10000000;
                hit += 1;
                return;
            }

            if (movement4 < DownMiddle + (12 * scrollV) && movement4 > DownMiddle - (12 * scrollV) && movement4z < movement4) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4.style.top = movement4 + "px";
                movement4 = -10000000;
                hit += 1;
                return;
            }
            if (movement4b < DownMiddle + (12 * scrollV) && movement4b > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4b.style.top = movement4b + "px";
                movement4b = -10000000;
                hit += 1;
                return;
            }
            if (movement4c < DownMiddle + (12 * scrollV) && movement4c > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4c.style.top = movement4c + "px";
                movement4c = -10000000;
                hit += 1;
                return;
            }
            if (movement4d < DownMiddle + (12 * scrollV) && movement4d > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4d.style.top = movement4d + "px";
                movement4d = -10000000;
                hit += 1;
                return;
            }
            if (movement4e < DownMiddle + (12 * scrollV) && movement4e > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4e.style.top = movement4e + "px";
                movement4e = -10000000;
                hit += 1;
                return;
            }
            if (movement4f < DownMiddle + (12 * scrollV) && movement4f > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4f.style.top = movement4f + "px";
                movement4f = -10000000;
                hit += 1;
                return;
            }
            if (movement4g < DownMiddle + (12 * scrollV) && movement4g > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4g.style.top = movement4g + "px";
                movement4g = -10000000;
                hit += 1;
                return;
            }
            if (movement4h < DownMiddle + (12 * scrollV) && movement4h > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4h.style.top = movement4h + "px";
                movement4h = -10000000;
                hit += 1;
                return;
            }
            if (movement4i < DownMiddle + (12 * scrollV) && movement4i > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4i.style.top = movement4i + "px";
                movement4i = -10000000;
                hit += 1;
                return;
            }
            if (movement4j < DownMiddle + (12 * scrollV) && movement4j > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4j.style.top = movement4j + "px";
                movement4j = -10000000;
                hit += 1;
                return;
            }
            if (movement4k < DownMiddle + (12 * scrollV) && movement4k > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4k.style.top = movement4k + "px";
                movement4k = -10000000;
                hit += 1;
                return;
            }
            if (movement4l < DownMiddle + (12 * scrollV) && movement4l > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4l.style.top = movement4l + "px";
                movement4l = -10000000;
                hit += 1;
                return;
            }
            if (movement4m < DownMiddle + (12 * scrollV) && movement4m > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4m.style.top = movement4m + "px";
                movement4m = -10000000;
                hit += 1;
                return;
            }
            if (movement4n < DownMiddle + (12 * scrollV) && movement4n > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4n.style.top = movement4n + "px";
                movement4n = -10000000;
                hit += 1;
                return;
            }
            if (movement4o < DownMiddle + (12 * scrollV) && movement4o > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4o.style.top = movement4o + "px";
                movement4o = -10000000;
                hit += 1;
                return;
            }
            if (movement4p < DownMiddle + (12 * scrollV) && movement4p > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4p.style.top = movement4p + "px";
                movement4p = -10000000;
                hit += 1;
                return;
            }
            if (movement4q < DownMiddle + (12 * scrollV) && movement4q > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4q.style.top = movement4q + "px";
                movement4q = -10000000;
                hit += 1;
                return;
            }
            if (movement4r < DownMiddle + (12 * scrollV) && movement4r > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4r.style.top = movement4r + "px";
                movement4r = -10000000;
                hit += 1;
                return;
            }
            if (movement4s < DownMiddle + (12 * scrollV) && movement4s > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4s.style.top = movement4s + "px";
                movement4s = -10000000;
                hit += 1;
                return;
            }
            if (movement4t < DownMiddle + (12 * scrollV) && movement4t > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4t.style.top = movement4t + "px";
                movement4t = -10000000;
                hit += 1;
                return;
            }
            if (movement4u < DownMiddle + (12 * scrollV) && movement4u > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4u.style.top = movement4u + "px";
                movement4u = -10000000;
                hit += 1;
                return;
            }
            if (movement4v < DownMiddle + (12 * scrollV) && movement4v > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4v.style.top = movement4v + "px";
                movement4v = -10000000;
                hit += 1;
                return;
            }
            if (movement4w < DownMiddle + (12 * scrollV) && movement4w > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4w.style.top = movement4w + "px";
                movement4w = -10000000;
                hit += 1;
                return;
            }
            if (movement4x < DownMiddle + (12 * scrollV) && movement4x > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4x.style.top = movement4x + "px";
                movement4x = -10000000;
                hit += 1;
                return;
            }
            if (movement4y < DownMiddle + (12 * scrollV) && movement4y > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4y.style.top = movement4y + "px";
                movement4y = -10000000;
                hit += 1;
                return;
            }
            if (movement4z < DownMiddle + (12 * scrollV) && movement4z > DownMiddle - (12 * scrollV)) {
                accuracy.innerHTML = "Stunning"
                stunning += 1;
                d4z.style.top = movement4z + "px";
                movement4z = -10000000;
                hit += 1;
                return;
            }
        }
    }
})
window.requestAnimationFrame(step);
function scrollRateN() {
    if (scrollV == 1) {
        audioSync = 10120
    }
    if (scrollV == 2) {
        audioSync = 5120
    }
    if (scrollV == 3) {
        audioSync = 3620
    }
    if (scrollV == 4) {
        audioSync = 3120
    }
    if (scrollV == 5) {
        audioSync = 2620
    }
    if (scrollV == 6) {
        audioSync = 2220
    }
    if (scrollV == 7) {
        audioSync = 1920
    }
    if (scrollV == 8) {
        audioSync = 1720
    }
    if (scrollV == 9) {
        audioSync = 1570
    }
    if (scrollV == 10) {
        audioSync = 1370
    }
    if (scrollV == 11) {
        audioSync = 1170
    }
    if (scrollV == 12) {
        audioSync = 1070
    }
    if (scrollV == 13) {
        audioSync = 970
    }
    if (scrollV == 14) {
        audioSync = 870
    }
    if (scrollV == 15) {
        audioSync = 770
    }
    if (scrollV == 16) {
        audioSync = 720
    }
    if (scrollV == 17) {
        audioSync = 680
    }
    if (scrollV == 18) {
        audioSync = 650
    }
    if (scrollV == 19) {
        audioSync = 630
    }
    if (scrollV == 20) {
        audioSync = 620
    }
    if (scrollV == 21) {
        audioSync = 560
    }
    if (scrollV == 22) {
        audioSync = 530
    }
    if (scrollV == 23) {
        audioSync = 500
    }
    if (scrollV == 24) {
        audioSync = 470
    }
    if (scrollV == 25) {
        audioSync = 470
    }
    if (scrollV == 26) {
        audioSync = 470
    }
    if (scrollV == 27) {
        audioSync = 450
    }
    if (scrollV == 28) {
        audioSync = 450
    }
    if (scrollV == 29) {
        audioSync = 440
    }
    if (scrollV == 30) {
        audioSync = 430
    }
    document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
    if (scrollV >= 0) {
        document.getElementById("span1").style.marginRight = "1.75" + "em"
    }
    if (scrollV >= 10) {
        document.getElementById("span1").style.marginRight = "1.25" + "em"
    }
}
function scrollRateP() {
    scrollV += 1;
    if (scrollV == 1) {
        audioSync = 10120
    }
    if (scrollV == 2) {
        audioSync = 5120
    }
    if (scrollV == 3) {
        audioSync = 3620
    }
    if (scrollV == 4) {
        audioSync = 3120
    }
    if (scrollV == 5) {
        audioSync = 2620
    }
    if (scrollV == 6) {
        audioSync = 2220
    }
    if (scrollV == 7) {
        audioSync = 1920
    }
    if (scrollV == 8) {
        audioSync = 1720
    }
    if (scrollV == 9) {
        audioSync = 1570
    }
    if (scrollV == 10) {
        audioSync = 1370
    }
    if (scrollV == 11) {
        audioSync = 1170
    }
    if (scrollV == 12) {
        audioSync = 1070
    }
    if (scrollV == 13) {
        audioSync = 970
    }
    if (scrollV == 14) {
        audioSync = 870
    }
    if (scrollV == 15) {
        audioSync = 770
    }
    if (scrollV == 16) {
        audioSync = 720
    }
    if (scrollV == 17) {
        audioSync = 680
    }
    if (scrollV == 18) {
        audioSync = 650
    }
    if (scrollV == 19) {
        audioSync = 630
    }
    if (scrollV == 20) {
        audioSync = 620
    }
    if (scrollV == 21) {
        audioSync = 560
    }
    if (scrollV == 22) {
        audioSync = 530
    }
    if (scrollV == 23) {
        audioSync = 500
    }
    if (scrollV == 24) {
        audioSync = 470
    }
    if (scrollV == 25) {
        audioSync = 470
    }
    if (scrollV == 26) {
        audioSync = 470
    }
    if (scrollV == 27) {
        audioSync = 450
    }
    if (scrollV == 28) {
        audioSync = 450
    }
    if (scrollV == 29) {
        audioSync = 440
    }
    if (scrollV == 30) {
        audioSync = 430
    }
    document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
    if (scrollV >= 0) {
        document.getElementById("span1").style.marginRight = "1.75" + "em"
    }
    if (scrollV >= 10) {
        document.getElementById("span1").style.marginRight = "1.25" + "em"
    }
    save();
}
function scrollRateM() {
    scrollV -= 1;
    if (scrollV == 1) {
        audioSync = 10120
    }
    if (scrollV == 2) {
        audioSync = 5120
    }
    if (scrollV == 3) {
        audioSync = 3620
    }
    if (scrollV == 4) {
        audioSync = 3120
    }
    if (scrollV == 5) {
        audioSync = 2620
    }
    if (scrollV == 6) {
        audioSync = 2220
    }
    if (scrollV == 7) {
        audioSync = 1920
    }
    if (scrollV == 8) {
        audioSync = 1720
    }
    if (scrollV == 9) {
        audioSync = 1570
    }
    if (scrollV == 10) {
        audioSync = 1370
    }
    if (scrollV == 11) {
        audioSync = 1170
    }
    if (scrollV == 12) {
        audioSync = 1070
    }
    if (scrollV == 13) {
        audioSync = 970
    }
    if (scrollV == 14) {
        audioSync = 870
    }
    if (scrollV == 15) {
        audioSync = 770
    }
    if (scrollV == 16) {
        audioSync = 720
    }
    if (scrollV == 17) {
        audioSync = 680
    }
    if (scrollV == 18) {
        audioSync = 650
    }
    if (scrollV == 19) {
        audioSync = 630
    }
    if (scrollV == 20) {
        audioSync = 620
    }
    if (scrollV == 21) {
        audioSync = 560
    }
    if (scrollV == 22) {
        audioSync = 530
    }
    if (scrollV == 23) {
        audioSync = 500
    }
    if (scrollV == 24) {
        audioSync = 470
    }
    if (scrollV == 25) {
        audioSync = 470
    }
    if (scrollV == 26) {
        audioSync = 470
    }
    if (scrollV == 27) {
        audioSync = 450
    }
    if (scrollV == 28) {
        audioSync = 450
    }
    if (scrollV == 29) {
        audioSync = 440
    }
    if (scrollV == 30) {
        audioSync = 430
    }
    document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
    if (scrollV < 10) {
        document.getElementById("span1").style.marginRight = "1.75" + "em"
    }
    if (scrollV < 0) {
        document.getElementById("span1").style.marginRight = "1.4" + "em"
    }
    save();
}
function heightP() {
    heightV += 2;
    hitBoxBottom += 2;
    hitBoxTop -= 2
    document.getElementById("span2").innerHTML = "Height" + " " + heightV
    if (heightV >= 100) {
        document.getElementById("span2").style.marginRight = "2.5" + "em"
    }
    save();
}
function heightM() {
    heightV -= 2;
    hitBoxBottom -= 2;
    hitBoxTop += 2
    document.getElementById("span2").innerHTML = "Height" + " " + heightV
    if (heightV < 100) {
        document.getElementById("span2").style.marginRight = "3" + "em"
    }
    if (heightV < 10) {
        document.getElementById("span2").style.marginRight = "3.5" + "em"
    }
    save();
}
function heightN() {
    hitBoxBottom += 2;
    hitBoxTop -= 2
    document.getElementById("span2").innerHTML = "Height" + " " + heightV
    if (heightV >= 100) {
        document.getElementById("span2").style.marginRight = "2.5" + "em"
    }
    if (heightV < 100) {
        document.getElementById("span2").style.marginRight = "3" + "em"
    }
    if (heightV < 10) {
        document.getElementById("span2").style.marginRight = "3.5" + "em"
    }
}
function widthP() {
    widthV += 2;
    document.getElementById("span3").innerHTML = "Width" + " " + widthV
    if (widthV >= 100) {
        document.getElementById("span3").style.marginRight = "2.75" + "em"
    }
    save();
}
function widthM() {
    widthV -= 2;
    document.getElementById("span3").innerHTML = "Width" + " " + widthV
    if (widthV < 100) {
        document.getElementById("span3").style.marginRight = "3.25" + "em"
    }
    if (widthV < 10) {
        document.getElementById("span3").style.marginRight = "3.75" + "em"
    }
    save();
}
function widthN() {
    document.getElementById("span3").innerHTML = "Width" + " " + widthV
    if (widthV >= 100) {
        document.getElementById("span3").style.marginRight = "2.75" + "em"
    }
    if (widthV < 100) {
        document.getElementById("span3").style.marginRight = "3.25" + "em"
    }
    if (widthV < 10) {
        document.getElementById("span3").style.marginRight = "3.75" + "em"
    }
}
function offsetP() {
    audioSync2 += 7;
    document.getElementById("span11").innerHTML = "Song Offset" + " " + audioSync2 / 7;
    if (audioSync2 / 7 >= -99) {
        document.getElementById("span11").style.marginRight = ".62" + "em"
    }
    if (audioSync2 / 7 >= -9) {
        document.getElementById("span11").style.marginRight = "1.12" + "em"
    }
    if (audioSync2 / 7 >= 0) {
        document.getElementById("span11").style.marginRight = "1.45" + "em"
    }
    if (audioSync2 / 7 >= 10) {
        document.getElementById("span11").style.marginRight = ".95" + "em"
    }
    if (audioSync2 / 7 >= 100) {
        document.getElementById("span11").style.marginRight = ".46" + "em"
    }
    save();
}
function offsetN() {
    document.getElementById("span11").innerHTML = "Song Offset" + " " + audioSync2 / 7;
    if (audioSync2 / 7 >= -99) {
        document.getElementById("span11").style.marginRight = ".62" + "em"
    }
    if (audioSync2 / 7 >= -9) {
        document.getElementById("span11").style.marginRight = "1.12" + "em"
    }
    if (audioSync2 / 7 >= 0) {
        document.getElementById("span11").style.marginRight = "1.45" + "em"
    }
    if (audioSync2 / 7 >= 10) {
        document.getElementById("span11").style.marginRight = ".95" + "em"
    }
    if (audioSync2 / 7 >= 100) {
        document.getElementById("span11").style.marginRight = ".46" + "em"
    }
}
function offsetM() {
    audioSync2 -= 7;
    document.getElementById("span11").innerHTML = "Song Offset" + " " + audioSync2 / 7;
    if (audioSync2 / 7 >= -99) {
        document.getElementById("span11").style.marginRight = ".62" + "em"
    }
    if (audioSync2 / 7 >= -9) {
        document.getElementById("span11").style.marginRight = "1.12" + "em"
    }
    if (audioSync2 / 7 >= 0) {
        document.getElementById("span11").style.marginRight = "1.45" + "em"
    }
    if (audioSync2 / 7 >= 10) {
        document.getElementById("span11").style.marginRight = ".95" + "em"
    }
    if (audioSync2 / 7 >= 100) {
        document.getElementById("span11").style.marginRight = ".46" + "em"
    }
    save();
}

function judgeOffsetP() {
    UpMiddle += 4;
    DownMiddle += 4;
    judgeOffsetV += 7;
    document.getElementById("span15").innerHTML = "Judge Offset" + " " + judgeOffsetV / 7;
    if (judgeOffsetV / 7 >= -99) {
        document.getElementById("span15").style.marginRight = ".34" + "em"
    }
    if (judgeOffsetV / 7 >= -9) {
        document.getElementById("span15").style.marginRight = ".84" + "em"
    }
    if (judgeOffsetV / 7 >= 0) {
        document.getElementById("span15").style.marginRight = "1.18" + "em"
    }
    if (judgeOffsetV / 7 >= 10) {
        document.getElementById("span15").style.marginRight = ".68" + "em"
    }
    if (judgeOffsetV / 7 >= 100) {
        document.getElementById("span15").style.marginRight = ".19" + "em"
    }
    save();
}
function judgeOffsetN() {
    document.getElementById("span15").innerHTML = "Judge Offset" + " " + judgeOffsetV / 7;
    if (judgeOffsetV / 7 >= -99) {
        document.getElementById("span15").style.marginRight = ".34" + "em"
    }
    if (judgeOffsetV / 7 >= -9) {
        document.getElementById("span15").style.marginRight = ".84" + "em"
    }
    if (judgeOffsetV / 7 >= 0) {
        document.getElementById("span15").style.marginRight = "1.18" + "em"
    }
    if (judgeOffsetV / 7 >= 10) {
        document.getElementById("span15").style.marginRight = ".68" + "em"
    }
    if (judgeOffsetV / 7 >= 100) {
        document.getElementById("span15").style.marginRight = ".19" + "em"
    }
}
function judgeOffsetM() {
    UpMiddle += 4;
    DownMiddle += 4;
    judgeOffsetV -= 7;
    document.getElementById("span15").innerHTML = "Judge Offset" + " " + judgeOffsetV / 7;
    if (judgeOffsetV / 7 >= -99) {
        document.getElementById("span15").style.marginRight = ".34" + "em"
    }
    if (judgeOffsetV / 7 >= -9) {
        document.getElementById("span15").style.marginRight = ".84" + "em"
    }
    if (judgeOffsetV / 7 >= 0) {
        document.getElementById("span15").style.marginRight = "1.18" + "em"
    }
    if (judgeOffsetV / 7 >= 10) {
        document.getElementById("span15").style.marginRight = ".68" + "em"
    }
    if (judgeOffsetV / 7 >= 100) {
        document.getElementById("span15").style.marginRight = ".19" + "em"
    }
    save();
}
function radiusP() {
    radiusV += 2;
    document.getElementById("span5").innerHTML = "Radius" + " " + radiusV
    if (radiusV >= 0) {
        document.getElementById("span5").style.marginRight = "3.45" + "em"
    }
    if (radiusV >= 10) {
        document.getElementById("span5").style.marginRight = "2.95" + "em"
    }
    if (radiusV >= 100) {
        document.getElementById("span5").style.marginRight = "2.5" + "em"
    }
    save();
}
function radiusM() {
    radiusV -= 2;
    document.getElementById("span5").innerHTML = "Radius" + " " + radiusV
    if (radiusV < 10) {
        document.getElementById("span5").style.marginRight = "3.45" + "em"
    }
    if (radiusV < 0) {
        document.getElementById("span5").style.marginRight = "3.1" + "em"
    }
    save();
}
function radiusN() {
    document.getElementById("span5").innerHTML = "Radius" + " " + radiusV
    if (radiusV >= 0) {
        document.getElementById("span5").style.marginRight = "3.45" + "em"
    }
    if (radiusV >= 10) {
        document.getElementById("span5").style.marginRight = "2.95" + "em"
    }
    if (radiusV >= 100) {
        document.getElementById("span5").style.marginRight = "2.5" + "em"
    }
}
function noteReverserP() {
    noteReverser += 1;
    if (noteReverser <= 0) {
        noteReverser = 0;
        fullArray.reverse()
        secondChart.reverse()
        chart3.reverse()
        chart4.reverse()
        chart5.reverse()
        chart6.reverse()
        bpmRate.reverse()
        bpmTick.reverse()
        //var firstBPM = bpmTick[0]
        var firstBPM = tickCount;
        for (let air = 0; air < bpmTick.length; air++) {
            bpmTick[air] = firstBPM - bpmTick[air]
        }
        document.getElementById("span12").style.marginRight = ".8" + "em"
    }
    if (noteReverser == 1) {
        document.getElementById("span12").style.marginRight = ".42" + "em"
        fullArray.reverse()
        secondChart.reverse()
        chart3.reverse()
        chart4.reverse()
        chart5.reverse()
        chart6.reverse()
        bpmRate.reverse()
        // console.log(bpmTick, "tick1")
        bpmTick.reverse()
        var firstBPM = tickCount;
        bpmTick.unshift("0")
        // console.log(bpmTick, "tick2")
        for (let air = 1; air < bpmTick.length; air++) {
            bpmTick[air] = firstBPM - bpmTick[air]
        }
        // console.log(bpmTick, "tick3")
        // console.log(bpmRate)
        // console.log(tickCount, "tickcount")
    }
    if (noteReverser == 2) {
        noteReverser = 0;
        document.getElementById("span12").style.marginRight = ".42" + "em"
    }
    document.getElementById("span12").innerHTML = "Reverse Notes" + " " + noteReverser
    save();
}
function noteReverserM() {
    noteReverser += 1;
    if (noteReverser <= 0) {
        noteReverser = 0;
        fullArray.reverse()
        secondChart.reverse()
        chart3.reverse()
        chart4.reverse()
        chart5.reverse()
        chart6.reverse()
        bpmRate.reverse()
        bpmTick.reverse()
        var firstBPM = bpmTick[0]
        for (let air = 0; air < bpmTick.length; air++) {
            bpmTick[air] = firstBPM - bpmTick[air]
        }
        document.getElementById("span12").style.marginRight = ".8" + "em"
    }
    if (noteReverser == 1) {
        document.getElementById("span12").style.marginRight = ".42" + "em"
        fullArray.reverse()
        secondChart.reverse()
        chart3.reverse()
        chart4.reverse()
        chart5.reverse()
        chart6.reverse()
        bpmRate.reverse()
        // console.log(bpmTick, "tick1")
        bpmTick.reverse()
        var firstBPM = tickCount;
        bpmTick.unshift("0")
        // console.log(bpmTick, "tick2")
        for (let air = 1; air < bpmTick.length; air++) {
            bpmTick[air] = firstBPM - bpmTick[air]
        }
        // console.log(bpmTick, "tick3")
        // console.log(bpmRate)
        // console.log(tickCount, "tickcount")
    }
    if (noteReverser == 2) {
        noteReverser = 0;
        document.getElementById("span12").style.marginRight = ".42" + "em"
    }
    document.getElementById("span12").innerHTML = "Reverse Notes" + " " + noteReverser
    save();
}
function spacingP() {
    spacingV1 += 2;
    spacingV2 += 4;
    spacingV3 += 6;
    spacingV4 += 8;
    spacingV5 += 10;
    bannerS += 10;
    accuracyContainerSpacing += 10;
    screenCutWidth += 10;
    spacingV6 += 5;
    spacingList += 5;
    spacingResults += 5;
    document.getElementById("span4").innerHTML = "Spacing" + " " + spacingV1
    if (spacingV1 >= 100) {
        document.getElementById("span4").style.marginRight = "2" + "em"
    }
    if (spacingV1 < 100) {
        document.getElementById("span4").style.marginRight = "2.5" + "em"
    }
    save();
}
function spacingN() {
    document.getElementById("span4").innerHTML = "Spacing" + " " + spacingV1
    if (spacingV1 >= 100) {
        document.getElementById("span4").style.marginRight = "2" + "em"
    }
    if (spacingV1 < 100) {
        document.getElementById("span4").style.marginRight = "2.5" + "em"
    }
}
function spacingM() {
    spacingV1 -= 2;
    spacingV2 -= 4;
    spacingV3 -= 6;
    spacingV4 -= 8;
    spacingV5 -= 10;
    bannerS -= 10;
    accuracyContainerSpacing -= 10;
    spacingV6 -= 5;
    screenCutWidth -= 10;
    spacingList -= 5;
    spacingResults -= 5;
    document.getElementById("span4").innerHTML = "Spacing" + " " + spacingV1
    if (spacingV1 < 100) {
        document.getElementById("span4").style.marginRight = "2.5" + "em"
    }
    if (spacingV1 < 10) {
        document.getElementById("span4").style.marginRight = "1.9" + "em"
    }
    save();
}
function options() {
    optionsV += 1;
    if (optionsV == 2) {
        optionsV = 0;
    }
}
function backgroundP() {
    backgroundV += 4
    document.getElementById("span6").innerHTML = "Background" + " " + backgroundV
    if (backgroundV >= 10) {
        document.getElementById("span6").style.marginRight = ".8" + "em"
    }
    if (backgroundV >= 100) {
        document.getElementById("span6").style.marginRight = ".3" + "em"
    }
    save();
}
function backgroundN() {
    document.getElementById("span6").innerHTML = "Background" + " " + backgroundV
    if (backgroundV >= 10) {
        document.getElementById("span6").style.marginRight = ".8" + "em"
    }
    if (backgroundV >= 100) {
        document.getElementById("span6").style.marginRight = ".3" + "em"
    }
}
function backgroundM() {
    if (backgroundV > 0)
        backgroundV -= 4
    document.getElementById("span6").innerHTML = "Background" + " " + backgroundV
    if (backgroundV < 100) {
        document.getElementById("span6").style.marginRight = ".8" + "em"
    }
    if (backgroundV < 10) {
        document.getElementById("span6").style.marginRight = "1.3" + "em"
    }
    save();
}
function screenCutP() {
    if (downscroll == 0 && screenCutV / 10 < 19) {
        screenCutV += 10;
        screenCutTop -= 50;
        screenCutHeight += 50;
        screenCut.style.top = screenCutTop + "px"
        screenCut.style.height = screenCutHeight + "px"
        screenCut.style.display = "inline-block";
        screenCut.style.borderTop = "4px solid blue";
        setTimeout(function () { screenCut.style.borderTop = "none" }, 400)
    }
    if (downscroll == 1 && screenCutV / 10 < 19) {
        screenCutV += 10;
        screenCutTop -= 50;
        screenCutHeight += 50;
        screenCut.style.top = screenCutTopDS + "px"
        screenCut.style.height = screenCutHeight + "px"
        screenCut.style.display = "inline-block";
        screenCut.style.borderBottom = "4px solid blue";
        setTimeout(function () { screenCut.style.borderBottom = "none" }, 400)
    }
    document.getElementById("span13").innerHTML = "Screen Cut" + " " + screenCutV / 10
    if (screenCutV / 10 < 10) {
        document.getElementById("span13").style.marginRight = "1.85" + "em"
    }
    if (screenCutV / 10 >= 10) {
        document.getElementById("span13").style.marginRight = "1.36" + "em"
    }
    if (screenCutV / 10 >= 100) {
        document.getElementById("span13").style.marginRight = ".3" + "em"
    }
    save();
}
function screenCutN() {
    if (downscroll == 0 && screenCutV / 10 < 19) {
        screenCut.style.top = screenCutTop + "px"
        screenCut.style.height = screenCutHeight + "px"
        screenCut.style.display = "inline-block";
        screenCut.style.borderTop = "4px solid blue";
        setTimeout(function () { screenCut.style.borderTop = "none" }, 400)
    }
    if (downscroll == 1 && screenCutV / 10 < 19) {
        screenCut.style.top = screenCutTopDS + "px"
        screenCut.style.height = screenCutHeight + "px"
        screenCut.style.display = "inline-block";
        screenCut.style.borderBottom = "4px solid blue";
        setTimeout(function () { screenCut.style.borderBottom = "none" }, 400)
    }
    document.getElementById("span13").innerHTML = "Screen Cut" + " " + screenCutV / 10
    if (screenCutV / 10 < 10) {
        document.getElementById("span13").style.marginRight = "1.85" + "em"
    }
    if (screenCutV / 10 >= 10) {
        document.getElementById("span13").style.marginRight = "1.36" + "em"
    }
    if (screenCutV / 10 >= 100) {
        document.getElementById("span13").style.marginRight = ".3" + "em"
    }
}
function screenCutM() {
    if (downscroll == 0) {
        if (screenCutV > 0 && screenCutV / 10 < 19 || screenCutV / 10 == 19) {
            screenCutV -= 10
            screenCutTop += 50;
            screenCutHeight -= 50;
            screenCut.style.top = screenCutTop + "px"
            screenCut.style.height = screenCutHeight + "px"
            screenCut.style.borderTop = "4px solid blue";
            setTimeout(function () { screenCut.style.borderTop = "none" }, 400)
        }
    }
    if (downscroll == 1) {
        if (screenCutV > 0 && screenCutV / 10 < 19 || screenCutV / 10 == 19) {
            screenCutV -= 10
            screenCutTop += 50;
            screenCutHeight -= 50;
            screenCut.style.top = screenCutTopDS + "px"
            screenCut.style.height = screenCutHeight + "px"
            screenCut.style.borderBottom = "4px solid blue";
            setTimeout(function () { screenCut.style.borderBottom = "none" }, 400)
        }
    }
    document.getElementById("span13").innerHTML = "Screen Cut" + " " + screenCutV / 10
    if (screenCutV / 10 < 100) {
        document.getElementById("span13").style.marginRight = "1.36" + "em"
    }
    if (screenCutV / 10 < 10) {
        document.getElementById("span13").style.marginRight = "1.85" + "em"
    }
    save();
}

function chartNumberP() {
    chartNumber += 1;
    if (chartNumber <= 0) {
        chartNumber = 1;
        document.getElementById("span16").style.marginRight = ".8" + "em"
    }
    if (chartNumber == 1) {
        document.getElementById("span16").style.marginRight = ".48" + "em"
    }
    if (chartNumber == 7) {
        chartNumber = 1;
        document.getElementById("span16").style.marginRight = ".48" + "em"
    }
    document.getElementById("span16").innerHTML = "Chart Number" + " " + chartNumber
    save();
}
function chartNumberM() {
    chartNumber -= 1;
    if (chartNumber <= 0) {
        chartNumber = 1;
        document.getElementById("span16").style.marginRight = ".8" + "em"
    }
    if (chartNumber == 1) {
        document.getElementById("span16").style.marginRight = ".48" + "em"
    }
    if (chartNumber == 7) {
        chartNumber = 1;
        document.getElementById("span16").style.marginRight = ".48" + "em"
    }
    document.getElementById("span16").innerHTML = "Chart Number" + " " + chartNumber
    save();
}

function rateP() {
    rate += 0.05;
    rate.toFixed(2);
    audio.playbackRate = rate;
    if (rate <= 0) {
        rate = 0.05;
        document.getElementById("span20").style.marginRight = ".8" + "em"
    }
    if (rate == 1) {
        document.getElementById("span20").style.marginRight = ".48" + "em"
    }
    if (rate > 1) {
        document.getElementById("span20").style.marginRight = "3.14" + "em"
    }
    if (rate > 10) {
        document.getElementById("span20").style.marginRight = "2.64" + "em"
    }
    if (rate <= 1) {
        document.getElementById("span20").style.marginRight = "3.14" + "em"
    }
    document.getElementById("span20").innerHTML = "Rate" + " " + rate.toFixed(2);
}
function rateM() {
    rate -= 0.05;
    audio.playbackRate = rate;
    if (rate <= 0) {
        rate = 0.05;
        document.getElementById("span20").style.marginRight = ".8" + "em"
    }
    if (rate == 1) {
        document.getElementById("span20").style.marginRight = ".48" + "em"
    }
    if (rate > 1) {
        document.getElementById("span20").style.marginRight = "3.14" + "em"
    }
    if (rate > 10) {
        document.getElementById("span20").style.marginRight = "2.64" + "em"
    }
    if (rate <= 1) {
        document.getElementById("span20").style.marginRight = "3.14" + "em"
    }
    document.getElementById("span20").innerHTML = "Rate" + " " + rate.toFixed(2);
}

function noteColorN() {
    if (noteColorV < 12)
        document.getElementById("span14").innerHTML = "Note Color" + " " + noteColorV
    if (noteColorV == 10 || noteColorV == 12) {
        document.getElementById("span14").style.marginRight = "1.28" + "em"
    }
    if (noteColorV == 0) {
        div.style.background = "rgb(160, 89, 160)"
        div2.style.background = "rgb(160, 89, 160)"
        div3.style.background = "rgb(160, 89, 160)"
        div4.style.background = "rgb(160, 89, 160)"
        d1.style.background = "rgb(160, 89, 160)"
        d2.style.background = "rgb(160, 89, 160)"
        d3.style.background = "rgb(160, 89, 160)"
        d4.style.background = "rgb(160, 89, 160)"
        d1b.style.background = "rgb(160, 89, 160)"
        d2b.style.background = "rgb(160, 89, 160)"
        d3b.style.background = "rgb(160, 89, 160)"
        d4b.style.background = "rgb(160, 89, 160)"
        d1c.style.background = "rgb(160, 89, 160)"
        d2c.style.background = "rgb(160, 89, 160)"
        d3c.style.background = "rgb(160, 89, 160)"
        d4c.style.background = "rgb(160, 89, 160)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(160, 89, 160)"
        d2e.style.background = "rgb(160, 89, 160)"
        d3e.style.background = "rgb(160, 89, 160)"
        d4e.style.background = "rgb(160, 89, 160)"
        d1f.style.background = "rgb(160, 89, 160)"
        d2f.style.background = "rgb(160, 89, 160)"
        d3f.style.background = "rgb(160, 89, 160)"
        d4f.style.background = "rgb(160, 89, 160)"
        d1g.style.background = "rgb(160, 89, 160)"
        d2g.style.background = "rgb(160, 89, 160)"
        d3g.style.background = "rgb(160, 89, 160)"
        d4g.style.background = "rgb(160, 89, 160)"
        d1h.style.background = "rgb(160, 89, 160)"
        d2h.style.background = "rgb(160, 89, 160)"
        d3h.style.background = "rgb(160, 89, 160)"
        d4h.style.background = "rgb(160, 89, 160)"
        d1i.style.background = "rgb(160, 89, 160)"
        d2i.style.background = "rgb(160, 89, 160)"
        d3i.style.background = "rgb(160, 89, 160)"
        d4i.style.background = "rgb(160, 89, 160)"
        d1j.style.background = "rgb(160, 89, 160)"
        d2j.style.background = "rgb(160, 89, 160)"
        d3j.style.background = "rgb(160, 89, 160)"
        d4j.style.background = "rgb(160, 89, 160)"
        d1k.style.background = "rgb(160, 89, 160)"
        d2k.style.background = "rgb(160, 89, 160)"
        d3k.style.background = "rgb(160, 89, 160)"
        d4k.style.background = "rgb(160, 89, 160)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(160, 89, 160)"
        d2m.style.background = "rgb(160, 89, 160)"
        d3m.style.background = "rgb(160, 89, 160)"
        d4m.style.background = "rgb(160, 89, 160)"
        d1n.style.background = "rgb(160, 89, 160)"
        d2n.style.background = "rgb(160, 89, 160)"
        d3n.style.background = "rgb(160, 89, 160)"
        d4n.style.background = "rgb(160, 89, 160)"
        d1o.style.background = "rgb(160, 89, 160)"
        d2o.style.background = "rgb(160, 89, 160)"
        d3o.style.background = "rgb(160, 89, 160)"
        d4o.style.background = "rgb(160, 89, 160)"
        d1p.style.background = "rgb(160, 89, 160)"
        d2p.style.background = "rgb(160, 89, 160)"
        d3p.style.background = "rgb(160, 89, 160)"
        d4p.style.background = "rgb(160, 89, 160)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(160, 89, 160)"
        d2r.style.background = "rgb(160, 89, 160)"
        d3r.style.background = "rgb(160, 89, 160)"
        d4r.style.background = "rgb(160, 89, 160)"
        d1s.style.background = "rgb(160, 89, 160)"
        d2s.style.background = "rgb(160, 89, 160)"
        d3s.style.background = "rgb(160, 89, 160)"
        d4s.style.background = "rgb(160, 89, 160)"
        d1t.style.background = "rgb(160, 89, 160)"
        d2t.style.background = "rgb(160, 89, 160)"
        d3t.style.background = "rgb(160, 89, 160)"
        d4t.style.background = "rgb(160, 89, 160)"
        d1u.style.background = "rgb(160, 89, 160)"
        d2u.style.background = "rgb(160, 89, 160)"
        d3u.style.background = "rgb(160, 89, 160)"
        d4u.style.background = "rgb(160, 89, 160)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(160, 89, 160)"
        d2w.style.background = "rgb(160, 89, 160)"
        d3w.style.background = "rgb(160, 89, 160)"
        d4w.style.background = "rgb(160, 89, 160)"
        d1x.style.background = "rgb(160, 89, 160)"
        d2x.style.background = "rgb(160, 89, 160)"
        d3x.style.background = "rgb(160, 89, 160)"
        d4x.style.background = "rgb(160, 89, 160)"
        d1y.style.background = "rgb(160, 89, 160)"
        d2y.style.background = "rgb(160, 89, 160)"
        d3y.style.background = "rgb(160, 89, 160)"
        d4y.style.background = "rgb(160, 89, 160)"
        d1z.style.background = "rgb(160, 89, 160)"
        d2z.style.background = "rgb(160, 89, 160)"
        d3z.style.background = "rgb(160, 89, 160)"
        d4z.style.background = "rgb(160, 89, 160)"
    }
    if (noteColorV == 2) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(0, 94, 255)"
        d2.style.background = "rgb(0, 94, 255)"
        d3.style.background = "rgb(0, 94, 255)"
        d4.style.background = "rgb(0, 94, 255)"
        d1b.style.background = "rgb(0, 94, 255)"
        d2b.style.background = "rgb(0, 94, 255)"
        d3b.style.background = "rgb(0, 94, 255)"
        d4b.style.background = "rgb(0, 94, 255)"
        d1c.style.background = "rgb(0, 94, 255)"
        d2c.style.background = "rgb(0, 94, 255)"
        d3c.style.background = "rgb(0, 94, 255)"
        d4c.style.background = "rgb(0, 94, 255)"
        d1d.style.background = "rgb(0, 94, 255)"
        d2d.style.background = "rgb(0, 94, 255)"
        d3d.style.background = "rgb(0, 94, 255)"
        d4d.style.background = "rgb(0, 94, 255)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(0, 94, 255)"
        d2f.style.background = "rgb(0, 94, 255)"
        d3f.style.background = "rgb(0, 94, 255)"
        d4f.style.background = "rgb(0, 94, 255)"
        d1g.style.background = "rgb(0, 94, 255)"
        d2g.style.background = "rgb(0, 94, 255)"
        d3g.style.background = "rgb(0, 94, 255)"
        d4g.style.background = "rgb(0, 94, 255)"
        d1h.style.background = "rgb(0, 94, 255)"
        d2h.style.background = "rgb(0, 94, 255)"
        d3h.style.background = "rgb(0, 94, 255)"
        d4h.style.background = "rgb(0, 94, 255)"
        d1i.style.background = "rgb(0, 94, 255)"
        d2i.style.background = "rgb(0, 94, 255)"
        d3i.style.background = "rgb(0, 94, 255)"
        d4i.style.background = "rgb(0, 94, 255)"
        d1j.style.background = "rgb(0, 94, 255)"
        d2j.style.background = "rgb(0, 94, 255)"
        d3j.style.background = "rgb(0, 94, 255)"
        d4j.style.background = "rgb(0, 94, 255)"
        d1k.style.background = "rgb(0, 94, 255)"
        d2k.style.background = "rgb(0, 94, 255)"
        d3k.style.background = "rgb(0, 94, 255)"
        d4k.style.background = "rgb(0, 94, 255)"
        d1l.style.background = "rgb(0, 94, 255)"
        d2l.style.background = "rgb(0, 94, 255)"
        d3l.style.background = "rgb(0, 94, 255)"
        d4l.style.background = "rgb(0, 94, 255)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(0, 94, 255)"
        d2n.style.background = "rgb(0, 94, 255)"
        d3n.style.background = "rgb(0, 94, 255)"
        d4n.style.background = "rgb(0, 94, 255)"
        d1o.style.background = "rgb(0, 94, 255)"
        d2o.style.background = "rgb(0, 94, 255)"
        d3o.style.background = "rgb(0, 94, 255)"
        d4o.style.background = "rgb(0, 94, 255)"
        d1p.style.background = "rgb(0, 94, 255)"
        d2p.style.background = "rgb(0, 94, 255)"
        d3p.style.background = "rgb(0, 94, 255)"
        d4p.style.background = "rgb(0, 94, 255)"
        d1q.style.background = "rgb(0, 94, 255)"
        d2q.style.background = "rgb(0, 94, 255)"
        d3q.style.background = "rgb(0, 94, 255)"
        d4q.style.background = "rgb(0, 94, 255)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(0, 94, 255)"
        d2s.style.background = "rgb(0, 94, 255)"
        d3s.style.background = "rgb(0, 94, 255)"
        d4s.style.background = "rgb(0, 94, 255)"
        d1t.style.background = "rgb(0, 94, 255)"
        d2t.style.background = "rgb(0, 94, 255)"
        d3t.style.background = "rgb(0, 94, 255)"
        d4t.style.background = "rgb(0, 94, 255)"
        d1u.style.background = "rgb(0, 94, 255)"
        d2u.style.background = "rgb(0, 94, 255)"
        d3u.style.background = "rgb(0, 94, 255)"
        d4u.style.background = "rgb(0, 94, 255)"
        d1v.style.background = "rgb(0, 94, 255)"
        d2v.style.background = "rgb(0, 94, 255)"
        d3v.style.background = "rgb(0, 94, 255)"
        d4v.style.background = "rgb(0, 94, 255)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(0, 94, 255)"
        d2x.style.background = "rgb(0, 94, 255)"
        d3x.style.background = "rgb(0, 94, 255)"
        d4x.style.background = "rgb(0, 94, 255)"
        d1y.style.background = "rgb(0, 94, 255)"
        d2y.style.background = "rgb(0, 94, 255)"
        d3y.style.background = "rgb(0, 94, 255)"
        d4y.style.background = "rgb(0, 94, 255)"
        d1z.style.background = "rgb(0, 94, 255)"
        d2z.style.background = "rgb(0, 94, 255)"
        d3z.style.background = "rgb(0, 94, 255)"
        d4z.style.background = "rgb(0, 94, 255)"
    }
    if (noteColorV == 1) {
        div.style.background = "rgb(141, 141, 141)"
        div2.style.background = "rgb(141, 141, 141)"
        div3.style.background = "rgb(141, 141, 141)"
        div4.style.background = "rgb(141, 141, 141)"
        d1.style.background = "rgb(141, 141, 141)"
        d2.style.background = "rgb(141, 141, 141)"
        d3.style.background = "rgb(141, 141, 141)"
        d4.style.background = "rgb(141, 141, 141)"
        d1b.style.background = "rgb(141, 141, 141)"
        d2b.style.background = "rgb(141, 141, 141)"
        d3b.style.background = "rgb(141, 141, 141)"
        d4b.style.background = "rgb(141, 141, 141)"
        d1c.style.background = "rgb(141, 141, 141)"
        d2c.style.background = "rgb(141, 141, 141)"
        d3c.style.background = "rgb(141, 141, 141)"
        d4c.style.background = "rgb(141, 141, 141)"
        d1d.style.background = "rgb(141, 141, 141)"
        d2d.style.background = "rgb(141, 141, 141)"
        d3d.style.background = "rgb(141, 141, 141)"
        d4d.style.background = "rgb(141, 141, 141)"
        d1e.style.background = "rgb(141, 141, 141)"
        d2e.style.background = "rgb(141, 141, 141)"
        d3e.style.background = "rgb(141, 141, 141)"
        d4e.style.background = "rgb(141, 141, 141)"
        d1f.style.background = "rgb(141, 141, 141)"
        d2f.style.background = "rgb(141, 141, 141)"
        d3f.style.background = "rgb(141, 141, 141)"
        d4f.style.background = "rgb(141, 141, 141)"
        d1g.style.background = "rgb(141, 141, 141)"
        d2g.style.background = "rgb(141, 141, 141)"
        d3g.style.background = "rgb(141, 141, 141)"
        d4g.style.background = "rgb(141, 141, 141)"
        d1h.style.background = "rgb(141, 141, 141)"
        d2h.style.background = "rgb(141, 141, 141)"
        d3h.style.background = "rgb(141, 141, 141)"
        d4h.style.background = "rgb(141, 141, 141)"
        d1i.style.background = "rgb(141, 141, 141)"
        d2i.style.background = "rgb(141, 141, 141)"
        d3i.style.background = "rgb(141, 141, 141)"
        d4i.style.background = "rgb(141, 141, 141)"
        d1j.style.background = "rgb(141, 141, 141)"
        d2j.style.background = "rgb(141, 141, 141)"
        d3j.style.background = "rgb(141, 141, 141)"
        d4j.style.background = "rgb(141, 141, 141)"
        d1k.style.background = "rgb(141, 141, 141)"
        d2k.style.background = "rgb(141, 141, 141)"
        d3k.style.background = "rgb(141, 141, 141)"
        d4k.style.background = "rgb(141, 141, 141)"
        d1l.style.background = "rgb(141, 141, 141)"
        d2l.style.background = "rgb(141, 141, 141)"
        d3l.style.background = "rgb(141, 141, 141)"
        d4l.style.background = "rgb(141, 141, 141)"
        d1m.style.background = "rgb(141, 141, 141)"
        d2m.style.background = "rgb(141, 141, 141)"
        d3m.style.background = "rgb(141, 141, 141)"
        d4m.style.background = "rgb(141, 141, 141)"
        d1n.style.background = "rgb(141, 141, 141)"
        d2n.style.background = "rgb(141, 141, 141)"
        d3n.style.background = "rgb(141, 141, 141)"
        d4n.style.background = "rgb(141, 141, 141)"
        d1o.style.background = "rgb(141, 141, 141)"
        d2o.style.background = "rgb(141, 141, 141)"
        d3o.style.background = "rgb(141, 141, 141)"
        d4o.style.background = "rgb(141, 141, 141)"
        d1p.style.background = "rgb(141, 141, 141)"
        d2p.style.background = "rgb(141, 141, 141)"
        d3p.style.background = "rgb(141, 141, 141)"
        d4p.style.background = "rgb(141, 141, 141)"
        d1q.style.background = "rgb(141, 141, 141)"
        d2q.style.background = "rgb(141, 141, 141)"
        d3q.style.background = "rgb(141, 141, 141)"
        d4q.style.background = "rgb(141, 141, 141)"
        d1r.style.background = "rgb(141, 141, 141)"
        d2r.style.background = "rgb(141, 141, 141)"
        d3r.style.background = "rgb(141, 141, 141)"
        d4r.style.background = "rgb(141, 141, 141)"
        d1s.style.background = "rgb(141, 141, 141)"
        d2s.style.background = "rgb(141, 141, 141)"
        d3s.style.background = "rgb(141, 141, 141)"
        d4s.style.background = "rgb(141, 141, 141)"
        d1t.style.background = "rgb(141, 141, 141)"
        d2t.style.background = "rgb(141, 141, 141)"
        d3t.style.background = "rgb(141, 141, 141)"
        d4t.style.background = "rgb(141, 141, 141)"
        d1u.style.background = "rgb(141, 141, 141)"
        d2u.style.background = "rgb(141, 141, 141)"
        d3u.style.background = "rgb(141, 141, 141)"
        d4u.style.background = "rgb(141, 141, 141)"
        d1v.style.background = "rgb(141, 141, 141)"
        d2v.style.background = "rgb(141, 141, 141)"
        d3v.style.background = "rgb(141, 141, 141)"
        d4v.style.background = "rgb(141, 141, 141)"
        d1w.style.background = "rgb(141, 141, 141)"
        d2w.style.background = "rgb(141, 141, 141)"
        d3w.style.background = "rgb(141, 141, 141)"
        d4w.style.background = "rgb(141, 141, 141)"
        d1x.style.background = "rgb(141, 141, 141)"
        d2x.style.background = "rgb(141, 141, 141)"
        d3x.style.background = "rgb(141, 141, 141)"
        d4x.style.background = "rgb(141, 141, 141)"
        d1y.style.background = "rgb(141, 141, 141)"
        d2y.style.background = "rgb(141, 141, 141)"
        d3y.style.background = "rgb(141, 141, 141)"
        d4y.style.background = "rgb(141, 141, 141)"
        d1z.style.background = "rgb(141, 141, 141)"
        d2z.style.background = "rgb(141, 141, 141)"
        d3z.style.background = "rgb(141, 141, 141)"
        d4z.style.background = "rgb(141, 141, 141)"
    }
    if (noteColorV == 3) {
        div.style.background = "rgb(247, 161, 0)"
        div2.style.background = "rgb(247, 161, 0)"
        div3.style.background = "rgb(247, 161, 0)"
        div4.style.background = "rgb(247, 161, 0)"
        d1.style.background = "rgb(247, 161, 0)"
        d2.style.background = "rgb(247, 161, 0)"
        d3.style.background = "rgb(247, 161, 0)"
        d4.style.background = "rgb(247, 161, 0)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(247, 161, 0)"
        d2c.style.background = "rgb(247, 161, 0)"
        d3c.style.background = "rgb(247, 161, 0)"
        d4c.style.background = "rgb(247, 161, 0)"
        d1d.style.background = "rgb(247, 161, 0)"
        d2d.style.background = "rgb(247, 161, 0)"
        d3d.style.background = "rgb(247, 161, 0)"
        d4d.style.background = "rgb(247, 161, 0)"
        d1e.style.background = "rgb(247, 161, 0)"
        d2e.style.background = "rgb(247, 161, 0)"
        d3e.style.background = "rgb(247, 161, 0)"
        d4e.style.background = "rgb(247, 161, 0)"
        d1f.style.background = "rgb(247, 161, 0)"
        d2f.style.background = "rgb(247, 161, 0)"
        d3f.style.background = "rgb(247, 161, 0)"
        d4f.style.background = "rgb(247, 161, 0)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(247, 161, 0)"
        d2h.style.background = "rgb(247, 161, 0)"
        d3h.style.background = "rgb(247, 161, 0)"
        d4h.style.background = "rgb(247, 161, 0)"
        d1i.style.background = "rgb(247, 161, 0)"
        d2i.style.background = "rgb(247, 161, 0)"
        d3i.style.background = "rgb(247, 161, 0)"
        d4i.style.background = "rgb(247, 161, 0)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(247, 161, 0)"
        d2k.style.background = "rgb(247, 161, 0)"
        d3k.style.background = "rgb(247, 161, 0)"
        d4k.style.background = "rgb(247, 161, 0)"
        d1l.style.background = "rgb(247, 161, 0)"
        d2l.style.background = "rgb(247, 161, 0)"
        d3l.style.background = "rgb(247, 161, 0)"
        d4l.style.background = "rgb(247, 161, 0)"
        d1m.style.background = "rgb(247, 161, 0)"
        d2m.style.background = "rgb(247, 161, 0)"
        d3m.style.background = "rgb(247, 161, 0)"
        d4m.style.background = "rgb(247, 161, 0)"
        d1n.style.background = "rgb(247, 161, 0)"
        d2n.style.background = "rgb(247, 161, 0)"
        d3n.style.background = "rgb(247, 161, 0)"
        d4n.style.background = "rgb(247, 161, 0)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(247, 161, 0)"
        d2p.style.background = "rgb(247, 161, 0)"
        d3p.style.background = "rgb(247, 161, 0)"
        d4p.style.background = "rgb(247, 161, 0)"
        d1q.style.background = "rgb(247, 161, 0)"
        d2q.style.background = "rgb(247, 161, 0)"
        d3q.style.background = "rgb(247, 161, 0)"
        d4q.style.background = "rgb(247, 161, 0)"
        d1r.style.background = "rgb(247, 161, 0)"
        d2r.style.background = "rgb(247, 161, 0)"
        d3r.style.background = "rgb(247, 161, 0)"
        d4r.style.background = "rgb(247, 161, 0)"
        d1s.style.background = "rgb(247, 161, 0)"
        d2s.style.background = "rgb(247, 161, 0)"
        d3s.style.background = "rgb(247, 161, 0)"
        d4s.style.background = "rgb(247, 161, 0)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(247, 161, 0)"
        d2u.style.background = "rgb(247, 161, 0)"
        d3u.style.background = "rgb(247, 161, 0)"
        d4u.style.background = "rgb(247, 161, 0)"
        d1v.style.background = "rgb(247, 161, 0)"
        d2v.style.background = "rgb(247, 161, 0)"
        d3v.style.background = "rgb(247, 161, 0)"
        d4v.style.background = "rgb(247, 161, 0)"
        d1w.style.background = "rgb(247, 161, 0)"
        d2w.style.background = "rgb(247, 161, 0)"
        d3w.style.background = "rgb(247, 161, 0)"
        d4w.style.background = "rgb(247, 161, 0)"
        d1x.style.background = "rgb(247, 161, 0)"
        d2x.style.background = "rgb(247, 161, 0)"
        d3x.style.background = "rgb(247, 161, 0)"
        d4x.style.background = "rgb(247, 161, 0)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(247, 161, 0)"
        d2z.style.background = "rgb(247, 161, 0)"
        d3z.style.background = "rgb(247, 161, 0)"
        d4z.style.background = "rgb(247, 161, 0)"
    }
    if (noteColorV == 4) {
        div.style.background = "rgb(133, 92, 255)"
        div2.style.background = "rgb(133, 92, 255)"
        div3.style.background = "rgb(133, 92, 255)"
        div4.style.background = "rgb(133, 92, 255)"
        d1.style.background = "rgb(133, 92, 255)"
        d2.style.background = "rgb(133, 92, 255)"
        d3.style.background = "rgb(133, 92, 255)"
        d4.style.background = "rgb(133, 92, 255)"
        d1b.style.background = "rgb(133, 92, 255)"
        d2b.style.background = "rgb(133, 92, 255)"
        d3b.style.background = "rgb(133, 92, 255)"
        d4b.style.background = "rgb(133, 92, 255)"
        d1c.style.background = "rgb(133, 92, 255)"
        d2c.style.background = "rgb(133, 92, 255)"
        d3c.style.background = "rgb(133, 92, 255)"
        d4c.style.background = "rgb(133, 92, 255)"
        d1d.style.background = "rgb(133, 92, 255)"
        d2d.style.background = "rgb(133, 92, 255)"
        d3d.style.background = "rgb(133, 92, 255)"
        d4d.style.background = "rgb(133, 92, 255)"
        d1e.style.background = "rgb(133, 92, 255)"
        d2e.style.background = "rgb(133, 92, 255)"
        d3e.style.background = "rgb(133, 92, 255)"
        d4e.style.background = "rgb(133, 92, 255)"
        d1f.style.background = "rgb(133, 92, 255)"
        d2f.style.background = "rgb(133, 92, 255)"
        d3f.style.background = "rgb(133, 92, 255)"
        d4f.style.background = "rgb(133, 92, 255)"
        d1g.style.background = "rgb(133, 92, 255)"
        d2g.style.background = "rgb(133, 92, 255)"
        d3g.style.background = "rgb(133, 92, 255)"
        d4g.style.background = "rgb(133, 92, 255)"
        d1h.style.background = "rgb(133, 92, 255)"
        d2h.style.background = "rgb(133, 92, 255)"
        d3h.style.background = "rgb(133, 92, 255)"
        d4h.style.background = "rgb(133, 92, 255)"
        d1i.style.background = "rgb(133, 92, 255)"
        d2i.style.background = "rgb(133, 92, 255)"
        d3i.style.background = "rgb(133, 92, 255)"
        d4i.style.background = "rgb(133, 92, 255)"
        d1j.style.background = "rgb(133, 92, 255)"
        d2j.style.background = "rgb(133, 92, 255)"
        d3j.style.background = "rgb(133, 92, 255)"
        d4j.style.background = "rgb(133, 92, 255)"
        d1k.style.background = "rgb(133, 92, 255)"
        d2k.style.background = "rgb(133, 92, 255)"
        d3k.style.background = "rgb(133, 92, 255)"
        d4k.style.background = "rgb(133, 92, 255)"
        d1l.style.background = "rgb(133, 92, 255)"
        d2l.style.background = "rgb(133, 92, 255)"
        d3l.style.background = "rgb(133, 92, 255)"
        d4l.style.background = "rgb(133, 92, 255)"
        d1m.style.background = "rgb(133, 92, 255)"
        d2m.style.background = "rgb(133, 92, 255)"
        d3m.style.background = "rgb(133, 92, 255)"
        d4m.style.background = "rgb(133, 92, 255)"
        d1n.style.background = "rgb(133, 92, 255)"
        d2n.style.background = "rgb(133, 92, 255)"
        d3n.style.background = "rgb(133, 92, 255)"
        d4n.style.background = "rgb(133, 92, 255)"
        d1o.style.background = "rgb(133, 92, 255)"
        d2o.style.background = "rgb(133, 92, 255)"
        d3o.style.background = "rgb(133, 92, 255)"
        d4o.style.background = "rgb(133, 92, 255)"
        d1p.style.background = "rgb(133, 92, 255)"
        d2p.style.background = "rgb(133, 92, 255)"
        d3p.style.background = "rgb(133, 92, 255)"
        d4p.style.background = "rgb(133, 92, 255)"
        d1q.style.background = "rgb(133, 92, 255)"
        d2q.style.background = "rgb(133, 92, 255)"
        d3q.style.background = "rgb(133, 92, 255)"
        d4q.style.background = "rgb(133, 92, 255)"
        d1r.style.background = "rgb(133, 92, 255)"
        d2r.style.background = "rgb(133, 92, 255)"
        d3r.style.background = "rgb(133, 92, 255)"
        d4r.style.background = "rgb(133, 92, 255)"
        d1s.style.background = "rgb(133, 92, 255)"
        d2s.style.background = "rgb(133, 92, 255)"
        d3s.style.background = "rgb(133, 92, 255)"
        d4s.style.background = "rgb(133, 92, 255)"
        d1t.style.background = "rgb(133, 92, 255)"
        d2t.style.background = "rgb(133, 92, 255)"
        d3t.style.background = "rgb(133, 92, 255)"
        d4t.style.background = "rgb(133, 92, 255)"
        d1u.style.background = "rgb(133, 92, 255)"
        d2u.style.background = "rgb(133, 92, 255)"
        d3u.style.background = "rgb(133, 92, 255)"
        d4u.style.background = "rgb(133, 92, 255)"
        d1v.style.background = "rgb(133, 92, 255)"
        d2v.style.background = "rgb(133, 92, 255)"
        d3v.style.background = "rgb(133, 92, 255)"
        d4v.style.background = "rgb(133, 92, 255)"
        d1w.style.background = "rgb(133, 92, 255)"
        d2w.style.background = "rgb(133, 92, 255)"
        d3w.style.background = "rgb(133, 92, 255)"
        d4w.style.background = "rgb(133, 92, 255)"
        d1x.style.background = "rgb(133, 92, 255)"
        d2x.style.background = "rgb(133, 92, 255)"
        d3x.style.background = "rgb(133, 92, 255)"
        d4x.style.background = "rgb(133, 92, 255)"
        d1y.style.background = "rgb(133, 92, 255)"
        d2y.style.background = "rgb(133, 92, 255)"
        d3y.style.background = "rgb(133, 92, 255)"
        d4y.style.background = "rgb(133, 92, 255)"
        d1z.style.background = "rgb(133, 92, 255)"
        d2z.style.background = "rgb(133, 92, 255)"
        d3z.style.background = "rgb(133, 92, 255)"
        d4z.style.background = "rgb(133, 92, 255)"
    }
    if (noteColorV == 5) {
        div.style.background = "RGB(0,133,0)"
        div2.style.background = "RGB(0,133,0)"
        div3.style.background = "RGB(0,133,0)"
        div4.style.background = "RGB(0,133,0)"
        d1.style.background = "RGB(0,133,0)"
        d2.style.background = "RGB(0,133,0)"
        d3.style.background = "RGB(0,133,0)"
        d4.style.background = "RGB(0,133,0)"
        d1b.style.background = "RGB(0,133,0)"
        d2b.style.background = "RGB(0,133,0)"
        d3b.style.background = "RGB(0,133,0)"
        d4b.style.background = "RGB(0,133,0)"
        d1c.style.background = "RGB(0,133,0)"
        d2c.style.background = "RGB(0,133,0)"
        d3c.style.background = "RGB(0,133,0)"
        d4c.style.background = "RGB(0,133,0)"
        d1d.style.background = "RGB(0,133,0)"
        d2d.style.background = "RGB(0,133,0)"
        d3d.style.background = "RGB(0,133,0)"
        d4d.style.background = "RGB(0,133,0)"
        d1e.style.background = "RGB(0,133,0)"
        d2e.style.background = "RGB(0,133,0)"
        d3e.style.background = "RGB(0,133,0)"
        d4e.style.background = "RGB(0,133,0)"
        d1f.style.background = "RGB(0,133,0)"
        d2f.style.background = "RGB(0,133,0)"
        d3f.style.background = "RGB(0,133,0)"
        d4f.style.background = "RGB(0,133,0)"
        d1g.style.background = "RGB(0,133,0)"
        d2g.style.background = "RGB(0,133,0)"
        d3g.style.background = "RGB(0,133,0)"
        d4g.style.background = "RGB(0,133,0)"
        d1h.style.background = "RGB(0,133,0)"
        d2h.style.background = "RGB(0,133,0)"
        d3h.style.background = "RGB(0,133,0)"
        d4h.style.background = "RGB(0,133,0)"
        d1i.style.background = "RGB(0,133,0)"
        d2i.style.background = "RGB(0,133,0)"
        d3i.style.background = "RGB(0,133,0)"
        d4i.style.background = "RGB(0,133,0)"
        d1j.style.background = "RGB(0,133,0)"
        d2j.style.background = "RGB(0,133,0)"
        d3j.style.background = "RGB(0,133,0)"
        d4j.style.background = "RGB(0,133,0)"
        d1k.style.background = "RGB(0,133,0)"
        d2k.style.background = "RGB(0,133,0)"
        d3k.style.background = "RGB(0,133,0)"
        d4k.style.background = "RGB(0,133,0)"
        d1l.style.background = "RGB(0,133,0)"
        d2l.style.background = "RGB(0,133,0)"
        d3l.style.background = "RGB(0,133,0)"
        d4l.style.background = "RGB(0,133,0)"
        d1m.style.background = "RGB(0,133,0)"
        d2m.style.background = "RGB(0,133,0)"
        d3m.style.background = "RGB(0,133,0)"
        d4m.style.background = "RGB(0,133,0)"
        d1n.style.background = "RGB(0,133,0)"
        d2n.style.background = "RGB(0,133,0)"
        d3n.style.background = "RGB(0,133,0)"
        d4n.style.background = "RGB(0,133,0)"
        d1o.style.background = "RGB(0,133,0)"
        d2o.style.background = "RGB(0,133,0)"
        d3o.style.background = "RGB(0,133,0)"
        d4o.style.background = "RGB(0,133,0)"
        d1p.style.background = "RGB(0,133,0)"
        d2p.style.background = "RGB(0,133,0)"
        d3p.style.background = "RGB(0,133,0)"
        d4p.style.background = "RGB(0,133,0)"
        d1q.style.background = "RGB(0,133,0)"
        d2q.style.background = "RGB(0,133,0)"
        d3q.style.background = "RGB(0,133,0)"
        d4q.style.background = "RGB(0,133,0)"
        d1r.style.background = "RGB(0,133,0)"
        d2r.style.background = "RGB(0,133,0)"
        d3r.style.background = "RGB(0,133,0)"
        d4r.style.background = "RGB(0,133,0)"
        d1s.style.background = "RGB(0,133,0)"
        d2s.style.background = "RGB(0,133,0)"
        d3s.style.background = "RGB(0,133,0)"
        d4s.style.background = "RGB(0,133,0)"
        d1t.style.background = "RGB(0,133,0)"
        d2t.style.background = "RGB(0,133,0)"
        d3t.style.background = "RGB(0,133,0)"
        d4t.style.background = "RGB(0,133,0)"
        d1u.style.background = "RGB(0,133,0)"
        d2u.style.background = "RGB(0,133,0)"
        d3u.style.background = "RGB(0,133,0)"
        d4u.style.background = "RGB(0,133,0)"
        d1v.style.background = "RGB(0,133,0)"
        d2v.style.background = "RGB(0,133,0)"
        d3v.style.background = "RGB(0,133,0)"
        d4v.style.background = "RGB(0,133,0)"
        d1w.style.background = "RGB(0,133,0)"
        d2w.style.background = "RGB(0,133,0)"
        d3w.style.background = "RGB(0,133,0)"
        d4w.style.background = "RGB(0,133,0)"
        d1x.style.background = "RGB(0,133,0)"
        d2x.style.background = "RGB(0,133,0)"
        d3x.style.background = "RGB(0,133,0)"
        d4x.style.background = "RGB(0,133,0)"
        d1y.style.background = "RGB(0,133,0)"
        d2y.style.background = "RGB(0,133,0)"
        d3y.style.background = "RGB(0,133,0)"
        d4y.style.background = "RGB(0,133,0)"
        d1z.style.background = "RGB(0,133,0)"
        d2z.style.background = "RGB(0,133,0)"
        d3z.style.background = "RGB(0,133,0)"
        d4z.style.background = "RGB(0,133,0)"
    }
    if (noteColorV == 6) {
        div.style.background = "rgb(0, 170, 255)"
        div2.style.background = "rgb(0, 170, 255)"
        div3.style.background = "rgb(0, 170, 255)"
        div4.style.background = "rgb(0, 170, 255)"
        d1.style.background = "rgb(0, 170, 255)"
        d2.style.background = "rgb(0, 170, 255)"
        d3.style.background = "rgb(0, 170, 255)"
        d4.style.background = "rgb(0, 170, 255)"
        d1b.style.background = "rgb(0, 170, 255)"
        d2b.style.background = "rgb(0, 170, 255)"
        d3b.style.background = "rgb(0, 170, 255)"
        d4b.style.background = "rgb(0, 170, 255)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(0, 170, 255)"
        d2d.style.background = "rgb(0, 170, 255)"
        d3d.style.background = "rgb(0, 170, 255)"
        d4d.style.background = "rgb(0, 170, 255)"
        d1e.style.background = "rgb(0, 170, 255)"
        d2e.style.background = "rgb(0, 170, 255)"
        d3e.style.background = "rgb(0, 170, 255)"
        d4e.style.background = "rgb(0, 170, 255)"
        d1f.style.background = "rgb(0, 170, 255)"
        d2f.style.background = "rgb(0, 170, 255)"
        d3f.style.background = "rgb(0, 170, 255)"
        d4f.style.background = "rgb(0, 170, 255)"
        d1g.style.background = "rgb(0, 170, 255)"
        d2g.style.background = "rgb(0, 170, 255)"
        d3g.style.background = "rgb(0, 170, 255)"
        d4g.style.background = "rgb(0, 170, 255)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(0, 170, 255)"
        d2i.style.background = "rgb(0, 170, 255)"
        d3i.style.background = "rgb(0, 170, 255)"
        d4i.style.background = "rgb(0, 170, 255)"
        d1j.style.background = "rgb(0, 170, 255)"
        d2j.style.background = "rgb(0, 170, 255)"
        d3j.style.background = "rgb(0, 170, 255)"
        d4j.style.background = "rgb(0, 170, 255)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(0, 170, 255)"
        d2l.style.background = "rgb(0, 170, 255)"
        d3l.style.background = "rgb(0, 170, 255)"
        d4l.style.background = "rgb(0, 170, 255)"
        d1m.style.background = "rgb(0, 170, 255)"
        d2m.style.background = "rgb(0, 170, 255)"
        d3m.style.background = "rgb(0, 170, 255)"
        d4m.style.background = "rgb(0, 170, 255)"
        d1n.style.background = "rgb(0, 170, 255)"
        d2n.style.background = "rgb(0, 170, 255)"
        d3n.style.background = "rgb(0, 170, 255)"
        d4n.style.background = "rgb(0, 170, 255)"
        d1o.style.background = "rgb(0, 170, 255)"
        d2o.style.background = "rgb(0, 170, 255)"
        d3o.style.background = "rgb(0, 170, 255)"
        d4o.style.background = "rgb(0, 170, 255)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(0, 170, 255)"
        d2q.style.background = "rgb(0, 170, 255)"
        d3q.style.background = "rgb(0, 170, 255)"
        d4q.style.background = "rgb(0, 170, 255)"
        d1r.style.background = "rgb(0, 170, 255)"
        d2r.style.background = "rgb(0, 170, 255)"
        d3r.style.background = "rgb(0, 170, 255)"
        d4r.style.background = "rgb(0, 170, 255)"
        d1s.style.background = "rgb(0, 170, 255)"
        d2s.style.background = "rgb(0, 170, 255)"
        d3s.style.background = "rgb(0, 170, 255)"
        d4s.style.background = "rgb(0, 170, 255)"
        d1t.style.background = "rgb(0, 170, 255)"
        d2t.style.background = "rgb(0, 170, 255)"
        d3t.style.background = "rgb(0, 170, 255)"
        d4t.style.background = "rgb(0, 170, 255)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(0, 170, 255)"
        d2v.style.background = "rgb(0, 170, 255)"
        d3v.style.background = "rgb(0, 170, 255)"
        d4v.style.background = "rgb(0, 170, 255)"
        d1w.style.background = "rgb(0, 170, 255)"
        d2w.style.background = "rgb(0, 170, 255)"
        d3w.style.background = "rgb(0, 170, 255)"
        d4w.style.background = "rgb(0, 170, 255)"
        d1x.style.background = "rgb(0, 170, 255)"
        d2x.style.background = "rgb(0, 170, 255)"
        d3x.style.background = "rgb(0, 170, 255)"
        d4x.style.background = "rgb(0, 170, 255)"
        d1y.style.background = "rgb(0, 170, 255)"
        d2y.style.background = "rgb(0, 170, 255)"
        d3y.style.background = "rgb(0, 170, 255)"
        d4y.style.background = "rgb(0, 170, 255)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 7) {
        div.style.background = "rgb(255, 255, 255)"
        div2.style.background = "rgb(255, 255, 255)"
        div3.style.background = "rgb(255, 255, 255)"
        div4.style.background = "rgb(255, 255, 255)"
        d1.style.background = "rgb(255, 255, 255)"
        d2.style.background = "rgb(255, 255, 255)"
        d3.style.background = "rgb(255, 255, 255)"
        d4.style.background = "rgb(255, 255, 255)"
        d1b.style.background = "rgb(255, 255, 255)"
        d2b.style.background = "rgb(255, 255, 255)"
        d3b.style.background = "rgb(255, 255, 255)"
        d4b.style.background = "rgb(255, 255, 255)"
        d1c.style.background = "rgb(255, 255, 255)"
        d2c.style.background = "rgb(255, 255, 255)"
        d3c.style.background = "rgb(255, 255, 255)"
        d4c.style.background = "rgb(255, 255, 255)"
        d1d.style.background = "rgb(255, 255, 255)"
        d2d.style.background = "rgb(255, 255, 255)"
        d3d.style.background = "rgb(255, 255, 255)"
        d4d.style.background = "rgb(255, 255, 255)"
        d1e.style.background = "rgb(255, 255, 255)"
        d2e.style.background = "rgb(255, 255, 255)"
        d3e.style.background = "rgb(255, 255, 255)"
        d4e.style.background = "rgb(255, 255, 255)"
        d1f.style.background = "rgb(255, 255, 255)"
        d2f.style.background = "rgb(255, 255, 255)"
        d3f.style.background = "rgb(255, 255, 255)"
        d4f.style.background = "rgb(255, 255, 255)"
        d1g.style.background = "rgb(255, 255, 255)"
        d2g.style.background = "rgb(255, 255, 255)"
        d3g.style.background = "rgb(255, 255, 255)"
        d4g.style.background = "rgb(255, 255, 255)"
        d1h.style.background = "rgb(255, 255, 255)"
        d2h.style.background = "rgb(255, 255, 255)"
        d3h.style.background = "rgb(255, 255, 255)"
        d4h.style.background = "rgb(255, 255, 255)"
        d1i.style.background = "rgb(255, 255, 255)"
        d2i.style.background = "rgb(255, 255, 255)"
        d3i.style.background = "rgb(255, 255, 255)"
        d4i.style.background = "rgb(255, 255, 255)"
        d1j.style.background = "rgb(255, 255, 255)"
        d2j.style.background = "rgb(255, 255, 255)"
        d3j.style.background = "rgb(255, 255, 255)"
        d4j.style.background = "rgb(255, 255, 255)"
        d1k.style.background = "rgb(255, 255, 255)"
        d2k.style.background = "rgb(255, 255, 255)"
        d3k.style.background = "rgb(255, 255, 255)"
        d4k.style.background = "rgb(255, 255, 255)"
        d1l.style.background = "rgb(255, 255, 255)"
        d2l.style.background = "rgb(255, 255, 255)"
        d3l.style.background = "rgb(255, 255, 255)"
        d4l.style.background = "rgb(255, 255, 255)"
        d1m.style.background = "rgb(255, 255, 255)"
        d2m.style.background = "rgb(255, 255, 255)"
        d3m.style.background = "rgb(255, 255, 255)"
        d4m.style.background = "rgb(255, 255, 255)"
        d1n.style.background = "rgb(255, 255, 255)"
        d2n.style.background = "rgb(255, 255, 255)"
        d3n.style.background = "rgb(255, 255, 255)"
        d4n.style.background = "rgb(255, 255, 255)"
        d1o.style.background = "rgb(255, 255, 255)"
        d2o.style.background = "rgb(255, 255, 255)"
        d3o.style.background = "rgb(255, 255, 255)"
        d4o.style.background = "rgb(255, 255, 255)"
        d1p.style.background = "rgb(255, 255, 255)"
        d2p.style.background = "rgb(255, 255, 255)"
        d3p.style.background = "rgb(255, 255, 255)"
        d4p.style.background = "rgb(255, 255, 255)"
        d1q.style.background = "rgb(255, 255, 255)"
        d2q.style.background = "rgb(255, 255, 255)"
        d3q.style.background = "rgb(255, 255, 255)"
        d4q.style.background = "rgb(255, 255, 255)"
        d1r.style.background = "rgb(255, 255, 255)"
        d2r.style.background = "rgb(255, 255, 255)"
        d3r.style.background = "rgb(255, 255, 255)"
        d4r.style.background = "rgb(255, 255, 255)"
        d1s.style.background = "rgb(255, 255, 255)"
        d2s.style.background = "rgb(255, 255, 255)"
        d3s.style.background = "rgb(255, 255, 255)"
        d4s.style.background = "rgb(255, 255, 255)"
        d1t.style.background = "rgb(255, 255, 255)"
        d2t.style.background = "rgb(255, 255, 255)"
        d3t.style.background = "rgb(255, 255, 255)"
        d4t.style.background = "rgb(255, 255, 255)"
        d1u.style.background = "rgb(255, 255, 255)"
        d2u.style.background = "rgb(255, 255, 255)"
        d3u.style.background = "rgb(255, 255, 255)"
        d4u.style.background = "rgb(255, 255, 255)"
        d1v.style.background = "rgb(255, 255, 255)"
        d2v.style.background = "rgb(255, 255, 255)"
        d3v.style.background = "rgb(255, 255, 255)"
        d4v.style.background = "rgb(255, 255, 255)"
        d1w.style.background = "rgb(255, 255, 255)"
        d2w.style.background = "rgb(255, 255, 255)"
        d3w.style.background = "rgb(255, 255, 255)"
        d4w.style.background = "rgb(255, 255, 255)"
        d1x.style.background = "rgb(255, 255, 255)"
        d2x.style.background = "rgb(255, 255, 255)"
        d3x.style.background = "rgb(255, 255, 255)"
        d4x.style.background = "rgb(255, 255, 255)"
        d1y.style.background = "rgb(255, 255, 255)"
        d2y.style.background = "rgb(255, 255, 255)"
        d3y.style.background = "rgb(255, 255, 255)"
        d4y.style.background = "rgb(255, 255, 255)"
        d1z.style.background = "rgb(255, 255, 255)"
        d2z.style.background = "rgb(255, 255, 255)"
        d3z.style.background = "rgb(255, 255, 255)"
        d4z.style.background = "rgb(255, 255, 255)"
    }
    if (noteColorV == 8) {
        div.style.background = "rgb(206, 255, 72)"
        div2.style.background = "rgb(206, 255, 72)"
        div3.style.background = "rgb(206, 255, 72)"
        div4.style.background = "rgb(206, 255, 72)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(206, 255, 72)"
        d2b.style.background = "rgb(206, 255, 72)"
        d3b.style.background = "rgb(206, 255, 72)"
        d4b.style.background = "rgb(206, 255, 72)"
        d1c.style.background = "rgb(206, 255, 72)"
        d2c.style.background = "rgb(206, 255, 72)"
        d3c.style.background = "rgb(206, 255, 72)"
        d4c.style.background = "rgb(206, 255, 72)"
        d1d.style.background = "rgb(206, 255, 72)"
        d2d.style.background = "rgb(206, 255, 72)"
        d3d.style.background = "rgb(206, 255, 72)"
        d4d.style.background = "rgb(206, 255, 72)"
        d1e.style.background = "rgb(206, 255, 72)"
        d2e.style.background = "rgb(206, 255, 72)"
        d3e.style.background = "rgb(206, 255, 72)"
        d4e.style.background = "rgb(206, 255, 72)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(206, 255, 72)"
        d2g.style.background = "rgb(206, 255, 72)"
        d3g.style.background = "rgb(206, 255, 72)"
        d4g.style.background = "rgb(206, 255, 72)"
        d1h.style.background = "rgb(206, 255, 72)"
        d2h.style.background = "rgb(206, 255, 72)"
        d3h.style.background = "rgb(206, 255, 72)"
        d4h.style.background = "rgb(206, 255, 72)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(206, 255, 72)"
        d2j.style.background = "rgb(206, 255, 72)"
        d3j.style.background = "rgb(206, 255, 72)"
        d4j.style.background = "rgb(206, 255, 72)"
        d1k.style.background = "rgb(206, 255, 72)"
        d2k.style.background = "rgb(206, 255, 72)"
        d3k.style.background = "rgb(206, 255, 72)"
        d4k.style.background = "rgb(206, 255, 72)"
        d1l.style.background = "rgb(206, 255, 72)"
        d2l.style.background = "rgb(206, 255, 72)"
        d3l.style.background = "rgb(206, 255, 72)"
        d4l.style.background = "rgb(206, 255, 72)"
        d1m.style.background = "rgb(206, 255, 72)"
        d2m.style.background = "rgb(206, 255, 72)"
        d3m.style.background = "rgb(206, 255, 72)"
        d4m.style.background = "rgb(206, 255, 72)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(206, 255, 72)"
        d2o.style.background = "rgb(206, 255, 72)"
        d3o.style.background = "rgb(206, 255, 72)"
        d4o.style.background = "rgb(206, 255, 72)"
        d1p.style.background = "rgb(206, 255, 72)"
        d2p.style.background = "rgb(206, 255, 72)"
        d3p.style.background = "rgb(206, 255, 72)"
        d4p.style.background = "rgb(206, 255, 72)"
        d1q.style.background = "rgb(206, 255, 72)"
        d2q.style.background = "rgb(206, 255, 72)"
        d3q.style.background = "rgb(206, 255, 72)"
        d4q.style.background = "rgb(206, 255, 72)"
        d1r.style.background = "rgb(206, 255, 72)"
        d2r.style.background = "rgb(206, 255, 72)"
        d3r.style.background = "rgb(206, 255, 72)"
        d4r.style.background = "rgb(206, 255, 72)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(206, 255, 72)"
        d2t.style.background = "rgb(206, 255, 72)"
        d3t.style.background = "rgb(206, 255, 72)"
        d4t.style.background = "rgb(206, 255, 72)"
        d1u.style.background = "rgb(206, 255, 72)"
        d2u.style.background = "rgb(206, 255, 72)"
        d3u.style.background = "rgb(206, 255, 72)"
        d4u.style.background = "rgb(206, 255, 72)"
        d1v.style.background = "rgb(206, 255, 72)"
        d2v.style.background = "rgb(206, 255, 72)"
        d3v.style.background = "rgb(206, 255, 72)"
        d4v.style.background = "rgb(206, 255, 72)"
        d1w.style.background = "rgb(206, 255, 72)"
        d2w.style.background = "rgb(206, 255, 72)"
        d3w.style.background = "rgb(206, 255, 72)"
        d4w.style.background = "rgb(206, 255, 72)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(206, 255, 72)"
        d2y.style.background = "rgb(206, 255, 72)"
        d3y.style.background = "rgb(206, 255, 72)"
        d4y.style.background = "rgb(206, 255, 72)"
        d1z.style.background = "rgb(206, 255, 72)"
        d2z.style.background = "rgb(206, 255, 72)"
        d3z.style.background = "rgb(206, 255, 72)"
        d4z.style.background = "rgb(206, 255, 72)"
    }
    if (noteColorV == 9) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 10) {
        div.style.background = "rgb(252, 157, 255)"
        div2.style.background = "rgb(252, 157, 255)"
        div3.style.background = "rgb(252, 157, 255)"
        div4.style.background = "rgb(252, 157, 255)"
        d1.style.background = "rgb(252, 157, 255)"
        d2.style.background = "rgb(252, 157, 255)"
        d3.style.background = "rgb(252, 157, 255)"
        d4.style.background = "rgb(252, 157, 255)"
        d1b.style.background = "rgb(252, 157, 255)"
        d2b.style.background = "rgb(252, 157, 255)"
        d3b.style.background = "rgb(252, 157, 255)"
        d4b.style.background = "rgb(252, 157, 255)"
        d1c.style.background = "rgb(252, 157, 255)"
        d2c.style.background = "rgb(252, 157, 255)"
        d3c.style.background = "rgb(252, 157, 255)"
        d4c.style.background = "rgb(252, 157, 255)"
        d1d.style.background = "rgb(252, 157, 255)"
        d2d.style.background = "rgb(252, 157, 255)"
        d3d.style.background = "rgb(252, 157, 255)"
        d4d.style.background = "rgb(252, 157, 255)"
        d1e.style.background = "rgb(252, 157, 255)"
        d2e.style.background = "rgb(252, 157, 255)"
        d3e.style.background = "rgb(252, 157, 255)"
        d4e.style.background = "rgb(252, 157, 255)"
        d1f.style.background = "rgb(252, 157, 255)"
        d2f.style.background = "rgb(252, 157, 255)"
        d3f.style.background = "rgb(252, 157, 255)"
        d4f.style.background = "rgb(252, 157, 255)"
        d1g.style.background = "rgb(252, 157, 255)"
        d2g.style.background = "rgb(252, 157, 255)"
        d3g.style.background = "rgb(252, 157, 255)"
        d4g.style.background = "rgb(252, 157, 255)"
        d1h.style.background = "rgb(252, 157, 255)"
        d2h.style.background = "rgb(252, 157, 255)"
        d3h.style.background = "rgb(252, 157, 255)"
        d4h.style.background = "rgb(252, 157, 255)"
        d1i.style.background = "rgb(252, 157, 255)"
        d2i.style.background = "rgb(252, 157, 255)"
        d3i.style.background = "rgb(252, 157, 255)"
        d4i.style.background = "rgb(252, 157, 255)"
        d1j.style.background = "rgb(252, 157, 255)"
        d2j.style.background = "rgb(252, 157, 255)"
        d3j.style.background = "rgb(252, 157, 255)"
        d4j.style.background = "rgb(252, 157, 255)"
        d1k.style.background = "rgb(252, 157, 255)"
        d2k.style.background = "rgb(252, 157, 255)"
        d3k.style.background = "rgb(252, 157, 255)"
        d4k.style.background = "rgb(252, 157, 255)"
        d1l.style.background = "rgb(252, 157, 255)"
        d2l.style.background = "rgb(252, 157, 255)"
        d3l.style.background = "rgb(252, 157, 255)"
        d4l.style.background = "rgb(252, 157, 255)"
        d1m.style.background = "rgb(252, 157, 255)"
        d2m.style.background = "rgb(252, 157, 255)"
        d3m.style.background = "rgb(252, 157, 255)"
        d4m.style.background = "rgb(252, 157, 255)"
        d1n.style.background = "rgb(252, 157, 255)"
        d2n.style.background = "rgb(252, 157, 255)"
        d3n.style.background = "rgb(252, 157, 255)"
        d4n.style.background = "rgb(252, 157, 255)"
        d1o.style.background = "rgb(252, 157, 255)"
        d2o.style.background = "rgb(252, 157, 255)"
        d3o.style.background = "rgb(252, 157, 255)"
        d4o.style.background = "rgb(252, 157, 255)"
        d1p.style.background = "rgb(252, 157, 255)"
        d2p.style.background = "rgb(252, 157, 255)"
        d3p.style.background = "rgb(252, 157, 255)"
        d4p.style.background = "rgb(252, 157, 255)"
        d1q.style.background = "rgb(252, 157, 255)"
        d2q.style.background = "rgb(252, 157, 255)"
        d3q.style.background = "rgb(252, 157, 255)"
        d4q.style.background = "rgb(252, 157, 255)"
        d1r.style.background = "rgb(252, 157, 255)"
        d2r.style.background = "rgb(252, 157, 255)"
        d3r.style.background = "rgb(252, 157, 255)"
        d4r.style.background = "rgb(252, 157, 255)"
        d1s.style.background = "rgb(252, 157, 255)"
        d2s.style.background = "rgb(252, 157, 255)"
        d3s.style.background = "rgb(252, 157, 255)"
        d4s.style.background = "rgb(252, 157, 255)"
        d1t.style.background = "rgb(252, 157, 255)"
        d2t.style.background = "rgb(252, 157, 255)"
        d3t.style.background = "rgb(252, 157, 255)"
        d4t.style.background = "rgb(252, 157, 255)"
        d1u.style.background = "rgb(252, 157, 255)"
        d2u.style.background = "rgb(252, 157, 255)"
        d3u.style.background = "rgb(252, 157, 255)"
        d4u.style.background = "rgb(252, 157, 255)"
        d1v.style.background = "rgb(252, 157, 255)"
        d2v.style.background = "rgb(252, 157, 255)"
        d3v.style.background = "rgb(252, 157, 255)"
        d4v.style.background = "rgb(252, 157, 255)"
        d1w.style.background = "rgb(252, 157, 255)"
        d2w.style.background = "rgb(252, 157, 255)"
        d3w.style.background = "rgb(252, 157, 255)"
        d4w.style.background = "rgb(252, 157, 255)"
        d1x.style.background = "rgb(252, 157, 255)"
        d2x.style.background = "rgb(252, 157, 255)"
        d3x.style.background = "rgb(252, 157, 255)"
        d4x.style.background = "rgb(252, 157, 255)"
        d1y.style.background = "rgb(252, 157, 255)"
        d2y.style.background = "rgb(252, 157, 255)"
        d3y.style.background = "rgb(252, 157, 255)"
        d4y.style.background = "rgb(252, 157, 255)"
        d1z.style.background = "rgb(252, 157, 255)"
        d2z.style.background = "rgb(252, 157, 255)"
        d3z.style.background = "rgb(252, 157, 255)"
        d4z.style.background = "rgb(252, 157, 255)"
    }
    if (noteColorV == 11) {
        div.style.background = "rgb(0, 0, 0)"
        div2.style.background = "rgb(0, 0, 0)"
        div3.style.background = "rgb(0, 0, 0)"
        div4.style.background = "rgb(0, 0, 0)"
        d1.style.background = "rgb(0, 0, 0)"
        d2.style.background = "rgb(0, 0, 0)"
        d3.style.background = "rgb(0, 0, 0)"
        d4.style.background = "rgb(0, 0, 0)"
        d1b.style.background = "rgb(0, 0, 0)"
        d2b.style.background = "rgb(0, 0, 0)"
        d3b.style.background = "rgb(0, 0, 0)"
        d4b.style.background = "rgb(0, 0, 0)"
        d1c.style.background = "rgb(0, 0, 0)"
        d2c.style.background = "rgb(0, 0, 0)"
        d3c.style.background = "rgb(0, 0, 0)"
        d4c.style.background = "rgb(0, 0, 0)"
        d1d.style.background = "rgb(0, 0, 0)"
        d2d.style.background = "rgb(0, 0, 0)"
        d3d.style.background = "rgb(0, 0, 0)"
        d4d.style.background = "rgb(0, 0, 0)"
        d1e.style.background = "rgb(0, 0, 0)"
        d2e.style.background = "rgb(0, 0, 0)"
        d3e.style.background = "rgb(0, 0, 0)"
        d4e.style.background = "rgb(0, 0, 0)"
        d1f.style.background = "rgb(0, 0, 0)"
        d2f.style.background = "rgb(0, 0, 0)"
        d3f.style.background = "rgb(0, 0, 0)"
        d4f.style.background = "rgb(0, 0, 0)"
        d1g.style.background = "rgb(0, 0, 0)"
        d2g.style.background = "rgb(0, 0, 0)"
        d3g.style.background = "rgb(0, 0, 0)"
        d4g.style.background = "rgb(0, 0, 0)"
        d1h.style.background = "rgb(0, 0, 0)"
        d2h.style.background = "rgb(0, 0, 0)"
        d3h.style.background = "rgb(0, 0, 0)"
        d4h.style.background = "rgb(0, 0, 0)"
        d1i.style.background = "rgb(0, 0, 0)"
        d2i.style.background = "rgb(0, 0, 0)"
        d3i.style.background = "rgb(0, 0, 0)"
        d4i.style.background = "rgb(0, 0, 0)"
        d1j.style.background = "rgb(0, 0, 0)"
        d2j.style.background = "rgb(0, 0, 0)"
        d3j.style.background = "rgb(0, 0, 0)"
        d4j.style.background = "rgb(0, 0, 0)"
        d1k.style.background = "rgb(0, 0, 0)"
        d2k.style.background = "rgb(0, 0, 0)"
        d3k.style.background = "rgb(0, 0, 0)"
        d4k.style.background = "rgb(0, 0, 0)"
        d1l.style.background = "rgb(0, 0, 0)"
        d2l.style.background = "rgb(0, 0, 0)"
        d3l.style.background = "rgb(0, 0, 0)"
        d4l.style.background = "rgb(0, 0, 0)"
        d1m.style.background = "rgb(0, 0, 0)"
        d2m.style.background = "rgb(0, 0, 0)"
        d3m.style.background = "rgb(0, 0, 0)"
        d4m.style.background = "rgb(0, 0, 0)"
        d1n.style.background = "rgb(0, 0, 0)"
        d2n.style.background = "rgb(0, 0, 0)"
        d3n.style.background = "rgb(0, 0, 0)"
        d4n.style.background = "rgb(0, 0, 0)"
        d1o.style.background = "rgb(0, 0, 0)"
        d2o.style.background = "rgb(0, 0, 0)"
        d3o.style.background = "rgb(0, 0, 0)"
        d4o.style.background = "rgb(0, 0, 0)"
        d1p.style.background = "rgb(0, 0, 0)"
        d2p.style.background = "rgb(0, 0, 0)"
        d3p.style.background = "rgb(0, 0, 0)"
        d4p.style.background = "rgb(0, 0, 0)"
        d1q.style.background = "rgb(0, 0, 0)"
        d2q.style.background = "rgb(0, 0, 0)"
        d3q.style.background = "rgb(0, 0, 0)"
        d4q.style.background = "rgb(0, 0, 0)"
        d1r.style.background = "rgb(0, 0, 0)"
        d2r.style.background = "rgb(0, 0, 0)"
        d3r.style.background = "rgb(0, 0, 0)"
        d4r.style.background = "rgb(0, 0, 0)"
        d1s.style.background = "rgb(0, 0, 0)"
        d2s.style.background = "rgb(0, 0, 0)"
        d3s.style.background = "rgb(0, 0, 0)"
        d4s.style.background = "rgb(0, 0, 0)"
        d1t.style.background = "rgb(0, 0, 0)"
        d2t.style.background = "rgb(0, 0, 0)"
        d3t.style.background = "rgb(0, 0, 0)"
        d4t.style.background = "rgb(0, 0, 0)"
        d1u.style.background = "rgb(0, 0, 0)"
        d2u.style.background = "rgb(0, 0, 0)"
        d3u.style.background = "rgb(0, 0, 0)"
        d4u.style.background = "rgb(0, 0, 0)"
        d1v.style.background = "rgb(0, 0, 0)"
        d2v.style.background = "rgb(0, 0, 0)"
        d3v.style.background = "rgb(0, 0, 0)"
        d4v.style.background = "rgb(0, 0, 0)"
        d1w.style.background = "rgb(0, 0, 0)"
        d2w.style.background = "rgb(0, 0, 0)"
        d3w.style.background = "rgb(0, 0, 0)"
        d4w.style.background = "rgb(0, 0, 0)"
        d1x.style.background = "rgb(0, 0, 0)"
        d2x.style.background = "rgb(0, 0, 0)"
        d3x.style.background = "rgb(0, 0, 0)"
        d4x.style.background = "rgb(0, 0, 0)"
        d1y.style.background = "rgb(0, 0, 0)"
        d2y.style.background = "rgb(0, 0, 0)"
        d3y.style.background = "rgb(0, 0, 0)"
        d4y.style.background = "rgb(0, 0, 0)"
        d1z.style.background = "rgb(0, 0, 0)"
        d2z.style.background = "rgb(0, 0, 0)"
        d3z.style.background = "rgb(0, 0, 0)"
        d4z.style.background = "rgb(0, 0, 0)"
    }
    if (noteColorV == 12) {
        div.style.background = "rgb(151, 54, 27)"
        div2.style.background = "rgb(151, 54, 27)"
        div3.style.background = "rgb(151, 54, 27)"
        div4.style.background = "rgb(151, 54, 27)"
        d1.style.background = "rgb(151, 54, 27)"
        d2.style.background = "rgb(151, 54, 27)"
        d3.style.background = "rgb(151, 54, 27)"
        d4.style.background = "rgb(151, 54, 27)"
        d1b.style.background = "rgb(151, 54, 27)"
        d2b.style.background = "rgb(151, 54, 27)"
        d3b.style.background = "rgb(151, 54, 27)"
        d4b.style.background = "rgb(151, 54, 27)"
        d1c.style.background = "rgb(151, 54, 27)"
        d2c.style.background = "rgb(151, 54, 27)"
        d3c.style.background = "rgb(151, 54, 27)"
        d4c.style.background = "rgb(151, 54, 27)"
        d1d.style.background = "rgb(151, 54, 27)"
        d2d.style.background = "rgb(151, 54, 27)"
        d3d.style.background = "rgb(151, 54, 27)"
        d4d.style.background = "rgb(151, 54, 27)"
        d1e.style.background = "rgb(151, 54, 27)"
        d2e.style.background = "rgb(151, 54, 27)"
        d3e.style.background = "rgb(151, 54, 27)"
        d4e.style.background = "rgb(151, 54, 27)"
        d1f.style.background = "rgb(151, 54, 27)"
        d2f.style.background = "rgb(151, 54, 27)"
        d3f.style.background = "rgb(151, 54, 27)"
        d4f.style.background = "rgb(151, 54, 27)"
        d1g.style.background = "rgb(151, 54, 27)"
        d2g.style.background = "rgb(151, 54, 27)"
        d3g.style.background = "rgb(151, 54, 27)"
        d4g.style.background = "rgb(151, 54, 27)"
        d1h.style.background = "rgb(151, 54, 27)"
        d2h.style.background = "rgb(151, 54, 27)"
        d3h.style.background = "rgb(151, 54, 27)"
        d4h.style.background = "rgb(151, 54, 27)"
        d1i.style.background = "rgb(151, 54, 27)"
        d2i.style.background = "rgb(151, 54, 27)"
        d3i.style.background = "rgb(151, 54, 27)"
        d4i.style.background = "rgb(151, 54, 27)"
        d1j.style.background = "rgb(151, 54, 27)"
        d2j.style.background = "rgb(151, 54, 27)"
        d3j.style.background = "rgb(151, 54, 27)"
        d4j.style.background = "rgb(151, 54, 27)"
        d1k.style.background = "rgb(151, 54, 27)"
        d2k.style.background = "rgb(151, 54, 27)"
        d3k.style.background = "rgb(151, 54, 27)"
        d4k.style.background = "rgb(151, 54, 27)"
        d1l.style.background = "rgb(151, 54, 27)"
        d2l.style.background = "rgb(151, 54, 27)"
        d3l.style.background = "rgb(151, 54, 27)"
        d4l.style.background = "rgb(151, 54, 27)"
        d1m.style.background = "rgb(151, 54, 27)"
        d2m.style.background = "rgb(151, 54, 27)"
        d3m.style.background = "rgb(151, 54, 27)"
        d4m.style.background = "rgb(151, 54, 27)"
        d1n.style.background = "rgb(151, 54, 27)"
        d2n.style.background = "rgb(151, 54, 27)"
        d3n.style.background = "rgb(151, 54, 27)"
        d4n.style.background = "rgb(151, 54, 27)"
        d1o.style.background = "rgb(151, 54, 27)"
        d2o.style.background = "rgb(151, 54, 27)"
        d3o.style.background = "rgb(151, 54, 27)"
        d4o.style.background = "rgb(151, 54, 27)"
        d1p.style.background = "rgb(151, 54, 27)"
        d2p.style.background = "rgb(151, 54, 27)"
        d3p.style.background = "rgb(151, 54, 27)"
        d4p.style.background = "rgb(151, 54, 27)"
        d1q.style.background = "rgb(151, 54, 27)"
        d2q.style.background = "rgb(151, 54, 27)"
        d3q.style.background = "rgb(151, 54, 27)"
        d4q.style.background = "rgb(151, 54, 27)"
        d1r.style.background = "rgb(151, 54, 27)"
        d2r.style.background = "rgb(151, 54, 27)"
        d3r.style.background = "rgb(151, 54, 27)"
        d4r.style.background = "rgb(151, 54, 27)"
        d1s.style.background = "rgb(151, 54, 27)"
        d2s.style.background = "rgb(151, 54, 27)"
        d3s.style.background = "rgb(151, 54, 27)"
        d4s.style.background = "rgb(151, 54, 27)"
        d1t.style.background = "rgb(151, 54, 27)"
        d2t.style.background = "rgb(151, 54, 27)"
        d3t.style.background = "rgb(151, 54, 27)"
        d4t.style.background = "rgb(151, 54, 27)"
        d1u.style.background = "rgb(151, 54, 27)"
        d2u.style.background = "rgb(151, 54, 27)"
        d3u.style.background = "rgb(151, 54, 27)"
        d4u.style.background = "rgb(151, 54, 27)"
        d1v.style.background = "rgb(151, 54, 27)"
        d2v.style.background = "rgb(151, 54, 27)"
        d3v.style.background = "rgb(151, 54, 27)"
        d4v.style.background = "rgb(151, 54, 27)"
        d1w.style.background = "rgb(151, 54, 27)"
        d2w.style.background = "rgb(151, 54, 27)"
        d3w.style.background = "rgb(151, 54, 27)"
        d4w.style.background = "rgb(151, 54, 27)"
        d1x.style.background = "rgb(151, 54, 27)"
        d2x.style.background = "rgb(151, 54, 27)"
        d3x.style.background = "rgb(151, 54, 27)"
        d4x.style.background = "rgb(151, 54, 27)"
        d1y.style.background = "rgb(151, 54, 27)"
        d2y.style.background = "rgb(151, 54, 27)"
        d3y.style.background = "rgb(151, 54, 27)"
        d4y.style.background = "rgb(151, 54, 27)"
        d1z.style.background = "rgb(151, 54, 27)"
        d2z.style.background = "rgb(151, 54, 27)"
        d3z.style.background = "rgb(151, 54, 27)"
        d4z.style.background = "rgb(151, 54, 27)"
    }
}

function noteColorP() {
    if (noteColorV < 12)
        noteColorV += 1
    document.getElementById("span14").innerHTML = "Note Color" + " " + noteColorV
    if (noteColorV == 10 || noteColorV == 12) {
        document.getElementById("span14").style.marginRight = "1.28" + "em"
    }
    if (noteColorV == 0) {
        div.style.background = "rgb(160, 89, 160)"
        div2.style.background = "rgb(160, 89, 160)"
        div3.style.background = "rgb(160, 89, 160)"
        div4.style.background = "rgb(160, 89, 160)"
        d1.style.background = "rgb(160, 89, 160)"
        d2.style.background = "rgb(160, 89, 160)"
        d3.style.background = "rgb(160, 89, 160)"
        d4.style.background = "rgb(160, 89, 160)"
        d1b.style.background = "rgb(160, 89, 160)"
        d2b.style.background = "rgb(160, 89, 160)"
        d3b.style.background = "rgb(160, 89, 160)"
        d4b.style.background = "rgb(160, 89, 160)"
        d1c.style.background = "rgb(160, 89, 160)"
        d2c.style.background = "rgb(160, 89, 160)"
        d3c.style.background = "rgb(160, 89, 160)"
        d4c.style.background = "rgb(160, 89, 160)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(160, 89, 160)"
        d2e.style.background = "rgb(160, 89, 160)"
        d3e.style.background = "rgb(160, 89, 160)"
        d4e.style.background = "rgb(160, 89, 160)"
        d1f.style.background = "rgb(160, 89, 160)"
        d2f.style.background = "rgb(160, 89, 160)"
        d3f.style.background = "rgb(160, 89, 160)"
        d4f.style.background = "rgb(160, 89, 160)"
        d1g.style.background = "rgb(160, 89, 160)"
        d2g.style.background = "rgb(160, 89, 160)"
        d3g.style.background = "rgb(160, 89, 160)"
        d4g.style.background = "rgb(160, 89, 160)"
        d1h.style.background = "rgb(160, 89, 160)"
        d2h.style.background = "rgb(160, 89, 160)"
        d3h.style.background = "rgb(160, 89, 160)"
        d4h.style.background = "rgb(160, 89, 160)"
        d1i.style.background = "rgb(160, 89, 160)"
        d2i.style.background = "rgb(160, 89, 160)"
        d3i.style.background = "rgb(160, 89, 160)"
        d4i.style.background = "rgb(160, 89, 160)"
        d1j.style.background = "rgb(160, 89, 160)"
        d2j.style.background = "rgb(160, 89, 160)"
        d3j.style.background = "rgb(160, 89, 160)"
        d4j.style.background = "rgb(160, 89, 160)"
        d1k.style.background = "rgb(160, 89, 160)"
        d2k.style.background = "rgb(160, 89, 160)"
        d3k.style.background = "rgb(160, 89, 160)"
        d4k.style.background = "rgb(160, 89, 160)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(160, 89, 160)"
        d2m.style.background = "rgb(160, 89, 160)"
        d3m.style.background = "rgb(160, 89, 160)"
        d4m.style.background = "rgb(160, 89, 160)"
        d1n.style.background = "rgb(160, 89, 160)"
        d2n.style.background = "rgb(160, 89, 160)"
        d3n.style.background = "rgb(160, 89, 160)"
        d4n.style.background = "rgb(160, 89, 160)"
        d1o.style.background = "rgb(160, 89, 160)"
        d2o.style.background = "rgb(160, 89, 160)"
        d3o.style.background = "rgb(160, 89, 160)"
        d4o.style.background = "rgb(160, 89, 160)"
        d1p.style.background = "rgb(160, 89, 160)"
        d2p.style.background = "rgb(160, 89, 160)"
        d3p.style.background = "rgb(160, 89, 160)"
        d4p.style.background = "rgb(160, 89, 160)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(160, 89, 160)"
        d2r.style.background = "rgb(160, 89, 160)"
        d3r.style.background = "rgb(160, 89, 160)"
        d4r.style.background = "rgb(160, 89, 160)"
        d1s.style.background = "rgb(160, 89, 160)"
        d2s.style.background = "rgb(160, 89, 160)"
        d3s.style.background = "rgb(160, 89, 160)"
        d4s.style.background = "rgb(160, 89, 160)"
        d1t.style.background = "rgb(160, 89, 160)"
        d2t.style.background = "rgb(160, 89, 160)"
        d3t.style.background = "rgb(160, 89, 160)"
        d4t.style.background = "rgb(160, 89, 160)"
        d1u.style.background = "rgb(160, 89, 160)"
        d2u.style.background = "rgb(160, 89, 160)"
        d3u.style.background = "rgb(160, 89, 160)"
        d4u.style.background = "rgb(160, 89, 160)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(160, 89, 160)"
        d2w.style.background = "rgb(160, 89, 160)"
        d3w.style.background = "rgb(160, 89, 160)"
        d4w.style.background = "rgb(160, 89, 160)"
        d1x.style.background = "rgb(160, 89, 160)"
        d2x.style.background = "rgb(160, 89, 160)"
        d3x.style.background = "rgb(160, 89, 160)"
        d4x.style.background = "rgb(160, 89, 160)"
        d1y.style.background = "rgb(160, 89, 160)"
        d2y.style.background = "rgb(160, 89, 160)"
        d3y.style.background = "rgb(160, 89, 160)"
        d4y.style.background = "rgb(160, 89, 160)"
        d1z.style.background = "rgb(160, 89, 160)"
        d2z.style.background = "rgb(160, 89, 160)"
        d3z.style.background = "rgb(160, 89, 160)"
        d4z.style.background = "rgb(160, 89, 160)"
    }
    if (noteColorV == 2) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(0, 94, 255)"
        d2.style.background = "rgb(0, 94, 255)"
        d3.style.background = "rgb(0, 94, 255)"
        d4.style.background = "rgb(0, 94, 255)"
        d1b.style.background = "rgb(0, 94, 255)"
        d2b.style.background = "rgb(0, 94, 255)"
        d3b.style.background = "rgb(0, 94, 255)"
        d4b.style.background = "rgb(0, 94, 255)"
        d1c.style.background = "rgb(0, 94, 255)"
        d2c.style.background = "rgb(0, 94, 255)"
        d3c.style.background = "rgb(0, 94, 255)"
        d4c.style.background = "rgb(0, 94, 255)"
        d1d.style.background = "rgb(0, 94, 255)"
        d2d.style.background = "rgb(0, 94, 255)"
        d3d.style.background = "rgb(0, 94, 255)"
        d4d.style.background = "rgb(0, 94, 255)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(0, 94, 255)"
        d2f.style.background = "rgb(0, 94, 255)"
        d3f.style.background = "rgb(0, 94, 255)"
        d4f.style.background = "rgb(0, 94, 255)"
        d1g.style.background = "rgb(0, 94, 255)"
        d2g.style.background = "rgb(0, 94, 255)"
        d3g.style.background = "rgb(0, 94, 255)"
        d4g.style.background = "rgb(0, 94, 255)"
        d1h.style.background = "rgb(0, 94, 255)"
        d2h.style.background = "rgb(0, 94, 255)"
        d3h.style.background = "rgb(0, 94, 255)"
        d4h.style.background = "rgb(0, 94, 255)"
        d1i.style.background = "rgb(0, 94, 255)"
        d2i.style.background = "rgb(0, 94, 255)"
        d3i.style.background = "rgb(0, 94, 255)"
        d4i.style.background = "rgb(0, 94, 255)"
        d1j.style.background = "rgb(0, 94, 255)"
        d2j.style.background = "rgb(0, 94, 255)"
        d3j.style.background = "rgb(0, 94, 255)"
        d4j.style.background = "rgb(0, 94, 255)"
        d1k.style.background = "rgb(0, 94, 255)"
        d2k.style.background = "rgb(0, 94, 255)"
        d3k.style.background = "rgb(0, 94, 255)"
        d4k.style.background = "rgb(0, 94, 255)"
        d1l.style.background = "rgb(0, 94, 255)"
        d2l.style.background = "rgb(0, 94, 255)"
        d3l.style.background = "rgb(0, 94, 255)"
        d4l.style.background = "rgb(0, 94, 255)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(0, 94, 255)"
        d2n.style.background = "rgb(0, 94, 255)"
        d3n.style.background = "rgb(0, 94, 255)"
        d4n.style.background = "rgb(0, 94, 255)"
        d1o.style.background = "rgb(0, 94, 255)"
        d2o.style.background = "rgb(0, 94, 255)"
        d3o.style.background = "rgb(0, 94, 255)"
        d4o.style.background = "rgb(0, 94, 255)"
        d1p.style.background = "rgb(0, 94, 255)"
        d2p.style.background = "rgb(0, 94, 255)"
        d3p.style.background = "rgb(0, 94, 255)"
        d4p.style.background = "rgb(0, 94, 255)"
        d1q.style.background = "rgb(0, 94, 255)"
        d2q.style.background = "rgb(0, 94, 255)"
        d3q.style.background = "rgb(0, 94, 255)"
        d4q.style.background = "rgb(0, 94, 255)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(0, 94, 255)"
        d2s.style.background = "rgb(0, 94, 255)"
        d3s.style.background = "rgb(0, 94, 255)"
        d4s.style.background = "rgb(0, 94, 255)"
        d1t.style.background = "rgb(0, 94, 255)"
        d2t.style.background = "rgb(0, 94, 255)"
        d3t.style.background = "rgb(0, 94, 255)"
        d4t.style.background = "rgb(0, 94, 255)"
        d1u.style.background = "rgb(0, 94, 255)"
        d2u.style.background = "rgb(0, 94, 255)"
        d3u.style.background = "rgb(0, 94, 255)"
        d4u.style.background = "rgb(0, 94, 255)"
        d1v.style.background = "rgb(0, 94, 255)"
        d2v.style.background = "rgb(0, 94, 255)"
        d3v.style.background = "rgb(0, 94, 255)"
        d4v.style.background = "rgb(0, 94, 255)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(0, 94, 255)"
        d2x.style.background = "rgb(0, 94, 255)"
        d3x.style.background = "rgb(0, 94, 255)"
        d4x.style.background = "rgb(0, 94, 255)"
        d1y.style.background = "rgb(0, 94, 255)"
        d2y.style.background = "rgb(0, 94, 255)"
        d3y.style.background = "rgb(0, 94, 255)"
        d4y.style.background = "rgb(0, 94, 255)"
        d1z.style.background = "rgb(0, 94, 255)"
        d2z.style.background = "rgb(0, 94, 255)"
        d3z.style.background = "rgb(0, 94, 255)"
        d4z.style.background = "rgb(0, 94, 255)"
    }
    if (noteColorV == 1) {
        div.style.background = "rgb(141, 141, 141)"
        div2.style.background = "rgb(141, 141, 141)"
        div3.style.background = "rgb(141, 141, 141)"
        div4.style.background = "rgb(141, 141, 141)"
        d1.style.background = "rgb(141, 141, 141)"
        d2.style.background = "rgb(141, 141, 141)"
        d3.style.background = "rgb(141, 141, 141)"
        d4.style.background = "rgb(141, 141, 141)"
        d1b.style.background = "rgb(141, 141, 141)"
        d2b.style.background = "rgb(141, 141, 141)"
        d3b.style.background = "rgb(141, 141, 141)"
        d4b.style.background = "rgb(141, 141, 141)"
        d1c.style.background = "rgb(141, 141, 141)"
        d2c.style.background = "rgb(141, 141, 141)"
        d3c.style.background = "rgb(141, 141, 141)"
        d4c.style.background = "rgb(141, 141, 141)"
        d1d.style.background = "rgb(141, 141, 141)"
        d2d.style.background = "rgb(141, 141, 141)"
        d3d.style.background = "rgb(141, 141, 141)"
        d4d.style.background = "rgb(141, 141, 141)"
        d1e.style.background = "rgb(141, 141, 141)"
        d2e.style.background = "rgb(141, 141, 141)"
        d3e.style.background = "rgb(141, 141, 141)"
        d4e.style.background = "rgb(141, 141, 141)"
        d1f.style.background = "rgb(141, 141, 141)"
        d2f.style.background = "rgb(141, 141, 141)"
        d3f.style.background = "rgb(141, 141, 141)"
        d4f.style.background = "rgb(141, 141, 141)"
        d1g.style.background = "rgb(141, 141, 141)"
        d2g.style.background = "rgb(141, 141, 141)"
        d3g.style.background = "rgb(141, 141, 141)"
        d4g.style.background = "rgb(141, 141, 141)"
        d1h.style.background = "rgb(141, 141, 141)"
        d2h.style.background = "rgb(141, 141, 141)"
        d3h.style.background = "rgb(141, 141, 141)"
        d4h.style.background = "rgb(141, 141, 141)"
        d1i.style.background = "rgb(141, 141, 141)"
        d2i.style.background = "rgb(141, 141, 141)"
        d3i.style.background = "rgb(141, 141, 141)"
        d4i.style.background = "rgb(141, 141, 141)"
        d1j.style.background = "rgb(141, 141, 141)"
        d2j.style.background = "rgb(141, 141, 141)"
        d3j.style.background = "rgb(141, 141, 141)"
        d4j.style.background = "rgb(141, 141, 141)"
        d1k.style.background = "rgb(141, 141, 141)"
        d2k.style.background = "rgb(141, 141, 141)"
        d3k.style.background = "rgb(141, 141, 141)"
        d4k.style.background = "rgb(141, 141, 141)"
        d1l.style.background = "rgb(141, 141, 141)"
        d2l.style.background = "rgb(141, 141, 141)"
        d3l.style.background = "rgb(141, 141, 141)"
        d4l.style.background = "rgb(141, 141, 141)"
        d1m.style.background = "rgb(141, 141, 141)"
        d2m.style.background = "rgb(141, 141, 141)"
        d3m.style.background = "rgb(141, 141, 141)"
        d4m.style.background = "rgb(141, 141, 141)"
        d1n.style.background = "rgb(141, 141, 141)"
        d2n.style.background = "rgb(141, 141, 141)"
        d3n.style.background = "rgb(141, 141, 141)"
        d4n.style.background = "rgb(141, 141, 141)"
        d1o.style.background = "rgb(141, 141, 141)"
        d2o.style.background = "rgb(141, 141, 141)"
        d3o.style.background = "rgb(141, 141, 141)"
        d4o.style.background = "rgb(141, 141, 141)"
        d1p.style.background = "rgb(141, 141, 141)"
        d2p.style.background = "rgb(141, 141, 141)"
        d3p.style.background = "rgb(141, 141, 141)"
        d4p.style.background = "rgb(141, 141, 141)"
        d1q.style.background = "rgb(141, 141, 141)"
        d2q.style.background = "rgb(141, 141, 141)"
        d3q.style.background = "rgb(141, 141, 141)"
        d4q.style.background = "rgb(141, 141, 141)"
        d1r.style.background = "rgb(141, 141, 141)"
        d2r.style.background = "rgb(141, 141, 141)"
        d3r.style.background = "rgb(141, 141, 141)"
        d4r.style.background = "rgb(141, 141, 141)"
        d1s.style.background = "rgb(141, 141, 141)"
        d2s.style.background = "rgb(141, 141, 141)"
        d3s.style.background = "rgb(141, 141, 141)"
        d4s.style.background = "rgb(141, 141, 141)"
        d1t.style.background = "rgb(141, 141, 141)"
        d2t.style.background = "rgb(141, 141, 141)"
        d3t.style.background = "rgb(141, 141, 141)"
        d4t.style.background = "rgb(141, 141, 141)"
        d1u.style.background = "rgb(141, 141, 141)"
        d2u.style.background = "rgb(141, 141, 141)"
        d3u.style.background = "rgb(141, 141, 141)"
        d4u.style.background = "rgb(141, 141, 141)"
        d1v.style.background = "rgb(141, 141, 141)"
        d2v.style.background = "rgb(141, 141, 141)"
        d3v.style.background = "rgb(141, 141, 141)"
        d4v.style.background = "rgb(141, 141, 141)"
        d1w.style.background = "rgb(141, 141, 141)"
        d2w.style.background = "rgb(141, 141, 141)"
        d3w.style.background = "rgb(141, 141, 141)"
        d4w.style.background = "rgb(141, 141, 141)"
        d1x.style.background = "rgb(141, 141, 141)"
        d2x.style.background = "rgb(141, 141, 141)"
        d3x.style.background = "rgb(141, 141, 141)"
        d4x.style.background = "rgb(141, 141, 141)"
        d1y.style.background = "rgb(141, 141, 141)"
        d2y.style.background = "rgb(141, 141, 141)"
        d3y.style.background = "rgb(141, 141, 141)"
        d4y.style.background = "rgb(141, 141, 141)"
        d1z.style.background = "rgb(141, 141, 141)"
        d2z.style.background = "rgb(141, 141, 141)"
        d3z.style.background = "rgb(141, 141, 141)"
        d4z.style.background = "rgb(141, 141, 141)"
    }
    if (noteColorV == 3) {
        div.style.background = "rgb(247, 161, 0)"
        div2.style.background = "rgb(247, 161, 0)"
        div3.style.background = "rgb(247, 161, 0)"
        div4.style.background = "rgb(247, 161, 0)"
        d1.style.background = "rgb(247, 161, 0)"
        d2.style.background = "rgb(247, 161, 0)"
        d3.style.background = "rgb(247, 161, 0)"
        d4.style.background = "rgb(247, 161, 0)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(247, 161, 0)"
        d2c.style.background = "rgb(247, 161, 0)"
        d3c.style.background = "rgb(247, 161, 0)"
        d4c.style.background = "rgb(247, 161, 0)"
        d1d.style.background = "rgb(247, 161, 0)"
        d2d.style.background = "rgb(247, 161, 0)"
        d3d.style.background = "rgb(247, 161, 0)"
        d4d.style.background = "rgb(247, 161, 0)"
        d1e.style.background = "rgb(247, 161, 0)"
        d2e.style.background = "rgb(247, 161, 0)"
        d3e.style.background = "rgb(247, 161, 0)"
        d4e.style.background = "rgb(247, 161, 0)"
        d1f.style.background = "rgb(247, 161, 0)"
        d2f.style.background = "rgb(247, 161, 0)"
        d3f.style.background = "rgb(247, 161, 0)"
        d4f.style.background = "rgb(247, 161, 0)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(247, 161, 0)"
        d2h.style.background = "rgb(247, 161, 0)"
        d3h.style.background = "rgb(247, 161, 0)"
        d4h.style.background = "rgb(247, 161, 0)"
        d1i.style.background = "rgb(247, 161, 0)"
        d2i.style.background = "rgb(247, 161, 0)"
        d3i.style.background = "rgb(247, 161, 0)"
        d4i.style.background = "rgb(247, 161, 0)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(247, 161, 0)"
        d2k.style.background = "rgb(247, 161, 0)"
        d3k.style.background = "rgb(247, 161, 0)"
        d4k.style.background = "rgb(247, 161, 0)"
        d1l.style.background = "rgb(247, 161, 0)"
        d2l.style.background = "rgb(247, 161, 0)"
        d3l.style.background = "rgb(247, 161, 0)"
        d4l.style.background = "rgb(247, 161, 0)"
        d1m.style.background = "rgb(247, 161, 0)"
        d2m.style.background = "rgb(247, 161, 0)"
        d3m.style.background = "rgb(247, 161, 0)"
        d4m.style.background = "rgb(247, 161, 0)"
        d1n.style.background = "rgb(247, 161, 0)"
        d2n.style.background = "rgb(247, 161, 0)"
        d3n.style.background = "rgb(247, 161, 0)"
        d4n.style.background = "rgb(247, 161, 0)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(247, 161, 0)"
        d2p.style.background = "rgb(247, 161, 0)"
        d3p.style.background = "rgb(247, 161, 0)"
        d4p.style.background = "rgb(247, 161, 0)"
        d1q.style.background = "rgb(247, 161, 0)"
        d2q.style.background = "rgb(247, 161, 0)"
        d3q.style.background = "rgb(247, 161, 0)"
        d4q.style.background = "rgb(247, 161, 0)"
        d1r.style.background = "rgb(247, 161, 0)"
        d2r.style.background = "rgb(247, 161, 0)"
        d3r.style.background = "rgb(247, 161, 0)"
        d4r.style.background = "rgb(247, 161, 0)"
        d1s.style.background = "rgb(247, 161, 0)"
        d2s.style.background = "rgb(247, 161, 0)"
        d3s.style.background = "rgb(247, 161, 0)"
        d4s.style.background = "rgb(247, 161, 0)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(247, 161, 0)"
        d2u.style.background = "rgb(247, 161, 0)"
        d3u.style.background = "rgb(247, 161, 0)"
        d4u.style.background = "rgb(247, 161, 0)"
        d1v.style.background = "rgb(247, 161, 0)"
        d2v.style.background = "rgb(247, 161, 0)"
        d3v.style.background = "rgb(247, 161, 0)"
        d4v.style.background = "rgb(247, 161, 0)"
        d1w.style.background = "rgb(247, 161, 0)"
        d2w.style.background = "rgb(247, 161, 0)"
        d3w.style.background = "rgb(247, 161, 0)"
        d4w.style.background = "rgb(247, 161, 0)"
        d1x.style.background = "rgb(247, 161, 0)"
        d2x.style.background = "rgb(247, 161, 0)"
        d3x.style.background = "rgb(247, 161, 0)"
        d4x.style.background = "rgb(247, 161, 0)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(247, 161, 0)"
        d2z.style.background = "rgb(247, 161, 0)"
        d3z.style.background = "rgb(247, 161, 0)"
        d4z.style.background = "rgb(247, 161, 0)"
    }
    if (noteColorV == 4) {
        div.style.background = "rgb(133, 92, 255)"
        div2.style.background = "rgb(133, 92, 255)"
        div3.style.background = "rgb(133, 92, 255)"
        div4.style.background = "rgb(133, 92, 255)"
        d1.style.background = "rgb(133, 92, 255)"
        d2.style.background = "rgb(133, 92, 255)"
        d3.style.background = "rgb(133, 92, 255)"
        d4.style.background = "rgb(133, 92, 255)"
        d1b.style.background = "rgb(133, 92, 255)"
        d2b.style.background = "rgb(133, 92, 255)"
        d3b.style.background = "rgb(133, 92, 255)"
        d4b.style.background = "rgb(133, 92, 255)"
        d1c.style.background = "rgb(133, 92, 255)"
        d2c.style.background = "rgb(133, 92, 255)"
        d3c.style.background = "rgb(133, 92, 255)"
        d4c.style.background = "rgb(133, 92, 255)"
        d1d.style.background = "rgb(133, 92, 255)"
        d2d.style.background = "rgb(133, 92, 255)"
        d3d.style.background = "rgb(133, 92, 255)"
        d4d.style.background = "rgb(133, 92, 255)"
        d1e.style.background = "rgb(133, 92, 255)"
        d2e.style.background = "rgb(133, 92, 255)"
        d3e.style.background = "rgb(133, 92, 255)"
        d4e.style.background = "rgb(133, 92, 255)"
        d1f.style.background = "rgb(133, 92, 255)"
        d2f.style.background = "rgb(133, 92, 255)"
        d3f.style.background = "rgb(133, 92, 255)"
        d4f.style.background = "rgb(133, 92, 255)"
        d1g.style.background = "rgb(133, 92, 255)"
        d2g.style.background = "rgb(133, 92, 255)"
        d3g.style.background = "rgb(133, 92, 255)"
        d4g.style.background = "rgb(133, 92, 255)"
        d1h.style.background = "rgb(133, 92, 255)"
        d2h.style.background = "rgb(133, 92, 255)"
        d3h.style.background = "rgb(133, 92, 255)"
        d4h.style.background = "rgb(133, 92, 255)"
        d1i.style.background = "rgb(133, 92, 255)"
        d2i.style.background = "rgb(133, 92, 255)"
        d3i.style.background = "rgb(133, 92, 255)"
        d4i.style.background = "rgb(133, 92, 255)"
        d1j.style.background = "rgb(133, 92, 255)"
        d2j.style.background = "rgb(133, 92, 255)"
        d3j.style.background = "rgb(133, 92, 255)"
        d4j.style.background = "rgb(133, 92, 255)"
        d1k.style.background = "rgb(133, 92, 255)"
        d2k.style.background = "rgb(133, 92, 255)"
        d3k.style.background = "rgb(133, 92, 255)"
        d4k.style.background = "rgb(133, 92, 255)"
        d1l.style.background = "rgb(133, 92, 255)"
        d2l.style.background = "rgb(133, 92, 255)"
        d3l.style.background = "rgb(133, 92, 255)"
        d4l.style.background = "rgb(133, 92, 255)"
        d1m.style.background = "rgb(133, 92, 255)"
        d2m.style.background = "rgb(133, 92, 255)"
        d3m.style.background = "rgb(133, 92, 255)"
        d4m.style.background = "rgb(133, 92, 255)"
        d1n.style.background = "rgb(133, 92, 255)"
        d2n.style.background = "rgb(133, 92, 255)"
        d3n.style.background = "rgb(133, 92, 255)"
        d4n.style.background = "rgb(133, 92, 255)"
        d1o.style.background = "rgb(133, 92, 255)"
        d2o.style.background = "rgb(133, 92, 255)"
        d3o.style.background = "rgb(133, 92, 255)"
        d4o.style.background = "rgb(133, 92, 255)"
        d1p.style.background = "rgb(133, 92, 255)"
        d2p.style.background = "rgb(133, 92, 255)"
        d3p.style.background = "rgb(133, 92, 255)"
        d4p.style.background = "rgb(133, 92, 255)"
        d1q.style.background = "rgb(133, 92, 255)"
        d2q.style.background = "rgb(133, 92, 255)"
        d3q.style.background = "rgb(133, 92, 255)"
        d4q.style.background = "rgb(133, 92, 255)"
        d1r.style.background = "rgb(133, 92, 255)"
        d2r.style.background = "rgb(133, 92, 255)"
        d3r.style.background = "rgb(133, 92, 255)"
        d4r.style.background = "rgb(133, 92, 255)"
        d1s.style.background = "rgb(133, 92, 255)"
        d2s.style.background = "rgb(133, 92, 255)"
        d3s.style.background = "rgb(133, 92, 255)"
        d4s.style.background = "rgb(133, 92, 255)"
        d1t.style.background = "rgb(133, 92, 255)"
        d2t.style.background = "rgb(133, 92, 255)"
        d3t.style.background = "rgb(133, 92, 255)"
        d4t.style.background = "rgb(133, 92, 255)"
        d1u.style.background = "rgb(133, 92, 255)"
        d2u.style.background = "rgb(133, 92, 255)"
        d3u.style.background = "rgb(133, 92, 255)"
        d4u.style.background = "rgb(133, 92, 255)"
        d1v.style.background = "rgb(133, 92, 255)"
        d2v.style.background = "rgb(133, 92, 255)"
        d3v.style.background = "rgb(133, 92, 255)"
        d4v.style.background = "rgb(133, 92, 255)"
        d1w.style.background = "rgb(133, 92, 255)"
        d2w.style.background = "rgb(133, 92, 255)"
        d3w.style.background = "rgb(133, 92, 255)"
        d4w.style.background = "rgb(133, 92, 255)"
        d1x.style.background = "rgb(133, 92, 255)"
        d2x.style.background = "rgb(133, 92, 255)"
        d3x.style.background = "rgb(133, 92, 255)"
        d4x.style.background = "rgb(133, 92, 255)"
        d1y.style.background = "rgb(133, 92, 255)"
        d2y.style.background = "rgb(133, 92, 255)"
        d3y.style.background = "rgb(133, 92, 255)"
        d4y.style.background = "rgb(133, 92, 255)"
        d1z.style.background = "rgb(133, 92, 255)"
        d2z.style.background = "rgb(133, 92, 255)"
        d3z.style.background = "rgb(133, 92, 255)"
        d4z.style.background = "rgb(133, 92, 255)"
    }
    if (noteColorV == 5) {
        div.style.background = "RGB(0,133,0)"
        div2.style.background = "RGB(0,133,0)"
        div3.style.background = "RGB(0,133,0)"
        div4.style.background = "RGB(0,133,0)"
        d1.style.background = "RGB(0,133,0)"
        d2.style.background = "RGB(0,133,0)"
        d3.style.background = "RGB(0,133,0)"
        d4.style.background = "RGB(0,133,0)"
        d1b.style.background = "RGB(0,133,0)"
        d2b.style.background = "RGB(0,133,0)"
        d3b.style.background = "RGB(0,133,0)"
        d4b.style.background = "RGB(0,133,0)"
        d1c.style.background = "RGB(0,133,0)"
        d2c.style.background = "RGB(0,133,0)"
        d3c.style.background = "RGB(0,133,0)"
        d4c.style.background = "RGB(0,133,0)"
        d1d.style.background = "RGB(0,133,0)"
        d2d.style.background = "RGB(0,133,0)"
        d3d.style.background = "RGB(0,133,0)"
        d4d.style.background = "RGB(0,133,0)"
        d1e.style.background = "RGB(0,133,0)"
        d2e.style.background = "RGB(0,133,0)"
        d3e.style.background = "RGB(0,133,0)"
        d4e.style.background = "RGB(0,133,0)"
        d1f.style.background = "RGB(0,133,0)"
        d2f.style.background = "RGB(0,133,0)"
        d3f.style.background = "RGB(0,133,0)"
        d4f.style.background = "RGB(0,133,0)"
        d1g.style.background = "RGB(0,133,0)"
        d2g.style.background = "RGB(0,133,0)"
        d3g.style.background = "RGB(0,133,0)"
        d4g.style.background = "RGB(0,133,0)"
        d1h.style.background = "RGB(0,133,0)"
        d2h.style.background = "RGB(0,133,0)"
        d3h.style.background = "RGB(0,133,0)"
        d4h.style.background = "RGB(0,133,0)"
        d1i.style.background = "RGB(0,133,0)"
        d2i.style.background = "RGB(0,133,0)"
        d3i.style.background = "RGB(0,133,0)"
        d4i.style.background = "RGB(0,133,0)"
        d1j.style.background = "RGB(0,133,0)"
        d2j.style.background = "RGB(0,133,0)"
        d3j.style.background = "RGB(0,133,0)"
        d4j.style.background = "RGB(0,133,0)"
        d1k.style.background = "RGB(0,133,0)"
        d2k.style.background = "RGB(0,133,0)"
        d3k.style.background = "RGB(0,133,0)"
        d4k.style.background = "RGB(0,133,0)"
        d1l.style.background = "RGB(0,133,0)"
        d2l.style.background = "RGB(0,133,0)"
        d3l.style.background = "RGB(0,133,0)"
        d4l.style.background = "RGB(0,133,0)"
        d1m.style.background = "RGB(0,133,0)"
        d2m.style.background = "RGB(0,133,0)"
        d3m.style.background = "RGB(0,133,0)"
        d4m.style.background = "RGB(0,133,0)"
        d1n.style.background = "RGB(0,133,0)"
        d2n.style.background = "RGB(0,133,0)"
        d3n.style.background = "RGB(0,133,0)"
        d4n.style.background = "RGB(0,133,0)"
        d1o.style.background = "RGB(0,133,0)"
        d2o.style.background = "RGB(0,133,0)"
        d3o.style.background = "RGB(0,133,0)"
        d4o.style.background = "RGB(0,133,0)"
        d1p.style.background = "RGB(0,133,0)"
        d2p.style.background = "RGB(0,133,0)"
        d3p.style.background = "RGB(0,133,0)"
        d4p.style.background = "RGB(0,133,0)"
        d1q.style.background = "RGB(0,133,0)"
        d2q.style.background = "RGB(0,133,0)"
        d3q.style.background = "RGB(0,133,0)"
        d4q.style.background = "RGB(0,133,0)"
        d1r.style.background = "RGB(0,133,0)"
        d2r.style.background = "RGB(0,133,0)"
        d3r.style.background = "RGB(0,133,0)"
        d4r.style.background = "RGB(0,133,0)"
        d1s.style.background = "RGB(0,133,0)"
        d2s.style.background = "RGB(0,133,0)"
        d3s.style.background = "RGB(0,133,0)"
        d4s.style.background = "RGB(0,133,0)"
        d1t.style.background = "RGB(0,133,0)"
        d2t.style.background = "RGB(0,133,0)"
        d3t.style.background = "RGB(0,133,0)"
        d4t.style.background = "RGB(0,133,0)"
        d1u.style.background = "RGB(0,133,0)"
        d2u.style.background = "RGB(0,133,0)"
        d3u.style.background = "RGB(0,133,0)"
        d4u.style.background = "RGB(0,133,0)"
        d1v.style.background = "RGB(0,133,0)"
        d2v.style.background = "RGB(0,133,0)"
        d3v.style.background = "RGB(0,133,0)"
        d4v.style.background = "RGB(0,133,0)"
        d1w.style.background = "RGB(0,133,0)"
        d2w.style.background = "RGB(0,133,0)"
        d3w.style.background = "RGB(0,133,0)"
        d4w.style.background = "RGB(0,133,0)"
        d1x.style.background = "RGB(0,133,0)"
        d2x.style.background = "RGB(0,133,0)"
        d3x.style.background = "RGB(0,133,0)"
        d4x.style.background = "RGB(0,133,0)"
        d1y.style.background = "RGB(0,133,0)"
        d2y.style.background = "RGB(0,133,0)"
        d3y.style.background = "RGB(0,133,0)"
        d4y.style.background = "RGB(0,133,0)"
        d1z.style.background = "RGB(0,133,0)"
        d2z.style.background = "RGB(0,133,0)"
        d3z.style.background = "RGB(0,133,0)"
        d4z.style.background = "RGB(0,133,0)"
    }
    if (noteColorV == 6) {
        div.style.background = "rgb(0, 170, 255)"
        div2.style.background = "rgb(0, 170, 255)"
        div3.style.background = "rgb(0, 170, 255)"
        div4.style.background = "rgb(0, 170, 255)"
        d1.style.background = "rgb(0, 170, 255)"
        d2.style.background = "rgb(0, 170, 255)"
        d3.style.background = "rgb(0, 170, 255)"
        d4.style.background = "rgb(0, 170, 255)"
        d1b.style.background = "rgb(0, 170, 255)"
        d2b.style.background = "rgb(0, 170, 255)"
        d3b.style.background = "rgb(0, 170, 255)"
        d4b.style.background = "rgb(0, 170, 255)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(0, 170, 255)"
        d2d.style.background = "rgb(0, 170, 255)"
        d3d.style.background = "rgb(0, 170, 255)"
        d4d.style.background = "rgb(0, 170, 255)"
        d1e.style.background = "rgb(0, 170, 255)"
        d2e.style.background = "rgb(0, 170, 255)"
        d3e.style.background = "rgb(0, 170, 255)"
        d4e.style.background = "rgb(0, 170, 255)"
        d1f.style.background = "rgb(0, 170, 255)"
        d2f.style.background = "rgb(0, 170, 255)"
        d3f.style.background = "rgb(0, 170, 255)"
        d4f.style.background = "rgb(0, 170, 255)"
        d1g.style.background = "rgb(0, 170, 255)"
        d2g.style.background = "rgb(0, 170, 255)"
        d3g.style.background = "rgb(0, 170, 255)"
        d4g.style.background = "rgb(0, 170, 255)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(0, 170, 255)"
        d2i.style.background = "rgb(0, 170, 255)"
        d3i.style.background = "rgb(0, 170, 255)"
        d4i.style.background = "rgb(0, 170, 255)"
        d1j.style.background = "rgb(0, 170, 255)"
        d2j.style.background = "rgb(0, 170, 255)"
        d3j.style.background = "rgb(0, 170, 255)"
        d4j.style.background = "rgb(0, 170, 255)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(0, 170, 255)"
        d2l.style.background = "rgb(0, 170, 255)"
        d3l.style.background = "rgb(0, 170, 255)"
        d4l.style.background = "rgb(0, 170, 255)"
        d1m.style.background = "rgb(0, 170, 255)"
        d2m.style.background = "rgb(0, 170, 255)"
        d3m.style.background = "rgb(0, 170, 255)"
        d4m.style.background = "rgb(0, 170, 255)"
        d1n.style.background = "rgb(0, 170, 255)"
        d2n.style.background = "rgb(0, 170, 255)"
        d3n.style.background = "rgb(0, 170, 255)"
        d4n.style.background = "rgb(0, 170, 255)"
        d1o.style.background = "rgb(0, 170, 255)"
        d2o.style.background = "rgb(0, 170, 255)"
        d3o.style.background = "rgb(0, 170, 255)"
        d4o.style.background = "rgb(0, 170, 255)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(0, 170, 255)"
        d2q.style.background = "rgb(0, 170, 255)"
        d3q.style.background = "rgb(0, 170, 255)"
        d4q.style.background = "rgb(0, 170, 255)"
        d1r.style.background = "rgb(0, 170, 255)"
        d2r.style.background = "rgb(0, 170, 255)"
        d3r.style.background = "rgb(0, 170, 255)"
        d4r.style.background = "rgb(0, 170, 255)"
        d1s.style.background = "rgb(0, 170, 255)"
        d2s.style.background = "rgb(0, 170, 255)"
        d3s.style.background = "rgb(0, 170, 255)"
        d4s.style.background = "rgb(0, 170, 255)"
        d1t.style.background = "rgb(0, 170, 255)"
        d2t.style.background = "rgb(0, 170, 255)"
        d3t.style.background = "rgb(0, 170, 255)"
        d4t.style.background = "rgb(0, 170, 255)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(0, 170, 255)"
        d2v.style.background = "rgb(0, 170, 255)"
        d3v.style.background = "rgb(0, 170, 255)"
        d4v.style.background = "rgb(0, 170, 255)"
        d1w.style.background = "rgb(0, 170, 255)"
        d2w.style.background = "rgb(0, 170, 255)"
        d3w.style.background = "rgb(0, 170, 255)"
        d4w.style.background = "rgb(0, 170, 255)"
        d1x.style.background = "rgb(0, 170, 255)"
        d2x.style.background = "rgb(0, 170, 255)"
        d3x.style.background = "rgb(0, 170, 255)"
        d4x.style.background = "rgb(0, 170, 255)"
        d1y.style.background = "rgb(0, 170, 255)"
        d2y.style.background = "rgb(0, 170, 255)"
        d3y.style.background = "rgb(0, 170, 255)"
        d4y.style.background = "rgb(0, 170, 255)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 7) {
        div.style.background = "rgb(255, 255, 255)"
        div2.style.background = "rgb(255, 255, 255)"
        div3.style.background = "rgb(255, 255, 255)"
        div4.style.background = "rgb(255, 255, 255)"
        d1.style.background = "rgb(255, 255, 255)"
        d2.style.background = "rgb(255, 255, 255)"
        d3.style.background = "rgb(255, 255, 255)"
        d4.style.background = "rgb(255, 255, 255)"
        d1b.style.background = "rgb(255, 255, 255)"
        d2b.style.background = "rgb(255, 255, 255)"
        d3b.style.background = "rgb(255, 255, 255)"
        d4b.style.background = "rgb(255, 255, 255)"
        d1c.style.background = "rgb(255, 255, 255)"
        d2c.style.background = "rgb(255, 255, 255)"
        d3c.style.background = "rgb(255, 255, 255)"
        d4c.style.background = "rgb(255, 255, 255)"
        d1d.style.background = "rgb(255, 255, 255)"
        d2d.style.background = "rgb(255, 255, 255)"
        d3d.style.background = "rgb(255, 255, 255)"
        d4d.style.background = "rgb(255, 255, 255)"
        d1e.style.background = "rgb(255, 255, 255)"
        d2e.style.background = "rgb(255, 255, 255)"
        d3e.style.background = "rgb(255, 255, 255)"
        d4e.style.background = "rgb(255, 255, 255)"
        d1f.style.background = "rgb(255, 255, 255)"
        d2f.style.background = "rgb(255, 255, 255)"
        d3f.style.background = "rgb(255, 255, 255)"
        d4f.style.background = "rgb(255, 255, 255)"
        d1g.style.background = "rgb(255, 255, 255)"
        d2g.style.background = "rgb(255, 255, 255)"
        d3g.style.background = "rgb(255, 255, 255)"
        d4g.style.background = "rgb(255, 255, 255)"
        d1h.style.background = "rgb(255, 255, 255)"
        d2h.style.background = "rgb(255, 255, 255)"
        d3h.style.background = "rgb(255, 255, 255)"
        d4h.style.background = "rgb(255, 255, 255)"
        d1i.style.background = "rgb(255, 255, 255)"
        d2i.style.background = "rgb(255, 255, 255)"
        d3i.style.background = "rgb(255, 255, 255)"
        d4i.style.background = "rgb(255, 255, 255)"
        d1j.style.background = "rgb(255, 255, 255)"
        d2j.style.background = "rgb(255, 255, 255)"
        d3j.style.background = "rgb(255, 255, 255)"
        d4j.style.background = "rgb(255, 255, 255)"
        d1k.style.background = "rgb(255, 255, 255)"
        d2k.style.background = "rgb(255, 255, 255)"
        d3k.style.background = "rgb(255, 255, 255)"
        d4k.style.background = "rgb(255, 255, 255)"
        d1l.style.background = "rgb(255, 255, 255)"
        d2l.style.background = "rgb(255, 255, 255)"
        d3l.style.background = "rgb(255, 255, 255)"
        d4l.style.background = "rgb(255, 255, 255)"
        d1m.style.background = "rgb(255, 255, 255)"
        d2m.style.background = "rgb(255, 255, 255)"
        d3m.style.background = "rgb(255, 255, 255)"
        d4m.style.background = "rgb(255, 255, 255)"
        d1n.style.background = "rgb(255, 255, 255)"
        d2n.style.background = "rgb(255, 255, 255)"
        d3n.style.background = "rgb(255, 255, 255)"
        d4n.style.background = "rgb(255, 255, 255)"
        d1o.style.background = "rgb(255, 255, 255)"
        d2o.style.background = "rgb(255, 255, 255)"
        d3o.style.background = "rgb(255, 255, 255)"
        d4o.style.background = "rgb(255, 255, 255)"
        d1p.style.background = "rgb(255, 255, 255)"
        d2p.style.background = "rgb(255, 255, 255)"
        d3p.style.background = "rgb(255, 255, 255)"
        d4p.style.background = "rgb(255, 255, 255)"
        d1q.style.background = "rgb(255, 255, 255)"
        d2q.style.background = "rgb(255, 255, 255)"
        d3q.style.background = "rgb(255, 255, 255)"
        d4q.style.background = "rgb(255, 255, 255)"
        d1r.style.background = "rgb(255, 255, 255)"
        d2r.style.background = "rgb(255, 255, 255)"
        d3r.style.background = "rgb(255, 255, 255)"
        d4r.style.background = "rgb(255, 255, 255)"
        d1s.style.background = "rgb(255, 255, 255)"
        d2s.style.background = "rgb(255, 255, 255)"
        d3s.style.background = "rgb(255, 255, 255)"
        d4s.style.background = "rgb(255, 255, 255)"
        d1t.style.background = "rgb(255, 255, 255)"
        d2t.style.background = "rgb(255, 255, 255)"
        d3t.style.background = "rgb(255, 255, 255)"
        d4t.style.background = "rgb(255, 255, 255)"
        d1u.style.background = "rgb(255, 255, 255)"
        d2u.style.background = "rgb(255, 255, 255)"
        d3u.style.background = "rgb(255, 255, 255)"
        d4u.style.background = "rgb(255, 255, 255)"
        d1v.style.background = "rgb(255, 255, 255)"
        d2v.style.background = "rgb(255, 255, 255)"
        d3v.style.background = "rgb(255, 255, 255)"
        d4v.style.background = "rgb(255, 255, 255)"
        d1w.style.background = "rgb(255, 255, 255)"
        d2w.style.background = "rgb(255, 255, 255)"
        d3w.style.background = "rgb(255, 255, 255)"
        d4w.style.background = "rgb(255, 255, 255)"
        d1x.style.background = "rgb(255, 255, 255)"
        d2x.style.background = "rgb(255, 255, 255)"
        d3x.style.background = "rgb(255, 255, 255)"
        d4x.style.background = "rgb(255, 255, 255)"
        d1y.style.background = "rgb(255, 255, 255)"
        d2y.style.background = "rgb(255, 255, 255)"
        d3y.style.background = "rgb(255, 255, 255)"
        d4y.style.background = "rgb(255, 255, 255)"
        d1z.style.background = "rgb(255, 255, 255)"
        d2z.style.background = "rgb(255, 255, 255)"
        d3z.style.background = "rgb(255, 255, 255)"
        d4z.style.background = "rgb(255, 255, 255)"
    }
    if (noteColorV == 8) {
        div.style.background = "rgb(206, 255, 72)"
        div2.style.background = "rgb(206, 255, 72)"
        div3.style.background = "rgb(206, 255, 72)"
        div4.style.background = "rgb(206, 255, 72)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(206, 255, 72)"
        d2b.style.background = "rgb(206, 255, 72)"
        d3b.style.background = "rgb(206, 255, 72)"
        d4b.style.background = "rgb(206, 255, 72)"
        d1c.style.background = "rgb(206, 255, 72)"
        d2c.style.background = "rgb(206, 255, 72)"
        d3c.style.background = "rgb(206, 255, 72)"
        d4c.style.background = "rgb(206, 255, 72)"
        d1d.style.background = "rgb(206, 255, 72)"
        d2d.style.background = "rgb(206, 255, 72)"
        d3d.style.background = "rgb(206, 255, 72)"
        d4d.style.background = "rgb(206, 255, 72)"
        d1e.style.background = "rgb(206, 255, 72)"
        d2e.style.background = "rgb(206, 255, 72)"
        d3e.style.background = "rgb(206, 255, 72)"
        d4e.style.background = "rgb(206, 255, 72)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(206, 255, 72)"
        d2g.style.background = "rgb(206, 255, 72)"
        d3g.style.background = "rgb(206, 255, 72)"
        d4g.style.background = "rgb(206, 255, 72)"
        d1h.style.background = "rgb(206, 255, 72)"
        d2h.style.background = "rgb(206, 255, 72)"
        d3h.style.background = "rgb(206, 255, 72)"
        d4h.style.background = "rgb(206, 255, 72)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(206, 255, 72)"
        d2j.style.background = "rgb(206, 255, 72)"
        d3j.style.background = "rgb(206, 255, 72)"
        d4j.style.background = "rgb(206, 255, 72)"
        d1k.style.background = "rgb(206, 255, 72)"
        d2k.style.background = "rgb(206, 255, 72)"
        d3k.style.background = "rgb(206, 255, 72)"
        d4k.style.background = "rgb(206, 255, 72)"
        d1l.style.background = "rgb(206, 255, 72)"
        d2l.style.background = "rgb(206, 255, 72)"
        d3l.style.background = "rgb(206, 255, 72)"
        d4l.style.background = "rgb(206, 255, 72)"
        d1m.style.background = "rgb(206, 255, 72)"
        d2m.style.background = "rgb(206, 255, 72)"
        d3m.style.background = "rgb(206, 255, 72)"
        d4m.style.background = "rgb(206, 255, 72)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(206, 255, 72)"
        d2o.style.background = "rgb(206, 255, 72)"
        d3o.style.background = "rgb(206, 255, 72)"
        d4o.style.background = "rgb(206, 255, 72)"
        d1p.style.background = "rgb(206, 255, 72)"
        d2p.style.background = "rgb(206, 255, 72)"
        d3p.style.background = "rgb(206, 255, 72)"
        d4p.style.background = "rgb(206, 255, 72)"
        d1q.style.background = "rgb(206, 255, 72)"
        d2q.style.background = "rgb(206, 255, 72)"
        d3q.style.background = "rgb(206, 255, 72)"
        d4q.style.background = "rgb(206, 255, 72)"
        d1r.style.background = "rgb(206, 255, 72)"
        d2r.style.background = "rgb(206, 255, 72)"
        d3r.style.background = "rgb(206, 255, 72)"
        d4r.style.background = "rgb(206, 255, 72)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(206, 255, 72)"
        d2t.style.background = "rgb(206, 255, 72)"
        d3t.style.background = "rgb(206, 255, 72)"
        d4t.style.background = "rgb(206, 255, 72)"
        d1u.style.background = "rgb(206, 255, 72)"
        d2u.style.background = "rgb(206, 255, 72)"
        d3u.style.background = "rgb(206, 255, 72)"
        d4u.style.background = "rgb(206, 255, 72)"
        d1v.style.background = "rgb(206, 255, 72)"
        d2v.style.background = "rgb(206, 255, 72)"
        d3v.style.background = "rgb(206, 255, 72)"
        d4v.style.background = "rgb(206, 255, 72)"
        d1w.style.background = "rgb(206, 255, 72)"
        d2w.style.background = "rgb(206, 255, 72)"
        d3w.style.background = "rgb(206, 255, 72)"
        d4w.style.background = "rgb(206, 255, 72)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(206, 255, 72)"
        d2y.style.background = "rgb(206, 255, 72)"
        d3y.style.background = "rgb(206, 255, 72)"
        d4y.style.background = "rgb(206, 255, 72)"
        d1z.style.background = "rgb(206, 255, 72)"
        d2z.style.background = "rgb(206, 255, 72)"
        d3z.style.background = "rgb(206, 255, 72)"
        d4z.style.background = "rgb(206, 255, 72)"
    }
    if (noteColorV == 9) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 10) {
        div.style.background = "rgb(252, 157, 255)"
        div2.style.background = "rgb(252, 157, 255)"
        div3.style.background = "rgb(252, 157, 255)"
        div4.style.background = "rgb(252, 157, 255)"
        d1.style.background = "rgb(252, 157, 255)"
        d2.style.background = "rgb(252, 157, 255)"
        d3.style.background = "rgb(252, 157, 255)"
        d4.style.background = "rgb(252, 157, 255)"
        d1b.style.background = "rgb(252, 157, 255)"
        d2b.style.background = "rgb(252, 157, 255)"
        d3b.style.background = "rgb(252, 157, 255)"
        d4b.style.background = "rgb(252, 157, 255)"
        d1c.style.background = "rgb(252, 157, 255)"
        d2c.style.background = "rgb(252, 157, 255)"
        d3c.style.background = "rgb(252, 157, 255)"
        d4c.style.background = "rgb(252, 157, 255)"
        d1d.style.background = "rgb(252, 157, 255)"
        d2d.style.background = "rgb(252, 157, 255)"
        d3d.style.background = "rgb(252, 157, 255)"
        d4d.style.background = "rgb(252, 157, 255)"
        d1e.style.background = "rgb(252, 157, 255)"
        d2e.style.background = "rgb(252, 157, 255)"
        d3e.style.background = "rgb(252, 157, 255)"
        d4e.style.background = "rgb(252, 157, 255)"
        d1f.style.background = "rgb(252, 157, 255)"
        d2f.style.background = "rgb(252, 157, 255)"
        d3f.style.background = "rgb(252, 157, 255)"
        d4f.style.background = "rgb(252, 157, 255)"
        d1g.style.background = "rgb(252, 157, 255)"
        d2g.style.background = "rgb(252, 157, 255)"
        d3g.style.background = "rgb(252, 157, 255)"
        d4g.style.background = "rgb(252, 157, 255)"
        d1h.style.background = "rgb(252, 157, 255)"
        d2h.style.background = "rgb(252, 157, 255)"
        d3h.style.background = "rgb(252, 157, 255)"
        d4h.style.background = "rgb(252, 157, 255)"
        d1i.style.background = "rgb(252, 157, 255)"
        d2i.style.background = "rgb(252, 157, 255)"
        d3i.style.background = "rgb(252, 157, 255)"
        d4i.style.background = "rgb(252, 157, 255)"
        d1j.style.background = "rgb(252, 157, 255)"
        d2j.style.background = "rgb(252, 157, 255)"
        d3j.style.background = "rgb(252, 157, 255)"
        d4j.style.background = "rgb(252, 157, 255)"
        d1k.style.background = "rgb(252, 157, 255)"
        d2k.style.background = "rgb(252, 157, 255)"
        d3k.style.background = "rgb(252, 157, 255)"
        d4k.style.background = "rgb(252, 157, 255)"
        d1l.style.background = "rgb(252, 157, 255)"
        d2l.style.background = "rgb(252, 157, 255)"
        d3l.style.background = "rgb(252, 157, 255)"
        d4l.style.background = "rgb(252, 157, 255)"
        d1m.style.background = "rgb(252, 157, 255)"
        d2m.style.background = "rgb(252, 157, 255)"
        d3m.style.background = "rgb(252, 157, 255)"
        d4m.style.background = "rgb(252, 157, 255)"
        d1n.style.background = "rgb(252, 157, 255)"
        d2n.style.background = "rgb(252, 157, 255)"
        d3n.style.background = "rgb(252, 157, 255)"
        d4n.style.background = "rgb(252, 157, 255)"
        d1o.style.background = "rgb(252, 157, 255)"
        d2o.style.background = "rgb(252, 157, 255)"
        d3o.style.background = "rgb(252, 157, 255)"
        d4o.style.background = "rgb(252, 157, 255)"
        d1p.style.background = "rgb(252, 157, 255)"
        d2p.style.background = "rgb(252, 157, 255)"
        d3p.style.background = "rgb(252, 157, 255)"
        d4p.style.background = "rgb(252, 157, 255)"
        d1q.style.background = "rgb(252, 157, 255)"
        d2q.style.background = "rgb(252, 157, 255)"
        d3q.style.background = "rgb(252, 157, 255)"
        d4q.style.background = "rgb(252, 157, 255)"
        d1r.style.background = "rgb(252, 157, 255)"
        d2r.style.background = "rgb(252, 157, 255)"
        d3r.style.background = "rgb(252, 157, 255)"
        d4r.style.background = "rgb(252, 157, 255)"
        d1s.style.background = "rgb(252, 157, 255)"
        d2s.style.background = "rgb(252, 157, 255)"
        d3s.style.background = "rgb(252, 157, 255)"
        d4s.style.background = "rgb(252, 157, 255)"
        d1t.style.background = "rgb(252, 157, 255)"
        d2t.style.background = "rgb(252, 157, 255)"
        d3t.style.background = "rgb(252, 157, 255)"
        d4t.style.background = "rgb(252, 157, 255)"
        d1u.style.background = "rgb(252, 157, 255)"
        d2u.style.background = "rgb(252, 157, 255)"
        d3u.style.background = "rgb(252, 157, 255)"
        d4u.style.background = "rgb(252, 157, 255)"
        d1v.style.background = "rgb(252, 157, 255)"
        d2v.style.background = "rgb(252, 157, 255)"
        d3v.style.background = "rgb(252, 157, 255)"
        d4v.style.background = "rgb(252, 157, 255)"
        d1w.style.background = "rgb(252, 157, 255)"
        d2w.style.background = "rgb(252, 157, 255)"
        d3w.style.background = "rgb(252, 157, 255)"
        d4w.style.background = "rgb(252, 157, 255)"
        d1x.style.background = "rgb(252, 157, 255)"
        d2x.style.background = "rgb(252, 157, 255)"
        d3x.style.background = "rgb(252, 157, 255)"
        d4x.style.background = "rgb(252, 157, 255)"
        d1y.style.background = "rgb(252, 157, 255)"
        d2y.style.background = "rgb(252, 157, 255)"
        d3y.style.background = "rgb(252, 157, 255)"
        d4y.style.background = "rgb(252, 157, 255)"
        d1z.style.background = "rgb(252, 157, 255)"
        d2z.style.background = "rgb(252, 157, 255)"
        d3z.style.background = "rgb(252, 157, 255)"
        d4z.style.background = "rgb(252, 157, 255)"
    }
    if (noteColorV == 11) {
        div.style.background = "rgb(0, 0, 0)"
        div2.style.background = "rgb(0, 0, 0)"
        div3.style.background = "rgb(0, 0, 0)"
        div4.style.background = "rgb(0, 0, 0)"
        d1.style.background = "rgb(0, 0, 0)"
        d2.style.background = "rgb(0, 0, 0)"
        d3.style.background = "rgb(0, 0, 0)"
        d4.style.background = "rgb(0, 0, 0)"
        d1b.style.background = "rgb(0, 0, 0)"
        d2b.style.background = "rgb(0, 0, 0)"
        d3b.style.background = "rgb(0, 0, 0)"
        d4b.style.background = "rgb(0, 0, 0)"
        d1c.style.background = "rgb(0, 0, 0)"
        d2c.style.background = "rgb(0, 0, 0)"
        d3c.style.background = "rgb(0, 0, 0)"
        d4c.style.background = "rgb(0, 0, 0)"
        d1d.style.background = "rgb(0, 0, 0)"
        d2d.style.background = "rgb(0, 0, 0)"
        d3d.style.background = "rgb(0, 0, 0)"
        d4d.style.background = "rgb(0, 0, 0)"
        d1e.style.background = "rgb(0, 0, 0)"
        d2e.style.background = "rgb(0, 0, 0)"
        d3e.style.background = "rgb(0, 0, 0)"
        d4e.style.background = "rgb(0, 0, 0)"
        d1f.style.background = "rgb(0, 0, 0)"
        d2f.style.background = "rgb(0, 0, 0)"
        d3f.style.background = "rgb(0, 0, 0)"
        d4f.style.background = "rgb(0, 0, 0)"
        d1g.style.background = "rgb(0, 0, 0)"
        d2g.style.background = "rgb(0, 0, 0)"
        d3g.style.background = "rgb(0, 0, 0)"
        d4g.style.background = "rgb(0, 0, 0)"
        d1h.style.background = "rgb(0, 0, 0)"
        d2h.style.background = "rgb(0, 0, 0)"
        d3h.style.background = "rgb(0, 0, 0)"
        d4h.style.background = "rgb(0, 0, 0)"
        d1i.style.background = "rgb(0, 0, 0)"
        d2i.style.background = "rgb(0, 0, 0)"
        d3i.style.background = "rgb(0, 0, 0)"
        d4i.style.background = "rgb(0, 0, 0)"
        d1j.style.background = "rgb(0, 0, 0)"
        d2j.style.background = "rgb(0, 0, 0)"
        d3j.style.background = "rgb(0, 0, 0)"
        d4j.style.background = "rgb(0, 0, 0)"
        d1k.style.background = "rgb(0, 0, 0)"
        d2k.style.background = "rgb(0, 0, 0)"
        d3k.style.background = "rgb(0, 0, 0)"
        d4k.style.background = "rgb(0, 0, 0)"
        d1l.style.background = "rgb(0, 0, 0)"
        d2l.style.background = "rgb(0, 0, 0)"
        d3l.style.background = "rgb(0, 0, 0)"
        d4l.style.background = "rgb(0, 0, 0)"
        d1m.style.background = "rgb(0, 0, 0)"
        d2m.style.background = "rgb(0, 0, 0)"
        d3m.style.background = "rgb(0, 0, 0)"
        d4m.style.background = "rgb(0, 0, 0)"
        d1n.style.background = "rgb(0, 0, 0)"
        d2n.style.background = "rgb(0, 0, 0)"
        d3n.style.background = "rgb(0, 0, 0)"
        d4n.style.background = "rgb(0, 0, 0)"
        d1o.style.background = "rgb(0, 0, 0)"
        d2o.style.background = "rgb(0, 0, 0)"
        d3o.style.background = "rgb(0, 0, 0)"
        d4o.style.background = "rgb(0, 0, 0)"
        d1p.style.background = "rgb(0, 0, 0)"
        d2p.style.background = "rgb(0, 0, 0)"
        d3p.style.background = "rgb(0, 0, 0)"
        d4p.style.background = "rgb(0, 0, 0)"
        d1q.style.background = "rgb(0, 0, 0)"
        d2q.style.background = "rgb(0, 0, 0)"
        d3q.style.background = "rgb(0, 0, 0)"
        d4q.style.background = "rgb(0, 0, 0)"
        d1r.style.background = "rgb(0, 0, 0)"
        d2r.style.background = "rgb(0, 0, 0)"
        d3r.style.background = "rgb(0, 0, 0)"
        d4r.style.background = "rgb(0, 0, 0)"
        d1s.style.background = "rgb(0, 0, 0)"
        d2s.style.background = "rgb(0, 0, 0)"
        d3s.style.background = "rgb(0, 0, 0)"
        d4s.style.background = "rgb(0, 0, 0)"
        d1t.style.background = "rgb(0, 0, 0)"
        d2t.style.background = "rgb(0, 0, 0)"
        d3t.style.background = "rgb(0, 0, 0)"
        d4t.style.background = "rgb(0, 0, 0)"
        d1u.style.background = "rgb(0, 0, 0)"
        d2u.style.background = "rgb(0, 0, 0)"
        d3u.style.background = "rgb(0, 0, 0)"
        d4u.style.background = "rgb(0, 0, 0)"
        d1v.style.background = "rgb(0, 0, 0)"
        d2v.style.background = "rgb(0, 0, 0)"
        d3v.style.background = "rgb(0, 0, 0)"
        d4v.style.background = "rgb(0, 0, 0)"
        d1w.style.background = "rgb(0, 0, 0)"
        d2w.style.background = "rgb(0, 0, 0)"
        d3w.style.background = "rgb(0, 0, 0)"
        d4w.style.background = "rgb(0, 0, 0)"
        d1x.style.background = "rgb(0, 0, 0)"
        d2x.style.background = "rgb(0, 0, 0)"
        d3x.style.background = "rgb(0, 0, 0)"
        d4x.style.background = "rgb(0, 0, 0)"
        d1y.style.background = "rgb(0, 0, 0)"
        d2y.style.background = "rgb(0, 0, 0)"
        d3y.style.background = "rgb(0, 0, 0)"
        d4y.style.background = "rgb(0, 0, 0)"
        d1z.style.background = "rgb(0, 0, 0)"
        d2z.style.background = "rgb(0, 0, 0)"
        d3z.style.background = "rgb(0, 0, 0)"
        d4z.style.background = "rgb(0, 0, 0)"
    }
    if (noteColorV == 12) {
        div.style.background = "rgb(151, 54, 27)"
        div2.style.background = "rgb(151, 54, 27)"
        div3.style.background = "rgb(151, 54, 27)"
        div4.style.background = "rgb(151, 54, 27)"
        d1.style.background = "rgb(151, 54, 27)"
        d2.style.background = "rgb(151, 54, 27)"
        d3.style.background = "rgb(151, 54, 27)"
        d4.style.background = "rgb(151, 54, 27)"
        d1b.style.background = "rgb(151, 54, 27)"
        d2b.style.background = "rgb(151, 54, 27)"
        d3b.style.background = "rgb(151, 54, 27)"
        d4b.style.background = "rgb(151, 54, 27)"
        d1c.style.background = "rgb(151, 54, 27)"
        d2c.style.background = "rgb(151, 54, 27)"
        d3c.style.background = "rgb(151, 54, 27)"
        d4c.style.background = "rgb(151, 54, 27)"
        d1d.style.background = "rgb(151, 54, 27)"
        d2d.style.background = "rgb(151, 54, 27)"
        d3d.style.background = "rgb(151, 54, 27)"
        d4d.style.background = "rgb(151, 54, 27)"
        d1e.style.background = "rgb(151, 54, 27)"
        d2e.style.background = "rgb(151, 54, 27)"
        d3e.style.background = "rgb(151, 54, 27)"
        d4e.style.background = "rgb(151, 54, 27)"
        d1f.style.background = "rgb(151, 54, 27)"
        d2f.style.background = "rgb(151, 54, 27)"
        d3f.style.background = "rgb(151, 54, 27)"
        d4f.style.background = "rgb(151, 54, 27)"
        d1g.style.background = "rgb(151, 54, 27)"
        d2g.style.background = "rgb(151, 54, 27)"
        d3g.style.background = "rgb(151, 54, 27)"
        d4g.style.background = "rgb(151, 54, 27)"
        d1h.style.background = "rgb(151, 54, 27)"
        d2h.style.background = "rgb(151, 54, 27)"
        d3h.style.background = "rgb(151, 54, 27)"
        d4h.style.background = "rgb(151, 54, 27)"
        d1i.style.background = "rgb(151, 54, 27)"
        d2i.style.background = "rgb(151, 54, 27)"
        d3i.style.background = "rgb(151, 54, 27)"
        d4i.style.background = "rgb(151, 54, 27)"
        d1j.style.background = "rgb(151, 54, 27)"
        d2j.style.background = "rgb(151, 54, 27)"
        d3j.style.background = "rgb(151, 54, 27)"
        d4j.style.background = "rgb(151, 54, 27)"
        d1k.style.background = "rgb(151, 54, 27)"
        d2k.style.background = "rgb(151, 54, 27)"
        d3k.style.background = "rgb(151, 54, 27)"
        d4k.style.background = "rgb(151, 54, 27)"
        d1l.style.background = "rgb(151, 54, 27)"
        d2l.style.background = "rgb(151, 54, 27)"
        d3l.style.background = "rgb(151, 54, 27)"
        d4l.style.background = "rgb(151, 54, 27)"
        d1m.style.background = "rgb(151, 54, 27)"
        d2m.style.background = "rgb(151, 54, 27)"
        d3m.style.background = "rgb(151, 54, 27)"
        d4m.style.background = "rgb(151, 54, 27)"
        d1n.style.background = "rgb(151, 54, 27)"
        d2n.style.background = "rgb(151, 54, 27)"
        d3n.style.background = "rgb(151, 54, 27)"
        d4n.style.background = "rgb(151, 54, 27)"
        d1o.style.background = "rgb(151, 54, 27)"
        d2o.style.background = "rgb(151, 54, 27)"
        d3o.style.background = "rgb(151, 54, 27)"
        d4o.style.background = "rgb(151, 54, 27)"
        d1p.style.background = "rgb(151, 54, 27)"
        d2p.style.background = "rgb(151, 54, 27)"
        d3p.style.background = "rgb(151, 54, 27)"
        d4p.style.background = "rgb(151, 54, 27)"
        d1q.style.background = "rgb(151, 54, 27)"
        d2q.style.background = "rgb(151, 54, 27)"
        d3q.style.background = "rgb(151, 54, 27)"
        d4q.style.background = "rgb(151, 54, 27)"
        d1r.style.background = "rgb(151, 54, 27)"
        d2r.style.background = "rgb(151, 54, 27)"
        d3r.style.background = "rgb(151, 54, 27)"
        d4r.style.background = "rgb(151, 54, 27)"
        d1s.style.background = "rgb(151, 54, 27)"
        d2s.style.background = "rgb(151, 54, 27)"
        d3s.style.background = "rgb(151, 54, 27)"
        d4s.style.background = "rgb(151, 54, 27)"
        d1t.style.background = "rgb(151, 54, 27)"
        d2t.style.background = "rgb(151, 54, 27)"
        d3t.style.background = "rgb(151, 54, 27)"
        d4t.style.background = "rgb(151, 54, 27)"
        d1u.style.background = "rgb(151, 54, 27)"
        d2u.style.background = "rgb(151, 54, 27)"
        d3u.style.background = "rgb(151, 54, 27)"
        d4u.style.background = "rgb(151, 54, 27)"
        d1v.style.background = "rgb(151, 54, 27)"
        d2v.style.background = "rgb(151, 54, 27)"
        d3v.style.background = "rgb(151, 54, 27)"
        d4v.style.background = "rgb(151, 54, 27)"
        d1w.style.background = "rgb(151, 54, 27)"
        d2w.style.background = "rgb(151, 54, 27)"
        d3w.style.background = "rgb(151, 54, 27)"
        d4w.style.background = "rgb(151, 54, 27)"
        d1x.style.background = "rgb(151, 54, 27)"
        d2x.style.background = "rgb(151, 54, 27)"
        d3x.style.background = "rgb(151, 54, 27)"
        d4x.style.background = "rgb(151, 54, 27)"
        d1y.style.background = "rgb(151, 54, 27)"
        d2y.style.background = "rgb(151, 54, 27)"
        d3y.style.background = "rgb(151, 54, 27)"
        d4y.style.background = "rgb(151, 54, 27)"
        d1z.style.background = "rgb(151, 54, 27)"
        d2z.style.background = "rgb(151, 54, 27)"
        d3z.style.background = "rgb(151, 54, 27)"
        d4z.style.background = "rgb(151, 54, 27)"
    }
    save();
}
function noteColorM() {
    if (noteColorV > 0)
        noteColorV -= 1
    document.getElementById("span14").innerHTML = "Note Color" + " " + noteColorV
    if (noteColorV < 12) {
        document.getElementById("span14").style.marginRight = "1.77" + "em"
    }
    if (noteColorV == 10 || noteColorV == 11 || noteColorV == 12) {
        document.getElementById("span14").style.marginRight = "1.28" + "em"
    }
    if (noteColorV == 0) {
        div.style.background = "rgb(160, 89, 160)"
        div2.style.background = "rgb(160, 89, 160)"
        div3.style.background = "rgb(160, 89, 160)"
        div4.style.background = "rgb(160, 89, 160)"
        d1.style.background = "rgb(160, 89, 160)"
        d2.style.background = "rgb(160, 89, 160)"
        d3.style.background = "rgb(160, 89, 160)"
        d4.style.background = "rgb(160, 89, 160)"
        d1b.style.background = "rgb(160, 89, 160)"
        d2b.style.background = "rgb(160, 89, 160)"
        d3b.style.background = "rgb(160, 89, 160)"
        d4b.style.background = "rgb(160, 89, 160)"
        d1c.style.background = "rgb(160, 89, 160)"
        d2c.style.background = "rgb(160, 89, 160)"
        d3c.style.background = "rgb(160, 89, 160)"
        d4c.style.background = "rgb(160, 89, 160)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(160, 89, 160)"
        d2e.style.background = "rgb(160, 89, 160)"
        d3e.style.background = "rgb(160, 89, 160)"
        d4e.style.background = "rgb(160, 89, 160)"
        d1f.style.background = "rgb(160, 89, 160)"
        d2f.style.background = "rgb(160, 89, 160)"
        d3f.style.background = "rgb(160, 89, 160)"
        d4f.style.background = "rgb(160, 89, 160)"
        d1g.style.background = "rgb(160, 89, 160)"
        d2g.style.background = "rgb(160, 89, 160)"
        d3g.style.background = "rgb(160, 89, 160)"
        d4g.style.background = "rgb(160, 89, 160)"
        d1h.style.background = "rgb(160, 89, 160)"
        d2h.style.background = "rgb(160, 89, 160)"
        d3h.style.background = "rgb(160, 89, 160)"
        d4h.style.background = "rgb(160, 89, 160)"
        d1i.style.background = "rgb(160, 89, 160)"
        d2i.style.background = "rgb(160, 89, 160)"
        d3i.style.background = "rgb(160, 89, 160)"
        d4i.style.background = "rgb(160, 89, 160)"
        d1j.style.background = "rgb(160, 89, 160)"
        d2j.style.background = "rgb(160, 89, 160)"
        d3j.style.background = "rgb(160, 89, 160)"
        d4j.style.background = "rgb(160, 89, 160)"
        d1k.style.background = "rgb(160, 89, 160)"
        d2k.style.background = "rgb(160, 89, 160)"
        d3k.style.background = "rgb(160, 89, 160)"
        d4k.style.background = "rgb(160, 89, 160)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(160, 89, 160)"
        d2m.style.background = "rgb(160, 89, 160)"
        d3m.style.background = "rgb(160, 89, 160)"
        d4m.style.background = "rgb(160, 89, 160)"
        d1n.style.background = "rgb(160, 89, 160)"
        d2n.style.background = "rgb(160, 89, 160)"
        d3n.style.background = "rgb(160, 89, 160)"
        d4n.style.background = "rgb(160, 89, 160)"
        d1o.style.background = "rgb(160, 89, 160)"
        d2o.style.background = "rgb(160, 89, 160)"
        d3o.style.background = "rgb(160, 89, 160)"
        d4o.style.background = "rgb(160, 89, 160)"
        d1p.style.background = "rgb(160, 89, 160)"
        d2p.style.background = "rgb(160, 89, 160)"
        d3p.style.background = "rgb(160, 89, 160)"
        d4p.style.background = "rgb(160, 89, 160)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(160, 89, 160)"
        d2r.style.background = "rgb(160, 89, 160)"
        d3r.style.background = "rgb(160, 89, 160)"
        d4r.style.background = "rgb(160, 89, 160)"
        d1s.style.background = "rgb(160, 89, 160)"
        d2s.style.background = "rgb(160, 89, 160)"
        d3s.style.background = "rgb(160, 89, 160)"
        d4s.style.background = "rgb(160, 89, 160)"
        d1t.style.background = "rgb(160, 89, 160)"
        d2t.style.background = "rgb(160, 89, 160)"
        d3t.style.background = "rgb(160, 89, 160)"
        d4t.style.background = "rgb(160, 89, 160)"
        d1u.style.background = "rgb(160, 89, 160)"
        d2u.style.background = "rgb(160, 89, 160)"
        d3u.style.background = "rgb(160, 89, 160)"
        d4u.style.background = "rgb(160, 89, 160)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(160, 89, 160)"
        d2w.style.background = "rgb(160, 89, 160)"
        d3w.style.background = "rgb(160, 89, 160)"
        d4w.style.background = "rgb(160, 89, 160)"
        d1x.style.background = "rgb(160, 89, 160)"
        d2x.style.background = "rgb(160, 89, 160)"
        d3x.style.background = "rgb(160, 89, 160)"
        d4x.style.background = "rgb(160, 89, 160)"
        d1y.style.background = "rgb(160, 89, 160)"
        d2y.style.background = "rgb(160, 89, 160)"
        d3y.style.background = "rgb(160, 89, 160)"
        d4y.style.background = "rgb(160, 89, 160)"
        d1z.style.background = "rgb(160, 89, 160)"
        d2z.style.background = "rgb(160, 89, 160)"
        d3z.style.background = "rgb(160, 89, 160)"
        d4z.style.background = "rgb(160, 89, 160)"
    }
    if (noteColorV == 2) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(0, 94, 255)"
        d2.style.background = "rgb(0, 94, 255)"
        d3.style.background = "rgb(0, 94, 255)"
        d4.style.background = "rgb(0, 94, 255)"
        d1b.style.background = "rgb(0, 94, 255)"
        d2b.style.background = "rgb(0, 94, 255)"
        d3b.style.background = "rgb(0, 94, 255)"
        d4b.style.background = "rgb(0, 94, 255)"
        d1c.style.background = "rgb(0, 94, 255)"
        d2c.style.background = "rgb(0, 94, 255)"
        d3c.style.background = "rgb(0, 94, 255)"
        d4c.style.background = "rgb(0, 94, 255)"
        d1d.style.background = "rgb(0, 94, 255)"
        d2d.style.background = "rgb(0, 94, 255)"
        d3d.style.background = "rgb(0, 94, 255)"
        d4d.style.background = "rgb(0, 94, 255)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(0, 94, 255)"
        d2f.style.background = "rgb(0, 94, 255)"
        d3f.style.background = "rgb(0, 94, 255)"
        d4f.style.background = "rgb(0, 94, 255)"
        d1g.style.background = "rgb(0, 94, 255)"
        d2g.style.background = "rgb(0, 94, 255)"
        d3g.style.background = "rgb(0, 94, 255)"
        d4g.style.background = "rgb(0, 94, 255)"
        d1h.style.background = "rgb(0, 94, 255)"
        d2h.style.background = "rgb(0, 94, 255)"
        d3h.style.background = "rgb(0, 94, 255)"
        d4h.style.background = "rgb(0, 94, 255)"
        d1i.style.background = "rgb(0, 94, 255)"
        d2i.style.background = "rgb(0, 94, 255)"
        d3i.style.background = "rgb(0, 94, 255)"
        d4i.style.background = "rgb(0, 94, 255)"
        d1j.style.background = "rgb(0, 94, 255)"
        d2j.style.background = "rgb(0, 94, 255)"
        d3j.style.background = "rgb(0, 94, 255)"
        d4j.style.background = "rgb(0, 94, 255)"
        d1k.style.background = "rgb(0, 94, 255)"
        d2k.style.background = "rgb(0, 94, 255)"
        d3k.style.background = "rgb(0, 94, 255)"
        d4k.style.background = "rgb(0, 94, 255)"
        d1l.style.background = "rgb(0, 94, 255)"
        d2l.style.background = "rgb(0, 94, 255)"
        d3l.style.background = "rgb(0, 94, 255)"
        d4l.style.background = "rgb(0, 94, 255)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(0, 94, 255)"
        d2n.style.background = "rgb(0, 94, 255)"
        d3n.style.background = "rgb(0, 94, 255)"
        d4n.style.background = "rgb(0, 94, 255)"
        d1o.style.background = "rgb(0, 94, 255)"
        d2o.style.background = "rgb(0, 94, 255)"
        d3o.style.background = "rgb(0, 94, 255)"
        d4o.style.background = "rgb(0, 94, 255)"
        d1p.style.background = "rgb(0, 94, 255)"
        d2p.style.background = "rgb(0, 94, 255)"
        d3p.style.background = "rgb(0, 94, 255)"
        d4p.style.background = "rgb(0, 94, 255)"
        d1q.style.background = "rgb(0, 94, 255)"
        d2q.style.background = "rgb(0, 94, 255)"
        d3q.style.background = "rgb(0, 94, 255)"
        d4q.style.background = "rgb(0, 94, 255)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(0, 94, 255)"
        d2s.style.background = "rgb(0, 94, 255)"
        d3s.style.background = "rgb(0, 94, 255)"
        d4s.style.background = "rgb(0, 94, 255)"
        d1t.style.background = "rgb(0, 94, 255)"
        d2t.style.background = "rgb(0, 94, 255)"
        d3t.style.background = "rgb(0, 94, 255)"
        d4t.style.background = "rgb(0, 94, 255)"
        d1u.style.background = "rgb(0, 94, 255)"
        d2u.style.background = "rgb(0, 94, 255)"
        d3u.style.background = "rgb(0, 94, 255)"
        d4u.style.background = "rgb(0, 94, 255)"
        d1v.style.background = "rgb(0, 94, 255)"
        d2v.style.background = "rgb(0, 94, 255)"
        d3v.style.background = "rgb(0, 94, 255)"
        d4v.style.background = "rgb(0, 94, 255)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(0, 94, 255)"
        d2x.style.background = "rgb(0, 94, 255)"
        d3x.style.background = "rgb(0, 94, 255)"
        d4x.style.background = "rgb(0, 94, 255)"
        d1y.style.background = "rgb(0, 94, 255)"
        d2y.style.background = "rgb(0, 94, 255)"
        d3y.style.background = "rgb(0, 94, 255)"
        d4y.style.background = "rgb(0, 94, 255)"
        d1z.style.background = "rgb(0, 94, 255)"
        d2z.style.background = "rgb(0, 94, 255)"
        d3z.style.background = "rgb(0, 94, 255)"
        d4z.style.background = "rgb(0, 94, 255)"
    }
    if (noteColorV == 1) {
        div.style.background = "rgb(141, 141, 141)"
        div2.style.background = "rgb(141, 141, 141)"
        div3.style.background = "rgb(141, 141, 141)"
        div4.style.background = "rgb(141, 141, 141)"
        d1.style.background = "rgb(141, 141, 141)"
        d2.style.background = "rgb(141, 141, 141)"
        d3.style.background = "rgb(141, 141, 141)"
        d4.style.background = "rgb(141, 141, 141)"
        d1b.style.background = "rgb(141, 141, 141)"
        d2b.style.background = "rgb(141, 141, 141)"
        d3b.style.background = "rgb(141, 141, 141)"
        d4b.style.background = "rgb(141, 141, 141)"
        d1c.style.background = "rgb(141, 141, 141)"
        d2c.style.background = "rgb(141, 141, 141)"
        d3c.style.background = "rgb(141, 141, 141)"
        d4c.style.background = "rgb(141, 141, 141)"
        d1d.style.background = "rgb(141, 141, 141)"
        d2d.style.background = "rgb(141, 141, 141)"
        d3d.style.background = "rgb(141, 141, 141)"
        d4d.style.background = "rgb(141, 141, 141)"
        d1e.style.background = "rgb(141, 141, 141)"
        d2e.style.background = "rgb(141, 141, 141)"
        d3e.style.background = "rgb(141, 141, 141)"
        d4e.style.background = "rgb(141, 141, 141)"
        d1f.style.background = "rgb(141, 141, 141)"
        d2f.style.background = "rgb(141, 141, 141)"
        d3f.style.background = "rgb(141, 141, 141)"
        d4f.style.background = "rgb(141, 141, 141)"
        d1g.style.background = "rgb(141, 141, 141)"
        d2g.style.background = "rgb(141, 141, 141)"
        d3g.style.background = "rgb(141, 141, 141)"
        d4g.style.background = "rgb(141, 141, 141)"
        d1h.style.background = "rgb(141, 141, 141)"
        d2h.style.background = "rgb(141, 141, 141)"
        d3h.style.background = "rgb(141, 141, 141)"
        d4h.style.background = "rgb(141, 141, 141)"
        d1i.style.background = "rgb(141, 141, 141)"
        d2i.style.background = "rgb(141, 141, 141)"
        d3i.style.background = "rgb(141, 141, 141)"
        d4i.style.background = "rgb(141, 141, 141)"
        d1j.style.background = "rgb(141, 141, 141)"
        d2j.style.background = "rgb(141, 141, 141)"
        d3j.style.background = "rgb(141, 141, 141)"
        d4j.style.background = "rgb(141, 141, 141)"
        d1k.style.background = "rgb(141, 141, 141)"
        d2k.style.background = "rgb(141, 141, 141)"
        d3k.style.background = "rgb(141, 141, 141)"
        d4k.style.background = "rgb(141, 141, 141)"
        d1l.style.background = "rgb(141, 141, 141)"
        d2l.style.background = "rgb(141, 141, 141)"
        d3l.style.background = "rgb(141, 141, 141)"
        d4l.style.background = "rgb(141, 141, 141)"
        d1m.style.background = "rgb(141, 141, 141)"
        d2m.style.background = "rgb(141, 141, 141)"
        d3m.style.background = "rgb(141, 141, 141)"
        d4m.style.background = "rgb(141, 141, 141)"
        d1n.style.background = "rgb(141, 141, 141)"
        d2n.style.background = "rgb(141, 141, 141)"
        d3n.style.background = "rgb(141, 141, 141)"
        d4n.style.background = "rgb(141, 141, 141)"
        d1o.style.background = "rgb(141, 141, 141)"
        d2o.style.background = "rgb(141, 141, 141)"
        d3o.style.background = "rgb(141, 141, 141)"
        d4o.style.background = "rgb(141, 141, 141)"
        d1p.style.background = "rgb(141, 141, 141)"
        d2p.style.background = "rgb(141, 141, 141)"
        d3p.style.background = "rgb(141, 141, 141)"
        d4p.style.background = "rgb(141, 141, 141)"
        d1q.style.background = "rgb(141, 141, 141)"
        d2q.style.background = "rgb(141, 141, 141)"
        d3q.style.background = "rgb(141, 141, 141)"
        d4q.style.background = "rgb(141, 141, 141)"
        d1r.style.background = "rgb(141, 141, 141)"
        d2r.style.background = "rgb(141, 141, 141)"
        d3r.style.background = "rgb(141, 141, 141)"
        d4r.style.background = "rgb(141, 141, 141)"
        d1s.style.background = "rgb(141, 141, 141)"
        d2s.style.background = "rgb(141, 141, 141)"
        d3s.style.background = "rgb(141, 141, 141)"
        d4s.style.background = "rgb(141, 141, 141)"
        d1t.style.background = "rgb(141, 141, 141)"
        d2t.style.background = "rgb(141, 141, 141)"
        d3t.style.background = "rgb(141, 141, 141)"
        d4t.style.background = "rgb(141, 141, 141)"
        d1u.style.background = "rgb(141, 141, 141)"
        d2u.style.background = "rgb(141, 141, 141)"
        d3u.style.background = "rgb(141, 141, 141)"
        d4u.style.background = "rgb(141, 141, 141)"
        d1v.style.background = "rgb(141, 141, 141)"
        d2v.style.background = "rgb(141, 141, 141)"
        d3v.style.background = "rgb(141, 141, 141)"
        d4v.style.background = "rgb(141, 141, 141)"
        d1w.style.background = "rgb(141, 141, 141)"
        d2w.style.background = "rgb(141, 141, 141)"
        d3w.style.background = "rgb(141, 141, 141)"
        d4w.style.background = "rgb(141, 141, 141)"
        d1x.style.background = "rgb(141, 141, 141)"
        d2x.style.background = "rgb(141, 141, 141)"
        d3x.style.background = "rgb(141, 141, 141)"
        d4x.style.background = "rgb(141, 141, 141)"
        d1y.style.background = "rgb(141, 141, 141)"
        d2y.style.background = "rgb(141, 141, 141)"
        d3y.style.background = "rgb(141, 141, 141)"
        d4y.style.background = "rgb(141, 141, 141)"
        d1z.style.background = "rgb(141, 141, 141)"
        d2z.style.background = "rgb(141, 141, 141)"
        d3z.style.background = "rgb(141, 141, 141)"
        d4z.style.background = "rgb(141, 141, 141)"
    }
    if (noteColorV == 3) {
        div.style.background = "rgb(247, 161, 0)"
        div2.style.background = "rgb(247, 161, 0)"
        div3.style.background = "rgb(247, 161, 0)"
        div4.style.background = "rgb(247, 161, 0)"
        d1.style.background = "rgb(247, 161, 0)"
        d2.style.background = "rgb(247, 161, 0)"
        d3.style.background = "rgb(247, 161, 0)"
        d4.style.background = "rgb(247, 161, 0)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(247, 161, 0)"
        d2c.style.background = "rgb(247, 161, 0)"
        d3c.style.background = "rgb(247, 161, 0)"
        d4c.style.background = "rgb(247, 161, 0)"
        d1d.style.background = "rgb(247, 161, 0)"
        d2d.style.background = "rgb(247, 161, 0)"
        d3d.style.background = "rgb(247, 161, 0)"
        d4d.style.background = "rgb(247, 161, 0)"
        d1e.style.background = "rgb(247, 161, 0)"
        d2e.style.background = "rgb(247, 161, 0)"
        d3e.style.background = "rgb(247, 161, 0)"
        d4e.style.background = "rgb(247, 161, 0)"
        d1f.style.background = "rgb(247, 161, 0)"
        d2f.style.background = "rgb(247, 161, 0)"
        d3f.style.background = "rgb(247, 161, 0)"
        d4f.style.background = "rgb(247, 161, 0)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(247, 161, 0)"
        d2h.style.background = "rgb(247, 161, 0)"
        d3h.style.background = "rgb(247, 161, 0)"
        d4h.style.background = "rgb(247, 161, 0)"
        d1i.style.background = "rgb(247, 161, 0)"
        d2i.style.background = "rgb(247, 161, 0)"
        d3i.style.background = "rgb(247, 161, 0)"
        d4i.style.background = "rgb(247, 161, 0)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(247, 161, 0)"
        d2k.style.background = "rgb(247, 161, 0)"
        d3k.style.background = "rgb(247, 161, 0)"
        d4k.style.background = "rgb(247, 161, 0)"
        d1l.style.background = "rgb(247, 161, 0)"
        d2l.style.background = "rgb(247, 161, 0)"
        d3l.style.background = "rgb(247, 161, 0)"
        d4l.style.background = "rgb(247, 161, 0)"
        d1m.style.background = "rgb(247, 161, 0)"
        d2m.style.background = "rgb(247, 161, 0)"
        d3m.style.background = "rgb(247, 161, 0)"
        d4m.style.background = "rgb(247, 161, 0)"
        d1n.style.background = "rgb(247, 161, 0)"
        d2n.style.background = "rgb(247, 161, 0)"
        d3n.style.background = "rgb(247, 161, 0)"
        d4n.style.background = "rgb(247, 161, 0)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(247, 161, 0)"
        d2p.style.background = "rgb(247, 161, 0)"
        d3p.style.background = "rgb(247, 161, 0)"
        d4p.style.background = "rgb(247, 161, 0)"
        d1q.style.background = "rgb(247, 161, 0)"
        d2q.style.background = "rgb(247, 161, 0)"
        d3q.style.background = "rgb(247, 161, 0)"
        d4q.style.background = "rgb(247, 161, 0)"
        d1r.style.background = "rgb(247, 161, 0)"
        d2r.style.background = "rgb(247, 161, 0)"
        d3r.style.background = "rgb(247, 161, 0)"
        d4r.style.background = "rgb(247, 161, 0)"
        d1s.style.background = "rgb(247, 161, 0)"
        d2s.style.background = "rgb(247, 161, 0)"
        d3s.style.background = "rgb(247, 161, 0)"
        d4s.style.background = "rgb(247, 161, 0)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(247, 161, 0)"
        d2u.style.background = "rgb(247, 161, 0)"
        d3u.style.background = "rgb(247, 161, 0)"
        d4u.style.background = "rgb(247, 161, 0)"
        d1v.style.background = "rgb(247, 161, 0)"
        d2v.style.background = "rgb(247, 161, 0)"
        d3v.style.background = "rgb(247, 161, 0)"
        d4v.style.background = "rgb(247, 161, 0)"
        d1w.style.background = "rgb(247, 161, 0)"
        d2w.style.background = "rgb(247, 161, 0)"
        d3w.style.background = "rgb(247, 161, 0)"
        d4w.style.background = "rgb(247, 161, 0)"
        d1x.style.background = "rgb(247, 161, 0)"
        d2x.style.background = "rgb(247, 161, 0)"
        d3x.style.background = "rgb(247, 161, 0)"
        d4x.style.background = "rgb(247, 161, 0)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(247, 161, 0)"
        d2z.style.background = "rgb(247, 161, 0)"
        d3z.style.background = "rgb(247, 161, 0)"
        d4z.style.background = "rgb(247, 161, 0)"
    }
    if (noteColorV == 4) {
        div.style.background = "rgb(133, 92, 255)"
        div2.style.background = "rgb(133, 92, 255)"
        div3.style.background = "rgb(133, 92, 255)"
        div4.style.background = "rgb(133, 92, 255)"
        d1.style.background = "rgb(133, 92, 255)"
        d2.style.background = "rgb(133, 92, 255)"
        d3.style.background = "rgb(133, 92, 255)"
        d4.style.background = "rgb(133, 92, 255)"
        d1b.style.background = "rgb(133, 92, 255)"
        d2b.style.background = "rgb(133, 92, 255)"
        d3b.style.background = "rgb(133, 92, 255)"
        d4b.style.background = "rgb(133, 92, 255)"
        d1c.style.background = "rgb(133, 92, 255)"
        d2c.style.background = "rgb(133, 92, 255)"
        d3c.style.background = "rgb(133, 92, 255)"
        d4c.style.background = "rgb(133, 92, 255)"
        d1d.style.background = "rgb(133, 92, 255)"
        d2d.style.background = "rgb(133, 92, 255)"
        d3d.style.background = "rgb(133, 92, 255)"
        d4d.style.background = "rgb(133, 92, 255)"
        d1e.style.background = "rgb(133, 92, 255)"
        d2e.style.background = "rgb(133, 92, 255)"
        d3e.style.background = "rgb(133, 92, 255)"
        d4e.style.background = "rgb(133, 92, 255)"
        d1f.style.background = "rgb(133, 92, 255)"
        d2f.style.background = "rgb(133, 92, 255)"
        d3f.style.background = "rgb(133, 92, 255)"
        d4f.style.background = "rgb(133, 92, 255)"
        d1g.style.background = "rgb(133, 92, 255)"
        d2g.style.background = "rgb(133, 92, 255)"
        d3g.style.background = "rgb(133, 92, 255)"
        d4g.style.background = "rgb(133, 92, 255)"
        d1h.style.background = "rgb(133, 92, 255)"
        d2h.style.background = "rgb(133, 92, 255)"
        d3h.style.background = "rgb(133, 92, 255)"
        d4h.style.background = "rgb(133, 92, 255)"
        d1i.style.background = "rgb(133, 92, 255)"
        d2i.style.background = "rgb(133, 92, 255)"
        d3i.style.background = "rgb(133, 92, 255)"
        d4i.style.background = "rgb(133, 92, 255)"
        d1j.style.background = "rgb(133, 92, 255)"
        d2j.style.background = "rgb(133, 92, 255)"
        d3j.style.background = "rgb(133, 92, 255)"
        d4j.style.background = "rgb(133, 92, 255)"
        d1k.style.background = "rgb(133, 92, 255)"
        d2k.style.background = "rgb(133, 92, 255)"
        d3k.style.background = "rgb(133, 92, 255)"
        d4k.style.background = "rgb(133, 92, 255)"
        d1l.style.background = "rgb(133, 92, 255)"
        d2l.style.background = "rgb(133, 92, 255)"
        d3l.style.background = "rgb(133, 92, 255)"
        d4l.style.background = "rgb(133, 92, 255)"
        d1m.style.background = "rgb(133, 92, 255)"
        d2m.style.background = "rgb(133, 92, 255)"
        d3m.style.background = "rgb(133, 92, 255)"
        d4m.style.background = "rgb(133, 92, 255)"
        d1n.style.background = "rgb(133, 92, 255)"
        d2n.style.background = "rgb(133, 92, 255)"
        d3n.style.background = "rgb(133, 92, 255)"
        d4n.style.background = "rgb(133, 92, 255)"
        d1o.style.background = "rgb(133, 92, 255)"
        d2o.style.background = "rgb(133, 92, 255)"
        d3o.style.background = "rgb(133, 92, 255)"
        d4o.style.background = "rgb(133, 92, 255)"
        d1p.style.background = "rgb(133, 92, 255)"
        d2p.style.background = "rgb(133, 92, 255)"
        d3p.style.background = "rgb(133, 92, 255)"
        d4p.style.background = "rgb(133, 92, 255)"
        d1q.style.background = "rgb(133, 92, 255)"
        d2q.style.background = "rgb(133, 92, 255)"
        d3q.style.background = "rgb(133, 92, 255)"
        d4q.style.background = "rgb(133, 92, 255)"
        d1r.style.background = "rgb(133, 92, 255)"
        d2r.style.background = "rgb(133, 92, 255)"
        d3r.style.background = "rgb(133, 92, 255)"
        d4r.style.background = "rgb(133, 92, 255)"
        d1s.style.background = "rgb(133, 92, 255)"
        d2s.style.background = "rgb(133, 92, 255)"
        d3s.style.background = "rgb(133, 92, 255)"
        d4s.style.background = "rgb(133, 92, 255)"
        d1t.style.background = "rgb(133, 92, 255)"
        d2t.style.background = "rgb(133, 92, 255)"
        d3t.style.background = "rgb(133, 92, 255)"
        d4t.style.background = "rgb(133, 92, 255)"
        d1u.style.background = "rgb(133, 92, 255)"
        d2u.style.background = "rgb(133, 92, 255)"
        d3u.style.background = "rgb(133, 92, 255)"
        d4u.style.background = "rgb(133, 92, 255)"
        d1v.style.background = "rgb(133, 92, 255)"
        d2v.style.background = "rgb(133, 92, 255)"
        d3v.style.background = "rgb(133, 92, 255)"
        d4v.style.background = "rgb(133, 92, 255)"
        d1w.style.background = "rgb(133, 92, 255)"
        d2w.style.background = "rgb(133, 92, 255)"
        d3w.style.background = "rgb(133, 92, 255)"
        d4w.style.background = "rgb(133, 92, 255)"
        d1x.style.background = "rgb(133, 92, 255)"
        d2x.style.background = "rgb(133, 92, 255)"
        d3x.style.background = "rgb(133, 92, 255)"
        d4x.style.background = "rgb(133, 92, 255)"
        d1y.style.background = "rgb(133, 92, 255)"
        d2y.style.background = "rgb(133, 92, 255)"
        d3y.style.background = "rgb(133, 92, 255)"
        d4y.style.background = "rgb(133, 92, 255)"
        d1z.style.background = "rgb(133, 92, 255)"
        d2z.style.background = "rgb(133, 92, 255)"
        d3z.style.background = "rgb(133, 92, 255)"
        d4z.style.background = "rgb(133, 92, 255)"
    }
    if (noteColorV == 5) {
        div.style.background = "RGB(0,133,0)"
        div2.style.background = "RGB(0,133,0)"
        div3.style.background = "RGB(0,133,0)"
        div4.style.background = "RGB(0,133,0)"
        d1.style.background = "RGB(0,133,0)"
        d2.style.background = "RGB(0,133,0)"
        d3.style.background = "RGB(0,133,0)"
        d4.style.background = "RGB(0,133,0)"
        d1b.style.background = "RGB(0,133,0)"
        d2b.style.background = "RGB(0,133,0)"
        d3b.style.background = "RGB(0,133,0)"
        d4b.style.background = "RGB(0,133,0)"
        d1c.style.background = "RGB(0,133,0)"
        d2c.style.background = "RGB(0,133,0)"
        d3c.style.background = "RGB(0,133,0)"
        d4c.style.background = "RGB(0,133,0)"
        d1d.style.background = "RGB(0,133,0)"
        d2d.style.background = "RGB(0,133,0)"
        d3d.style.background = "RGB(0,133,0)"
        d4d.style.background = "RGB(0,133,0)"
        d1e.style.background = "RGB(0,133,0)"
        d2e.style.background = "RGB(0,133,0)"
        d3e.style.background = "RGB(0,133,0)"
        d4e.style.background = "RGB(0,133,0)"
        d1f.style.background = "RGB(0,133,0)"
        d2f.style.background = "RGB(0,133,0)"
        d3f.style.background = "RGB(0,133,0)"
        d4f.style.background = "RGB(0,133,0)"
        d1g.style.background = "RGB(0,133,0)"
        d2g.style.background = "RGB(0,133,0)"
        d3g.style.background = "RGB(0,133,0)"
        d4g.style.background = "RGB(0,133,0)"
        d1h.style.background = "RGB(0,133,0)"
        d2h.style.background = "RGB(0,133,0)"
        d3h.style.background = "RGB(0,133,0)"
        d4h.style.background = "RGB(0,133,0)"
        d1i.style.background = "RGB(0,133,0)"
        d2i.style.background = "RGB(0,133,0)"
        d3i.style.background = "RGB(0,133,0)"
        d4i.style.background = "RGB(0,133,0)"
        d1j.style.background = "RGB(0,133,0)"
        d2j.style.background = "RGB(0,133,0)"
        d3j.style.background = "RGB(0,133,0)"
        d4j.style.background = "RGB(0,133,0)"
        d1k.style.background = "RGB(0,133,0)"
        d2k.style.background = "RGB(0,133,0)"
        d3k.style.background = "RGB(0,133,0)"
        d4k.style.background = "RGB(0,133,0)"
        d1l.style.background = "RGB(0,133,0)"
        d2l.style.background = "RGB(0,133,0)"
        d3l.style.background = "RGB(0,133,0)"
        d4l.style.background = "RGB(0,133,0)"
        d1m.style.background = "RGB(0,133,0)"
        d2m.style.background = "RGB(0,133,0)"
        d3m.style.background = "RGB(0,133,0)"
        d4m.style.background = "RGB(0,133,0)"
        d1n.style.background = "RGB(0,133,0)"
        d2n.style.background = "RGB(0,133,0)"
        d3n.style.background = "RGB(0,133,0)"
        d4n.style.background = "RGB(0,133,0)"
        d1o.style.background = "RGB(0,133,0)"
        d2o.style.background = "RGB(0,133,0)"
        d3o.style.background = "RGB(0,133,0)"
        d4o.style.background = "RGB(0,133,0)"
        d1p.style.background = "RGB(0,133,0)"
        d2p.style.background = "RGB(0,133,0)"
        d3p.style.background = "RGB(0,133,0)"
        d4p.style.background = "RGB(0,133,0)"
        d1q.style.background = "RGB(0,133,0)"
        d2q.style.background = "RGB(0,133,0)"
        d3q.style.background = "RGB(0,133,0)"
        d4q.style.background = "RGB(0,133,0)"
        d1r.style.background = "RGB(0,133,0)"
        d2r.style.background = "RGB(0,133,0)"
        d3r.style.background = "RGB(0,133,0)"
        d4r.style.background = "RGB(0,133,0)"
        d1s.style.background = "RGB(0,133,0)"
        d2s.style.background = "RGB(0,133,0)"
        d3s.style.background = "RGB(0,133,0)"
        d4s.style.background = "RGB(0,133,0)"
        d1t.style.background = "RGB(0,133,0)"
        d2t.style.background = "RGB(0,133,0)"
        d3t.style.background = "RGB(0,133,0)"
        d4t.style.background = "RGB(0,133,0)"
        d1u.style.background = "RGB(0,133,0)"
        d2u.style.background = "RGB(0,133,0)"
        d3u.style.background = "RGB(0,133,0)"
        d4u.style.background = "RGB(0,133,0)"
        d1v.style.background = "RGB(0,133,0)"
        d2v.style.background = "RGB(0,133,0)"
        d3v.style.background = "RGB(0,133,0)"
        d4v.style.background = "RGB(0,133,0)"
        d1w.style.background = "RGB(0,133,0)"
        d2w.style.background = "RGB(0,133,0)"
        d3w.style.background = "RGB(0,133,0)"
        d4w.style.background = "RGB(0,133,0)"
        d1x.style.background = "RGB(0,133,0)"
        d2x.style.background = "RGB(0,133,0)"
        d3x.style.background = "RGB(0,133,0)"
        d4x.style.background = "RGB(0,133,0)"
        d1y.style.background = "RGB(0,133,0)"
        d2y.style.background = "RGB(0,133,0)"
        d3y.style.background = "RGB(0,133,0)"
        d4y.style.background = "RGB(0,133,0)"
        d1z.style.background = "RGB(0,133,0)"
        d2z.style.background = "RGB(0,133,0)"
        d3z.style.background = "RGB(0,133,0)"
        d4z.style.background = "RGB(0,133,0)"
    }
    if (noteColorV == 6) {
        div.style.background = "rgb(0, 170, 255)"
        div2.style.background = "rgb(0, 170, 255)"
        div3.style.background = "rgb(0, 170, 255)"
        div4.style.background = "rgb(0, 170, 255)"
        d1.style.background = "rgb(0, 170, 255)"
        d2.style.background = "rgb(0, 170, 255)"
        d3.style.background = "rgb(0, 170, 255)"
        d4.style.background = "rgb(0, 170, 255)"
        d1b.style.background = "rgb(0, 170, 255)"
        d2b.style.background = "rgb(0, 170, 255)"
        d3b.style.background = "rgb(0, 170, 255)"
        d4b.style.background = "rgb(0, 170, 255)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(0, 170, 255)"
        d2d.style.background = "rgb(0, 170, 255)"
        d3d.style.background = "rgb(0, 170, 255)"
        d4d.style.background = "rgb(0, 170, 255)"
        d1e.style.background = "rgb(0, 170, 255)"
        d2e.style.background = "rgb(0, 170, 255)"
        d3e.style.background = "rgb(0, 170, 255)"
        d4e.style.background = "rgb(0, 170, 255)"
        d1f.style.background = "rgb(0, 170, 255)"
        d2f.style.background = "rgb(0, 170, 255)"
        d3f.style.background = "rgb(0, 170, 255)"
        d4f.style.background = "rgb(0, 170, 255)"
        d1g.style.background = "rgb(0, 170, 255)"
        d2g.style.background = "rgb(0, 170, 255)"
        d3g.style.background = "rgb(0, 170, 255)"
        d4g.style.background = "rgb(0, 170, 255)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(0, 170, 255)"
        d2i.style.background = "rgb(0, 170, 255)"
        d3i.style.background = "rgb(0, 170, 255)"
        d4i.style.background = "rgb(0, 170, 255)"
        d1j.style.background = "rgb(0, 170, 255)"
        d2j.style.background = "rgb(0, 170, 255)"
        d3j.style.background = "rgb(0, 170, 255)"
        d4j.style.background = "rgb(0, 170, 255)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(0, 170, 255)"
        d2l.style.background = "rgb(0, 170, 255)"
        d3l.style.background = "rgb(0, 170, 255)"
        d4l.style.background = "rgb(0, 170, 255)"
        d1m.style.background = "rgb(0, 170, 255)"
        d2m.style.background = "rgb(0, 170, 255)"
        d3m.style.background = "rgb(0, 170, 255)"
        d4m.style.background = "rgb(0, 170, 255)"
        d1n.style.background = "rgb(0, 170, 255)"
        d2n.style.background = "rgb(0, 170, 255)"
        d3n.style.background = "rgb(0, 170, 255)"
        d4n.style.background = "rgb(0, 170, 255)"
        d1o.style.background = "rgb(0, 170, 255)"
        d2o.style.background = "rgb(0, 170, 255)"
        d3o.style.background = "rgb(0, 170, 255)"
        d4o.style.background = "rgb(0, 170, 255)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(0, 170, 255)"
        d2q.style.background = "rgb(0, 170, 255)"
        d3q.style.background = "rgb(0, 170, 255)"
        d4q.style.background = "rgb(0, 170, 255)"
        d1r.style.background = "rgb(0, 170, 255)"
        d2r.style.background = "rgb(0, 170, 255)"
        d3r.style.background = "rgb(0, 170, 255)"
        d4r.style.background = "rgb(0, 170, 255)"
        d1s.style.background = "rgb(0, 170, 255)"
        d2s.style.background = "rgb(0, 170, 255)"
        d3s.style.background = "rgb(0, 170, 255)"
        d4s.style.background = "rgb(0, 170, 255)"
        d1t.style.background = "rgb(0, 170, 255)"
        d2t.style.background = "rgb(0, 170, 255)"
        d3t.style.background = "rgb(0, 170, 255)"
        d4t.style.background = "rgb(0, 170, 255)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(0, 170, 255)"
        d2v.style.background = "rgb(0, 170, 255)"
        d3v.style.background = "rgb(0, 170, 255)"
        d4v.style.background = "rgb(0, 170, 255)"
        d1w.style.background = "rgb(0, 170, 255)"
        d2w.style.background = "rgb(0, 170, 255)"
        d3w.style.background = "rgb(0, 170, 255)"
        d4w.style.background = "rgb(0, 170, 255)"
        d1x.style.background = "rgb(0, 170, 255)"
        d2x.style.background = "rgb(0, 170, 255)"
        d3x.style.background = "rgb(0, 170, 255)"
        d4x.style.background = "rgb(0, 170, 255)"
        d1y.style.background = "rgb(0, 170, 255)"
        d2y.style.background = "rgb(0, 170, 255)"
        d3y.style.background = "rgb(0, 170, 255)"
        d4y.style.background = "rgb(0, 170, 255)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 7) {
        div.style.background = "rgb(255, 255, 255)"
        div2.style.background = "rgb(255, 255, 255)"
        div3.style.background = "rgb(255, 255, 255)"
        div4.style.background = "rgb(255, 255, 255)"
        d1.style.background = "rgb(255, 255, 255)"
        d2.style.background = "rgb(255, 255, 255)"
        d3.style.background = "rgb(255, 255, 255)"
        d4.style.background = "rgb(255, 255, 255)"
        d1b.style.background = "rgb(255, 255, 255)"
        d2b.style.background = "rgb(255, 255, 255)"
        d3b.style.background = "rgb(255, 255, 255)"
        d4b.style.background = "rgb(255, 255, 255)"
        d1c.style.background = "rgb(255, 255, 255)"
        d2c.style.background = "rgb(255, 255, 255)"
        d3c.style.background = "rgb(255, 255, 255)"
        d4c.style.background = "rgb(255, 255, 255)"
        d1d.style.background = "rgb(255, 255, 255)"
        d2d.style.background = "rgb(255, 255, 255)"
        d3d.style.background = "rgb(255, 255, 255)"
        d4d.style.background = "rgb(255, 255, 255)"
        d1e.style.background = "rgb(255, 255, 255)"
        d2e.style.background = "rgb(255, 255, 255)"
        d3e.style.background = "rgb(255, 255, 255)"
        d4e.style.background = "rgb(255, 255, 255)"
        d1f.style.background = "rgb(255, 255, 255)"
        d2f.style.background = "rgb(255, 255, 255)"
        d3f.style.background = "rgb(255, 255, 255)"
        d4f.style.background = "rgb(255, 255, 255)"
        d1g.style.background = "rgb(255, 255, 255)"
        d2g.style.background = "rgb(255, 255, 255)"
        d3g.style.background = "rgb(255, 255, 255)"
        d4g.style.background = "rgb(255, 255, 255)"
        d1h.style.background = "rgb(255, 255, 255)"
        d2h.style.background = "rgb(255, 255, 255)"
        d3h.style.background = "rgb(255, 255, 255)"
        d4h.style.background = "rgb(255, 255, 255)"
        d1i.style.background = "rgb(255, 255, 255)"
        d2i.style.background = "rgb(255, 255, 255)"
        d3i.style.background = "rgb(255, 255, 255)"
        d4i.style.background = "rgb(255, 255, 255)"
        d1j.style.background = "rgb(255, 255, 255)"
        d2j.style.background = "rgb(255, 255, 255)"
        d3j.style.background = "rgb(255, 255, 255)"
        d4j.style.background = "rgb(255, 255, 255)"
        d1k.style.background = "rgb(255, 255, 255)"
        d2k.style.background = "rgb(255, 255, 255)"
        d3k.style.background = "rgb(255, 255, 255)"
        d4k.style.background = "rgb(255, 255, 255)"
        d1l.style.background = "rgb(255, 255, 255)"
        d2l.style.background = "rgb(255, 255, 255)"
        d3l.style.background = "rgb(255, 255, 255)"
        d4l.style.background = "rgb(255, 255, 255)"
        d1m.style.background = "rgb(255, 255, 255)"
        d2m.style.background = "rgb(255, 255, 255)"
        d3m.style.background = "rgb(255, 255, 255)"
        d4m.style.background = "rgb(255, 255, 255)"
        d1n.style.background = "rgb(255, 255, 255)"
        d2n.style.background = "rgb(255, 255, 255)"
        d3n.style.background = "rgb(255, 255, 255)"
        d4n.style.background = "rgb(255, 255, 255)"
        d1o.style.background = "rgb(255, 255, 255)"
        d2o.style.background = "rgb(255, 255, 255)"
        d3o.style.background = "rgb(255, 255, 255)"
        d4o.style.background = "rgb(255, 255, 255)"
        d1p.style.background = "rgb(255, 255, 255)"
        d2p.style.background = "rgb(255, 255, 255)"
        d3p.style.background = "rgb(255, 255, 255)"
        d4p.style.background = "rgb(255, 255, 255)"
        d1q.style.background = "rgb(255, 255, 255)"
        d2q.style.background = "rgb(255, 255, 255)"
        d3q.style.background = "rgb(255, 255, 255)"
        d4q.style.background = "rgb(255, 255, 255)"
        d1r.style.background = "rgb(255, 255, 255)"
        d2r.style.background = "rgb(255, 255, 255)"
        d3r.style.background = "rgb(255, 255, 255)"
        d4r.style.background = "rgb(255, 255, 255)"
        d1s.style.background = "rgb(255, 255, 255)"
        d2s.style.background = "rgb(255, 255, 255)"
        d3s.style.background = "rgb(255, 255, 255)"
        d4s.style.background = "rgb(255, 255, 255)"
        d1t.style.background = "rgb(255, 255, 255)"
        d2t.style.background = "rgb(255, 255, 255)"
        d3t.style.background = "rgb(255, 255, 255)"
        d4t.style.background = "rgb(255, 255, 255)"
        d1u.style.background = "rgb(255, 255, 255)"
        d2u.style.background = "rgb(255, 255, 255)"
        d3u.style.background = "rgb(255, 255, 255)"
        d4u.style.background = "rgb(255, 255, 255)"
        d1v.style.background = "rgb(255, 255, 255)"
        d2v.style.background = "rgb(255, 255, 255)"
        d3v.style.background = "rgb(255, 255, 255)"
        d4v.style.background = "rgb(255, 255, 255)"
        d1w.style.background = "rgb(255, 255, 255)"
        d2w.style.background = "rgb(255, 255, 255)"
        d3w.style.background = "rgb(255, 255, 255)"
        d4w.style.background = "rgb(255, 255, 255)"
        d1x.style.background = "rgb(255, 255, 255)"
        d2x.style.background = "rgb(255, 255, 255)"
        d3x.style.background = "rgb(255, 255, 255)"
        d4x.style.background = "rgb(255, 255, 255)"
        d1y.style.background = "rgb(255, 255, 255)"
        d2y.style.background = "rgb(255, 255, 255)"
        d3y.style.background = "rgb(255, 255, 255)"
        d4y.style.background = "rgb(255, 255, 255)"
        d1z.style.background = "rgb(255, 255, 255)"
        d2z.style.background = "rgb(255, 255, 255)"
        d3z.style.background = "rgb(255, 255, 255)"
        d4z.style.background = "rgb(255, 255, 255)"
    }
    if (noteColorV == 8) {
        div.style.background = "rgb(206, 255, 72)"
        div2.style.background = "rgb(206, 255, 72)"
        div3.style.background = "rgb(206, 255, 72)"
        div4.style.background = "rgb(206, 255, 72)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(206, 255, 72)"
        d2b.style.background = "rgb(206, 255, 72)"
        d3b.style.background = "rgb(206, 255, 72)"
        d4b.style.background = "rgb(206, 255, 72)"
        d1c.style.background = "rgb(206, 255, 72)"
        d2c.style.background = "rgb(206, 255, 72)"
        d3c.style.background = "rgb(206, 255, 72)"
        d4c.style.background = "rgb(206, 255, 72)"
        d1d.style.background = "rgb(206, 255, 72)"
        d2d.style.background = "rgb(206, 255, 72)"
        d3d.style.background = "rgb(206, 255, 72)"
        d4d.style.background = "rgb(206, 255, 72)"
        d1e.style.background = "rgb(206, 255, 72)"
        d2e.style.background = "rgb(206, 255, 72)"
        d3e.style.background = "rgb(206, 255, 72)"
        d4e.style.background = "rgb(206, 255, 72)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(206, 255, 72)"
        d2g.style.background = "rgb(206, 255, 72)"
        d3g.style.background = "rgb(206, 255, 72)"
        d4g.style.background = "rgb(206, 255, 72)"
        d1h.style.background = "rgb(206, 255, 72)"
        d2h.style.background = "rgb(206, 255, 72)"
        d3h.style.background = "rgb(206, 255, 72)"
        d4h.style.background = "rgb(206, 255, 72)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(206, 255, 72)"
        d2j.style.background = "rgb(206, 255, 72)"
        d3j.style.background = "rgb(206, 255, 72)"
        d4j.style.background = "rgb(206, 255, 72)"
        d1k.style.background = "rgb(206, 255, 72)"
        d2k.style.background = "rgb(206, 255, 72)"
        d3k.style.background = "rgb(206, 255, 72)"
        d4k.style.background = "rgb(206, 255, 72)"
        d1l.style.background = "rgb(206, 255, 72)"
        d2l.style.background = "rgb(206, 255, 72)"
        d3l.style.background = "rgb(206, 255, 72)"
        d4l.style.background = "rgb(206, 255, 72)"
        d1m.style.background = "rgb(206, 255, 72)"
        d2m.style.background = "rgb(206, 255, 72)"
        d3m.style.background = "rgb(206, 255, 72)"
        d4m.style.background = "rgb(206, 255, 72)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(206, 255, 72)"
        d2o.style.background = "rgb(206, 255, 72)"
        d3o.style.background = "rgb(206, 255, 72)"
        d4o.style.background = "rgb(206, 255, 72)"
        d1p.style.background = "rgb(206, 255, 72)"
        d2p.style.background = "rgb(206, 255, 72)"
        d3p.style.background = "rgb(206, 255, 72)"
        d4p.style.background = "rgb(206, 255, 72)"
        d1q.style.background = "rgb(206, 255, 72)"
        d2q.style.background = "rgb(206, 255, 72)"
        d3q.style.background = "rgb(206, 255, 72)"
        d4q.style.background = "rgb(206, 255, 72)"
        d1r.style.background = "rgb(206, 255, 72)"
        d2r.style.background = "rgb(206, 255, 72)"
        d3r.style.background = "rgb(206, 255, 72)"
        d4r.style.background = "rgb(206, 255, 72)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(206, 255, 72)"
        d2t.style.background = "rgb(206, 255, 72)"
        d3t.style.background = "rgb(206, 255, 72)"
        d4t.style.background = "rgb(206, 255, 72)"
        d1u.style.background = "rgb(206, 255, 72)"
        d2u.style.background = "rgb(206, 255, 72)"
        d3u.style.background = "rgb(206, 255, 72)"
        d4u.style.background = "rgb(206, 255, 72)"
        d1v.style.background = "rgb(206, 255, 72)"
        d2v.style.background = "rgb(206, 255, 72)"
        d3v.style.background = "rgb(206, 255, 72)"
        d4v.style.background = "rgb(206, 255, 72)"
        d1w.style.background = "rgb(206, 255, 72)"
        d2w.style.background = "rgb(206, 255, 72)"
        d3w.style.background = "rgb(206, 255, 72)"
        d4w.style.background = "rgb(206, 255, 72)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(206, 255, 72)"
        d2y.style.background = "rgb(206, 255, 72)"
        d3y.style.background = "rgb(206, 255, 72)"
        d4y.style.background = "rgb(206, 255, 72)"
        d1z.style.background = "rgb(206, 255, 72)"
        d2z.style.background = "rgb(206, 255, 72)"
        d3z.style.background = "rgb(206, 255, 72)"
        d4z.style.background = "rgb(206, 255, 72)"
    }
    if (noteColorV == 9) {
        div.style.background = "rgb(0, 94, 255)"
        div2.style.background = "rgb(0, 94, 255)"
        div3.style.background = "rgb(0, 94, 255)"
        div4.style.background = "rgb(0, 94, 255)"
        d1.style.background = "rgb(206, 255, 72)"
        d2.style.background = "rgb(206, 255, 72)"
        d3.style.background = "rgb(206, 255, 72)"
        d4.style.background = "rgb(206, 255, 72)"
        d1b.style.background = "rgb(247, 161, 0)"
        d2b.style.background = "rgb(247, 161, 0)"
        d3b.style.background = "rgb(247, 161, 0)"
        d4b.style.background = "rgb(247, 161, 0)"
        d1c.style.background = "rgb(0, 170, 255)"
        d2c.style.background = "rgb(0, 170, 255)"
        d3c.style.background = "rgb(0, 170, 255)"
        d4c.style.background = "rgb(0, 170, 255)"
        d1d.style.background = "rgb(160, 89, 160)"
        d2d.style.background = "rgb(160, 89, 160)"
        d3d.style.background = "rgb(160, 89, 160)"
        d4d.style.background = "rgb(160, 89, 160)"
        d1e.style.background = "rgb(0, 94, 255)"
        d2e.style.background = "rgb(0, 94, 255)"
        d3e.style.background = "rgb(0, 94, 255)"
        d4e.style.background = "rgb(0, 94, 255)"
        d1f.style.background = "rgb(206, 255, 72)"
        d2f.style.background = "rgb(206, 255, 72)"
        d3f.style.background = "rgb(206, 255, 72)"
        d4f.style.background = "rgb(206, 255, 72)"
        d1g.style.background = "rgb(247, 161, 0)"
        d2g.style.background = "rgb(247, 161, 0)"
        d3g.style.background = "rgb(247, 161, 0)"
        d4g.style.background = "rgb(247, 161, 0)"
        d1h.style.background = "rgb(0, 170, 255)"
        d2h.style.background = "rgb(0, 170, 255)"
        d3h.style.background = "rgb(0, 170, 255)"
        d4h.style.background = "rgb(0, 170, 255)"
        d1i.style.background = "rgb(206, 255, 72)"
        d2i.style.background = "rgb(206, 255, 72)"
        d3i.style.background = "rgb(206, 255, 72)"
        d4i.style.background = "rgb(206, 255, 72)"
        d1j.style.background = "rgb(247, 161, 0)"
        d2j.style.background = "rgb(247, 161, 0)"
        d3j.style.background = "rgb(247, 161, 0)"
        d4j.style.background = "rgb(247, 161, 0)"
        d1k.style.background = "rgb(0, 170, 255)"
        d2k.style.background = "rgb(0, 170, 255)"
        d3k.style.background = "rgb(0, 170, 255)"
        d4k.style.background = "rgb(0, 170, 255)"
        d1l.style.background = "rgb(160, 89, 160)"
        d2l.style.background = "rgb(160, 89, 160)"
        d3l.style.background = "rgb(160, 89, 160)"
        d4l.style.background = "rgb(160, 89, 160)"
        d1m.style.background = "rgb(0, 94, 255)"
        d2m.style.background = "rgb(0, 94, 255)"
        d3m.style.background = "rgb(0, 94, 255)"
        d4m.style.background = "rgb(0, 94, 255)"
        d1n.style.background = "rgb(206, 255, 72)"
        d2n.style.background = "rgb(206, 255, 72)"
        d3n.style.background = "rgb(206, 255, 72)"
        d4n.style.background = "rgb(206, 255, 72)"
        d1o.style.background = "rgb(247, 161, 0)"
        d2o.style.background = "rgb(247, 161, 0)"
        d3o.style.background = "rgb(247, 161, 0)"
        d4o.style.background = "rgb(247, 161, 0)"
        d1p.style.background = "rgb(0, 170, 255)"
        d2p.style.background = "rgb(0, 170, 255)"
        d3p.style.background = "rgb(0, 170, 255)"
        d4p.style.background = "rgb(0, 170, 255)"
        d1q.style.background = "rgb(160, 89, 160)"
        d2q.style.background = "rgb(160, 89, 160)"
        d3q.style.background = "rgb(160, 89, 160)"
        d4q.style.background = "rgb(160, 89, 160)"
        d1r.style.background = "rgb(0, 94, 255)"
        d2r.style.background = "rgb(0, 94, 255)"
        d3r.style.background = "rgb(0, 94, 255)"
        d4r.style.background = "rgb(0, 94, 255)"
        d1s.style.background = "rgb(206, 255, 72)"
        d2s.style.background = "rgb(206, 255, 72)"
        d3s.style.background = "rgb(206, 255, 72)"
        d4s.style.background = "rgb(206, 255, 72)"
        d1t.style.background = "rgb(247, 161, 0)"
        d2t.style.background = "rgb(247, 161, 0)"
        d3t.style.background = "rgb(247, 161, 0)"
        d4t.style.background = "rgb(247, 161, 0)"
        d1u.style.background = "rgb(0, 170, 255)"
        d2u.style.background = "rgb(0, 170, 255)"
        d3u.style.background = "rgb(0, 170, 255)"
        d4u.style.background = "rgb(0, 170, 255)"
        d1v.style.background = "rgb(160, 89, 160)"
        d2v.style.background = "rgb(160, 89, 160)"
        d3v.style.background = "rgb(160, 89, 160)"
        d4v.style.background = "rgb(160, 89, 160)"
        d1w.style.background = "rgb(0, 94, 255)"
        d2w.style.background = "rgb(0, 94, 255)"
        d3w.style.background = "rgb(0, 94, 255)"
        d4w.style.background = "rgb(0, 94, 255)"
        d1x.style.background = "rgb(206, 255, 72)"
        d2x.style.background = "rgb(206, 255, 72)"
        d3x.style.background = "rgb(206, 255, 72)"
        d4x.style.background = "rgb(206, 255, 72)"
        d1y.style.background = "rgb(247, 161, 0)"
        d2y.style.background = "rgb(247, 161, 0)"
        d3y.style.background = "rgb(247, 161, 0)"
        d4y.style.background = "rgb(247, 161, 0)"
        d1z.style.background = "rgb(0, 170, 255)"
        d2z.style.background = "rgb(0, 170, 255)"
        d3z.style.background = "rgb(0, 170, 255)"
        d4z.style.background = "rgb(0, 170, 255)"
    }
    if (noteColorV == 10) {
        div.style.background = "rgb(252, 157, 255)"
        div2.style.background = "rgb(252, 157, 255)"
        div3.style.background = "rgb(252, 157, 255)"
        div4.style.background = "rgb(252, 157, 255)"
        d1.style.background = "rgb(252, 157, 255)"
        d2.style.background = "rgb(252, 157, 255)"
        d3.style.background = "rgb(252, 157, 255)"
        d4.style.background = "rgb(252, 157, 255)"
        d1b.style.background = "rgb(252, 157, 255)"
        d2b.style.background = "rgb(252, 157, 255)"
        d3b.style.background = "rgb(252, 157, 255)"
        d4b.style.background = "rgb(252, 157, 255)"
        d1c.style.background = "rgb(252, 157, 255)"
        d2c.style.background = "rgb(252, 157, 255)"
        d3c.style.background = "rgb(252, 157, 255)"
        d4c.style.background = "rgb(252, 157, 255)"
        d1d.style.background = "rgb(252, 157, 255)"
        d2d.style.background = "rgb(252, 157, 255)"
        d3d.style.background = "rgb(252, 157, 255)"
        d4d.style.background = "rgb(252, 157, 255)"
        d1e.style.background = "rgb(252, 157, 255)"
        d2e.style.background = "rgb(252, 157, 255)"
        d3e.style.background = "rgb(252, 157, 255)"
        d4e.style.background = "rgb(252, 157, 255)"
        d1f.style.background = "rgb(252, 157, 255)"
        d2f.style.background = "rgb(252, 157, 255)"
        d3f.style.background = "rgb(252, 157, 255)"
        d4f.style.background = "rgb(252, 157, 255)"
        d1g.style.background = "rgb(252, 157, 255)"
        d2g.style.background = "rgb(252, 157, 255)"
        d3g.style.background = "rgb(252, 157, 255)"
        d4g.style.background = "rgb(252, 157, 255)"
        d1h.style.background = "rgb(252, 157, 255)"
        d2h.style.background = "rgb(252, 157, 255)"
        d3h.style.background = "rgb(252, 157, 255)"
        d4h.style.background = "rgb(252, 157, 255)"
        d1i.style.background = "rgb(252, 157, 255)"
        d2i.style.background = "rgb(252, 157, 255)"
        d3i.style.background = "rgb(252, 157, 255)"
        d4i.style.background = "rgb(252, 157, 255)"
        d1j.style.background = "rgb(252, 157, 255)"
        d2j.style.background = "rgb(252, 157, 255)"
        d3j.style.background = "rgb(252, 157, 255)"
        d4j.style.background = "rgb(252, 157, 255)"
        d1k.style.background = "rgb(252, 157, 255)"
        d2k.style.background = "rgb(252, 157, 255)"
        d3k.style.background = "rgb(252, 157, 255)"
        d4k.style.background = "rgb(252, 157, 255)"
        d1l.style.background = "rgb(252, 157, 255)"
        d2l.style.background = "rgb(252, 157, 255)"
        d3l.style.background = "rgb(252, 157, 255)"
        d4l.style.background = "rgb(252, 157, 255)"
        d1m.style.background = "rgb(252, 157, 255)"
        d2m.style.background = "rgb(252, 157, 255)"
        d3m.style.background = "rgb(252, 157, 255)"
        d4m.style.background = "rgb(252, 157, 255)"
        d1n.style.background = "rgb(252, 157, 255)"
        d2n.style.background = "rgb(252, 157, 255)"
        d3n.style.background = "rgb(252, 157, 255)"
        d4n.style.background = "rgb(252, 157, 255)"
        d1o.style.background = "rgb(252, 157, 255)"
        d2o.style.background = "rgb(252, 157, 255)"
        d3o.style.background = "rgb(252, 157, 255)"
        d4o.style.background = "rgb(252, 157, 255)"
        d1p.style.background = "rgb(252, 157, 255)"
        d2p.style.background = "rgb(252, 157, 255)"
        d3p.style.background = "rgb(252, 157, 255)"
        d4p.style.background = "rgb(252, 157, 255)"
        d1q.style.background = "rgb(252, 157, 255)"
        d2q.style.background = "rgb(252, 157, 255)"
        d3q.style.background = "rgb(252, 157, 255)"
        d4q.style.background = "rgb(252, 157, 255)"
        d1r.style.background = "rgb(252, 157, 255)"
        d2r.style.background = "rgb(252, 157, 255)"
        d3r.style.background = "rgb(252, 157, 255)"
        d4r.style.background = "rgb(252, 157, 255)"
        d1s.style.background = "rgb(252, 157, 255)"
        d2s.style.background = "rgb(252, 157, 255)"
        d3s.style.background = "rgb(252, 157, 255)"
        d4s.style.background = "rgb(252, 157, 255)"
        d1t.style.background = "rgb(252, 157, 255)"
        d2t.style.background = "rgb(252, 157, 255)"
        d3t.style.background = "rgb(252, 157, 255)"
        d4t.style.background = "rgb(252, 157, 255)"
        d1u.style.background = "rgb(252, 157, 255)"
        d2u.style.background = "rgb(252, 157, 255)"
        d3u.style.background = "rgb(252, 157, 255)"
        d4u.style.background = "rgb(252, 157, 255)"
        d1v.style.background = "rgb(252, 157, 255)"
        d2v.style.background = "rgb(252, 157, 255)"
        d3v.style.background = "rgb(252, 157, 255)"
        d4v.style.background = "rgb(252, 157, 255)"
        d1w.style.background = "rgb(252, 157, 255)"
        d2w.style.background = "rgb(252, 157, 255)"
        d3w.style.background = "rgb(252, 157, 255)"
        d4w.style.background = "rgb(252, 157, 255)"
        d1x.style.background = "rgb(252, 157, 255)"
        d2x.style.background = "rgb(252, 157, 255)"
        d3x.style.background = "rgb(252, 157, 255)"
        d4x.style.background = "rgb(252, 157, 255)"
        d1y.style.background = "rgb(252, 157, 255)"
        d2y.style.background = "rgb(252, 157, 255)"
        d3y.style.background = "rgb(252, 157, 255)"
        d4y.style.background = "rgb(252, 157, 255)"
        d1z.style.background = "rgb(252, 157, 255)"
        d2z.style.background = "rgb(252, 157, 255)"
        d3z.style.background = "rgb(252, 157, 255)"
        d4z.style.background = "rgb(252, 157, 255)"
    }
    if (noteColorV == 11) {
        div.style.background = "rgb(0, 0, 0)"
        div2.style.background = "rgb(0, 0, 0)"
        div3.style.background = "rgb(0, 0, 0)"
        div4.style.background = "rgb(0, 0, 0)"
        d1.style.background = "rgb(0, 0, 0)"
        d2.style.background = "rgb(0, 0, 0)"
        d3.style.background = "rgb(0, 0, 0)"
        d4.style.background = "rgb(0, 0, 0)"
        d1b.style.background = "rgb(0, 0, 0)"
        d2b.style.background = "rgb(0, 0, 0)"
        d3b.style.background = "rgb(0, 0, 0)"
        d4b.style.background = "rgb(0, 0, 0)"
        d1c.style.background = "rgb(0, 0, 0)"
        d2c.style.background = "rgb(0, 0, 0)"
        d3c.style.background = "rgb(0, 0, 0)"
        d4c.style.background = "rgb(0, 0, 0)"
        d1d.style.background = "rgb(0, 0, 0)"
        d2d.style.background = "rgb(0, 0, 0)"
        d3d.style.background = "rgb(0, 0, 0)"
        d4d.style.background = "rgb(0, 0, 0)"
        d1e.style.background = "rgb(0, 0, 0)"
        d2e.style.background = "rgb(0, 0, 0)"
        d3e.style.background = "rgb(0, 0, 0)"
        d4e.style.background = "rgb(0, 0, 0)"
        d1f.style.background = "rgb(0, 0, 0)"
        d2f.style.background = "rgb(0, 0, 0)"
        d3f.style.background = "rgb(0, 0, 0)"
        d4f.style.background = "rgb(0, 0, 0)"
        d1g.style.background = "rgb(0, 0, 0)"
        d2g.style.background = "rgb(0, 0, 0)"
        d3g.style.background = "rgb(0, 0, 0)"
        d4g.style.background = "rgb(0, 0, 0)"
        d1h.style.background = "rgb(0, 0, 0)"
        d2h.style.background = "rgb(0, 0, 0)"
        d3h.style.background = "rgb(0, 0, 0)"
        d4h.style.background = "rgb(0, 0, 0)"
        d1i.style.background = "rgb(0, 0, 0)"
        d2i.style.background = "rgb(0, 0, 0)"
        d3i.style.background = "rgb(0, 0, 0)"
        d4i.style.background = "rgb(0, 0, 0)"
        d1j.style.background = "rgb(0, 0, 0)"
        d2j.style.background = "rgb(0, 0, 0)"
        d3j.style.background = "rgb(0, 0, 0)"
        d4j.style.background = "rgb(0, 0, 0)"
        d1k.style.background = "rgb(0, 0, 0)"
        d2k.style.background = "rgb(0, 0, 0)"
        d3k.style.background = "rgb(0, 0, 0)"
        d4k.style.background = "rgb(0, 0, 0)"
        d1l.style.background = "rgb(0, 0, 0)"
        d2l.style.background = "rgb(0, 0, 0)"
        d3l.style.background = "rgb(0, 0, 0)"
        d4l.style.background = "rgb(0, 0, 0)"
        d1m.style.background = "rgb(0, 0, 0)"
        d2m.style.background = "rgb(0, 0, 0)"
        d3m.style.background = "rgb(0, 0, 0)"
        d4m.style.background = "rgb(0, 0, 0)"
        d1n.style.background = "rgb(0, 0, 0)"
        d2n.style.background = "rgb(0, 0, 0)"
        d3n.style.background = "rgb(0, 0, 0)"
        d4n.style.background = "rgb(0, 0, 0)"
        d1o.style.background = "rgb(0, 0, 0)"
        d2o.style.background = "rgb(0, 0, 0)"
        d3o.style.background = "rgb(0, 0, 0)"
        d4o.style.background = "rgb(0, 0, 0)"
        d1p.style.background = "rgb(0, 0, 0)"
        d2p.style.background = "rgb(0, 0, 0)"
        d3p.style.background = "rgb(0, 0, 0)"
        d4p.style.background = "rgb(0, 0, 0)"
        d1q.style.background = "rgb(0, 0, 0)"
        d2q.style.background = "rgb(0, 0, 0)"
        d3q.style.background = "rgb(0, 0, 0)"
        d4q.style.background = "rgb(0, 0, 0)"
        d1r.style.background = "rgb(0, 0, 0)"
        d2r.style.background = "rgb(0, 0, 0)"
        d3r.style.background = "rgb(0, 0, 0)"
        d4r.style.background = "rgb(0, 0, 0)"
        d1s.style.background = "rgb(0, 0, 0)"
        d2s.style.background = "rgb(0, 0, 0)"
        d3s.style.background = "rgb(0, 0, 0)"
        d4s.style.background = "rgb(0, 0, 0)"
        d1t.style.background = "rgb(0, 0, 0)"
        d2t.style.background = "rgb(0, 0, 0)"
        d3t.style.background = "rgb(0, 0, 0)"
        d4t.style.background = "rgb(0, 0, 0)"
        d1u.style.background = "rgb(0, 0, 0)"
        d2u.style.background = "rgb(0, 0, 0)"
        d3u.style.background = "rgb(0, 0, 0)"
        d4u.style.background = "rgb(0, 0, 0)"
        d1v.style.background = "rgb(0, 0, 0)"
        d2v.style.background = "rgb(0, 0, 0)"
        d3v.style.background = "rgb(0, 0, 0)"
        d4v.style.background = "rgb(0, 0, 0)"
        d1w.style.background = "rgb(0, 0, 0)"
        d2w.style.background = "rgb(0, 0, 0)"
        d3w.style.background = "rgb(0, 0, 0)"
        d4w.style.background = "rgb(0, 0, 0)"
        d1x.style.background = "rgb(0, 0, 0)"
        d2x.style.background = "rgb(0, 0, 0)"
        d3x.style.background = "rgb(0, 0, 0)"
        d4x.style.background = "rgb(0, 0, 0)"
        d1y.style.background = "rgb(0, 0, 0)"
        d2y.style.background = "rgb(0, 0, 0)"
        d3y.style.background = "rgb(0, 0, 0)"
        d4y.style.background = "rgb(0, 0, 0)"
        d1z.style.background = "rgb(0, 0, 0)"
        d2z.style.background = "rgb(0, 0, 0)"
        d3z.style.background = "rgb(0, 0, 0)"
        d4z.style.background = "rgb(0, 0, 0)"
    }
    if (noteColorV == 12) {
        div.style.background = "rgb(151, 54, 27)"
        div2.style.background = "rgb(151, 54, 27)"
        div3.style.background = "rgb(151, 54, 27)"
        div4.style.background = "rgb(151, 54, 27)"
        d1.style.background = "rgb(151, 54, 27)"
        d2.style.background = "rgb(151, 54, 27)"
        d3.style.background = "rgb(151, 54, 27)"
        d4.style.background = "rgb(151, 54, 27)"
        d1b.style.background = "rgb(151, 54, 27)"
        d2b.style.background = "rgb(151, 54, 27)"
        d3b.style.background = "rgb(151, 54, 27)"
        d4b.style.background = "rgb(151, 54, 27)"
        d1c.style.background = "rgb(151, 54, 27)"
        d2c.style.background = "rgb(151, 54, 27)"
        d3c.style.background = "rgb(151, 54, 27)"
        d4c.style.background = "rgb(151, 54, 27)"
        d1d.style.background = "rgb(151, 54, 27)"
        d2d.style.background = "rgb(151, 54, 27)"
        d3d.style.background = "rgb(151, 54, 27)"
        d4d.style.background = "rgb(151, 54, 27)"
        d1e.style.background = "rgb(151, 54, 27)"
        d2e.style.background = "rgb(151, 54, 27)"
        d3e.style.background = "rgb(151, 54, 27)"
        d4e.style.background = "rgb(151, 54, 27)"
        d1f.style.background = "rgb(151, 54, 27)"
        d2f.style.background = "rgb(151, 54, 27)"
        d3f.style.background = "rgb(151, 54, 27)"
        d4f.style.background = "rgb(151, 54, 27)"
        d1g.style.background = "rgb(151, 54, 27)"
        d2g.style.background = "rgb(151, 54, 27)"
        d3g.style.background = "rgb(151, 54, 27)"
        d4g.style.background = "rgb(151, 54, 27)"
        d1h.style.background = "rgb(151, 54, 27)"
        d2h.style.background = "rgb(151, 54, 27)"
        d3h.style.background = "rgb(151, 54, 27)"
        d4h.style.background = "rgb(151, 54, 27)"
        d1i.style.background = "rgb(151, 54, 27)"
        d2i.style.background = "rgb(151, 54, 27)"
        d3i.style.background = "rgb(151, 54, 27)"
        d4i.style.background = "rgb(151, 54, 27)"
        d1j.style.background = "rgb(151, 54, 27)"
        d2j.style.background = "rgb(151, 54, 27)"
        d3j.style.background = "rgb(151, 54, 27)"
        d4j.style.background = "rgb(151, 54, 27)"
        d1k.style.background = "rgb(151, 54, 27)"
        d2k.style.background = "rgb(151, 54, 27)"
        d3k.style.background = "rgb(151, 54, 27)"
        d4k.style.background = "rgb(151, 54, 27)"
        d1l.style.background = "rgb(151, 54, 27)"
        d2l.style.background = "rgb(151, 54, 27)"
        d3l.style.background = "rgb(151, 54, 27)"
        d4l.style.background = "rgb(151, 54, 27)"
        d1m.style.background = "rgb(151, 54, 27)"
        d2m.style.background = "rgb(151, 54, 27)"
        d3m.style.background = "rgb(151, 54, 27)"
        d4m.style.background = "rgb(151, 54, 27)"
        d1n.style.background = "rgb(151, 54, 27)"
        d2n.style.background = "rgb(151, 54, 27)"
        d3n.style.background = "rgb(151, 54, 27)"
        d4n.style.background = "rgb(151, 54, 27)"
        d1o.style.background = "rgb(151, 54, 27)"
        d2o.style.background = "rgb(151, 54, 27)"
        d3o.style.background = "rgb(151, 54, 27)"
        d4o.style.background = "rgb(151, 54, 27)"
        d1p.style.background = "rgb(151, 54, 27)"
        d2p.style.background = "rgb(151, 54, 27)"
        d3p.style.background = "rgb(151, 54, 27)"
        d4p.style.background = "rgb(151, 54, 27)"
        d1q.style.background = "rgb(151, 54, 27)"
        d2q.style.background = "rgb(151, 54, 27)"
        d3q.style.background = "rgb(151, 54, 27)"
        d4q.style.background = "rgb(151, 54, 27)"
        d1r.style.background = "rgb(151, 54, 27)"
        d2r.style.background = "rgb(151, 54, 27)"
        d3r.style.background = "rgb(151, 54, 27)"
        d4r.style.background = "rgb(151, 54, 27)"
        d1s.style.background = "rgb(151, 54, 27)"
        d2s.style.background = "rgb(151, 54, 27)"
        d3s.style.background = "rgb(151, 54, 27)"
        d4s.style.background = "rgb(151, 54, 27)"
        d1t.style.background = "rgb(151, 54, 27)"
        d2t.style.background = "rgb(151, 54, 27)"
        d3t.style.background = "rgb(151, 54, 27)"
        d4t.style.background = "rgb(151, 54, 27)"
        d1u.style.background = "rgb(151, 54, 27)"
        d2u.style.background = "rgb(151, 54, 27)"
        d3u.style.background = "rgb(151, 54, 27)"
        d4u.style.background = "rgb(151, 54, 27)"
        d1v.style.background = "rgb(151, 54, 27)"
        d2v.style.background = "rgb(151, 54, 27)"
        d3v.style.background = "rgb(151, 54, 27)"
        d4v.style.background = "rgb(151, 54, 27)"
        d1w.style.background = "rgb(151, 54, 27)"
        d2w.style.background = "rgb(151, 54, 27)"
        d3w.style.background = "rgb(151, 54, 27)"
        d4w.style.background = "rgb(151, 54, 27)"
        d1x.style.background = "rgb(151, 54, 27)"
        d2x.style.background = "rgb(151, 54, 27)"
        d3x.style.background = "rgb(151, 54, 27)"
        d4x.style.background = "rgb(151, 54, 27)"
        d1y.style.background = "rgb(151, 54, 27)"
        d2y.style.background = "rgb(151, 54, 27)"
        d3y.style.background = "rgb(151, 54, 27)"
        d4y.style.background = "rgb(151, 54, 27)"
        d1z.style.background = "rgb(151, 54, 27)"
        d2z.style.background = "rgb(151, 54, 27)"
        d3z.style.background = "rgb(151, 54, 27)"
        d4z.style.background = "rgb(151, 54, 27)"
    }
    save();
}
function background2P() {
    background2 += 1;
    if (background2 <= 0) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 1) {
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 2) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    document.getElementById("span18").innerHTML = "Background 2" + " " + background2
    save();
}
function background2M() {
    background2 += 1;
    if (background2 <= 0) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 1) {
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 2) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    document.getElementById("span18").innerHTML = "Background 2" + " " + background2
    save();
}
function background2N() {
    if (background2 <= 0) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 1) {
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    if (background2 == 2) {
        background2 = 0;
        document.getElementById("span18").style.marginRight = ".60" + "em"
    }
    document.getElementById("span18").innerHTML = "Background 2" + " " + background2
}
function downScroll() {
    downscroll += 1;
    if (downscroll == 2) {
        downscroll = 0;
    }
}
function save() {
    var scrollRateA = [];
    scrollRateA[0] = scrollV
    scrollRateA[1] = heightV
    scrollRateA[2] = widthV
    scrollRateA[3] = spacingV1;
    scrollRateA[4] = spacingV2;
    scrollRateA[5] = spacingV3;
    scrollRateA[6] = spacingV4;
    scrollRateA[7] = spacingV5;
    scrollRateA[8] = spacingV6;
    scrollRateA[9] = radiusV;
    scrollRateA[10] = accuracyContainerSpacing;
    scrollRateA[11] = spacingV6;
    scrollRateA[12] = spacingList;
    scrollRateA[13] = spacingResults;
    scrollRateA[14] = screenCutWidth;
    scrollRateA[15] = backgroundV;
    scrollRateA[16] = audioSync2;
    scrollRateA[17] = screenCutV;
    scrollRateA[18] = screenCutTop;
    scrollRateA[19] = screenCutHeight;
    scrollRateA[20] = screenCutTopDS;
    scrollRateA[21] = noteColorV;
    scrollRateA[22] = judgeOffsetV;
    scrollRateA[23] = downscroll;
    scrollRateA[24] = background2;
    scrollRateA[25] = bannerS;
    scrollRateA[26] = button1Code;
    scrollRateA[27] = button2Code;
    scrollRateA[28] = button3Code;
    scrollRateA[29] = button4Code;
    scrollRateA[30] = scoreN;
    localStorage.setItem('scrollVS', JSON.stringify(scrollRateA));
}
function load() {
    const scrollVS = JSON.parse(localStorage.getItem('scrollVS'));
    scrollV = scrollVS[0];
    heightV = scrollVS[1];
    widthV = scrollVS[2];
    spacingV1 = scrollVS[3];
    spacingV2 = scrollVS[4];
    spacingV3 = scrollVS[5];
    spacingV4 = scrollVS[6];
    spacingV5 = scrollVS[7];
    spacingV6 = scrollVS[8];
    radiusV = scrollVS[9];
    accuracyContainerSpacing = scrollVS[10];
    spacingV6 = scrollVS[11];
    spacingList = scrollVS[12];
    spacingResults = scrollVS[13];
    screenCutWidth = scrollVS[14];
    backgroundV = scrollVS[15];
    audioSync2 = scrollVS[16];
    screenCutV = scrollVS[17];
    screenCutTop = scrollVS[18];
    screenCutHeight = scrollVS[19];
    screenCutTopDS = scrollVS[20];
    noteColorV = scrollVS[21];
    judgeOffsetV = scrollVS[22];
    downscroll = scrollVS[23];
    background2 = scrollVS[24];
    bannerS = scrollVS[25];
    button1Code = scrollVS[26];
    button2Code = scrollVS[27];
    button3Code = scrollVS[28];
    button4Code = scrollVS[29];
    scoreN = scrollVS[30];
    document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
    document.getElementById("span1").innerHTML = "Scroll Rate" + " " + scrollV
    document.getElementById("span2").innerHTML = "Height" + " " + heightV
    document.getElementById("span3").innerHTML = "Width" + " " + widthV
    document.getElementById("span4").innerHTML = "Spacing" + " " + spacingV1
    document.getElementById("span5").innerHTML = "Radius" + " " + radiusV
    document.getElementById("span6").innerHTML = "Background" + " " + backgroundV
    document.getElementById("span11").innerHTML = "Song Offset" + " " + audioSync2 / 7
    document.getElementById("span13").innerHTML = "Screen Cut" + " " + screenCutV
    document.getElementById("span14").innerHTML = "Note Color" + " " + noteColorV
    document.getElementById("span15").innerHTML = "Judge Offset" + " " + judgeOffsetV
    scrollRateN()
    radiusN()
    heightN()
    widthN()
    spacingN()
    offsetN()
    screenCutN()
    noteColorN()
    judgeOffsetN()
    backgroundN()
    background2N()
}
function defaults() {
    var scrollRateA = [];
    scrollRateA[0] = 19
    scrollRateA[1] = 40
    scrollRateA[2] = 118
    scrollRateA[3] = 120;
    scrollRateA[4] = 240;
    scrollRateA[5] = 360;
    scrollRateA[6] = 480;
    scrollRateA[7] = 700;
    scrollRateA[8] = 280;
    scrollRateA[9] = 0;
    scrollRateA[10] = 612;
    scrollRateA[11] = 280;
    scrollRateA[12] = 41;
    scrollRateA[13] = 300;
    scrollRateA[14] = 700;
    scrollRateA[15] = 0;
    scrollRateA[16] = 0;
    scrollRateA[17] = 0;
    scrollRateA[18] = 957;
    scrollRateA[19] = 0;
    scrollRateA[20] = 8;
    scrollRateA[21] = 0;
    scrollRateA[22] = 0;
    scrollRateA[23] = 0;
    scrollRateA[24] = 0;
    scrollRateA[25] = 750;
    scrollRateA[26] = "KeyA";
    scrollRateA[27] = "KeyS";
    scrollRateA[28] = "KeyK";
    scrollRateA[29] = "KeyL";
    scrollRateA[30] = 0;
    scoresA = [];
    localStorage.setItem('scrollVS', JSON.stringify(scrollRateA));
    localStorage.setItem('scores', JSON.stringify(scoresA));
    load()
}
function hideOptions() {
    this.document.getElementById("options").style.display = "none";
    // this.document.getElementById("")
}
function controls() {
    button1 = prompt("Press Button 1", "A");
    button2 = prompt("Press Button 2", "S");
    button3 = prompt("Press Button 3", "K");
    button4 = prompt("Press Button 4", "L");
    if (button1 == "A" || button1 == "a" || button1 == "B" || button1 == "b" || button1 == "C" || button1 == "c" || button1 == "D" || button1 == "d" || button1 == "E" || button1 == "e" || button1 == "F" || button1 == "f" || button1 == "G" || button1 == "g" || button1 == "H" || button1 == "h" || button1 == "I" || button1 == "i" || button1 == "J" || button1 == "j" || button1 == "K" || button1 == "k" || button1 == "L" || button1 == "l" || button1 == "M" || button1 == "m" || button1 == "O" || button1 == "o" || button1 == "P" || button1 == "p" || button1 == "Q" || button1 == "q" || button1 == "R" || button1 == "r" || button1 == "S" || button1 == "s" || button1 == "T" || button1 == "t" || button1 == "U" || button1 == "u" || button1 == "V" || button1 == "v" || button1 == "W" || button1 == "w" || button1 == "X" || button1 == "x" || button1 == "Y" || button1 == "y" || button1 == "Z" || button1 == "z") {
        button1Code = "Key" + button1.toUpperCase()
    }
    if (button1 == "0" || button1 == "1" || button1 == "2" || button1 == "3" || button1 == "4" || button1 == "5" || button1 == "6" || button1 == "7" || button1 == "8" || button1 == "9") {
        button1Code = "Numpad" + button1
    }
    if (button2 == "A" || button2 == "a" || button2 == "B" || button2 == "b" || button2 == "C" || button2 == "c" || button2 == "D" || button2 == "d" || button2 == "E" || button2 == "e" || button2 == "F" || button2 == "f" || button2 == "G" || button2 == "g" || button2 == "H" || button2 == "h" || button2 == "I" || button2 == "i" || button2 == "J" || button2 == "j" || button2 == "K" || button2 == "k" || button2 == "L" || button2 == "l" || button2 == "M" || button2 == "m" || button2 == "O" || button2 == "o" || button2 == "P" || button2 == "p" || button2 == "Q" || button2 == "q" || button2 == "R" || button2 == "r" || button2 == "S" || button2 == "s" || button2 == "T" || button2 == "t" || button2 == "U" || button2 == "u" || button2 == "V" || button2 == "v" || button2 == "W" || button2 == "w" || button2 == "X" || button2 == "x" || button2 == "Y" || button2 == "y" || button2 == "Z" || button2 == "z") {
        button2Code = "Key" + button2.toUpperCase()
    }
    if (button2 == "0" || button2 == "1" || button2 == "2" || button2 == "3" || button2 == "4" || button2 == "5" || button2 == "6" || button2 == "7" || button2 == "8" || button2 == "9") {
        button2Code = "Numpad" + button2
    }
    if (button3 == "A" || button3 == "a" || button3 == "B" || button3 == "b" || button3 == "C" || button3 == "c" || button3 == "D" || button3 == "d" || button3 == "E" || button3 == "e" || button3 == "F" || button3 == "f" || button3 == "G" || button3 == "g" || button3 == "H" || button3 == "h" || button3 == "I" || button3 == "i" || button3 == "J" || button3 == "j" || button3 == "K" || button3 == "k" || button3 == "L" || button3 == "l" || button3 == "M" || button3 == "m" || button3 == "O" || button3 == "o" || button3 == "P" || button3 == "p" || button3 == "Q" || button3 == "q" || button3 == "R" || button3 == "r" || button3 == "S" || button3 == "s" || button3 == "T" || button3 == "t" || button3 == "U" || button3 == "u" || button3 == "V" || button3 == "v" || button3 == "W" || button3 == "w" || button3 == "X" || button3 == "x" || button3 == "Y" || button3 == "y" || button3 == "Z" || button3 == "z") {
        button3Code = "Key" + button3.toUpperCase()
    }
    if (button3 == "0" || button3 == "1" || button3 == "2" || button3 == "3" || button3 == "4" || button3 == "5" || button3 == "6" || button3 == "7" || button3 == "8" || button3 == "9") {
        button3Code = "Numpad" + button3
    }
    if (button4 == "A" || button4 == "a" || button4 == "B" || button4 == "b" || button4 == "C" || button4 == "c" || button4 == "D" || button4 == "d" || button4 == "E" || button4 == "e" || button4 == "F" || button4 == "f" || button4 == "G" || button4 == "g" || button4 == "H" || button4 == "h" || button4 == "I" || button4 == "i" || button4 == "J" || button4 == "j" || button4 == "K" || button4 == "k" || button4 == "L" || button4 == "l" || button4 == "M" || button4 == "m" || button4 == "O" || button4 == "o" || button4 == "P" || button4 == "p" || button4 == "Q" || button4 == "q" || button4 == "R" || button4 == "r" || button4 == "S" || button4 == "s" || button4 == "T" || button4 == "t" || button4 == "U" || button4 == "u" || button4 == "V" || button4 == "v" || button4 == "W" || button4 == "w" || button4 == "X" || button4 == "x" || button4 == "Y" || button4 == "y" || button4 == "Z" || button4 == "z") {
        button4Code = "Key" + button4.toUpperCase()
    }
    if (button4 == "0" || button4 == "1" || button4 == "2" || button4 == "3" || button4 == "4" || button4 == "5" || button4 == "6" || button4 == "7" || button4 == "8" || button4 == "9") {
        button4Code = "Numpad" + button4
    }
    save();
}
mta = document.getElementById("my-text-area")
MTA = ""
var smText = ""
var smMp3 = ""
var texts;
const uploadButton = document.getElementById("uploadButton");
uploadButton.addEventListener("click", uploadFiles);
function uploadFiles(event) {
    document.getElementById("cdtitleImage").src = "";
    event.preventDefault();
    const fileInput = document.getElementById("fileInput");
    const selectedFiles = fileInput.files;
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("files[]", selectedFiles[i]);
    }
    // console.log([...formData])
    for (const pair of formData.entries()) {
        // console.log(pair[1].name + ", " + pair[1].size + ", " + pair[1].type + ", ");
        if (pair[1].name.endsWith(".sm")) {
            smText = pair[1]
            const reader = new FileReader()
            reader.onload = event => mta.innerHTML = event.target.result;
            reader.onerror = error => reject(error)
            reader.readAsText(pair[1])
            setTimeout(function () {
                button();
            }, 100)
        }
        if (pair[1].name.endsWith(".mp3") || pair[1].name.endsWith(".ogg")) {
            smMp3 = pair[1]
            $("#src").attr("src", URL.createObjectURL(pair[1]));
            document.getElementById("audio").load();
            audio = document.getElementById("audio");
            audio.pause()
        }
        if (pair[1].name.includes("bg") || pair[1].name.includes("BG") || pair[1].name.includes("background") || pair[1].name.includes("BACKGROUND")) {
            var backgroundPic = pair[1]
            const imageUrl = URL.createObjectURL(backgroundPic)
            if (background2 == 1)
                setTimeout(function () {
                    document.body.style.cssText += `background-image:url(${imageUrl})`;
                }, 400)
        }
        if (pair[1].name.includes("bn") || pair[1].name.includes("banner") || pair[1].name.includes("BANNER") || pair[1].name.includes("BN")) {
            var bannerPic = pair[1]
            const imageUrlBanner = URL.createObjectURL(bannerPic)
            backgroundImage.src = imageUrlBanner;
        }
        if (pair[1].name.includes("title") || pair[1].name.includes("TITLE") || pair[1].name.includes("cd") || pair[1].name.includes("CD")) {
            var cdtitle = pair[1]
            const cdTitle = URL.createObjectURL(cdtitle)
            document.getElementById("cdtitleImage").src = cdTitle;
        }
    }
}
var bubbleM = 1600;
var bubbleM2 = 1600;
var bubbleM3 = 1600;
var bubbleM4 = 1600;
var bubbleM5;
var bubbleM6;
var bubbleM7;
var bubbleM8;
var bubbleM9;
var bubbleT1 = Math.ceil(Math.random() * window.innerWidth);
var bubbleR1 = Math.ceil(Math.random() * window.innerWidth);
var bubbleT2 = Math.ceil(Math.random() * window.innerWidth);
var bubbleR2 = Math.ceil(Math.random() * window.innerWidth);
var bubbleT3 = Math.ceil(Math.random() * window.innerWidth);
var bubbleR3 = Math.ceil(Math.random() * window.innerWidth);
var bubbleT4 = Math.ceil(Math.random() * window.innerWidth);
var bubbleR4 = Math.ceil(Math.random() * window.innerWidth);
var bubbleDiv = document.createElement('div')
bubbleDiv.style.cssText = 'position:absolute;top:500px;left:600px;height:80px;width:80px;z-index:-1;';
bubbleDiv.innerHTML = "<img src='bubble1.gif'>"
document.body.appendChild(bubbleDiv);
bubbleDiv.style.top = bubbleM + "px";
bubbleR1 = Math.ceil(Math.random() * 1920);
bubbleDiv.style.left = bubbleR1 + "px"
var bubbleDiv2 = document.createElement('div')
bubbleDiv2.style.cssText = 'position:absolute;top:500px;left:700px;height:80px;width:80px;z-index:-1;';
bubbleDiv2.innerHTML = "<img src='bubble2.gif'>"
document.body.appendChild(bubbleDiv2);
bubbleDiv2.style.top = bubbleM2 + "px";
bubbleR2 = Math.ceil(Math.random() * 1920);
bubbleDiv.style.left = bubbleR2 + "px"
var bubbleDiv3 = document.createElement('div')
bubbleDiv3.style.cssText = 'position:absolute;top:500px;left:900px;height:80px;width:80px;z-index:-1;';
bubbleDiv3.innerHTML = "<img src='bubble3.gif'>"
document.body.appendChild(bubbleDiv3);
bubbleDiv3.style.top = bubbleM3 + "px";
bubbleR3 = Math.ceil(Math.random() * 1920);
bubbleDiv.style.left = bubbleR3 + "px"
var birdDiv = document.createElement('div')
birdDiv.style.cssText = 'position:absolute;top:500px;left:900px;height:80px;width:80px;z-index:-1;opacity:0.0';
birdDiv.innerHTML = "<img style='height:80px;width:80px;'src='bird2.png'>"
birdDiv.style.top = bubbleM4 + "px";
bubbleR4 = Math.ceil(Math.random() * 1920);
bubbleDiv.style.left = bubbleR3 + "px"
document.body.appendChild(birdDiv);
var ar = new Array(33, 34);
$(document).keydown(function (e) {
    var key = e.which;
    if ($.inArray(key, ar) > -1) {
        e.preventDefault();
        return false;
    }
    return true;
});
load()
function scoress() {
    sexyBob++
    if (sexyBob % 2 == 1) {
        optionsV = 0;
        this.document.getElementById("scoreContainer").style.visibility = "visible";
        this.document.getElementById("search").style.visibility = "visible";
        this.document.getElementById("scoresHidden").style.visibility = "visible";
    }

    if (sexyBob % 2 == 0) {
        this.document.getElementById("scoreContainer").style.visibility = "hidden";
        this.document.getElementById("search").style.visibility = "hidden";
        optionsV = 1;
    }
    this.document.getElementById("scoreContainer").innerHTML = "";

    allScores = JSON.parse(localStorage.getItem('scores'));
    allScores.sort()
    for (let scoreS = 0; scoreS < allScores.length; scoreS++) {
        this.document.getElementById("scoreContainer").innerHTML += allScores[scoreS]
    }
}
function scoresSave() {
    var scoresA = jQuery.parseJSON(localStorage.getItem('scores'));
    var date = new Date().toLocaleString()
    scoreN++
    randomPick = Math.ceil(Math.random() * 5);

    scoresA.push(songTitleClean + "<br />" + artist + "<br/>" + "Chart " + chartNumber + "<br />" + "Rate " + rate.toFixed(2) + "<br />" + "Ultimate " + ultimate + "<br />" + "Fancy " + fancy + "<br />" + "Stunning " + stunning + "<br />" + "Miss " + miss + "<br />" + date + "<br /><br />")

    localStorage.setItem('scores', JSON.stringify(scoresA));
}
function scoresHidden() {
    this.document.getElementById("scoreContainer").style.visibility = "hidden";
    this.document.getElementById("scoresHidden").style.visibility = "hidden";
    this.document.getElementById("search").style.visibility = "hidden";

}
const searchHandler = function (e) {
    var input = e.target.value;
    searchArray = [];
    for (let i = 0; i < allScores.length; i++) {
        if (allScores[i].includes(input)) {
            searchArray.push(allScores[i])
            textFill()
        }
    }
}
function textFill() {
    this.document.getElementById("scoreContainer").innerHTML = ""
    for (let scoreS = 0; scoreS < searchArray.length; scoreS++) {
        this.document.getElementById("scoreContainer").innerHTML += searchArray[scoreS]
    }
}
search.addEventListener('input', searchHandler);
search.addEventListener('propertychange', searchHandler);
