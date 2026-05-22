import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {

  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  // PROTECTION
  useEffect(() => {

    if (!storedUser) {

      toast.error("Please Login First To Start Task 🚀");

      navigate("/login");

    }

  }, []);

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  const [tasks, setTasks] = useState([]);

  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      if (!user?._id) return;

      const response = await axios.get(
        `https://taskfolio-api-fuqc.onrender.com/api/tasks/${user._id}`
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {

    if (e.target.name === "image") {

      setFormData({
        ...formData,
        image: e.target.files[0],
      });

    } else {

      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

    }

  };

  // ADD / UPDATE TASK
  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!user) {

      toast.error("Please Login First To Start Task 🚀");

      navigate("/login");

      return;

    }

    try {

      // UPDATE TASK
      if (editId) {

        await axios.put(
          `https://taskfolio-api-fuqc.onrender.com/api/tasks/${editId}`,
          {
            title: formData.title,
            description: formData.description,
          }
        );

        toast.success("Task Updated Successfully 🚀");

        setEditId(null);

      } else {

        // CREATE TASK
        const taskData = new FormData();

        taskData.append("title", formData.title);
        taskData.append("description", formData.description);
        taskData.append("userId", user._id);

        if (formData.image) {
          taskData.append("image", formData.image);
        }

        await axios.post(
          "https://taskfolio-api-fuqc.onrender.com/api/tasks",
          taskData
        );

        toast.success("Task Added Successfully 🚀");

      }

      // RESET FORM
      setFormData({
        title: "",
        description: "",
        image: null,
      });

      fetchTasks();

    } catch (error) {

      console.log(error);

      toast.error("Something went wrong");

    }

  };

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `https://taskfolio-api-fuqc.onrender.com/api/tasks/${id}`
      );

      toast.success("Task Deleted 🚀");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  // EDIT TASK
  const editTask = (task) => {

    setFormData({
      title: task.title,
      description: task.description,
      image: null,
    });

    setEditId(task._id);

  };

  // COMPLETE TASK
  const completeTask = async (id) => {

    try {

      await axios.put(
        `https://taskfolio-api-fuqc.onrender.com/api/tasks/complete/${id}`
      );

      toast.success("Task Status Updated 🚀");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  // LOGOUT
  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logout Successful 🚀");

    setTimeout(() => {

      window.location.href = "/login";

    }, 1500);

  };

  return (
    <div className="min-h-screen text-white">

      {/* NAVBAR */}
      <Navbar />

      <div className="px-6 py-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-5">

          <div>

            <h1 className="text-5xl font-bold gradient-text">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back, {user?.name} 🚀
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="neon-btn px-6 py-3 rounded-2xl font-semibold"
          >
            Logout
          </button>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="glass rounded-[30px] p-8 relative overflow-hidden">

            <h2 className="text-gray-400 mb-4">
              Total Tasks
            </h2>

            <h1 className="text-5xl font-bold gradient-text">
              {tasks.length}
            </h1>

          </div>

          <div className="glass rounded-[30px] p-8 relative overflow-hidden">

            <h2 className="text-gray-400 mb-4">
              Completed
            </h2>

            <h1 className="text-5xl font-bold text-green-400">

              {
                tasks.filter(task => task.completed)
                  .length
              }

            </h1>

          </div>

          <div className="glass rounded-[30px] p-8 relative overflow-hidden">

            <h2 className="text-gray-400 mb-4">
              Active User
            </h2>

            <h1 className="text-3xl font-bold text-cyan-400">
              {user?.name}
            </h1>

          </div>

        </div>

        {/* TASK FORM */}
        <div className="glass rounded-[35px] p-8 mb-12">

          <h2 className="text-3xl font-bold mb-8 gradient-text">

            {editId ? "Update Task" : "Add New Task"}

          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-4 gap-5"
          >

            <input
              type="text"
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              required
            />

            <input
              type="text"
              name="description"
              placeholder="Task Description"
              value={formData.description}
              onChange={handleChange}
              className="p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none"
              required
            />

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="p-3 rounded-xl bg-slate-800 border border-slate-700"
            />

            <button
              type="submit"
              className="neon-btn rounded-xl font-semibold"
            >

              {editId ? "Update Task" : "Add Task"}

            </button>

          </form>

        </div>

        {/* TASKS */}
        <div className="grid md:grid-cols-3 gap-8">

          {tasks.map((task) => (

            <div
              key={task._id}
              className={`glass rounded-[30px] p-6 relative overflow-hidden border ${
                task.completed
                  ? "border-green-500"
                  : "border-slate-700"
              }`}
            >

              {/* IMAGE */}
              {task.image && (

                <img
                  src={task.image}
                  alt="task"
                  className="w-full h-52 object-cover rounded-2xl mb-5"
                />

              )}

              <h2 className="text-2xl font-bold gradient-text mb-4">
                {task.title}
              </h2>

              <p className="text-gray-300 leading-8 mb-5">
                {task.description}
              </p>

              {/* DATE */}
              <p className="text-sm text-cyan-400 mb-6">

                Created:
                {" "}
                {new Date(task.createdAt)
                  .toLocaleString()}

              </p>

              {/* COMPLETE BUTTON */}
              <div className="mb-5">

                <button
                  onClick={() => completeTask(task._id)}
                  className={`px-5 py-3 rounded-xl w-full font-semibold ${
                    task.completed
                      ? "bg-green-500"
                      : "bg-gray-700"
                  }`}
                >

                  {task.completed
                    ? "✅ Completed"
                    : "⬜ Mark Complete"}

                </button>

              </div>

              {/* ACTIONS */}
              <div className="flex gap-4">

                <button
                  onClick={() => editTask(task)}
                  className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-3 rounded-xl w-full"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task._id)}
                  className="bg-red-500 hover:bg-red-600 transition px-5 py-3 rounded-xl w-full"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;