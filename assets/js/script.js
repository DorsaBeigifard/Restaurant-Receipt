const orders = [
  { foodName: "Pizza", count: 3, pricePerItem: 300000 },
  { foodName: "Hamburger", count: 2, pricePerItem: 432000 },
  { foodName: "Drinks", count: 5, pricePerItem: 70000 },
  { foodName: "Salad", count: 5, pricePerItem: 150000 },
];

let total = 0;

const receiptBody = document.getElementById("receipt-body");
const totalPrice = document.getElementById("total");

function calculateOrder(item) {
  const itemTotalPrice = item.count * item.pricePerItem;
  total += itemTotalPrice;

  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${item.foodName}</td>
      <td>${item.count}</td>
      <td>${item.pricePerItem.toLocaleString()}</td>
      <td>${itemTotalPrice.toLocaleString()}</td>
    `;

  receiptBody.appendChild(row);
}
orders.forEach(calculateOrder);

totalPrice.innerText = `${total.toLocaleString()} IRR`;
