import Image from "next/image";

const Icons = (props: any) => {
  return (
    <div className="icons">
      <Image
        src={`/icons/${props.imgsrc}.svg`}
        width={85}
        height={85}
        alt="icons"
        // className="m-5"
      ></Image>
    </div>
  );
};

export default Icons;
