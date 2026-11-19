import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import Card from "../src/components/Card/Card";
import { generateSlug } from "../src/utils/slug";

const property = {
  id: "c67ab8a7",
  title: "Appartement cosy",
  cover: "https://example.com/cover.jpg",
};

// Card contient un <Link> : il faut un routeur autour pour le tester
function renderCard(prop = property) {
  return render(
    <MemoryRouter>
      <Card property={prop} />
    </MemoryRouter>,
  );
}

describe("Card", () => {
  it("affiche le titre du logement", () => {
    renderCard();
    expect(
      screen.getByRole("heading", { name: "Appartement cosy" }),
    ).toBeInTheDocument();
  });

  it("affiche l'image de couverture avec le titre en texte alternatif", () => {
    renderCard();
    const img = screen.getByAltText("Appartement cosy");
    expect(img).toHaveAttribute("src", property.cover);
  });

  it("pointe vers la page du logement", () => {
    renderCard();
    const expected = `/logement/${generateSlug(property.title, property.id)}`;
    expect(screen.getByRole("link")).toHaveAttribute("href", expected);
  });

  it("s'adapte aux props reçues (autre logement)", () => {
    const other = {
      id: "b4e1f9a2",
      title: "Studio lumineux",
      cover: "https://example.com/autre.jpg",
    };
    renderCard(other);

    expect(
      screen.getByRole("heading", { name: "Studio lumineux" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Studio lumineux")).toHaveAttribute(
      "src",
      other.cover,
    );
    expect(screen.queryByText("Appartement cosy")).not.toBeInTheDocument();
  });

  it("n'affiche pas de source d'image si la cover est absente", () => {
    renderCard({ ...property, cover: undefined });
    expect(screen.getByAltText("Appartement cosy")).not.toHaveAttribute("src");
  });
});
