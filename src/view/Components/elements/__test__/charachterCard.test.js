import {
  cleanup,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import CharacterCard from "../CharacterCard";

describe("CharacterCardTest", () => {
  let renderdComponent, error, observe;

  afterEach(() => {
    cleanup();
    error = undefined;
  });
  beforeEach(() => {
    observe = jest.fn();
    const unobserve = jest.fn();

    // you can also pass the mock implementation
    // to jest.fn as an argument
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));

    // you can also pass the mock implementation
    // to jest.fn as an argument
    window.IntersectionObserver = jest.fn(() => ({
      observe,
      unobserve,
    }));
    const { container } = render(
      <CharacterCard
        character={{
          image: "imageUrl",
          name: "character Name",
          bookmarked: true,
        }}
      />
    );
    renderdComponent = container;
  });
  test("should throw if character not available", () => {
    try {
      const { container } = render(<CharacterCard />);
      renderdComponent = container;
    } catch (e) {
      error = e;
    }
    expect(error.message).toEqual(
      "Cannot read properties of undefined (reading 'image')"
    );
  });
  test("should call observe", () => {
    expect(observe).toBeCalledTimes(1);
    screen.debug();
  });
});
