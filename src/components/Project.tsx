interface ProjectProps {
  project: {
    title: string;
    src: string;
    color: string;
  };
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
}

const Project = ({ project, index, setModal }: ProjectProps) => {
  console.log(index);
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="flex flex-row group first:border-t hover:opacity-40 ease-linear transition-all duration-200 text-black border-b justify-between items-center cursor-pointer w-full border-black py-5 px-2">
      <h2 className="text-6xl font-normal m-0 transition-transform transform group-hover:-translate-x-3">
        {project.title}
      </h2>
      <p className="ml-20 transition-transform transform group-hover:translate-x-3">
        Design & Development
      </p>
    </div>
  );
};

export default Project;
