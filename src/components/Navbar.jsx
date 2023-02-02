import React from "react";

function Navbar(props) {
  return (
    <div className="navbar">
      <span className="logo">ChatApp</span>
      <div className="user">
        <img
          src="https://i.vietgiaitri.com/2021/8/1/chan-dung-hot-girl-le-phuong-anh---gai-xinh-vuong-nghi-van-lo-clip-chong-day-96e-5928249.jpg"
          alt=""
        />
        <span>Thuc</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
