import React from 'react'
import { HStack, VStack, Image } from "@chakra-ui/react";

function CommentItem() {
  return (
    <VStack alignItems="flex-start" justifyContent="center" gap="20px">
    <HStack>
      <div className="rounded-full overflow-hidden w-[31px] h-[31px]">
        <Image className="w-[31px] h-[31px]" src="https://platformboy.com/wp-content/uploads/2022/10/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D8%AE%D8%A7%D9%86%D9%85-%D8%A8%D8%A7-%D9%BE%DB%8C%D8%B1%D8%A7%D9%87%D9%86-%D9%82%D8%B1%D9%85%D8%B2.png" />
      </div>
      <span className='text-[16px] font-medium'>sara</span>
      <span className='text-[16px] font-normal text-[#515457]'>۱۰ ماه پیش</span>
    </HStack>
    <p className='text-[16px] font-light tex-[#515457]'>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
      استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
      در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
      نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
    </p>
  </VStack>
  )
}

export default CommentItem