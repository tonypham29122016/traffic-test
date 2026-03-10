document.write(`
<div id="API_SEOTRAFFIC">

<div id="traffic_box">

<div class="logo_st">
<span class="s">S</span>
<span class="t">T</span>
<div class="light"></div>
</div>

<button id="getKeyBtn">LẤY KEY</button>

<div id="countdown" style="display:none;"></div>
<div id="result" style="display:none;">KEY: ABC123XYZ</div>

</div>

<style>

#API_SEOTRAFFIC{
margin-bottom:30px;
background:#fff;
border:1px solid rgba(129,0,0,0.12);
border-radius:12px;
padding:6px 12px;
display:inline-block;
box-shadow:0 3px 10px rgba(255,77,77,0.3);
z-index:999999;
}

#traffic_box{
display:flex;
align-items:center;
gap:10px;
}

.logo_st{
position:relative;
width:32px;
height:32px;
border-radius:50%;
background:radial-gradient(circle at top left,#4d79ff,#ff4d4d);
display:flex;
align-items:center;
justify-content:center;
font-weight:bold;
font-size:15px;
overflow:hidden;
}

.logo_st .s{
position:absolute;
left:7px;
color:#fff;
}

.logo_st .t{
position:absolute;
right:7px;
color:#240707;
}

.light{
position:absolute;
top:-50%;
left:-50%;
width:200%;
height:200%;
background:linear-gradient(120deg,transparent,rgba(255,255,255,0.4),transparent);
transform:rotate(25deg);
animation:sweepLight 2.5s infinite;
}

#getKeyBtn{
font-size:12px;
color:#fff;
font-weight:bold;
padding:6px 12px;
background:#ff4d4d;
border-radius:6px;
border:none;
cursor:pointer;
}

#countdown{
font-size:12px;
font-weight:bold;
color:#333;
}

#result{
font-size:12px;
font-weight:bold;
color:#00a651;
}

@keyframes sweepLight{
0%{transform:translateX(-100%) rotate(25deg);}
50%{transform:translateX(0%) rotate(25deg);}
100%{transform:translateX(100%) rotate(25deg);}
}

</style>

<script>

let waitTime = 10;

let button = document.getElementById("getKeyBtn");
let countdown = document.getElementById("countdown");
let result = document.getElementById("result");

button.onclick = function(){

button.style.display="none";
countdown.style.display="block";

let time = waitTime;

countdown.innerHTML = "Vui lòng chờ: "+time+"s";

let timer = setInterval(function(){

time--;

countdown.innerHTML = "Vui lòng chờ: "+time+"s";

if(time <= 0){

clearInterval(timer);

countdown.style.display="none";
result.style.display="block";

}

},1000);

}

</script>

</div>
`);
