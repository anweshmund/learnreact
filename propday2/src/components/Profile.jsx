import React from 'react'

const Profile = (props) => {
  return (
    <div>
      <div className="card">
              <img src={props.img} alt="" srcset="" />
              <h1>{props.user} </h1>
              <p>Lorem ipsum dolor sit amet consectetur, dolorum deserunt officia ipsa eaque praesentium quam enim facere. Ut aut qui quo?</p>
              <button>view profile</button>
            </div>
    </div>
  )
}

export default Profile
