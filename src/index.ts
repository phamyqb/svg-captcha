import { ArrayWithLength, NumericRange } from "./types";

interface CaptchaOptions {
    numberOnly?: boolean,

    /* @defaultValue 3 */
    length?: NumericRange<ArrayWithLength<3>, 15>
}

const codes: number[][] = [
    [48, 57], // 0 - 9
    [65, 90], // A - Z
    [97, 122] // a - z
];

const randomRange = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

const generate = (options?: CaptchaOptions) => {
    const { numberOnly, length = 3 } = options ?? {};
    let charCodes = [];
    if (numberOnly)
        charCodes = Array.from({ length }, () => randomRange(codes[0][0], codes[0][1]));
    else {
        const chars = codes.reduce((arr, [min, max]) => arr.concat(Array.from({ length: (max - min) + 1 }, (_, k) => k + min)), []).sort(() => Math.random() - .5);
        charCodes = Array.from({ length }, () => chars[randomRange(0, chars.length)]);
    }
    return String.fromCharCode(...charCodes);
};

export { generate };
