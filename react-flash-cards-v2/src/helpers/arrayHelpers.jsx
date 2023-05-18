export const helperShuffleArray = (array) => {
    const shuffleArray = [...array];

    for (let i = 0; i < shuffleArray.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]]
    }

    return shuffleArray;
}