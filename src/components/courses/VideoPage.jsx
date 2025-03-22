import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import topic_videos_1 from "../../backend/video_details/video_details_Web Development.json";
import topic_videos_2 from "../../backend/video_details/video_details_Mobile App Development.json";
import topic_videos_3 from "../../backend/video_details/video_details_Data Structures.json";
import topic_videos_4 from "../../backend/video_details/video_details_Machine Learning.json";
import topic_videos_5 from "../../backend/video_details/video_details_Object Oriented Programming.json";
import topic_videos_6 from "../../backend/video_details/video_details_Artificial Intelligence.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const courses = [
    { title: "Web Development", data: topic_videos_1 },
    { title: "Mobile Development", data: topic_videos_2 },
    { title: "Data Structures", data: topic_videos_3 },
    { title: "Machine Learning", data: topic_videos_4 },
    { title: "Object Oriented Programming", data: topic_videos_5 },
    { title: "Artificial Intelligence", data: topic_videos_6 },
];

const VideoPage = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        const course = courses[id - 1];
        if (course) {
            setData(course.data);
        }
    }, [id]);

    if (!data) return <p className="text-center text-lg font-semibold">Loading...</p>;

    return (
       <>
       <Navbar/>
       <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">{courses[id - 1].title}</h1>
            <div className="flex justify-center space-x-4 mb-6">
                <a href="/summary" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Summary</a>
                <a href="/doubts" className="bg-green-500 text-white px-4 py-2 rounded-lg">Doubts</a>
                <a href="/quiz" className="bg-red-500 text-white px-4 py-2 rounded-lg">Quiz</a>
            </div>
            <div className="space-y-4">
                {data.map((video, index) => {
                    const videoId = video.url.split("v=")[1]?.split("&")[0];
                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    return (
                        <div
                            key={index}
                            className="flex items-center p-4 border rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
                            onClick={() => window.open(video.url, "_blank")}
                        >
                            <img
                                src={thumbnailUrl}
                                alt={video.title}
                                className="w-32 h-20 object-cover rounded-lg mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{index + 1}. {video.title}</h2>
                                <p className="text-sm text-gray-600">Duration: {video.duration} seconds</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        <Footer/>
       </>
    );
};

export default VideoPage;