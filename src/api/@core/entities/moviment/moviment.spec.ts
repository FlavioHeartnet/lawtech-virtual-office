import { describe, expect, test } from "vitest";
import Moviment from "./moviment";
import Court from "../value-objects/court";

describe("Moviment tests", ()=>{
    test("Should create a new moviment", ()=>{
        const newMoviment = Moviment.create({
            date: new Date(),
            description: "Test",
            court: Object(),
        });
        expect(newMoviment).toBeInstanceOf(Moviment)
    });
})