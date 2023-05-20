class RandomUtils{
    public getRandomInteger(numberOfDigits: number = 5 ): number {
        const ran = Math.random();
        return Math.trunc(ran * Math.pow(10, numberOfDigits));
    }
}

export default new RandomUtils();