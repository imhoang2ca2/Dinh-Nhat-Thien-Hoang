import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const BannerMiddle = () => {
  const { theme } = useTheme()
  return (
    <div className={cn('mt-8 bg-black-200 flex items-center px-32 ', theme === 'dark' && 'bg-slate-500')}>
      <div className='flex py-16'>
        <div className='flex flex-col gap-8'>
          <h1 className='font-bold text-4xl'>Đào tạo mọi ngành nghề, chúng tôi có rất nhiều khóa học theo nhu cầu của bạn cho bạn thỏa sức lựa chọn</h1>
          <Button className='w-min bg-yellow-400 hover:bg-yellow-300'>Liên hệ ngay</Button>
        </div>
      </div>
      <div>
        <Image
          className='object-cover'
          height={600}
          width={600}
          alt='banner'
          src='/data/banner/remove.png'
        />
      </div>
    </div>
  )
}

export default BannerMiddle
