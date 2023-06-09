$(document).ready(function(){
    const dress = `[
        {
          "ImageProduct":"Contrast Sequin Draped Side Split Thigh Tube Formal Dress",
          "ProductName":"Contrast Sequin Draped Side Split Thigh Tube Formal Dress",
          "Price":45,
          "Tags":"Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Contrast Sequin One Shoulder Mesh Hem Formal Dress ( Navy Blue )",
          "ProductName":"Contrast Sequin One Shoulder Mesh Hem Formal Dress ( Navy Blue )",
          "Price":30,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"Fold Pleated Detail Off Shoulder Satin Formal Dress ( Blue )",
          "ProductName":"Fold Pleated Detail Off Shoulder Satin Formal Dress ( Blue )",
          "Price":30,
          "Tags":"#Dress #TopRated",
          "Ratings":4.5
      },{
          "ImageProduct":"Glitter Bodice High Low Satin Formal Dress ( Black )",
          "ProductName":"Glitter Bodice High Low Satin Formal Dress ( Black )",
          "Price":45,
          "Tags":"#Dress #TopRated",
          "Ratings":4.9
      },{
          "ImageProduct":"Off Shoulder Contrast Mesh Sequin Formal Dress ( Black )",
          "ProductName":"Off Shoulder Contrast Mesh Sequin Formal Dress ( Black )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"One Shoulder Contrast Sequin Draped Front Floor Length Formal Dress",
          "ProductName":"One Shoulder Contrast Sequin Draped Front Floor Length Formal Dress",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"One Shoulder Mesh Panel Split Thigh Sequin Formal Dress ( Green )",
          "ProductName":"One Shoulder Mesh Panel Split Thigh Sequin Formal Dress ( Green )",
          "Price":40,
          "Tags":"#Dress",
          "Ratings":4.9
      },{
          "ImageProduct":"One Shoulder Ruffle Trim Glitter Prom Dress ( Dark Green )",
          "ProductName":"One Shoulder Ruffle Trim Glitter Prom Dress ( Dark Green )",
          "Price":50,
          "Tags":"#Dress",
          "Ratings":4.9
      }
  ] `
  var dom_women = document.getElementsByClassName("market-list");
  const json_dress = JSON.parse(dress);
    let item = []
    for (const key in json_dress) {
        item[key] = "item"+key;
       dom_women[0].innerHTML += `
       <a href="../buy.html" class="shop-select" id="item`+key+`">
                <div class="shop-card">
                    <div class="image-product">
                        <img src="Women Formal Dress/`+json_dress[key].ImageProduct+`.png" alt="">
                    </div>
                    <div class="product-info">
                        <h3>`+json_dress[key].ProductName+`</h3>
                        <p>$ `+json_dress[key].Price+`</p>
                        <p>`+json_dress[key].Tags+`</p>
                        <div class="ratings">
                            <span>`+json_dress[key].Ratings+`</span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="favorites"><button><i class="fa-regular fa-heart"></i></button></span>
                        </div>  
                    </div>
                </div>
            </a>
       `;
    }
    let json = JSON.parse(dress)
    $(".shop-select").click(function(){
        let a = $(this).attr("id");
        let b = a.substring(4);
        window.localStorage.clear();
        window.localStorage.setItem("image", "women/Women Formal Dress/"+json[b].ImageProduct);
        window.localStorage.setItem("name", json[b].ProductName);
        window.localStorage.setItem("price", json[b].Price);
        window.localStorage.setItem("tags", json[b].Tags);
        window.localStorage.setItem("ratings", json[b].Ratings);
    });
});