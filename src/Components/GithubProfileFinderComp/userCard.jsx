/* eslint-disable react/prop-types */
export default function UserCard({ userInfo }) {
  const { followers, following, name, login, public_repos, created_at } =
    userInfo;

  const createdDate = new Date(created_at);

  return (
    <div className="flex flex-col m-5 align-middle items-center w-[500px] h-[500px] border-2 bg-slate-500 text-white">
      <div>
        <img className="w-40 h-40 m-10" src={userInfo.avatar_url} alt={name} />
      </div>
      <div className="flex flex-col items-center">
        <a className="underline pb-2" href={`https://github.com/${login}`}>
          {name || login}
        </a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="p-5"> {`Public Repos: ${public_repos}`}</div>
      <div>{`Followers: ${followers}`}</div>
      <div className="p-5">{`Following: ${following}`}</div>
    </div>
  );
}
