import { CustomOptions } from "./Model";

test('find min from class', () => {
    const custom = new CustomOptions();
    expect(typeof custom.min).toBe("undefined");
})