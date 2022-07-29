let popUp = document.querySelector('.pop-up')
let about = document.querySelector('.about-popup')
let cryptoCont = document.querySelector('.crypto-container')
loadCryptoArr()
//console.log(cryptoCont)

let splashScreen = document.getElementById('splash')
setTimeout(function() {
  splashScreen.style.transform = 'scale(0)'
}, 5000);
async function loadCryptoArr() {
    let response = await fetch('https://api.coinlore.net/api/tickers/');
    let dataArr = await response.json();
    let remove5 = await dataArr.data.splice(10, 1)
    let remove1 = await dataArr.data.splice(31, 1)
    let remove2 = await dataArr.data.splice(32, 1)
    let remove3 = await dataArr.data.splice(35, 1)
    let remove4 = await dataArr.data.splice(35, 1)
    let remove6 = await dataArr.data.splice(45, 1)
    let remove7 = await dataArr.data.splice(61, 1)
    let remove8 = await dataArr.data.splice(63, 1)
    let remove9 = await dataArr.data.splice(70, 1)
    let remove10 = await dataArr.data.splice(71, 1)
    let remove11 = await dataArr.data.splice(78, 1)
    let remove12 = await dataArr.data.splice(69,20)
    //console.log(dataArr.data[0]);
    let data = await dataArr.data.map(crypto =>{
     let newName = crypto.name.toLowerCase()
     newName = newName.replace(/\s+/, '-')
     newName = newName.replace(/\s+/, '-')
     return `
     <div class="crypto ${crypto.symbol}">
       <div class="details">
          <img src=https://cryptologos.cc/logos/${newName}-${crypto.symbol.toLowerCase()}-logo.png?v=023 alt="logo">
          <h1>${crypto.symbol}</h1>
          <p>${crypto.name}</p>
       </div>
       <div class="price">
         <h1>$ ${crypto['price_usd']}</h1>
       </div>
     </div>
    `})

    data = data.join('')
    //console.log(data)
    cryptoCont.innerHTML = await data
    
    let search = document.querySelector('input')
    search.addEventListener('keyup', e => {
      let newArr = dataArr.data.filter(function(arr){
        
          if (arr.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()) || arr.symbol.toLowerCase().includes(e.currentTarget.value.toLowerCase())) {
            return arr
            
          }
        
      })
      //console.log(newArr.length)
      let newArrAppend = newArr.map(nap => {
        let newName = nap.name.toLowerCase()
        newName = newName.replace(/\s+/, '-')
        newName = newName.replace(/\s+/, '-')
        return `
            <div class="crypto ${nap.symbol}">
                 <div class="details">
                    <img src=https://cryptologos.cc/logos/${newName}-${nap.symbol.toLowerCase()}-logo.png?v=023 alt="logo">
                    <h1>${nap.symbol}</h1>
                    <p>${nap.name}</p>
                 </div>
                 <div class="price">
                   <h1>$ ${nap['price_usd']}</h1>
                 </div>
               </div>
              
        `
      })
      newArrAppend = newArrAppend.join('')
      cryptoCont.innerHTML = newArrAppend
      
      let allCrypt = document.querySelectorAll('.crypto')
    allCrypt.forEach(crypto => {
      crypto.addEventListener("click", (e) => { let symbol = e.currentTarget.classList[1]
        
        for(i=0; i< dataArr.data.length; i++){
          if (symbol == dataArr.data[i].symbol) {
            
            let newName = dataArr.data[i].name.toLowerCase()
            newName = newName.replace(/\s+/, '-')
            newName = newName.replace(/\s+/, '-')
            
            let output = 
            `
              <div class="close-btn">
                <i class="fas fa-close"></i>
              </div>
            <div class="crypto-details">
    <div class="head">
      <img src=https://cryptologos.cc/logos/${newName}-${dataArr.data[i].symbol.toLowerCase()}-logo.png?v=023 alt="logo">
      <h1>${dataArr.data[i].symbol} Details</h1>
    </div>
    <div class="body">
      <ul>
        <li>Symbol: ${dataArr.data[i].symbol}</li>
        <li>Name: ${dataArr.data[i].name}</li>
        <li>Rank: ${dataArr.data[i].rank}</li>
        <li>USD price: $${dataArr.data[i].price_usd}</li>
        <li>BTC price: ${dataArr.data[i].price_btc} BTC</li>
        <li>Percentage Change (1hr): ${dataArr.data[i].percent_change_1h}%</li>
        <li>Percentage Change (24hr): ${dataArr.data[i].percent_change_24h}%</li>
        <li>Percentage Change (7days): ${dataArr.data[i].percent_change_7d}%</li>
        <li>Market Cap Value(USD): ${dataArr.data[i].market_cap_usd}</li>
        <li>Market Supply: ${dataArr.data[i].msupply}</li>
        <li>Total Supply: ${dataArr.data[i].tsupply}</li>
        <li>Volume 24: ${dataArr.data[i].volume24}</li>
      </ul>
    </div>
       `     
            popUp.innerHTML = output
            popUp.classList.add('open')
            document.querySelector('.close-btn').addEventListener('click', () => popUp.classList.remove('open'))
          }
        }
      })
    })
    })
    
    
    
    let allCrypt = document.querySelectorAll('.crypto')
    allCrypt.forEach(crypto => {
      crypto.addEventListener("click", (e) => { let symbol = e.currentTarget.classList[1]
        
        for(i=0; i< dataArr.data.length; i++){
          if (symbol == dataArr.data[i].symbol) {
            
            let newName = dataArr.data[i].name.toLowerCase()
            newName = newName.replace(/\s+/, '-')
            newName = newName.replace(/\s+/, '-')
            
            let output = 
            `
              <div class="close-btn">
                <i class="fas fa-close"></i>
              </div>
            <div class="crypto-details">
    <div class="head">
      <img src=https://cryptologos.cc/logos/${newName}-${dataArr.data[i].symbol.toLowerCase()}-logo.png?v=023 alt="logo">
      <h1>${dataArr.data[i].symbol} Details</h1>
    </div>
    <div class="body">
      <ul>
        <li>Symbol: ${dataArr.data[i].symbol}</li>
        <li>Name: ${dataArr.data[i].name}</li>
        <li>Rank: ${dataArr.data[i].rank}</li>
        <li>USD price: $${dataArr.data[i].price_usd}</li>
        <li>BTC price: ${dataArr.data[i].price_btc} BTC</li>
        <li>Percentage Change (1hr): ${dataArr.data[i].percent_change_1h}%</li>
        <li>Percentage Change (24hr): ${dataArr.data[i].percent_change_24h}%</li>
        <li>Percentage Change (7days): ${dataArr.data[i].percent_change_7d}%</li>
        <li>Market Cap Value(USD): ${dataArr.data[i].market_cap_usd}</li>
        <li>Market Supply: ${dataArr.data[i].msupply}</li>
        <li>Total Supply: ${dataArr.data[i].tsupply}</li>
        <li>Volume 24: ${dataArr.data[i].volume24}</li>
      </ul>
    </div>
       `     
            popUp.innerHTML = output
            popUp.classList.add('open')
            document.querySelector('.close-btn').addEventListener('click', () => popUp.classList.remove('open'))
          }
        }
      })
    })
}

