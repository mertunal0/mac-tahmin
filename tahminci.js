class Tahminci {
    constructor(brain) {
        this.score = 0;
        this.fitness = 0;
        if (brain) {
          this.brain = brain.copy();
        } else {
          this.brain = new NeuralNetwork(3, 6, 1);
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

        console.log(output[0])
        // output değeri 0-0.4 arasındaysa ve maç 1 bitmişse, 0.4-0.6 arasındaysa ve maç 0 bitmişse,
        // 0.6-1 arasındaysa ve maç 2 bitmişse doğru tahmin yaptığını kabul edip scoreunu arttırıyoruz.
        if(output <= 0.4 && targetMac[3] == 1) this.score++;
        else if(output <= 0.6 && targetMac[3] == 0) this.score++;
        else if(output <= 1 && targetMac[3] == 2) this.score++;
    }
}