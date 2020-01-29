class Tahminci {
    constructor(brain) {
        this.score = 0;
        this.fitness = 0;
        if (brain) {
          this.brain = brain.copy();
        } else {
          this.brain = new NeuralNetwork(3, 6, 2);
        }
    }

    dispose() {
        this.brain.dispose();
    }

    mutate() {
        this.brain.mutate(0.1);
    }

    // targetMac = [evSahibiOrani, BeraberlikOrani, RakipOrani, macSonu1-0-2]
    // bu methodu her tahminci için bütün targetMaclar üstünde uygulayacağız.
    think(targetMac) {
        let inputs = [];
        inputs[0] = targetMac[0]
        inputs[1] = targetMac[1]
        inputs[2] = targetMac[2]

        let output = this.brain.predict(inputs)
        //
        if(output[0] > output[1]+0.12 && targetMac[3] == 1) this.score++;
        else if(output[1] > output[0]+0.12 && targetMac[3] == 2) this.score++;
        else if(targetMac[3] == 0) this.score++;

        if(this.score == targetMacSayisi) noLoop();
    }
}