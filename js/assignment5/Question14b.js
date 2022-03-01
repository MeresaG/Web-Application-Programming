
window.onload = function() {



    function productForm() {

        var productNumber = document.getElementById("productNumber").value;
        var quantity = document.getElementById("quantity").value;
        var name = document.getElementById("name").value;
        var supplier = document.getElementById("supplier").value;
        var unitPrice = document.getElementById("unitPrice").value;
        var dateSupplied = document.getElementById("dateSupplied").value;
    
        window.alert(productNumber + ' ' + quantity + "  " + name + " " + supplier + " " + unitPrice + " " + dateSupplied);
    
    }
    
    var addProduct = document.getElementById("addProduct");
    addProduct.addEventListener('click', productForm);

};
