// * npm install gsap


import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from '@/lib/utils'
import header1 from '@/assets/images/header1.webp'
import header2 from '@/assets/images/header2.webp'
import header3 from '@/assets/images/header3.webp'
import header4 from '@/assets/images/header4.webp'
import header5 from '@/assets/images/header5.webp'
import user1 from '@/assets/images/user1.jpg'
import user2 from '@/assets/images/user2.jpg'
import user3 from '@/assets/images/user3.jpg'
import user4 from '@/assets/images/user4.jpg'
import user5 from '@/assets/images/user5.jpg'
import Star from '@/assets/svg/star.svg?react'
import { constants } from '@/lib/constants'

gsap.registerPlugin(ScrollTrigger)

const images = [
  {
    name: header1,
    key: "img1",
    type: 'image',
    position: '-rotate-30 mt-40 lg:mt-60 -mr-8 z-1',
  },
  {
    name: header2,
    key: "img2",
    type: 'image',
    position: '-rotate-16 mt-16 -mr-6 z-2',
  },
  {
    name: header3,
    key: "img3",
    type: 'image',
    position: 'rotate-0 z-3',
  },
  {
    name: header4,
    key: "img4",
    type: 'image',
    position: 'rotate-16 mt-16 -ml-6 z-2',
  },
  {
    name: header5,
    key: "img5",
    type: 'image',
    position: 'rotate-30 mt-40 lg:mt-60 -ml-8 z-1',
  },
]

const users = [user1, user2, user3, user4, user5]

export default function TrustpilotReviews() {
  useEffect(() => {
    const animations = [
      {
        id: 'img1',
        removeClasses: ['-rotate-30', 'mt-40', 'lg:mt-60', '-mr-8'],
        addClasses: [],
      },
      {
        id: 'img2',
        removeClasses: ['-rotate-16', 'mt-16', '-mr-6'],
        addClasses: [],
      },
      {
        id: 'img3',
        removeClasses: ['rotate-0', 'z-3'],
        addClasses: [],
      },
      {
        id: 'img4',
        removeClasses: ['rotate-16', 'mt-16', '-ml-6'],
        addClasses: [],
      },
      {
        id: 'img5',
        removeClasses: ['rotate-30', 'mt-40', 'lg:mt-60', '-ml-8'],
        addClasses: [],
      },
      {
        id: 'trustpilot-reviews',
        removeClasses: ['mt-[-8rem]', 'lg:mt-[-24rem]'],
        addClasses: ['mt-[-3rem]', 'lg:mt-[-14rem]', 'lg:gap-4'],
      },
      {
        id: 'trustpilot-reviews-text',
        removeClasses: ['lg:-mt-20'],
        addClasses: ['mt-10'],
      },
    ];

    animations.forEach(({ id, removeClasses, addClasses }) => {
      const el = document.getElementById(id);
      if (!el) return;

      // 💡 Add Tailwind smooth transition class to every image
      el.classList.add('transition-all', 'duration-900', 'ease-in-out');

      ScrollTrigger.create({
        trigger: el,
        start: '360',
        end: '500',
        scrub: true,
        onEnter: () => {
          el.classList.remove(...removeClasses);
          el.classList.add(...addClasses);
        },
        onLeaveBack: () => {
          el.classList.remove(...addClasses);
          el.classList.add(...removeClasses);
        },
      });
    });
  }, []);



  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div id='trustpilot-reviews' className="flex items-center justify-center w-full lg:w-[80%] mx-auto mt-[-8rem] lg:mt-[-24rem] isolate">
          {images.map((n) =>
            n.type === 'image' ? (
              <img
                id={n.key}
                className={cn(
                  'w-[20%] h-28 lg:h-72 object-cover outline-white outline-4 rounded-lg shadow-xl',
                  n.position,)}
                src={n.name}
                alt="Image"
              />
            ) : (
              <video
                className={cn(
                  'w-[20%] h-28 lg:h-72 object-cover outline-white outline-4 rounded-lg shadow-xl',
                  n.position,
                )}
                src={n.name}
              ></video>
            ),
          )}
        </div>
        <div id='trustpilot-reviews-text' className="mx-auto w-max lg:-mt-20">
          <div className="flex items-center justify-center gap-2 text-xl text-center font-bold">
            <Star className="text-[#04DA8D] w-8 h-8" />
            <span>{constants.trustpilot.title}</span>
          </div>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 items-center justify-center mt-3">
            {users.map((n) => (
              <Avatar>
                <AvatarImage src={n} alt="user" />
              </Avatar>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Star className="text-[#FFBB00] w-4 h-4" />
            <span className="text-md font-semibold">
              {constants.trustpilot.description}
            </span>
            <span className="text-gray-500 text-sm">
              ({constants.trustpilot.reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
