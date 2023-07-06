// live_cNFHsDKtKinwV85taWaN8WgnPmnTbwo48529r3kikIdQjZ63Rwr8Yg3hYv5DcBP7 

let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchCatPicture);

function fetchCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
        let catImageURL = data[0].url

        if(document.getElementById("showcase")){
            catImageElement = document.getElementById("showcase")
            catImageElement.setAttribute('src', `${catImageURL}`)
            console.log("hiya")
        } else {
            let catImageElement = document.createElement("img")
            catImageElement.setAttribute('id', 'showcase')
            catImageElement.setAttribute('src', `${catImageURL}`)
            catImageElement.classList.add("showcase")
        
            let catImageContainer = document.querySelector(".catImageContainer")
            catImageContainer.appendChild(catImageElement)
        }
    })
    .catch(err => console.log(err))
}