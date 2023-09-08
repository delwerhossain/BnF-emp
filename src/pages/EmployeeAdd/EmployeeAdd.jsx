import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeAdd = () => {
  const navigate = useNavigate();
  // state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const number = form.number.value;
    const blood = form.blood.value;
    const startTime = form.startTime.value;
    const endTime = form.endTime.value;
    const sortCode = form.sortCode.value;
    const data = {
      name,
      number,
      blood,
      startTime,
      endTime,
      sortCode,
    };
    console.log(data);
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img
            loading="lazy"
            src="https://i.ibb.co/T1JLD7q/vecteezy-smartphone-app-layout.jpg"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body text-orange-600">
            <h1 className="text-3xl text-center font-bold">Add My Data</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="add name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  required
                  type="number"
                  name="number"
                  placeholder="add number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blood Group</span>
                </label>
                <input
                  required
                  type="text"
                  name="blood"
                  placeholder="Add Blood Group"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Working Time Start</span>
                </label>
                <input
                  required
                  type="time"
                  name="startTime"
                  placeholder="Add Working Time start"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Working Time End</span>
                </label>
                <input
                  required
                  type="time"
                  name="endTime"
                  placeholder="Add Working Time End"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sort Code ID</span>
                </label>
                <input
                  required
                  type="text"
                  name="sortCode"
                  placeholder="Add Sort Code ID"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="divider">OR</div>
            </form>
            <p className="text-2xl text-red-600">{error}</p>
            <p className="text-2xl text-teal-600">{success}</p>

            <p className="font-semibold underline text-secondary text-center">
              <Link to={"/"}> Home page</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
