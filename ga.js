function pickOne(index) {
    if (index == 0) index ++;
    if (index == savedTahminciler.length-1) index--;
    let tahminci;
    let r = random(1);
    
    //while (r > 0) {
    //    r = r - savedTahminciler[index].fitness;
    //    index++;
    //}
    
    if(r > 0.5) {    
        for(tahminci of savedTahminciler) {
            if(savedTahminciler[index].fitness > savedTahminciler[index+1].fitness && savedTahminciler[index].fitness > savedTahminciler[index-1].fitness) {
                tahminci = savedTahminciler[index]
                break;
            }
            index++;
            if(index == savedTahminciler.length-1) {
                tahminci = savedTahminciler[index/2];
                if(index/2 %2 != 0) {
                    tahminci = savedTahminciler[index/2 -0.5]
                }
                break;
            }
        }
    }
    else {   
        index = 0;
        let r = random(1);
        while (r > 0) {
            r = r - savedTahminciler[index].fitness;
            index++;
        }
        index--;
        tahminci = savedTahminciler[index]
    }

    //index--;
    //let tahminci = savedTahminciler[index];
    let child = new Tahminci(tahminci.brain);
    //child.mutate();
    return child;
}

function crossover(parent1, parent2){
    let childd;
    tf.tidy(() => {
        const weightsParent1 = parent1.brain.model.getWeights()
        const weightsParent2 = parent2.brain.model.getWeights()
        const crossedWeights = [];
        let i = weightsParent1.length/2
        if(i%2 != 0) i = i-0.5;
        for(let j = 0; j<i ; j++) {
            crossedWeights.push(weightsParent1[j])
        }
        for (; i < weightsParent1.length; i++) {
            crossedWeights.push(weightsParent2[i])
        }
        let child = new Tahminci()
        child.brain.model.setWeights(crossedWeights)
        childd = child
    });
    return childd;
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
        tahminciler[i] = pickOne(i);
    }

    let tempChilds = []
    for (let i = 0; i < savedTahminciler.length; i++) {
        if(i == savedTahminciler.length-1) {
            let tempChild = crossover(tahminciler[i], tahminciler[0])
            tempChild.mutate()
            tempChilds.push(tempChild)
        }
        else {
            let tempChild = crossover(tahminciler[i], tahminciler[i+1])
            tempChild.mutate()
            tempChilds.push(tempChild)
        }
    }
    tahminciler = tempChilds;

    for (let j = 0; j < savedTahminciler.length; j++) {
        savedTahminciler[j].dispose();
    }
    savedTahminciler = [];
}