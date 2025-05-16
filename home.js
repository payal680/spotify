console.log("lets write java script")
async function main(){
    let song = await fetch("https://github.com/payal680/spotify/tree/main/songsfolder")
    let responce = await song.text()
    console.log(responce)
    let div = document.createElement('div')
        div.innerHTML = responce;
        let tds= div.getElementsByTagName("td")
}

