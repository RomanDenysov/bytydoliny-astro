import React from "react";

type Props = {
  item: {
    img: string;
    alt: string;
  };
}

const Lightbox = ({ item }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
     <>
      <button
        onClick={() => toggle()}
        className="cursor-pointer mx-auto relative group max-w-[350px] max-h-[350px] overflow-hidden rounded-2xl transition-all delay-150 ease-in-out"
      >
        <img
          src={item.img}
          alt={item.alt}
          className="mx-auto group-hover:scale-105 size-full shadow-sh object-cover transition-all delay-150 ease-in-out aspect-square rounded-2xl max-w-[350px] max-h-[350px]"
        />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => toggle()}
        >
          <div className="relative">
            <button
              className="fixed top-3 right-4 text-white text-3xl"
              onClick={() => toggle()}
            >
              &times;
            </button>
            <img
              src={item.img}
              alt={item.alt}
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </>
  )
};

export default Lightbox;
