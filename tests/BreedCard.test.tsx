import { BreedCard } from "@/components/BreedCard";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


const mockBreed = {
  name: "Angora",
  imageUrl: "http://example.com/cat.jpeg",
  breedId: "test",
  petType: "cat"
}

const setup = () => {
  return render(<BreedCard {...mockBreed} />);
};
describe("BreedCard component", () => {
  it("renders the BreedCard - check text render", () => {
    setup();
    const nameText = screen.getByText("Angora");
    expect(nameText).toBeInTheDocument();
  });
});
