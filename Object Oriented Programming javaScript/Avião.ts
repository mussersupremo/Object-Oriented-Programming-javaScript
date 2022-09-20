class aviao{
    
    modelo: string;
    motores: number;
    altitudeMax: number;
    velocidade: string;

    sinopse()
    {
        console.log(`O avião modelo ${aeronave.modelo} tem ${aeronave.motores} motores, oq possibilitaele de alcançar a velocidade ${aeronave.velocidade} (que é 3 vezes mais rapido que o som). Além de tudo isso, ele alcança uma impressionante altitude de ${aeronave.altitudeMax}m!!`)
    }
}

const aeronave = new aviao();
aeronave.modelo = "XB-70 Valkyrie";
aeronave.motores = 6;
aeronave.altitudeMax = 23000;
aeronave.velocidade = "Mach 3"

aeronave.sinopse()