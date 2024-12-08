"use client";

import { useState } from "react";
import TodayNewsDescription from "./components/today-news-description";
import TodayNewsMenu from "./components/today-news-menu";
import TodayNewsList from "./components/today-news-list";

export type TSelectedMenu = "news" | "video";

export default function TodayNewsPage() {
  const [selectedMenu, setSelectedMenu] = useState<TSelectedMenu>("news");

  const handleClickTab = (type: TSelectedMenu) => {
    setSelectedMenu(type);
  };

  return (
    <>
      <TodayNewsDescription />
      <TodayNewsMenu selectedMenu={selectedMenu} onClick={handleClickTab} />
      <TodayNewsList />
    </>
  );
}