let aboutBtn = document.querySelector('.about')
aboutBtn.addEventListener('click', function(){
  about.style.transform = 'scale(1)'
})
let closeAbout = document.querySelector('.close-about')
closeAbout.addEventListener('click', () => about.style.transform = 'scale(0)')



let dropDown1 = document.getElementById('select1');
let dropDown2 = document.getElementById('select2')
let calcEntry = document.querySelector('.calc-box')
let entry = document.querySelector('.enter-box')
let calcNumbers = document.querySelectorAll('.number')
loadCryptoArr2()


async function loadCryptoArr2() {
    let response = await fetch('https://api.coinlore.net/api/tickers/');
    let dataArr = await response.json();
    //console.log(dataArr.data)
    let allCrypto = dataArr.data.map(each => {
      let newName = each.name.toLowerCase()
      newName = newName.replace(/\s+/, '-')
      newName = newName.replace(/\s+/, '-')
      return `
        <option value="${each.symbol}" class ='select1-options'>
          <p>${each.symbol}</p>
        </option>
      `
    })
    let allCrypto2 = dataArr.data.map(each => {
      let newName = each.name.toLowerCase()
      newName = newName.replace(/\s+/, '-')
      newName = newName.replace(/\s+/, '-')
      return `
            <option value="${each.symbol}" class ='select2-options'>
              <p>${each.symbol}</p>
            </option>
          `
    })
    allCrypto = allCrypto.join('')
    dropDown1.innerHTML = allCrypto
    dropDown2.innerHTML = allCrypto2
    
    
    //console.log(select1Options[0].innerText)
    
    calcNumbers.forEach(number => {
      number.addEventListener('click', e => {
        if (e.currentTarget.classList.contains('clear')) {
          entry.textContent = ''
          calcEntry.textContent = ''
        } else if (e.currentTarget.classList.contains('del')) {
          entry.textContent = entry.textContent.slice(0, -1)
          
          let value1 = dropDown1.options[dropDown1.selectedIndex].value;
          let value2 = dropDown2.options[dropDown2.selectedIndex].value;
          
          let value2Price = 0
          let value1Price = 0
          for (var i = 0; i < dataArr.data.length; i++) {
            if (value2 == dataArr.data[i].symbol) {
              value2Price = dataArr.data[i]['price_usd']
            }
          }
          
          for (var i = 0; i < dataArr.data.length; i++) {
            if (value1 == dataArr.data[i].symbol) {
              value1Price = dataArr.data[i]['price_usd']
            }
          }
          
          calcEntry.textContent = entry.textContent / value2Price * value1Price
        } else{
          entry.textContent += e.currentTarget.innerText
    
        let value1 = dropDown1.options[dropDown1.selectedIndex].value;
        let value2 = dropDown2.options[dropDown2.selectedIndex].value;

        let value2Price = 0
        let value1Price = 0
        for (var i = 0; i < dataArr.data.length; i++) {
          if (value2 == dataArr.data[i].symbol) {
            value2Price = dataArr.data[i]['price_usd']
          } 
        }
        
        for (var i = 0; i < dataArr.data.length; i++) {
          if (value1 == dataArr.data[i].symbol) {
            value1Price = dataArr.data[i]['price_usd']
          }
        }

        calcEntry.textContent = entry.textContent / value2Price* value1Price
        

          
        }
      })
    })
  
    
}

