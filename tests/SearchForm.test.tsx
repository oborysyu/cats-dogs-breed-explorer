import { SearchForm } from "@/components/SearchForm";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";


const mockProps = {
    value: "test value",
    onChange: () => {},
    onHandleFocus: () => {},
    onKeyPress: () => {},
}

const setup = () => {
    return render(<SearchForm {...mockProps} />);
};
describe("SearchForm component", () => {
    it("renders the SearchForm - check placeholder text", () => {
        setup();
        const input = screen.getByPlaceholderText("Find a dog or cat breed ...");
        expect(input).toBeInTheDocument();
    });
    it("renders the SearchForm - check input render with passed text", () => {
        setup();
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
        const inputText = screen.getByDisplayValue("test value");
        expect(inputText).toBeInTheDocument();
    });
});
