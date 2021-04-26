import React from 'react'

 const About = () => {
    return (
        <div className="about">
            <h1>LongBox</h1>
            <h3>by</h3>
            <h1>Chris Wade</h1>
            <h3>a React/Redux project for Flatiron School</h3>
            <p>This application is a way to store a list of the comic books in your collection. 
                You can search for comics by Title or by Title and issue number. Then you may add a comic from the search results to your collection.
                Search results and collection results contain an image of the comic's cover, the title and a breif description of the issue,
                Users may view their collection on the home page after signing in. Users can the delete comics that they may not have in their collection any more.  </p>
        </div>
    )
}

export default About;
