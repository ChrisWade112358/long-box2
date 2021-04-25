const address = 'http://localhost:3001/api/v1/'

export const AddComictoCollection = comics => {
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
            user = Object.assign({}, data.user, {jwt: data.jwt}, {isLoggedIn: true})
            dispatch({type: 'ADD_USER', payload: user})
        })
        .catch(error => {
            console.log("registration error", error);
        })
    }
}
