// metacritic.js
// Aquí combinamos la lógica del servicio Angular y el componente de usuarios

export async function getUsers() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Error al obtener usuarios");
    }

    // Simulación de retardo de 5 segundos (igual que en Angular)
    await new Promise(resolve => setTimeout(resolve, 5000));

    const users = await response.json();
    return users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      website: u.website,
    }));
  } catch (err) {
    console.error("Error fetching users:", err);
    throw err;
  }
}
