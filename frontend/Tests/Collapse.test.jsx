import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Collapse from "../src/components/Collapse/Collapse";

describe("Collapse", () => {
  it("affiche le titre", () => {
    render(<Collapse title="Description">Contenu de test</Collapse>);
    expect(
      screen.getByRole("heading", { name: "Description" }),
    ).toBeInTheDocument();
  });

  it("affiche le contenu passé en children", () => {
    render(<Collapse title="Description">Contenu de test</Collapse>);
    expect(screen.getByText("Contenu de test")).toBeInTheDocument();
  });

  it("est fermé par défaut", () => {
    render(<Collapse title="Description">Contenu de test</Collapse>);
    const content = screen
      .getByText("Contenu de test")
      .closest(".Collapse-content");
    expect(content).not.toHaveClass("open");
    expect(screen.getByAltText("flèche")).not.toHaveClass("open");
  });

  it("s'ouvre au clic sur l'en-tête", async () => {
    const user = userEvent.setup();
    render(<Collapse title="Description">Contenu de test</Collapse>);

    await user.click(screen.getByRole("heading", { name: "Description" }));

    const content = screen
      .getByText("Contenu de test")
      .closest(".Collapse-content");
    expect(content).toHaveClass("open");
    expect(screen.getByAltText("flèche")).toHaveClass("open");
  });

  it("se referme au second clic", async () => {
    const user = userEvent.setup();
    render(<Collapse title="Description">Contenu de test</Collapse>);
    const header = screen.getByRole("heading", { name: "Description" });

    await user.click(header);
    await user.click(header);

    const content = screen
      .getByText("Contenu de test")
      .closest(".Collapse-content");
    expect(content).not.toHaveClass("open");
    expect(screen.getByAltText("flèche")).not.toHaveClass("open");
  });

  it("fonctionne avec une liste en children (cas des équipements)", async () => {
    const user = userEvent.setup();
    render(
      <Collapse title="Équipements">
        <ul>
          <li>Wifi</li>
          <li>Cuisine équipée</li>
        </ul>
      </Collapse>,
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(2);

    await user.click(screen.getByRole("heading", { name: "Équipements" }));
    expect(screen.getByText("Wifi").closest(".Collapse-content")).toHaveClass(
      "open",
    );
  });

  it("garde l'état de chaque Collapse indépendant", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Collapse title="Description">Texte A</Collapse>
        <Collapse title="Équipements">Texte B</Collapse>
      </>,
    );

    await user.click(screen.getByRole("heading", { name: "Description" }));

    expect(
      screen.getByText("Texte A").closest(".Collapse-content"),
    ).toHaveClass("open");
    expect(
      screen.getByText("Texte B").closest(".Collapse-content"),
    ).not.toHaveClass("open");
  });
});
