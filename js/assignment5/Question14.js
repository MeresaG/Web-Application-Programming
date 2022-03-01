function loginForm() {
    console.log(document.getElementById("email").value);
    console.log(document.getElementById("password").value);
    console.log(document.getElementById("url").value);

    return false;
}

function productForm() {

    var productNumber = document.getElementById("productNumber").value;
    var quantity = document.getElementById("quantity").value;
    var name = document.getElementById("name").value;
    var supplier = document.getElementById("supplier").value;
    var unitPrice = document.getElementById("unitPrice").value;
    var dateSupplied = document.getElementById("dateSupplied").value;

    window.alert(productNumber + ' ' + quantity + "  " + name + " " + supplier + " " + unitPrice + " " + dateSupplied);

}