var final_ordered_data = {};
document.getElementById("user_data_button").addEventListener("click", function () {
    var user_name = document.getElementById("user_name").value.trim();
    var user_budget = document.getElementById("user_budget").value;
    if (user_name === "" || user_budget === "") {
        alert("Field cannot be empty");
    }
    var user_data = {
        Name: user_name,
        Budget: user_budget
    }
    console.log(user_data);
    final_ordered_data.Userdata = user_data;


})



var product_details = [];
document.getElementById("shirt_button").addEventListener("click", function () {
    var shirt_product = document.getElementById("shirt_product").innerHTML;
    var shirt_price = document.getElementById("shirt_price").innerHTML;
    var shirt_data = {
        shirt: shirt_product,
        Price: shirt_price
    }
    console.log(shirt_data);
    product_details.push(shirt_data)
})
document.getElementById("pant_button").addEventListener("click", function () {
    var pant_product = document.getElementById("pant_product").innerHTML;
    var pant_price = document.getElementById("pant_price").innerHTML;
    var pant_data = {
        Pant: pant_product,
        Price: pant_price
    }
    console.log(pant_data);
    product_details.push(pant_data);
})
document.getElementById("sweater_button").addEventListener("click", function () {
    var sweater_product = document.getElementById("sweater_product").innerHTML;
    var sweater_price = document.getElementById("sweater_price").innerHTML;
    var sweater_data = {
        Sweater: sweater_product,
        Price: sweater_price
    }
    console.log(sweater_data);
    product_details.push(sweater_data);
})
document.getElementById("coat_button").addEventListener("click", function () {
    var coat_product = document.getElementById("coat_product").innerHTML;
    var coat_price = document.getElementById("coat_price").innerHTML;
    var coat_data = {
        Coat: coat_product,
        Price: coat_price
    }
    console.log(coat_data);
    product_details.push(coat_data);
})

document.getElementById("calculate_button").addEventListener('click', function () {
    var total_amount = 0;

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    // console.log(product_details);
    console.log(dateTime);
    final_ordered_data.Datetime = dateTime;
    final_ordered_data.Productdetils = product_details;
    // console.log(final_ordered_data);
    for (let i = 0; i < final_ordered_data.Productdetils.length; i++) {
        let temp_amount = parseInt(final_ordered_data.Productdetils[i].Price);
        total_amount = total_amount + temp_amount;
    }
    // console.log(total_amount);
    var init_amount = final_ordered_data.Userdata.Budget;
    var offer_amount = 0;
    if (total_amount >= 5000) {
        offer_amount = (init_amount - total_amount + 500);
    }

    final_ordered_data.Offer = offer_amount;
    console.log("Remain", offer_amount);
    localStorage.setItem("budget", JSON.stringify(final_ordered_data));
})
