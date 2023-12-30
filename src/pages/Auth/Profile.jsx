import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Button, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import addPictureStorage from "./addPictureStorage";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Profile() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [profileImage, setProfileImage] = useState(
    user?.photoURL || "/static/images/avatar/2.jpg"
  );
  const registrationDate = user?.metadata.creationTime
    ? new Date(user.metadata.creationTime)
    : null;

  if (!user) {
    console.error("User is not authenticated");
    return null;
  }

  const handleUploadAvatarToStorage = (e) => {
    const file = e.target.files[0];

    if (file) {
      addPictureStorage(file)
        .then((downloadURL) => {
          setProfileImage(downloadURL);
          console.log(
            "Image uploaded successfully. Download URL:",
            downloadURL
          );
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      console.error("No file selected");
    }
  };

  const handleReload = () => {
    navigate("/profile");
  };

  const handleUpdateDisplayName = () => {
    const newDisplayName = prompt("Enter your new display name:");
    if (newDisplayName) {
      updateProfile(auth.currentUser, { displayName: newDisplayName })
        .then(() => {
          console.log("Display name updated successfully!");
        })
        .catch((error) => {
          console.error("Error updating display name:", error.message);
        });
    }
  };

  return (
    <Grid container alignContent="flex-start">
      <Grid
        sx={{ height: "40px", margin: "20px", padding: "10px", width: "100%" }}
      >
        <Typography
          variant="h4"
          className="Tag-profile"
          sx={{
            color: "red",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Personal information
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        sx={{
          margin: "20px",
          backgroundColor: "#8d8a8ad2",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        <div className="main-profile">
          <div className="avatar-name">
            {user.photoURL ? (
              <Avatar
                src={user.photoURL}
                sx={{
                  width: 100,
                  height: 100,
                  margin: "10px",
                }}
              />
            ) : (
              <Avatar
                src="/static/images/avatar/2.jpg"
                sx={{
                  width: 100,
                  height: 100,
                  margin: "10px",
                }}
              />
            )}
            <label htmlFor="avatar">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={handleUploadAvatarToStorage}
                style={{ display: "none" }}
              />
              <Button
                variant="outlined"
                size="small"
                component="span"
                sx={{
                  mt: 2,
                  color: "red",
                  borderColor: "red",
                  bgcolor: "transperent",
                  "&:hover": { borderColor: "red", bgcolor: "" },
                }}
              >
                Upload Avatar
              </Button>
            </label>
            <Typography
              variant="h6"
              style={{
                margin: "10px",
                color: "white",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {user.displayName}
            </Typography>
            <Button
              sx={{
                color: "red",
                borderColor: "red",
                "&:hover": {
                  borderColor: "red",
                },
              }}
              onClick={handleUpdateDisplayName}
              variant="outlined"
              size="small"
            >
              Change Name
            </Button>
          </div>
          <Typography
            style={{
              margin: "10px 10px 0",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Email :
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ margin: "0 10px", color: "white" }}
          >
            {user.email}
          </Typography>
          <Typography
            style={{
              margin: "10px 10px 0",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Registration Date :
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ margin: "0 10px", color: "white" }}
          >
            {registrationDate ? registrationDate.toLocaleDateString() : "N/A"}
          </Typography>
          <div className="reload-container">
            <Button
              sx={{
                textAlign: "center",
                marginTop: "5px",
                color: "red",
                borderColor: "red",
                background: "black",
                "&:hover": {
                  borderColor: "red",
                },
              }}
              onClick={handleReload}
              variant="outlined"
              size="small"
            >
              Reload
            </Button>
            <p>Click to update your details</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Profile;
