let kvizPodloga = document.getElementById("podloga");
let sledecePitanje = document.getElementById("sledecePitanje");
let brPitanja = document.querySelector(".brPitanja");
let prikaz = document.getElementById("prikaz");
let brPoena = document.querySelector(".brojPoena");
let ponovoIgraj = document.getElementById("ponovoIgraj");
let ukupnoPoena = document.getElementById("ukupnoPoena");
let pocetak = document.querySelector(".pocetak");
let pocetakBtn = document.getElementById("pocetakBtn");
let pitanja;
let poeni = 0;


const kvizArray = [
  {
    id: "0",
    question: "Prvi cjeloviti dokument iz oblasti ljudskih prava koji je sadržao pozitivno rješenje, da palate treba da grade najamnici, a ne robovi, je:",
    options: ["Ur-Namu", "Kirov cilindar", "Medinska povelja", "Atlantska povelja"],
    correct: "Kirov cilindar",
  },
  {
    id: "1",
    question: "Često zaboravljeni dokument islamskog svijeta iz oblasti ljudski prava koji je donijet 623.godine. To je ustav prve muslimanske države i jedan od prvih pisanih ustava na svijetu, a to je:",
    options: ["Medinska povelja", "Hamurabijev zakonik", "Medunska povelja", "Dušanov zakonik"],
    correct: "Medinska povelja",
  },
  {
    id: "2",
    question: "Najznačajniji i najbolje sačuvani klinopisni pravni spomenik drevne Mesopotamije je:",
    options: ["Ur-Namu", "Povelja o pravima", "Dušanov zakonik", "Hamurabijev zakonik"],
    correct: "Hamurabijev zakonik",
  },
  {
    id: "3",
    question: "Prvi formalnopravni dokument, koji je proklamovao i garantovao pojedina ljudska prava, kompromis između engleskog kralja i visokog plemstva, gde kralj plemićima priznaje određene privilegije i u odnosu na njih smanjuje svoju vlast., je bila engleska:",
    options: ["Deklaracija nezavisnosti", "Deklaracija prava čoveka i građanina", "Velika povelja sloboda", "Povelja o pravima"],
    correct: "Velika povelja sloboda",
  },
  {
    id: "4",
    question: "Ovaj dokument predstavlja prvih deset amandmana na ustav SAD, najstariji živi ustav na svetu:",
    options: ["Deklaracija nezavisnosti", "Međunarodna povelja prava", "Povelja o pravima(The Bill of Rights)", "Habeas Corpus Act"],
    correct: "Povelja o pravima(The Bill of Rights)",
  },
  {
    id: "5",
    question: "Savremenu međunarodnu zaštitu ljudskih prava doneo je talas strahota koje je nosio:",
    options: ["Prvi svjetski rat", "Hladni rat", "Vijetnamski rat", "Drugi svjetski rat"],
    correct: "Drugi svjetski rat",
  },
  {
    id: "6",
    question: "Ovom deklaracijom ljudska prava su utvrđena kao prirodna i neotuđiva, kao temelj demokratskog konstituisanja i vršenja vlasti.Trinaest američkih zemalja u procesu osamostaljenja od engleske kolonijalne vlasti usvojilo ju je 4.jula 1776.godine. To je:",
    options: ["Deklaracija prava čoveka i građanina", "Deklaracija nezavisnosti", "Francuska Deklaracija o pravima čoveka", "Univerzalna deklaracija o pravima čoveka"],
    correct: "Deklaracija nezavisnosti",
  },
  {
    id: "7",
    question: "Kada i gdje se usvaja Deklaracija o ukidanju trgovine robjem?",
    options: ["Pariski kongres, 1856.", "Berlinski kongres, 1878.", "Konferencija mira u Beču, 1815.", "Konferencija mira u Parizu, 1919."],
    correct: "Konferencija mira u Beču, 1815.",
  },
  {
    id: "8",
    question: "Postavila je temelje i osnovne konture Ujedinjenih nacija, kao i uređenja savremenog sveta stavljajući u prvi plan prava čoveka. Ovom deklaracijom, 26 zemalja obavezalo se da nastave borbu protiv sile Osovine do konačne pobede, kao bitne pretpostavke za odbranu života, slobode i verske slobode, kao i za očuvanje prava čoveka u njihovim, kao i u ostalim zemljama:",
    options: ["Atlantska povelja", "Vajmarski ustav", "Povelja Ujedinjenih nacija", "Vašingtonska deklaracija"],
    correct: "Vašingtonska deklaracija",
  },
  {
    id: "9",
    question: "Poslužila je kao bazični dokument za osnivanje brojnih međunarodnih organizacija u okviru Ujedinjenih nacija koje se na konkretan i operativan način bave propisivanjem, garancijom, i zaštitiom ljudskih prava.Kada je usvojen jedan od najznačajnijih dokumenata u oblasti ljudskih prava moderne ere, i koji je to dokument?",
    options: ["Povelja Ujedinjenih nacija, 26.06.1945.", "Povelja Ujedinjenih nacija, 25.06.1945.", "Evropska konvencija za zaštitu ljudskih prava i osnovnih sloboda,10.05.1943.", "Univerzalna deklaracija o pravima čoveka, 21.01.1946."],
    correct: "Povelja Ujedinjenih nacija, 26.06.1945.",
  },
  {
    id: "10",
    question: "Univerzalna deklaracija o pravima čoveka usvojena je: ",
    options: ["25.02.1966.", "10.12.1948.", "15.04.1947.", "29.11.1948."],
    correct: "10.12.1948.",
  },
  {
    id: "11",
    question: "Polazište Univerzalne deklaracije jeste:",
    options: ["Sva ljudska bića se rađaju jednaka u dostojanstvu i pravima", "Cilj opravdava sredstvo", "Ljudi se rađaju i žive slobodni i jednaki u pravima", "Smatramo očiglednim istinama da su ljudi stvoreni jednaki i da ih je Tvorac obdario neotuđivim pravima, među koja spadaju život, sloboda i traženje sreće."],
    correct: "Sva ljudska bića se rađaju jednaka u dostojanstvu i pravima",
  },
  {
    id: "12",
    question: "Na evropskom tlu, kao regionalni mehanizam zaštite ljudskih prava poseban značaj ima dokument potpisan od strane 13 članica Saveta Evrope u Rimu 04.11.1950. To je:",
    options: ["Evropska konvencija za zaštitu ljudskih prava i osnovnih sloboda", "Međunarodni pakt o građanskim i političkim pravima", "Međunarodni pakt o ekonomskim, socijalnim i kulturnim pravima", "Evropska socijalna povelja"],
    correct: "Evropska konvencija za zaštitu ljudskih prava i osnovnih sloboda",
  },
  {
    id: "13",
    question: "Velika povelja sloboda je potpisana:",
    options: ["14.06.1215. od strane Džordža III", "12.06.1215. od strane Jovana bez Zemlje", "15.06.1215. od strane Jovana bez Zemlje", "01.06.1215. od strane Ričarda I Lavlje Srce"],
    correct: "15.06.1215. od strane Jovana bez Zemlje",
  },
  {
    id: "14",
    question: "\"Prava žena su muške dužnosti\" rekao je:",
    options: ["Karl Marks", "Karl Kraus", "Konrad Adenauer", "Kofi Annan"],
    correct: "Karl Kraus",
  },
  {
    id: "15",
    question: "\"Ljudska prava temelje se na ljudskom dostojanstvu. Ljudsko dostojanstvo je ideal za koji se vrijedi boriti i umrijeti.\" citat je: ",
    options: ["Getea", "Žan Žak Rusoa", "Nelsona Mandele", "Roberta Mejnarda Hatčinsa"],
    correct: "Roberta Mejnarda Hatčinsa",
  },
  {
    id: "16",
    question: "Koje dvije revolucije sadrže koncepte prirodnog prava i predstavljaju prekretnicu u oblasti ljudskih prava?",
    options: ["Proljeće naroda(1848) i Industrijska revolucija(1760-1840)", "Francuska revolucija(1789) i Američka(1776)", "Američka revolucija(1776) i Oktobarska revolucija(1917)", "Februarska revolucija(1917) i Jogurt revolucija(1988)"],
    correct: "Francuska revolucija(1789) i Američka(1776)",
  },
  {
    id: "17",
    question: "Od koje godine žene imaju pravo glasa u svakoj državi svijeta?",
    options: ["2005.", "1999.", "2015.", "1998."],
    correct: "2015.",
  },
  {
    id: "18",
    question: "1893. jedna zemlja je prva dozvolila ženama da glasaju,a to je?",
    options: ["Novi Zeland", "SAD", "Rusija", "Finska"],
    correct: "Novi Zeland",
  },
  {
    id: "19",
    question: "Kada su žene u Crnoj Gori dobile pravo glasa?",
    options: ["15.08.1998.", "12.08.1945.", "11.11.1975.", "15.08.2000."],
    correct: "12.08.1945.",
  }
];

