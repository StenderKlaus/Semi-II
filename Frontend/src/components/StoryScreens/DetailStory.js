import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../../Css/DetailStory.css";
import Loader from "../GeneralScreens/Loader";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmarkPlus, BsThreeDots, BsBookmarkFill } from "react-icons/bs";
import CommentSidebar from "../CommentScreens/CommentSidebar";
import { AuthContext } from "../../Context/AuthContext";

const DetailStory = () => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [activeUser, setActiveUser] = useState({});
  const [story, setStory] = useState({});
  const [storyLikeUser, setStoryLikeUser] = useState([]);
  const [sidebarShowStatus, setSidebarShowStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const slug = useParams().slug;
  const [storyReadListStatus, setStoryReadListStatus] = useState(false);
  const navigate = useNavigate();
  const { categories, setCategories } = useContext(AuthContext);
  useEffect(() => {
    const getDetailStory = async () => {
      setLoading(true);
      var activeUser = {};
      try {
        const { data } = await axios.get("https://semicolons-backend.onrender.com/auth/private", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        activeUser = data.user;

        setActiveUser(activeUser);
      } catch (error) {
        setActiveUser({});
      }

      try {
        const { data } = await axios.post(`https://semicolons-backend.onrender.com/story/${slug}`, { activeUser });
        setStory(data.data);
        setLikeStatus(data.likeStatus);
        setLikeCount(data.data.likeCount);
        setStoryLikeUser(data.data.likes);
        setLoading(false);

        const story_id = data.data._id;

        if (activeUser.readList) {
          if (!activeUser.readList.includes(story_id)) {
            setStoryReadListStatus(false);
          } else {
            setStoryReadListStatus(true);
          }
        }
      } catch (error) {
        setStory({});
        navigate("/not-found");
      }
    };
    getDetailStory();
    return () => getDetailStory();
  }, [slug, setLoading]);

  const handleLike = async () => {
    setTimeout(() => {
      setLikeStatus(!likeStatus);
    }, 1500);

    try {
      const { data } = await axios.post(
        `https://semicolons-backend.onrender.com/story/${slug}/like`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setLikeCount(data.data.likeCount);
      setStoryLikeUser(data.data.likes);
    } catch (error) {
      setStory({});
      localStorage.removeItem("authToken");
      navigate("/");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Do you want to delete this post")) {
      try {
        await axios.delete(`https://semicolons-backend.onrender.com/story/${slug}/delete`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editDate = (createdAt) => {
    const d = new Date(createdAt);
    var datestring =
      d.toLocaleString("eng", { month: "long" }).substring(0, 3) +
      " " +
      d.getDate();
    return datestring;
  };

  const addStoryToReadList = async () => {
    try {
      const { data } = await axios.post(
        `https://semicolons-backend.onrender.com/user/${slug}/addStoryToReadList`,
        { activeUser },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setStoryReadListStatus(data.status);
    } catch (error) {
      console.log(error);
    }
  };

  const klickCategorie = (e, category) => {
    e.preventDefault();
    navigate(`/`);
    setCategories([{ label: category.toUpperCase(), value: category }]);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="Inclusive-detailStory-page">
            <div className="top_detail_wrapper">
              <Link to={"/"}>
                <i className="fa-solid fa-angle-left"></i>
              </Link>
              <h5>{story.title}</h5>

              <div className="story-general-info">
                <ul>
                  {story.author && (
                    <li className="story-author-info">
                      <img
                        src={`${story.author.photo}`}
                        alt={story.author.username}
                      />
                      <span className="story-author-username">
                        {story.author.username}{" "}
                      </span>
                    </li>
                  )}
                  <li className="story-createdAt">
                    {editDate(story.createdAt)}
                  </li>
                  <b>-</b>

                  <li className="story-readtime">{story.readtime} min read</li>
                </ul>

                {!activeUser.username && (
                  <div className="comment-info-wrap">
                    <i
                      onClick={(prev) => {
                        setSidebarShowStatus(!sidebarShowStatus);
                      }}
                    >
                      <FaRegComment color="rgb(56, 162, 170)" />
                    </i>

                    <b className="commentCount">{story.commentCount}</b>
                  </div>
                )}

                {activeUser &&
                story.author &&
                story.author._id === activeUser._id ? (
                  <div className="top_story_transactions">
                    <Link
                      className="editStoryLink"
                      to={`/story/${story.slug}/edit`}
                    >
                      <FiEdit color="rgb(56, 162, 170)" />
                    </Link>
                    <span className="deleteStoryLink" onClick={handleDelete}>
                      <RiDeleteBin6Line color="rgb(163, 4, 4)" />
                    </span>
                  </div>
                ) : null}
              </div>
            </div>

            <div id="CommentFieldEmp">
              <CommentSidebar
                slug={slug}
                sidebarShowStatus={sidebarShowStatus}
                setSidebarShowStatus={setSidebarShowStatus}
                activeUser={activeUser}
              />
            </div>
            <div className="story-categories-section">
              <span>Categories: </span>
              <span className="categorieSpan">
                {story?.categorie?.map((category, index) => (
                  <button key={index + 1} onClick={(e) => klickCategorie(e, category)}>
                    {category.split(',')}
                  </button>
                ))}
              </span>
            </div>
            <div className="story-content">
              <div className="story-banner-img">
                <img src={`${story.image}`} alt={story.title} />
              </div>

              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: story.content }}
              ></div>
            </div>

            {activeUser.username && (
              <div className="fixed-story-options">
                <ul>
                  <li>
                    <i onClick={handleLike}>
                      {likeStatus ? (
                        <FaHeart color="rgb(56, 162, 170)" />
                      ) : (
                        <FaRegHeart color="rgb(56, 162, 170)" />
                      )}
                    </i>

                    <b
                      className="likecount"
                      style={
                        likeStatus
                          ? { color: "rgb(56, 162, 170)" }
                          : { color: "rgb(56, 162, 170)" }
                      }
                    >
                      {" "}
                      {likeCount}
                    </b>
                  </li>

                  
                  <li  style={{textDecoration:"none"}}>
                    <i
                      onClick={(prev) => {
                        setSidebarShowStatus(!sidebarShowStatus);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <FaRegComment color="rgb(56, 162, 170)" />
                    </i>

                    <b
                      className="commentCount"
                      style={
                        story
                          ? { color: "rgb(56, 162, 170)" }
                          : { color: "rgb(56, 162, 170)" }
                      }
                    >
                      {story.commentCount}
                    </b>
                  </li>
                </ul>

                <ul>
                  <li>
                    <i onClick={addStoryToReadList}>
                      {storyReadListStatus ? (
                        <BsBookmarkFill color="rgb(56, 162, 170)" />
                      ) : (
                        <BsBookmarkPlus color="rgb(56, 162, 170)" />
                      )}
                    </i>
                  </li>

                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DetailStory;
