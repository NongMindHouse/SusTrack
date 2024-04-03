import Loading from "@/components/Loading";
import ProjectCard from "@/components/Projects/ProjectCard";
import { Project } from "@/types/Model";
import { Axios } from "@/utils/Axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const [projectDetail, setProjectDetail] = useState<Project>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  const handleGetProject = useCallback(async (): Promise<void> => {
    try {
      const res = await Axios.get(`/api/projects/${params.id}`);

      if (res.status === 200) {
        setProjectDetail({ ...res.data.data });
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetProject();
  }, [handleGetProject]);

  if (loading) return <Loading />;
  return (
    <div className="flex justify-center w-screen bg-white bg-[url('/images/bangkok-map-blur.png')]">
      <div className="bg-gray-100 relative overflow-hidden rounded-b-2xl w-[60em] mb-6 shadow-xl">
        {/* Arrow Back */}
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="absolute left-5 top-5 bg-white w-8 h-8 rounded hover:drop-shadow-lg hover:scale-105 transition"
        >
          <img src="/icon/arrow_down.png" className="absolute left-2 top-3 w-4 rotate-90 drop-shadow-2xl" alt="arrow" />
        </button>

        {/* Banner */}
        <div className="overflow-hidden">
          <img
            src={projectDetail ? projectDetail.bannerUrl : "https://flowbite.com/docs/images/blog/image-1.jpg"}
            alt="banner"
            className="h-[400px] object-cover w-full"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col py-5 px-10 lg:p-10">
          <h1 className="text-3xl font-extrabold">{projectDetail?.name}</h1>
          <div className="font-bold">{projectDetail?.organization}</div>
          <div className="flex">
            <p>วันที่เริ่มโครงการ: {projectDetail?.date?.toString()}</p>
            <p className="pl-20">ระยะเวลาโครงการ (วัน): - วัน</p>
          </div>

          {/* Description */}
          {projectDetail?.description ? (
            <p className="mt-5 mb-5" dangerouslySetInnerHTML={{ __html: projectDetail?.description }}></p>
          ) : null}

          <Link
            to={projectDetail ? projectDetail.websiteUrl : ""}
            target="_blank"
            className="block text-center w-fit bg-navy text-sm p-1 px-3 rounded-2xl text-white hover:bg-blue-700 transition duration-100 hover:scale-[1.03]"
          >
            เยี่ยมชมเว็บไซต์กิจกรรม
          </Link>

          <hr className="mx-6 my-2 md:my-5 bg-gray-300" />

          {/* Avatar */}
          <div className="flex justify-center items-center sm:gap-x-4 md:gap-x-10">
            <img src="/images/no_avatar.jpg" alt="Avatar" className="h-28 rounded-full" />
            <div>
              <h1 className="sm:text-xl font-bold pb-4">{projectDetail?.organization}</h1>
              <Link
                to={""}
                className="block text-center w-fit bg-navy text-sm p-1 px-3 rounded-2xl text-white hover:bg-blue-700 transition duration-100 hover:scale-[1.03]"
              >
                เยี่ยมชมหน่วยงาน
              </Link>
            </div>
          </div>

          <div className="flex justify-between py-4">
            <p>โครงการอื่นๆ</p>
            <Link to="/projects" className="hover:underline">
              ดูทั้งหมด →
            </Link>
          </div>
          <div className="flex gap-x-6">
            <ProjectCard
              id="2"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
            <ProjectCard
              id="3"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
            <ProjectCard
              id="3"
              title="Tetas"
              image="https://fastly.picsum.photos/id/658/536/354.jpg?hmac=lJsBY1i-cotZRX7y_Gs4NWkIaCtyhT3HhAeLnRpra8k"
              desc="some description"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
