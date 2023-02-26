import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseLectures } from "../../redux/actions/course";
import Loader from "../Loader";
export default function CoursePage() {
  const [lectureNumber, setLectureNumber] = useState(0);
  const { lectures, loading } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);
  return loading ? (
    <Loader />
  ) : (
    <div className="mb-20">
      {/* video player */}
      {lectures && lectures.length > 0 ? (
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <video
              width={"100%"}
              controls
              src={lectures[lectureNumber].video.url}
            ></video>
            <div className="p-5 flex flex-col gap-2">
              <h1 className="font-bold text-2xl">{`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}</h1>
              <p className="text-base">{`${lectures[lectureNumber].description}`}</p>
            </div>
          </div>
          {/* other lectures */}
          <div className="flex mt-8 flex-col items-center w-full">
            {lectures.map((item, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={item._id}
                className="p-3"
              >
                <p className="font-medium text-lg">
                  #{index + 1} {item.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2>No Lectures</h2>
      )}
    </div>
  );
}
