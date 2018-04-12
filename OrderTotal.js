if (orderTotal({
  items: [
    { 'name': 'Doce Xablau', 'price': 2},
    { 'name': 'Utensílio Xablau', 'price': 40}
  ]
}) !== 42) {
  throw new Error('Check fail: Example (1)')
}

if (orderTotal({
  items: [
    { 'name': 'Coleira Xablau', 'price': 1},
    { 'name': 'Vassoura Xablau', 'price': 100}
  ]
}) !== 101) {
  throw new Error('Check fail: Example (2)')
}

if (orderTotal({
  items: [
    { 'name': '23 mais 10', 'price': 33, 'quantity': 3},
  ]
}) !== 99) {
  throw new Error('Check fail: Example with quantity')
}

function orderTotal(order) {
  return order.items.reduce((prev, current) => current.price * (current.quantity || 1) + prev, 0)
}