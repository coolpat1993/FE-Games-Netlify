import axios from "axios"
import { useState, useEffect } from "react"
import UserCard from "./UserCard"

const AllUsers = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://nc-games-site.herokuapp.com/api/users')
            .then(({ data }) => {
                setUsers(data.users)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <h2>Users</h2>
            {loading ? <div className="loader"></div> : null}
            <div className="container">
                {users.map(
                    ({
                        username,
                        name,
                        avatar_url
                    }) => {
                        return (
                            <UserCard
                                key={username}
                                username={username}
                                name={name}
                                avatar_url={avatar_url}
                            />
                        );
                    }
                )}
            </div>
        </>
    )
}

export default AllUsers
