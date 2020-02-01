let targetMaclar = [
    [1.85,2.90,3.10,1.55,1.80,1.55,1.65,2.60,1.80,3.15,2],
    [2.65,2.90,2.10,1.60,1.75,1.45,1.80,2.60,1.80,3.20,2],
    [2.45,3.10,2.15,1.85,1.55,1.30,2.05,3.75,1.80,2.30,1],
    [3.65,3.30,2.20,1.80,1.55,1.45,1.80,3.40,1.80,2.60,1],
    [1.60,3.30,3.60,1.50,1.85,1.75,1.60,2.60,1.80,3.20,0],
    [2.90,3.30,1.80,2.05,1.40,1.25,2.20,4.50,1.90,2.05,0],
    [1.55,3.25,4.00,1.75,1.60,1.45,1.80,3.40,1.80,2.60,2],
    [3.35,3.00,1.75,1.60,1.75,1.50,1.70,2.90,1.80,2.90,1],
    [1.40,3.75,4.60,1.80,1.55,1.50,1.70,3.40,1.85,2.50,1],
    [2.45,2.80,2.30,1.60,1.75,1.45,1.80,2.60,1.80,3.20,0],
    [2.30,2.90,2.40,1.85,1.50,1.30,2.05,3.40,1.80,2.40,2],
    [1.55,3.55,3.60,2.05,1.40,1.25,2.20,4.50,2.10,1.90,1],
    [2.00,3.00,2.70,1.80,1.55,1.30,2.05,3.75,1.80,2.30,1],
    [1.40,3.50,5.00,2.15,1.35,1.35,1.95,4.00,1.95,2.15,1],
    [2.50,2.90,2.50,1.65,1.70,1.45,1.80,2.90,1.80,2.90,2],
    [1.25,4.30,6.00,2.05,1.40,1.45,1.80,4.00,2.05,2.15,0],
    [4.00,3.35,1.55,1.85,1.60,1.58,1.80,3.15,1,80,3.00,2],
    [1.70,3.35,3.25,1.95,1.50,1.45,2.00,3.40,1.80,2.80,2],
    [1.90,2.75,3.20,1.48,2.05,1.80,1.60,2.30,1.75,4.10,0],
    [1.55,3.40,3.80,2.10,1.45,1.45,2.05,3.65,1.85,2.65,0],
    [2.15,2.85,2.60,1.60,1.85,1.65,1.80,2.70,1.75,3.50,0],
    [2.70,2.95,2.05,1.70,1.70,1.55,1.85,2.95,1.75,3.20,2],
    [1.65,3.20,3.65,1.80,1.65,1.58,1.85,3.25,1.80,3.00,0],
    [2.90,3.00,1.90,1.75,1.65,1.52,1.90,3.05,1.75,3.10,2],
    [1.50,3.65,3.85,2.35,1.35,1.38,2.20,4.00,1.95,2.45,0],
    [1.18,4.80,7.00,2.70,1.25,1.50,1.90,4.50,2.15,2.30,1],
    [1.45,3.40,4.50,1.80,1.65,1.65,1.75,3.05,1.75,3.05,0],
    [2.80,3.10,1.95,1.90,1.55,1.45,2.05,3.55,1.80,2.85,1],
    [1.75,3.00,3.45,1.65,1.80,2.75,1.75,3.40,1.65,1.75,0],
    [2.00,2.90,2.80,1.65,1.80,1.60,1.80,2.80,1.75,3.35,0],
    //[2.40,2.80,2.35,1.58,1.85,1.65,1.75,2.60,1.75,3.60,2],
    //[1.60,3.40,3.55,2.10,1.42,1.42,2.10,3.70,1.90,2.60,0],
    //[2.05,2.80,2.85,1.52,1.95,1.75,1.70,2.50,1.75,3.80,2],
    //[2.00,2.65,3.05,1.42,2.15,1.85,1.58,2.20,1.75,4.40,1],
    //[1.95,3.10,2.70,1.90,1.55,1.45,2.05,3.55,1.80,2.85,1],
    //[2.15,2.95,2.55,1.75,1.65,1.52,1.90,3.00,1.75,3.10,0],
    //[1.08,5.40,10.00,2.80,1.22,1.70,1.65,4.60,2.20,2.30, 1],
    //[1.80,3.05,3.15,1.75,1.70,1.55,1.85,3.00,1.75,3.15,2],
    //[2.35,2.95,2.30,1.75,1.70,1.52,1.90,3.10,1.75,3.15,0],
    //[2.70,3.05,2.00,1.85,1.60,1.48,2.00,3.15,1.80,2.95,0],
    //[1.48,3.35,4.60,1.70,1.70,1.75,1.65,2.70,1.65,2.90,1],
    //[1.65,3.30,3.50,2.00,1.50,1.48,2.00,3.40,1.75,2.55,2],
    //[1.80,3.15,3.05,1.95,1.52,1.45,2.05,3.35,1.70,2.60,0],
    //[1.70,2.90,3.75,1.50,2.00,1.85,1.58,2.20,1.65,3.60,1],
    //[1.80,3.00,3.10,1.70,1.70,1.58,1.85,2.75,1.65,2.90,1],
    //[4.25,3.25,1.52,1.70,1.70,1.70,1.70,2.75,1.65,2.95,1],
    //[1.85,3.25,2.80,2.10,1.45,1.38,2.20,3.65,1.75,2.45,1],
    //[1.75,3.15,3.30,1.85,1.58,1.50,1.95,3.15,1.70,2.70,1],
    //[1.30,3.95,5.40,2.20,1.40,1.52,1.90,3.80,1.80,2.35,2],
    //[1.90,3.00,2.90,1.75,1.65,1.55,1.90,2.85,1.65,2.85,2],
    //[1.45,3.20,5.00,1.55,1.90,1.90,1.52,2.35,1.65,3.35,1],
    //[2.75,3.00,2.00,1.85,1.58,1.48,2.00,3.15,1.70,2.70,0],
    //[1.30,3.85,5.70,2.05,1.45,1.65,1.75,3.70,1.75,2.50,1],
    //[1.85,3.10,3.00,1.90,1.55,1.45,2.00,3.25,1.70,2.65,1],
    //[3.00,2.85,1.95,1.60,1.85,1.65,1.75,2.45,1.65,3.20,2],
    //[2.35,3.00,2.30,1.85,1.58,1.45,2.00,3.15,1.70,2.70,2],
    //[1.50,3.45,4.00,2.10,1.45,1.45,2.00,3.65,1.75,2.45,1],
    //[2.05,2.90,2.70,1.65,1.80,1.60,1.80,2.55,1.65,3.10,2],
    //[1.60,3.05,4.10,1.58,1.85,1.80,1.60,2.40,1.65,3.30,1],
    //[1.45,3.60,4.40,2.05,1.45,1.50,1.95,3.60,1.75,2.45,1],
    //[3.90,3.40,1.55,1.95,1.52,1.50,1.90,3.40,1.75,2.60,0],
    //[2.75,3.05,1.95,1.95,1.52,1.42,2.05,3.35,1.70,2.60,0],
    //[1.50,3.30,4.30,1.80,1.60,1.60,1.80,3.00,1.70,2.75,1],
    //[3.25,3.15,1.75,1.90,1.55,1.48,2.00,3.30,1.70,2.60,2],
    //[1.45,3.45,4.60,1.85,1.58,1.60,1.75,3.15,1.70,2.70,1],
    //[1.50,3.40,4.30,1.85,1.58,1.58,1.80,3.15,1.70,2.70,1],
    //[3.10,3.00,1.85,1.70,1.70,1.58,1.80,2.70,1.65,2.95,0],
    //[1.38,3.65,5.25,1.80,1.60,1.70,1.65,3.00,1.70,2.75,1],
    //[1.40,3.60,4.80,1.95,1.50,1.58,1.80,3.40,1.75,2.55,1],
    //[1.52,3.30,4.25,1.75,1.65,1.65,1.75,2.85,1.65,2.85,2],
    //[1.65,3.25,3.60,1.85,1.58,1.52,1.90,3.15,1.70,2.70,2],
    //[2.65,3.00,2.05,1.85,1.58,1.48,2.00,3.20,1.70,2.65,1],
    //[1.30,3.90,5.80,1.85,1.58,1.65,1.75,3.10,1.70,2.70,1],
    //[2.25,2.80,2.55,1.52,1.95,1.70,1.70,2.30,1.65,3.45,0],
    //[2.10,2.90,2.60,1.70,1.75,1.58,1.85,2.65,1.65,3.00,0],
    //[1.80,3.00,3.25,1.75,1.70,1.58,1.85,2.80,1.65,2.90,2],
    //[2.75,2.90,2.00,1.70,1.70,1.55,1.90,2.80,1.65,2.90,2],
    //[2.25,2.90,2.40,1.70,1.70,1.55,1.90,2.75,1.65,2.95,2],
    //[2.00,3.20,2.60,2.25,1.38,1.35,2.35,4.30,1.85,2.35,0],
    //[4.80,3.65,1.40,2.00,1.50,1.58,1.85,3.45,1.75,2.55,1],
    //[1.28,4.30,5.60,2.55,1.28,1.48,2.00,5.25,1.95,2.00,1],
    //[1.42,3.55,4.70,1.95,1.50,1.58,1.85,3.40,1.75,2.55,1],
    //[1.95,2.95,2.95,1.65,1.75,1.60,1.80,2.65,1.65,3.00,1],
    //[1.70,3.05,3.50,1.70,1.75,1.65,1.75,2.65,1.65,3.00,1],
    //[2.65,2.90,2.10,1.70,1.75,1.58,1.85,2.65,1.65,3.00,2],
    //[1.95,2.95,2.85,1.70,1.70,1.55,1.85,2.75,1.65,2.95,0],
    //[2.30,3.05,2.30,1.90,1.55,1.42,2.10,3.35,1.70,2.60,1],
    //[1.35,3.75,5.40,1.95,1.52,1.70,1.70,3.30,1.70,2.60,1],
    //[1.22,4.25,6.50,2.20,1.40,1.65,1.75,3.80,1.80,2.40,1],
    //[2.30,2.85,2.40,1.65,1.80,1.60,1.80,2.55,1.65,3.10,2],
    //[1.75,3.00,3.40,1.60,1.85,1.70,1.70,2.45,1.65,3.20,1],
    //[2.80,3.20,1.90,2.00,1.50,1.45,2.10,3.50,1.75,2.55,2],
    //[3.30,2.90,1.80,1.58,1.85,1.70,1.70,2.40,1.65,3.30,2],
    //[3.20,3.10,1.75,1.85,1.58,1.50,1.95,3.15,1.70,2.70,2],
    //[1.95,3.20,2.65,2.05,1.45,1.38,2.15,3.60,1.75,2.50,2],
    //[1.48,3.30,4.50,1.70,1.70,1.75,1.65,2.70,1.65,2.95,2],
    //[2.40,3.10,2.20,1.90,1.55,1.45,2.05,3.25,1.70,2.65,0],
    //[1.95,2.95,2.75,1.80,1.60,1.50,1.95,3.05,1.70,2.75,0],
    //[2.10,2.65,2.75,1.45,2.05,1.80,1.65,2.15,1.65,3.70,1],
    //[1.38,3.70,4.30,2.30,1.35,1.45,2.05,4.40,1.85,2.30,1],
]