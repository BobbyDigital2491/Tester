/* eslint-disable no-case-declarations */
import { HMSVirtualBackgroundTypes } from "@100mslive/hms-virtual-background";
export function getRandomVirtualBackground() {
  const backgroundList = [
    {
      background: HMSVirtualBackgroundTypes.BLUR,
      backgroundType: HMSVirtualBackgroundTypes.BLUR,
    },
  ];

  const images = [
    "https://www.100ms.live/images/vb-1.jpeg",
    "https://b3222384.smushcdn.com/3222384/wp-content/uploads/2020/07/Zoom-books-2.jpg?lossy=2&strip=1&webp=1",
    "https://assets.techrepublic.com/uploads/2021/03/zoom-bookcase-background-2.jpg",
    "https://resources.owllabs.com/hs-fs/hubfs/Zoom_BG7_Sudy-jpg.jpeg?width=887&name=Zoom_BG7_Sudy-jpg.jpeg",
    "https://i.redd.it/more-virtual-backgrounds-sci-fi-themes-v0-2mgifpzhevxa1.jpg?width=1456&format=pjpg&auto=webp&s=b707620ec5b279c1dfd3abb3740bc02bce05812d",
    "https://www.denofgeek.com/wp-content/uploads/2020/04/Marvel-Zoom.jpg",
    "https://marketplace.canva.com/EAD29kruoSY/2/0/1600w/canva-outer-space-video-virtual-background-Lvz5N5ZWous.jpg",
  ].map(url => ({
    background: url,
    backgroundType: HMSVirtualBackgroundTypes.IMAGE,
  }));

  backgroundList.push(...images);

  /* 
   //TODO: update with a better quality gif.
  const gifList = [
    {
      background: "https://www.100ms.live/images/vb-1.gif",
      backgroundType: HMSVirtualBackgroundTypes.GIF,
    },
  ];
  backgroundList.push(...gifList); 
  */

  const videoList = [
    "https://www.100ms.live/images/video-1.mp4",
    "https://www.100ms.live/images/video-2.mp4",
    "https://www.100ms.live/images/video-5.mp4",
    "https://www.100ms.live/images/video-7.mp4",
    "https://www.100ms.live/images/video-8.mp4",
  ].map(url => ({
    background: url,
    backgroundType: HMSVirtualBackgroundTypes.VIDEO,
  }));
  backgroundList.push(...videoList);

  const randomIdx = Math.floor(Math.random() * backgroundList.length);
  const virtualBackground = backgroundList[randomIdx];
  switch (virtualBackground.backgroundType) {
    case HMSVirtualBackgroundTypes.IMAGE:
      const img = document.createElement("img");
      img.alt = "VB";
      img.src = backgroundList[randomIdx].background;
      virtualBackground.background = img;
      return virtualBackground;
    case HMSVirtualBackgroundTypes.VIDEO:
      const videoEl = document.createElement("video");
      videoEl.src = backgroundList[randomIdx].background;
      virtualBackground.background = videoEl;
      return virtualBackground;
    default:
      return virtualBackground;
  }
}
