import Image from "next/image";
import Link from "next/link";

interface FileImageProps {
  imgUrl: string;
  imgAlt: string;
  sourceUrl: string;
  sourceAlt: string;
}

export default function FileImage({
  imgUrl,
  imgAlt,
  sourceUrl,
  sourceAlt,
}: FileImageProps) {
  return (
    <>
      <div className="bg-black rounded-lg">
        <Image
          className="w-full rounded-t-lg object-cover"
          src={imgUrl}
          alt={imgAlt}
          width={500}
          height={500}
          quality={80}
        />
        <div className="text-sm font-medium text-gray-500 text-right px-8 pb-8">
          <Link
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold"
          >
            {sourceAlt}
          </Link>
        </div>
      </div>
    </>
  );
}
