
var uloha = "Napísať prvú kapitolu",
    dokončený = true;

var meno, priezvisko, celeMeno;

    meno = "Jan";
    priezvisko = "Novak";
    celeMeno = meno + " " + priezvisko;

var klince, srouby, material;

    klince = 155;
    srouby = 89;
    material = klince + srouby;

var d, hodiny, cas, sprava;

    d = new Date(08072021);
    hodiny = d.getHours(16);
    minuty = d.getMinutes(30);

    if (hodiny < 10) {
        hodiny = "0" + hodiny;
    } else {
        hodiny = hodiny.toString();
    }

    if (minuty < 10) {
        minuty = "0" + minuty;
    } else {
        minuty = minuty.toString();
    }

    cas = Number(hodiny + minuty);
 
    if (cas >= 0000 && cas < 1200) {
        sprava = "Dobré ráno!";
    } else if (cas >= 1200 && cas < 1700) {
        sprava = "Dobré popoludnie!";
    } else if (cas >= 1700 && cas < 2100) {
        sprava = "Dobrý večer!";
    } else if (cas >= 2100 && cas < 2359) {
        sprava = "Dobrú noc!";
    }

    alert(sprava);

var uloha1, uloha2, uloha3;
    
    uloha1 = "Zaplatiť účet za telefón.";
    uloha2 = "Napísať najpredávanejsí román.";
    uloha3 = "Ísť na prechádzku so psom.";
   

var mojePole = [];

    mojePole[0] = "Ahoj";
    mojePole[1] = "Svet";

var mojaHodnota,
    mojePole = ["Ahoj", "svet", "ja", "som", "pole"]

mojaHodnota = mojePole[3];

var yusuf, snilci;

    yusuf = [];
    snilci = ["coob", "arthur", "ariadne", "saito", "fisher"];

var snilek = snilci[0];

var yusuf;

    yusuf = [["coob", "arthur", "ariadne", "saito", "fisher"]];

var skutocnost = ["yusuf", ["arthur", ["eames", ["coob", "ariadne", "saito", "fisher"]]]];

var ulohy, uloha;

ulohy = [
    "Zaplatiť účet za telefón.",
    "Napísať najpredávanejsí román.",
    "Ísť na prechádzku so psom."
];

uloha = ulohy.splice(1, 1);
alert("Upomienka! Nezabudni: " + uloha)

var ulohy, pocet;

ulohy = [
    "Zaplatiť účet za telefón.",
    "Napísať najpredávanejsí román.",
    "Ísť na prechádzku so psom."
];

pocet = ulohy.unshift("Porazit diabla.", 
    "Vyzdvihnut oblecenie z cistiarne.");
alert("Musis splnit " + pocet + " uloh: " + ulohy.join(" ")); 

var pole1, pole2, pole3;

    pole1 = ["Zaplatiť účet za telefón."];
    pole2 = ["Napísať najpredávanejsí román."];
    pole3 = ["Ísť na prechádzku so psom."];
    pole4 = pole1.concat(pole2, pole3);

var cisla;

cisla = [4, 8, 15, 16, 23, 42];
alert("Vyhernymi cislami loterie su: " + cisla.join(", "));

var ulohy, todo, upratovanie, ostatne;

ulohy = [
    "Pustat papieroveho draka.",
    "Zachranit svet.",
    [
        "Upratat kupelnu.",
        "Upratat garaz.",
        "Vycistit si hlavu."
    ]
];

var pole = ["a", "b", "c", 100, 200, 300, [1, 2, 3], {"foo": "bar"}];

var abeceda 
abeceda = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alert("Pismeno 'm' sa nachadza na pozicii: " + abeceda.indexOf("m"));

var pole, sucet;

pole = [4, 8, 15, 16, 23, 42];
sucet = 0;

pole.forEach(function(cislo) {
    sucet = sucet + cislo
})

alert("Sucet cini: " + sucet);

var pole = [1, 2, 3, 4, 5];
var umocnene;

umocnene = pole.map(function(cislo) {
    return (cislo * cislo);
});
alert(umocnene);

var pole, jePlatne;

pole = [1, 2, 3, 4, 5];
jePlatne = pole.some(function(cislo) {
    return (cislo < 2);
});

var pole, filtrovane

pole = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filtrovane = pole.filter(function(cislo) {
    return (cislo < 5);
})

var ulohy;

ulohy = [
    "Zaplatiť účet za telefón.",
    "Napísať najpredávanejsí román.",
    "Ísť na prechádzku so psom."
];

var cislaLoterie, profil;

cislaLoterie = [4, 8, 15, 16, 23, 42];
profil = {
    krstneMeno: "Hugo",
    priezvisko: "Reyes",
    let: "Oceanic 815",
    auto: "Chevrolet Camaro"
};

var obj = {};

obj.krstneMeno = "Hugo";
obj.priezvisko = "Reyes";
alert("Ahoj, volam sa " + obj.krstneMeno + " " + obj.priezvisko + ".");

var osoba;

osoba = {};
osoba.meno = {};
osoba.meno.krstne = "Hugo";
osoba.meno.priezvisko = "Reyes";

var data, kluc;

data = {
    krstneMeno: "James",
    priezvisko: "Kirk",
    povolanie: "kapitan"
};

for (kluc in data) {
    if (data.hasOwnProperty(kluc)){
    alert(kluc + " je " + data[kluc]);
    }
}

function pozdrav(sprava) {
    alert(sprava);
}

function cau() {
    var ahoj = "ahoj";
}

function celeJmeno() {
    var krstneMeno = "Hugo";

    function vypisCeleJmeno() {
        var priezvisko = "Reyes";

        alert("Cele jmeno: " + krstneMeno + " " + priezvisko);
    }

    vypisCeleJmeno();
} 




