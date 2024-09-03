function selectItem() {
    // Mostrar a quantidade introduzida quando o item é selecionado
    document.getElementById('quantityInput').style.display = 'block';
}
function saveQuantity() {
    // Get the quantity value
    var quantity = document.getElementById('quantity').value;

    // Send the quantity to the backend using fetch
    fetch('/save_quantity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token() }}'  // if using CSRF protection
        },
        body: JSON.stringify({ quantity: quantity })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, you can handle the response here
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Optionally, hide the quantity input after saving
    document.getElementById('quantityInput').style.display = 'none';
}
