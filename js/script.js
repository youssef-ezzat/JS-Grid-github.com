var productsContainer ;
if (  localStorage.getItem('productData') == null )
{
    var productsContainer = []
}else
{
    var productsContainer  =  JSON.parse( localStorage.getItem('productData'))

    displayProducts()
}

function validate(userName) {
     var userNameRejx = /^[a-z]{2,9}$/
     if (userNameRejx.test(userName) == false) {
    document.getElementById('btn').disabled = "true";
    }
     else
    {
    document.getElementById('btn').removeAttribute('disabled');
    }
}
function validate2(ProductPr) {
    var ProductPrRejx = /^[0-9]{3,9}$/
    if (ProductPrRejx.test(ProductPr) == false) {
   document.getElementById('btn').disabled = "true";
   }
    else
   {
   document.getElementById('btn').removeAttribute('disabled');
   }
}
function addProduct() {
    var productName = document.getElementById('nameInp').value;
    var productPrice = document.getElementById('priceInp').value;
    var productCategory = document.getElementById('categoryInp').value;
    var productDisc = document.getElementById('descInp').value

    var product = {
        name : productName,
        price : productPrice,
        category : productCategory,
        discription : productDisc
    }

    productsContainer.push(product)
    localStorage.setItem( 'productData' , JSON.stringify( productsContainer )  )
    displayProducts()   
    }

function displayProducts() {
    var temp = "";

    for (var i = 0 ; i < productsContainer.length ; i++ ){

        temp += `	
        <div class='col-xl-3 col-lg-4 col-md-6'>
        <div class="card mb-3" style="width: 18rem">
    	<img class="card-img-top" src="1.jpg" alt="Card image cap">
	    	<div class="card-body">
                <h5 class="card-title">`+ productsContainer[i].name + `<span class='ml-4 badge badge-primary'>`+ productsContainer[i].category + `</span></h5>
                <p class="card-text"> `+ productsContainer[i].discription  +  `</p>
                <h3>`+ productsContainer[i].price +` </h3>
            </div>
            <button onclick='deleteProduct(`+ i +`)' class='btn btn-outline-info'>Delete</button>
            </div>        
        </div>`
        ;
    }
    console.log(temp);
    document.getElementById('conta').innerHTML = temp
}

function searchProduct(term) 
{
   var temp = `` ;

    for(var i=0 ; i < productsContainer.length ; i++ )
    { 
        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) )
        {
            temp  += `	
            <div class='col-xl-3 col-lg-4 col-md-6'>
            <div class="card mb-3" style="width: 18rem;">
            <img class="card-img-top" src="1.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">`+ productsContainer[i].name + `<span class='ml-4 badge badge-primary'>`+ productsContainer[i].category + `</span></h5>
                    <p class="card-text"> `+ productsContainer[i].discription  +  `</p>
                    <h3>`+ productsContainer[i].price +` </h3>
                </div>
                <button onclick='deleteProduct(`+ i +`)' class='btn btn-outline-info w-20px'>Delete</button>
            </div>        
            </div>`;
        }
    }
    document.getElementById('conta').innerHTML = temp

}


function deleteProduct(indx)
{
    if (confirm('Are you sure to delete this product ?')) {
        var deleted = productsContainer.splice(indx,1);
        localStorage.setItem( 'productData' , JSON.stringify( productsContainer )  )
        displayProducts()
    }

}
