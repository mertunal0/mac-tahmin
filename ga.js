function pickOne() {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - savedTahminciler[index].fitness;
        index++;
    }
    index--;
    let tahminci = savedTahminciler[index];
    let child = new Tahminci(tahminci.brain);
    child.mutate();
    return child;
}

function calculateFitness() {
    let sum = 0;
    for (let tahminci of savedTahminciler) {
        sum += tahminci.score;
    }
    for (let tahminci of savedTahminciler) {
        tahminci.fitness = tahminci.score / sum;
    }
}

function nextGeneration() {
    calculateFitness();
    for (let i = 0; i < savedTahminciler.length; i++) {
        tahminciler[i] = pickOne();
    }
    for (let j = 0; j < savedTahminciler.length; j++) {
        savedTahminciler[j].dispose();
    }
    savedTahminciler = [];
}