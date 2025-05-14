import { useEffect, useState } from 'react';
import AvatarCard from './AvatarCard';
import React from 'react';

export default function AvatarList() {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users?limit=3')
            .then(res => res.json())
            .then(data => setAvatars(data.users))
            .catch(err => console.error('Error fetching avatars:', err));
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {avatars.map(user => (
                <AvatarCard key={user.id} user={user} />
            ))}
        </div>
    );
}