ponovoIgraj.addEventListener("click", () => {
  osnove();
  prikaz.classList.remove("hide"); 
  brPoena.classList.add("hide");
});

sledecePitanje.addEventListener("click",
  (displayNext = () => {
    pitanja += 1;
    if (pitanja == kvizArray.length)  { //ako je posljednje pitanje
      prikaz.classList.add("hide");  //prikazuju se poeni, ostalo nestaje
      brPoena.classList.remove("hide");
      ukupnoPoena.innerHTML = "Osvojeni poeni: " + poeni + " od " + pitanja;
    } else {
      brPitanja.innerHTML = pitanja + 1 + "." + " od " + kvizArray.length + " pitanja";
      prikaziKviz(pitanja);
    }
  })
);

const prikaziKviz = (pitanja) => {
  let slajd = document.querySelectorAll(".container-mid");
  slajd.forEach((card) => {
    card.classList.add("hide");
  });
  slajd[pitanja].classList.remove("hide");
};

function osnoveKviza() {
  kvizArray.sort(() => Math.random() - 0.5); //nasumicna pitanja

  for (let i of kvizArray) {
    i.options.sort(() => Math.random() - 0.5); // nasumicne opcije odgovora
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    brPitanja.innerHTML = 1 + " od " + kvizArray.length + " pitanja";
  
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="provjeraOdgovora(this)">${i.options[0]}</button>
     <button class="option-div" onclick="provjeraOdgovora(this)">${i.options[1]}</button>
      <button class="option-div" onclick="provjeraOdgovora(this)">${i.options[2]}</button>
       <button class="option-div" onclick="provjeraOdgovora(this)">${i.options[3]}</button>
    `;
    kvizPodloga.appendChild(div);
  }
}

function provjeraOdgovora(userOption) {
  let odgovor = userOption.innerText;
  let pitanje =
    document.getElementsByClassName("container-mid")[pitanja];
  let opcije = pitanje.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (odgovor === kvizArray[pitanja].correct) {
    userOption.classList.add("correct");
    poeni++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    opcije.forEach((element) => {
      if (element.innerText == kvizArray[pitanja].correct) {
        element.classList.add("correct");
      }
    });
  }

  opcije.forEach((element) => {
    element.disabled = true; //samo jednom izabrati odgovor
  });
}

function osnove() {
  kvizPodloga.innerHTML = "";
  pitanja = 0;
  poeni = 0;
  osnoveKviza();
  prikaziKviz(pitanja);
}

pocetakBtn.addEventListener("click", () => {
  pocetak.classList.add("hide");
  prikaz.classList.remove("hide");
  osnove();
});

window.onload = () => {
  pocetak.classList.remove("hide");
  prikaz.classList.add("hide");
};
