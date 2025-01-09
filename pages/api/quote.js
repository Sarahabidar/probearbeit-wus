7; /*export default async function handler(req, res) {
  const response = await fetch(
    "https://api.chucknorris.io/jokes/random?category=dev"
  );
  const data = await response.json();
  res.status(200).json(data.value);
}*/

import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    res.status(200).json(response.data.value);
  } catch (error) {
    res.status(500).json({ error: "Fehler beim Abrufen des Zitats" });
  }
}
