import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import SkeletonStory from "../Skeletons/SkeletonStory";
import CardStory from "../StoryScreens/CardStory";
import NoStories from "../StoryScreens/NoStories";
import Pagination from "./Pagination";
import Select from 'react-select';
import "../../Css/Home.css"

import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext";

const Home = () => {
  const search = useLocation().search
  const searchKey = new URLSearchParams(search).get('search')
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const {categories, setCategories} = useContext(AuthContext);
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
    { value: "usefullinks", label: "Useful Links" },
    { value: "livecoding", label: "Live coding" },
    { value: "exercises", label: "Exercises" },
  ];

  useEffect(() => {
    const getStories = async () => {

      setLoading(true)
      try {

        const { data } = await axios.get(`/story/getAllStories?search=${searchKey || ""}&page=${page}`)

        if (searchKey) {
          navigate({
            pathname: '/',
            search: `?search=${searchKey}${page > 1 ? `&page=${page}` : ""}`,
          });
        } else {
          navigate({
            pathname: '/',
            search: `${page > 1 ? `page=${page}` : ""}`,
          });
        }
        setStories(data.data)
        setPages(data.pages)

        setLoading(false)
      }
      catch (error) {
        setLoading(true)
      }
    }
    getStories()
  }, [setLoading, search, page, navigate])


  useEffect(() => {
    setPage(1)
  }, [searchKey])



  useEffect(() => {
console.log(categories);
    const getPostsByCat = async () => {
      setLoading(true)
      try {
        
        // console.log("data in useEffect",data)
        if (categories.length > 0) {
          console.log("here fired if")

          const { data } = await axios.get(`/story/getAllPostCat?search=${categories[0].value}&page=${page}`)
          setStories(data.data)
          setPages(data.pages)
          navigate({
            pathname: '/',
            // search: `?cat=${categories[0].value}${page > 1 ? `&page=${page}` : ""}`,
          });
        } else {
          console.log("here fired else")
          const { data } = await axios.get(`/story/getAllStories?search=${searchKey || ""}&page=${page}`)
          setStories(data.data)
          setPages(data.pages)
          navigate({
            pathname: '/',
            // search: `?search=""${page > 1 ? `&page=${page}` : ""}`,
          });
        }
        
        setLoading(false)
      }
      catch (error) {
        setLoading(true)
      }
    }
    getPostsByCat()
    
    
  }, [setLoading, categories, page, navigate])


  useEffect(() => {
    setPage(1)
  }, [categories])


// console.log(categories);

  return (
    <div className="Inclusive-home-page">
      <div>
      <h6>Search Posts by a relevant category: </h6>
                <label>
                    <span>Post Category:</span>
                    <Select isSearchable={true} 
                        options={thema}
                      onChange={(option) => setCategories(option)}

                        isMulti
                    />
                </label>
      </div>
      {loading ?

        <div className="skeleton_emp">
          {
            [...Array(9)].map(() => {
              return (
                // theme dark :> default : light
                <SkeletonStory key={uuidv4()} />
              )
            })}
        </div>

        :
        <div>
          <div className="story-card-wrapper">
            {stories.length !== 0 ?
              stories.map((story) => {
                return (
                  <CardStory key={uuidv4()} story={story} />
                )
              }) : <NoStories />
            }
            <img className="bg-planet-svg" src="planet.svg" alt="planet" />
            <img className="bg-planet2-svg" src="planet2.svg" alt="planet" />
            <img className="bg-planet3-svg" src="planet3.svg" alt="planet" />

          </div>

          <Pagination page={page} pages={pages} changePage={setPage} />

        </div>

      }
      <br />
    </div>

  )

};

export default Home;