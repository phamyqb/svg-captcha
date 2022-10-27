import { ArrayWithLength, NumericRange } from "./types";
interface CaptchaOptions {
    numberOnly?: boolean;
    length?: NumericRange<ArrayWithLength<3>, 15>;
}
declare const generate: (options?: CaptchaOptions) => string;
export { generate };
