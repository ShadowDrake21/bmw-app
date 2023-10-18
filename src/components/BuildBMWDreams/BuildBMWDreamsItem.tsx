import { useRef } from 'react'
import { IBuildBMWDreams } from '../../static/buildBMWDreams'
import { useInView } from 'framer-motion'

const BuildBMWDreamsItem = (dreamBMW: IBuildBMWDreams) => {
  const { photo, title, link } = dreamBMW
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? 'none' : 'translateY(50px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
        }}
      >
        <div>
          <img className="w-full" src={photo} alt={title} />
        </div>
        <div className="text-center sm:pt-3">
          <h5 className="text-base leading-[20px] text-[#77787b] font-normal mb-[5px] sm:text-lg sm:leading-[22px] sm:tracking-[-0.1px] xl:text-xl xl:leading-6">
            {title}
          </h5>
          <a
            href={link}
            className="pb-[2px] relative after:content-[''] after:w-full after:h-[1px] after:absolute after:bottom-0 after:left-0 after:bg-[#221f1f]"
          >
            <span className="text-[#221f1f] text-xs font-bold tracking-[0.25px] capitalize transition-all duration-150 hover:text-[#1d55a2] sm:text-[15px] sm:leading-[18px] xl:text-base xl:leading-5">
              Start Designing
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BuildBMWDreamsItem
