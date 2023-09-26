import { describe, test, expect } from "vitest";
import CreateClient from "./create-client.uc";

describe("Tests for Client use cases", () => {
	test("Should create a client", () => {
		CreateClient.execute();
	})
});