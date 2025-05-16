console.log("lets write java script")
async function main(){
    let song = await fetch("https://github.com/payal680/spotify/blob/main/songs/128-Raat%20Akeli%20Thi%20-%20Merry%20Christmas%20128%20Kbps.mp3")
    let responce = await song.text()
    console.log(responce)
    let div = document.createElement('div')
        div.innerHTML = responce;
        let tds= div.getElementsByTagName("td")
}