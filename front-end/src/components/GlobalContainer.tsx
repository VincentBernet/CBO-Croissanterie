import React, { useEffect, useState } from 'react';
import './GlobalContainer.css';
import axios from 'axios';
import MemberCard from './MemberCard';
import TimerCard from './TimerCard';

interface GlobalContainerProps {
    TeamMembers: string[],
}

function GlobalContainer({ TeamMembers } : GlobalContainerProps) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handlePosts();
  }, []);
  const handlePosts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        'https://croissanterie-backend.herokuapp.com/members/current-list',
      );
      setPosts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="MainCardContainer">
      <TimerCard timer="2 H 35 Min 45 Secondes" />
      <div className="MemberCardContainer">
        {loading ? <div> Loading Time </div> : null}
        {posts ? TeamMembers.map((name) => (<MemberCard memberInfo={name} key={`MemberCard of ${name}`} />)) : 'error'}
      </div>
    </div>
  );
}

export default GlobalContainer;
