import InputUI from '@/components/input'
import { title } from '@/components/primitives'
import { Button } from '@nextui-org/button'
import './styles.css'

export default function Home() {
  return (
    <section className='min-h-screen pattern max-w-[1200px] mx-auto'>
      <div className='flex flex-col items-center justify-center min-h-screen gap-5 text-center'>
        <h1 className={`${title({ color: 'pink' })}`}>Computer vision</h1>
        <div>
          <InputUI />
          <div className='flex justify-center gap-2 mt-5'>
            <Button color='primary'>Analyze</Button>
            <Button
              radius='full'
              className='text-white shadow-lg bg-gradient-to-tr from-pink-500 to-yellow-500'
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
