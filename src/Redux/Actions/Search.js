import md5 from 'md5';


const comicAddress = 'https://gateway.marvel.com/v1/public/comics?title='
const publicKey = '582a350e7157c54cffd0259269f77c10'
const privateKey = 'e080433ab3ce6f86c28909122a8ece9a37ff7cc6'
// Only showing keys in dev mode

export const  getComics = search => {
    let today = Math.round((new Date()).getTime() / 1000);
    
    let hashText = `${today}${privateKey}${publicKey}`
    let hash = md5(hashText)
    let str = `${comicAddress}${search.searchText}&ts=${today}&apikey=${publicKey}&hash=${hash}`
    let url = encodeURI(str)

    return (dispatch) => {
        fetch(url)
        .then(res => {
            console.log("comic search", res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            
            dispatch({type:'ADD_RESULTS', payload: data})
        })
        .catch(error => {
            console.log(error)

        })
    }
    
}

