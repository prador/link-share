import React, { useState, useEffect } from "react";

import ApplicationContext from "./ApplicationContext";

const initialHomeFeedState = new Map();
initialHomeFeedState.set("1", {
  postDescription: "Post description 1",
  id: "1",
  url:
    "https://www.reddit.com/r/ProgrammerHumor/comments/gcl1lc/thank_you_guys_you_are_the_real_heroes"
});
initialHomeFeedState.set("2", {
  postDescription: "Post description 2",
  id: "2",
  url: "https://www.theguardian.com/international"
});
initialHomeFeedState.set("3", {
  postDescription: "Post description 3",
  id: "3",
  url: "https://bleacherreport.com/articles/2888941-dubs-dynasty-plot-20"
});

const ApplicationContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [editingPost, setEditingPost] = useState();
  const [homeFeedPosts] = useState(initialHomeFeedState);
  const changeEditingPost = id => {
    setEditingPost(id ? homeFeedPosts.get(id) : undefined);
  };
  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.classList.toggle("theme-light");
    document.documentElement.classList.toggle("theme-dark");
  };
  useEffect(() => {
    document.documentElement.classList.toggle("theme-light");
  }, []);
  return (
    <ApplicationContext.Provider
      value={{
        darkTheme,
        toggleDarkTheme,
        homeFeedPosts,
        editingPost,
        changeEditingPost
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
