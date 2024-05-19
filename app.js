// JSON data
var data = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
};

// Display the dropdown with mobile options
var select = document.getElementById("mobileSelect");
for (var brand in data.mobiles) {
    for (var model in data.mobiles[brand]) {
        var option = document.createElement("option");
        option.text = data.mobiles[brand][model].name;
        option.value = JSON.stringify(data.mobiles[brand][model]);
        select.add(option);
    }
}

// Function to show selected mobile data
function searchMobile() {
    var selectedMobile = JSON.parse(select.value);
    var searchResult = document.getElementById("search-result");
    searchResult.innerHTML = `
        <h2>${selectedMobile.name}</h2>
        <p>RAM: ${selectedMobile.ram}</p>
        <p>ROM: ${selectedMobile.rom}</p>
        <p>Camera: ${selectedMobile.camera} MP</p>
        <p>Price: ${selectedMobile.price}</p>
    `;
}