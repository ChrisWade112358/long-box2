export const AddComictoCollection = comic => {
    return (dispatch) => {
        fetch(`${address}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user,
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
}