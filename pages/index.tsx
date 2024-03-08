import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface GridItem {
  title: string;
  images: Array<{
    src: string;
    height: number;
  }>
}

const gridItems: GridItem[] = [
  {
    title: "Drone",
    images: [
      {
        src: "/drone1.jpeg",
        height: 30
      },
      {
        src: "/drone2.jpeg",
        height: 30
      },
      {
        src: "/drone3.jpeg",
        height: 30
      },
      {
        src: "/drone4.jpeg",
        height: 30
      }
    ]
  },
  {
    title: "Box",
    images: [
      {
        src: "/box1.jpeg",
        height: 30
      },
      {
        src: "/box2.jpeg",
        height: 30
      },
      {
        src: "/box3.jpeg",
        height: 30
      }
    ]
  },
  {
    title: "Robot",
    images: [
      {
        src: "/robot1.jpeg",
        height: 30
      },
      {
        src: "/robot2.jpeg",
        height: 30
      },
      {
        src: "/robot3.jpeg",
        height: 30
      }
    ]
  }
]

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Stuff I've worked on!`}</h1>
      {gridItems.map((item, index) => (
        <div className={styles["grid-item"]} key={index}>
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 0 },
                items: 1,
              }
            }}
          >
            {(item.images.map((image, index) => {
              return (
                <>
                  <div className={styles["image-container"]} style={{ height: `${image.height}rem` }}>
                    <Image className={styles.image} src={image.src} fill objectFit='cover' alt={""} />
                  </div>
                </>
              )
            }))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}
