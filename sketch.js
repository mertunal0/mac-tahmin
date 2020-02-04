const TOTAL = 500;
let tahminciler = [];
let savedTahminciler = [];

let targetMacSayisi = targetMaclar.length;

let bestScoreEver = 0;
let generationCounter = 1;

let spaces = []
let scoresPhrases = []
// mevcut tahminciyi kaydetmek için
function keyPressed() {
  if (key === 'S') {
    let tahminci = tahminciler[0];
    saveJSON(tahminci.brain, 'tahminci.json');
  }
}


function setup() {
  tf.setBackend('cpu');

  //display edeceğimiz bilgiler için gerekli şeyleri tanımlayalım
  let scorePhrase = createP("Şu andaki jenerasyonun scoreları:")
  for(let i = 0; i < TOTAL; i++) {
    scoresPhrases[i] = createSpan("")
    if((i+1)%20 == 0) spaces[i/20] = createP("")
  }

  //popülasyonu ilkleyelim
  for (let i = 0; i < TOTAL; i++) {
    tahminciler[i] = new Tahminci();
  }
}

function draw() {
  for (let j = 0; j < tahminciler.length; j++) {
    for(let targetMac of targetMaclar) {
      tahminciler[j].think(targetMac);
    }
    if(tahminciler[j].score >= 30 && tahminciler[j].score%3==0 && tahminciler[j].score > bestScoreEver) {
      console.log("tekrar ilkleme")
      let temptahminci = tahminciler[j]
      for (let i = 0; i < TOTAL; i++) {
        tahminciler[i] = new Tahminci(temptahminci.brain);
      }
      break;
    }
    if(tahminciler[j].score >= 40 && tahminciler[j].score%2==0) {
      tahminciler[j].saveBrain();
    }
    //yükselişi görmek için en iyi scoreu hep yazdıralım.
    if(tahminciler[j].score > bestScoreEver) {
      bestScoreEver = tahminciler[j].score;
      console.log("generation: "+generationCounter+ ", current best score: "+ bestScoreEver);
    }
    //savedTahminciler.push(tahminciler.splice(j, 1)[0]);
  }
  generationCounter++;

  savedTahminciler = tahminciler;
  tahminciler = [];
  displayPhrases();
  nextGeneration();
}

function displayPhrases() {
  for(let i=0; i<savedTahminciler.length; i++) {
    scoresPhrases[i].html(" "+savedTahminciler[i].score+" - - - - ");
  }
}