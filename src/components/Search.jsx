import React from "react";

function Search(props) {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://i.vietgiaitri.com/2021/8/1/chan-dung-hot-girl-le-phuong-anh---gai-xinh-vuong-nghi-van-lo-clip-chong-day-96e-5928249.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Thuc</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}

export default Search;
