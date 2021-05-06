const address = 'http://localhost:3001/api/v1/'

export const AddComicToCollection = comic => {
     let userId = localStorage.user_id
    return (dispatch) => {
        fetch(`${address}/${userId}update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.jwtToken}`
            },
            body: JSON.stringify({
                comic,
                userId,
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

export const likeComic = comicId => {
    return{
        type: 'LIKE_COMIC',
        comicId,
    }
}
export const dislikeComic = comicId => {
    return{
        type: 'DISLIKE_COMIC',
        comicId,
    }
}


