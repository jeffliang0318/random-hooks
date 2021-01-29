import { useFetch } from "./usefetch";

export default function GitHubUser() {
  const [userData = [], loading, error] = useFetch(
    "https://api.github.com/users"
  );
  const loadingIcon = loading && <h2>Loading</h2>;
  const users = userData.map((user) => <li key={user.id}>{user.login}</li>);
  return (
    <div>
      <h1>Github Users</h1>
      {loadingIcon}
      <ul>{users}</ul>
    </div>
  );
}
