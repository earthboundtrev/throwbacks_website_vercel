import ArcadeMenu from '../components/ArcadeMenu'
import MenuCarousel from '../components/MenuCarousel'

const menuImages = [
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/chicken_sandwhich.jpg",
    alt: "Chicken sandwhich with fries and ketchup"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/ham_and_cheese_sandwhich.jpg",
    alt: "Ham and cheese sandwhich"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/pizza_and_chips.jpg",
    alt: "Pizza and Chips"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/onion_rings.jpg",
    alt: "Onion Rings"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/pretzel.jpg",
    alt: "Pretzels"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/quesdilla.jpg",
    alt: "Quesdilla"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/nuggets.jpg",
    alt: "Nuggets"
  },
  {
    url: "https://pub-ffac2d7c13df4c70bc02719f375f929c.r2.dev/sam_adams_pumpkin_ale.jpg",
    alt: "Sam Adams"
  },
  
]

export default function MenuPage() {
  return (
    <div>
      <ArcadeMenu />
      {/* <MenuCarousel images={menuImages} /> */}
    </div>
  )
} 