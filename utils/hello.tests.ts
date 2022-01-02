import { getHello } from "./hello";
import { mockHello } from '@/mocks/hello'

describe("#getHello", () => {
  it("returns the correct string", () => {
    expect(getHello(mockHello)).toEqual(mockHello);
  });
});
