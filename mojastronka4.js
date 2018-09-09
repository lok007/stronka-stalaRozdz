function changeMid(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace(".jpg",'prim.jpg');
    plik.src = x;
}

function changeMid2(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace("prim.jpg",'.jpg');
    plik.src = x;
}


function ustawslajdEureka(numer){
    $("#sliderEureka").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"eureka/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderEureka").innerHTML = plik;
    $("#sliderEureka").fadeIn(800);

}

function ustawslajdNK(numer){
    $("#sliderNK").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"NoweKolibki/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderNK").innerHTML = plik;
    $("#sliderNK").fadeIn(800);

}

function ustawslajdTuwima(numer){
    $("#sliderTuwima").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"usterki/tuwima/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderTuwima").innerHTML = plik;
    $("#sliderTuwima").fadeIn(800);

}

function ustawslajdStraz(numer){
    $("#sliderStraz").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"usterki/straz/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderStraz").innerHTML = plik;
    $("#sliderStraz").fadeIn(800);

}

function ustawslajdKPRP(numer){
    $("#sliderKPRP").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"KPRP/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderKPRP").innerHTML = plik;
    $("#sliderKPRP").fadeIn(800);

}
function ustawslajdRycerska(numer){
    $("#sliderRycerska").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"rycerska/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderRycerska").innerHTML = plik;
    $("#sliderRycerska").fadeIn(800);

}

function ustawslajdMalbork(numer){
    $("#sliderMalbork").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"malbork/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderMalbork").innerHTML = plik;
    $("#sliderMalbork").fadeIn(800);

}

function ustawslajdPS(numer){
    $("#sliderPS").fadeOut(0);
    var plik = "<img class =\"sliders\" src=\"polswed/slajd" + numer + ".jpg\" />";
    document.getElementById("sliderPS").innerHTML = plik;
    $("#sliderPS").fadeIn(800);

}

function ustawslajdZlobek(numer){
    if(numer==1){
        $("#sliderZlobek").fadeOut(0);
        var plik = "<iframe class=\"sliders\" src=\"https://www.youtube.com/embed/2u9O37tTQ-Y\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        document.getElementById("sliderZlobek").innerHTML = plik;
        $("#sliderZlobek").fadeIn(800);}
    else {
        $("#sliderZlobek").fadeOut(0);
        var plik = "<img class =\"sliders\" src=\"usterki/zlobek/slajd" + numer + ".jpg\" />";
        document.getElementById("sliderZlobek").innerHTML = plik;
        $("#sliderZlobek").fadeIn(800);
    }
}


$(document).ready(function(){
    $("#rozwinUsterki").click(function(){
        $("#containerUsterki").slideToggle();
    });
});

$(document).ready(function(){
    $("#rozwinIK").click(function(){
        $("#containerIK").slideToggle();
    });
});

$(document).ready(function(){
    $("#rozwinPS").click(function(){
        $("#containerPS").slideToggle();
    });
});

function nextPic(elementId, elementId2){
    var plik2 = document.getElementById(elementId2);
    var last = plik2.lastChild;
    var last1 = last.firstChild;;
    var lastsrc = last1.src
    var lastnr = lastsrc.slice(lastsrc.length-6, lastsrc.length-4);
    var plik = document.getElementById(elementId).firstChild;
    var x = plik.src;
    var y = x.slice(x.length-6, x.length-4);

    if (isNaN(y)){
        var y = x.slice(x.length-5, x.length-4);
    }
    else {var y = x.slice(x.length-6, x.length-4); }
    var n = Number(y);
    if(n==lastnr){
        n=0;
    }
    var z = n+1;
    x = x.replace(""+y+".jpg",""+z+".jpg");
    plik.src = x;
}

