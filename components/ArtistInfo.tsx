import Image from "next/image";
import ButtonAction from "./atoms/ButtonAction";
import IconPersonMini from "./svgs/IconPersonMini";


interface IArtistInfoProps {
  image: string;
  title: string;
  description: string;
  votes: number;
  content: string;
}


const ArtistInfo : React.FC<IArtistInfoProps> = ({image,title,description,votes,content}: IArtistInfoProps) => {
  return (
    <div className="h-381 w-9/12 flex justify-between mb-52 mt-10 ml-auto mr-auto max-md:flex-col max-md:gap-y-5 max-md:w-11/12 max-md:h-550">
        <div className="h-full flex flex-col justify-between pr-10 max-md:justify-between max-md:gap-y-5">
          <h2 className='font-bold'>{content}</h2>
          <div className=" h-28">
            <h1 className="font-bold text-5xl max-md:text-4xl">{title}</h1>
            <p className="h-full w-full overflow-clip text-GRAY DARK py-3">
              {description}
            </p>
          </div>
          <div className="">
            <p className="text-blue-600 pb-2">ladygaga.com</p>
            <div className="flex">
              <IconPersonMini />
              <p>{votes}</p>
            </div>
          </div>
          <div className='max-md:hidden'>
            <ButtonAction name='Votar'/>
          </div>
          
        </div>
        <Image
          className="h-381 w-539 max-md:w-full"
          src={image}
          alt="event image"
          width={100}
          height={100}
        />
        <div className='md:hidden'>
            <ButtonAction name='Votar'/>
        </div>
      </div>
    
  );
};

export default ArtistInfo;