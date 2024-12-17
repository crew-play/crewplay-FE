"use client";

import { useEffect, useState } from "react";
import TodayNewsDescription from "./components/today-news-description";
import TodayNewsList from "./components/today-news-list";
import TodayNewsMenu from "./components/today-news-menu";
import useGetTodayIssue from "./hooks/use-get-today-issue";
import { useAtom } from "jotai";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";

export type TSelectedMenu = "news" | "video";

export default function TodayNewsPage() {
  const [selectedMenu, setSelectedMenu] = useState<TSelectedMenu>("news");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  const { data, isLoading, isError } = useGetTodayIssue(selectedMenu);

  const handleClickTab = (type: TSelectedMenu) => {
    setSelectedMenu(type);
  };

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!data || !data.data) return <div>데이터 X</div>;

  return (
    <>
      <TodayNewsDescription />
      <TodayNewsMenu selectedMenu={selectedMenu} onClick={handleClickTab} />
      <TodayNewsList todayIssueList={data.data.dataList} />
    </>
  );
}
