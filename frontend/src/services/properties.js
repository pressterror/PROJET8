export async function fetchProperties() {
  const listProperties = await fetch("http://localhost:8080/api/properties");

  if (!listProperties.ok) {
    throw new Error("Erreur lors de la récupération des logements");
  }

  const properties = await listProperties.json();
  return properties;
}
