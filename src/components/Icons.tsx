import Image from "next/image";

const Icons = (props: any) => {
  return (
    <div className="icons">
      <Image
        src={`/icons/${props.imgsrc}.svg`}
        width={85}
        height={85}
        alt="icons"
      ></Image>
    </div>
  );
};

export default Icons;
