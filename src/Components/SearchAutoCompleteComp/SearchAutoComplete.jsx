import { useEffect, useState } from "react";
import Suggestions from "./dropdownSuggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data.users && data.users.length) {
          setUsers(data.users.map((item) => item.firstName));
          setLoading(false);
          setErrorMsg(null);
        }
      })
      .catch((e) => {
        setErrorMsg(e.message);
        setLoading(false);
        console.log(errorMsg);
      });
  }, []);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setInputVal(query);
    if (query.length > 1) {
      const filtered =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredData(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function setHandleClick(e) {
    console.log(e);
    setInputVal(e.target.innerText);
    setShowDropdown(false);
  }

  if (loading) <div>Loading...</div>;
  return (
    <div>
      <input
        name="search-users"
        type="text"
        placeholder="Search for users..."
        value={inputVal}
        onChange={handleChange}
      />
      {showDropdown ? (
        <Suggestions handleClick={setHandleClick} data={filteredData} />
      ) : null}
    </div>
  );
}
