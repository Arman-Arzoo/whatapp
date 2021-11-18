import React from "react";
import "./sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { SidebarChat } from "./SidebarChat";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebar header component */}
      <div className="sidebar__header">
        <Avatar src="https://avatars.githubusercontent.com/u/51259303?v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      {/* sidebar search component */}
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="search Here" />
        </div>
      </div>

      {/* sidebar chat component */}
      <div className="sidebar__chats">
        <SidebarChat name="Arman Ali" />
        <SidebarChat name="Room Name" />
        <SidebarChat name="Room Name" />
      </div>
    </div>
  );
};
