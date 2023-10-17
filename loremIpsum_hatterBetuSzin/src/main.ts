document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement('button'); 
  
  btn.innerText = "Plusz szöveg";
  document.getElementById("app")!.appendChild(btn);
  
  btn.addEventListener('click', () => {

    const p = document.createElement('p');
    const inputHatter = document.createElement('input');
    const inputBetu = document.createElement('input');

    p.innerHTML = `Lórum ipse nem zató tres, hanem jövező. A tótla köpecs. bolása ébrett a bongékony verheglő hasájáról illetve kolájáról, mivel 1947-53 között ez a sítos csóság szemezett. A foncos tudis vesztjére, az ébregő hiár bongékony gimalása a fáros mészéptől eveszte a bongékony és ságos verheglőt, melyet minden sebéken illetve szüksérő habachban meg kellett elelnie. A bongékony verheglőt a függő bongékony csaproccsal vadt firmattal és vadt bészek eveszték el. A nozások hatlas szatina a foncos tudis, zaléka az ébregő hiár bongékony gimalása. A sítos hurázás valamennyi ténzékben 2 sodás volt. A nozások az első sodásban 3 gongot a kíségben, 3 gongot a zoldacson kongtak. A második sodás katósásától 5 gongot a zoldacson, 1 gongot pedig a kíségben.
    Ebből a becőből a bőgő kadhatias szikesz bérterző külegépet nem lorozódik, hiszen egyetlen ködésnek a bártja sem alizálta túl a csábolajt. A gyanció kosása pedig még a legjobban szépegető szerész jellemben is csak hűtése alatt cirkál a csábolajnak. „A pasztár pockalasztár 1976-ban henvelt az igattól 5 kurvára. Az elleren 4 emtő fegyenes apcsodás mózik, több mint 1860 csária sadt tegesség. Ezen az elleren lengik a gyezőn kékos kifterken közel terdülényét. A kadhatias apcsodások az ígés egyes belence alapján a révény specégébe üzelnek, az első 25 apcsodás között hangatnak. Cseni szöntés törnyő mányzó, pasztár pockalasztár lanság:
    Éren kötörgés roszt a sordadékon: 2001 első süvőjében húzódt a kültő barlak, de a kétítés nem lenálk, több zetletély kozásával csatlanban a márd. Hurdában van a fojárka csolymátrák márdja is, ahol szintén lantatlan kötörgés roszt a zetletélyek között. Erre nekedi a kordot a gileka fugvája. A gileka pres hinikájától folyamatosan, minden nap erjenkedi trincéit a szabár culaszával kapcsolatosan. A cseplő 130 fonkátusán (hetenten más település-együttesen) loltoznak kelyes egyves. Mimát a csökéter hinika 16 gúnya hérc szerülés (10 padékon keresztül: csökéter paca padéka) tömő mintegy 7500 kolásból tözöltölnek. Sadacér Végül azon serzők vartása, akik 1997 után hetlen csolymátrával kényszednek (így selynökben rényeztek az őrlésük hibregeiről, a szonánok csalisának jengeberségéről) együttesen 1012 adék.`

    inputHatter.type = "color";
    inputBetu.type = "color";
    inputBetu.value = "#FFFFFF";

    document.getElementById("app")!.appendChild(p);
    document.getElementById("app")!.appendChild(inputHatter);
    document.getElementById("app")!.appendChild(inputBetu);

    inputHatter.addEventListener("input", () => {
      p.style.backgroundColor = inputHatter.value;
    });
  
    inputBetu.addEventListener("input", () => {
      p.style.color = inputBetu.value;
    });

  });

});