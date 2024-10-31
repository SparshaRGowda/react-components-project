import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      //   JSON.parse() is used because localStorage can only store strings.
      //   When we store complex data types like objects or arrays in localStorage,
      //   we need to convert them to strings first (typically using JSON.stringify()).
      //   When we retrieve this data, we need to parse it back into its original form.
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = String(defaultValue);
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
