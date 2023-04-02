const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2b12e856d4msh1c360760ad5d8a2p1e5b91jsn3ba5271151aa',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            Searchword.innerHTML = "Meaning of " + response.word;
            definition.innerHTML = response.definition.replace("2.","\n2.").replace("3.","\n3.").replace("4.","\n4.")
        })
        .catch(err => console.error(err));
}

searchbtn.addEventListener("click",(e)=> {
    e.preventDefault();
    dictionary(searchinput.value)
})
