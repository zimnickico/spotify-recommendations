import Image from "next/image";

export function Images() {
  return (
    <div className="absolute w-full overflow-hidden -z-10">
      <Image
        width={300}
        height={300}
        alt="Image"
        src={"https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"}
        style={{ transform: "translate(-3vw, 2vh)" }}
        className="w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-lg shadow-lg"
      />
      <Image
        width={300}
        height={300}
        alt="Image"
        src={"https://i.scdn.co/image/ab67616d0000b2732c5b24ecfa39523a75c993c4"}
        style={{ transform: "translate(86vw, -3vh)" }}
        className="w-32 h-32 sm:w-52 sm:h-52 md:w-80 md:h-80 rounded-lg shadow-lg"
      />
    </div>
  );
}
