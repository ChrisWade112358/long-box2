const address = 'http://localhost:3001/api/v1/'

export const AddComicToCollection = comics => {
    return (dispatch) => {
        fetch(`${address}update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                comics,
                withCredentials: true,
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            
            dispatch({type: 'ADD_COMIC_TO_COLLECTION', payload: data})
        })
        .catch(error => {
            console.log("registration error", error);
        })
    }
}
