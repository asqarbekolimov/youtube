import { AiFillYoutube, AiOutlineExclamation } from 'react-icons/ai';
import { BsFire } from 'react-icons/bs';
import { CiStreamOn } from 'react-icons/ci';
import { PiMusicNoteLight, PiStudentFill } from 'react-icons/pi';
import { MdOutlineSportsEsports, MdSubscriptions } from 'react-icons/md';
import { GoTrophy } from 'react-icons/go';
import { SiMarketo, SiYoutubemusic, SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutubeKids, TbPlayerPlay } from 'react-icons/tb';

export const sidebarItem = [
  {
    title: '',
    links: [
      {
        path: '/',
        title: 'Main',
        icon: AiFillYoutube,
      },
      {
        path: '/shorts',
        title: 'Shorts',
        icon: TbPlayerPlay,
      },
      {
        path: '',
        title: 'Subscription',
        icon: MdSubscriptions,
      },
    ],
  },
  {
    title: 'Meeting',
    links: [
      {
        path: '',
        title: 'Trending',
        icon: BsFire,
      },
      {
        path: '',
        title: 'Music',
        icon: PiMusicNoteLight,
      },
      {
        path: '',
        title: 'Live',
        icon: CiStreamOn,
      },
      {
        path: '',
        title: 'Sport',
        icon: GoTrophy,
      },
      {
        path: '',
        title: 'Gaming',
        icon: MdOutlineSportsEsports,
      },
      {
        path: '',
        title: 'Education',
        icon: PiStudentFill,
      },
      {
        path: '',
        title: 'Beauty',
        icon: SiMarketo,
      },
    ],
  },
  {
    title: 'YouTube Services',
    links: [
      {
        path: '',
        title: 'YouTube Studio',
        icon: SiYoutubestudio,
      },
      {
        path: '',
        title: 'YouTube Music',
        icon: SiYoutubemusic,
      },
      {
        path: '',
        title: 'YouTube Kids',
        icon: TbBrandYoutubeKids,
      },
    ],
  },
  {
    title: '',
    links: [
      {
        path: '',
        title: 'Settings',
        icon: SiYoutubestudio,
      },
      {
        path: '',
        title: 'Report',
        icon: SiYoutubemusic,
      },
      {
        path: '',
        title: 'Help',
        icon: '',
      },
      {
        path: '',
        title: 'FAQ',
        icon: AiOutlineExclamation,
      },
    ],
  },
];

export const Catogories = [
  {
    name: 'programming',
    title: 'Programming',
  },
  {
    name: 'all',
    title: 'All',
  },
  {
    name: 'gaming',
    title: 'Gaming',
  },
  {
    name: 'music',
    title: 'Music',
  },
  {
    name: 'sport',
    title: 'Sport',
  },
  {
    name: 'news',
    title: 'news',
  },
  {
    name: 'subject',
    title: 'Subject',
  },
  {
    name: 'live',
    title: 'Live',
  },
  {
    name: 'football',
    title: 'Football',
  },
  {
    name: 'art',
    title: 'Art',
  },
  {
    name: 'beauty',
    title: 'Beauty',
  },
];
