import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import Loader from "../GeneralScreens/Loader";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "../../Css/EditProfile.css";

const EditProfile = () => {
  const { activeUser, config } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [previousPhoto, setPreviousPhoto] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    formdata.append("photo", photo);
    console.log(activeUser);
    try {
      const { data } = await axios.post(
        `https://semicolons-backend.onrender.com/user/${activeUser._id}/editProfile`,
        formdata,
        config
      );

      setSuccess("Edit Profile successfully ");
      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      setTimeout(() => {
        setError("");
      }, 7000);
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    setUsername(activeUser.username);
    setEmail(activeUser.email);
    setPreviousPhoto(activeUser.photo);
    setPhoto(activeUser.photo);
    setTimeout(() => {
      setLoading(false);
    }, 1050);
  }, [navigate, activeUser]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="Inclusive-editprofile-page">
          <div className="editProfileDiv">
            <Link to={"/"}>
              <i className="fa-solid fa-angle-left"></i>
            </Link>
            <form onSubmit={handleSubmit}>
              {error && <div className="error_msg">{error}</div>}

              {success && <div className="success_msg">{success} </div>}

              <div className="input-wrapper">
                <input
                  type="text"
                  id="username"
                  placeholder="Username  "
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  placeholder="Email  "
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">E-mail</label>
              </div>

              <div className="profile-img-upld-wrapper">
                <div className="currentImage">
                  <div className="absolute">Current photo</div>
                  <div className="currentImageDiv">
                    <img src={`${previousPhoto}`} alt="userPhoto" />
                  </div>
                </div>
                <div className="ProfilePhotoField"> <span>Change  Photo</span>
                <div className="icons" >
                  <FaUserAlt />

                  <div className="txt">
                    {photo === previousPhoto ? (
                      <div>
                        <AiOutlineUpload />
                      </div>
                    ) : (
                      photo.name
                    )}
                  <input className="new-image-input"
                    name="photo"
                    type="file"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                  />
                  </div>
                </div></div>
                   
              </div>

              <button type="submit" className="editprofile-btn">
                Edit Profile{" "}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
