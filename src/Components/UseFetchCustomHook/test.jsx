import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, loading, error, fetchData } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  function handleClick() {
    fetchData();
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {loading ? "Loading..." : null}
      {error ? "Error Occurred" : null}
      <h1>Use Fetch Hook</h1>
      <button
        onClick={handleClick}
        className="border-2 border-solid border-black bg-stone-500 text-white p-1"
      >
        Fetch
      </button>
      {data && data.products && data.products.length > 0
        ? data.products.map((item, index) => <li key={index}>{item.title}</li>)
        : null}
    </div>
  );
}
