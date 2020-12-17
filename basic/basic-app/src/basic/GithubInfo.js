import React, { useEffect, useState } from "react";

function GithubInfo({ user }) {
  console.log("GITHUB", { user });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    console.log("set loading to true");
    setLoading(true);

    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [user]);

  if (loading) return <h1>Loading....</h1>;
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (!data) return <h1>No data available</h1>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}></img>
    </div>
  );
}

export default GithubInfo;
