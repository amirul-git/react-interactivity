import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Post from "../components/Post";

export default function Search() {
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [keywords, setKeywords] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setPosts(response.data);
        setSearchedPosts(response.data);
      });
  }, []);

  function handleSearch(e) {
    const value = e.target.value;
    setKeywords(value);
    setSearchedPosts(filterPost(posts, keywords));
  }

  function filterPost(posts, filterKeywords) {
    return posts.filter((post) => post.title.includes(filterKeywords));
  }

  return (
    <>
      <main className="px-4 mt-16">
        <h1 className="text-3xl font-bold text-center text-[#0f172a]">
          Find a Blog
        </h1>
        <SearchBar onChange={(e) => handleSearch(e)} />
        <section className="mt-8">
          {searchedPosts &&
            searchedPosts.map((post) => {
              return <Post key={post.id} post={post} />;
            })}
        </section>
      </main>
    </>
  );
}
