class Tahminci {
    constructor(brain) {
        this.score = 0;
        this.fitness = 0;
        if (brain) {
          this.brain = brain.copy();
        } else {
          this.brain = new NeuralNetwork(5, 6, 2);
        }
    }

    dispose() {
        this.brain.dispose();
    }

    saveBrain() {
      console.log(this)
      if (this.score == 50)
        noLoop();
    }

    mutate() {
        this.brain.mutate(0.3);
    }

    // targetMac = [evSahibiOrani, BeraberlikOrani, RakipOrani, macSonu1-0-2]
    // bu methodu her tahminci için bütün targetMaclar üstünde uygulayacağız.
    think(targetMac) {
        let inputs = [];
        inputs[0] = targetMac[0]
        inputs[1] = targetMac[1]
        inputs[2] = targetMac[2]
        inputs[3] = targetMac[3]
        inputs[4] = targetMac[4]
        //inputs[5] = targetMac[5]
        //inputs[6] = targetMac[6]
        //inputs[7] = targetMac[7]
        //inputs[8] = targetMac[8]
        //inputs[9] = targetMac[9]

        let output = this.brain.predict(inputs)
        //
        if(output[0] > output[1]+0.12 && targetMac[10] == 1) this.score++;
        else if(output[1] > output[0]+0.12 && targetMac[10] == 2) this.score++;
        else if(targetMac[3] == 0) this.score++;
    }
}