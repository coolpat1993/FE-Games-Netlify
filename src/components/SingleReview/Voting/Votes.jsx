import axios from "axios";
import { useState } from "react";

const UpvoteButton = ({ review_id, setTrueVotes, votes }) => {
    const [upVote, setUpVote] = useState(false)
    const [downVote, setdownVote] = useState(false)
    const HandleSubmit = (voteAmount) => {
        return axios.patch(`https://nc-games-site.herokuapp.com/api/reviews/${review_id}`, { inc_votes: voteAmount }).then(({ data }) => {
            setTrueVotes(data.review.votes)
        })
    }

    let upVoted = ''
    let downVoted = ''

    if (upVote) {
        upVoted = 'red'
        downVoted = ''
    }

    if (downVote) {
        upVoted = ''
        downVoted = 'red'
    }

    return (
        <div>
            <button className={upVoted} onClick={(e) => {
                if (upVote === false) {
                    downVote ? HandleSubmit(2) : HandleSubmit(1)
                    setUpVote(true)
                    setdownVote(false)
                } else if (upVote === true) {
                    HandleSubmit(-1)
                    setUpVote(false)
                }

            }}>upvote</button> <p>{votes}</p>
            <button className={downVoted} onClick={() => {
                if (downVote === false) {
                    upVote ? HandleSubmit(-2) : HandleSubmit(-1)
                    setUpVote(false)
                    setdownVote(true)
                } else if (downVote === true) {
                    HandleSubmit(1)
                    setdownVote(false)
                }
            }}>downvote</button>
        </div>
    )
}

export default UpvoteButton