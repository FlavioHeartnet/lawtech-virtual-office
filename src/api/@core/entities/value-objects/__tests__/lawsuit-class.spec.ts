import { describe, expect, test } from "vitest";
import ClassSuit from "../lawsuit-class";

describe("lawsuit class tests", () => {
    test("Should get all the values of the string and put it in an array", () => {
		expect(ClassSuit.validate('value')).toBeFalsy();
	});

});