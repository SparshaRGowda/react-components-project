import { useEffect, useState } from "react";
import UserCard from "./userCard";

export default function GithubFinder() {
  const [username, setUserName] = useState("Samarth-Sanjay");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function fetchUserData() {
    setLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserData(() => data);
        setLoading((prev) => !prev);
        setUserName("");
      });
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  function handleSubmit() {
    fetchUserData();
    setUserName("");
  }

  if (loading) {
    <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center align-middle items-center gap-3">
      <div className="m-5">
        <input
          className="border-2 border-blue-950 p-2"
          name="search-username"
          type="text"
          placeholder="Enter Github username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          className="ml-5 border-2 rounded-md p-1 bg-red-200"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {userData && <UserCard userInfo={userData} />}
    </div>
  );
}