function previousPic(elementId, elementId2){
    var plik2 = document.getElementById(elementId2);
    var last = plik2.lastChild;
    var last1 = last.firstChild;
    var lastsrc = last1.src
    var lastnr = lastsrc.slice(lastsrc.length-6, lastsrc.length-4);
    var lastnr1 = Number(lastnr)+1;
    var plik = document.getElementById(elementId).firstChild;
    var x = plik.src;
    var y = x.slice(x.length-6, x.length-4);
    if (isNaN(y)){
        var y = x.slice(x.length-5, x.length-4);
    }
    else {var y = x.slice(x.length-6, x.length-4); }
    var n = Number(y);
    if(n==1){
        n=lastnr1;
    }
    var z = n-1;
    x = x.replace(""+y+".jpg",""+z+".jpg");
    plik.src = x;
}

function changeMid(bud){
    var plik = document.getElementById(bud);
    var x = plik.src;
    x = x.replace(".jpg",'prim.jpg');
    plik.src = x;
}




function showUsterki(bud){
    $("#containerUsterki").fadeOut(0);
    if (bud=='zlobek'){
        let plik = "<h4 class='text1'>Gmina Luzino-Budowa Żłobka w systemie Zaprojektuj i Wykonaj</h4>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu </b></p>"+
            "<div id='containerZlobek'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdZlobek(1)\"><img class=\"mini\" src=\"usterki/zlobek/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdZlobek(2)\"><img class=\"mini\" src=\"usterki/zlobek/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdZlobek(3)\"><img class=\"mini\" src=\"usterki/zlobek/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdZlobek(4)\"><img class=\"mini\" src=\"usterki/zlobek/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdZlobek(5)\"><img class=\"mini\" src=\"usterki/zlobek/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdZlobek(6)\"><img class=\"mini\" src=\"usterki/zlobek/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdZlobek(7)\"><img class=\"mini\" src=\"usterki/zlobek/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdZlobek(8)\"><img class=\"mini\" src=\"usterki/zlobek/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdZlobek(9)\"><img class=\"mini\" src=\"usterki/zlobek/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdZlobek(10)\"><img class=\"mini\" src=\"usterki/zlobek/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderZlobek\", \"containerZlobek\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderZlobek\" ><img class=\"sliders\" src=\"usterki/zlobek/slajd1.jpg\" alt=\"slajd1\"></div></div><img onclick='nextPic(\"sliderZlobek\", \"containerZlobek\")' class='cursor' src='right.png' alt='right'>"+
            "<iframe id='yt' class=\"sliders\" src=\"https://www.youtube.com/embed/2u9O37tTQ-Y\" frameborder=\"0\"" +
            " allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
            document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='tuwima'){
        let plik = "<h4 class='text1'>Kamienica w Gdańsku, ul. Tuwima</h4>"+
            "<p class='text'>Obiekt został wybudowany w 1907r. wg projektu architekta Georga Froese. Posiada dwie kondygnacje nadziemne," +
            " użytkowe poddasze i jest w całości podpiwniczony. Kamienica została wybudowana w stylu klasycyzującym," +
            " z charakterystyczną trzykondygnacyjną werandą od frontu oraz bogatym wystrojem elewacji frontowej, wykonanym w drewnie. </p>"+
            "<p class='text'>W trakcie prac budynek został niemal w całości rozebrany z uwagi na duże zdewastowanie." +
            " Pozostawiona została  jedynie frontowa część z dekoracyjną elewacją, która poddana została zabiegom konserwatorskim." +
            " Obiekt został odtworzony z dokonaniem niewielkich korekt, wynikających z przyjętej funkcji budynku zamieszkania zbiorowego oraz z zapisów w planie dotyczących parkowania samochodów.</p>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu</b></p>"+
            "<div id='containerTuwima'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdTuwima(1)\"><img class=\"mini\" src=\"usterki/tuwima/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdTuwima(2)\"><img class=\"mini\" src=\"usterki/tuwima/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdTuwima(3)\"><img class=\"mini\" src=\"usterki/tuwima/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdTuwima(4)\"><img class=\"mini\" src=\"usterki/tuwima/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdTuwima(5)\"><img class=\"mini\" src=\"usterki/tuwima/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdTuwima(6)\"><img class=\"mini\" src=\"usterki/tuwima/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdTuwima(7)\"><img class=\"mini\" src=\"usterki/tuwima/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdTuwima(8)\"><img class=\"mini\" src=\"usterki/tuwima/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdTuwima(9)\"><img class=\"mini\" src=\"usterki/tuwima/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdTuwima(10)\"><img class=\"mini\" src=\"usterki/tuwima/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderTuwima\", \"containerTuwima\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderTuwima\" ><img class =\"sliders\" src=\"usterki/tuwima/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderTuwima\", \"containerTuwima\")' class='cursor' src='right.png' alt='right'>";
            document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='straz'){
        let plik = "<h4 class='text1'>Ochotnicza Straż Pożarna W Żukowie</h4>"+
            "<p class='text'> Wybudowany obiekt łączy trzy funkcje: Remiza Ochotniczej Straży Pożarnej, Pogotowie Ratunkowe oraz Centrum Zarządzania Kryzysowego.</p>"+
            "<p class='text'>Budynek jest dwukondygnacyjny z górującą ponad nim wieżą strażacką. Forma architektoniczna budynku jest prosta, spójna, minimalna i zarazem nowoczesna," +
            " dostosowana kolorystycznie do istniejącej zabudowy i czytelnej funkcji.</p>"+
            "<p class='text'>Obiekt wykonany jest w technologii tradycyjnej, murowanej o układzie zewnętrznych ścian konstrukcyjnych ze stropami żelbetowymi kanałowymi nad poziomem piwnicy," +
            " parteru oraz pięter, przykryty dachem dwuspadowym o konstrukcji drewnianej. Posadowienie na żelbetowych ławach i stopach fundamentowych pod ścianami i kominami.</p>"+
            "<p class='text'><b> Zakres obowiązków: Obsługa usterkowa obiektu </b></p>"+
            "<div id='containerStraz'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdStraz(1)\"><img class=\"mini\" src=\"usterki/straz/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdStraz(2)\"><img class=\"mini\" src=\"usterki/straz/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdStraz(3)\"><img class=\"mini\" src=\"usterki/straz/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdStraz(4)\"><img class=\"mini\" src=\"usterki/straz/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdStraz(5)\"><img class=\"mini\" src=\"usterki/straz/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdStraz(6)\"><img class=\"mini\" src=\"usterki/straz/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdStraz(7)\"><img class=\"mini\" src=\"usterki/straz/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdStraz(8)\"><img class=\"mini\" src=\"usterki/straz/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdStraz(9)\"><img class=\"mini\" src=\"usterki/straz/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdStraz(10)\"><img class=\"mini\" src=\"usterki/straz/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderStraz\", \"containerStraz\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderStraz\" ><img class =\"sliders\" src=\"usterki/straz/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderStraz\", \"containerStraz\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='eureka'){
        let plik = "<h4 class='text1'>Centrum Szkoleniowo-Rehabilitacyjne Eureka</h4>"+
            "<p class='text'>Remont obiektu o charakterze zabytkowym.</p>"+
            "<p class='text'>Centrum Szkoleniowo-Rehabilitacyjne „EUREKA” będzie pełniło funkcje szkoleniowo-konferencyjne, hotelowe, gastronomiczne z funkcją hotelową i rehabilitacyjne.\n" +
            "Obiekt o charakterze zabytkowym zyskał nowe oblicze i tym samym stanowić bedzie ozdobę pasa nadmorskiego..</p>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerEureka' class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdEureka(1)\"><img class=\"mini\" src=\"eureka/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdEureka(2)\"><img class=\"mini\" src=\"eureka/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdEureka(3)\"><img class=\"mini\" src=\"eureka/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdEureka(4)\"><img class=\"mini\" src=\"eureka/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdEureka(5)\"><img class=\"mini\" src=\"eureka/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdEureka(6)\"><img class=\"mini\" src=\"eureka/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdEureka(7)\"><img class=\"mini\" src=\"eureka/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdEureka(8)\"><img class=\"mini\" src=\"eureka/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdEureka(9)\"><img class=\"mini\" src=\"eureka/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdEureka(10)\"><img class=\"mini\" src=\"eureka/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdEureka(11)\"><img class=\"mini\" src=\"eureka/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdEureka(12)\"><img class=\"mini\" src=\"eureka/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdEureka(13)\"><img class=\"mini\" src=\"eureka/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdEureka(14)\"><img class=\"mini\" src=\"eureka/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderEureka\", \"containerEureka\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderEureka\" ><img class =\"sliders\" src=\"eureka/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderEureka\", \"containerEureka\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }

    if (bud=='KPRP'){
        let plik = "<h4 class='text1'>Remont wybranych pomieszczeń budynku Kancelarii Prezydenta RP</h4>"+
            "<p class='text'>Remont wybranych pomieszczeń budynku Kancelarii Prezydenta RP w zakresie aranżacji powierzchni biurowej parteru Biura Interwencyjnej Pomocy Prawnej, ul. Frascati 2, Warszawa.</p>"+
            "<p class='text'><b> Zakres obowiązków: Kierownik Robót </b></p>"+
            "<div id='containerKPRP'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdKPRP(1)\"><img class=\"mini\" src=\"KPRP/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdKPRP(2)\"><img class=\"mini\" src=\"KPRP/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdKPRP(3)\"><img class=\"mini\" src=\"KPRP/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdKPRP(4)\"><img class=\"mini\" src=\"KPRP/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdKPRP(5)\"><img class=\"mini\" src=\"KPRP/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdKPRP(6)\"><img class=\"mini\" src=\"KPRP/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdKPRP(7)\"><img class=\"mini\" src=\"KPRP/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdKPRP(8)\"><img class=\"mini\" src=\"KPRP/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdKPRP(9)\"><img class=\"mini\" src=\"KPRP/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdKPRP(10)\"><img class=\"mini\" src=\"KPRP/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdKPRP(11)\"><img class=\"mini\" src=\"KPRP/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdKPRP(12)\"><img class=\"mini\" src=\"KPRP/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdKPRP(13)\"><img class=\"mini\" src=\"KPRP/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdKPRP(14)\"><img class=\"mini\" src=\"KPRP/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdKPRP(15)\"><img class=\"mini\" src=\"KPRP/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdKPRP(16)\"><img class=\"mini\" src=\"KPRP/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderKPRP\", \"containerKPRP\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderKPRP\" ><img class =\"sliders\" src=\"KPRP/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderKPRP\", \"containerKPRP\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }

    if (bud=='rycerska'){
        let plik ="<h4 class='text1'>Kamienica przy ul. Rycerskiej w Gdańsku</h4>"+
            "<p class='text'>Obiekt zabytkowy który powstał w latach siedemdziesiątych XVII. Prace remontowe obejmowały: </p>"+
            "<p class='text'>- wzmocnienie istaniejących elementów nośnych <br>- wykonanie wanny żelbetowej pod budynkiem w celu zwiększenia wysokości kondygnacji podziemnej <br>" +
            "- przemurowanie istniejących stropów Kleina, wzmocnienie elementów nośnych budynków różnymi technologiami <br>- wymiana konstrukcji dachu <br>- liczne prace konserwatorskie</p>"+
            "<p class='text'><b> Zakres obowiązków: Kierownik Robót</b></p>"+
            "<div id='containerRycerska'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdRycerska(1)\"><img class=\"mini\" src=\"rycerska/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdRycerska(2)\"><img class=\"mini\" src=\"rycerska/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdRycerska(3)\"><img class=\"mini\" src=\"rycerska/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdRycerska(4)\"><img class=\"mini\" src=\"rycerska/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdRycerska(5)\"><img class=\"mini\" src=\"rycerska/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdRycerska(6)\"><img class=\"mini\" src=\"rycerska/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdRycerska(7)\"><img class=\"mini\" src=\"rycerska/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdRycerska(8)\"><img class=\"mini\" src=\"rycerska/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdRycerska(9)\"><img class=\"mini\" src=\"rycerska/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdRycerska(10)\"><img class=\"mini\" src=\"rycerska/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdRycerska(11)\"><img class=\"mini\" src=\"rycerska/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdRycerska(12)\"><img class=\"mini\" src=\"rycerska/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdRycerska(13)\"><img class=\"mini\" src=\"rycerska/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdRycerska(14)\"><img class=\"mini\" src=\"rycerska/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdRycerska(15)\"><img class=\"mini\" src=\"rycerska/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdRycerska(16)\"><img class=\"mini\" src=\"rycerska/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "<span onclick=\"ustawslajdRycerska(17)\"><img class=\"mini\" src=\"rycerska/slajd17.jpg\" alt=\"slajd17\"></span>"+
            "<span onclick=\"ustawslajdRycerska(18)\"><img class=\"mini\" src=\"rycerska/slajd18.jpg\" alt=\"slajd18\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderRycerska\", \"containerRycerska\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderRycerska\" ><img class =\"sliders\" src=\"rycerska/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderRycerska\", \"containerRycerska\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
    if (bud=='malbork'){
        let plik = "<h4 class='text1'>Gmina Malbork - Rozbudowa Szkoły</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerMalbork'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdMalbork(1)\"><img class=\"mini\" src=\"malbork/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdMalbork(2)\"><img class=\"mini\" src=\"malbork/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdMalbork(3)\"><img class=\"mini\" src=\"malbork/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdMalbork(4)\"><img class=\"mini\" src=\"malbork/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdMalbork(5)\"><img class=\"mini\" src=\"malbork/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdMalbork(6)\"><img class=\"mini\" src=\"malbork/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdMalbork(7)\"><img class=\"mini\" src=\"malbork/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdMalbork(8)\"><img class=\"mini\" src=\"malbork/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdMalbork(9)\"><img class=\"mini\" src=\"malbork/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdMalbork(10)\"><img class=\"mini\" src=\"malbork/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdMalbork(11)\"><img class=\"mini\" src=\"malbork/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderMalbork\", \"containerMalbork\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderMalbork\" ><img class =\"sliders\" src=\"malbork/slajd1.jpg\" /></div></div><img  onclick='nextPic(\"sliderMalbork\", \"containerMalbork\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerUsterki").innerHTML = plik;
    }
    $("#containerUsterki").fadeIn(800);
}

function showIK(bud){
    $("#containerIK").fadeOut(0);
    if (bud=='NoweKolibki'){
        let plik = "<h4 class='text1'>Osiedle mieszkaniowe 'Nowe Kolibki'</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerNK'  class=\"img_containerNK\">"+
            "<span onclick=\"ustawslajdNK(1)\"><img class=\"mini\" src=\"NoweKolibki/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdNK(2)\"><img class=\"mini\" src=\"NoweKolibki/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdNK(3)\"><img class=\"mini\" src=\"NoweKolibki/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdNK(4)\"><img class=\"mini\" src=\"NoweKolibki/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdNK(5)\"><img class=\"mini\" src=\"NoweKolibki/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdNK(6)\"><img class=\"mini\" src=\"NoweKolibki/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdNK(7)\"><img class=\"mini\" src=\"NoweKolibki/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdNK(8)\"><img class=\"mini\" src=\"NoweKolibki/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdNK(9)\"><img class=\"mini\" src=\"NoweKolibki/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdNK(10)\"><img class=\"mini\" src=\"NoweKolibki/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderNK\", \"containerNK\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderNK\" ><img class =\"sliders\" src=\"NoweKolibki/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderNK\", \"containerNK\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerIK").innerHTML = plik;
    }
    $("#containerIK").fadeIn(800);
}
function showPS(bud){
    $("#containerPS").fadeOut(0);
    if (bud=='polswed'){
        let plik = "<h4 class='text1'>Centrum Handlowo-Usługowe, Gdańsk Chełm</h4>"+
            "<p class='text'><b> Zakres obowiązków: Inżynier Budowy </b></p>"+
            "<div id='containerPolSwed'  class=\"img_containerPS\">"+
            "<span onclick=\"ustawslajdPS(1)\"><img class=\"mini\" src=\"polswed/slajd1.jpg\" alt=\"slajd1\"></span>"+
            "<span onclick=\"ustawslajdPS(2)\"><img class=\"mini\" src=\"polswed/slajd2.jpg\" alt=\"slajd2\"></span>"+
            "<span onclick=\"ustawslajdPS(3)\"><img class=\"mini\" src=\"polswed/slajd3.jpg\" alt=\"slajd3\"></span>"+
            "<span onclick=\"ustawslajdPS(4)\"><img class=\"mini\" src=\"polswed/slajd4.jpg\" alt=\"slajd4\"></span>"+
            "<span onclick=\"ustawslajdPS(5)\"><img class=\"mini\" src=\"polswed/slajd5.jpg\" alt=\"slajd5\"></span>"+
            "<span onclick=\"ustawslajdPS(6)\"><img class=\"mini\" src=\"polswed/slajd6.jpg\" alt=\"slajd6\"></span>"+
            "<span onclick=\"ustawslajdPS(7)\"><img class=\"mini\" src=\"polswed/slajd7.jpg\" alt=\"slajd7\"></span>"+
            "<span onclick=\"ustawslajdPS(8)\"><img class=\"mini\" src=\"polswed/slajd8.jpg\" alt=\"slajd8\"></span>"+
            "<span onclick=\"ustawslajdPS(9)\"><img class=\"mini\" src=\"polswed/slajd9.jpg\" alt=\"slajd9\"></span>"+
            "<span onclick=\"ustawslajdPS(10)\"><img class=\"mini\" src=\"polswed/slajd10.jpg\" alt=\"slajd10\"></span>"+
            "<span onclick=\"ustawslajdPS(11)\"><img class=\"mini\" src=\"polswed/slajd11.jpg\" alt=\"slajd11\"></span>"+
            "<span onclick=\"ustawslajdPS(12)\"><img class=\"mini\" src=\"polswed/slajd12.jpg\" alt=\"slajd12\"></span>"+
            "<span onclick=\"ustawslajdPS(13)\"><img class=\"mini\" src=\"polswed/slajd13.jpg\" alt=\"slajd13\"></span>"+
            "<span onclick=\"ustawslajdPS(14)\"><img class=\"mini\" src=\"polswed/slajd14.jpg\" alt=\"slajd14\"></span>"+
            "<span onclick=\"ustawslajdPS(15)\"><img class=\"mini\" src=\"polswed/slajd15.jpg\" alt=\"slajd15\"></span>"+
            "<span onclick=\"ustawslajdPS(16)\"><img class=\"mini\" src=\"polswed/slajd16.jpg\" alt=\"slajd16\"></span>"+
            "<span onclick=\"ustawslajdPS(17)\"><img class=\"mini\" src=\"polswed/slajd17.jpg\" alt=\"slajd17\"></span>"+
            "<span onclick=\"ustawslajdPS(18)\"><img class=\"mini\" src=\"polswed/slajd18.jpg\" alt=\"slajd18\"></span>"+
            "<span onclick=\"ustawslajdPS(19)\"><img class=\"mini\" src=\"polswed/slajd19.jpg\" alt=\"slajd19\"></span>"+
            "</div>"+
            "<img onclick='previousPic(\"sliderPS\", \"containerPolSwed\")' class='cursor' src='left.png' alt='left'><div class=\"frameNK\"><div  id=\"sliderPS\" ><img class =\"sliders\" src=\"polswed/slajd1.jpg\" /></div></div><img onclick='nextPic(\"sliderPS\", \"containerPolSwed\")' class='cursor' src='right.png' alt='right'>";
        document.getElementById("containerPS").innerHTML = plik;
    }
    $("#containerPS").fadeIn(800);
}
