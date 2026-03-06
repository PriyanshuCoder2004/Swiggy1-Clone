
export default function Discount({data}){
    // console.log(data);
    return(
        <div className="shrink-0 flex border w-82 gap-2 p-3 rounded-2xl border-gray-400">
        <div>
                <img className="w-12 h-12" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+data?.info?.offerLogo}></img>
        </div>
        <div>
            <p className="font-extrabold text-[18px] text-gray-900">{data?.info?.header}</p>
            <p className="text-[14px] text-gray-500 font-bold">{data?.info?.couponCode ?? data?.info?.offerTag}</p>
        </div>
        </div>
    )
}