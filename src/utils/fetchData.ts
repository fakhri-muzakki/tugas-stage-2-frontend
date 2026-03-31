const fetchData = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Terjadi error pada saat fetch data");
  }

  return res.json();
};

export default fetchData;
