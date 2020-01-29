const TOTAL = 300;
let tahminciler = [];
let savedTahminciler = [];
var counter = 0;
let targetMaclar = [
  [1.10, 2.05, 2.50, 1],
  [1.30, 3.20, 3.50, 0],
  [1.55, 2.40, 4.55, 2],
  [1.70, 3.65, 2.50, 1],
  [1.90, 2.80, 1.50, 0],
  [1.85, 3.30, 2.55, 2],
  [1.60, 2.15, 4.50, 1],
  [1.40, 5.50, 3.50, 0],
  [1.25, 2.70, 2.55, 2],

  [2.10, 3.95, 4.50, 1],
  [2.10, 3.05, 3.50, 1],
  [2.30, 4.20, 4.50, 0],
  [2.55, 3.40, 3.55, 2],
  [2.70, 4.65, 3.50, 1],
  [2.90, 3.80, 4.50, 0],
  [2.85, 4.30, 3.55, 2],
  [2.60, 3.15, 5.50, 1],
  [2.40, 6.50, 2.50, 0],
  [2.25, 3.70, 3.55, 2],
  [3.10, 4.95, 4.50, 1],
]

let targetMacSayisi = targetMaclar.length;

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
    if(tahminciler[j].score > 17) {
      saveJSON(tahminci[j].brain, 'tahminci.json');
      noLoop();
    }
    //savedTahminciler.push(tahminciler.splice(j, 1)[0]);
  }
  savedTahminciler = tahminciler;
  tahminciler = [];
  displayPhrases();
  nextGeneration();

  counter++;
  if(counter%500 == 0) console.log(counter);
}

function displayPhrases() {
  for(let i=0; i<savedTahminciler.length; i++) {
    scoresPhrases[i].html(" "+savedTahminciler[i].score+" - - - ");
  }
}