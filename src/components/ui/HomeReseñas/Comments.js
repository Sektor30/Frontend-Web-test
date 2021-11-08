import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import './Comments.css'

function Comments() {
    return (
        <>
            <h1 className="titulo"><span>Com</span>entarios</h1>
            <div className="comments">
                <DiscussionEmbed
                shortname='logofood'
                config= {
                    {
                        url: "h",
                        identifier: 0,
                        title: "FoodLogo",
                        language: 'es_MX'
                    }
                } />
            </div>
        </>
    )
}

export default Comments
