import React from "react";
import PageTitle from "../../Componenets/PageTitle";
import TheatreList from "./TheatreList";
import { Tabs } from "antd";
// import Bookings from "./Booking";

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="2">
        <Tabs.TabPane tab="Bookings" key="1">
          {"Bookings" }
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theatre" key="2">
          <TheatreList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profile;