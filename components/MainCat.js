import Image from "next/image";

export default function MainCat() {
  return (
    <div className="p-24 mt-4">
      <h2 className="text-3xl font-bold mb-2">Categories</h2>
      <div className="border-b border-black w-full mb-4"></div>
      <div>
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
          <div className="bg-slate-300 flex justify-center items-center text-2xl relative">
            <Image
              src={
                "https://images.pexels.com/photos/2537658/pexels-photo-2537658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Joen Nguyen photo from pexels"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">T-shirts</h2>
          </div>

          <div className="bg-slate-300 flex justify-center items-center text-2xl row-span-2 relative">
            <Image
              src={
                "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="EVG Kowalievska photo from pexels"
              width={1800}
              height={2200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">Dresses</h2>
          </div>

          <div className="bg-slate-300 flex justify-center items-center text-2xl col-span-2 relative">
            <Image
              src={
                "https://images.pexels.com/photos/4091200/pexels-photo-4091200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Anastasia Shuraeva photo from pexels"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">Sweaters</h2>
          </div>

          <div className="bg-slate-300 flex justify-center items-center text-2xl ">
            <Image
              src={
                "https://images.pexels.com/photos/1317712/pexels-photo-1317712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Mika Borgia photo from pexels"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">Jackets</h2>
          </div>

          <div className="bg-slate-300 flex justify-center items-center text-2xl ">
            <Image
              src={
                "https://images.pexels.com/photos/14663127/pexels-photo-14663127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Semih Akdağ photo from pexels"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">Skirts</h2>
          </div>

          <div className="bg-slate-300 flex justify-center items-center text-2xl ">
            <Image
              src={
                "https://images.pexels.com/photos/10638564/pexels-photo-10638564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="Joen Nguyen photo from pexels"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
            <h2 className="absolute text-2xl font-bold text-white">Shirts</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
