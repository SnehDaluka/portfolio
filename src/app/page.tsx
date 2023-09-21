import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-[100%] min-h-[81vh] md:flex items-center justify-center p-5">
      <div className="md:w-[50%] min-h-[100%] flex items-center justify-center animate-show">
        <div className="image_container m-4 mx-4">
          <Image
            src="/profile/mypic.png"
            className="profile_img"
            width={400}
            height={400}
            alt="profile_pic"
          />
        </div>
      </div>
      <div className="md:w-[50%] animate-show_right">
        <h1 className="heading">
          <span className="my-2">I am</span>{" "}
          <span className="blue_gradient">Sneh Kumar Daluka</span>
        </h1>
        <h2 className="font-satoshi text-2xl my-2">
          A Full Stack Web Developer
        </h2>
        <div>
          <button className="home_button">
            <Link href="/about">About Me</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
