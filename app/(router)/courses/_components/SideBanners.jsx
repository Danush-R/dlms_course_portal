import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {

    const [sideBannerList, setSideBannerList] = useState();

    useEffect(()=>{
        getSideBanners();
    },[])

    const getSideBanners=()=>{
        GlobalApi.getSideBanner().then(resp=>{
            console.log(resp);
            setSideBannerList(resp.sideBanners) // <-- Corrected typo here
        })
    }


  return (
    <div>
        {sideBannerList && sideBannerList.map((item,index)=>( // <-- Check if sideBannerList is not null or undefined
            <div key={index}>
                <Image src={item.banner.url} alt='/banner' width={400} height={300} 
                onClick={()=>window.open(item?.url)}
                className='rounded-2xl cursor-pointer' />
            </div>
        ))}
    </div>
  )
}

export default SideBanners;
