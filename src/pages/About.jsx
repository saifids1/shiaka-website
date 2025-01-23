// import { BreadcrumbsWithIcon } from '@/components/BreadcrumbsWithIcon'
import { Breadcrumbs, Typography } from "@material-tailwind/react"
import Link from "next/link"
const About = () => {
  return (
    <>
      <div className='mt-[4.5rem] flex justify-center items-center bg-[#263d41] h-[220px]'>
        {/* <BreadcrumbsWithIcon/> */}
        <Breadcrumbs className="!bg-[#fff]">
          <Link href="/" className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link href="/" className="opacity-60">
            <span className="font-bold text-black">Home</span>
          </Link>
          <Link href="/About" className="font-bold text-black">About Us</Link>
        </Breadcrumbs>
      </div>


      <div className='container mx-auto px-9 pb-10'>
      <div className="pb-10">
      <Typography className="text-center slider-text leading-0" variant="h2">Specialists In <br className="mb-0"/> Modern Construction</Typography>
      
      </div>
        <div className="flex justify-center">
          <div className='flex items-center justify-center'>
            <Typography className="w-3/4 text-center">we are committed to staying up-to-
              date with the latest trends and
              technologies to deliver innovative
              and efficient solutions. Our team of experts is equipped with the skills and knowledge to tackle even the most complex projects.</Typography>
          </div>
          <div className=''>
            <div className="img-sec w-[500px]">
              <img src="/about/about-pic.jpg" className="about-pic rounded-md shadow-2xl shadow-[#7fb2e78f]" alt="about pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About