const Search = document.getElementById("Search").oninput = OnValueChange
let arr


async function getUser() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');

        arr = response.data
        displayList(arr)

        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

getUser()

function displayList(arr){
    const html = arr.map(item => `<li> <img src="${item.flag}"> ${item.name}"
    <br> <span> ${item.region}"</span>
</li>`).join('')
document.querySelector('#cnt').innerHTML = html
}

function OnValueChange(e) {
    let {value}  = e.target

    value = value.toLowerCase()

    const filteradArr = arr.filter(item => item.name.toLowerCase().startsWith(value))
    displayList(filteradArr);
}



