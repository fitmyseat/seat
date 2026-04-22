const images = [
  "BMW_X5_Leather_5000.jpg",
  "Swift_Fabric_3000.jpg",
  "Creta_Premium_4500.jpg"
];

const container = document.getElementById("product-container");

images.forEach(img => {
  const parts = img.replace(".jpg", "").split("_");

  const model = parts[0];
  const car = parts[1];
  const type = parts[2];
  const price = parts[3];

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="images/${img}" />
    <h3>${model} ${car}</h3>
    <p>Type: ${type}</p>
    <p>Price: ₹${price}</p>
  `;

  container.appendChild(card);
});
