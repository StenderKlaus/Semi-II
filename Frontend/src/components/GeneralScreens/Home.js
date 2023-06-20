import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import Select from "react-select";
import "../../Css/Home.css";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Home = ({ error }) => {
  const search = useLocation().search;
  const searchKey = new URLSearchParams(search).get("search");
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { categories, setCategories } = useContext(AuthContext);
  // const [categories, setCategories] = useState([]);

  const thema = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "tailwind", label: "Tailwind" },
    { value: "sass", label: "Sass" },
    { value: "javascript", label: "Javascript" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "NodeJS" },
    { value: "git/github", label: "Git/Github" },
    { value: "express", label: "Express" },
    { value: "mongodb", label: "MongoDB" },
    { value: "mysql", label: "MySQL" },
    { value: "ubuntu", label: "Ubuntu" },
    { value: "useful-links", label: "Useful Links" },
    { value: "live-coding", label: "Live coding" },
    { value: "exercises", label: "Exercises" },
  ];

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        if (searchKey) {
          const { data } = await axios.get(
            `https://semicolons-backend.onrender.com/story/getAllStories?search=${searchKey}&page=${page}`
          );
          setStories(data.data);
          setPages(data.pages);
          console.log("if fired");
          navigate({
            pathname: "/",
            search: `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`,
          });
        } else if (categories.length > 0) {
          const { data } = await axios.get(
            `https://semicolons-backend.onrender.com/story/getAllPostCat?search=${categories[0].value}&page=${page}`
          );
          setStories(data.data);
          setPages(data.pages);
          console.log(data);
          console.log(data.data);
          console.log("else if fired");
          navigate({
            pathname: "/",
            // search: `?cat=${categories[0].value}${page > 1 ? `&page=${page}` : ""}`,
          });
        } else {
          console.log("here fired else");

          const { data } = await axios.get(
            `https://semicolons-backend.onrender.com/story/getAllStories?search=${searchKey || ""}&page=${page}`
          );
          console.log("aris test clg", data, data.data);
          setStories(data.data);
          setPages(data.pages);
          navigate({
            pathname: "/",
            search: `${page > 1 ? `page=${page}` : ""}`,
          });
        }
        // console.log("Home rerendered");
        setLoading(false);
      } catch (error) {
        console.log(error, error.message);
        setLoading(true);
      }
    };
    getStories();
    // console.log("input search fired");
  }, [setLoading, categories, search, page, navigate]);

  useEffect(() => {
    setPage(1);
  }, [searchKey, categories]);

  // useEffect (() => {
  //  const getAllStories = async () => {
  //   try {
  //     const { data } = await axios.get(`https://semicolons-backend.onrender.com/story/getAllStories`)
  //     setStories(data.data);
  //     setPages(data.pages);
  //     navigate({pathname: '/', search: `${page > 1 ? `page=${page}` : ""}`});
  //   } catch (error) {
  //     console.log(error, error.message);
  //   }
  // };
  // getAllStories()
  // },[search, page, navigate])


  return (
    <div className="Inclusive-home-page">

      <div className="arrowleft">
            <i
              onClick={() => {
                setCategories([]);
                navigate("/");
              }}
              className="fa-solid fa-angle-left"
            ></i>
      </div>

      {/* <div className="bigCatHome">
        <div className="categoryHome"> */}

        <div className="home_select_div">
          <h6  className="home_cat_select_p" >Search all Posts by a relevant category: </h6>
            <label>
              <Select className="home_cat_select_color"
                isSearchable={true}
                options={thema}
                onChange={(option) => setCategories(option)}
                value={categories}
                isMulti
              />
            </label>
        </div>     
          
      {loading ? (
        <div className="skeleton_emp">
          {[...Array(9)].map(() => {
            return (
              <SkeletonStory key={uuidv4()} />
            );
          })}
        </div>
      ) : (
        <div>
          <div className="story-card-wrapper">
            {stories?.length !== 0 ? (
              stories?.map((story) => {
                return <CardStory key={uuidv4()} story={story} />;
              })
            ) : (
              <NoStories />
            )}
          </div>

          <Pagination page={page} pages={pages} changePage={setPage} />
        </div>
      )}
      <br />
    </div>
  );
};

export default Home;
