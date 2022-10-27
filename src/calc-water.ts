export const maxHeight = 32000;

const validate = (landscape: number[]) => {
    if (landscape.length > maxHeight) {
        throw new Error(`Landscape should not contain more than ${maxHeight} elements!`);
    }

    for (const height of landscape) {
        if (height < 0) {
            throw new Error("Landscape heights should not be negative!");
        }

        if (height > maxHeight) {
            throw new Error(`Landscape heights should not be higher than ${maxHeight}!`);
        }
    }
}

type Pit = [number, number];
const getPitsLeft = (landscape: number[], maxIndex: number, pits: Pit[] = []): Pit[] => {
    if (maxIndex === 0) {
        return pits;
    }

    const maxIndex2 = getMaxIndex(landscape, 0, maxIndex);
    if (Math.abs(maxIndex - maxIndex2) > 1) {
        pits.push([maxIndex2, maxIndex]);
    }

    return getPitsLeft(landscape, maxIndex2, pits);
}

const getPitsRight = (landscape: number[], maxIndex: number, pits: Pit[] = []): Pit[] => {
    if (maxIndex === landscape.length - 1) {
        return pits;
    }

    const maxIndex2 = getMaxIndex(landscape, maxIndex + 1);
    if (Math.abs(maxIndex - maxIndex2) > 1) {
        pits.push([maxIndex, maxIndex2]);
    }

    return getPitsRight(landscape, maxIndex2, pits);
}

const getMaxIndex = (landscape: number[], index1: number = 0, index2: number = landscape.length): number => {
    let maxIndex = index1;
    for (let i = index1; i < index2; i++) {
        maxIndex = landscape[maxIndex] >= landscape[i] ? maxIndex : i;
    }

    return maxIndex;
}

export const calcWater = (landscape: number[]): number => {
    validate(landscape);

    const maxIndex = getMaxIndex(landscape);

    return [...getPitsLeft(landscape, maxIndex), ...getPitsRight(landscape, maxIndex)].reduce((result, [index1, index2]) => {
        const min = Math.min(landscape[index1], landscape[index2]);
        return result + landscape.slice(index1 + 1, index2).reduce((val, cVal) => val + min - cVal, 0);
    }, 0)
}

